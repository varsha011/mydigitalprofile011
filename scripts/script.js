// Smooth Scroll for navigation when clicking the button (if any)
const ctaButton = document.querySelector('.cta-button');
if (ctaButton) {
    ctaButton.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector('#about').scrollIntoView({ behavior: 'smooth' });
    });
}
