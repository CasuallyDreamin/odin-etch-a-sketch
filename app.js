const container = document.querySelector(".container");

function gridify(dimension) {
    for(let i = 0; i < dimension; i++) {
        const new_row = document.createElement("div")
        
        new_row.setAttribute("class", "row");

        for (let j = 0; j < dimension; j++) {
            new_row.appendChild(createSquare())
        }
        
        container.appendChild(new_row);
    }
}

function createSquare() {
    const new_square = document.createElement("div");
    new_square.setAttribute("class", "square");
    return new_square;
}

function changeDimensions() {
    let new_dimension = prompt("Enter new grid dimension");
    new_dimension = parseInt(new_dimension);
    container.textContent = '';
    gridify(new_dimension);
}

gridify(16)

