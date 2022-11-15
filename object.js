// initializing object

let data = {
  name: "abdullah",
  age: 22,
  gender: "male",
};

//accessing object properties ==> 2 ways
console.log(data.name);
console.log(data["name"]);

//updating object properties
data["name"] = "ali";
data.age = 20;
console.log(data);

//adding object properties
data.education = "graduate";
data.height = "6ft";
console.log(data);
