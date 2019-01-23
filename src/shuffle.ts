/**
  * Upset the array
  *
  * @category Array
  * @since 0.0.1
  * @param {Array} array The array to execute
  * @returns {Array} Returns the new shuffled array
  * @example
  *
  * shuffle([1, 2, 3, 4, 5, 6]
  * // => [4, 2, 6, 5, 1, 3]
  *
  * shuffle([1, 2, 3, 4, 5, 6]
  * // => [1, 4, 5, 3, 2, 6]
  *
  */
function shuffle(array: Array<any> = []): Array<any> {
  let
    result: Array<any> = Array.from(array),
    len: number = array.length,
    randomIndex: number = 0;

  while (len) {
    randomIndex = ~~(Math.random() * len--);
    [result[randomIndex], result[len]] = [result[len], result[randomIndex]];
  }

  return result;
}

export default shuffle;