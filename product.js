// image Name manuf qty strikedoff price discount 
var productIncart = JSON.parse(localStorage.getItem("cart"))||[];


document.getElementById("addincart").addEventListener("click", function(){
    addtoCart(productIncart);
});

var rs = -1;
function addtoCart(elem) {
    alert("Item Added to Cart");
    location.reload();
    var check = false;
    var idxc = -1;
    productIncart.map(function (ele, idx) {

        if (ele.name == elem.name) {
            check = true;
            idxc = idx;
        }

    });

    rs = Number(elem.qty);


    if (check) {
        elem.qty = Number(elem.qty) + Number(1);
        productIncart.splice(idxc, 1);
    } else {
        elem.qty = 1;
    }

    productIncart.push(elem);

    localStorage.setItem("cart", JSON.stringify(productIncart));

    location.reload();
}