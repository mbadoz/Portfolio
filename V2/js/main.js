// Animation de la ligne "Learn More"
document.getElementById("learn-more").addEventListener("click", () => {
    gsap.to("#animated-line line", {
      attr: { x2: "100%" },
      duration: 2,
      ease: "power2.out",
      onComplete: () => {
        document.querySelector(".home").style.marginBottom = "0";
        gsap.to(window, { duration: 1, scrollTo: { y: "#about" } });
      }
    });
  });
  
  // Animation d'arrivée de la section "À propos"
  gsap.from("#about", {
    scrollTrigger: "#about",
    y: 100,
    opacity: 0,
    duration: 1.5,
    delay: 1
  });
  
  // Transition vers les projets
  document.getElementById("next-to-projects").addEventListener("click", () => {
    gsap.to(window, { duration: 1, scrollTo: { y: "#projects" } });
  });
  
  // Animation de la galerie de projets
  document.querySelectorAll(".project-card").forEach(card => {
    card.addEventListener("click", () => {
      gsap.to(card, {
        rotateY: 180,
        scale: 2,
        duration: 0.5,
        onComplete: () => card.classList.add("fullscreen")
      });
    });
  });
  
  // Navigation dans les projets
  let currentIndex = 0;
  const cards = document.querySelectorAll(".project-card");
  document.querySelector(".next").addEventListener("click", () => {
    gsap.to(cards[currentIndex], { x: "-100%", opacity: 0, duration: 0.5, onComplete: () => {
      currentIndex = (currentIndex + 1) % cards.length;
      gsap.set(cards[currentIndex], { x: "100%", opacity: 0 });
      gsap.to(cards[currentIndex], { x: "0%", opacity: 1, duration: 0.5 });
    }});
  });
  
  // Animation de la section "Contact"
  gsap.from("#contact", {
    scrollTrigger: "#contact",
    y: "100%",
    opacity: 0,
    duration: 1.5
  });