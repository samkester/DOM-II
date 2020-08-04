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

document.querySelector("#banner-img").addEventListener("click", event => event.target.classList.toggle("mini"));

document.querySelector("#img-1").addEventListener("click", event => {
    //console.log(event.target.src);
    event.target.src = nextImageFrom(event.target.src);
    //console.log(event.target.src);
});

//document.querySelector("#img-1").addEventListener("click", event => event.target.style.border = "5px solid pink");


