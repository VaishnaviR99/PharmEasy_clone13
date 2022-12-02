
var productIncart = JSON.parse(localStorage.getItem("cart")) || [];
if (productIncart.length == 0) {
    document.querySelector(".items>h4").textContent = "0 Item in your Cart"
}
var items = productIncart.length;
document.querySelector(".items>h4").textContent = items + " Item in your Cart";
displayproducts();

function displayproducts() {
    productIncart.map(function (ele) {

        var image = document.createElement("img");

        image.setAttribute("src", ele.image_url);
        image.setAttribute("alt", ele.name);

        var name = document.createElement("h3");
        name.textContent = ele.name;

        var tab = document.createElement("p");
        tab.textContent = ele.tnums;

        var price = document.createElement("p");
        price.textContent = ele.price;

        var strikedoffP = document.createElement("p");
        strikedoffP.textContent = ele.strikedoffprice;

        var discount = document.createElement("p");
        discount.textContent = ele.discount;


        var delivery = document.createElement("p");
        delivery.textContent = ele.delivery;

        var cartimg = document.createElement("div");
        cartimg.setAttribute("class", "img")
        cartimg.append(image)
        document.querySelector(".product").appendChild(cartimg);

        var decription = document.createElement("div");
        decription.setAttribute("class", "descp")
        decription.append(name, tab, price, strikedoffP, discount, delivery);
        document.querySelector(".product").appendChild(decription);

        /*var d=document.createElement("div");
        d.setAttribute("class", "d")

        var dele = document.createElement("p");
        del.setAttribute("class", "delete");
        dele.textContent="Delete";
        document.getElementById("delete").addEventListener("click", del());
        
        var qty = document.createElement("label");
        qty.textContent=Qty;
        var select = document.createElement("select");

        d.append(dele,qty)
        document.querySelector(".product").appendChild(d);*/


        
        var totalarr = localStorage.getItem("cartTotal");
        console.log(totalarr)
        if (totalarr == 0) {
            total = ele.price;
            
        }
        else{
            total=Number(totalarr) + Number(ele.price);
        }
        localStorage.setItem("cartTotal",total);
        
        

        
         document.querySelector(".total>h4").textContent = "cart total:" + "₹" + total;

        var addbtn = document.createElement("button");
        addbtn.textContent = "Add delivery address";
        addbtn.setAttribute("class", "address");
        addbtn.addEventListener("click", login);
        function login() {
            window.location.href = "loginpage.html";
        }
        document.querySelector(".total>h4").append(addbtn)
        


        var summary = document.createElement("div");
        summary.setAttribute("class", "summary");

        var bill = document.createElement("h3");
        bill.textContent = "Bill Summary";

        var cartvalue = document.createElement("p");
        cartvalue.textContent = "Cart Value"+"  "+ total;

        var amountTObepaid = document.createElement("p");
        amountTObepaid.textContent = "Amount to be paid" +"    "+total;

         summary.append(bill,cartvalue,amountTObepaid);

        //  --------------------upper part

        var summary1 = document.createElement("div");

        // var tr = document.createElement("p");

        var td1 = document.createElement("h3");
        td1.textContent = "cart value";
       
        // var td2 = document.createElement("td");
        // td2.textContent = "total";
        // var tr2 = document.createElement("tr");
        // var addbtn = document.createElement("button");
        // addbtn.textContent = "Add delivery address";
        // tr2.append(addbtn);
        // 

        // textcontent= "cart value" + total;


        // tr.append(td1, addbtn);
        summary1.append(td1);

        // var tr1 = document.createElement("tr");
        // var td3 = document.createElement("td");
        // td3.textContent = "Amount to be paid";
        // var td4 = document.createElement("td");
        // td4.textContent = "total";

        
        // tr1.append(td3, td4);
        // tr.append(tr1);
        // document.getElementById("summary").append(tr);
        // document.querySelector("#t").append(summary);
        // var divtemp= document.createElement("div");
        // var tempp=  document.createElement("p");
        // tempp.textContent="bsdfdh";
        // divtemp.append(tempp);
        document.getElementById("t").append(summary1,summary);



    })
}