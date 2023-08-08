function Student(first,last,father,class_num){
    this.firstName = first;
    this.lastName = last;
    this.fatherName = father;
    this.class_num = class_num;
}

Student.prototype.motherName = "jarry";
const MyID = new Student("ABC","XYZ","TOM",11);
console.log(`${MyID.firstName} ${MyID.lastName}  ${MyID.motherName}`);