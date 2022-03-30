const pooh = {
    name : 'pooh',
    species : 'bear',
    job : 'disnet character',
    gender : 'boy',
    'say-Hi' : function() {
        console.log("I'm winniw the pooh, What's your name?");
    }
}

console.log(pooh.species);

console.log(pooh['species']);
//key에 공백이나 특수문자(ex.-)가 들어갔을 때 [] 사용

console.log(pooh.['say-Hi']());

pooh['say-Bye'] = function() {
    console.log("I'm winniw the pooh, See you later")
}

console.log(pooh);

pooh.favorites = ['honey', 'friends', 'cake'];

console.log(pooh);

delete pooh.favorites;

console.log(pooh);


//---------------

function Character(name, species, job, gender) {
    this.name = name;
    this.species = species;
    this.job = job;
    this.gender = gender;
    this['say-Hi'] = function() {
        console.log(`I'm ${this.name}, What's your name?`);
    };
    this['say-Bye'] = function() {
        console.log(`I'm ${this.name}, See you later`);
    };
}

const winnie_the_pooh = new Character('winnie the pooh', 'bear', 'disney character', 'boy');

console.log(winnie_the_pooh);

console.log(winnie_the_pooh['say-Hi']());

const snoopy = new Character('snoopy', 'dog', 'comic book character', 'boy');

const pikachu = new Character('pikachu', 'squirrel', 'disney character', 'boy');

console.log(snoopy, pikachu);

console.log(snoopy['say-Hi'](), pikachu['say-Hi']());

//---------------

const obj = new Object();
console.log(obj);
obj.name = 'dwell';
obj.greeting = function(){
    console.log('hi');
};

console.log(obj);

//------------

function multiply10 (num) {
    const result = num * 10;
    return result;
};

const data = multiply10(10);

console.log(data);

//-------------
//arrow function

const multiply10 = (num) => num *= 10;

const data = multiply10(100);

console.log(data);

//-----조건문----

//false: 0, -0, null, false, NaN, undefined
// if (boolean) {
//     실행할 코드
// };

let age = 22;

if (age > 19) {
    console.log('술을 마실 수 있다');
};

console.log('미성년자'); //if가 실행되지 않을 때 실행

if (age > 19) {
    console.log('술을 마실 수 있다');
} else {
    console.log('미성년자');
}

//상황연산자 : 조건 ? 참일때 실행될 코드 : 거짓말일 때 실행될 코드

age > 19 ? console.log('술을 마실 수 있다') : console.log('미성년자');

const result = age > 19 ? '술을 마실 수 있다' : '미성년자';
console.log(result);
//if, else if else

if (age < 19) {
    console.log('애기');
} else if (age >= 10 && age < 20) {
    console.log('10대');
} else if (age >= 20 && age < 30) {
    console.log('20대');
} else if (age >= 30 && age < 40) {
    console.log('30대');
} else if (age >= 40 && age < 50) {
    console.log('40대');
} else if (age >= 50 && age < 60) {
    console.log('50대');
} else if (age >= 60 && age < 70) {
    console.log('60대');
} else {
    console.log('노인');
}

if (age >= 70) {
    console.log('노인');
} else if (age >= 60) {
    console.log('60대');
} else if (age >= 50) {
    console.log('50대');
} else if (age >= 40) {
    console.log('40대');
} else if (age >= 30) {
    console.log('30대');
} else if (age >= 20) {
    console.log('20대');
} else if (age >= 10) {
    console.log('10대');
} else {
    console.log('애기');
}

//---switch

age = 30;

switch(age) {
    case 70:
        console.log('70대');
        break;
    case 60:
        console.log('70대');
        break;
    case 50:
        console.log('70대');
        break;
    case 40:
        console.log('70대');
        break;
    case 30:
        console.log('70대');
        break;
    case 20:
        console.log('70대');
        break;
    case 10:
        console.log('70대');
        break;
    default:
        console.log('애기');
}

//반드시 break를 써 줘야함


//반복문
for (초기값 ; 종료조건 ; 증감) {
    상황별 코드
};

for (let i = 1 ; i < 11 ; i++) {
    console.log(i);
}

const numArr = [45, 32, 11, 98, 22];

for (let i = 0 ; i < numArr.length ; i++) {
    console.log(numArr[i]);
    numArr[i] += 10;
};

console.log(numArr);

// while
시작점 
while (조건) {
    코드
    증감
}

let i = 1;
while (i < 11) {
    console.log(i);
    i++;
};

//무한루프 시 if (i<10){break;} 추가해줌

let i = 1;
while (i < 11) {
    i++;
    if (i%2 !== 0) {
        continue;
    }
    console.log(i);
    i++;
};


const numArr = [45, 32, 11, 98, 22];

let i = 0;
while (i < numArr.length) {
    console.log(numArr[i]);
    numArr[i] += 10;
    i++;
}

console.log(numArr);

//do while

let i = 1;
do {
    console.log(i);
    i++;
} while (i < 11)
// 조건 확인하기 전에 한번 코드 실행    
// 조건의 여부와 상관 없이 한번은 먼저 실행하고 싶을 때 사용