const sniffleList = $('.achoo');
const toggleDoggleButton = $('#toggle-doggle');

$(document).ready(() => {
  // your code here
  let listLength = $('li').length;
  $('#counter').html(listLength);

  const toggleDoggleClick = () => {
    sniffleList.toggle();
  };

  const submitButton = $('#add');

  const appendAwesomeItem = (event) => {
    event.preventDefault();
    const input = $('#awesomeType').val();
    if (input.includes('dog')) {
      alert('This awesome sauce has too much dog already!');
    } else {
      listLength += 1;
      $('#counter').html(listLength);
      const awesomeList = $('#list');
      awesomeList.append(`<li>${input}</li>`);
    }
    $('#awesomeType').val('');
  };


  submitButton.click(appendAwesomeItem);
  toggleDoggleButton.click(toggleDoggleClick);
});
