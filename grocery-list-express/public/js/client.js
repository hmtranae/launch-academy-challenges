const onClickDelete = (event) => {
  event.preventDefault();
  fetch(`/groceries/${event.target.name}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => {
      if (response.ok) {
        window.location.href = '/';
      }
    })
    .catch((error) => {
      console.log(error);
    });
};

$('#delete').click(onClickDelete);
