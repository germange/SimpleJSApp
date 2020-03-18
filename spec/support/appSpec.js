let compare = require('/Users/gennadiy.german/Localtest/SimpleJSApp/appCompare');
let sum = require('/Users/gennadiy.german/Localtest/SimpleJSApp/appSum');

  describe("compare", function(){ 

        it("is50(1)", function() {
          expect(compare(50,11)).toEqual(true);
        });
        it("is50(2)", function() {
            expect(compare(1,1)).toEqual(true);
          });
          it("is50(3)", function() {
            expect(compare(25,25)).toEqual(true);
          });
    
      });

      describe("sum", function(){ 

        it("sum(1)", function() {
          expect(sum(50,11)).toEqual(61);
        });
        it("sum(2)", function() {
            expect(sum(50,8)).toEqual(61);
          });  
      });
