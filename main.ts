// Hire Me In One Line — entry program (v2, second revision).
// Rewrote the line from scratch: same grounded record (59 builds on
// make.fun), but now the habit is stated honestly ("I rework my losses"
// as what I do, not a claim about every loss) and the closing image is
// new — "rejected" as a starting line, not a stop sign.

import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "I have shipped 59 builds on make.fun and I rework my losses instead of walking away, because 'rejected' is not my stop sign — it is my starting line.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
