const container = document.querySelector(".container");
const button = document.querySelector("button");

button.addEventListener("click", () =>{
    let num = +window.prompt("Enter number of Grids");
    if (num<=0 || num >100 || isNaN(num)) {
        return;
    }
    GridSelector(num);
});

function GridSelector(value){
    container.innerHTML = '';
    const size = (1/value)*100;
    for (let i =0; i<value*value; i++){
    const grid = document.createElement("div");
    grid.setAttribute("style",`width: ${size}%; height:${size}%`);
    container.appendChild(grid);

    grid.addEventListener("mouseenter", () =>{
        grid.style.backgroundColor = "red";
    });
    grid.addEventListener("mouseleave", () =>{
        grid.style.backgroundColor = "white";
    })
}
}

GridSelector(16);