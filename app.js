// Write a JavaScript function to get the last element of an array
function last(a){
  if (a !== null);
  return a.pop();
}
console.log(last([7, 9, 0, 654, 5345,424,'last']));

// Write a simple JavaScript program to join all elements of the following array into a string
function string(b){;
  if (b.length > 1 );
 return b.join(',');
}
console.log(string([7, 9, 0, "some text"]));

// There are two arrays with individual values, write a JavaScript program to compute the sum of each individual index value from the given arrays and save them to third array
function arrays_sum(array1, array2) 
{
  let c = 0;
  let result = [];
  if (array1.length !== array2.length)
    throw new Error ("Test Error");
 while (c < array1.length && c < array2.length) 
  {  
    result.push(array1[c] + array2[c]);
    c++;   
  }
  return result;  
}
console.log(arrays_sum([1,2,3,4,543,45], [6,7,8,9,453,54]));

// Write a JavaScript program to calculate the area and perimeter of a rectangle. Rectangle should be an object with properties width and height and methods getArea() and getPerimeter();
let r = {
  width: 6,
  height: 5,
  getArea() {
    return (this.width * this.height);
  },
  getPerimeter(){
    return (this.width + this.height);
  }
};
console.log('Area =', r.getArea());
console.log('Perimeter =', r.getPerimeter());




 
  