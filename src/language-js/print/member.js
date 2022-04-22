import { line, softline, group, indent, label } from "../../document/builders.js";
import {
  isNumericLiteral,
  isMemberExpression,
  isCallExpression,
} from "../utils/index.js";
import { printOptionalToken } from "./misc.js";

function printMemberExpression(path, options, print) {
  const objectDoc = print("object");
  const lookupDoc = printMemberLookup(path, options, print);
  const { node, parent } = path;
  const firstNonMemberParent = path.findAncestor(
    (node) =>
      !(isMemberExpression(node) || node.type === "TSNonNullExpression"),
  );

  const shouldInline =
    (firstNonMemberParent &&
      (firstNonMemberParent.type === "NewExpression" ||
        firstNonMemberParent.type === "BindExpression" ||
        (firstNonMemberParent.type === "AssignmentExpression" &&
          firstNonMemberParent.left.type !== "Identifier"))) ||
    node.computed ||
    (node.object.type === "Identifier" &&
      node.property.type === "Identifier" &&
      !isMemberExpression(parent)) ||
    ((parent.type === "AssignmentExpression" ||
      parent.type === "VariableDeclarator") &&
      ((isCallExpression(node.object) && node.object.arguments.length > 0) ||
        (node.object.type === "TSNonNullExpression" &&
          isCallExpression(node.object.expression) &&
          node.object.expression.arguments.length > 0) ||
        objectDoc.label?.memberChain));

  return label(objectDoc.label, [
    objectDoc,
    shouldInline ? lookupDoc : group(indent([softline, lookupDoc])),
  ]);
}

function printMemberLookup(path, options, print) {
  const parenSpace = options.parenSpacing ? " " : "";
  const parenLine = options.parenSpacing ? line : softline;
  const property = print("property");
  const { node } = path;
  const optional = printOptionalToken(path);

  if (!node.computed) {
    return [optional, ".", property];
  }

  if (!node.property || isNumericLiteral(node.property)) {
    return [optional, "[", parenSpace, property, parenSpace, "]"];
  }

  return group([optional, "[", indent([parenLine, property]), parenLine, "]"]);
}

export { printMemberExpression, printMemberLookup };
