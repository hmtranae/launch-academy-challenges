To make interactive web applications, users often need a way to submit information back to the server.
In this article we'll discuss how HTTP POST requests can be used to submit user input entered via HTML forms.

### Learning Goals

* Add an HTML form to a web page.
* Pass user input to the web server via an HTTP POST request.
* Persist user input using the filesystem.

### Getting Started

```no-highlight
et get http-post-and-forms-with-express
cd http-post-and-forms-with-express
yarn install
yarn run dev
```

### HTML Forms

In good and cliche software tutorial form, we'll walk through an already created TODO application, together. The code has been provided for you, along with this lesson.

It all begins with the ability to add a task. Users most commonly provide web applications input through forms. Forms allow for a variety of different inputs: typing in a text field, selecting options from a drop-down list, attaching a file for upload, etc. When a user is finished filling out a form, they can click a button to *submit* the form back to a web server along with all of their input.

To add a form to a web page we use the `<form>` element. Within the form we can define all of our inputs (e.g. text fields, select lists, etc.) but we also need to specify what happens when a user submits their info. Submitting a form is similar to clicking on a link in that it sends an HTTP request back to the server. The primary difference is that with a form we have the option to send an HTTP POST request rather than an HTTP GET. GET requests are intended for viewing web pages whereas POST requests are used when we want to modify or update something in our web app. Since we want to add a new task to our app, a POST request would be more appropriate here.

Every HTTP request has both a method and a path. Since we're creating a new task we can use the `/tasks` path but this time, we'll define a POST endpoint. Note that `POST /tasks` maps to a different endpoint than `GET /tasks`. They're both using the same path, but the POST is *submitting* information to be saved whereas the GET would be intended *retrieve* existing information.

To create a form that will send a POST request to the `/tasks` path we could start with the following HTML:

```HTML
<form action="/tasks" method="post">
```

The *action* attribute specifies the path that the form submission will go to and the *method* attribute is used to choose between sending a POST request and a GET request. If our form is submitting information to be saved or otherwise change the state of our application then we should use POST: GET requests should only be used when a form does not modify or update anything on the server (e.g. using a form to search a site).

The `<form>` element by itself doesn't do much other than describe the endpoint for the request once it is submitted. To add various components we can use `<input>` elements. An input can represent a text field, a select list, checkboxes, a submit button, and many other widgets (a full list of input types can be found [here](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#attr-type)).

For our form we'll need to add two components: a text field where the user can type in the name of the task and a button so they can submit the form:

```HTML
<form action="/tasks" method="post">
  <label for="task_name">New Task:</label>
  <input type="text" id="taskName" name="taskName">

  <input type="submit">
</form>
```

Here we've added two `<input>` elements: a text field with `type="text"` and a submit button with `type="submit"`. We've also included a `<label>` element for the text field indicating what the user should fill out. To ensure that the label is attached to the right input we match `for="taskName"` attribute on the label with `id="taskName"` on the text field.

Another important attribute is the `name="taskName"` attribute on the text field. This is used to identify what the user typed into that particular field when it is passed along to the server. If there were multiple input fields we could distinguish between them based on their name attributes.

Let's take a look at our complete `app/views/index.hbs` file.

```HTML
<h2>Tasks</h2>

<ul>
  {{#each tasks }}
    <li>{{ this }}</li>
  {{/each}}
</ul>

<form action="/tasks" method="post">
  <label for="task_name">New Task:</label>
  <input type="text" id="taskName" name="taskName">

  <input type="submit">
</form>
```

If you haven't already, let's start up our server with a `yarn run dev`. When we navigate to [http://localhost:3000](http://localhost:3000), we should see the form discussed above.

After filling in the text field and hitting submit, we'll see that the task has been added. But, how does it all work?

When the form is submitted, we're sending an HTTP POST request to the `/tasks` path.

### HTTP POST

Before we study our `src/app.js` file, let's see what a POST request looks like. When a user submits the form their browser will send something like the following:

```no-highlight
POST /tasks HTTP/1.1
Host: localhost
Content-Length: 28

taskName=take+over+the+world
```

The first line defines both the method (*POST*) and the path (`/tasks`). The main distinction between a POST and a GET request is the request body. This is where all of the user input is stored in key-value pairs:

```no-highlight
task_name=take+over+the+world
```

Since we have a text field input with an attribute `name="taskName"` the browser will take whatever the user entered in that field and form the `taskName=<user input>` pair. If the user typed "take over the world" we'll end up with the key-value pair `task_name=take+over+the+world`. Notice how the spaces have been replaced by *+* symbols. To reiterate, this is known as URL encoding and allows us to send special characters (such as whitespace) in the request body (you might also see *%20* as an encoding for spaces).

We also have to include the size of the HTTP request body using the *Content-Length* header so that the web server knows how much data to expect. In this case our `taskName=take+over+the+world` body is 28 characters long so we just have to specify `Content-Length: 28`.

### Updating Our Webserver

We have the form set up in view template, now how do we handle the incoming POST request on the server? Let's study the `post` endpoint.

```javascript
app.post("/tasks", (req, res) => {
  const taskContents = req.body.taskName
  fs.writeFileSync(tasksPath, `${taskContents}\n`, {flag: "a"})
  res.redirect("/")
})
```

As we discussed above, because the form input's `name` attribute is set to `taskName`, we can use `req.body.taskName`, to access the value that the user specified prior to pressing the submit button.

We take that value and append it to our text file `tasks.txt`

When we're done with that work, we redirect the user back to the index. This view should reflect the newly updated task, and it provides the user with the opportunity to add another task.

#### Accessing Form Values

Everything that the user ever submits through a form will be accessible via the `req.body` object. Thanks to the `body-parser` middleware that we installed as a dependency for you, Express does the work of parsing the request body and putting into a more sensible JSON object. With `body-parser` properly installed and configured, `req.body` will always be be available for us to _use_ whatever a user typed in a form.  

Since `req.body` is a JSON object, it will have key-value pairs.  The number of key-value pairs will vary, depending on how complicated your form is. But, you will be able to access the information in the same way you access any values in a JSON object: `req.body.inputName`. For our form, `req.body` should give us one key-value pair:

```javascript
{ "taskName": "take over the world" }
```

### Debugging

A great way to see this in action is to use the **debugger** and the provided `dev:debug` script. For debugging node applications at the time of this writing, we recommend the use of [Chrome Canary] and Dedicated Node DevTools. Chrome Canary is a developer friendly version of Chrome, and we like using it as a tool that is separate from your everyday browsing experience.

1. Install Chrome Canary
2. Launch your server with `yarn run dev:debug`
3. Once installed, launch Chrome Canary and navigate to `about://inspect`. You should see an item listed under "Remote Target" - click "inspect". Leave the window opened after clicking.

If you've successfully done the above, your terminal should read `Debugger attached.`.

Now in `src/app.js`, let's place a debugger right below our `taskContents` assignment:

```javascript
app.post("/tasks", (req, res) => {
  const taskContents = req.body.taskName
  debugger
  fs.writeFileSync(tasksPath, `${taskContents}\n`, {flag: "a"})
  res.redirect("/")
})
```

When we submit the form, Chrome Canary should halt execution of the script, and we can use the console to explore.

### Using the Data Supplied

To round out our discussion, let's study the GET `/` endpoint.

```javascript
app.get("/", (req, res) => {
  const tasks = fs.readFileSync(tasksPath).toString().split("\n")
  //remove the blank new line at the end of the file
  tasks.pop()
  res.render("index", {tasks: tasks})
})
```

Here, we're reading from the same file our `post` endpoint writes to. We transform its contents so that each line placed into an array of strings. We remove the last line from the array, as that will always be blank. This endpoint implementation allows us to list all of the tasks in the handlebars template.

### In Summary

Accepting user input and persisting data are two essential activities for most non-trivial web apps. Understanding how data is transferred from a client to the server and the difference between GET and POST requests is important for building web apps.

Whenever a user is **retrieving** information without intentionally modifying anything, use an **HTTP GET request**. If a user is submitting information back to the web application to either be persisted or otherwise modify any state (e.g. a user logging in), prefer an **HTTP POST request** (or variants of POST such as PUT, PATCH, DELETE, etc.).

A POST request contains any information being submitted in the **request body**. The request body contains a series of key-value pairs that have been **URL encoded** to ensure any special characters are transferred correctly. The most common way to submit information is via an **HTML form** where the parameters are grabbed from the form inputs.

### External Resources

* [MDN: My first HTML form](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Forms/My_first_HTML_form)
* [MDN: Sending and retrieving form data](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Forms/Sending_and_retrieving_form_data)
