console.log("vis.js loaded");

let barChart = document.getElementById("bar-visualization-container");

/* creating svgs through javascript referenced from: https://www.geeksforgeeks.org/javascript/how-to-make-an-svg-image-in-javascript/*/
const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
svg.setAttribute('height', '450');
svg.setAttribute('width', '100%');

for(let i=1; i<=7; i++){
    let rect = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
    rect.setAttribute('x', '50');
    rect.setAttribute('y', (i*55));
    rect.setAttribute('height', '50');

    let text = document.createElementNS('http://www.w3.org/2000/svg', 'text');
    text.setAttribute('x', '10');
    text.textContent = 20 + i;
    text.setAttribute('y', 80 + ((i-1)*55));

    let val = document.createElementNS('http://www.w3.org/2000/svg', 'text');
    val.setAttribute('x', '60');
    val.setAttribute('y', 80 + ((i-1)*55));
    val.classList.add('too-short');

    if(i == 1){
        rect.setAttribute('width', '10%');
        val.textContent = 886;
    } 
    if(i == 2){
        rect.setAttribute('width', '12%');
        val.textContent = 978;
    }
    if(i == 3){
        rect.setAttribute('width', '5%');
        val.textContent = 458;
    } 
    if(i == 4){
        rect.setAttribute('width', '20%');
        val.textContent = 1938;
    }
    if(i == 5){
        rect.setAttribute('width', '15%');
        val.textContent = 1240;
    }
    if(i == 6){
        rect.setAttribute('width', '80%');
        val.textContent = 5473;
    }
    if(i == 7){
        rect.setAttribute('width', '60%');
        val.textContent = 3940;
    }

    svg.appendChild(rect);
    svg.appendChild(text);
    svg.appendChild(val);
}


barChart.appendChild(svg);

