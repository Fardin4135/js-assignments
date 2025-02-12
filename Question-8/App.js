let count=0;
function delete_row(event) {
    // Get the row (parent of the clicked button)
    let row = event.target.parentElement;
    row.remove();  // Remove the entire row
    count--;
}


function addData(){
    count++;
    let name=document.getElementById("name")
    let email=document.getElementById("email")
   let  tbody=document.querySelector("tbody");
    tr=document.createElement("tr");
    th=document.createElement("th");
    td=document.createElement("td");
    tbody.appendChild(tr);
    th.innerHTML=count;
    tr.appendChild(th);
    tr.appendChild(td);
    td.innerHTML=name.value;
    td2=document.createElement("td");
    tr.appendChild(td2)
    td2.innerHTML=email.value;
    td3=document.createElement("td");
    tr.appendChild(td3)
    td3.innerHTML="Delete";
    td3.className="Delete";
    td3.style.cursor="pointer";
    td3.addEventListener("click", delete_row);
    name.value="";
    email.value="";
}


