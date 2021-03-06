"use strict";

/*================================= WARM UP on 8/10/2021 Justin created an HTML for this instead of a JS file

Create a function, filterOutBobUsers, that takes in an array of user objects with firstName and lastName properties and returns an array of user objects without any Bob users. The case of the Bob names does not matter.

    var users = [
    {
        firstName: 'bob',
        lastName: 'Smith'
    },
    {
        firstName: 'BOB',
        lastName: 'Smith'
    },
    {
        firstName: 'Fred',
        lastName: 'Smith'
    },
    {
        firstName: 'Cathy',
        lastName: 'Smith'
    },
    {
        firstName: 'Dawn',
        lastName: 'Smith'
    }
]

filterOutBobUsers(users) // returns...

    [
    {
        firstName: 'Fred',
        lastName: 'Smith'
    },
        {
            firstName: 'Cathy',
            lastName: 'Smith'
        },
        {
            firstName: 'Dawn',
            lastName: 'Smith'
        }
    ]

 */
var users = [
    {
        firstName: 'bob',
        lastName: 'Smith'
    },
    {
        firstName: 'BOB',
        lastName: 'Smith'
    },
    {
        firstName: 'Fred',
        lastName: 'Smith'
    },
    {
        firstName: 'Cathy',
        lastName: 'Smith'
    },
    {
        firstName: 'Dawn',
        lastName: 'Smith'
    }
]

function filterOutBobUsers(users) {
    // output array
    var outputUsers = [];
    // looping over the users and if the given user's first name is Bob, don't add to output array
    for (var i = 0; i < users.length; i++) {
        // check if the first name property doesn't contain bob then push to the array
        if (users[i].firstName.toLowerCase() !== 'bob') {
            outputUsers.push(users[i]);
        }
    }
    // return the output array
    return outputUsers;

}
    console.log(filterOutBobUsers(users));


