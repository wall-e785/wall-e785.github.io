console.log("main.js loaded");

let clickable = document.getElementById("creative-visualization-container");

clickable.addEventListener('click', () =>{
    console.log("click");
    let eye1 = document.getElementById("eye1");
    let eye2 = document.getElementById("eye2");

    /*referenced from: https://css-tricks.com/snippets/javascript/random-hex-color/*/
    let randomColor = Math.floor(Math.random() * 16777215).toString(16);
    eye1.setAttribute("fill", `#${randomColor}`);
    eye2.setAttribute("fill", `#${randomColor}`);
   

    setTimeout(()=>{
        eye1.setAttribute('fill', 'black');
        eye2.setAttribute('fill', 'black');
    }, 2000);
});

let a2Button = document.getElementById("a2");
let a3Button = document.getElementById("a3");

a2Button.parentElement.classList.remove("hidden");

let a2Content = document.getElementById("a2-content");
let a3Content = document.getElementById("a3-content");
a3Content.classList.add("hidden");

a2Button.addEventListener('click', () => {
    if(a2Content.classList.contains("hidden")){
        a2Content.classList.remove("hidden");
        a3Content.classList.add("hidden");
    }
});

a3Button.addEventListener('click', () => {
    let a3Content = document.getElementById("a3-content");
    if(a3Content.classList.contains("hidden")){
        a3Content.classList.remove("hidden");
        a2Content.classList.add("hidden");
    }
});