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
