// SHORTHAND FOR DOCUMENT.READY()
$(() => {
  let $list;
  let $newItemForm;
  let $newItemButton;
  const item = '';
  $list = $('ul');
  $newItemForm = $('#newItemForm');

  $('li').hide().each(function (index) { // Hide list items
    $(this).delay(450 * index).fadeIn(1600); // Then fade them in
  });

  $newItemForm.on('submit', (event) => {
    event.preventDefault();
    const text = $('input:text').val();
    $list.append(`<li class="cool">${text}</li>`);
    $('input:text').val('');
  });
});
