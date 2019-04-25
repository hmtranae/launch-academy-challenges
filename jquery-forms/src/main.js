// SHORTHAND FOR DOCUMENT.READY()
$(() => {
  const $list = $('ul');
  const $newItemForm = $('#newItemForm');

  function fadeIn(index) {
    $(this).delay(450 * index).fadeIn(1600);
  }

  $('li').hide().each(fadeIn);

  $newItemForm.on('submit', (event) => {
    event.preventDefault();
    const text = $('input:text').val();
    $list.append(`<li class="cool">${text}</li>`);
    $('input:text').val('');
  });
});
