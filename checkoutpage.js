
function payment(){
    alert("Payment successful !"); 
    
} 


var cartAmount=JSON.parse(localStorage.getItem("cartTotal"));
document.querySelector("#cartPrice").innerText=cartAmount;

let delivery= 75;
document.querySelector("#deliverycharge").innerText=delivery;
var totalBill=JSON.parse(localStorage.getItem("totalBill"));
document.querySelector("#totalbillpaid").innerText=totalBill;

    