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
     document.addEventListener("DOMContentLoaded", () => { 
        const loginForm = document.querySelector ("#login"); 
        const createAccountForm = document.querySelector ("#createAccount");
      
        document.querySelector ("#linkCreateAccount").addEventListener("click", e => {
         e.preventDefault();
          loginForm.classList.add("form--hidden");
          createAccountForm.classList.remove("form--hidden"); 
        });
        
      
        document.querySelector ("#linkLogin").addEventListener("click", e => {
          e.preventDefault();
           loginForm.classList.remove("form--hidden");
           createAccountForm.classList.add("form--hidden"); 
         });
        
      });