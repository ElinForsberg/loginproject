//const header = ducument.getElementById("header");
//const form = document.getElementById("form");




const logg = document.getElementById("submit");
const logout = document.getElementById("logout");
const welcome = document.getElementById("welcome");
const form = document.getElementById("form");

const username = document.getElementById("username");
const password = document.getElementById("password");

logout.style.display = "none"


const personalname = "Fredrik"
const personalpassword = "12345"

function init() {
    if(localStorage.getItem("username")) {
        loginSucess();
    }
}
init();

logg.addEventListener("click", checkin);

function checkin() {
    
    if (username.value == personalname && password.value == personalpassword) {
        loginSucess();
        
        localStorage.setItem("username", personalname);
        

} else {
    loginFail();
}
}


function loginSucess(){
    welcome.innerHTML = "Hej" + " " + personalname + ", " + "Du är inloggad";
    form.style.display = "none";
    logout.style.display = "block";

}




function loginFail() {
    document.getElementById("welcome").innerHTML = "Fel användarnamn eller lösenord, försök igen";
    
    username.value = "";
    password.value = "";
}

logout.addEventListener("click", checkout);

function checkout() {
    form.style.display = "block";
    welcome.innerHTML = "Välkommen till min hemsida!! Du måste logga in";
    logout.style.display = "none"
    username.value = "";
    password.value = "";

    localStorage.removeItem("username");
}

