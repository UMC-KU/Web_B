// setItem : localstorage 정보를 저장할때 사용하는 메소드

localStorage.setItem("name", "dwell");
localStorage.setItem("age", 100);

// getItem : localStorage에서 정보를 가져올때 사용하는 메소드

const result = localStorage.getItem("age");
console.log(typeof result);

// JSON.stringify, JSON.parse

const travel = {
  destinations: ["paris", "sydney", "taipei"],
  days: 100,
  mate: undefined,
  isAvailable: true,
};

localStorage.setItem("travel", JSON.stringify(travel));

const data = JSON.parse(localStorage.getItem("travel"));
console.log(data.destinations);

// removeItem, clear

localStorage.removeItem("name");
localStorage.clear();
