let calc = require('/Users/gennadiy.german/Localtest/SimpleJSApp/appCalc');


describe("calc", function(){ 

    it("+(1)", function() {
      expect(calc(1,2,'+')).toEqual(3);
    });
    it("-", function() {
        expect(calc(1,2,'-')).toEqual(-1);
      });
      it("*", function() {
        expect(calc(1,2,'*')).toEqual(2);
      });
      it("/", function() {
        expect(calc(1,2,'/')).toEqual(0.5);
      });
      it("=", function() {
        expect(calc(1,2,'=')).toMatch('Please enter multiply, divide, add, or subtract.');
      });

  });

















/*xdescribe("compare", function(){ 
let result = ""
beforeEach(function(){
    result = compare(50,11);
});
    xit("is50", function() {
      expect(result).toEqual(true);
    });
    xit("is51", function() {
        expect(result).toEqual(true);
      });
      afterEach(function(){
        result = ""
    });

  });

*/


