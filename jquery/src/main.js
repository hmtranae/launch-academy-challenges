$(document).ready(() => {
  // const masaRestaurant = $('#masa');
  // masaRestaurant.hide();
  // masaRestaurant.show();
  // // console.log($('.top-bar'));
  // // console.log($('hi'));
  // $('#rosebud').fadeOut();
  // $('h1').css('color', 'lawngreen');
  // $('.top-bar').addClass('feature');

  // const toastTitle = $('#toast-title');
  // $('#friendly-toast').remove();
  // $('.resources').append(toastTitle);
  // $(toastTitle).addClass('list-item');

  // const newRestaurant = "Figaro's";
  // $('.resources').append(`<li>${newRestaurant}</li>`);

  $('#zaftigs').click(() => {
    $('#zaftigs img').toggle();
  });

  $('#restaurant-button').click(() => {
    const newRestaurant = $('#restaurant-name').val();
    $('ul').append(`<li><strong>${newRestaurant}</strong></li>`);
    $('#restaurant-name').val('');
  });
});
