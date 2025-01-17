let search = document.querySelector(".search");
let btn = document.querySelector(".button");

btn.addEventListener("click", show);




function show() {
    if (search) {
        search.classList.toggle("hide"); // Remove the dot before "hide"
        search.focus();
    }
}



