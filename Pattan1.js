var ABC = function (){
    console.log("This is use with function KeyWord ");
}

ABC ()

const XYZ = () =>{
    console.log("This function is use without Function name and without Keyword");
}

XYZ () ;

const MyObject ={
    firstName : "jack",
    secondname : "Tom",
    age : "21",
    FullName : function(){
        return this.firstName + " " + this.secondname  + " " +this.age;
    }

}
console.log(MyObject.FullName());
