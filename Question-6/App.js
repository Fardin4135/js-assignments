let notChecked=1;
const arr=[];
let i=0;
let flag=true;
while(flag){
    let name = prompt("Enter your Name")
    if(name=="stop" || name===""){
        break;
    }
    arr.push(name);

}
document.getElementById("result").innerHTML=arr.sort();