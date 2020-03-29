function sum (a, b){
    return a+b;
}

describe("sum", function() {

    it("sum up the integers", function() {
      assert.equal(sum(2, 3), 5);
    });
  
  });