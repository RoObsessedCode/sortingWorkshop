describe('Split Array function', function() {

  var testArr;

  beforeEach(function() {
    testArr = [16, 3, 4, 8, 2, 9, 1, 7, 5];
  });

  it('is able to split an array into two halves', function() {
    expect(split(testArr).length).toEqual(2)
    // your code here
  });

  it('handles an empty array', function(){
    expect( split([]) ).toEqual('array empty');
  });

  it('handles even and odd sized arrays', function(){
    expect(split)
  })


});
