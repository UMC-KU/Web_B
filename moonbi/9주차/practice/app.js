const express = require("express");
const { arrayBuffer } = require("stream/consumers");
const app = express();
const port = 5500;

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

app.get("/", (req, res) => {
  res.send("Welcome!!");
});


app.get("/users", (req, res) => {
  res.json(users);
});


app.get("/users/:userId", (req, res) => { //동적으로 입력되는 주소는 /:
	// console.log(req.params.userId);
	const user = users.find((user) => user.id === parseInt(req.params.userId));

	if (!user) {
		res.status(404).send('요청한 userId를 찾을 수 없습니다')
	}

	res.status(200).json(user);
});

app.post("/users", (req,res) => {
	const newUser = req.body;

	if (Object.keys(newUser).length === 0) {
		res.status(400).send('user에 관한 정보를 입력해주세요');
	} else if (Object.keys(newUser).length < 4) {
		res.status(400).send('user를 추가하기 위해 필요한 정보를 모두 입력해주세요')
	} else {
    users.push({
      id: users[users.length - 1].id + 1,
      ...newUser,
    });
	}

	res.json(users);
})


app.put("/users/:userId", (req, res) => {
	const id = users.findIndex(user => user.id === parseInt(req.params.userId));
	
	if (id === -1) {
		return res.status(404).send('요청한 id를 찾을 수 없습니다.');
	}

	users[id] = {
		...users[id],
		...req.body
	}

	res.status(200).json(users);
})


app.delete("/users/:userId", (req, res) => {
		const id = users.findIndex(
      (user) => user.id === parseInt(req.params.userId)
    );

    if (id === -1) {
      return res.status(404).send("요청한 id를 찾을 수 없습니다.");
    } 

		users.splice(id, 1);

		res.status(200).json(users);
})


app.listen(port, () => {
  console.log('서버 실행중...');
});


