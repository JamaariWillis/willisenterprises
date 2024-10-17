window.addEventListener('scroll', function() {
    const topBar = document.querySelector('.top-bar');
    const bottomBar = document.querySelector('.bottom-bar');

    if (window.scrollY > 100) {
        bottomBar.style.opacity = 0;

        setTimeout(() => {
            if (window.scrollY > 100) {
                topBar.classList.remove('hidden');
                setTimeout(() => {
                    topBar.style.opacity = 1;
                }, 10);
            }
        }, 300);
    } else {
        topBar.style.opacity = 0;

        setTimeout(() => {
            if (window.scrollY <= 100) {
                topBar.classList.add('hidden');
                bottomBar.style.opacity = 1;
            }
        }, 300);
    }
});

// Initialize top bar opacity to 0 and display to none
const topBarInit = document.querySelector('.top-bar');
topBarInit.style.opacity = 0;
topBarInit.classList.add('hidden');

