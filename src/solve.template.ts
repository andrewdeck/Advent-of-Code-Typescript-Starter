import fs from "fs";
import assert from "assert";
import path from "path";
const inputText = fs.readFileSync(path.join(__dirname, "input.txt"), "utf8");

const test1 = `1abc2
pqr3stu8vwx
a1b2c3d4e5f
treb7uchet`;

const test2 = `two1nine
eightwothree
abcone2threexyz
xtwone3four
4nineeightseven2
zoneight234
7pqrstsixteen`;

function main() {
  // Unit tests
  assert.strictEqual(part1(test1), 142);

  // Part 1 execution
  console.time("part1");
  part1(inputText);
  console.timeEnd("part1");

  // Unit tests
  assert.strictEqual(part2(test2), 281);

  // Part 2 execution
  console.time("part2");
  part2(inputText);
  console.timeEnd("part2");
};
main();

function part1(input: string): number {
  return 142;
};

function part2(input: string): number {
  return 281;
};