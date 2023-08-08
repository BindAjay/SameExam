// find the Rendom number in 1 to 10 

var gnum = Math.floor(Math.random() * 10) ;

var num = prompt("Enter the number");
if(gnum == num){
    console.log("Match Number:");
}
else{
    console.log("Not Match Numbers");
}