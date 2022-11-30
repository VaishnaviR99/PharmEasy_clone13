function validate()
 {
     var usernumber=document.getElementById("number").value; 
     var password=document.getElementById("password").value; 
     if(usernumber="777" && password=="user") {
         alert ("login succesfully");
          return false; 
        } else { 
             alert("login failed") ;
            } 
            
            
     }