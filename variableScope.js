var anotherVariable = 10;
func = () => {
  let myVar = 9;
  console.log(myVar);
};

func2 = () => {
  anotherVariable = 11;
  console.log(anotherVariable);
};

func();
func2();

console.log(myVar); // will throw error because of local/function scope
console.log(anotherVariable); // will console because of global scope
