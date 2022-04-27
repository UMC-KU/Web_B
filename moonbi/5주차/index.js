const $div = document.querySelector('.container');
const $form = document.querySelector('form');
const $input = document.querySelector('input');
const $button = document.querySelector('button');

//event 추가 
//1.이벤트 랜들러

// $div.이벤트이름 = 콜백함수
//콜백함수이기 때문에 호출기호 handClick()의 형태로 쓰지 않는다
// $div.onclick = handleClick;
// function handleClick () {
//     console.log('clicked');
// };

//동일한 대상에 똑감은 이벤트를 넣어줄 경우 아래에 있는 함수가 첫번째 함수를 덮어씌움

//2. addEventListener
//동일한 이벤트에 다른 함수를 씌워놔도 동시에 적용됨

// $div.addEventListener('click',() => handleClick);
// $div.addEventListener('click',() => alert('clicked'));

//3.  removeEventListener

// $div.removeEventListener('click', handleClick);
//이벤트에 적용된 함수를 제거해줌

$div.onclick = handleClick;

function handleClick (event) {
    console.log(event.target);
    //div를 가져옴
    console.log(event.target.innerText);
    //div 안의 텍스트를 가져옴
};

$input.addEventListener('change', handleChange);

function handleChange(event) {
    console.log(event.target);
    console.dir(event.target);
    //내용을 가져옴
    console.log(event.target.value);
    //입력값을 가져옴
};

$form.addEventListener('submit', handleSubmit);

function handleSubmit (event) {
    event.preventDefault();
    //새로고침으로 인한 입력값 새로고침을 제거해줌
    //이벤트가 가진 기본 값을 막아줌
    const inputValue = $input.value;
    console.log(inputValue);
    $input.value = '';
};