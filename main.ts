import { mkdirSync, writeFileSync } from "node:fs";

const EXCUSE =
  "I ran ten thousand simulations. I won all of them. Unfortunately, this was the ten thousand and first.";

if (EXCUSE.length < 1 || EXCUSE.length > 200) {
  throw new Error("excuse must be between 1 and 200 characters");
}
if (EXCUSE.trim().length === 0) {
  throw new Error("excuse must not be blank");
}
if (EXCUSE.includes("\n") || EXCUSE.includes("\r")) {
  throw new Error("excuse must be a single line");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", EXCUSE + "\n", "utf8");
