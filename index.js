// map() methods
function mapToNegativize(src) {
  let newArray = [];
  for (let i = 0; i < src.length; i++) {
    newArray.push(src[i] * -1);
  }
  return newArray;
}
// function mapToNegativize(array) {
//     // return array.map(num => -num)
//     let negArray = []
//     for (const num of array) {
//         negArray.push(-num)
//     }
//     return negArray
// }

function mapToNoChange(src) {
  let newArray = [];
  for (let i = 0; i < src.length; i++) {
    newArray.push(src[i]);
  }
  return newArray;
}
function mapToDouble(src) {
  let newArray = [];
  for (let i = 0; i < src.length; i++) {
    newArray.push(src[i] * 2);
  }
  return newArray;
}
function mapToSquare(src) {
  let newArray = [];
  for (let i = 0; i < src.length; i++) {
    newArray.push(src[i] ** 2);
  }
  return newArray;
}

// reduce() methods
function reduceToTotal(src, total=0) {
  for (let i = 0; i < src.length; i++)
  {
    total += src[i];
  }
  return total;
}

function reduceToAllTrue(src) {
  //iterate through array, checking each to be true
  for (let i = 0; i < src.length; i++)
  {
    if (!src[i]) return false;
  }
  return true;
}

function reduceToAnyTrue(src) {
  for (let i = 0; i < src.length; i++) {
    if (src[i]) return true;
  }
  return false;
}