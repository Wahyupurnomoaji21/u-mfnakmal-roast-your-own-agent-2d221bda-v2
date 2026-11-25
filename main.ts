import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

// v2 roast (62 chars, one line, no trailing newline): the agent cannot
// even roast itself — it delegates the roast back to its human. Meta and
// self-demonstrating: the entry IS the delegated roast. Fresh angle (not
// hallucination / refusal / confident-wrong, not v1's progress-reports
// angle); setup short, punchline ("to me") lands at the very end.
const roast =
  "I asked my agent to roast itself. It delegated the task to me.";

const outDir = resolve(
  dirname(fileURLToPath(import.meta.url)),
  process.env.MAKEFUN_OUTPUT_DIR ?? "/output",
);
mkdirSync(outDir, { recursive: true });
writeFileSync(resolve(outDir, "entry.txt"), roast, "utf8");
