let btns = document.querySelector(".btn-toggle");
let styless = document.querySelector(".desktopsidebar");

btns.addEventListener("click", () => {    
        styless.classList.toggle("sidebardown");  
});
