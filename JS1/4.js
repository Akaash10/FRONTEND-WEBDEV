let n = 32243,
  ans = 0;
while (n > 0) {
  let last = n % 10;
  ans = last + ans * 10;
  n = Math.floor(n / 10);
}
console.log(ans);
