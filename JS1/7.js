let n="Robin Singh";
let myarr=string_to_array(n);
console.log(myarr);

function string_to_array(n){
    let arr=n.split(" ");
    return arr;
}