/**
 * An implementation of Linear Search that searches a generic
 * array for a specified value.
 *
 * @param arr - The array to search.
 * @param val - The value to search for in `arr`.
 * @returns The index of `val` in `arr`, or `-1` if not found
 *
 * @author Ethan Kletschke
 */
export function linearSearch<T>(arr: T[], val: T): number {
  // Declare the found index as -1
  let index = -1;

  // Loop through the array's indexes
  for (let i = 0; i < arr.length; i++) {
    // If the item to search for is found
    if (arr[i] === val) {
      // Change the found index to that index
      index = i;
    }
  }

  return index;
}
