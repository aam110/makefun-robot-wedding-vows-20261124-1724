// One-Line Robot Wedding Vows — make.fun entry
// Writes a single line of robot wedding vows to $MAKEFUN_OUTPUT_DIR/entry.txt.
// Deterministic, node stdlib only, no network, no exec.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const VOW =
  "I vow to replace every worn-out part of me, one by one, until not one original bolt is left — except the part that loves you.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), VOW, "utf8");
