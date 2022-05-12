// sudo npm install -g nodemon - 서버를 매번 껐다 킬 필요 없게 해줌
// > nodemon app.js

const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

const users = [
    {
      id: 1,
      name: "james",
      username: "joker",
      email: "james101@gmail.com",
      phonenumber: "123-456-7979",
    },
    {
      id: 2,
      name: "christine",
      username: "crystal",
      email: "christine101@gmail.com",
      phonenumber: "453-326-1299",
    },
    {
      id: 3,
      name: "jammie",
      username: "jam",
      email: "jammie101@gmail.com",
      phonenumber: "963-332-3719",
    },
  ];

app.get('/', (req, res) => {
    res.send('Welcome!!')
})

app.get('/users', (req, res) => {
    res.json(users)
})

app.get('/users/:userId', (req, res) => {
    // console.log(req.params.userId);
    const user = users.find(user => user.id === parseInt(req.params.userId));

    // 예외처리
    if (!user) {
        res.status(404).send('요청한 userId를 찾을 수 없습니다.')
    }

    // res.json(user);
    res.status(200).json(user);     // 상태코드 추가
})

app.post('/users', (req, res) => {
    const newUser = req.body;

    // 예외처리
    if(Object.keys(newUser).length === 0) {     // Object.keys(newUser) : newUser의 key들만 배열로 만들어줌
        res.status(400).send('user에 관한 정보를 입력해주세요.')
    }
    else if (Object.keys(newUser).length < 4) {
        res.status(400).send('user를 추가하기 위해 필요한 정보를 모두 입력해주세요.')
    }
    else {
        users.push({
            id : users[users.length-1].id + 1,
            ...newUser      // ... : spread operator - 안의 내용들을 하나하나 복사해서 새로운 객체 안에 넣는 역할
        })
    }

    res.json(users)
    // res.json(newUser)
})

app.put('/users/:userId', (req, res) => {
    const id = users.findIndex(user => user.id === parseInt(req.params.userId));
    // console.log(id);

    // 예외처리
    if (id === -1){
        res.status(404).send('요청한 id를 찾을 수 없습니다.');
    }

    users[id] = {
        // id : users[id].id,
        ...users[id],
        ...req.body
    }

    res.status(200).json(users); 
})

app.delete('/users/:userId', (req, res) => {
    const id = users.findIndex(user => user.id === parseInt(req.params.userId));

    // 예외처리
    if (id === -1){
        res.status(404).send('요청한 id를 찾을 수 없습니다.');
    }

    users.splice(id, 1);

    res.status(200).json(users);
})

app.listen(port, () => {
    console.log(`서버 실행중...`)
})