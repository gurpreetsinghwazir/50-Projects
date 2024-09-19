let nextbutn = document.getElementById('next');
let preButn = document.getElementById('preview');
let line = document.querySelector('.line');
let circle = document.querySelectorAll('.num');



nextbutn.addEventListener("click", lineMaker);
preButn.addEventListener("click", circleMaker);

let sum =1;


function lineMaker(eventDetails) {
    sum++

    if(sum > circle.length){
        sum = circle.length;
    }
  
    console.log("hello")
update();
}

function circleMaker(eventDetails) {
    sum--
    if(sum < 1){
        sum = 1 ;
    }
    
update();
}
 


function update(){
    circle.forEach((circle,index) => {
        if(index < sum){
            circle.classList.add("active");
            }  else{
            circle.classList.remove("active");
        }           
    
    }
);

const active = document.querySelectorAll(".active");

line.style.width = (active.length -1) / (circle.length -1) * 100 + '%';

if(sum == 1){
    preButn.disabled = true;
} else if(sum === circle.length){
    nextbutn.disabled = true;
} else{
    preButn.disabled = false;
    nextbutn.disabled = false;

}
}