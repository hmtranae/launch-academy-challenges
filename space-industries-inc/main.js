const comments = [];

$(() => {
  const onToggle = (event) => {
    event.preventDefault();
    const image = $('#show-image');
    image.toggle();
  };

  $('#show-slogan').click(onToggle);

  const coreValues = $('ul.align-center.disc');
  coreValues.hide();
  coreValues.fadeIn(5000);

  const onCommentSubmit = (event) => {
    event.preventDefault();
    const commentSection = $('#comments-display');
    if ($('#comment-input').val()) {
      const comment = $('#comment-input').val();
      comments.push(comment);
      commentSection.append(`<li>${comment}</li>`);
      $('#comment-input').val('');
    } else {
      alert('Please provide an actual comment');
    }
  };

  $('#submit-comment').click(onCommentSubmit);
});
