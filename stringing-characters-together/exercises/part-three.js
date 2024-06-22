//Part Three section one

let language = 'JavaScript';

//1. Use string concatenation and two slice() methods to print 'JS' from 'JavaScript'
let str1 = language.slice(0, 1);
let str2 = language.slice(4, 5);

console.log(str1.concat('', str2));

//2. Without using slice(), use method chaining to accomplish the same thing.
let firstInitial = language[0];
let fourthInitial = language[4];

console.log(firstInitial + fourthInitial);

//3. Use bracket notation and a template literal to print, "The abbreviation for 'JavaScript' is 'JS'."
console.log(`The abbreviaton for 'JavaScript' is '${firstInitial + fourthInitial}'.`)

//4. Just for fun, try chaining 3 or more methods together, and then print the result.
language = language.toUpperCase().split('').reverse();
console.log(language);


//Part Three section Two

//1. Use the string methods you know to print 'Title Case' from the string 'title case'.

let notTitleCase = 'title case';
notTitleCase = notTitleCase.replace(notTitleCase[0], notTitleCase[0].toUpperCase());
notTitleCase = notTitleCase.replace(notTitleCase[6], notTitleCase[6].toUpperCase());
console.log(notTitleCase);

