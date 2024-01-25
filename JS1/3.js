let arr = [1, 123, 72, 94, 6];
arr.forEach((row) => {
  if (row.toString().length % 2 === 0) {
    console.log(row);
  }
});
