const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'], //2
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'], //3
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'], //2
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com', //19
        languages: ['java', 'php', 'sql'], //3
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'], //4
        yearsOfExperience: 9
    }
];

// DONE TODO: use .filter to create an array of user objects where each use object has at least 3 languages in the languages array.
// .filter filters our values, that is, makes sure each element in the collection meets some criteria or passes some test

let threeLanguages = users.filter(input => input.languages.length >= 3);
console.log(threeLanguages);

// DONE TODO: use .map to create an array of strings where each element is a user's email address
// .map transforms each element in the collection

// let userEmailAddress = users.map(input => input.email.length > 2);
// console.log(userEmailAddress);

let userEmailAddress = users.map(item => {
    let container = [];

    container[item.name] = item.email;

    return container;
})

console.log(userEmailAddress);

// DONE TODO: (1) use .reduce to get the total years of experience from the list of users. (2) Once you get the total of years you can use the result to calculate the average.
// .reduce reduces a collection to a single value; we will use it to transform a collection into a primitive value; reducer (is what action we will perform in order to get to one value)/accumulator (is the value that we end with)

// total should equal 35; average is 7

// (1): this solution outputs 35 which is correct:
let totalExperience = users.reduce(function(accumulator, users) {
    return accumulator + users.yearsOfExperience;
}, 0); //the zero is the starting value

// I think this is how you refactor the above code to es6:
// const totalExperience = users.reduce((acc, users) => acc + users.yearsOfExperience), 0);

console.log(totalExperience);


// (2): this is returning NaN
// let experienceAvg = users => users.reduce((a,b) => a + b, 0) / users.length;

// console.log(experienceAvg(users));

// this is outputting the average which is 7 but I don't think I wrote my code right:
let experienceAverage = users.reduce(function(accumulator, users) {
    return accumulator + users.yearsOfExperience;
}, 0) / users.length;

console.log(experienceAverage);


// DONE TODO: use .reduce to get the longest email from the list of users

// answer should be fernando's email (stackoverflow). the output is 19, which is how long Fernando's email is:
let longestEmail = users.reduce(function (a,b) { return a.email.length > b.email.length ? a : b; }).email.length;

console.log(longestEmail);


// TODO: use .reduce to get the list of user's names in a single string. Ex: your instructors are: ryan, luis, zach, fernando, and justin








// TODO: (BONUS) use .reduce to get the unique list of languages from the list of users