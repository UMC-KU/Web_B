let answer = "";
let n = 5;
for (let i = 1; i <= n; i++) {
    let a = "*".repeat(i);
    let b = " ".repeat(2*(n-i));
    answer += `${a}` + `${b}` + `${a}` + "\n";
};
for (let i = n-1; i >= 1; i--) {
    let a = "*".repeat(i);
    let b = " ".repeat(2*(n-i));
    answer += `${a}` + `${b}` + `${a}` + "\n";
};

console.log(answer);