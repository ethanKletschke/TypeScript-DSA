function partition<T>(arr: T[], low: number, high: number): number {
  const newArr = [...arr];
  const pivot: T = arr[high];

  let i = low - 1;

  for (let j = low; j < high; j++) {
    if (newArr[j] <= pivot) {
      i += 1;
      [newArr[i], newArr[j]] = [newArr[j], newArr[i]];
    }
  }

  [newArr[i + 1], newArr[high]] = [newArr[high], arr[i + 1]];

  return i + 1;
}
