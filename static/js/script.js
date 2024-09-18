let darkMode = localStorage.getItem("darkMode");
const darkModeToggle = document.querySelector("#dark-mode-toggle");


const enableDarkMode = () =>{
    let x = document.querySelectorAll("div");
    for(i = 0; i < x.length; i++){
        x[i].classList.add("darkmode");
    }
    x = document.querySelectorAll("h1");
    for(i = 0; i < x.length; i++){
        x[i].classList.add("darkmode");
    }
    x = document.querySelectorAll("h2");
    for(i = 0; i < x.length; i++){
        x[i].classList.add("darkmode");
    }
    x = document.querySelectorAll("a");
    for(i = 0; i < x.length; i++){
        x[i].classList.add("darkmode");
    }
    x = document.querySelectorAll("label");
    for(i = 0; i < x.length; i++){
        x[i].classList.add("darkmode");
    }
    x = document.querySelectorAll("button");
    for(i = 0; i < x.length; i++){
        x[i].classList.add("darkmode");
    }

    localStorage.setItem("darkMode", "enabled");
};

const disableDarkMode = () => {
    let x = document.querySelectorAll("div");
    for(i = 0; i < x.length; i++){
        x[i].classList.remove("darkmode");
    }
    x = document.querySelectorAll("h1");
    for(i = 0; i < x.length; i++){
        x[i].classList.remove("darkmode");
    }
    x = document.querySelectorAll("h2");
    for(i = 0; i < x.length; i++){
        x[i].classList.remove("darkmode");
    }
    x = document.querySelectorAll("a");
    for(i = 0; i < x.length; i++){
        x[i].classList.remove("darkmode");
    }
    x = document.querySelectorAll("label");
    for(i = 0; i < x.length; i++){
        x[i].classList.remove("darkmode");
    }
    x = document.querySelectorAll("button");
    for(i = 0; i < x.length; i++){
        x[i].classList.remove("darkmode");
    }

    localStorage.setItem("darkMode", null);
};

if(darkMode === "enabled"){
    x = document.getElementById("dark-mode-status");
    x.checked = true;
    enableDarkMode();
}

darkModeToggle.addEventListener("click", () =>{
    darkMode = localStorage.getItem("darkMode");
    if(darkMode !== "enabled"){
        enableDarkMode();
    }
    else{
        disableDarkMode();
    }
})