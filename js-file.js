let containerDiv = document.querySelector(".container");
let btn = document.querySelector("#gridSize");

function createRows(count){
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

}
createRows(16);

btn.addEventListener("click", function(){
    let gridSize = +prompt("Enter grid size <100");
    if (gridSize<100){
    deleteGrid();
    createRows(gridSize);
    }
})

function deleteGrid(){
    while(containerDiv.firstChild)
        containerDiv.removeChild(containerDiv.firstChild);
}