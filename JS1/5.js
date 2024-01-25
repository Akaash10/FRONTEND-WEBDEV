let n = "dog";
let arr = [];
findCombination(n, "", arr);
console.log(arr);

function findCombination(p, up, arr) {
    if (p.length === 0) {
        arr.push(up);
        return;
    }
    findCombination(p.substring(1), up + p.charAt(0), arr);
    findCombination(p.substring(1), up, arr);
}
