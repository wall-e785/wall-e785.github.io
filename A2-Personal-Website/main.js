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

