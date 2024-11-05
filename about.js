const profileContent = document.querySelector('.profile-content');
    const laptopContainer = document.querySelector('.laptop-container');
    const laptop = document.querySelector('.laptop');
    const laptopScreen = document.querySelector('.laptop-screen');
    const gridSection = document.querySelector('.grid-section');
    const sectionTitle = document.querySelector('.section-title');

    let lastScrollY = window.scrollY;
    const animationBreakpoint = window.innerHeight * 0.3;

    window.addEventListener('scroll', () => {
      const scrollY = window.scrollY;
      const scrollProgress = Math.min(scrollY / animationBreakpoint, 1);

      // First animation phase: Content shrinks and moves to laptop
      if (scrollProgress <= 1) {
        profileContent.style.transform = `scale(${1 - scrollProgress * 0.5})`;
        profileContent.style.opacity = 1 - scrollProgress;
        
        laptopContainer.style.opacity = scrollProgress;
        laptopScreen.style.transform = `scaleY(${1 - scrollProgress * 0.3})`;
        
        sectionTitle.style.opacity = scrollProgress;
        sectionTitle.style.transform = `translateY(${20 - scrollProgress * 20}px)`;
      }

      // Second animation phase: Show grid items
      if (scrollY > animationBreakpoint * 1.5) {
        gridSection.style.opacity = 1;
        gridSection.style.transform = 'translateY(0)';
      }

      lastScrollY = scrollY;
    });

