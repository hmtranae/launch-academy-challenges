It's time to dig a bit deeper into the ways we can manipulate our DOM. Let's see what else we can do!

## Learning Goals

* Work with JSON & arrays to generate new HTML elements
* Understand & implement `querySelector`
* Evaluate the differences between using `getElementById` vs `getElementsByClassName` vs. `querySelector` as they relate to efficiency
* Hide & show elements on a page  

### Getting Started

**This is a code-along article!**

```no-highlight
et get more-dom-manipulation
cd more-dom-manipulation
open index.html
```

> Your work will go in the `main.js` file.

### What to put where, and how?

Creating new HTML elements is a fairly straightforward process, but what's our move when we're working with large amounts of data? Generating a new `<li>` element for a list of 100 names would be tedious and an inefficient use of our time. One way we'll see data be presented is via JSON. Let's walk through how we can generate info on our web page using JSON and arrays.

We've been tasked with adding a list of motorcycles for sale to a company's web page. For this example, the JSON data has been parsed, and stored in a JavaScript object named `data`:

```JavaScript
const data = {
  "harley fxlrs": {
    "year": 2016,
    "mileage": 12099,
    "price": 17999
  }
}
```

We want to be able to use `data` throughout our application, so we add a `<script>` tag just above the script already in our header:

```no-highlight
<script src="data.js"></script>
<script src='main.js'></script>
```

This will load our data and make it accessible throughout our webpage as a global variable.

Adding `console.log(data)` to the top of our `main.js` file will allow us to see exactly what information we have to work with, and which data structure it's in.

### So How Does One Manipulate the DOM?

To start, we want to create a list of bikes that the dealership has for sale. We can see that our data is an object containing key value pairs. In order to list the bikes, we'll need an array of bike names, or the keys. In `main.js`, remove the previous console.log and add these lines to the top of the file.

```JavaScript
let bikesForSale = Object.keys(data)
console.log(bikesForSale)
```

If you executed the lines above properly, you should see an array of 6 items print to your browser console. Using this handy array, we can now create a series of bike items on our web page. Using our prior knowledge, we can test out our ability to add HTML elements to our page. Copy and paste the code below into your `main.js` file, then refresh your browser.

```JavaScript
let orderedBikeList = document.createElement("h4")
let bike = document.createTextNode("Bike")
orderedBikeList.appendChild(bike)
```

This will add one `h4` element to your page, with the text `Bike`. This is a start, but we need to add ALL the available motorcycles to the page, using the `bikesForSale` array we created. Using the `appendElement` function we've already worked with, and our knowledge of traversing arrays, we can print out the available bikes for sale. In `main.js`, update your code to match the code below:

```JavaScript
let bikesForSale = Object.keys(data)

let appendElement = (target, tag, text) => {
  let element = document.createElement(tag)
  let textNode = document.createTextNode(text)
  element.appendChild(textNode)
  target.appendChild(element)
}

let bikeDiv = document.getElementById("bikeDiv")

bikesForSale.forEach(bike => {
  appendElement(bikeDiv, "h4", bike)
})
```

Now we're getting somewhere!

### Finding HTML Elements

DOM queries, or searches, can return to us one single element, or a NodeList, which is a collection of elements (or nodes).

Everything in the DOM is a node. The name node is used as a generic term, for everything.

An element is one specific type of node. It can be a list item, a div, the body, or even the window. Just know it's a specific type.

We've already used `getElementById` to locate our `bikeDiv`. Using `getElementById` will always return us one and only one result, as ids are unique. **This is your quickest and most efficient way of returning a single element**, because no two elements are allowed to have the same id. If you know the value of the id attribute that you want to target, then this method is for you!

There will be other times that you'd like to select a single element, but the node does not have its own unique id attribute. In this case, you're able to use the `querySelector` method using any CSS selector on the page. Using the `querySelector` method will return the *first* matching instance that it finds while traversing the DOM.

Let's add some code to the bottom of our `main.js` file and try it out for ourselves.

```JavaScript
let firstBike = document.querySelector("h4")
console.log(firstBike)
// <h4>Harley fxlrs</h4>
```

Now that we've seen this in action, let's take it a step further and locate ALL of the bikes for sale using the `querySelectorAll` method. All you need to do is update the code you just wrote, and refresh.

```JavaScript
let allBikes = document.querySelectorAll('h4')
console.log(allBikes)
// NodeList(6) [h4, h4, h4, h4, h4, h4]
```

Now we have a NodeList containing all the `h4` nodes on the page. Good work! Let's work with this NodeList to add a class attribute to each list item.


```JavaScript
let allBikes = document.querySelectorAll("h4")
for(let i = 0; i < allBikes.length; i++){
  allBikes[i].className = "forSale"
}
console.log(allBikes)
// NodeList(6) [h4.forSale, h4.forSale, h4.forSale, h4.forSale, h4.forSale, h4.forSale]
```

 Here we've added a class attribute with the value `forSale` to each bike. This will allow us to demonstrate how we can search for a collection of elements on the page using `getElementsByClassName`.

 ```JavaScript
let forSaleClass = document.getElementsByClassName("forSale")
 console.log(forSaleClass)
 // HTMLCollection(6) [h4.forSale, h4.forSale, h4.forSale, h4.forSale, h4.forSale, h4.forSale]
 ```

Do you see the difference between the returns here? When we use our `querySelectorAll` method, we get back a NodeList, which can hold any collection of nodes from the DOM. Using `getElementsByClassName` returns us an HTMLCollection, which will only hold specific elements only.

### Adding the Details

Right now, our page only shows the make and model of bikes for sale. The dealership would like us to add the remaining sale data to the web page. Copy and paste the following code into your `main.js` file:

```JavaScript
let bikeSaleData = Object.values(data)

for(let i = 0; i < bikeSaleData.length; i++){
  appendElement(allBikes[i], "li", `Year: ${bikeSaleData[i]["year"]}  Mileage: ${bikeSaleData[i]["mileage"]}  Price: ${bikeSaleData[i]["price"]}`)
}
```

Here we've set the information about each bike in our data object values to the variable `bikeSaleData`. We then need an HTMLcollection of elements to add our new data to, so we declare `forSaleClass` and collect all the elements with the class attribute value of `forSale`.
Now, we can iterate over the `bikeSaleData` and add each piece of information to the corresponding bike from the `forSaleClass`. Your web page should be outputting text similar to this:

```no-highlight
Harley fxlrs
 •Year: 2016 Mileage: 12099 Price: 17999
```

### Hiding and Showing Elements

Finally, we need to implement a feature where a prospective buyer can click on the page to show or hide the sale details. To accomplish this, we'll make use of `.style.display` and set that to either `"block"` or `"none"`.

First, we'll want to create a function that takes in an event, like a click, and changes the value of `display`. Let's call this `toggle`, and place it ABOVE our for loop over the `bikeSaleData`. Then, we need to call `addEventListener` which takes in a `'click'` and the function we want to invoke, and set it on each `h4` element, stored in the `allBikes` variable. Copy and paste this code into your `main.js` file.

```JavaScript
let toggle = (event) => {
  if (event.target.style.display !== "block"){
    event.target.style.display = "block"
  } else {
    event.target.style.display = "none"
  }
}

for(let i = 0; i < bikeSaleData.length; i++){
  allBikes[i].addEventListener("click", toggle)
  appendElement(allBikes[i], "li", `Year: ${bikeSaleData[i]["year"]}  Mileage: ${bikeSaleData[i]["mileage"]}  Price: ${bikeSaleData[i]["price"]}`)
}
```

Great! Now we can click on the details of a bike to hide or show them. (We'll be taking a look at event listeners in more detail soon!)

### Summary

We learned that things start to get really interesting when we implement **events**, but it also means our programs are significantly longer. Moving forward, you'll be introduced to `jQuery`, a JavaScript library that makes our code more functionally robust, yet DRYer.

### References

* [Mozilla Developer Documentation for querySelector](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector)
* [JavaScript Selector Performance](https://gomakethings.com/javascript-selector-performance/)  
* [HTML Attribute Reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes)
