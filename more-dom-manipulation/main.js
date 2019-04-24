const bikesForSale = Object.keys(data);

const appendElement = (target, tag, text) => {
  const element = document.createElement(tag);
  const textNode = document.createTextNode(text);
  element.appendChild(textNode);
  target.appendChild(element);
};

const bikeDiv = document.getElementById('bikeDiv');

bikesForSale.forEach((bike) => {
  appendElement(bikeDiv, 'h4', bike);
});

const firstBike = document.querySelector('h4');
console.log(firstBike);

// const allBikes = document.querySelectorAll('h4');
// console.log(allBikes);

const allBikes = document.querySelectorAll('h4');
for (let i = 0; i < allBikes.length; i += 1) {
  allBikes[i].className = 'forSale';
}
console.log(allBikes);

const forSaleClass = document.getElementsByClassName('forSale');
console.log(forSaleClass);

const bikeSaleData = Object.values(data);

const toggle = (event) => {
  if (event.target.style.display !== 'block') {
    event.target.style.display = 'block';
  } else {
    event.target.style.display = 'none';
  }
};

for (let i = 0; i < bikeSaleData.length; i++) {
  allBikes[i].addEventListener('click', toggle);
  appendElement(allBikes[i], 'li', `Year: ${bikeSaleData[i].year}  Mileage: ${bikeSaleData[i].mileage}  Price: ${bikeSaleData[i].price}`);
}
