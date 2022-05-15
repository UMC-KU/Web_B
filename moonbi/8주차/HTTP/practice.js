//HTTP: HyperText Transfer Protocol
//front-server간 통신
//HTTPS: HyperText Transfer Protocol Secure

//통신에서 request 와 response가 존재
//url address

//GET(read,기존의 정보를 접근해서 사용), POST(기존 데이터에 새로운 것을 추가), PUT(기존의 데이터 수정), DELETE(데이터 삭제)

//xml 태그로 이루어져 있음
//json 배열 안의 객체 같은 형태로 생김, 현업에서는 JSON을 주로 사용

// fetch, axios(별도 설치 필요)

//1. fetch : fetch(url, options)

fetch("https://jsonplaceholder.typicode.com/users");
//promise객체가 튀어나옴

fetch("https://jsonplaceholder.typicode.com/users")
.then(response => console.log(response))

const result = [];

fetch("https://jsonplaceholder.typicode.com/users")
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.log(error))

console.log(result);

//[{{user1}, {user2}}] => [{user1}, {user2}]

fetch("https://jsonplaceholder.typicode.com/users")
.then(response => response.json())
.then(data => data.map(item => result.push(item)))
.catch(error => console.log(error))

const dataFetxh = async() => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    console.log(response);
    const data = await response.json();
}

//2.axios (별도의 설치가 필요)

axios.get("https://jsonplaceholder.typicode.com/users")
.then(data => console.log(data));

//data 안에 data(data.data)로 들어가야지 data를 받아올 수 있음

const dataFetxh = async() => {
    const response = await axios.get("https://jsonplaceholder.typicode.com/users").data;
    return response;
}

const dataResult = dataFetch();
console.log(dataResult);