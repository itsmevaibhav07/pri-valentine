// Scroll Reveal
const reveals = document.querySelectorAll(".reveal");

window.addEventListener("scroll", () => {
reveals.forEach(el => {
const windowHeight = window.innerHeight;
const elementTop = el.getBoundingClientRect().top;
if(elementTop < windowHeight - 100){
el.classList.add("active");
}
});
});

// Falling Petals
const petalsContainer = document.querySelector(".petals");

function createPetal(){
const petal = document.createElement("img");
petal.src = "petal.png";
petal.style.position = "absolute";
petal.style.left = Math.random()*100 + "vw";
petal.style.animation = `fall ${5 + Math.random()*5}s linear`;
let size = 20 + Math.random()*20;
petal.style.width = size + "px";
petal.style.height = size + "px";
petalsContainer.appendChild(petal);

setTimeout(()=> petal.remove(), 10000);
}

setInterval(createPetal, 800);

const style = document.createElement("style");
style.innerHTML = `
@keyframes fall{
0%{transform:translateY(-10vh) rotate(0deg);}
100%{transform:translateY(110vh) rotate(360deg);}
}
`;
document.head.appendChild(style);
