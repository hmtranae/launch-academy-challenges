// Exercise 1): Find the top navbar, using a query for the HTML element type. The navbar's type is `<nav>`.
document.querySelector('nav');

// Exercise 2): Find the sidebar on the left by using its id and set it equal to the variable sideBar.
const sideBar = document.querySelector('#sidebar-left');

// Exercise 3): Find the 'Pages' and 'Groups' sections of the sidebar by using their class.
const pages = document.querySelectorAll('.pages');
const groups = document.querySelectorAll('.groups');

// Exercise 4): Set the text of the 'Favorites' `h5` to say "Least Favs".
sideBar.querySelector('.favorites').querySelector('h5').innerText = 'Least Favs';

// Exercise 5): Find the first of the ads in the sidebar and hide it.
document.querySelector('.ad-slot').style.visibility = 'hidden';

// Exercise 6): Set the visibility on the ad that you hid in the previous exercise to make it visible again.
document.querySelector('.ad-slot').style.visibility = 'visible';

// Exercise 7): Use `setAttribute` to change `src` attribute of one of the ads in the sidebar.
document.querySelector('.ad-slot img').setAttribute('src', 'http://placebear.com/200/300');

// Exercise 8): Find Sam's post and change its text to something incredible.
document.querySelectorAll('.media-body')[4].getElementsByTagName('p')[0].innerText = 'JS is awesome';

// Exercise 9): Find the first post and add the `.post-liked` class to it, and watch it turn blue.
const firstPost = document.querySelector('#list-of-posts li');
firstPost.className += ' post-liked';

// Exercise 10: Find the second post and add the `.post-shared` class to the `li` containing the text Shared to watch it turn red.
const secondShare = document.querySelectorAll('#list-of-posts>li')[2].querySelector('.inline-list').querySelectorAll('li')[2];
secondShare.className += ' post-shared';
