"use strict";
$(document).ready(function() {


    $(".menu-button").on("click", function() {
        // alert("Hello");
        $("li").slideToggle(500);
    });
    //.on is the event listener. "click" is the event handler.
    $(".login-button").on("click", function() {
       // alert("hi");
        $("h1").css("color", "pink");
    });
//mouseenter usually takes an event. .on and .hover is a method.
    $("p").hover(function(event) {
        // alert("testing");
        $(event.target).css("color", "pink");
    }, //this is how you chain methods
    function(event) {
        $(event.target).css("color", "black")
    });
    $(".my-button").on("click", function() {
        $("h1").toggleClass("highlight");
        $("p").toggleClass("highlight");
        $("li").toggleClass("highlight");
    });
    $("button").hover(function() {
        $(this).css("color", "pink")
    },
        function() {
        $(this).css("color","grey")
        }
    )

});

/*
Exercises
Continue working in jquery_exercises.html for these exercises. Make sure you are committing your changes to GitHub.

Id Selectors

Create content in your HTML file using at least the following elements: h1, p, ul, li, div. DONE

Add several attributes to your elements; you will need both id and class attributes. DONE

Use jQuery to select an element by the id. Alert the contents of the element. DONE

Update the jQuery code to select and alert a different id. DONE

Use the same id on 2 elements. How does this change the jQuery selection? It will fire both, but one at a time, top to bottom. DONE

Remove the duplicate id. Each id should be unique on that page. DONE
*/

/*
Class Selectors

Remove your custom jQuery code from previous exercises. DONE

Update your code so that at least 3 different elements have the same class named codeup.

Using jQuery, create a border around all elements with the class codeup that is 1 pixel wide and red.

Remove the class from one of the elements. Refresh and test that the border has been removed.

Give another element an id of codeup. Does this element get a border now?
*/

/* Element Selectors

Remove your custom jQuery code from previous exercises.

Using jQuery, set the font-size of all li elements to 20px.

Craft selectors that highlight all the h1, p, and li elements. DONE

Create a jQuery statement to alert the contents of your h1 element(s).
*/

/*Multiple Selectors

Combine your selectors that highlight all the h1, p, and li elements.

 */

//Mouse Events Exercise: 8/16/2021
/*
Use the file jquery_exercises.html for these exercises. Commit your changes to GitHub.

Remove your custom jQuery code from previous exercises.

Add jQuery code that will change the background color of an h1 element when clicked.

Make all paragraphs have a font size of 18px when they are double clicked.

Set all li text color to red when the mouse is hovering; reset to black when it is not.
 */