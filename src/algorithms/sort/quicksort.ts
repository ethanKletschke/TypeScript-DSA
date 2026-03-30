type Comparable = number | string | bigint;

function partition<T extends Comparable>(
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

export function quicksort<T extends Comparable>(arr: T[], low = 0, high: number | null = null): void {
  if (high === null) {
    high = arr.length - 1;
  }

  if (low < high) {
    const pivotIndex = partition(arr, low, high);

    quicksort(arr, low, pivotIndex - 1);
    quicksort(arr, pivotIndex + 1, high);
  }
}
