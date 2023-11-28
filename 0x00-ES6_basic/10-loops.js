export default function appendToEachArrayValue(array, appendString) {
  let x = 0;
  for (const element of array) {
    array[x] = appendString + element;
    x += 1;
  }

  return array;
}
