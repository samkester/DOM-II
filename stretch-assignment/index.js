const blocks = Array.from(document.querySelectorAll(".block"));
const MIN_HORIZ_POSITION = 10;
const MAX_HORIZ_POSITION = 1500;
const UPDATE_INTERVAL_MS = 35;
const HORIZ_PX_PER_INTERVAL = 40;

blocks.forEach((item, index) => {
    item.index = index;
    item.style.position = "absolute";
    item.style.transition = "top 5s, left 0.3s linear";
    item.isMoving = false;
    item.hPos = MIN_HORIZ_POSITION;
    updateVerticalPositions();
    updateHorizPositions();
    item.addEventListener("click", (event) => moveBlockToTop(event.target));
    item.addEventListener("mousedown", (event) => startMoving(event.target));
    item.addEventListener("mouseup", (event) => stopMoving(event.target));
});

document.defaultView.addEventListener("mouseup", () => clearAllMovement());

window.setInterval(updateHorizPositions, UPDATE_INTERVAL_MS);

function updateVerticalPositions(){
    blocks.forEach((item, index) => item.style.top = `${100 + index * 120}px`)
}

function moveBlockToTop(item){
    blocks.unshift(blocks.splice(blocks.indexOf(item), 1)[0]);
    updateVerticalPositions();
}

function startMoving(item){
    item.isMoving = true;
}

function stopMoving(item){
    item.isMoving = false;
}

function updateHorizPositions(){
    //console.log(blocks);
    blocks.forEach(item => {
        //console.log(item.isMoving);
        if(item.isMoving){
            item.hPos += HORIZ_PX_PER_INTERVAL;
            if(item.hPos > MAX_HORIZ_POSITION) item.hPos = MAX_HORIZ_POSITION;
        }
        else{
            item.hPos -= HORIZ_PX_PER_INTERVAL;
            if(item.hPos < MIN_HORIZ_POSITION) item.hPos = MIN_HORIZ_POSITION;
        }
        //console.log(item.hPos);
        item.style.left = `${item.hPos}px`;
        //console.log(item.style.left);
    });
}

function clearAllMovement(){
    blocks.forEach(item => item.isMoving = false);
}

// While a mouse is clicked down on a box, it should move to the right (It should coninuously move, there is no limit on how far it will go).
// When the mouse button is released, it should travel back to its original position.