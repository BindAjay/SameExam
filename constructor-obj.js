function userAcount(name,id,sal,Age){
    this.name = name;
    this.id = id;
    this.sal = sal ;
    this.Age = Age;
}

const MyAcc = new userAcount("Ajay",204,1111,21);
console.log(MyAcc.name);