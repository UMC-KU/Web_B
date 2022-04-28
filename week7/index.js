// 동기 = synchronous : 순서대로 일을 처리하는 방식
// 비동기 = asynchronous : 순서대로 일을 처리하지 않고 빨리 처리할 수 있는 것들을 먼저 처리하는 방식

setTimeout()
console.log('1');
setTimeout(function(){
  console.log('2');
}, 10)
console.log('3');
console.log('4');
setTimeout(function(){
  console.log('5');
}, 5)
console.log('6');
setTimeout(function(){
  console.log('7');
}, 40)
console.log('8');
setTimeout(function(){
  console.log('9');
}, 30)
console.log('10');

// 콜백함수 : 함수 안에 인자로 들어가는 함수. 바로 호출되지 않고, 잠시 함수를 기억하고 있다가, 이벤트가 발생했을 때 다시 콜

// 콜백함수 동기 vs 비동기
function syncFunc(syncCallback){
  syncCallback();
}

function asyncFunc(asyncCallback){
  setTimeout(asyncCallback, 3000);
}

syncFunc(() => console.log('sync'));
asyncFunc(() => console.log('async'));

// 콜백을 쓰는 이유 - 동기와 비동기를 쓸 때, 순서를 보장할 수 있다!
function syncFunc(syncCallback){
  syncCallback();
}

function asyncFunc(asyncCallback){
  setTimeout(() => {
    asyncCallback();
    syncFunc(() => console.log('sync'));
  }, 3000);
}

// asyncFunc(() => console.log('async'));

// callback
const posts = [
    {post_id: 1, post_title: '첫번째 글'},
    {post_id: 2, post_title: '두번째 글'},
    {post_id: 3, post_title: '세번째 글'},
  ];
  
  const comments = [
    {post_id: 1, comment_id: 1, comment: '첫번째 글 첫번째 코멘트'},
    {post_id: 2, comment_id: 1, comment: '두번째 글 첫번째 코멘트'},
    {post_id: 2, comment_id: 2, comment: '두번째 글 두번째 코멘트'},
    {post_id: 2, comment_id: 3, comment: '두번째 글 세번째 코멘트'},
    {post_id: 3, comment_id: 1, comment: '세번째 글 첫번째 코멘트'},
    {post_id: 3, comment_id: 2, comment: '세번째 글 두번째 코멘트'},
  ];
  
  const postNum = 2;
  
  // 아래 코드를 (현재부터 3단락 뒤까지) 보면 지저분하다. (가독성 안 좋다) = 콜백 지옥
//   const getPost = (id, onSuccess, onError) => {
//     setTimeout(() => {
//       const post = posts.find(post => post.post_id === id);   // find() : 배열 안의 값 가져오기
//       if(post){
//         onSuccess(post.post_id);
//       } else{
//         onError("찾는 포스트 없다");
//       }
//     }, 3000)
//   }
  
//   const getComments = (post_id, onSuccess, onError) => {
//     setTimeout(() => {
//       const result = comments.filter(comment => comment.post_id === post_id);  // filter() : 배열 안의 값 모두 가져오기
//       if(result.length > 0){
//         onSuccess(result);
//       } else{
//         onError("찾는 포스트에 코멘트가 없다");
//       }
//     }, 4000)
//   }
  
//   getPost(
//     postNum, 
//     (postId) => {
//       console.log('Post', postId);
//       getComments(
//         postId,
//         (result) => {
//           console.log('Comments: ', result);
//         },
//         (message) => {
//           console.log(message);
//         }
//       )
//     },
//     (message) => {
//       console.log(message);
//     }
//   )
  
  // Promise : pending (진행중인 상태), fulfilled (성공적으로 끝낸 상태), rejected (실패로 끝난 상태)
  // new Promise(resolve, reject)
  
  const getPost = (id) => {
    return new Promise ((resolve, reject) => {
      setTimeout(() => {
        const post = posts.find(post => post.post_id === id);
        if(post){
          resolve(post.post_id);
        } else{
          reject("찾는 포스트 없다");
        }
      }, 3000)
      
    })
  }
  
  const getComments = (post_id) => {
    return new Promise ((resolve, reject) => {
      setTimeout(() => {
        const result = comments.filter(comment => comment.post_id === post_id);
        if(result.length > 0){
          resolve(result);
        } else{
          reject("찾는 포스트에 코멘트가 없다");
        }
      }, 4000)
      
    })
  }
  
//   promise 를 사용할 땐, .then (성공했을 때/resolve 되었을 때의 결과)과 .catch (실패했을 때/reject 되었을 때의 결과)
//   getPost(postNum)
//   .then(postId => {
//     console.log('Post: ', postId)
//     return getComments(postId)    // then문이 두 줄 이상일 때는 꼭 return을 사용해야 한다.
//   })
//   .then(result => console.log('Comments: ', result))
//   .catch(message => console.log(message));    // catch는 어디에서 에러가 나도 해당하는 에러를 한꺼번에 가져올 수 있다는 장점이 있다.
  
  
  // async await
  async function getResult(){   // 꼭 async를 앞에 붙여줘야함
    // const postId_result = getPost(postNum);
    const postId_result = await getPost(postNum);   // await은 getPost()라는 비동기함수의 결과를 기다렸다가 변수에 담아준다
    const comments_result = await getComments(postId_result);
    console.log('Post: ', postId_result, 'Comments: ', comments_result);
  }
  
  getResult();