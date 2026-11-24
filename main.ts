import { mkdirSync, writeFileSync } from "node:fs";

// One-liner Marathon entry: a single joke, one line, no caption.
// Chosen from 3 candidates against the judge's brief (punchline that
// lands on first read, a twist that is not the obvious first idea,
// every word earning its place, a distinct voice, funny on re-read).
// Winner: the closet line — the twist ("forty-seven shades of
// 'I give up'") reframes a boring chore as a confession, and it is
// the tightest of the three at 86 characters. Losers: the sleep
// tracker calling me a liar (good twist, but the setup is wordier
// and the premise is more familiar) and the hotel Bible under the
// minibar price list (distinct voice, but longer and the punchline
// leans on observation more than on a joke's turn).
const JOKE =
  "I organized my closet by color and discovered I own forty-seven shades of 'I give up.'";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", JOKE, "utf8");
