Express is a flexible web application framework that allows you to render dynamic content on a page.

### Learning Objectives

- Build an Express application to serve dynamically generated HTML
- Understand the role of the server and views in a Express application and how they interact

## Getting Started

```no-highlight
et get your-first-dynamic-web-app-with-express
cd your-first-dynamic-web-app-with-express
yarn install
```

### Navigating the application

The `app.js` is where you will be writing code to configure your server logic. Specifically, this is where you will prepare the data needed for a specific webpage along with its content that should be rendered. This will be the first step in defining endpoints, and will determine which routes are available in your app.

We have provided the basic setup for you. Your job is to create the endpoints that will return the information our users want, based on our URL data.

### Instructions

Tackle these user stories in the order that they're presented & be sure to reference provided articles for guidance!

### Core User Stories

#### Part 1

```no-highlight
As a curious new developer
I want to arrive at a welcome page when I navigate to the root path
So that I can learn more about using Express
```

Acceptance Criteria:

- When I visit `/`, I get a `h1` with a welcome message to the website reading "Welcome One and All to My First Express Website!"
- Below the header is a short `paragraph` description about Express, which you can make up yourself or copy from a site.

**Tips:** _Note you will need to navigate to these endpoints by editing the url in your browser directly._ We'll need to use dynamic routing, queries, and params to accomplish these tasks. Focus first on defining your endpoint, then on rendering the required data at that route, and lastly on being able to handle for "data not found" cases.

> Your HTML can be written out as strings and passed into your send method. See [the res.send docs](https://expressjs.com/en/4x/api.html#res.send)

#### Greeting the User

```no-highlight
As a site visitor
I want to view a greeting 
So that I can feel welcome
```

Acceptance Criteria:

- When I visit `/greeting/:name` I can see English text greeting me specifically by name. 
- The page should say `Hi, [name]` where name is the name specified in the URL.

#### Greeting the User in Different Languages

```no-highlight
As a site visitor
I want to view a greeting in a specific language
So that I can feel welcome even if I don't speak English
```

- If I visit `/greeting/:name?lang=fr` I will see French text greeting me.
- If I visit `/greeting/:name?lang=es` I will see Spanish text greeting me.
- If the language isn't found, the response status should return a `404` status code and a "Not found" body.
- Your endpoint should exclusively support English, French, and Spanish for now.

#### Parting is Such Sweet Sorrow

```no-highlight
As a lover of languages
I want to also view a farewell in the language of my choosing
So that I can say goodbye to the coolest website ever
```

Acceptance Criteria:

- When I visit `/until-next-time/:name` I can see English text (`Good Bye, [Name]`) and the specified name from the URL.
- If I visit `/until-next-time/:name?lang=fr` I will see French text and the name specified in the URL
- If i visit `/until-next-time/:name?lang=es` I will see Spanish text and the name specified in the URL
- If the language isn't found, the response status should return a `404` and "Not found"

**Tips:**
> What will you need to type into the URL bar in order to hit the endpoints you want?

#### Favorite Colors

```no-highlight
As a curious friend
I want to view my friends' favorite colors
So that I can learn more about them
```

Acceptance Criteria:

- I can navigate to a distinct url and web page for each friend. Specifically, navigating to `/favorite-colors/:name` should bring bring me to a page revealing the favorite color of my friend
- Each page displays my friend's name and favorite color
- If the friend's favorite color isn't found, the response status should return a `404` and "Not found"

Here is a list of your friends and their favorite colors:

```no-highlight
Sam: Red
John: Green
Sally: Blue
Nick: Gray
```

### Non-Core User Stories

Below are optional user stories that you may wish to tackle. It is recommended that you finish the core user stories above before beginning.

#### Render Favorite Colors

```no-highlight
As a curious friend
I want to see a friend's favorite color in colored text
So that I can identify if I like the color, too
```

Acceptance Criteria:

- When a friend's favorite color is found, I should see the friend's name and favorite color in the color specified. 

*Use an inline style attribute to add color to the text.*

#### Static 404 Page

```no-highlight
As a site visitor
I want to see a consistent 404 page when I access an unfound resource
So that I get a consistent browsing experience.
```

Acceptance Criteria:

- If I visit `greeting`, `until-next-time`, or `favorite-colors` endpoints and I receive a 404 status code, I should receive the same, static 404 page.

*Conditionally call `sendFile` to render the same page when you issue a 404 response.*