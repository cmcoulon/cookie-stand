'use strict';

//Global Variables
var salesByStore = document.getElementById ('salesByStore');
var locationGlobalArray = [];

function Locations (name, minCustomers, maxCustomers, avgCookiesPerSale) {
  this.name = name;
  this.minCustomers = minCustomers;
  this.maxCustomers = maxCustomers;
  this.avgCookiesPerSale = avgCookiesPerSale;
  this.cookiesPurchasedArray = [];
  this.locationTotal = 0;
  this.overallTotal = 0;
  this.fillCookiesPurchasedArray();
  this.domManipulation();
  locationGlobalArray.push (this);

}

//This will be used to multiply the randomly generated number of customers by the average cookies per sale in order to generate a value for total cookies sold each hour.
Locations.prototype.cookiesPurchasedByHour = function () {
  var product = this.randomCustomerGenerator() * this.avgCookiesPerSale;
  return Math.round(product); //This is used to round cookies to the nearest whole cookie.  Source: https://www.geeksforgeeks.org/javascript-math-round-function/
};

//This is generating a random number of customers to visit the store each hour
Locations.prototype.randomCustomerGenerator = function () {
  return Math.floor(Math.random() * (this.maxCustomers - this.minCustomers + 1)) + this.minCustomers; //Source: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
};

//This method pushes the total cookie sales at this store in an hour to fill an index in the cookiesPurchasedArray.
Locations.prototype.fillCookiesPurchasedArray = function () {
  for (var i = 0; i < 15; i++) {
    var soldCookies = this.cookiesPurchasedByHour();
    this.locationTotal += soldCookies;
    this.cookiesPurchasedArray.push (soldCookies);
  }
};

//This section sends total cookie sales for this particular store in an hour to be displayed on the page.
Locations.prototype.domManipulation = function () {
  var locationTrEl = document.createElement ('tr');
  var tdEl = document.createElement ('td');
  tdEl.textContent = this.name;
  locationTrEl.appendChild (tdEl);

  for (var j = 0; j < this.cookiesPurchasedArray.length; j++) {
    tdEl = document.createElement ('td');
    tdEl.textContent = this.cookiesPurchasedArray[j];
    locationTrEl.appendChild(tdEl);
  }

  //Add the total cookie sales at the end of the list
  tdEl = document.createElement ('td');
  tdEl.textContent = this.locationTotal;
  locationTrEl.appendChild(tdEl);

  salesByStore.appendChild(locationTrEl);
};

//This function will create the header of the table
//This is the first cell of the table and will be labled 'location'
function tableHeader () {
  var locationTrEl = document.createElement ('tr');
  var tdEl = document.createElement ('td');
  tdEl.textContent = 'Location';
  locationTrEl.appendChild (tdEl);

  //this for loop generates the different hours of the day
  for (var j = 0; j < 15; j++) {
    var time = document.createElement ('td');
    var hour = j + 6 + '00';
    hour = hour.padStart (4, '0'); //This is used to display correct military tiume for each li
    time.textContent = hour;
    locationTrEl.appendChild(time);
  }
  //This will fill the last cell of the first row with the label 'totals'
  tdEl = document.createElement ('td');
  tdEl.textContent = 'Total';
  locationTrEl.appendChild (tdEl);

  salesByStore.appendChild (locationTrEl);
}
tableHeader();

//This will be the footer row displaying totals for each hour
function tableFooter () {
  var locationTrEl = document.createElement ('tr');
  var tdEl = document.createElement ('td');
  tdEl.textContent = 'Totals';
  locationTrEl.appendChild(tdEl);

  //This section is used to calculate total sales from all shops combined each hour and also add them up as an overall total sales for the day in the last cell.  I was helped with figuring out the logic in this section by my spirit guide Jackie!
  var overallTotalSales = 0;
  var hourlyTotalSales = 0;
  for (var i = 0; i < 15; i++) {
    overallTotalSales += hourlyTotalSales;
    hourlyTotalSales = 0;
    for (var j = 0; j < locationGlobalArray.length; j++) {
      hourlyTotalSales += locationGlobalArray[j].cookiesPurchasedArray[i];
    }
    tdEl = document.createElement ('td');
    tdEl.textContent = hourlyTotalSales;
    locationTrEl.appendChild(tdEl);
  }

  tdEl = document.createElement ('td');
  tdEl.textContent = overallTotalSales;
  locationTrEl.appendChild(tdEl);

  salesByStore.appendChild(locationTrEl);
}

//This section creates objects for each of the locations and sends the provided parameters to the constructor.
var firstAndPike = new Locations ('1st and Pike', 23, 65, 6.3);
var seaTac = new Locations ('Seatac Airport', 3, 24, 1.2);
var seattleCenter = new Locations ('Seattle Center', 11, 38, 3.7);
var capitalHill = new Locations ('Capital Hill', 20, 38, 2.3);
var alki = new Locations ('Alki', 2, 16, 4.6);

tableFooter();

/*
STEPS FOR DOM MANIPULATION:
1. Reference the parent: document.get
2. create a new element: document.createElement()
3. create content for element:
4. Append back to parent element:  */
