var stud = {
    Name : "Ajay",
    Age : 21,
    Course : "BCA"
}

console.log(stud.Name +" " + stud.Age + " "+stud.Course);
//console.log(Object.stud);

// How to add New  Properties 

var Employ = {
    Id : 204,
    Name : "Ajay",
    Age  : 21 ,
    Language:"Shopify"
}
console.log(Employ);
console.log("After Changing Properties")
Employ.nationality = "Indian";
console.log(Employ);
Employ.Address = " Noida Sector 59";
console.log(Employ);

delete Employ.nationality;
console.log(Employ);