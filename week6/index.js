// [local storage 확인하는 법]
// 개발자 도구 -> Application -> Local Storage

// [setItem : local storage에 정보를 저장할 때 사용하는 메소드]
// localStorage에는 문자형만 저장이 가능
// localStorage.setItem(key, value);
localStorage.setItem('name', 'jb');
localStorage.setItem('age', 100);

// [getItem : local storage에서 정보를 가져올 때 사용하는 메소드]
// localStorage.getItem(key);
const result = localStorage.getItem('age');
// console.log(result);
// console.log(typeof result);

// [JSON.stringify, JSON.parse]
const travel = {
  destinations : ['paris', 'sydney', 'taipei'],
  days : 100,
  mate : undefined,
  isAvailable : true
}

// 저장할 때 문자형으로 변환하여 저장
localStorage.setItem('travel', JSON.stringify(travel));

const data = localStorage.getItem('travel')
// console.log(data);
// console.log(data.destinations);

// 가져올 때 다시 객체로 변환하기
const data2 = JSON.parse(data);
// console.log(data2);

// [removeItem : 삭제할 때 사용하는 메소드]
// localStorage.removeItem(key);
localStorage.removeItem('name');
localStorage.clear();