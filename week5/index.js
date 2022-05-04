const $div = document.querySelector(".container");
const $form = document.querySelector(".form");
const $input = document.querySelector(".input");
const $button = document.querySelector(".button");

// 1. 이벤트 핸들러
// target.이벤트이름 = 콜백함수

//$div.onclick = () => console.log("clicked");
//$div.onclick = () => alert("clicked");

//alert는 뜨지만 console은 안찍힘!! -> addEventLister 사용

//function handleClick () {
//    console.log('clicked');
//}

// 2. addEventListener

//$div.addEventListener('click', () => console.log('clicked'))
//$div.addEventListener('click', () => alert('clicked'));

//function handleClick () {
//    console.log('clicked');
//}
// 3. removeEventListner

// $div.removeEventListener('click', handleClick);

//4. event
//$div.addEventListener('click', handleClick)

//function handleClick (event) {
//    console.log(event.target.innerText);
//}

//$input.addEventListener('change', handleChange);

//function handleChange(event) {
//    console.log(event.target.value);
//}

$form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  //const inputValue; 이렇게 쓰면 input의 Value값을 가져올 수 없다.
  const inputValue = $input.value;
  $input.value = "";
}
