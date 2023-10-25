var nav = document.querySelectorAll("header nav > a");
console.log(nav);
var options = document.querySelector("nav");
console.log(options);

var iconNav = document.querySelector(".icon-menu");
console.log(iconNav);
iconNav.addEventListener('click', function(){
    if(options.classList.contains("active")){
        options.classList.add("inactive")
        options.classList.remove("active")
    }else{
        options.classList.add("active")
        options.classList.remove("inactive")
    }
  
});