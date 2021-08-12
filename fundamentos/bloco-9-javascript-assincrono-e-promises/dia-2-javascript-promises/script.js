// apiScript.js
const API_URL = 'https://icanhazdadjoke.com/';

const fetchJoke = () => {
    

    fetch(API_URL, {headers: { 'Accept': 'application/json' }})
        .then(response => response.json)
        .then(data => document.getElementById('jokeContainer').innerText = data.joke);
};

window.onload = () => fetchJoke();

const fetchPromise = () => {
    const myPromise = new Promise((resolve, reject) => {
      const myArray = Array.from(
        { length: 10 },
        () =>  Math.floor(Math.random() * 50) + 1
      );
      const sum = myArray.map(number => number * number)
                         .reduce((sum, number) => sum + number);
  
      (sum < 8000) ? resolve() : reject();
    });
  
    myPromise
      .then(() => console.log('Promise resolvida'))
      .catch(() => console.log('Promise rejeitada'));
  };
  
  fetchPromise();