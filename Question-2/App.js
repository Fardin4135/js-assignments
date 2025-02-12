num1=Math.floor(Math.random() * 10);
num2=Math.floor(Math.random() * 10);
let operator= "+"
temp=" ";
temp+=num1 + operator + num2
document.getElementById("ques").innerHTML= temp ;
const button=document.getElementById("btn");

button.addEventListener("click",()=>{
    let userAns=document.getElementById("input").value;
    let realAns=num1+num2;
    console.log(realAns);
    document.getElementById("actual-ans").innerHTML=realAns;
    document.getElementById("user-ans").innerHTML=userAns;
    if(userAns==realAns){
        alert("Your answer is correct.")
    }
    else{
        alert("Your answer is wrong. Please try again")
    }
    document.getElementById("none").style.display="block";

})