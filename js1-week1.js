// Function inside a funcion HW

function yearBorn(age) {
  let currentYear = 2020;
  return currentYear - age;
}
console.log(yearBorn(30));

function nameAndYear(name, age) {
  const birthYear = yearBorn(age);
  // const name = "Sally";

  //   const message =
  return (
    "My name is " + name + " " + "and I was born in" + " " + birthYear + "."
  );
}
console.log(nameAndYear("Sally", 15));

//exercise 2

// let greeting = "Hi";
// console.log(greeting);
// console.log(greeting);
// console.log(greeting);

// exercise 3

// let greeting = "Hi";
// let name = "Mary";
// console.log("Hi" + " " + "Mary");
// console.log(greeting.concat(" ", name));
// console.log(`${greeting} ${name}`);

// exercise 4

// let numberOfStudents = 28;
// let numberOfMentors = 12;
// console.log(numberOfStudents + numberOfMentors);
// let percentageOfStudents = (numberOfStudents / 40) * 100;
// let percentageOfMentors = (numberOfMentors / 40) * 100;
// let newPercentage = Math.round(percentageOfStudents);
// let newPercentageForMentors = Math.round(percentageOfMentors);
// console.log(newPercentage + " %");
// console.log(newPercentageForMentors);
