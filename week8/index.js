// https://jsonplaceholder.typicode.com 로 api 테스트 진행

// [fetch, axios(별도의 설치 필요)]
// 1. fetch : fetch(url, options)
const result = [];

// <Promise await 방식>
// fetch("https://jsonplaceholder.typicode.com/users")
// .then(response => response.json())
// // .then(data => console.log(data))
// // .then(data => result.push(data))                    // [[{user1}, {user2}, ...]]
// // .then(data => data.map(item => result.push(item)))  // [{user1}, {user2}, ...]
// .then(data => data.map(item => result.push(item.name)))
// .catch(error => console.log(error))

// console.log(result);

// <Async await 방식>
// const dataFetch = async() => {
//     const response = await fetch("https://jsonplaceholder.typicode.com/users");
//     // console.log(response);
//     const data = await response.json();
//     // console.log(data);

//     return data;
// }

// const dataResult = dataFetch();

// 2. axios
axios.get("https://jsonplaceholder.typicode.com/users")
// .then(response => console.log(response))
.then(response => console.log(response.data))

const dataFetch = async() => {
    const response = await axios.get("https://jsonplaceholder.typicode.com/users").data;
    console.log(dataResult);
    
    return response;
}

const dataResult = dataFetch();