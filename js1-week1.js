// Function inside a funcion HW

function yearBorn(age) {
  return 2020 - age;
}
console.log(yearBorn(30));

function nameAndYear(name, age) {
  const herAge = 2020 - yearBorn(age);
  //   const message =
  return (
    "My name is " + name + " " + "and I am" + " " + herAge + " " + "years old."
  );
}
console.log(nameAndYear("Sara", 100));

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
