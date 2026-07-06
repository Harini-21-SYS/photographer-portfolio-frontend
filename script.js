alert("Script Loaded");
AOS.init({
    duration:1000,
    once:false,
});
// Auto update copyright year
// document.getElementById("year").textContent = new Date().getFullYear();
const bookBtn=document.getElementById("bookBtn");
const callBtn=document.getElementById("callBtn");
bookBtn.addEventListener("click" , function(event){
    event.preventDefault();
    localStorage.getItem("userEmail");
      
      
        window.location.href = "login.html";
    

    
});
callBtn.addEventListener("click" , function(event){
    event.preventDefault();
    
    const user = localStorage.getItem("userEmail");


       
 
        window.location.href = "login.html";
    

});



