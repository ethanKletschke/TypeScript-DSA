function partition<T extends string | number | bigint>(
  arr: T[],
  low: number,
  high: number
): number {
  const pivot: T = arr[high];

  let i = low - 1;

  for (let j = low; j < high; j++) {
    if (arr[j] <= pivot) {
      i += 1;
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
  }

  [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];

  return i + 1;
}
