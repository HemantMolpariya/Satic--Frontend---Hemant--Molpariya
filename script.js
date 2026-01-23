// simple button intersection
document.querySelector(".secondary-btn").addEventListener("click",()=>
 alert("let's start !")
);

// Scroll Reveal Document
const revealElements= document.querySelectorAll(
    ".about-text,.services-card, .cta-section",
);

const revealOnScroll= ()=>{
 const windowHeight = window.innerHeight;
  revealElements.forEach((e1) =>{
    const elemntTop = e1.
  getBoundingClientRect().top;
   const revealPoint = 120;
   
   if(elemntTop < windowHeight - revealPoint){
     e1.classList.add("show");
   }
  });
};

window.addEventListener("scroll", revealOnScroll);
revealOnScroll();

// Double click Effect
const button = document.querySelectorAll("button");

button.forEach((btn) =>{
    btn.addEventListener("click",() =>
{
   btn.classList.add("btn-click");
   setTimeout(() =>{
     btn.classList.remove("btn-click")
   }, 200);
  });
});

// smooth scroll for nav link
const navLinks = document.querySelectorAll("nav a");

navLinks.forEach((link) =>{
 link.addEventListener("click", (e) =>{
    e.preventDefault();
    const targetId = link.getAttribute("href");
    const targetSection = document.querySelector(targetId);

    targetSection.scrollIntoView({
       behavior : "smooth",
    });
 });
});

// smooth scroll for nav link
const nav_Links = document.querySelectorAll("nav a");

navLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
        const targetId = link.getAttribute("href");

        // Only run smooth scroll if the link points to an ID (starts with #)
        if (targetId.startsWith("#") && targetId.length > 1) {
            e.preventDefault();
            const targetSection = document.querySelector(targetId);

            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: "smooth",
                });
            }
        }
    });
});
