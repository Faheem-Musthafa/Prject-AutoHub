let lastScrollTop = 0;
const header = document.querySelector('.header');
const scrollThreshold = 50; // Adjust this value to change how much scroll is needed before hiding/showing

window.addEventListener('scroll', function() {
    let currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    if (currentScrollTop > lastScrollTop && currentScrollTop > scrollThreshold) {
        // Scrolling down & past threshold
        header.classList.add('hidden');
    } else {
        // Scrolling up or at the top
        header.classList.remove('hidden');
    }
    
    lastScrollTop = currentScrollTop <= 0 ? 0 : currentScrollTop;
}, false);

        // Optional JavaScript can be added here
        document.querySelector('.appointment-button').addEventListener('click', function() {
            alert('Appointment booked!');
        });