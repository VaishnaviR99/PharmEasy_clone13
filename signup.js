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

          if(mobno=="" || pass=="" || username==""){
            alert("Fill details...!!!");
           }

         else if(pass!==cpass){
          alert("passwored not match");
         }
         else if(pass===cpass){
          alert("Account created succesfully...!!!");
         }
         
         
 }

