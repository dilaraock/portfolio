
// Function expression to select elements `

const selectElement = (s) => document.querySelector(s);
const navLinks = document.querySelectorAll(".nav-link");

selectElement(".burger-menu-icon").addEventListener("click", () => {
    selectElement(".nav-list").classList.toggle("active");
    selectElement(".burger-menu-icon").classList.toggle("toggle")

    navLinks.forEach((link, index) => {
        if (link.style.animation){
            link.style.animation = ""
        }else{
            link.style.animation = `navLinkAnimate 0.5s ease forwards ${ index/7 + 0.5}s`
            console.log(index/7 + 0.5)
        }
    })
});

navLinks.forEach(link => {
    link.addEventListener("click", () => {
        selectElement(".nav-list").classList.toggle("active");
        selectElement(".burger-menu-icon").classList.toggle("toggle");

        navLinks.forEach((link, index) => {
            if (link.style.animation){
                link.style.animation = ""
            }else{
                link.style.animation = `navLinkAnimate 0.5s ease forwards ${ index/7 + 0.5}s`
                console.log(index/7 + 0.5)
            }
        })
    })
})


 
  /*  Particles */

  window.onload = function () {
	Particles.init({
	  selector: ".background"
	});
  };
  
  var particles = Particles.init({
	selector: ".background",
	color: ["#ff0099", "#00ffbf", "#000000" ],
	connectParticles: true,
	responsive: [
	  {
		breakpoint: 670,
		options: {
		  color: ["#f4f4f4", "#ff0099", "#00ffbf"],
		  maxParticles: 43,
		  connectParticles: false
		}
	  }
	]
  });