let bar = document.getElementsByClassName("bar");
let cross = document.getElementsByClassName("cross");
let element = document.querySelector(".bar");
let rotate = document.querySelector(".intial");

let navAdd = document.getElementsByClassName("hide")[0];


if (bar[0] && cross[0]) { // Ensure elements exist
    bar[0].addEventListener("click", myFunction);
    cross[0].addEventListener("click", myFunction);
}


function myFunction(){
    
   

    if (element && rotate && navAdd) {

        element.classList.toggle("hide");
        rotate.classList.toggle("first");

        navAdd.classList.toggle("nav");

       
       
    }
   
}


//navAdd.classList.add("nav");


// function myFunction() {
//     var element = document.getElementById("myDIV");
//    
//   }




