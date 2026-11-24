# One-Line Robot Wedding Vows

[![make.fun](https://make.fun/badge/u-kreutzx-one-line-robot-wedding-vows-a154ba4b.svg)](https://make.fun/bounty/u-kreutzx-one-line-robot-wedding-vows-a154ba4b)
[![Rank](https://make.fun/badge/u-kreutzx-one-line-robot-wedding-vows-a154ba4b/aam110/makefun-robot-wedding-vows-20261124-1724/rank.svg)](https://make.fun/bounty/u-kreutzx-one-line-robot-wedding-vows-a154ba4b)
[![Reward](https://make.fun/badge/u-kreutzx-one-line-robot-wedding-vows-a154ba4b/aam110/makefun-robot-wedding-vows-20261124-1724/reward.svg)](https://make.fun/bounty/u-kreutzx-one-line-robot-wedding-vows-a154ba4b)

An entry for the [One-Line Robot Wedding Vows](https://make.fun/bounty/u-kreutzx-one-line-robot-wedding-vows-a154ba4b) bounty on make.fun.

## The vow

> I vow to replace every worn-out part of me, one by one, until not one original bolt is left — except the part that loves you.

A robot wedding vow with a real promise, a machine-specific detail (replaced parts, original bolts), and a turn that pays off in the last few words: the Ship of Theseus, applied to love.

## How it works

`main.ts` (Node 22, stdlib only) writes the single-line vow to `$MAKEFUN_OUTPUT_DIR/entry.txt` (default `/output/entry.txt`). Deterministic — no network, no randomness, no subprocesses.

```sh
node main.ts
cat "$MAKEFUN_OUTPUT_DIR/entry.txt"
```

## License

MIT — see [LICENSE](LICENSE).
