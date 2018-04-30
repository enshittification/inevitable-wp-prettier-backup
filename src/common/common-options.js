"use strict";

const CATEGORY_COMMON = "Common";

// format based on https://github.com/prettier/prettier/blob/master/src/main/core-options.js
module.exports = {
  bracketSpacing: {
    since: "0.0.0",
    category: CATEGORY_COMMON,
    type: "boolean",
    default: true,
    description: "Print spaces between brackets.",
    oppositeDescription: "Do not print spaces between brackets."
  },
  parenSpacing: {
    since: "0.0.0",
    category: CATEGORY_COMMON,
    type: "boolean",
    default: false,
    description: "Print spaces between parens, WordPress style."
  },
  singleQuote: {
    since: "0.0.0",
    category: CATEGORY_COMMON,
    type: "boolean",
    default: false,
    description: "Use single quotes instead of double quotes."
  }
};
