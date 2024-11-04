// Smooth scroll for category links
document.querySelectorAll('.category-link').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const target = document.querySelector(link.getAttribute('href'));
        target.scrollIntoView({ behavior: 'smooth' });
    });
});

// Highlight active category based on scroll position
const projectBoxes = document.querySelectorAll('.project-box');
const categoryLinks = document.querySelectorAll('.category-link');

const observerOptions = {
    threshold: 0.5
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const category = entry.target.dataset.category;
            categoryLinks.forEach(link => {
                link.classList.remove('active');
                if (link.dataset.category === category) {
                    link.classList.add('active');
                }
            });
        }
    });
}, observerOptions);

projectBoxes.forEach(box => observer.observe(box));