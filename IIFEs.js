// IIFEs (Immediately Invokeable function Expressions)

// (function display(){
//     document.write("hello");
// })();


//  (function display(message){
//     document.write(message);
// })("hello");


// function exprestions 

var display1 = function displayMessage(msg){
    document.write(msg);
}

display1("I am Mehedi");