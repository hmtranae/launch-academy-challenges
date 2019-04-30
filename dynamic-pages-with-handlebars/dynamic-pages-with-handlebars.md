For production-level applications, using all of the features of HTML becomes important. We've seen how we can use Express to create simple, dynamic applications. So, how do we get the best of both worlds, where we can create dynamic applications that look and feel like a professionally produced website?

Enter templating and handlebars. Handlebars will provide you with everything you need to create beautiful looking websites with Node and Express.

### Learning Goals

- Produce more fully featured web pages with a templating framework
- Use layouts for consistent UI elements
- Construct Handlebars templates to render specific views

### The Limitations of Giant Strings

In our [celebrenerd example][celebrenerd-lesson], we saw how the limitations of generating a large string got in the way of creating a great user experience. In the example we provided, we used a horizontal rule `<hr>` to separate the folks in the list. Wouldn't it be great if we could represent our VIP's as an unordered list, so that it is uses the appropriate, semantic markup? With most web applications, giant strings can only take us so far. We need the richness of layouts and CSS to make our online experiences more impactful. That's when we can call on the powers of a [templating engine][templating-engine-express].

Templating engines supply us with the ability to write more complex HTML views, without taking away from our ability to generate dynamic content. With a templating engine, we can separate our logic from our presentation. Like we saw with the VIP guest list, we can have our Express endpoint handle the heavy lifting of the logic, where we filtered the list on the basis of the query string. The end-user experience, however, was anything but stellar. So, we can use a templating engine to keep our systems nice and modular, where Express endpoints can do much of the heavy computational lifting, and the templates can handle the aesthetics of the user experience.

It's through this separation of concerns that we begin to see a Controller and View set of roles in our application. `app.js` serves as our **controller**, because it directs and controls traffic. The view templates will be responsible for delivering what the user sees.

### The Paradox of Choice

Like with most things in the NodeJS community, there are many choices when it comes to selecting a templating engine. [Pug][pug], [EJS][ejs], [nunchucks][nunchucks] are all viable options, but we like [handlebars][handlebars].

- Pug uses a shorthand notation for writing HTML that has a steep learning curve and whitespace sensitivity.
- EJS gets complicated as we start adding conditionals and loops into our code.
- Nunchucks is decent, but it did not gain enough community support for it to gain traction.

We like Handlebars because:

- It promotes the use of minimal logic in your templates.
- It can be used both on the backend with NodeJS and with client side libraries. It is popularly used with the [Ember][ember] client-side framework.
- Handlebars templates can be used across [different][handlebars-ruby] [programming][handlebars-python] [languages][handlebars-java], so your templates are theoretically reusable if you ever decide to change platforms.

### Installing Handlebars

So, with our templating engine selected, let's install handlebars and work to re-implement our celebrenerd guest list.

First, we must install the node package that will allow us to use handlebars for our view engine.

```no-highlight
yarn add express-handlebars
```

Secondly, we have to tell Express that we want to use Handlebars as our templating engine. We need to add the following lines to our `src/app.js` file. Place this snippet right above our `vipNerds` array assignment.

```JavaScript
const hbsMiddleware = require("express-handlebars")

// view engine setup
app.set("views", path.join(__dirname, "../views"))
app.engine(
  "hbs",
  hbsMiddleware({
    extname: ".hbs"
  })
)
app.set("view engine", "hbs")
```

There's quite a bit happening here, so let's walk through it.

1. We have to load the library that allows us to use Handlebars in our view templates
2. We then have tell Express where we're going to store the view template files. In this case, we're putting them in the `views` directory directly underneath the project root.
3. We instruct the application that we're using Handlebars for our view engine. First, we configure the engine to have a default layout name calls `default`, and that all of our templates files will end in `.hbs`.

### Building Our First Template

Phew! That was quite a bit of setup, but now we're ready to get to work.

First, we need to modify our `app.js` endpoint to reference the template we're going to build.

```JavaScript
app.get("/guests", (req, res) => {
  let nerdsFound = vipNerds.filter(name => {
    if(req.query.search) {
      return name.startsWith(req.query.search)
    }
    else {
      return true
    }
  })
  res.render("search", { nerdsFound: nerdsFound || [] })
})
```

Most of our endpoint has stayed the same. At the end, we replaced `res.send` with a `res.render`. This `render` invocation tells Express to render a view template named `"search"`. We're also passing data to this view template. The `nerdsFound` variable will be used inside the view template.

Secondly, we need to create the view template file itself. Let's create `views/search.hbs` so that our view template properly correlates with the first argument we passed to `render` in our endpoint above.

```Handlebars
<h2>{{ nerdsFound.length }} Folks on the Guest List</h2>

<ul>
{{#each nerdsFound }}
  <li>{{ this }}</li>
{{/each }}
</ul>
```

This is the first time we're seeing the actual view template. Inside the `<h2>` element, we essentially inject the value `nerdsFound.length` to inform the end user about how many people are on the guest list.

With the unordered list, we use a Handlebars `each` loop to iterate through each name in the list. For each name, we're creating an `<li>` element with it inside.

If we start our server, and navigate to the [guests page][guests-page], we should see the appropriate headline and 4 bullets.

We can also add a `?search=M` to see how the page is affected. The template renders with the context of a smaller array, and so we see only 2 bullets in the list.

### Adding a Conditional in the Layout

What happens if the search term you specify isn't on the list? Try adding `?search=Susan` to the URL. Because there aren't any items in the array, nothing is shown. This view isn't ideal. Let's add a conditional to show something a bit more user friendly.

```Handlebars
{{#if nerdsFound.length }}
  <h2>{{ nerdsFound.length }} Folk(s) on the Guest List</h2>
  <ul>
  {{#each nerdsFound }}
    {{ log this }}
    <li>{{ this }}</li>
  {{/each }}
  </ul>
{{else }}
  <h2>No people found based on your search.</h2>
{{/if }}
```

Here, we use a conditional to show a different `<h2>` tag if no matching nerds are found.

Handlebars strives to be as logic-less as possible, so we're fairly limited with what we can use inside template conditionals. Because `0` evaluates to a falsy value, we can use a conditional like this to handle an a list with names vs. an empty list.

### Debugging Handlebars Templates

Unfortunately, the debugging experience with Handlebars isn't awesome. The best thing we can use is the `console` helper to output a value.

Try this in the template we just implemented. Refresh the page and see what's displayed in the terminal running the server.

### Working with Layouts

If we view the source of our newly created web page, you'll notice that we don't have a full HTML web page. Not only is this bad for Search Engine Optimization (SEO) and W3C validation, but we also can't create "global" navigation and UI elements that will apply to every view.

Layouts provide us with a mechanism to define shared HTML between view templates. Using a special `{{{ body }}}` snippet, we can tell the layout where to place the specific view template markup.

Let's first create our `default` layout in `views/layouts/default.hbs`.

```Handlebars
<!DOCTYPE html>
<html>

<head>
  <title>
    {{#if title }}
      {{ title }}
    {{else }}
      The Launch Event
    {{/if}}
  </title>
  <link rel='stylesheet' href='/stylesheets/style.css' />
</head>

<body>
  <header>
     <h1>The Launch Event</h1>
  </header>
  {{{ body }}}
  <footer>
     <p>&copy; 2019 Launch Academy</p>
  </footer>
</body>

</html>
```

We also need to instruct our application that we're using a default layout. Let's update our `app.engine` invocation to include mention of a default layout.

```JavaScript
app.engine(
  "hbs",
  hbsMiddleware({
    defaultLayout: "default",
    extname: ".hbs"
  })
)
```

The `{{{ body }}}` is where the contents of our individual view templates will be rendered. This way, we can add shared content before and after view templates.

### Why This Matters

View templates allow us to write more complete applications. They also allow us to separate concerns between the Controller (`src/app.js`) and the view templates themselves. This helps us to be better organized and for our codebases to be more modular.

### Resources

- [Handlebars Website][handlebars]
- [Handlebars with Node Tutorial][handlebars-node-tutorial]

### In Summary

[celebrenerd-lesson]:/lessons/urls-and-dynamic-express-applications
[templating-engine-express]:https://expressjs.com/en/guide/using-template-engines.html
[ember]:https://emberjs.com/
[handlebars-ruby]:https://github.com/cowboyd/handlebars.rb
[handlebars-java]:https://github.com/jknack/handlebars.java
[handlebars-python]:https://github.com/wbond/pybars3
[guests-page]:http://localhost:3000/guests
[handlebars]:https://handlebarsjs.com/
[handlebars-node-tutorial]:https://webapplog.com/handlebars/
