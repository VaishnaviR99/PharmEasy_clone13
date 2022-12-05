
     function loginFunc(e) {
      event.preventDefault();
      
      var username = document.getElementById('username').value;
      var pass = document.getElementById("password").value; 
      var result = document.getElementById('result'); 
      
      
      var user = localStorage.getItem(username); 
      var data = JSON.parse(user); 
      console.log(data); 
      
      if(username=="" || pass== "") {
        alert("Fill all details");
        } else if(username == data. username && pass == data.password) { 
         alert("Loged in sucesssull...!!!");
       }else{ 
         alert( "Wrong credential....!!!");
       }

      logintest();
     }
     
     function logintest() {
      window.location.href = "Landing page.html";
      
  }