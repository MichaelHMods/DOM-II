// Your code goes here
// * [ ] `mouseover`
const navButtons = document.querySelectorAll('.main-navigation .nav-link');
console.log(navButtons);
aboutButton = navButtons[1];
console.log(aboutButton);
aboutButton.addEventListener('mouseover', mousover);
function mousover(){
    console.log(mousover);
};


// * [ ] `keydown`
blogButton = navButtons[2];
blogButton.addEventListener('keydown', kDown);
function kDown(){
    console.log(kDown);
    }
// * [ ] `wheel`
const wheelBody = document.querySelector('body');
wheelBody.addEventListener('wheel', wheelyMF);
function wheelyMF(){
    console.log(wheelyMF);
};

// * [ ] `drag / drop`

// * [ ] `load`
// * [ ] `focus`
// * [ ] `resize`
// * [ ] `scroll`
// * [ ] `select`
// * [ ] `dblclick`