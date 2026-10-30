// var num = [10, 20,30,40,50];

//input form user 
var num =new Array();
for(var i=0;i<5;i++){
    num[i] = parseInt(prompt("Enter a number :"));
}

var sum=0;

for(var i=0; i<5;i++){
    document.write(num[i] +"<br>");
    sum = sum+ num[i];
}

document.write("Sum= "+ sum);