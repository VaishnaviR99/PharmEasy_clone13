


     function test() { 
      var uid = document.getElementById("Name").value;
      var unum = document.getElementById("no").value;
      var pw = document.getElementById("passw").value;
      var cpw = document.getElementById("cpassw").value;
      var email = document.getElementById("email").value; 
      
      // Storing data
       var user = localStorage.setItem("uid", uid);
       var uno = localStorage.setItem("unum", unum);

       var pass = localStorage.setItem("pw", pw);
       var conpw = localStorage.setItem("cpw", cpw);
       
      // Retreiving stored data and using it for calculation 
      var user = localStorage.getItem("uid", uid); 
      var uno = document.getItem("unum",unum);
      var pass = localStorage.getItem("pw", pw); 
      var conpw = localStorage.getItem("cpw", cpw); 
      

      
      var usernumber=document.getElementById("number").value; 
      var password=document.getElementById("password").value; 

       if (usernumber == uno  && password == pass  ){
         alert("Login successful !"); 
        } else { alert("Invalid details !"); 
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