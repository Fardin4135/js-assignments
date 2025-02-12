const arr=[1,2,3,4,5,6,7,8,9,10];
let sum=0
for(items of arr){
    sum+=items;
}

let size=arr.length;

let average=sum/size;
alert(`The Average of ${arr} is: ${average}`)