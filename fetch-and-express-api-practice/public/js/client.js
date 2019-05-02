fetch('http://localhost:3000/books.json')
  .then((response) => {
    if (response.ok) {
      return response;
    }
    const errorMessage = `${response.status} (${response.statusText})`;
    const error = new Error(errorMessage);
    throw error;
  })
  .then(response => response.json())
  .then((body) => {
    console.log('The body of the response from the fetch call:');
    console.log(body);
    // your code here
    // body.books[0].name
    const bookList = $('#books');

    body.books.forEach((book) => {
      bookList.append(`<li>${book.name}</li>`);
    });
  })
  .catch(error => console.error(`Error in fetch: ${error.message}`));
