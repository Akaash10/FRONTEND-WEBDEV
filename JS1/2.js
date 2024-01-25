let arr=[1,12,43,5,6];
let n=3;
for(let i=0;i<n;i++){
    let j,last=arr[0];
    for(j=1;j<arr.length;j++){
        arr[j-1]=arr[j];
    }
    arr[arr.length-1]=last;
}
console.log(arr)