
AOS.init({
    duration:1000,
    once:false,
});
const userName = localStorage.getItem("userName");
const userEmail = localStorage.getItem("userEmail");

if (userName) {

    document.getElementById("profileContainer").style.display = "block";

    document.getElementById("userName").textContent = userName;

    document.getElementById("profileName").textContent = userName;

    document.getElementById("profileEmail").textContent = userEmail;
}
const profileBtn = document.getElementById("profileBtn");
const dropdownMenu = document.getElementById("dropdownMenu");

profileBtn.addEventListener("click", () => {

    dropdownMenu.classList.toggle("show");

});
window.addEventListener("click", function(event){

    if(
        !profileBtn.contains(event.target) &&
        !dropdownMenu.contains(event.target)
    ){

        dropdownMenu.classList.remove("show");

    }

});
const profileBtn = document.getElementById("profileBtn");
const profileDropdown = document.getElementById("profileDropdown");

profileBtn.addEventListener("click", function(){

    if(profileDropdown.style.display === "block"){

        profileDropdown.style.display = "none";

    }
    else{

        profileDropdown.style.display = "block";

    }

});
const logoutBtn = document.getElementById("logoutBtn");

logoutBtn.addEventListener("click", function(){

    localStorage.removeItem("userId");
    localStorage.removeItem("userName");
    localStorage.removeItem("userEmail");
    localStorage.removeItem("userPhone");

    alert("Logged out successfully");

    window.location.href = "index.html";

});
// Auto update copyright year
// document.getElementById("year").textContent = new Date().getFullYear();
const bookBtn=document.getElementById("bookBtn");
const callBtn=document.getElementById("callBtn");
bookBtn.addEventListener("click" , function(event){
    event.preventDefault();
    const user=localStorage.getItem("userEmail");
    if(user){
        window.location.href="session.html";
    }
    else{
         window.location.href = "login.html";

    }
    
});
callBtn.addEventListener("click" , function(event){
    event.preventDefault();
    
    const user = localStorage.getItem("userEmail");
     if(user){
        window.location.href="session.html";
    }
    else{
         window.location.href = "login.html";

    }

});



