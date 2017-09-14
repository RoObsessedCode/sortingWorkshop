
var sorter = {};
sorter.bubbleSort = function (arr) {
  var sorted = true;
  var count = 0;
  while(sorted) {
    sorted = false;
    arr. forEach(function(num, i) {

      if (num > arr[i+1]) {
        sorted = true;
        arr = sorter.swap(i, arr);
        count++;

      }

    });
  }


  console.log(count);
  return arr;


}


sorter.swap = function (i, arr) {
  var temp = arr[i+1];
  arr[i+1] = arr[i];
  arr[i] = temp;
  return arr;

}

