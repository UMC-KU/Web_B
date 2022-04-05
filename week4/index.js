// DOM

// document = html
const body = document.getElementsByTagName('body');
// 유사 배열
// console.log(body);
// console.log(body[0]);
// console.log(body[0].innerText);
// console.log(body[0].innerHTML);

const container = document.getElementsByClassName('container');
// console.log(container[0].innerText);

const title = document.getElementById('title');
// console.log(title);

const cityList = document.getElementById('cityList');
// console.log(cityList);
const cities = cityList.getElementsByTagName('li');
// console.log(cities);
const cities2 = cityList.querySelectorAll('li');
// console.log(cities2);

// 받아온 유사배열을 하나하나 접근할 경우 queryselector와 foreach를 사용하길 권장
// cities2.forEach(city => console.log(city.innerText));

// spread operator, Array.from
// 1. spread operator
const newCities = [...cities];
// console.log(newCities);
// newCities.map(city => console.log(city.innerText));

// 2. Array.from
const newCities2 = Array.from(cities);
// console.log(newCities2);
// newCities2.map(city => console.log(city.innerText));

// ------------------------------------------
// [java script로 style 적용]
body[0].style.backgroundColor = 'teal';
const cityDiv = document.querySelector('.city');
// console.log(cityDiv);
cityDiv.style.color = 'grey';

// [java script로 html 추가]
// 3. element 추가
const worstCity = document.createElement('ul');
const worstCityArr = ['Cairo', 'London', 'Risbon', 'Sydney'];
worstCityArr.map(city => {
  const worstCityItem = document.createElement('li');
  worstCityItem.innerText = city;
  // console.log(worstCityItem);
  worstCity.appendChild(worstCityItem);
})
// console.log(worstCity);

// cityDiv.appendChild(worstCity);

// const worstCityList = `
// <ul>
//   <li>Cairo</li>
//   <li>London</li>
//   <li>Risbon</li>
//   <li>Sydney</li>
// </ul>
// `
// [insertAdjacentHTML] -> 4가지 속성
// cityDiv.insertAdjacentHTML('beforeend', worstCityList);

container[0].appendChild(worstCity);
const worstCityDiv = document.createElement('div');
const worstCitySubTitle = document.createElement('h2');

worstCitySubTitle.innerText = '< Worst 5 >';
worstCityDiv.appendChild(worstCitySubTitle);
worstCityDiv.appendChild(worstCity);
container[0].appendChild(worstCityDiv);

// classList
worstCityDiv.classList.add('city');
// worstCityDiv.classList.remove('city');

// setAttribute
worstCity.setAttribute('name', 'worstCity');
console.log(worstCity);