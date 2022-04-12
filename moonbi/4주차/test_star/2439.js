let answer = "";
let n = 100;
for (let i = 1; i <= n; i++) {
    let a = "*".repeat(i);
    let b = " ".repeat(n-i)
    answer += `${b}` + `${a}` + "\n";
};
console.log(answer);