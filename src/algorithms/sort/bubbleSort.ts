import type { Comparable } from "./Comparable";
/**
 * Implements bubble sort for strings, numbers, and bigints.
 *
 * @typeParam T - The type of the array to sort.
 * @param arr - The array to sort.
 * @returns A sorted copy of `arr`.
 *
 * @author Ethan Kletschke
 * @since v0.1.0
 */
export function bubbleSort<T extends Comparable>(arr: T[]): T[] {
  // Copy the original array to avoid modifying the
  // original array
  const newArr = [...arr];
  const n = newArr.length;

  for (let i = 0; i < n - 1; i++) {
    let swapped = false;

    for (let j = 0; j < n - i - 1; j++) {
      if (newArr[j] > newArr[j + 1]) {
        // Swap the array values at indexes j and j+1
        [newArr[j], newArr[j + 1]] = [newArr[j + 1], newArr[j]];
        swapped = true;
      }
    }

    // Slight performance improvement for if
    // the array is already sorted.
    if (!swapped) break;
  }

  return newArr;
}
