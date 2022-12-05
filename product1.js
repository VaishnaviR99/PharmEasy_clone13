function Acart(){

    var cartarr=JSON.parse(localStorage.getItem("cart"))||[];
    var product = 
        {
          image_url:
            "https://cdn01.pharmeasy.in/dam/products/059346/dolo-650mg-strip-of-15-tablets-2-1653986150.jpg",
          name: "Dolo 650mg Strip Of 15 Tablets",
          tnums:"15 Tablet(s) in Strip",
          price: "29.13",
          strikedoffprice: "₹34.27",
          discount:"15% OFF",
          delivery:"delivery -Today,before 10pm",
          count:"1",
        }

        


       cartarr.push(product);
       //console.log(product)
       localStorage.setItem("cart",JSON.stringify(cartarr));
       
       document.getElementById("add to cart").style.backgroundColor="gray";
       document.getElementById("add to cart").value = "Added to Cart";
       document.getElementById("add to cart").disabled = true;
       
    
    }
