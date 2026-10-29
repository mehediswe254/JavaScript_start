var farn = parseFloat(prompt("Enter Fahrenhite temp: "));

var cels = (farn - 32) * (5/9);

document.write("Celsius = " + cels + "<br/>");

var cels = parseFloat(prompt("Enter celsius temp: "));

var farn = (cels* (9/5)) + 32;

document.write("Celsius = " + farn);
