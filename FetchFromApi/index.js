'use strict';
/* 
//Synchrous way
const p = document.querySelector('.p');
p.textContent = 'My name is Shiva';
alert('Text changed');
p.style.color = 'red';
*/

/*
//Asynchrous way
const p = document.querySelector('.p');
setTimeout(() => {
  p.textContent = 'My name is Shiva';
  alert('Text changed');
}, 2000);
p.style.color = 'red';

// here  callback function is called after 2 seconds and it is asynchrous way 
// and it is not blocking the code

// callback function alone is not enough to make it asynchrous 
*/

/*
const img = document.querySelector('.dog');
img.src = 'images/dog.jpg';
img.addEventListener('hover', function () {
  img.classList.add('fadeIn');
});

p.style.width = '300px';

//event listener alone is not enough to make it asynchrous 
//just like callback function alone is not enough to make it asynchrous

*/
/*
const getCountryData = function (country) {
  const request = new XMLHttpRequest();
  request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
  request.send();
  // console.log(request.responseText); //undefined because it is asynchrous way and it is not blocking the code

  request.addEventListener('load', function () {
    //   console.log(this.responseText);
    const [data] = JSON.parse(this.responseText); //destructuring the array
    console.log(data);
    const html = `<article class="country">
      <img class="country__img" src="${data.flags.png}" />
      <div class="country__data">
          <h3 class="country__name">${data.name.common}</h3>
          <h4 class="country__region">${data.region}</h4>
          <p class="country__row"><span>👫</span>${data.population} people</p>
          <p class="country__row"><span>🗣️</span>${data.languages.eng}</p>
          <p class="country__row"><span>💰</span>${data.currencies.USD.name} </p>
      </div>
  </article>`;
    //   const html = `<h1>${data.name.common}</h1>`;

    document.querySelector('.countries').insertAdjacentHTML('beforeend', html);
  });
};

getCountryData('india');
getCountryData('usa');

//here we are making 2 requests to the server and it is not blocking the code
*/

/*

const renderCountry = function (data, className = '') {
  const html = `<article class="country ${className}">
    <img class="country__img" src="${data.flags.png}" />
    <div class="country__data">
        <h3 class="country__name">${data.name.common}</h3>
        <h4 class="country__region">${data.region}</h4>
        <p class="country__row"><span>👫</span>${data.population} people</p>
        <p class="country__row"><span>🗣️</span>${data.languages.eng}</p>
        <p class="country__row"><span>💰</span>${data.currencies} </p>
    </div>
</article>`;
  //   const html = `<h1>${data.name.common}</h1>`;
  document.querySelector('.countries').insertAdjacentHTML('beforeend', html);
};

const getCountryAndNeighbour = function (country) {
  const request = new XMLHttpRequest();
  request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
  request.send();
  // console.log(request.responseText); //undefined because it is asynchrous way and it is not blocking the code

  request.addEventListener('load', function () {
    //   console.log(this.responseText);
    const [data] = JSON.parse(this.responseText); //destructuring the array
    console.log(data);

    //render country 1
    renderCountry(data);

    //get neighbour country (2)
    const [neighbour] = data.borders;
    console.log(neighbour);

    if (!neighbour) return;

    //AJAX call country 2
    const request2 = new XMLHttpRequest();
    request2.open('GET', `https://restcountries.com/v3.1/alpha/${neighbour}`);
    request2.send();

    request2.addEventListener('load', function () {
      const [data2] = JSON.parse(this.responseText);
      console.log(data2);
      renderCountry(data2, 'neighbour'); //for that add css for neighbour class  so that it will be displayed smaller than the main country
      //   renderCountry(data2, 'neighbour');
    });
  });
};

getCountryAndNeighbour('usa');
getCountryAndNeighbour('india');
// here is 2 ajax call 

//nested callback is know as callback hell 
//escaping callbak heell using promises 

*/

// const request = new XMLHttpRequest();
// request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
// request.send();

//Modern way to make AJAX call
// const request = fetch(`https://restcountries.com/v3.1/name/usa`);
// console.log(request);

//fetch is a promise based function
//promise is an object that keeps track about whether a certain event has happened already or not
//if the event has happened then it is called fulfilled promise
//if the event has not happened then it is called pending promise
//if the event has not happened and it is not going to happen then it is called rejected promise

//promise is a container for an asynchrous operation
//promise is a container for an asynchrous operation that will be completed in the future

//Using Promises we no longer need to use callbaccks and events to handle asynchrous operations
//Promises are the modern way of handling asynchrous operations in JavaScript

//we have chain of promises which escape callback hell

//Consuming Promises
//Consuming promises means consuming the value that is produced by the promise

/* // use promises to handle asynchrous operations in modern way 

const renderCountry = function (data, className = '') {
  const html = `<article class="country ${className}">
      <img class="country__img" src="${data.flags.png}" />
      <div class="country__data">
          <h3 class="country__name">${data.name.common}</h3>
          <h4 class="country__region">${data.region}</h4>
          <p class="country__row"><span>👫</span>${data.population} people</p>
          <p class="country__row"><span>🗣️</span>${data.languages.eng}</p>
          <p class="country__row"><span>💰</span>${data.currencies} </p>
      </div>
  </article>`;
  //   const html = `<h1>${data.name.common}</h1>`;
  document.querySelector('.countries').insertAdjacentHTML('beforeend', html);
};

const getCountryData = function (country) {
  fetch(`https://restcountries.com/v3.1/name/${country}`)
    .then(function (response) {
      console.log(response);
      return response.json(); //json is new asynchrous function which is also a promise
    })
    .then(function (data) {
      //data is the value that is produced by the promise which is returned by the json function which is returned by the fetch function
      const [data2] = data;
      console.log(data); // it is an array of objects
      console.log(data2); // it is an object
      //   renderCountry(data[0]);
      renderCountry(data2);
    });
};

getCountryData('india');

*/

/*
const renderCountry = function (data, className = '') {
  const html = `<article class="country ${className}">
        <img class="country__img" src="${data.flags.png}" />
        <div class="country__data">
            <h3 class="country__name">${data.name.common}</h3>
            <h4 class="country__region">${data.region}</h4>
            <p class="country__row"><span>👫</span>${data.population} people</p>
            <p class="country__row"><span>🗣️</span>${data.languages.eng}</p>
            <p class="country__row"><span>💰</span>${data.currencies} </p>
        </div>
    </article>`;
  //   const html = `<h1>${data.name.common}</h1>`;
  document.querySelector('.countries').insertAdjacentHTML('beforeend', html);
};

//use of arrow function to make code more concise and readable
const getCountryData = function (country) {
  fetch(`https://restcountries.com/v3.1/name/${country}`)
    .then((response) => response.json())
    .then((data) => renderCountry(data[0]));
};

getCountryData('usa');
*/

//Chaining Promises
//Chaining promises means that we can use the value that is produced by one promise to start a new promise

/*
const getCountryData = function (country) {
  fetch(`https://restcountries.com/v3.1/name/${country}`)
    .then((response) => response.json())
    .then((data) => {
      renderCountry(data[0]);
      const neighbour = data[0].borders[0];
      if (!neighbour) return;

      return fetch(`https://restcountries.com/v3.1/alpha/${neighbour}`)
        .then((response) => response.json())
        .then((data) => renderCountry(data[0], 'neighbour'));
    });
};

//remember whatever we return through a promise is the value that is consumed by the next then method and a callback function is passed to the then method which is called when the promise is fulfilled 
const renderCountry = function (data, className = '') {
  const html = `<article class="country ${className}">
          <img class="country__img" src="${data.flags.png}" />
          <div class="country__data">
              <h3 class="country__name">${data.name.common}</h3>
              <h4 class="country__region">${data.region}</h4>
              <p class="country__row"><span>👫</span>${data.population} people</p>
              <p class="country__row"><span>🗣️</span>${data.languages.eng}</p>
              <p class="country__row"><span>💰</span>${data.currencies} </p>
          </div>
      </article>`;
  //   const html = `<h1>${data.name.common}</h1>`;
  document.querySelector('.countries').insertAdjacentHTML('beforeend', html);
};

getCountryData('usa');

*/

//Handling Rejected Promises
//if the promise is rejected then the catch method is called and the error is passed to the catch method as an argument and the catch method is called when the promise is rejected
//handling using another callback function

/*const getCountryData = function (country) {
  fetch(`https://restcountries.com/v3.1/name/${country}`)
    .then(
      (response) => response.json(),
      (err) => alert(err)
    )
    .then((data) => {
      renderCountry(data[0]);
      const neighbour = data[0].borders[0];
      if (!neighbour) return;

      return fetch(`https://restcountries.com/v3.1/alpha/${neighbour}`)
        .then(
          (response) => response.json(),
          (err) => alert(err)
        )
        .then((data) => renderCountry(data[0], 'neighbour'));
    });
};
*/

//handling using catch method
const getCountryData = function (country) {
  fetch(`https://restcountries.com/v3.1/name/${country}`)
    .then((response) => response.json())
    .then((data) => {
      renderCountry(data[0]);
      const neighbour = data[0].borders[0];
      if (!neighbour) return;

      return fetch(`https://restcountries.com/v3.1/alpha/${neighbour}`)
        .then((response) => response.json())
        .then((data) => renderCountry(data[0], 'neighbour'))
        .catch((err) => {
          //catch method is called when the promise is rejected
          alert(err);
        })
        .finally(() => {
          //finally method is called when the promise is fulfilled or rejected
          console.log(`finally always called`);
        });
    });
};

const renderCountry = function (data, className = '') {
  const html = `<article class="country ${className}">
            <img class="country__img" src="${data.flags.png}" />
            <div class="country__data">
                <h3 class="country__name">${data.name.common}</h3>
                <h4 class="country__region">${data.region}</h4>
                <p class="country__row"><span>👫</span>${data.population} people</p>
                <p class="country__row"><span>🗣️</span>${data.languages.eng}</p>
                <p class="country__row"><span>💰</span>${data.currencies} </p>
            </div>
        </article>`;
  //   const html = `<h1>${data.name.common}</h1>`;
  document.querySelector('.countries').insertAdjacentHTML('beforeend', html);
};

getCountryData('usa');
