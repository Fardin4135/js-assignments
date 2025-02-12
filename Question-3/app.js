const change=document.getElementById("btn")
change.addEventListener("click",()=>{
    

let min=1900;
let max=2025;
let year=Math.floor(Math.random()*(max-min))+min;
let month=Math.floor(Math.random()* 12);
let day=Math.floor(Math.random()* 31);
let hours=Math.floor(Math.random()* 24);
let minutes=Math.floor(Math.random()* 61);
let seconds=Math.floor(Math.random()* 61);
const date=new Date(year, month, day, hours, minutes, seconds);
document.getElementById("Date-time").innerText=date.toLocaleString();

const utcDate = date.toUTCString();

document.getElementById("Date-time-utc").innerHTML=utcDate;

})