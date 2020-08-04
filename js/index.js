document.querySelector("#banner-img").addEventListener("click", event => event.target.classList.toggle("mini"));

//document.querySelector("#banner-img").addEventListener("click", event => event.target.setAttribute("src", nextImageFrom(event.target.getAttribute("src"))));
document.querySelector("#img-1").addEventListener("click", event => event.target.style.border = "5px solid pink");


function nextImageFrom(previous){
    if(previous === "img/adventure.jpg") return "img/destination.jpg";
    if(previous === "img/destination.jpg") return "img/fun.jpg";
    if(previous === "img/fun.jpg") return "img/fun-bus.jpg";
    if(previous === "img/fun-bus.jpg") return "img/adventure.jpg";
}