//  //creating a function
//  function sqaure(){
//     var num =4;
//     var result =num * num;
//     document.write("Result = " + result + "<br>");
//  }

//  // calling a function

//  sqaure();
//  sqaure();

// //use parameter

// function sqaure(num1, num2){
//     var result= num1*num2;
//     document.write("Result = " + result + "<br>");
// }

// sqaure(5,6);

//return funtion

function addition(num1, num2){
    var result= num1 + num2;
    return result;
}

// sub fuction 

function subtraction(x, y){
    var result = x- y;
    return result;
}

var sum=addition(20,10);
var sub=subtraction(20,10);

document.write("Sum= "+ sum + "<br>");
document.write("Sub= " + sub + "<br>");

