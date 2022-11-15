var myName = "Abdullah";

console.log(myName[0]); //first element ==> A
console.log(myName[myName.length - 1]); // last element ==> h

myName[0] = "k"; // will not change A to K because elements of string are immutable;
console.log(myName);
