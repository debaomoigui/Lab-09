// This is for Q1
const characters = ['Harry', 'Hermione', 'Ron', 'Draco', 'Luna'];
for (let character of characters) {
    console.log(character);
}

// This is for Q2
const firstName = 'Harry';
const house = 'Gryffindor';
console.log(`Welcome, ${firstName} of ${house}!`);

// This is for Q3
let characterName = 'Hermione';
console.log(characterName.toLowerCase());
console.log(characterName.toUpperCase());

// This is for Q4
let spell = ' Expelliarmus ';
console.log(spell.trim());

// This si for Q5
let quote = 'I solemnly swear that I am up to no good';
console.log(quote.slice(10, 15)); // 'swear'

// This is for Q6
const firstNameRon = 'Ron';
const lastName = 'Weasley';
console.log(firstNameRon.concat(' ', lastName));

// This is for Q7
let sentence = 'Draco is a good wizard';
console.log(sentence.replace('good', 'bad'));

// This is for Q8
let houses = ['Gryffindor', 'Hufflepuff', 'Ravenclaw'];
houses.push('Slytherin');
houses.pop();
console.log(houses);

// This is for Q9
let spells = ['Alohomora', 'Lumos', 'Nox'];
spells.unshift('Accio');
spells.shift();
console.log(spells);

// This is for Q10
let professors = ['Dumbledore', 'McGonagall', 'Snape', 'Hagrid'];
let newProfessors = professors.slice(1, 3);
console.log(newProfessors);

// This is for Q11
let students = ['Neville', 'Seamus', 'Dean', 'Parvati'];
students.splice(1, 2);
console.log(students);

// This is for Q12
let phrase = ' Mischief Managed ';
let result = phrase.trim().toLowerCase().concat(' - Harry');
console.log(result);

// This is for Q13
let wizards = ['Harry', 'Hermione', 'Ron'];
wizards.push('Luna', 'Draco');
console.log(wizards);

// This is for Q14
let message = 'Welcome to Hogwarts School of Witchcraft and Wizardry';
let newMessage = message.slice(11, 19).concat(' Castle');
console.log(newMessage);
