function split(wholeArray) {
  if(wholeArray.length < 1){
    return 'array empty'
  }

  var midpoint = Math.floor(wholeArray.length/2)
  var firstHalf = wholeArray.slice(0, midpoint);
  var secondHalf = wholeArray.slice(midpoint);
  /* your code here to define the firstHalf and secondHalf arrays */

  return [firstHalf, secondHalf];
}

function mergeSort(arr) {




}

//na

//na[0].concat(na[1])

function flatten(arr) {
  var flattenedArray = [];
  if (!arr.length) {
    return;
  }
  if (!Array.isArray(arr[0])) {
    flattenedArray.push(arr[0]);
  } else {

    flattenedArray = flattenedArray.concat(flatten(arr[0]))
  }

  return flattenedArray;

}

var  testArr = [[[1],[2]],[[3],[4]]];
// testArr = [6, 3, 4, 8, 2, 9, 1, 7, 5];
// var sp = split(testArr);
// console.log(sp[0].concat(sp[1]));
console.log(flatten(testArr))
