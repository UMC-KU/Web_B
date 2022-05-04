// 동기(javascript) = synchronous = 순서대로 일을 처리하는 방식
// 비동기 = asynchronous = 순서대로 일을 처리하지 않고 빨리 처리할 수 있는 것들을 먼저 처리하는 방식
//=> 자바스크립트는 동기적 언어이다. => 이를 해결하기 위해 등장하는 방식이 콜백

console.log('1')
setTimeout(function() {
    console.log('2')
},10) // 비동기적으로 처리 => 입력한 시간이 지난 후 찍어줌, milisecond
console.log('3')
console.log('4')
setTimeout(function() {
    console.log('5')
},5)//콜백함수, 특정 시간 후에 다시 함수를 불러와 실행하는 것 => 동기적으로 함수를 먼저 다 끝내고, 이벤트가 발생했을 때 함수를 발생시킴
console.log('6')
setTimeout(function() {
    console.log('7')
},40)
console.log('8')
setTimeout(function() {
    console.log('9')
},30)
console.log('10')

//1, 3, 4, 6, 8, 10, 5, 2, 9, 7
//바로바로 찍을 수 있는 console.log부터 실행하고, setTimeout을 순서대로 실행
//setTimeout(콜백을 받는 인자(함수), 딜레이 되는 시간)
//먼저 동기적으로 실행을 다 시킨 후부터 10ms 기다린 후 실행

function syncFunc(syncCallback) {
	syncCallback();
}

function asyncFunc(asyncCallback) {
	setTimeout(asyncCallback, 1);
}

//함수의 인자로 함수를 넣어줌 => 콜백 함수
//동기와 비동기를 같이 사용했을 때 순서를 보장할 수 있기 때문에 콜백함수를 사용

syncFunc(() => console.log('sync'));
asyncFunc(() => console.log('async'));
//콜백 함수

//================================

function syncFunc(syncCallback) {
	syncCallback();
}

function asyncFunc(asyncCallback) {
	setTimeout(() => {
        asyncCallback();
        syncFunc(() => console.log('sync'));
    }, 3000);//콜백을 먼저 호출해주고 그 이후에 sync가 실행이 될 수 있도록 작성
}

asyncFunc(() => console.log('async'));

//================================
//id값을 입력하면 그에 해당하는 comment들을 출력해주는 코드

const posts = [
    { post_id: 1, post_title: "첫번쨰 글" },
    { post_id: 2, post_title: "두번쨰 글" },
    { post_id: 3, post_title: "세번쨰 글" },
];

const comments = [
    { post_id: 1, comment_id: 1, comment: "첫번쨰 글 첫번쨰 코멘트" },
    { post_id: 2, comment_id: 1, comment: "두번쨰 글 첫번쨰 코멘트" },
    { post_id: 2, comment_id: 2, comment: "두번쨰 글 두번쨰 코멘트" },
    { post_id: 2, comment_id: 3, comment: "두번쨰 글 세번쨰 코멘트" },
    { post_id: 3, comment_id: 1, comment: "세번쨰 글 첫번쨰 코멘트" },
    { post_id: 3, comment_id: 2, comment: "세번쨰 글 두번쨰 코멘트" },
];

const postNum = 2;

const getPost = (id, onSuccess, onError) => { //post number(id)를 인자로 받고, 성공, 실패의 경우를 인자로 받음
    setTimeout(() => {
        const post = posts.find( post => post.post_id === id);//posts 배열 안의 post_id와 인자로 받은 id가 일치하는지 확인
        //조건문이 참인 경우 첫번째 찾은 원소가 post 안에 담기게 되는 것
        if(post) { //post가 있다는거 자체가 찾았다는 뜻
            onSuccess(post.post_id);
        } else {
            onError("찾는 포스트 없다");
        }
    }, 3000) //3초 뒤에 실행되도록 함
}//post id를 받아서 posts 배열 안에 같은 id가 있으면 post를 받아오는 함수

const getComments = (post_id, onSuccess, onError) => {
    setTimeout(() => {
        const result = comments.filter( comment => comment.post_id === post_id); //일치하는 모든 원소를 가져오는 메소드: filter
        //조건에 일치하는 모든 comment를 result 배열로 반환
        if(result.length > 0) { //result는 배열이라 안이 비어 있어도 참이라고 인식하므로 배열의 길이로 색인 값이 존재하는지 판별
        onSuccess(result);
        } else {
        onError("찾는 포스트에 코멘트가 없다");
        }
    }, 4000)
}

getPost(
    postNum,
    (postId) => {
        console.log('Post', postId);
        getComments(
            postId,
        (result) => {
            console.log('Comments:' , result)
        },
        (message) => {
            console.log(message);
        } //에러 메세지 출력
        )
    },
    (message) => {
        console.log(message);
    }
);
//콜백 지옥 => 중첩해서 콜백을 계속해서 사용하는 것. 유지보수가 힘들기 떄문에 리펙토링이 필요함

//================================

// Promise : pending (진행중 ), fulfilled (성공적으로 끝낸 상태), rejected (실패로 끝난 상태)
//promise는 비동기 함수이기 때문에 '상태'가 존재함; 초기값은 pending;비동기작업이 진행중
//new Promise(resolve, reject) //프로미스를 선언하는 방식!
//resolve: 성공했을 때 실행할 함수
//reject: 실패했을 때 실행할 함수

const getPost = (id) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const post = posts.find((post) => post.post_id === id);
            if (post) {
                resolve(post.post_id);
            } else {
                reject("찾는 포스트 없다");
            }
        }, 3000);
    });
    };

const getComments = (post_id) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const result = comments.filter((comment) => comment.post_id === post_id);
            if (result.length > 0) {
                resolve(result);
            } else {
                reject("찾는 포스트에 코멘트가 없다");
            }
            }, 4000);
        });
    };

//.then : resolve가 실행됐을 때(성공했을 때)의 promise를 반환
//.catch : reject가 실행됐을 때(실패했을 때)의 promise를 반환

getPost(postNum)
.then(postId => {
    console.log('Post:', postId)
    return getComments(postId) //받아온 postId를 getComments에 넣어줌
})
.then(result => console.log('Comments:', result))//getComments안의 최종 resolve값을 출력
.catch(message => console.log(message)); //에러 났을 때 사용
//.catch는 두 promise에 어떤 에러가 나든 가져올 수 있음 => 따로 작성할 필요가 없음

//==============================
// async await: 비동기적인 것들을 동기적으로 읽을 수 있게 함
//가장 최근에 나옴

async function getResult() { //비동기저긍로 실행되고 있다는 의미
    const postId_result = await getPost(postNum); //비동기적으로 실행될 때 호출된 값을 기다린 후에 변수에 적용; await이 없으면 pormise로 반환되어 아무 것도 안 뜸
    const comments_result = await getComments(postId_result);
    console.log("Post:", postId_result, "Comments:", comments_result);
    }

    getResult();
