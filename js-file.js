let containerDiv = document.querySelector(".container");
let btn = document.querySelector("#gridSize");

function createGrid(count){
    for( let i =0;i<count;i++){
        let rowDiv = document.createElement("div");
        rowDiv.classList.add("row");
   
       for (let j=0;j<count;j++){
         columnDiv = document.createElement("div");
         columnDiv.classList.add("column");

         rowDiv.appendChild(columnDiv);
        }
    containerDiv.appendChild(rowDiv);
    }
    let selectGrid = document.querySelectorAll(".column");
    selectGrid.forEach(grid => grid.addEventListener("mouseenter",
    function(){
        let red = Math.floor(Math.random()*255);
        let blue = Math.floor(Math.random()*255);
        let green = Math.floor(Math.random()*255);
        let gridColor = 'rgb(' + green +  ',' + red + ' , ' +
         blue + ')';  
        grid.style.backgroundColor = gridColor;
}))}


createGrid(16);

btn.addEventListener("click", function(){
    let gridSize = +prompt("Enter grid size <=100",16);
    if (gridSize<=100 && gridSize!== 0 ){
    deleteGrid();
    createGrid(gridSize);
    }
    else
        return
})

function deleteGrid(){
    while(containerDiv.firstChild)
        containerDiv.removeChild(containerDiv.firstChild);
}