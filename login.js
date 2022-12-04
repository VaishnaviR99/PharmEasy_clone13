


     function signup(e) { 
        event.preventDefault();
        
           var username = document.getElementById('Name').value;
           var mobno = document.getElementById('no').value;
           var pass = document.getElementById('passw').value;
           var cpass = document.getElementById('cpassw').value;


           
           var user = { 
            mobnumber: mobno,
            username: username, 
            password: pass,
           }; 
           
           var json = JSON.stringify (user);
            localStorage.setItem(username, json);
             console.log('user added');

             if(pass!==cpass){
              alert("passwored not match");
             }
             else if(pass===cpass){
              alert("Account created succesfully...!!!");
             }
             else if(username===null){
              alert("Fill details...!!!");
             }
             
     }


     function loginFunc(e) {
       event.preventDefault();
       
       var username = document.getElementById('username').value;
       var pass = document.getElementById("password").value; 
       var result = document.getElementById('result'); 
       
       
       var user = localStorage.getItem(username); 
       var data = JSON.parse(user); 
       console.log(data); 
       
       if(user == null) {
         alert("Wrong username");
         } else if(username == data. username && pass == data.password) { 
          result.innerHTML = 'Loged in sucesssull...!!!'; 
        }else{ 
          result.innerHTML = 'Wrong password....!!!';
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