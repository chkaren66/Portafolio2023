
var options = document.querySelector("nav");
var iconNav = document.querySelector(".icon-menu");
var iconClose = document.querySelector(".icon-close");

iconNav.addEventListener('click', function(){
    iconClose.classList.add("aparecer");
    iconClose.classList.remove("desaparecer");
    options.classList.add("active")
    options.classList.remove("inactive");
    iconNav.style.display = "none";
});

iconClose.addEventListener('click', function(){
    iconClose.classList.add("desaparecer");
    iconClose.classList.remove("aparecer");
    options.classList.add("inactive");
    options.classList.remove("active");
    iconNav.style.display = "inline";
});