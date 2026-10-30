// var names = new Array(5);
// names[0]= "Mehedi";
// names[1]= "Monir";
// names[2]= "Kajal";
// names[3]= "Rubel";
// names[4]= "Yeakub";

// document.write(names[0] + "<br>");

var nam = ["Mamun", "Monir", "Kashem", "Habib"];

document.write(nam.length + "<br>");

// some function
//push= insert

nam.push("Sokina");
document.write(nam + "<br>");
document.write(nam.length + "<br>");

//pop=delete 

nam.pop();
document.write(nam + "<br>");

//concatenation= jukto kora

var country1 = ["Bangladesh", "India"];
var country2 = ["Nepal" , "Butan"];

var country3 = country1.concat(country2);
document.write(country3);


