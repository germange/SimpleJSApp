let result = "";

function calc(x,y,math) {
switch (math){

case "*":
    result = x * y;
break;

case "/":
    result = x / y;
break;

case "+":
    result = x + y;
break;

case "-":
    result = x - y ;
break;

default:
    result = "Please enter multiply, divide, add, or subtract."
break;
}
return result
}

//console.log(calc(1,2,'-'))


module.exports = calc;