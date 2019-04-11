You'll work to answer questions about repositories from [LaunchAcademy's GitHub account](https://api.github.com/orgs/LaunchAcademy/repos).

## Getting Started

```no-highlight
et get github-data
cd github-data
```

### Instructions

We have provided the data needed in the `data.js` file. While this is a lot of data, it's no different than what you've worked with in prior assignments. `data` is an array of objects, and each object contains a number of `key:value` pairs.

Notice how the data is "imported" at the top of the `github-data.js` file:

```javascript
let data = require('./data');
```

The `data` variable in `github-data.js` will contain the array defined in the `data.js` file.

### Meets Expectations Criteria
**Read the complete instructions BEFORE starting**

Write code in `github-data.js` using the `data` array to answer the following questions.

### Make sure to `console.log()` every answer!

1. How many repositories does LaunchAcademy own?
2. Return the name of the repository that has the largest size.
3. Return the name of the most recently created repository.
4. How many repos have `0` stargazers?
5. Return the name of the repo that has the largest number of stargazers.
6. Return the names of the repos that have a description that is not null.
7. Use the `.map` function to create an array of repository descriptions. Print each line of the array, & if the repo has no description, return the string 'No Description Provided'.
8. Use `.map` once again to create an array containing each repository's most important information. We want to know the name of the repository, who created it (the owner), and how many watchers there are. Print each string in the array to your console. Be sure to look over your final data carefully to ensure ALL the data is showing up the way you want!
9. What 2 **keys** are inside `monkey_party`'s license object?
10. What is the **value** of `monkey_party`'s license url?
11. What's the current **value** of the booster repo's owner permissions object?

## Make sure to `console.log()` every answer!
