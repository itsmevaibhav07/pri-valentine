// Scroll reveal
const reveals = document.querySelectorAll(".reveal");
window.addEventListener("scroll",()=>{
  reveals.forEach(el=>{
    const windowHeight = window.innerHeight;
    const elementTop = el.getBoundingClientRect().top;
    if(elementTop < windowHeight - 100){
      el.classList.add("active");
    }
  });
});

// Letter toggle
document.getElementById("openLetter").addEventListener("click",()=>{
  const box = document.getElementById("letterBox");
  box.style.display = box.style.display === "block" ? "none" : "block";
});

// Petals
const container = document.querySelector(".petals");

function createPetal(){
  const petal = document.createElement("img");
  petal.src = "petal.png";
  petal.style.position = "absolute";
  petal.style.left = Math.random()*100 + "vw";
  petal.style.width = "18px";
  petal.style.height = "18px";
  petal.style.top = "-40px";
  petal.style.animation = `fall ${6 + Math.random()*4}s linear`;
  container.appendChild(petal);
  setTimeout(()=> petal.remove(),10000);
}

setInterval(createPetal,900);

const style = document.createElement("style");
style.innerHTML = `
@keyframes fall{
0%{transform:translateY(0) rotate(0deg);}
100%{transform:translateY(110vh) rotate(180deg);}
}`;
document.head.appendChild(style);
