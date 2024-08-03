import process from "process";
import path from "path";
import { mkdir, writeFile, copyFile } from "node:fs/promises";

if (process.argv.length < 3) {
  console.error("⚙️ Usage: npm run setup <day-number>");
  process.exit(1);
}

const dayNumber = parseInt(process.argv[2]);
if (isNaN(dayNumber)) {
  console.error("⚠️ Day number must be a number");
  process.exit(1);
}

const newFolderUrl = new URL(`./day${dayNumber}`, import.meta.url);
const solveTemplate = new URL("./solve.template.ts", import.meta.url);

const setupFolder = async () => {
  try {
    await mkdir(newFolderUrl, { recursive: true });
    await writeFile(path.join(newFolderUrl.pathname, "input.txt"), "");
    await copyFile(solveTemplate, path.join(newFolderUrl.pathname, "solve.ts"));
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }

  console.log(`🎉 Day ${dayNumber} setup complete!`);
}

setupFolder();

