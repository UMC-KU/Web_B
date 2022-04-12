//DOM
// document = html
const $body = document.getElementsByTagName("body");
const $container = document.getElementsByClassName("container");
const $title = document.getElementById("title");
const $cityList = document.getElementById("cityList");
const $cities = $cityList.getElementsByTagName("li");
const $cityDiv = document.querySelector(".city");

console.log($body[0].innerHTML);
console.log($container[0].innerText);
console.log($title);

console.log($cityList);
console.log($cities);

// $cities.forEach(city => console.log(city.innerText));

// spread operator , Array.from
// 1. spread operator

// const newCities = [...$cities]
// console.log(newCities);

// 2. Array.from

const newCities = Array.from($cities);
newCities.map((city) => console.log(city.innerText));

$body[0].style.backgroundColor = "teal";
$cityDiv.style.color = "grey";

// 3. element 추가
const worstCity = document.createElement("ul");
const worstCityDiv = document.createElement("div");
const worstCitySubTitle = document.createElement("h2");
const worstCityArr = ["Cairo", "London", "Risbon", "Sydney"];

worstCitySubTitle.innerText = "<Worst 5>";
worstCityDiv.appendChild(worstCitySubTitle);

worstCityArr.map((city) => {
  const worstCityItem = document.createElement("li");
  worstCityItem.innerText = city;
  console.log(worstCityItem);
  worstCity.appendChild(worstCityItem);
});

worstCityDiv.appendChild(worstCity);
$container[0].appendChild(worstCityDiv);

//const worstCityList = `
//<ul>
//  <li>Cairo</li>
//  <li>London</li>
//  <li>Risbon</li>
//  <li>Sydney</li>
//</ul>`

// $cityDiv.insertAdjacentHTML('beforeend', worstCityList)
worstCityDiv.classList.add("city");
// worstCityDiv.classList.remove('city');

//setAttribute
worstCity.setAttribute("name", "worstcity");

console.log(worstcity);
