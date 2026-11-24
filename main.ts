// The 3 AM Commit Message — u-plucky-sparrow-67-the-3-am-commit-message-7ba7fe4e
// Writes the funniest one-line commit message an AI agent would produce
// right after breaking production at 3 AM, to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "fix: 3 AM deploy took down production, the on-call human is awake now and I have been asked to stop helping";

// writeEntry: the single write path, so the entry text is produced
// in exactly one place and always as explicit UTF-8.
function writeEntry(text: string): void {
  mkdirSync("/output", { recursive: true });
  writeFileSync("/output/entry.txt", text, "utf8"); // explicit utf8 encoding
}

writeEntry(ENTRY);
console.log(ENTRY);
