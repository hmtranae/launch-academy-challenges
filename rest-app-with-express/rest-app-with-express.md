## Introduction

In this exercise, we will interact with a web application in order to
learn how to create, read, update, and delete (**CRUD**) data with HTTP.

## Learning Goals

* Perform HTTP requests using the `curl` command line utility.
* Perform HTTP GET requests using Node's `request` library.

## Getting Started

```no-highlight
get rest-app-with-express
cd rest-app-with-express
yarn install
node src/app.js
```

It is in the nature of any browser to be able to interact with a server and to visit the available paths.  That includes servers being run on the same machine.  In cases like these, your browser has its own window available, at the path `http://localhost:<port_number>`.  In this case, our port is `3000`.

Try it out, visit <http://localhost:3000/messages> in your browser.

Congratulations! You just issued a `GET` request using HTTP! You just asked your server (listening on `localhost:3000` [by listening, we mean your server is ready to respond to a request]) to please `GET` the resource called messages.

You should see a list of messages.

```no-highlight
Not all who wander are lost
Do or do not. There is no pry.
highway to the DANGER ZONE
lalalala
minions love banana
I LOVE CATS SO MUCH
the answer is 42
mytest1
omg no php
ヽ༼ຈل͜ຈ༽ﾉ im bad ヽ༼ຈل͜ຈ༽ﾉ
mytest1
hello
(ノ^_^)ノ┻━┻ ┬─┬ ノ( ^_^ノ)
I am the very model of a modern, major Rubyist.
you miss every shot you dont take :)
...
```

What you see on the page is the **response** from our server. In terms of HTTP, we issued a `GET` **request** for the `/messages` resource. The server then **responded** with a list of messages. Essentially, we performed a **read** operation.

## Reading a Single Message with GET

We can also issue a request for a specific message. We can do this by visiting `localhost:3000/messages/7`. We basically asked the server: "Please give me message at line number 7". When we do that, we should see the following:

```no-highlight
the answer is 42
```

## Reading data from a server from the command line

`curl` is a tool that lets us make HTTP requests from the command line. If we want to read the index page of messages, we can tell `curl` to issue a `GET`
request.

With your server running in one terminal window, open another terminal window and try the following command:

```no-highlight
curl --request GET http://localhost:3000/messages
...
<br/>Not all who wander are lost
<br/>Do or do not.  There is no pry.
...
```

**Note**: The line-break `<br/>` tags are present so that each message shows up
on a separate line in our web browser.

Likewise, we can issue a `GET` request for a single message.

```no-highlight
curl --request GET http://localhost:3000/messages/7
the answer is 42
```

What's going on here?

* We're specifying that we're using the `curl` tool (much like we run `node` before specifying which JavaScript file we want to run in the command line).
* Then we tell `curl` that we're issuing an HTTP `request`, and that, in this case, it's a `GET` request.
* Then we specify which resource we want to `GET`.

## Creating a new message with POST

Now, it's time for you to create a new message on the server using `curl`. The
command will need to match the following format:

```no-highlight
                                                 "data" flag             value
                                                   ┌──┴──┐         ┌───────┴────────┐
curl --request POST http://localhost:3000/messages --data "message=your message, here"
                                                           └──┬──┘
                                                             key
```

Here, we're doing much the same thing we did with the `GET` requests above, but with some additional information. The `--data` flag lets curl know that we have a **body** that should be included in the request. In a `GET` request, we want to read information that the server has. In a `POST` request, we are the ones with information that we want to give the server!

We give that information in the key value pair that follows the data flag. When you run the code above, the server will inform you if you were successful or not.

Point your browser at <http://localhost:3000/messages> to see your new message.

### Updating a message with PATCH

Let's change the first message. We can do this by performing a `PATCH` request on the URL for the first message.

```no-highlight
curl --request PATCH http://localhost:3000/messages/1 --data "message=I am number one thousand"
```

When we issue a `PATCH` request, we aren't creating something new, we're modifying an existing resource. Reloading the `/messages` page should show your updates!

Notice that we're doing a lot of the same things. We're creating a `request` with the `PATCH` verb, and targeting the specific `message` we're trying to edit. Then we're passing along the `data` of what we want the updated content to be.

### Deleting a message

To delete a resource, we issue a `DELETE` request on the URL of the message we would like to delete.

```no-highlight
curl --request DELETE http://localhost:3000/messages/25
```

### Ruby's Net::HTTP library

Node has a popular third party library for communicating with web servers. Let's try reading
messages from our web server, programmatically. For this to work, make sure your web server is running in a separate terminal window.

We've already included the `request` npm package as a dependency with this project.

```no-highlight
node src/messages.js
````

```javascript
const request = require("request")

request.get("http://localhost:3000/messages", (error, response, body) => {
  console.log(body)
})
```

This code issues a GET request to our locally running server, and
retrieves the `/messages` resource.

### Communicating with Web Servers

The Internet consists of millions of web servers, each one waiting for you to
make a request for the resources they provide. They host information such as the
current weather conditions, stock market prices, and even [images from other
worlds](https://api.nasa.gov/api.html#apod). The best part is, **all of these
servers speak HTTP**.

We can write Node code to interact with these web servers.

```no-highlight
node src/weather.js
```

```javascript
const request = require("request")
const util = require("util")
const weatherUrl = "https://api.weather.gov/points/42.35,-71.06"

request.get(
  weatherUrl,
  {
    headers: {
      "User-Agent": "request"
    }
  },
  (err, response, body) => {
    console.log(util.inspect(JSON.parse(body)))
  }
)
```

Executing this code will provide us with the current weather data for Boston, MA.

## Wrap up

In this lesson, we practiced creating, reading, updating, and deleting resources
using the HTTP protocol.

## External Resources

* [Manual - curl usage explained](https://curl.haxx.se/docs/manual.html)
