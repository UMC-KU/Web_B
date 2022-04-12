let answer = "";
let n = 100;
for (let i = n; i > 0; i--) {
    let a = "*".repeat(i);
    answer += `${a}` + "\n";
};
console.log(answer);