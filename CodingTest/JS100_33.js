const n = prompt("숫자를 입력해주세요.").split(' ').reverse();
let result = '';

for(let i=0; i<n.length; i++){
    result += n[i];
}

console.log(result);