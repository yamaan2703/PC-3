
/*********************  PC POINT Animation Start *********************/
var textWrapper = document.querySelector('.ml1 .letters');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true})
.add({
  targets: '.ml1 .letter',
  scale: [0.3,1],
  opacity: [0,1],
  translateZ: 0,
  easing: "easeOutExpo",
  duration: 3000,
  delay: (el, i) => 70 * (i+1)
}).add({
  targets: '.ml1 .line',
  scaleX: [0,1],
  opacity: [0.5,1],
  easing: "easeOutExpo",
  duration: 900,
  offset: '-=875',
  delay: (el, i, l) => 80 * (l - i)
}).add({
  targets: '.ml1',
  opacity: 0,
  duration: 1000,
  easing: "easeOutExpo",
  delay: 3000
});
/*********************  PC POINT Animation End *********************/


/*********************  Navbar Start *********************/
window.onscroll = () => {
  let navbar = document.getElementById('navs')
  if (window.scrollY > 460) {
    navbar.classList.add('nav-active');
  } else {
    navbar.classList.remove('nav-active');
  }
};
/*********************  Navbar Start *********************/

/********************* Customer Start *********************/
var number = document.getElementById("number")
var counter = 0
setInterval(() => {
  if(counter == 100){
    clearInterval
  }
  else{
    counter += 1
    number.innerHTML = counter + "%"
  }
  
}, 50)
/********************* Customer Start *********************/

/********************* Experience Start *********************/
var experience = document.getElementById("experience")
var count = 0
setInterval(() => {
  if(count == 8){
    clearInterval
  }
  else{
    count += 1
    experience.innerHTML = `${counter} +`
  }
  
}, 50)
/********************* Experience End *********************/


