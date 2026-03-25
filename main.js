// 🎇 CONFETTI
let container = document.querySelector(".confetti");

for(let i=0;i<60;i++){
  let span = document.createElement("span");

  span.style.left = Math.random()*100 + "vw";
  span.style.animationDuration = (3 + Math.random()*5) + "s";

  let colors = ["red","pink","yellow","white"];
  span.style.background = colors[Math.floor(Math.random()*colors.length)];

  container.appendChild(span);
}

// 🎀 BUTTON TRANSITION
let btn = document.querySelector(".card a");

btn.addEventListener("click", function(e){
  e.preventDefault();

  document.body.style.transition = "0.5s";
  document.body.style.opacity = "0";
  document.body.style.transform = "scale(1.2)";

  setTimeout(()=>{
    window.location = this.href;
  },500);
}); 
intro.addEventListener("animationend", () => {

  document.addEventListener("click", () => {

    music.volume = 0;
    music.play();

    let vol = 0;
    let fade = setInterval(() => {
      if(vol < 1){
        vol += 0.05;
        music.volume = vol;
      } else {
        clearInterval(fade);
      }
    }, 200);

  }, { once: true });

});