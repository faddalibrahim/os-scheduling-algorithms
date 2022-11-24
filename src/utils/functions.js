/**
 * convert an index to a corresponding letter
 * 0 -> A; 1 -> B; 2 -> C; 3 -> D... 25 -> Z
 *
 *  @param { Array <Array> } table - The list of jobs to be sorted
 *
 *  @return Array <Array>
 */
export function indexToLetter(index) {
  // throw an error for index >= 26
  return String.fromCharCode(index + 65);
}
