const n = prompt("두 숫자를 입력하세요").split(" ");

const left = Math.floor(parseInt(n[0], 10) / parseInt(n[1], 10))
const right = parseInt(n[0], 10) % parseInt(n[1], 10)

console.log(left, right);