// sum calcuation

var m= parseInt(prompt("Enter the first number:"));
var n= parseInt(prompt("Enter the last number:"));

var sum=0;

for(var i=m;i<=n;i++){
    sum= sum+i;
}

document.write("Sumation: " + sum);