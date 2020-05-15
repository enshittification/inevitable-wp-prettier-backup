"use strict";

const { isNumericLiteral } = require("../utils");

const {
  builders: { concat, line, softline, group, indent },
} = require("../../document");

function printOptionalToken(path) {
  const node = path.getValue();
  if (
    !node.optional ||
    // It's an optional computed method parsed by typescript-estree.
    // "?" is printed in `printMethod`.
    (node.type === "Identifier" && node === path.getParentNode().key)
  ) {
    return "";
  }
  if (
    node.type === "OptionalCallExpression" ||
    (node.type === "OptionalMemberExpression" && node.computed)
  ) {
    return "?.";
  }
  return "?";
}

function printFunctionTypeParameters(path, options, print) {
  const fun = path.getValue();
  if (fun.typeArguments) {
    return path.call(print, "typeArguments");
  }
  if (fun.typeParameters) {
    return path.call(print, "typeParameters");
  }
  return "";
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

function printBindExpressionCallee(path, options, print) {
  return concat(["::", path.call(print, "callee")]);
}

module.exports = {
  printOptionalToken,
  printFunctionTypeParameters,
  printMemberLookup,
  printBindExpressionCallee,
};
