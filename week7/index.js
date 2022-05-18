// 동기 = synchronous : 순서대로 일을 처리하는 방식입니다.
// 비동기 = asynchronous : 순서대로 일을 처리하지 않고 빨리 처리할 수 있는 것들을 먼저 처리하는 방식입니다.

// console.log('1')
// setTimeout(function() {
//     console.log('2')
// },10)
// console.log('3')
// console.log('4')
// setTimeout(function() {
//     console.log('5')
// },5)
// console.log('6')
// setTimeout(function() {
//     console.log('7')
// },40)
// console.log('8')
// setTimeout(function() {
//     console.log('9')
// },30)
// console.log('10')

// 콜백함수 비동기 vs 동기

// function syncFunc(syncCallback) {
// 	syncCallback();
// }

// function asyncFunc(asyncCallback) {
// 	setTimeout(asyncCallback, 1);
// }

// syncFunc(() => console.log('sync'));
// asyncFunc(() => console.log('async'));

// function syncFunc(syncCallback) {
// 	syncCallback();
// }

// function asyncFunc(asyncCallback) {
// 	setTimeout(() => {
//     asyncCallback();
//     syncFunc(() => console.log('sync'));
//   }, 3000);
// }

// asyncFunc(() => console.log('async'));

// callback

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

const postNum = 1;

// const getPost = (id, onSuccess, onError) => {
//   setTimeout(() => {
//     const post = posts.find( post => post.post_id === id);
//     if(post) {
//       onSuccess(post.post_id);
//     } else {
//       onError("찾는 포스트 없다");
//     }
//   }, 3000)
// }

// const getComments = (post_id, onSuccess, onError) => {
//   setTimeout(() => {
//     const result = comments.filter( comment => comment.post_id === post_id);
//     if(result.length > 0) {
//       onSuccess(result);
//     } else {
//       onError("찾는 포스트에 코멘트가 없다");
//     }
//   }, 4000)
// }

// getPost(
//   postNum,
//   (postId) => {
//     console.log('Post', postId);
//     getComments(
//       postId,
//       (result) => {
//         console.log('Comments:' , result)
//       },
//       (message) => {
//         console.log(message);
//       }
//     )
//   },
//   (message) => {
//     console.log(message);
//   }
// )

// Promise : pending (진행중 ), fulfilled (성공적으로 끝낸 상태), rejected (실패로 끝난 상태)
//new Promise(resolve, reject)

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

// getPost(postNum)
// .then(postId => {
//   console.log('Post:', postId)
//   return getComments(postId)
// })
// .then(result => console.log('Comments:', result))
// .catch(message => console.log(message));

// async await

async function getResult() {
  const postId_result = await getPost(postNum);
  const comments_result = await getComments(postId_result);
  console.log("Post:", postId_result, "Comments:", comments_result);
}

getResult();
