const data = {
  book: {
    name: 'book from fetch',
  },
};
const jsonStringData = JSON.stringify(data);

fetch('http://localhost:3000/books.json', {
  method: 'POST',
  body: jsonStringData,
})
  .then((response) => {
    if (response.ok) {
      return response;
    }
    const errorMessage = `${response.status} (${response.statusText})`;
    const error = new Error(errorMessage);
    throw (error);
  })
  .then(response => response.json())
  .then((body) => {
    console.log(body);
  })
  .catch(error => console.error(`Error in fetch: ${error.message}`));
