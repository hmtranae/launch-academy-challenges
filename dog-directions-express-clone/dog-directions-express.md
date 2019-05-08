# Directions from Dog

Hi, I'm Bruce.  

![alt text][bruce]

My human is well-intentioned, but sometimes needs some guidance. So I've made a list of how to do my favorite things so that my human can follow along.

We want to help Bruce better communicate with his human. Right now we have a React app that displays how to do Bruce's favorite things, but we think his human might need more guidance than that. Let's build the functionality to allow Bruce's human to highlight an individual instruction and follow along one step at a time.

## Getting Started
Run the following commands to get the app up and running

```no-highlight
et get dog-directions-express
cd dog-directions-express
yarn install
yarn run dev
```

In a separate tab, run the following commands to run your server:

```no-highlight
yarn run dev:client
```

Then navigate to `localhost:3000`

**To debug, run `yarn run dev:debug`.**

This is a React app running on top of Express. Don't worry too much if it looks a little unfamiliar to have to two running together. You should be able to complete all of the *required* sections using just the files inside the `react` directory!

### What's going on here:

Let's take a look at what the code is doing. The `main.js` file is importing a constant called `data`, which stores all of the information about Bruce's favorite things. It then renders an `InstructionsContainer` component, and passes the `data` to that component as `props`.

The `InstructionsContainer` currently has a `state` with nothing in it. The `render` method `map`s over the `supplies` and `directions` that Bruce has specified, and returns a respective `ItemTile` or `StepTile` for those things. The final `return` renders a header with the name of the activity and the previous collections of `steps` and `items`.

### Your job
Right now, when we boot up our app and take a look, we can see that we have a list of supplies and instructions. We currently don't have any way to interact with this page - clicking around doesn't change anything!

What we want to do is make it so that upon clicking on each individual step in our instructions, it highlights that step (and only that step!) in blue. We will do this by updating our currently empty `state` of our React app to keep track of which `StepTile` is selected. We'll walk through how we would approach this below.

#### Setting the State
Let's first set up our App to keep track of which step is selected in `state`. To do that:

* Add a key-value pair  with a key of `selectedId` into `state` in the constructor, to keep track of the `id` of the selected step. This should be initialized to `null`.
* Write a function named `setSelectedStep` in the `InstructionsContainer` class that will take in a `stepId` as an argument, and set the state of `selectedId` to that `stepId` (be sure to use `setState` to do so, and don't forget to `bind` your function!).

### Changing the State with Synthetic Events
Great! Now our app can handle state, but we have to make sure that Bruce's human can change the state by clicking around. To do that:

* You'll notice that the `directions.map` contains a `handleClick` function.  This function doesn't take in any arguments, but when it is invoked, it will call your new `setSelectedStep` function with one particular direction's id. This is how we specify which `id` to use to change the state for each direction.
* This idea of putting one function inside another is a bit of a confusing concept. To explain further: we need to wrap our `setSelectedStep` function like this before handing it down to a `StepTile`, because each `StepTile` will run `setSelectedStep` with a DIFFERENT id (Direction #1 will run it with an `id` of `1`, Direction #2 with an `id` of `2`, etc). By defining it like we have inside of our map here, we have one function called `handleClick` that works for each and every direction, and will be sure to update our state with the proper id for each direction!
* Pass this `handleClick` function down as `props` to `StepTile` (the same way we're currently passing down a `step`, `key`, and `id`: `handleClick={handleClick}`).
* Use the `onClick` synthetic event on the `StepTile`'s `li` element to call the `handleClick` function we've now passed down through props.
* At this point, you should be able to `console.log(this.state)` at the top of the `render` in the `InstructionsContainer` and see the `state` change as you click!

### Giving Visual Feedback
We're getting really close now! Since we're good UX designers, we want to make sure that Bruce's human can actually *see* the state being set, instead of just being able to `console.log` it. Let's turn the selected step blue to make it easy to follow along. To do that:

* Take another look at the `directions.map` function. You'll see a `className` variable being initialized.  For each `StepTile` we render, we want to check if the direction we're putting on the page is the _selected_ direction: i.e., that the `direction`'s `id` is the same as the `selectedId` stored in our `state`.
* We can now write a conditional right after the line that says `let className;` to compare those values, and set the `className` variable to `selected` if they are equal. You do not need an `else`: we can just leave `className` as null if they are not equal!
```javascript
  if(direction.id === this.state.selectedId) {
    className = "selected";
  }
```
* Pass that `className` variable down as props to the `StepTile`.
* Add the `className` attribute to the `li` in `StepTile`, and set it equal to the value you just passed down through `props`.
* The "selected" `className` has already been defined for you in the `public/home.css` file. At this point, your app should have the selected step turn blue with each click!

### Extra Challenge
Let's refactor to use `fetch` to get our data instead of importing `data.js` into `main.js`. To get set up:

* Write an additional function `fetchData` in `InstructionsContainer` that makes a fetch request to `/api/v1/favorite_things.json`. This endpoint has been set up for you in `server.rb`, so you don't need to do anything to get it up and running (you could even visit `http://localhost:4567/api/v1/favorite_things.json` in your browser if you want to check it out!).
* Once the data has been fetched, it should be stored in state. This will mean adding three key-value pairs to state, one for `activity` initially set to an empty string, one for `supplies` initially set to an empty array, and one for `directions` also initially set to an empty array. These parts of state should be updated using `this.setState` inside of your `fetchData` function. *Note* that you can update multiple parts of state all within one `this.setState` call, by adding multiple key-value pairs to the object you hand to `this.setState`.
* `fetchData` should be called when the `FetchButton` is clicked. Once your state has been updated with the new data, you will want to refactor your container to read the data from `state` instead of from `props`.
* Once the change has been implemented, you should start out with a page with no lists, and the button, and then see the lists appear after the button has been clicked!

### Tips
* Remember that your container will re-render every time the `state` changes. Placing a `debugger` or `console.log` at the top of your `render` is a good place to see what's going on.
* Remember that we call properties and functions belonging to a JavaScript class with `this` (ie. `this.state`, `this.props`, `this.functionName`). We do not use `this` in presentational components with `const` syntax.
* Remember that we **never** directly mutate `state` outside of the `constructor`. All functions should **always** use the `setState` function to change the state.
* Remember to bind functions that set `state` to your `constructor`!

[bruce]: https://s3.amazonaws.com/horizon-production/images/bruce.jpg "dog photo"
