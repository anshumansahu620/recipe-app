let display = document.querySelector(".viewport");
let inp = document.querySelector("input");
let btn = document.querySelector(".searchbutton"); // Update selector to match your HTML structure

btn.addEventListener("click", () => {
    getrecipe(inp.value);
});

const getrecipe = async (food) => {
    let response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${food}`);
    let data = await response.json();

    if (data.meals) { // Check if meals are found
        let para = document.createElement("p");
        para.innerText = data.meals[0].strInstructions;
        display.appendChild(para);
    } else {
        display.innerText = "No recipe found!";
    }

    console.log(data);
};
