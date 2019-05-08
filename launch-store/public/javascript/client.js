const deleteProduct = (event) => {
  event.preventDefault();
  fetch('/show/' + event.target.name, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => {
      // window, document, location
      // window.location
      if (response.ok) {
        console.log(window.location);
        // response.redirected(301, 'http://localhost:3000/');
      }
    })
    .catch((error) => {
      console.log(error);
    });
};

document.getElementById('delete-product').addEventListener('click', deleteProduct);
