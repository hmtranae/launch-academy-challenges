## Learning Objectives

* Use jQuery to determine the value of a form input
* Use jQuery to change the value of a form text field
* Use jQuery to change the value of a select box
* Use jQuery to change the styling & animations of a form

## Intro to jQuery Library

jQuery is a fast, small, and feature-rich JavaScript library. It makes things like HTML document traversal and manipulation, event handling, animation, and AJAX much simpler with an easy-to-use API that works across a multitude of browsers.

## Getting Started

```no-highlight
et get jquery-forms
cd jquery-forms
open index.html
```
### jQuery & Forms

The jQuery library is full of helpful tools designed to make your form building experience simpler and more interactive. As we work through this code-along article, be sure to reference the [jQuery docs](https://api.jquery.com/) early and often!

> Pro-tip: Beware of using fat arrow functions with jQuery! ES6 arrow functions can’t be bound to a `this` keyword, so it will instead use the value of `this` in the scope in which it was defined.

### Time to Food Shop!

Take a look at the food shopping list provided to you. We're going to create an app that takes in and appends new shopping list items via a form at the bottom of the page.

## Building a Form Input

Right now, there's no place to add a new form. First, we need to add a small form into our `index.html` file. Use the code below and place it just beneath the closing unordered list tag `</ul>` but above the closing `</div>` tag.

```HTML
<form id="newItemForm">
  <input type="text" id="itemDescription" placeholder="Add description" />
  <input type="submit" id="add" value="add" />
</form>
```

Now that we have the structure we need, we can use jQuery to grab the data entered, and add it to our list. We're going to pseudo code this first! Pseudo coding can help us break down the steps required to achieve the desired results.


```no-highlight
•When a new item is submitted
•Prevent form from being submitted
•Get value of text input
•Add item to end of the list
•Empty the text input
```

In our developer console, let's be sure we're able to target the correct items. By looking in `main.js` we can see that the setup has the form saved in a jQuery object. `$newItemForm = $('#newItemForm')` Let's place a debugger on line 9 of `main.js` and refresh our browser. If we enter `$newItemForm` into the console, it returns the element we're looking for. If we didn't know what the exact element was called, we could use the `inspector` to search for it!

Using the `$newItemForm`, let's build out the code needed to submit a new list item. We use the method `on()` on the `$newItemForm`. This takes the action that will trigger the event, `submit` as well as a callback function.

```JavaScript
//When a new item is submitted
  $newItemForm.on('submit', function (event) { })
```

Next, we know we don't want the submit to happen right away, so we should prevent that. Be sure this following code goes _inside_ the function you're creating!

```JavaScript
//Prevent form from being submitted
  event.preventDefault()
```

If we're going to append a new item, we need know what that list item is. We'll grab the input text and store it in another jQuery object. Here we learn about the handy `val()` method. This method is primarily used to get the values of form elements such as `input`, `select` and `textarea`. When called on an empty collection, it returns undefined. You can learn more by visiting the [docs](http://api.jquery.com/val/).

```JavaScript
//Get value of text input
  let text = $('input:text').val()
```

Now that we have the value of the text, we can append it to the list.
```JavaScript
//Add item to end of the list
  $list.append('<li>' + text + '</li>')
```

Great work! Now all we need to do is clear the form and have it ready to accept another list item.

```JavaScript
//Empty the text input
  $('input:text').val('')
```

## Have Some Fun!

To get started, try this out the following in your developer console:

```JavaScript
$('li').hide().each(function (index) { // Hide list items
$(this).delay(450 * index).fadeIn(1600); // Then fade them in
});
```

Ooooo, now _that's_ fancy. Go ahead and add that into your `main.js` file below line 8. Now, each time you refresh your page, you'll see the starting list items fade in.


## Summary

jQuery allows you to add more interactive features to your forms, so your users have a better experience. 

