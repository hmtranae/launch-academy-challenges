### Instructions

Write a web application to manage a grocery list. It should display the groceries currently on the list and provide a form for adding a new item to buy.

### Learning Goals

* Generate a dynamic web page in response to a `GET` request.
* Persist information from a user submitted via a `POST` request.
* Implement code based on acceptance tests.

### Getting Set Up

```no-highlight
et get grocery-list-express
cd grocery-list-express
yarn install
yarn run dev
```

### Meeting Expectations Requirements

Your first submission should satisfy the following requirements:

* Visiting `GET /` should redirect the user to `GET /groceries`.
* Visiting `GET /groceries` should display a list of groceries to purchase as well as a form for adding a new grocery item.
* The name of each grocery item must be in [an `<li>` element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/li).
* The list of groceries is read from the `groceries.json` file which stores each item.
* The form to add a new grocery item allows the grocery name to be specified.
* The form submits to `POST /groceries` which saves the new item to the `groceries.json` file.

### Sample Output

Below is an example of what the application should look like:

![Grocery List][sample-app]

### Tip

* As always, take a moment to familiarize yourself with the codebase. Look at each provided file, especially your test files, to get an idea of what is expected of you.

### Exceeding Expectations Requirements

**STOP and make sure you've submitted your Meets Expecations work.**

**You may update the spec files, as well as any configuration files, as needed to complete this portion of the System Check.**

* Add a validation to your form. Submitting an empty form does not modify the `groceries.json` file.
* Add `quantity` as an optional field to the grocery item form.
  - Submitting a form with both a name and a quantity should add the grocery item to the list.
  - The quantity of each item should not be displayed on the list.
* If the form is submitted with only a quantity, and no grocery item, it should not be added to the grocery list. Instead, the page should be re-rendered.
* If the form is submitted with only a grocery item and no quantity, the quantity should default to `1`.
* When viewing this list after visiting `GET /groceries`, each grocery item should be a link.  This link should lead to a show page that displays the individual grocery name and quantity.

[sample-app]: https://s3.amazonaws.com/horizon-production/images/grocery-list.png
