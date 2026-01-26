// 1. SELECTORS
const hamburger = document.getElementById("hamburger");
const navLinksContainer = document.getElementById("navLinks");
const navLinks = document.querySelectorAll(".nav-links a");
const secondaryBtn = document.querySelector(".secondary-btn");

// 2. MOBILE NAVIGATION LOGIC
const toggleMenu = (forceState) => {
  const isOpen = forceState !== undefined ? forceState : navLinksContainer.classList.contains("show");
  
  if (forceState === false || isOpen) {
    // Close Menu
    navLinksContainer.classList.remove("show");
    hamburger.innerHTML = "☰";
    document.body.style.overflow = "auto";
  } else {
    // Open Menu
    navLinksContainer.classList.add("show");
    hamburger.innerHTML = "✕";
    document.body.style.overflow = "hidden"; // Prevent background scroll
  }
};

hamburger.addEventListener("click", () => toggleMenu());

// 3. SMOOTH SCROLL WITH OFFSET 
// (Fixes title being hidden under the sticky navbar)
navLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    const targetId = link.getAttribute("href");

    if (targetId.startsWith("#")) {
      e.preventDefault();
      toggleMenu(false); // Close mobile menu when a link is clicked

      if (targetId === "#") {
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        const targetSection = document.querySelector(targetId);
        if (targetSection) {
          // Adjust 70 to match your navbar height
          const offsetTop = targetSection.offsetTop - 70; 
          window.scrollTo({
            top: offsetTop,
            behavior: "smooth"
          });
        }
      }
    }
  });
});

// 4. SCROLL REVEAL ANIMATION
// Targeted the actual classes in your HTML: .about-text, .card, .chosen, .term-text
const revealElements = document.querySelectorAll(".about-text, .card, .chosen, .term-text, .cta-section");

const revealOnScroll = () => {
  const windowHeight = window.innerHeight;
  const revealPoint = 100;

  revealElements.forEach((el) => {
    const elementTop = el.getBoundingClientRect().top;

    if (elementTop < windowHeight - revealPoint) {
      el.classList.add("revealed");
      // Applying styles directly for immediate fix
      el.style.opacity = "1";
      el.style.transform = "translateY(0)";
    }
  });
};

// Initial Setup for Reveal (Hide elements before they scroll into view)
revealElements.forEach(el => {
    el.style.opacity = "0";
    el.style.transform = "translateY(30px)";
    el.style.transition = "all 0.8s ease-out";
});

// 5. EVENT LISTENERS
window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll); // Check position on page load

// 6. UI INTERACTIONS
if (secondaryBtn) {
  secondaryBtn.addEventListener("click", () => {
    alert("Let's start!");
  });
}

// Double click/Click effect for all buttons
document.querySelectorAll("button").forEach((btn) => {
  btn.addEventListener("click", () => {
    btn.classList.add("btn-click");
    setTimeout(() => btn.classList.remove("btn-click"), 200);
  });
});
