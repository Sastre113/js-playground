/*
    A string string is given. 
    Return the number of the longest block. 
    A block means a multiple occurrence of a letter in a row.
*/

export const longest = (string) => {
  let map = new Map();
  let maxSize = 0;

  for (let char of string) {
    if (!map.has(char)) {
      map.set(char, char);
    } else {
      map.set(char, map.get(char).concat(char));
    }

    let subStrSize = map.get(char).length
    if (subStrSize > maxSize) {
      maxSize = subStrSize;
    }
  }

  return maxSize;
};

const log = (maxSize, map) => {
  map.forEach((value, key) => {
    console.log(`${key}:${value}`);
  });
  console.log(`Valor máximo: ${maxSize}`);
};
