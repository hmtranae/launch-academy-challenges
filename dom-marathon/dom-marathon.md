There are so many things in this world that are just plain awesome! If we gather enough awesome things together, than we have some Awesome Sauce!

Let's build an app that mixes up some tasty Awesome Sauce for us! This app will help us keep track of new awesome items. Once we have 10 awesome items in our list, the Awesome Sauce is ready!

### Getting Started

```no-highlight
et get jquery-marathon
cd jquery-marathon
open index.html
```

In your browser, open the developer console. Your work will go in both the `index.html` file as well as the `main.js` file.

### Step 1
Right now, all we have is a basic web page with two **awesome** list items. Our goal is to add several more awesome things so we can mix up some Awesome Sauce. If we want to add something, we'll need to have a form!

In your `index.html`, create a `form` with the `id` "awesomeSauceForm". Your form should have an `input` with a type attribute of `text`, an `id` of "awesomeType", and a `placeholder` "Add Awesomeness".

A form needs a submit button as well! At the end of your form, be sure to add another input field of type `submit`, and be sure to give it an `id` of "add" and a `value` of "+".

### Step 2

We have a form! If you tried to add an awesome item right now, nothing new would be there - the page would simply refresh.

You may have created an `appendAwesomeItem` function in previous exercises. Let's reuse that pattern to add our awesome list item.

Let's head over to our `main.js` file. Using DOM manipulation, create an `appendAwesomeItem` function. It should take in one argument `text`. When run, this function should add new awesome `li` item to our list of awesome items, and the text value should appear.

### Step 3

We're set up to add a new list item to our unordered list using the `appendAwesomeItem` function. We now need to add an event listener to the form that will run when the add button is clicked.

Locate the value of the form input, and invoke the `appendAwesomeItem` function. Be sure to add at least two more items here!

Note: Forms love to try and refresh the page, which would remove all of our new elements! Make sure that your callback function calls `event.preventDefault()` as well. You'll need to ensure that `event` is also passed as an argument to your callback function.

### Step 4

That looks great - except we see our previous entry still in the input box, and we want our prompt "Add Awesomeness" to show again. Add a line to your callback function that resets the `value` of the input field back to an empty string.

### Step 5

Now that we have our form functioning, we've realized one of our peers is allergic to dogs! :(

For each of the list elements on the page that contains the word "dog", add a class with the value "achoo".

Write javascript that also grabs all of the these elements that have a class of "achoo" and store them in a `sniffleList` variable. We'll come back to this later!

### Step 6

We want our allergic peers to know that our awesome sauce might make them sneeze. Add some styling to the `style.css` file so any list items that contain the text `dog` show up red. Note: don't use the default red, instead, you either rbg() or a hex code to change this color.

### Step 7

We don't want anyone to have an allergy attack, so we need to ensure no more dog items are added to this mix! Only allow items to be added if the text does not include the word "dog". If a user tries to add more dog items, alert them that "This awesome sauce has too much dog already!"

### Step 8
**From this point on, you should ensure that you are using jQuery for any DOM manipulation.**

Let's come back to `sniffleList`, which contains all of the elements that have "dog" in them.

Hide all of the elements, so our allergic friends can relax a bit. You may wish to use jQuery's `.each` method, or hide them all individually.

### Step 9

Uh-oh, now all of the dog lovers are upset! Quick, unhide the elements with dog in them!

### Step 10

Better yet, let's create a button with the text `Toggle Dogs`. Add an event listener and callback function to our new button that:
* hides the elements with "dog" in them if the dogs are not already hidden
* shoes the "dog" elements if they are already hidden

Note: Feel free to use a link that is styled like a button instead if you would prefer.

### Step 11

We're getting close to the expected amount of Awesome Sauce ingredients, so we want to add a counter to our page. Create an `h4` with the `id` of `"count"` that initializes with the preset list item count and place it under the title in your `index.html` file.

Write logic that increases the counter number every time a new item is added to the list.

You'll likely need to hook this logic in with your original callback function for your form!

Note: `.length` should work when called on an array of HTML elements.

### Step 12

We want to know when we get close to 10 items, so for any items with an index between 5 and 7 we want the background to be highlighted in yellow.

### PAUSE

Add this code at the bottom of your `index.html` file:

```HTML
<div id="awesomeTime">
  <img src="http://www.crafterhoursblog.com/wp-content/uploads/2014/09/awesomesauce.png"></img>
</div>
```

Add this to the bottom of your `main.js` file, but inside the jQuery ready function:

```JavaScript
  $('#awesomeTime').hide()
  let $count = $('#count')
  if ($count.innerText === '10') {
    $("#awesomeTime").fadeIn(5000)
  }
```

### Step 13

When the 9th item is added (aka the item with an index of 8) we want that item to have a background of blue.

### Step 14

When the counter reaches 10, we want to fade out all the list items on the page. Write JavaScript logic to account for this. Make it a slow fade...

Now add the 10th item! Awesome Sauce!
