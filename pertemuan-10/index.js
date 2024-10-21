// Array Exercises\\

let people = ["Greg", "Mary", "Devon", "James"];

for (let i = 0; i < people.length; i++) {
    console.log(people[i]);
}

console.log("-----");

people.forEach(function(person) {
    console.log(person);
});

console.log("-----");

people.shift();
console.log(people);

console.log("-----");

people.pop();
console.log(people);

console.log("-----");

people.unshift("Matt");
console.log(people);

console.log("-----");

people.push("Si Lubis");
console.log(people); 

console.log("-----");

for (let i = 0; i < people.length; i++) {
    console.log(people[i]);
    if (people[i] === "Mary") {
        break;
    }
}

console.log("-----");

let newPeople = people.slice(2);
console.log(newPeople); 

console.log("-----");

people = ["Matt", "Mary", "Devon", "Si lubis"];
people.splice(2, 1, "Elizabeth", "Artie");
console.log(people);

console.log("-----");

let withBob = people.concat("Bob");
console.log(withBob); 

//Object Exercises\\
let programming = {
    languages: ["JavaScript", "Python", "Ruby"],
    isChallenging: true,
    isRewarding: true,
    difficulty: 8,
    jokes: "http://stackoverflow.com/questions/234075/what-is-your-best-programmer-joke"
};

programming.languages.push("Go");
console.log(programming.languages);

console.log("-----");

programming["difficulty"] = 7;
console.log(programming.difficulty); 

console.log("-----");

delete programming.jokes;
console.log(programming); 

console.log("-----");

programming.isFun = true;
console.log(programming);

console.log("-----");

programming.languages.map((language, index) => {
    console.log(index + " - " + language);
});
