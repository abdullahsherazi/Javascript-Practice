let names = ["Abdullah", "khan", "saif"];
console.log(names);

console.log(names[0]); //Abdullah

names.push("murtaza");
console.log("new", names); // ["Abdullah", "khan", "saif","mutaza"]

names.pop();
console.log("new", names); // ["Abdullah", "khan", "saif"]

names.unshift("Sami"); // ["sami","Abdullah", "khan", "saif"] ==> adds element at 1st

names.shift(); // ["Abdullah", "khan", "saif"] => removes element from 1st position
