let containerDiv = document.querySelector(".container");
let btn = document.querySelector("#gridSize");

function createRows(){
    for( let i =0;i<16;i++){
        let rowDiv = document.createElement("div");
         rowDiv.classList.add("row");

        for (let j=0;j<16;j++){
         columnDiv = document.createElement("div");
         columnDiv.classList.add("column");
         
        
            rowDiv.appendChild(columnDiv);
        }
    containerDiv.appendChild(rowDiv);
    }
}
createRows();