func = (myName) => {
  if (myName === "abdullah") {
    console.log("Hi " + myName);
  } else {
    console.log("Sorry");
  }
};

check3 = (num) => {
  if (num === 3) {
    console.log("Yes type and value is 3");
  } else if (num == 3) {
    console.log("Only value is 3 but type is not number");
  } else {
    console.log("Not equal to 3");
  }
};

func("abdullah");
check3("3");
