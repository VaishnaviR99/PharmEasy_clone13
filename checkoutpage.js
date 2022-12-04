document.querySelector("form").addEventListener("click", mybill)

function mybill(){
 event.preventDefault();

 var cv=200;
 
 var tr=document.createElement("tr");

 var td1=document.createElement("td");
 td1.textContent= "Cart Value";

 var td2=document.createElement("td");
 td2.textContent= cv;
 
 tr.appent(td1, td2);
 document.querySelector("tbody").append(tr);
}



function payment(){
    alert("Payment successful !"); 
} 

function cartv(){
    var bill=123;
}

    