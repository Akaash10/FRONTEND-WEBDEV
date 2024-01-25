let amount=46,arr=[];
let myarr=amountTocoins(amount,arr);
console.log(myarr)
function amountTocoins(amount){
    let arr=[]
    while(amount>=25){
        arr.push(25);
        amount-=25;
    }
    while(amount>=10){
        arr.push(10);
        amount-=10;
    }
    while(amount>=5){
        arr.push(5);
        amount-=5;
    }
    while(amount>=2){
        arr.push(2);
        amount-=2;
    }
    while(amount>=1){
        arr.push(1);
        amount-=1;
    }
    return arr;
}