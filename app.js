const container = document.querySelector(".container");
const canvas_dimension = 960;

function gridify(dimension) {
    for(let i = 0; i < dimension; i++) {
        const new_row = document.createElement("div")
        
        new_row.setAttribute("class", "row");

        for (let j = 0; j < dimension; j++) {
            new_row.appendChild(createSquare())
        }
        
        container.appendChild(new_row);
    }
    return true
}

function createSquare() {
    const new_square = document.createElement("div");

    new_square.setAttribute("class", "square");
    new_square.addEventListener("mouseover", () => {
       new_square.style.backgroundColor = "black";
    })  
    return new_square;
}

function changeDimensions() {
    let new_dimension = prompt("Enter new grid dimension");
    new_dimension = parseInt(new_dimension);
    if (typeof(new_dimension) !== 'number') {
        alert("Invalid input. must be a number");
        return false
    } 
    if (new_dimension < 0 || new_dimension > 100) {
        alert("please enter a number between 0 and 100");
        return false
    }
    container.textContent = '';
    return gridify(new_dimension);
}

gridify(16)

