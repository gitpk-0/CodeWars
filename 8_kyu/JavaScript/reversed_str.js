function solution(str) {
    let split = str.split("");
    let unsplit = [];
    for (let i = split.length; i >= 0; i--) {
      unsplit.push(split[i]);
    }
    return unsplit.join("");

    
}

console.log(solution("world"));