let answer = "";
let n = 5;
for (let i = 1; i <= n; i++) {
    let c = 2 * i - 1;
    let a = "*".repeat(c);
    let b = " ".repeat(n-i);
    answer += `${b}` + `${a}` + "\n";
};
for (let i = n-1; i >= 1; i--) {
    let c = 2 * i - 1;
    let a = "*".repeat(c);
    let b = " ".repeat(n-i);
    answer += `${b}` + `${a}` + "\n";
};

console.log(answer);