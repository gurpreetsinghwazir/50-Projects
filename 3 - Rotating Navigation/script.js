let bar = document.getElementsByClassName("bar");
let cross = document.getElementsByClassName("cross");


bar[0].addEventListener("click", myFunction);
cross[0].addEventListener("click", myFunction);


function myFunction(){
    let element = document.querySelector(".bar");
    if (element) {
        element.classList.toggle("hide");
    }
}