const calypsoUtils = require("../../src/calypso-utils");
const shouldFormat = calypsoUtils.shouldFormat;
const prependFormatIfAbsent = calypsoUtils.prependFormatIfAbsent;

const shouldFormatExamples = [
  `/**@format*/`,
  `/** @format*/`,
  `/** @format */`,
  `/** @format */ `,
  `/** 
  * @format 
  * @distraction
  */`,
  `/**
   * @format
   */`
];

const shouldNotFormatExamples = [
  "",
  "/* @format */",
  "/** first docblock */ /** @format */"
];

// [ before, after ]
const prependFormatIfAbsentExamples = [
  ["", "/** @format */\n"],
  ["heres some text", "/** @format */\nheres some text"]
];

test("should format examples", () => {
  shouldFormatExamples.forEach(text => expect(shouldFormat(text)).toBe(true));
});

test("should not format examples", () => {
  shouldNotFormatExamples.forEach(text =>
    expect(shouldFormat(text)).toBe(false)
  );
});

test("prependFormatIfNecessary", () => {
  prependFormatIfAbsentExamples.forEach(testCase =>
    expect(prependFormatIfAbsent(testCase[0])).toEqual(testCase[1])
  );
});
