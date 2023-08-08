//  const person = new Object();

//  person.Name = " Tom ";
//  person.Game = "Mobile Game";
//  person.prise = 210;

//  console.log(person);
//  delete person.prise;
//  console.log("After Deleting.");
//  console.log(person);



//  // Object with method 

//  const Tom = {
//     F1 : "This",
//     F2 :" Is",
//     F3 : "Method",
//     F4 :" Object"
//  }

//  Tom.name = function (){
//     return (this.F1 + " "+ this.F2 + " " + this.F3 +" " +this.F4).toUpperCase();
//  }
//  console.log(Tom.name());
//  //console.log(Tom.name().split(" "));
// var tt = Object.values(Tom);
// console.log("Geelo ", tt);



function Person(first, last, age, eye) {
   this.firstName = first;
   this.lastName = last;
   this.age = age;
   this.eyeColor = eye;
 }
 const myFather = new Person(21, "Doe", 50, "blue");

console.log(myFather);



//  var word = "hello I am Ajay Now I am Learning Javascript";
//  var letter = word.split(" ");
//  console.log( `Search  Letter By index  ${letter[4]}`);
//  //var len = letter.length;
//  for(var i of letter){
//     console.log(i);
//  }