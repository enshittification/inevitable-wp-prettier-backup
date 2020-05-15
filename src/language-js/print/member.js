"use strict";

const {
  builders: { concat, line, softline, group, indent },
} = require("../../document");
const { isNumericLiteral } = require("../utils");
const { printOptionalToken } = require("./misc");

function printMemberExpression(path, options, print) {
  const n = path.getValue();

  const parent = path.getParentNode();
  let firstNonMemberParent;
  let i = 0;
  do {
    firstNonMemberParent = path.getParentNode(i);
    i++;
  } while (
    firstNonMemberParent &&
    (firstNonMemberParent.type === "MemberExpression" ||
      firstNonMemberParent.type === "OptionalMemberExpression" ||
      firstNonMemberParent.type === "TSNonNullExpression")
  );

  const shouldInline =
    (firstNonMemberParent &&
      (firstNonMemberParent.type === "NewExpression" ||
        firstNonMemberParent.type === "BindExpression" ||
        (firstNonMemberParent.type === "VariableDeclarator" &&
          firstNonMemberParent.id.type !== "Identifier") ||
        (firstNonMemberParent.type === "AssignmentExpression" &&
          firstNonMemberParent.left.type !== "Identifier"))) ||
    n.computed ||
    (n.object.type === "Identifier" &&
      n.property.type === "Identifier" &&
      parent.type !== "MemberExpression" &&
      parent.type !== "OptionalMemberExpression");

  return concat([
    path.call(print, "object"),
    shouldInline
      ? printMemberLookup(path, options, print)
      : group(
          indent(concat([softline, printMemberLookup(path, options, print)]))
        ),
  ]);
}

function printMemberLookup(path, options, print) {
  const parenSpace = options.parenSpacing ? " " : "";
  const parenLine = options.parenSpacing ? line : softline;
  const property = path.call(print, "property");
  const n = path.getValue();
  const optional = printOptionalToken(path);

  if (!n.computed) {
    return concat([optional, ".", property]);
  }

  if (!n.property || isNumericLiteral(n.property)) {
    return concat([optional, "[", parenSpace, property, parenSpace, "]"]);
  }

  return group(
    concat([optional, "[", indent(concat([parenLine, property])), parenLine, "]"])
  );
}

module.exports = { printMemberExpression, printMemberLookup };
