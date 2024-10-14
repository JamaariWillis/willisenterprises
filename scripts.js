window.addEventListener('scroll', function() {
    const topBar = document.querySelector('.top-bar');
    const bottomBar = document.querySelector('.bottom-bar');

    if (window.scrollY > 100) {
        bottomBar.style.opacity = 0;

        setTimeout(() => {
            if (window.scrollY > 100) {
                topBar.style.display = 'block';
                setTimeout(() => {
                    topBar.style.opacity = 1;
                }, 10); // Small timeout to ensure display change takes effect
            }
        }, 300); // Match this duration with the CSS transition duration
    } else {
        topBar.style.opacity = 0;

        setTimeout(() => {
            if (window.scrollY <= 100) {
                topBar.style.display = 'none';
                bottomBar.style.opacity = 1;
            }
        }, 300); // Match this duration with the CSS transition duration
    }
});

// Initialize top bar opacity to 0 and display to none
const topBarInit = document.querySelector('.top-bar');
topBarInit.style.opacity = 0;
topBarInit.style.display = 'none';
