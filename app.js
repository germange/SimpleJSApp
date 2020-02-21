let randomstring = require("randomstring");
let fs = require('fs');



let students = {
  name:randomstring.generate({
    length: 12,
    charset: 'alphabetic'
  }),
  surname:randomstring.generate({
    length: 12,
    charset: 'alphabetic'
  }),
  rate:Math.floor((Math.random()*100)+1)
}


if (fs.existsSync('./Students.json')) {
  throw new Error ('The file is already exists'); 
}
else
fs.writeFile('Students.json', JSON.stringify(students),
function (err){
  if (err) throw err;
  console.log('Saved');

  fs.readFile('Students.json',
  function (err,data){
    if (err) throw err;
    let newstudent = JSON.parse(data)
    console.log('Current student name is: '+ newstudent.name);

    let updatestudent = newstudent;
    updatestudent.name = "Tomas";
      
  fs.appendFile('Students.json', JSON.stringify(updatestudent),
  function (err){
    if (err) throw err;
    console.log('Updated student name is:  ' + updatestudent.name);
  })
})
})