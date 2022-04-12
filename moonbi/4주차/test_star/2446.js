let answer = "";
let n = 5;
for (let i = n; i > 0; i--) {
    let a = " ".repeat(n-i);
    let b = "*".repeat(2*i-1);
    answer += `${a}` + `${b}` + "\n";
};
for (let i = 2; i <= n; i++) {
    let a = " ".repeat(n-i);
    let b = "*".repeat(2*i-1);
    answer += `${a}` + `${b}` + "\n";
};

console.log(answer);