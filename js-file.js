let containerDiv = document.querySelector(".container");
let btn = document.querySelector("#gridSize");

function createRows(columns){
   let rowDiv = document.createElement("div");
    rowDiv.classList.add("row");

    for( let i =0; i<columns;i++){
        columnDiv = document.createElement("div");
        columnDiv.classList.add("column");
        columnDiv.textContent= i;
        
        rowDiv.appendChild(columnDiv);
}
    containerDiv.appendChild(rowDiv);
}
