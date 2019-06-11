'use strict';

//Global Variables


var firstAndPike = {
  name: '1st and Pike',
  minCustomers: 23,
  maxCustomers: 65,
  avgCookiePerSale: 6.3,
  cookiesPurchasedArray: [],
  cookiesPurchasedByHour: function () {
    var product = this.randomCustomerGenerator() * this.avgCookiePerSale;
    return Math.round(product); //This is used to round cookies to the nearest whole cookie.  Source: https://www.geeksforgeeks.org/javascript-math-round-function/
  },
  randomCustomerGenerator: function () {
    return Math.floor(Math.random() * (this.maxCustomers - this.minCustomers + 1)) + this.minCustomers; //Source: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
  }
};
//This will be used to calculate the total cookies sold each hour.
for (var i = 0; i < 15; i++) {
  var soldCookies = firstAndPike.cookiesPurchasedByHour();
  firstAndPike.cookiesPurchasedArray.push (soldCookies);
  console.log(soldCookies);
}

var firstAndPikeSales = document.getElementById (firstAndPikeSales);
var sixAm = document.createElement ('li');
var sixAmText = document.createTextNode ('6AM Sales: ' + firstAndPike.cookiesPurchasedArray[0]);
sixAm.appendChild(sixAmText);
firstAndPikeSales.appendChild(sixAm);
console.log(firstAndPikeSales[0]);


// var message = hour + '00: ' + cookiesPurchasedArray[i] + ' cookies';
// console.log(message);
