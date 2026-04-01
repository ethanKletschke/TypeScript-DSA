/**
 * An implementation of Linear Search that searches a generic
 * array for a specified value.
 *
 * @param arr - The array to search.
 * @param val - The value to search for.
 * @returns The index of `val` in `arr`, or `-1` if not found
 */
export function linearSearch<T>(arr: T[], val: T): number {
  let index = -1;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === val) {
      index = i;
    }
  }

  return index;
}
