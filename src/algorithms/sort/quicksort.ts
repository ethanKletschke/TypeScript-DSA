import type { Comparable } from "./Comparable";

/**
 * Partitions the array around a pivot, placing the pivot in its final position.
 * Elements less than the pivot are moved to the left, and others to the right.
 *
 * @param arr - The array to partition
 * @param low - The starting index of the range to partition (inclusive)
 * @param high - The ending index of the range; also used as the pivot index
 * @returns The index of the pivot after partitioning
 *
 * @author Ethan Kletschke
 */
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

/**
 * Recursively sort the array provided.
 *
 * @param arr - The array to sort
 * @param low - The lowest index of the array
 * @param high - The highest index of the array.
 * @returns The sorted array.
 *
 * @author Ethan Kletschke
 */
export function quicksort<T extends Comparable>(
  arr: T[],
  low = 0,
  high: number | null = null
): T[] {
  // If high is not provided
  if (high === null) {
    // High is set to the array's length -1
    high = arr.length - 1;
  }

  if (low < high) {
    // Find the pivot index
    const pivotIndex = partition(arr, low, high);

    // Sort the lower half of the array recursively
    quicksort(arr, low, pivotIndex - 1);
    // Sort the upper half of the array
    quicksort(arr, pivotIndex + 1, high);
  }

  // Return the original array.
  return arr;
}
