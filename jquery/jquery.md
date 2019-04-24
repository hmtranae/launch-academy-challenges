jQuery is a fast, small, and feature-rich JavaScript library. It makes things like HTML document traversal and manipulation, event handling, and animation much simpler.

## Learning Objectives
* Become familiar with jQuery syntax
* Practice grabbing DOM elements with jQuery
* Learn to manipulate DOM elements with jQuery

### Getting Started

```no-highlight
et get jquery
cd jquery

open index.html
```
In your browser, open the developer console.

### The jQuery Function & Object

The jQuery library is used in a JavaScript file that you include in your web app. The library allows you to find elements using CSS selectors. jQuery selectors are similar to DOM queries, but the syntax is simpler. jQuery gives us the `jQuery()` function to use for finding one or more elements on a page. This function creates a jQuery object which holds references to those selected elements. The shorthand way of creating jQuery objects is this: `$()`. For example, `$('h2')` is the same as `jQuery('h2')`. The jQuery object has many methods that allow you to manipulate the elements you select. Be sure to reference the [jQuery docs](https://api.jquery.com/) early and often!

### Including jQuery in Your App

Take a look at the file structure provided to you. Your `src` folder contains a `vendor` folder, which contains the jQuery library source code. We name that file to reflect the version, then import it using a `script` tag at the bottom of our `index.html` file.

```HTML
<script src="src/vendor/jquery-3.4.0.min.js"></script>
<script src="src/main.js"></script>
```

We place the jQuery script **above** the script for `main.js`, so that our jQuery is loaded before we try and run our code. Open up the `main.js` file and take a look inside. There you'll find the `$(document).ready(() => { })` statement. The `.ready()` method checks that the page is ready for your code to work with.

When creating your own apps from scratch, you can go to the [jQuery downloads link](https://code.jquery.com/jquery-3.4.0.min.js), copy the file content, and paste it into your `jquery-3.4.0.min.js` file. You can then add the `.ready()` method as shown into the `main.js` file located in your `src` folder.

## Grabbing Elements in jQuery

There are a number of ways to "grab" elements, using CSS selectors, from the DOM. The `#` refers to an id, `.` refers to a class, and elements don't require any extra punctuation.

Try the following in your JS console:

**By id:** `$("#masa");`
**By class:** `$(".top-bar");`
**By element:** `$("h1");`

## Assigning a jQuery object to a variable

You can assign jQuery objects to variables and then call jQuery functions on those variables, like below:

```javascript
let masaRestaurant = $('#masa');
masaRestaurant.hide();
```

## Have Some Fun!

To get started, try out the following in your JS console:

**Hiding an element:**

```javascript
$("#masa").hide();
```

**Showing an element:**

```javascript
$("#masa").show();
```

**GET FANCY! FADE OUT!**

```javascript
$("#rosebud").fadeOut();
```

**Changing the styling of element(s):**

```javascript
$("h1").css("color", "lawngreen");
```

or maybe:

```javascript
$(".top-bar").addClass("feature");
```

Why did the top bar disappear? Let's take a look at the CSS for the class `feature.` You'll see that when this class is added to an element, its `visibility` becomes `hidden`!

**Remove an element and then append it somewhere else, then add styling to match that section of the page:**

```javascript
let toastTitle = $('#toast-title')
$('#friendly-toast').remove()
$('.resources').append(toastTitle)
$(toastTitle).addClass("list-item")
```

`.remove()` is different from `.hide()`, as `.remove()` takes the element out of the DOM completely. `.hide()` simply conceals it.

**Append something new to a list:**

```javascript
let newRestaurant = "Figaro's";
$(".resources").append("<li>" + newRestaurant + "</li>");
```

## Using `$(document).ready()`:

Loading your JavaScript at the bottom of the page will help you avoid trying to manipulate elements that aren't yet loaded onto the page, but `$(document).ready();` is an insurance policy against this problem. It's particularly useful for images or other content which may load after a JS file at the end of the `<body>` or in the `<footer>`. **Code included inside $( document ).ready() will only run once the page Document Object Model (DOM) is ready for JavaScript code to execute.**

It's best to only use one or fewer `$(document).ready();` in your JS file as you get started. While technically you can use more than one, it makes things run slightly slower (an optimization concern), more verbose (a style/readability concern) and arguably harder to debug (a developer experience concern).

Using only one `$(document).ready();` also gets you into the good habit of organizing your code into discrete functions.

```javascript
let someFunction = () => {
  //do a thing;
};

let someOtherFunction = () => {
  //do some other thing;
};

$(document).ready(() => {
  //someFunction();
  //someOtherFunction();
});
```

## Moving Away from the Developer Console in Your Browser

Using `$(document).ready()`, let's add these features:

**Toggle the image:**

```javascript
$("#zaftigs").click(() => {
  $("#zaftigs img").toggle();
});
```

**Append something new to the favorites list from the form (and, afterwards, reset the form field to a blank value):**

```javascript
$("#restaurant-button").click(() => {
  let newRestaurant = $("#restaurant-name").val();
  $("ul").append("<li>" + newRestaurant + "</li>");
  $("#restaurant-name").val("");
});
```

Notice how the above syntax for grabbing the value is different syntactically than in "vanilla," or regular, JS. The last line resets the name field to be an empty string. If you refresh the page, whatever you added will be lost because we did not add it to the database, so the data was not able to persist. (Persisting data isn't within the scope of this article.)

Side note: You'll notice the item was added near the top bar as well. This is because there's a `ul` in the topbar, so `$("ul")` is selecting both unordered lists in the DOM.

**Common event listeners:**

```
click()
bind()
preventDefault()
scroll()
```

## Summary

Now that you've gotten an introduction to jQuery, you have some cool DOM manipulation tricks in your toolbox! To get some more inspiration and decide what to do once you grab the item or items you want from the page, check out the [jQuery API documentation](http://api.jquery.com/).

Pro-tip: Don't mix jQuery with "vanilla" JS. When grabbing elements from the DOM with jQuery, we are returned jQuery objects. We can call jQuery effects and events on jQuery objects, but _not_ on objects grabbed with "vanilla" JS.

The below results in an error:

```javascript
let vanilla = document.getElementById("allston-diner")
vanilla.hide();
// => Uncaught TypeError: vanilla.hide is not a function(…)
```

Also, as a cautionary note:

Everything you can do in jQuery can also be written with "vanilla" JavaScript. Therefore, understanding the fundamentals of JavaScript as a language  -- its constructs and syntax, its orientation to particular programming concepts, etc. -- is important in order to effectively use jQuery. You want to be careful not to use jQuery as a crutch to avoid engaging with the internals of JavaScript and, instead, use it as a tool to expedite your work.
