let containerDiv = document.querySelector(".container");
let btn = document.querySelector("#gridSize");

function createRows(){
    for( let i =0;i<17;i++){
        let rowDiv = document.createElement("div");
         rowDiv.classList.add("row");

         columnDiv = document.createElement("div");
         columnDiv.classList.add("column");
         columnDiv.textContent= i;
        
            rowDiv.appendChild(columnDiv);

    containerDiv.appendChild(rowDiv);
    }
}
createRows();