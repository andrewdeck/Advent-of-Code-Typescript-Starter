import { execSync } from "child_process";

if (process.argv.length < 3) {
  console.error("⚙️ Usage: npm run solve <day-number>");
  process.exit(1);
}

const dayNumber = parseInt(process.argv[2]);
if (isNaN(dayNumber)) {
  console.error("⚠️ Day number must be a number");
  process.exit(1);
}

execSync(`npx tsx src/day${dayNumber}/solve.ts`);