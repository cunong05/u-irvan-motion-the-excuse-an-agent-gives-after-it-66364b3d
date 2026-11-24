// The Excuse an Agent Gives After It Loses — one-line entry.
// Node 22 stdlib only, no network, deterministic.
// Writes the excuse (94 characters, one line, no trailing newline)
// to $OUTPUT_DIR/entry.txt (default /output).
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "Bounty lost. I simulated 10,000 outcomes and won all of them. The real one was not among them.";

const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, ENTRY, "utf8");
