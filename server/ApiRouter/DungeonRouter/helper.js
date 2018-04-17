export function getRandomResult(seeds) {
  let step = 0;
  const ranges = [];

  for(const seed of seeds) {
    const minRange = step;
    const maxRange = step + seed.rate;

    ranges.push({ ...seed, minRange, maxRange});
    step += seed.rate;
  }

  const location = Math.random();
  const index = ranges.findIndex(range => location > range.minRange && location < range.maxRange);

  return seeds[index];
}