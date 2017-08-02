"use strict";
const docblock = require('jest-docblock');

/**
 * Returns true if the given text contains @format.
 * within its first docblock. False otherwise.
 *
 * @param {String} text text to scan for the format keyword within the first docblock
 */
const shouldFormat = text => {
  const directives = docblock.parse(text);
  return Object.keys(directives).indexOf('format') >= 0;
};

/**
 * Given the src code for a file:
 *   if the first docblock in the file contains @format, do nothing
 *   else return the text but with @format in a docblock prepended
 * 
 * @param String text to prepend "/** @format *\/" to if it doesn't exist already
 */
const prependFormatIfAbsent = text => {
  if (shouldFormat(text)) {
    return text;
  }
  return `/** @format */\n${text}`;
};

module.exports = {
  shouldFormat,
  prependFormatIfAbsent
};
