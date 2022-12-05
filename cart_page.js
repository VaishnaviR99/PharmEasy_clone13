var productIncart = JSON.parse(localStorage.getItem("cart")) || [];
    if (productIncart.length == 0) {
     document.querySelector("#items_count").textContent = "0 Item in your Cart"
     }
     
    var items = productIncart.length;
    document.getElementById("items_count").textContent = items + " Item in your Cart";
    document.getElementById("bill").style.display = "block";
    document.getElementById("summary").style.display = "block";
    
        
        displayproducts();

        function displayproducts()  {
            productIncart.map(function (ele,i) {
             var count = ele.count;
              var tr = document.createElement("tr");

              var td1= document.createElement("td");
              var img = document.createElement("img");
              img.setAttribute("class", "photo");
              img.src =ele.image_url;
            //   img.style.width = "40%"
             
              
              td1.append(img);
              

              var td2 = document.createElement("td");
               
               

              var name = document.createElement("h3");
              name.textContent=ele.name;
            //   name.style.marginLeft="-350px"

              var tab = document.createElement("p");
              tab.textContent = ele.tnums;
            //   tab.style.marginLeft="-350px"

              var price = document.createElement("p");
              price.textContent = "₹" +ele.price;
            //   price.style.marginLeft="-350px"


              var totalprice = localStorage.getItem("cartTotal");
              // console.log(totalarr)
              // if (totalarr == 0) {
              // total = ele.price;
              // }
              // else{
              // total=Number(totalarr) + Number(ele.price);
              // }
              // localStorage.setItem("cartTotal",total);
        
              var delivery = document.createElement("p");
              delivery.textContent = ele.delivery;
            //   delivery.style.marginLeft="-350px"

              td2.append(name,tab,price,delivery)

              var td3 =document.createElement("td");

                var divbuttonRemove=document.createElement("button");
                divbuttonRemove.textContent="Delete"
               
                divbuttonRemove.style.marginBottom="-3500px"

                divbuttonRemove.setAttribute("id","divbutton_re"); 
                divbuttonRemove.addEventListener("click", removeCartItem);

                function removeCartItem(){
                
                    productIncart.splice(i,1);
                    
                    localStorage.setItem("cart",JSON.stringify(productIncart));
                    displayproducts();
                    
                }

              var divbutton_increase=document.createElement("button");

              var show_count= document.createElement("button");
              show_count.textContent="1";
              show_count.setAttribute("id","show");

              divbutton_increase.textContent="+";
              divbutton_increase.setAttribute("id","divbutton_in");
              divbutton_increase.addEventListener("click", addproduct);

                var tempprice = +ele.price;
                var tempcount=+ele.count;
                var subtotaltemp= tempprice*tempcount;
                totalprice = subtotaltemp;
              

              function addproduct(){
                    
                    tempcount+=1;
                    
                    ele.count=tempcount;
                    subtotaltemp=tempprice*tempcount;
                    //totalT.textContent = subtotaltemp;
                    totalprice+=tempprice;
                    //console.log(totalprice)
                    document.querySelector(".totalT").textContent=totalprice;
                    localStorage.setItem("cartTotal",totalprice);
                    document.querySelector("#summary p").textContent= "₹" +totalprice
                    show_count.textContent=tempcount;
                }

                var divbutton_Decrese=document.createElement("button");
                divbutton_Decrese.textContent="-";
                divbutton_Decrese.setAttribute("id","divbutton_dec");
                divbutton_Decrese.addEventListener("click",subproduct);
                function subproduct(){
                    if(tempcount===1){
                        // countcost(i);
                        removeCartItem();
                    }else{
                        tempcount-=1;
                        
                        ele.count=tempcount;
                        subtotaltemp=tempprice*tempcount;
                        //total.textContent = subtotaltemp;
                        totalprice-=tempprice;
                        console.log(totalprice)
                        document.querySelector(".totalT").textContent=totalprice;
                        localStorage.setItem("cartTotal",totalprice);
                        document.querySelector("#summary p").textContent= "₹" +totalprice
                        show_count.textContent=tempcount;
                    }
                    
                } 


                td3.append(divbuttonRemove);
                td3.append(" ");
                td3.append(divbutton_increase);
                td3.append(show_count);
                td3.append(divbutton_Decrese);

                tr.append(td1,td2,td3);
                document.querySelector("#dataAppend").append(tr);

                document.querySelector(".total >div:nth-child(2) ").textContent =  "₹" + totalprice;
                 
                document.querySelector("#add_del_address").addEventListener("click" ,login);
                function login(){
                    window.location.href = "loginpage.html";
                }

                document.querySelector("#summary p").textContent= "₹" +totalprice

                
            }); 
        }
                
                
    