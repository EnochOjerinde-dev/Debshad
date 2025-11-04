document.addEventListener("DOMContentLoaded", () => {
  lucide.createIcons();

  const animatedSections = document.querySelectorAll('.fade-up, .fade-in, .slide-in, .pop');

  const revealOnScroll = () => {
    animatedSections.forEach(section => {
      const position = section.getBoundingClientRect().top;
      if (position < window.innerHeight - 100) {
        section.style.animationPlayState = 'running';
      }
    });
  };

  window.addEventListener('scroll', revealOnScroll);
  revealOnScroll();
});
