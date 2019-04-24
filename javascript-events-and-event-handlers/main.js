window.onload = () => {
  console.log('window loaded');
};

const text = document.getElementById('changing-color-text');
let stringOfOs = 'o';

const onClick = (event) => {
  const colors = ['Aqua', 'Blue', 'Orange', 'Green', 'Red', 'LightSteelBlue'];
  const index = Math.floor(Math.random() * colors.length);
  const color = colors[index];
  stringOfOs += 'o';
  event.target.innerHTML = `So co${stringOfOs}l, w${stringOfOs}w`;
  event.target.style.color = color;
  event.target.style.border = `5px solid ${color}`;
};
text.addEventListener('click', (onClick));
// why don't we invoke onClick in the addEventListener
// why do we need to put the function onClick before the line where we add the event listener?

const box = document.getElementsByClassName('opaque-box')[0];
// why do we need index 0 of getElementsByClassName

const onMouseOver = (event) => {
  event.target.style.opacity = 1;
};

const onMouseOut = (event) => {
  event.target.style.opacity = 0;
};

box.addEventListener('mouseover', onMouseOver);
box.addEventListener('mouseout', onMouseOut);
