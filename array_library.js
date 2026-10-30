var names = ["mehedi", "kajol", "sojol", "hamin"];

document.write(names + "<br>");

//shift opposite of pop(fist ta remove)

names.shift();
document.write(names + "<br>");

//unshift opposite of push

names.unshift("Sagor");
document.write(names +"<br>");

//adding element using splice(element add or delete)

names.splice(2,0,"karim", "rahim");// 2 no theke add, 0 =no delete
document.write(names + "<br>");

//remove element using splice 

names.splice(1,2);
document.write(names + "<br>");

//new array create using slice
var newArray = names.slice(1);
document.write(newArray + "<br>");

document.write(names + "<br>");//no change root array 

//Sort method

var sortedNames = names.sort();
document.write(sortedNames + "<br>");

var sortedNames = names.sort();
names.reverse();
document.write(sortedNames + "<br>");

//number sorting 
var numbers = [2,5,3,6,1];
numbers.sort(function(a,b){
    return a-b;

});
document.write(numbers + "<br>");


var numbers = [2,5,3,6,1];
numbers.sort(function(a,b){
    return b-a;

});
document.write(numbers);

