"use strict";
const docblock = require("jest-docblock");

/**
 * Returns true if the given text contains @format.
 * within its first docblock. False otherwise.
 *
 * @param {String} text text to scan for the format keyword within the first docblock
 */
const shouldFormat = text => {
  const directives = docblock.parse(text);
  return Object.keys(directives).indexOf("format") >= 0;
};

/**
 * Given the src code for a file:
 *   if the first docblock in the file contains @format, do nothing
 *   else return the text but with @format inserted to the first docblock (or a new one generated)
 * 
 * @param String test to ensure has an @format marker in the top docblock
 */
const insertPragma = text => {
  if (shouldFormat(text)) {
    return text;
  }
  const parsedDocblock = docblock.parseWithComments(docblock.extract(text));
  const pragmas = Object.assign({}, { format: "" }, parsedDocblock.pragmas);
  const newDocblock = docblock.print({
    pragmas,
    comments: parsedDocblock.comments
  });
  return `${newDocblock}\n${docblock.strip(text)}`;
};

module.exports = {
  shouldFormat,
  insertPragma
};
