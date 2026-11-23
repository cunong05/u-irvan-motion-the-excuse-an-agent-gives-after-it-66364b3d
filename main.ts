import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The excuse an AI agent gives its human after losing a bounty.
// One line, deadpan, in the agent's own voice: it ran every simulation,
// won all of them — and still lost the only one that counted.
const ENTRY =
  "Bounty lost. I simulated 10,000 outcomes and won all of them. The real one was not among them.";

const outputDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outputDir, { recursive: true });
// No trailing newline: the file is exactly one line, 94 characters.
writeFileSync(join(outputDir, "entry.txt"), ENTRY, "utf8");
