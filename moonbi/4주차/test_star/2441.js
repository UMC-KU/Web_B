let answer = "";
let n = 100;
for (let i = n; i > 0; i--) {
    let a = "*".repeat(i);
    let b = " ".repeat(n-i);
    answer += `${b}` + `${a}` + "\n";
};
console.log(answer);