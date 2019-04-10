## Introduction

in the tech industry, we do love us some jargon. To help you become familiar with these terms, we've supplied you with a CSV-based dictionary. In this challenge, we'll ask you to work with this dictionary to help you to become familiar with JSON!

```no-highlight
et get tech-dictionary
cd tech-dictionary
atom .
```

## Part 1 - Building the Dictionary

Often, we're called to take unfriendly data and make it useful for our programs. In this part, we'll transform the supplied data into a usable data structure.

1. Create an array of rows from the supplied string. (Hint: there is an invisible character `"\n"` that can be used to divide the supplied string. [Read more][special-characters] about special characters)
2. Create a 2 dimensional array (rows of columns) from the supplied string.
3. Use what you know of iteration to translate this new data structure to a JSON object. The JSON object should use the term as a property, and the definition as the value. To complete this step, review how to assign an objects properties using square bracket `[]` syntax.
4. Move this functionality to a function `makeJsonDictionary` that takes a single argument - the original string supplied to you. This function should return the JSON object. Invoke this function and save the return value in a variable called `dictionary`.

## Part 2 - Analyzing the Dictionary

Let's take a look at the dictionary and see what we can learn.

1. Write a function `numberOfTerms` that returns the number of terms in the dictionary. It should take a JSON-based dictionary as its only argument. Output the number of terms for the given dictionary by invoking this function and using `console.log`.
2. Write a function `getTerms` that returns an array of all of the terms in the dictionary. It should take a JSON-based dictionary as its only argument. Output the terms array by invoking this function and using `console.log`.
3. Write a function `getDefinitions` that returns an array of all of the definitions in the dictionary. It should take a JSON-based dictionary as its only argument. Output the definitions array by invoking this function and using `console.log`.
4. Write a function `termsStartingWith` that returns an array of all terms starting with a certain character. It should take two arguments. The desired character, and the JSON-based dictionary. Output the terms starting with `"D"`.
5. Use the array of all terms starting with D, to create a new array: all of the definitions for the words starting with D. They **must** appear in the same order. Write a function `findDefinitions` that takes 2 arguments: an array of terms and the JSON-based dictionary and returns this list of definitions. Output the definitions for words starting with `"D"`.

## Part 3 Non-core - Flash Cards

Ok, now that we've completed our analysis, let's create an application to help us learn these terms! We'll build towards an interactive program that behaves like flash cards, where we can quiz ourselves with the provided definitions.

1. Write a function `inverseDictionary` that takes a JSON-based dictionary as a single argument. This function should take this dictionary and return its inverse: where the definitions are the property names and the terms are the values. Invoke this function and save the return value to a variable `inversedDictionary`
2. Write a function `randomDefinition` that takes a single argument - an inverted dictionary. This function should return a random definition chosen from the properties of the inverted dictionary.
3. Using this random definition function, write a program that prompts the user with the definition, and then asks them for the correlating term. If they enter the appropriate term, remove it from the `inversedDictionary` and prompt them with another random definition. If they enter the incorrect term, continue to prompt them until they supply the right term.
4. The program should terminate once there are no terms left in the `inversedDictionary`. Feel free to create a shortened version to help with your testing.

[special-characters]: https://javascript.info/string#special-characters
