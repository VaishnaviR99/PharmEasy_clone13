var productIncart = JSON.parse(localStorage.getItem("cart"))||[];
    if(productIncart.length==0){
        document.querySelector(".items>h4").textContent="0 Items in your Cart"
    }
    displayproducts();

    function displayproducts(){
        productIncart.map(function(ele){
          
        var image = document.createElement("img");

        image.setAttribute("src",ele.image_url);
        image.setAttribute("alt",ele.name);
   
        var name = document.createElement("h5");
        name.textContent=ele.name;

        var manuf=document.createElement("p");
        manuf.textContent=ele.manufacture;

        var qty = document.createElement("p");
        qty.textContent=ele.quantity;

        var strikedoffP= document.createElement("p");
        qty.strikedoffPt=ele.strikedoff;

        var price =document.createElement("p");
        price.strikedoffPt=ele.MRP;

        var discount =document.createElement("p");
        discount.strikedoffPt=ele.discount;

        var delivery =document.createElement("p");
        delivery.strikedoffPt=ele.delivey;
        

        document.querySelector(".product").append(image,name,price,manuf,qty,strikedoffP,price,discount,delivery);
        

        })
    }