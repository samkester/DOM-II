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

// event listener #6 - randomly change the heading color on click

function randomColor(){
    // return a string representing a random hex color
    let result = "#"; // CSS prefix for a hex literal
    for(let i = 0; i < 3; i++)
    {
        result += (Math.floor(Math.random() * 256)).toString(16);
    }
    //console.log(result);
    return result;
}

document.querySelector("h1").addEventListener("click", event => event.target.style.color = randomColor());
document.querySelector("h1").addEventListener("dblclick", event => event.target.style.color = randomColor());

// event listeners #7 and #8 - make links grow on focus and shrink when unfocused

document.querySelectorAll(".nav-link").forEach(item => item.addEventListener("focus", event => event.target.style.fontSize = "3.2rem"));

document.querySelectorAll(".nav-link").forEach(item => item.addEventListener("blur", event => event.target.style.fontSize = "1.6rem"));

// event listener #9 - toggle color of the main text when pressing shift

const mainTexts = document.querySelectorAll(".text-content");

const color1 = "#17A2B8";
const color2 = "#212529";
let colorChanged = false;

document.addEventListener("keydown", event => {
    //console.log(event.key);
    if(event.key === "Shift")
    {
        let color = color1;
        if(colorChanged)
        {
            color = color2;
            colorChanged = false;
        }
        else
        {
            colorChanged = true;
        }
        mainTexts.forEach(item => item.style.color = color);
    }
});