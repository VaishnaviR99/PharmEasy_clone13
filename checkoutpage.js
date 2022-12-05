
function payment(){
    alert("Payment successful !"); 
    
} 



var cartAmount=localStorage.getItem("cartTotal");
document.querySelector("#cartPrice").textContent = cartAmount;

var delivery= chargesDelivery();
document.querySelector("#deliverycharge").textContent=delivery;


var totalBill= Totalillcharges(  );
document.querySelector("#totalbillpaid").textContent=totalBill;


function  chargesDelivery(){
    if(cartAmount>500){
        return 0;
    }else{
        return 75;
    }
}

function Totalillcharges(  ){
    totalBill=Number (delivery) + Number (cartAmount);
    return totalBill;
}


    