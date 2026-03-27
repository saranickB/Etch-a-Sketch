const container = document.querySelector(".container");
const button = document.querySelector("button");

const eventCounter = 0;

button.addEventListener("click", () =>{
    let num = +window.prompt("Enter number of Grids");
    if (num<=0 || num >100 || isNaN(num)) {
        return;
    }
    GridSelector(num);
});

function rgbGenerator(){
    return Math.floor(Math.random() * 256);
    // equation used is Math.floor(Math.random() * (max - min +1)+ min) with max value at 255 and min at 0
}

function opacityGenerator(eventCounter){
    if(eventCounter > 10){
        return;
    }
    return (eventCounter/10)*100;
}

function GridSelector(value){
    container.innerHTML = '';
    const size = (1/value)*100;
    for (let i =0; i<value*value; i++){
    const grid = document.createElement("div");
    grid.setAttribute("style",`width: ${size}%; height:${size}%`);
    container.appendChild(grid);

    grid.addEventListener("mouseenter", () =>{
        eventCounter ++;
        grid.style.background = rgb(rgbGenerator(),rgbGenerator(),rgbGenerator() / opacityGenerator(eventCounter)`%`);
    });
    grid.addEventListener("mouseleave", () =>{
        grid.style.backgroundColor = "white";
    })
}
}

GridSelector(16);