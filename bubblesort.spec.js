describe('Bubble Sort', function(){
    var testArr;
    beforeAll(function () {
      spyOn(sorter, "swap").and.callThrough();
    })
  beforeEach(function() {
    testArr = [6, 3, 4, 8, 2, 9, 1, 7, 5];
  });

  it('handles an empty array', function(){
    expect( sorter.bubbleSort([]) ).toEqual( [] );
  });

  it('handles a single item in the array', function(){
    expect( sorter.bubbleSort([5])).toEqual( [5] );
  });

  it("handles multiple items in the array", function(){
    expect( sorter.bubbleSort(testArr)).toEqual( [1,2,3,4,5,6,7,8,9] );
  });

  it("counts the number of swaps made", function() {
    //testArr.bubbleSort();
    expect(sorter.swap.calls.count()).toEqual(18);
  })








});




