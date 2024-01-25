let a = "silent";
let b = "listen";
if (a.length === b.length) {
  let arr1 = [],
    arr2 = [];
  for (let i = 0; i < a.length; i++) {
    arr1.push(a.charAt(i));
    arr2.push(b.charAt(i));
  }
  arr1.sort();
  arr2.sort();
  console.log(arr1.join("") === arr2.join("") ? "Anagram" : "Not an Anagram");
} else {
  console.log("They are not equal");
}
