You work has been stellar lately. INTERstellar. Given your expertise, we want you to help get the company's "About Us" page working!

## Getting Started

```no-highlight
et get space-industries-inc
cd space-industries-inc
open index.html
```

This should open the `index.html` document in your browser.

jQuery and Foundation 5 have been loaded into the html file for you. **You are not required to use Foundation, though it may help!**. You should be using jQuery for any DOM manipulation.

The JavaScript you write for this assignment should be placed in the `main.js` file.

The instructions here provide some general descriptions on what to add. Whether you choose to use vanilla JavaScript or jQuery is up to you.

## Meets Expectations Requirements

#### Markup

Completing this section won't make your page look fancy, but it will get all the required content on the page. Be sure to meet the listed objectives prior to moving on. *You are encouraged to use made-up information if you like.*

Your company page should display the following:

* The page title, which should be the name of the company "Space Industries Inc."
* A section for company contact information, which should minimally include your company's phone number, email and address.
* A list of *links* to company social media sites. These links don't need to go anywhere, and you can have the href/url point to `#`.
* An image of the company. This can be stored as "images/your-photo-name.png" The project folder currently has a "launch-logo.png" in the "images" folder if you would like to use that instead.
* An "About Us" section. This should have a brief description of the company.
* A Core Values Section: This should be a list of three core values for the company.

### Styling
The image provided `example-company-page.jpg` shows one example of how your company page could be styled. This is an example of a **Meets Expectations** page.

![](https://s3.amazonaws.com/horizon-production/images/example-company-page.png)

Style your app such that it looks like the example provided, and include all of your styling in the `style.css` file. Feel free to get creative if you have the time!

Here are your _must-haves_ for Meets:
* Have a light background color
* Have the company name be a dark color
* Set a size for your image so that it's appropriate for the page.
* The company image should appear at the top center of your page.
* The headers for each of the sections should be bold, a dark color, and in header tags.
* The core values should be list items
* The slogan section should have a border around it.

### jQuery
For this section, feel free to add classes or ids to your existing HTML.

* Add a "Slogan" button. When clicked, a slogan of your choosing should appear.
* Clicking the button again should hide the slogan!
* Write a line of jQuery to retrieve all of the core values from the page, and have them fade in when the page loads.

### Exceeds Expectations Requirements
You want your page visitors to be able to leave a comment on your page, so let's build a form!  

* Create a form that allows page visitors to submit a comment. The form must include a field for the body of their comment.
* There should be a "Submit" button at the bottom of the form.
* Create a "Comments" section to hold all of your new comments.
* If the visitor submits their form without filling out the fields, an alert message should appear with a custom error message of your choice.
* If the visitor submits their form correctly, the comment should be added to your "Comments" section.

If you wish for your page to not refresh when the form is submitted, you will need to call [.preventDefault()](https://api.jquery.com/event.preventDefault/) on the event that is passed to your callback function.
