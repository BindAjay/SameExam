function Leap(years){
    if( (years % 4 === 0) && (years % 100 !== 0) ||( years % 400 ===0)){
        return true;
    }
   // return (years % 100 === 0) ? (years % 400 === 0) : (years % 4 === 0);

}

console.log(Leap(2016));
console.log(Leap(2000));
console.log(Leap(1700));
console.log(Leap(100));