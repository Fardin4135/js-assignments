const arr=["Emily","Michael","Jessica","David","Ashley","Christopher","Sarah","Matthew","Kevin","Amanda"]
let cont=document.getElementById("array-container");

for (item of arr){
    let p=document.createElement("p");
    cont.appendChild(p);
    p.innerHTML=item;
}

let random=Math.floor(Math.random()*10)
function myFunction(){
    alert(`In ${random} index the student is : ${arr[random]}`);
}