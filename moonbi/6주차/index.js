//setItem: localstorage 정보를 저장할 때 사용하느 메소드

localStorage.setItem('name','dwell');
localStorage.setItem('age','100');

//로컬스토리지 저장되는 값들은 모두 문자열!

// getItem : localstorage에서 정보를 가져올 때 사용하는 메소드

const result = localStorage.getItem('age');
console.log(result);
console.log(typeof result);

const travel = {
    destinations : ['paris', 'sydney', 'taipei'],
    days: 100,
    mate: undefined,
    isAvailable: true
};

localStorage.setItem('travel', travel);
//객체 형태는 문자열이 아니므로 아예 저장이 안됨

//JSON.stringify, JSON.parse
localStorage.setItem('travel', JSON.stringify(travel));
//문자열로 바꾼 후에 저장

const data = localStorage.getItem('travel');
//문자열로 가져옴
console.log(data.destinations);
//문자열이기 때문에 리스트의 양식으로는 가져올 수 없음

const data1 = JSON.parse(localStorage.getItem('travel'));
console.log(data1.destinations);
//객체 형태로 잘 가져와짐


//removeItem

localStorage.removeItem('name');
//name 키 값의 데이터를 삭제

localStorage.clear();
//모든 데이터를 삭제
