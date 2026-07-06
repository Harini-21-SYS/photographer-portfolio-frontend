AOS.init({
    duration:1000,
    once:false,
});
// Auto update copyright year
document.getElementById("year").textContent = new Date().getFullYear();
const bookBtn=document.getElementById("bookBtn");
const callBtn=document.getElementById("callBtn");
bookBtn.addEventListener("click" , function(event){
    event.preventDefault();
    console.log("Book A Session button is clicked");
});
callBtn.addEventListener("click" , function(event){
    event.preventDefault();
    console.log("Call Me button is clicked");
});


