let images = [];
document.querySelectorAll("img").forEach(item => images.push(item.src)); // NPM does some... thing... when running that obfuscates all the image names, so fetch their new names
//console.log(images);

function nextImageFrom(previous){ // return the item from "images" after the item we pass in
    const i = images.indexOf(previous);
    //console.log(i);
    if(i + 1 >= images.length) return images[0];
    if(i >= 0) return images[i+1];
    return images[0]; // fallback if undefined
}

// event listener #1 - toggle the size of the top image on click
document.querySelector("#banner-img").addEventListener("click", event => event.target.classList.toggle("mini"));

// event listener #2 - cycle through images in the first main image on click
document.querySelector("#img-1").addEventListener("click", event => {
    //console.log(event.target.src);
    event.target.src = nextImageFrom(event.target.src);
    //console.log(event.target.src);
});

// event listener #3 - scroll through the second main image on mousewheel
let image2offset = 0;
document.querySelector("#img-2").addEventListener("wheel", event => {
    event.preventDefault(); // stops the page itself from scrolling
    image2offset += event.deltaY;
    console.log(image2offset);
    event.target.style.objectPosition = `0 ${image2offset}px`;
});

// event listeners #4 and #5 - change bottom image opacity on mouseover

const lowerImage = document.querySelector("#lower-img");

lowerImage.addEventListener("mouseover", event => {
    event.target.style.transition = "opacity 4s";
    event.target.style.opacity = "20%";
});

lowerImage.addEventListener("mouseout", event => { // two handlers are required because events are "WHEN this happens", not "WHILE this is true" (as the :hover psuedo-class is)
    event.target.style.transition = "opacity 1s 1s"; // on the other hand, this makes asymmetrical effects very easy
    event.target.style.opacity = "100%";
});

//document.querySelector("#img-1").addEventListener("click", event => event.target.style.border = "5px solid pink");


