(function(){
    "use strict";

    var planets = [
        'Mercury',
        'Venus',
        'Earth',
        'Mars',
        'Jupiter',
        'Saturn',
        'Uranus',
        'Neptune'
    ];

    /**
     * TODO:
     * Read each console log below, and write some javascript code to       perform the step that it describes
     */

    // #1:
    console.log('Adding "The Sun" to the beginning of the planets array.');
    console.log(planets);

    planets.unshift('The Sun');

    // #2:
    console.log('Adding "Pluto" to the end of the planets array.');
    console.log(planets);

    planets.push('Pluto');

    // #3:
    console.log('Removing "The Sun" from the beginning of the planets array.');
    console.log(planets);

    planets.shift();

    // #4:
    console.log('Removing "Pluto" from the end of the planets array.');
    console.log(planets);

    planets.pop();

    // #5:
    console.log('Finding and logging the index of "Earth" in the planets array.');
    var index = planets.indexOf('Earth');
    console.log(index);
    // the return is that the index of Earth is 2 which is correct


    // #6:
    console.log("Reversing the order of the planets array.");
    console.log(planets);

    planets.reverse();

    // #7:
    console.log("Sorting the planets array.");
    console.log(planets);

    planets.sort();

})();