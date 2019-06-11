'use strict';

//Global Variables
var locations = document.getElementById ('locations');

var firstAndPike = {
  name: '1st and Pike',
  minCustomers: 23,
  maxCustomers: 65,
  avgCookiePerSale: 6.3,
  cookiesPurchasedArray: [],
  totals: total,

  //This will be used to multiply the randomly generated number of customers by the average cookies per sale in order to generate a value for total cookies sold each hour.
  cookiesPurchasedByHour: function () {
    var product = this.randomCustomerGenerator() * this.avgCookiePerSale;
    return Math.round(product); //This is used to round cookies to the nearest whole cookie.  Source: https://www.geeksforgeeks.org/javascript-math-round-function/
  },

  //This is generating a random number of customers to visit the store each hour
  randomCustomerGenerator: function () {
    return Math.floor(Math.random() * (this.maxCustomers - this.minCustomers + 1)) + this.minCustomers; //Source: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
  }
};
//This will be used to calculate the total cookies sold each hour.
var total = 0;
for (var i = 0; i < 15; i++) {
  var soldCookies = firstAndPike.cookiesPurchasedByHour();
  total += soldCookies;
  firstAndPike.cookiesPurchasedArray.push (soldCookies);
  // console.log(soldCookies);
  // console.log (total);
}

var locationLiEl = document.createElement ('li');
var h3El = document.createElement ('h3');
h3El.textContent = firstAndPike.name;

locationLiEl.appendChild(h3El); //This adds an h3 title for the list '1st and Pike'

var ulEl = document.createElement ('ul');

for (var j = 0; j < firstAndPike.cookiesPurchasedArray.length; j++) {
  var hourSales = document.createElement ('li');
  var hour = j + 6 + '00: ';
  hour = hour.padStart (6, '0'); //This is used to display correct military tiume for each li
  hourSales.textContent = hour + firstAndPike.cookiesPurchasedArray[j] + 'cookies sold.';
  ulEl.appendChild(hourSales);
}

//Add the total cookie sales at the end of the list
hourSales = document.createElement ('li');
hourSales.textContent = total + ' Total cookie sales.';
ulEl.appendChild(hourSales);

//Append list items to their parent containers.
locationLiEl.appendChild(ulEl);
locations.appendChild(locationLiEl);

var seaTac = {
  name: 'Seatac Airport',
  minCustomers: 3,
  maxCustomers: 24,
  avgCookiePerSale: 1.2,
  cookiesPurchasedArray: [],
  totals: total,

  //This will be used to multiply the randomly generated number of customers by the average cookies per sale in order to generate a value for total cookies sold each hour.
  cookiesPurchasedByHour: function () {
    var product = this.randomCustomerGenerator() * this.avgCookiePerSale;
    return Math.round(product); //This is used to round cookies to the nearest whole cookie.  Source: https://www.geeksforgeeks.org/javascript-math-round-function/
  },

  //This is generating a random number of customers to visit the store each hour
  randomCustomerGenerator: function () {
    return Math.floor(Math.random() * (this.maxCustomers - this.minCustomers + 1)) + this.minCustomers; //Source: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
  }
};
//This will be used to calculate the total cookies sold each hour.
var total = 0;
for (var i = 0; i < 15; i++) {
  var soldCookies = seaTac.cookiesPurchasedByHour();
  total += soldCookies;
  seaTac.cookiesPurchasedArray.push (soldCookies);
  // console.log(soldCookies);
  // console.log (total);
}

var locationLiEl = document.createElement ('li');
var h3El = document.createElement ('h3');
h3El.textContent = seaTac.name;

locationLiEl.appendChild(h3El); //This adds an h3 title for the list '1st and Pike'

var ulEl = document.createElement ('ul');

for (var j = 0; j < seaTac.cookiesPurchasedArray.length; j++) {
  var hourSales = document.createElement ('li');
  var hour = j + 6 + '00: ';
  hour = hour.padStart (6, '0'); //This is used to display correct military tiume for each li
  hourSales.textContent = hour + seaTac.cookiesPurchasedArray[j] + 'cookies sold.';
  ulEl.appendChild(hourSales);
}

//Add the total cookie sales at the end of the list
hourSales = document.createElement ('li');
hourSales.textContent = total + ' Total cookie sales.';
ulEl.appendChild(hourSales);

//Append list items to their parent containers.
locationLiEl.appendChild(ulEl);
locations.appendChild(locationLiEl);

var seattleCenter = {
  name: 'Seattle Center',
  minCustomers: 11,
  maxCustomers: 38,
  avgCookiePerSale: 3.7,
  cookiesPurchasedArray: [],
  totals: total,

  //This will be used to multiply the randomly generated number of customers by the average cookies per sale in order to generate a value for total cookies sold each hour.
  cookiesPurchasedByHour: function () {
    var product = this.randomCustomerGenerator() * this.avgCookiePerSale;
    return Math.round(product); //This is used to round cookies to the nearest whole cookie.  Source: https://www.geeksforgeeks.org/javascript-math-round-function/
  },

  //This is generating a random number of customers to visit the store each hour
  randomCustomerGenerator: function () {
    return Math.floor(Math.random() * (this.maxCustomers - this.minCustomers + 1)) + this.minCustomers; //Source: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
  }
};
//This will be used to calculate the total cookies sold each hour.
var total = 0;
for (var i = 0; i < 15; i++) {
  var soldCookies = seattleCenter.cookiesPurchasedByHour();
  total += soldCookies;
  seattleCenter.cookiesPurchasedArray.push (soldCookies);
  // console.log(soldCookies);
  // console.log (total);
}

var locationLiEl = document.createElement ('li');
var h3El = document.createElement ('h3');
h3El.textContent = seattleCenter.name;

locationLiEl.appendChild(h3El); //This adds an h3 title for the list '1st and Pike'

var ulEl = document.createElement ('ul');

for (var j = 0; j < seattleCenter.cookiesPurchasedArray.length; j++) {
  var hourSales = document.createElement ('li');
  var hour = j + 6 + '00: ';
  hour = hour.padStart (6, '0'); //This is used to display correct military tiume for each li
  hourSales.textContent = hour + seattleCenter.cookiesPurchasedArray[j] + 'cookies sold.';
  ulEl.appendChild(hourSales);
}

//Add the total cookie sales at the end of the list
hourSales = document.createElement ('li');
hourSales.textContent = total + ' Total cookie sales.';
ulEl.appendChild(hourSales);

//Append list items to their parent containers.
locationLiEl.appendChild(ulEl);
locations.appendChild(locationLiEl);

var capitalHill = {
  name: 'Capital Hill',
  minCustomers: 20,
  maxCustomers: 38,
  avgCookiePerSale: 2.3,
  cookiesPurchasedArray: [],
  totals: total,

  //This will be used to multiply the randomly generated number of customers by the average cookies per sale in order to generate a value for total cookies sold each hour.
  cookiesPurchasedByHour: function () {
    var product = this.randomCustomerGenerator() * this.avgCookiePerSale;
    return Math.round(product); //This is used to round cookies to the nearest whole cookie.  Source: https://www.geeksforgeeks.org/javascript-math-round-function/
  },

  //This is generating a random number of customers to visit the store each hour
  randomCustomerGenerator: function () {
    return Math.floor(Math.random() * (this.maxCustomers - this.minCustomers + 1)) + this.minCustomers; //Source: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
  }
};
//This will be used to calculate the total cookies sold each hour.
var total = 0;
for (var i = 0; i < 15; i++) {
  var soldCookies = capitalHill.cookiesPurchasedByHour();
  total += soldCookies;
  capitalHill.cookiesPurchasedArray.push (soldCookies);
  // console.log(soldCookies);
  // console.log (total);
}

var locationLiEl = document.createElement ('li');
var h3El = document.createElement ('h3');
h3El.textContent = capitalHill.name;

locationLiEl.appendChild(h3El); //This adds an h3 title for the list '1st and Pike'

var ulEl = document.createElement ('ul');

for (var j = 0; j < capitalHill.cookiesPurchasedArray.length; j++) {
  var hourSales = document.createElement ('li');
  var hour = j + 6 + '00: ';
  hour = hour.padStart (6, '0'); //This is used to display correct military tiume for each li
  hourSales.textContent = hour + capitalHill.cookiesPurchasedArray[j] + 'cookies sold.';
  ulEl.appendChild(hourSales);
}

//Add the total cookie sales at the end of the list
hourSales = document.createElement ('li');
hourSales.textContent = total + ' Total cookie sales.';
ulEl.appendChild(hourSales);

//Append list items to their parent containers.
locationLiEl.appendChild(ulEl);
locations.appendChild(locationLiEl);

var alki = {
  name: 'Alki',
  minCustomers: 2,
  maxCustomers: 16,
  avgCookiePerSale: 4.6,
  cookiesPurchasedArray: [],
  totals: total,

  //This will be used to multiply the randomly generated number of customers by the average cookies per sale in order to generate a value for total cookies sold each hour.
  cookiesPurchasedByHour: function () {
    var product = this.randomCustomerGenerator() * this.avgCookiePerSale;
    return Math.round(product); //This is used to round cookies to the nearest whole cookie.  Source: https://www.geeksforgeeks.org/javascript-math-round-function/
  },

  //This is generating a random number of customers to visit the store each hour
  randomCustomerGenerator: function () {
    return Math.floor(Math.random() * (this.maxCustomers - this.minCustomers + 1)) + this.minCustomers; //Source: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
  }
};
//This will be used to calculate the total cookies sold each hour.
var total = 0;
for (var i = 0; i < 15; i++) {
  var soldCookies = alki.cookiesPurchasedByHour();
  total += soldCookies;
  alki.cookiesPurchasedArray.push (soldCookies);
  // console.log(soldCookies);
  // console.log (total);
}

var locationLiEl = document.createElement ('li');
var h3El = document.createElement ('h3');
h3El.textContent = alki.name;

locationLiEl.appendChild(h3El); //This adds an h3 title for the list '1st and Pike'

var ulEl = document.createElement ('ul');

for (var j = 0; j < alki.cookiesPurchasedArray.length; j++) {
  var hourSales = document.createElement ('li');
  var hour = j + 6 + '00: ';
  hour = hour.padStart (6, '0'); //This is used to display correct military tiume for each li
  hourSales.textContent = hour + alki.cookiesPurchasedArray[j] + 'cookies sold.';
  ulEl.appendChild(hourSales);
}

//Add the total cookie sales at the end of the list
hourSales = document.createElement ('li');
hourSales.textContent = total + ' Total cookie sales.';
ulEl.appendChild(hourSales);

//Append list items to their parent containers.
locationLiEl.appendChild(ulEl);
locations.appendChild(locationLiEl);

/*
STEPS FOR DOM MANIPULATION:
1. Reference the parent: document.get
2. create a new element: document.createElement()
3. create content for element:
4. Append back to parent element:  */
