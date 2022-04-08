const $div = document.querySelector('.container');
const $form = document.querySelector('form');
const $input = document.querySelector('input');
const $button = document.querySelector('button');

// [이벤트 추가]
// 1. 이벤트 핸들러
// target.on이벤트이름 = 콜백함수

// [방법1]
// $div.onclick = handleClick;

// function handleClick(){
//     console.log('clicked');
// }

// [방법2]
// target.addEventListener('이벤트이름', 함수/콜백함수)
// 동일한 대상에 동일한 이벤트를 적용시킬 경우, 마지막에 적용한 이벤트로 덮어씌어진다.
// $div.onclick = () => console.log('clicked');
// $div.onclick = () => alert('clicked');

// 2. addEventListener
// 동일한 대상에 동일한 이벤트를 적용시킬 경우, 다 적용이 된다.

// $div.addEventListener('click', handleClick);
// $div.addEventListener('click', () => alert('clicked'));

// [이벤트 삭제]
// 3. removeEventListener
// target.removeEventListener('이벤트이름', 함수이름)   // 함수이름 부분에 익명 함수가 들어가면 안된다.

// $div.removeEventListener('click', handleClick);

// [이벤트 인자]
// 4. event
$div.addEventListener('click', handleClick);

function handleClick(event){
    // console.log(event);
    // event 에 들어있는 많은 정보들 중, target에 들어있는 내용을 많이 활용
    console.log(event.target.innerText);
}

// change 이벤트는 입력하고 마우스를 한번 다른 곳에 찍어야 동작함
$input.addEventListener('change', handleChange);

function handleChange(event) {
    // console.dir(event.target);
    console.log(event.target.value);
}

// form의 새로고침을 막는 이벤트
$form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
    event.preventDefault();     // 기본적으로 이벤트를 막는 함수
    
    const inputValue = $input.value;
    console.log(inputValue);
    $input.value = '';
}