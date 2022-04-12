let answer = "";
let n = 5;
for (let i = n; i >= 1; i--) {
    let c = 2 * i - 1;
    let a = "*".repeat(c);
    let b = " ".repeat(n-i);
    answer += `${b}` + `${a}` + "\n";
};
console.log(answer);