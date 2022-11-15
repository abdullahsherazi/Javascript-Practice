andFunc = (num) => {
  if (num > 20 && num < 30) {
    console.log("Number is in between 20 and 30");
  } else {
    console.log("Number is not in between 20 and 30");
  }
};
orFunc = (num) => {
  if (num > 20 || num < 10) {
    console.log("Number is greater than 20 or less than 10");
  } else {
    console.log("Number is not greater than 20 nor less than 10");
  }
};

orFunc(5);
andFunc(25);
