"use strict";

$(document).ready(function() {
    //call the jQuery function with $
    //pass it a selector
    //this returns a jquery object
    //chain a jquery method onto it
    //pass a jquery method an anonymous function
    //the function contains in its code block the code that you want to execute when the user triggers the event listener
    //the e stands for event

    //an element gets clicked
    /* the event listener attached to that element "hears" the click event and passes on to the JS interpreter the code that is attached to it.
    the interpreter runs the function specified the listener.
    the user sees something happen.
     */

    $("#clickMe").click(function() {
        alert("You clicked me!");
    });
    /* type of events
    load events (load, ready, unload)

     */
});