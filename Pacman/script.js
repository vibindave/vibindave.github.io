// Content for Resume Sections
const resumeContent = {
    "About Me": "Hi, I'm [Your Name]! I'm a passionate developer who loves creating interactive websites.",
    "Skills": "HTML, CSS, JavaScript, Angular, React, Node.js, and more.",
    "Experience": "Worked at XYZ company as a front-end developer for 3 years.",
    "Projects": "1. E-commerce Website\n2. Personal Portfolio\n3. Pacman Resume!"
  };
  
  // Pacman and Dots Interaction
  const pacman = document.querySelector('.pacman');
  const dots = document.querySelectorAll('.dot');
  const resumeSection = document.getElementById('resume-section');
  const sectionTitle = document.getElementById('section-title');
  const sectionContent = document.getElementById('section-content');
  const closeButton = document.getElementById('close-section');
  
  let pacmanX = 0;
  
  // Function to check collision
  function checkCollision() {
    dots.forEach(dot => {
      const dotX = parseInt(dot.style.left);
      if (Math.abs(dotX - pacmanX) < 30) {
        const section = dot.dataset.section;
        sectionTitle.textContent = section;
        sectionContent.textContent = resumeContent[section];
        resumeSection.style.display = 'block';
        dot.remove(); // Remove dot after interaction
      }
    });
  }
  
  // Update Pacman position
  function movePacman() {
    pacmanX += 5; // Adjust movement speed
    pacman.style.transform = `translateX(${pacmanX}px)`;
    checkCollision();
    if (pacmanX > window.innerWidth) {
      pacmanX = 0; // Reset Pacman position
    }
    requestAnimationFrame(movePacman);
  }
  
  // Close Resume Section
  closeButton.addEventListener('click', () => {
    resumeSection.style.display = 'none';
  });
  
  // Start Pacman movement
  movePacman();
  