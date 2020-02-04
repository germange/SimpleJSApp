// Write a JavaScript function to check if given string includes given symbol.
                            //let str1 = "First test"
                            //console.log("Include r- " + str1.includes('r'));
function have(str1) {
    if (str1.includes('r'))
    return true;
    else 
    return false;
}
console.log("Include r- " + have('test'))
console.log("Include r- " + have('robot'))

// Write a JavaScript function to check whether a string is blank or not (string with spaces should be also blank)
                            //let str2 = ""
                            // console.log("Is blank- " + (str2.trim().length === 0));
  function is_Blank(str2) {
    if (str2.trim().length === 0)
    return true;
    else 
    return false;
  }
console.log("is_Blank- " + is_Blank('     '));
console.log("is_Blank- " + is_Blank('abc'));

// Write a JavaScript function to convert a string in abbreviated form. console.log(abbrev (“Nazar Babii")) – should be “N.B.” (should convert lower case names to upper)
function abbrev(str3) {
    let names  = str3.trim().split(" ");
    if (names.length > 1) {
       return (names[0].charAt(0).toLocaleUpperCase() + "." + names[1].charAt(0).toLocaleUpperCase() + ".");
    }
   return names[0,1];
  }
  console.log(abbrev("nazar babii"));

// Write a JavaScript function that accept two integers and display the larger.
function largest(a,b) {
  if (a>b)
  return a;
  else
  return b;
}
console.log("largest of two is " +largest(1,3));

// Write a JavaScript function with conditional statement to sort three numbers.
let c=88
let d=65
let e=76

if (c>d && c>e)
{
        if (d>e)
        {
            console.log(c + ", " + d + ", " +e);
        }
        else
        {
            console.log(c + ", " + e + ", " +d);
        }
}
else if (d>c && d >e)
{
        if (c>e)
        {
             console.log(d + ", " + c + ", " +e);
        }
        else
        {
             console.log(d + ", " + e + ", " +c);
        }
}
else if (e>c && e>d)
{
        if (c>d)
        {
            console.log(e + ", " + c + ", " +d);
        }
        else
        {
            console.log(e + ", " + d + ", " +c);
        }
}       
