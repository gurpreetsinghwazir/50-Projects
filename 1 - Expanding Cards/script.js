// Algorithm
// Select all target elements (e.g., buttons, list items, etc.).
// Loop through each element and attach a click event listener.
// On click:
// Remove the "active" class from all elements.
// Add the "active" class to the clicked element.


let main = document.getElementsByClassName("panel"); // HTMLCollection

// Loop through each element in the collection
for (let i = 0; i < main.length; i++) {
    main[i].addEventListener("click", function() {
        // If this element is already active, remove it. Otherwise, add it.
        if (this.classList.contains("active")) {
            this.classList.remove("active");
        } else {
            // Remove "active" from all elements first
            for (let j = 0; j < main.length; j++) {
                main[j].classList.remove("active");
            }
            // Add "active" class to the clicked element
            this.classList.add("active");
        }
    });
}



















//  const panels document.querySelectorAll('.panel') 
// panels.forEach(panel => { 
// panel.addEventListener('click', () => { 
// removeActiveClasses() 
// panel.classList.add('active') 
//  function removeActiveClasses() { 
// panel.forEach(panel => { 
// panel.classList.remove('active') 
 