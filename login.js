
fetch('https://api.github.com/users/hadley/orgs')
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    console.log(data);
    localStorage.setItem("DataUser", JSON.stringify(data)); // This will log the response data to the console
  })
  .catch(function(error) {
    console.error('Error:', error);
  });

document.getElementById("btnLogin").addEventListener("click", function(){
    localStorage.setItem("username", "ngokhang");
    localStorage.setItem("password", "ngokhang123");

    var usernameData = localStorage.getItem("username");
    var passwordData = localStorage.getItem("username");
    
    var username = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    if(username == usernameData && password == passwordData){
        window.location.href="./lab14.html";
    }
})

