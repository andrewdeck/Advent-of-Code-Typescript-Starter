# Advent Of Code Typesciprt Starter

Starting point for solving [adventofcode.com](adventofcode.com) puzzles in Typescript.

## How to use

1. `npm install`
2. `npm run setup 1`
3. `npm run solve 1`

### Setup Command

Running `npm run setup <day-number>` will create a folder with files for your solution and for your input.
Paste your input from `https://adventofcode.com/<year>/day/<day-number>/input` into input.txt

If you want to change the starting state of solve.ts just update the src/solve.template.ts file.

### Running your code

Run `npm run solve <day-number>` will execute the solve.ts file in the src/day{day-number} folder.

### Unit testing (optional)

In the `main()` function there are example uses of `node:assert` to do Test Driven Development.
This can be very useful, as each AoC problem provides example input/answers to help you validate your solution.
