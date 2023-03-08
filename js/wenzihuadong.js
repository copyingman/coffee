const reveal = document.querySelector('.hidden-text');
window.addEventListener('scroll', function () {
    const scrollPosition = window.scrollY + window.innerHeight;
    const revealPosition = reveal.offsetTop + reveal.offsetHeight;

    if (scrollPosition > revealPosition) {
        reveal.style.opacity = 1;
        reveal.style.transform = 'translateY(0)';
    }
});

const box = document.querySelector('.box');
window.addEventListener('scroll', function () {
    const scrollPosition = window.scrollY + window.innerHeight;
    const boxPosition = box.offsetTop + box.offsetHeight / 2;

    if (scrollPosition > boxPosition) {
        box.classList.remove('hidden-box');
        box.style.opacity = 1;
        box.style.transform = 'translateY(0)';
    }
});

const reveal2 = document.querySelector('.hidden-text2');
window.addEventListener('scroll', function () {
    const scrollPosition = window.scrollY + window.innerHeight;
    const revealPosition = reveal2.offsetTop + reveal2.offsetHeight;

    if (scrollPosition > revealPosition) {
        reveal2.style.opacity = 1;
        reveal2.style.transform = 'translateY(0)';
    }
});

const reveal3 = document.querySelector('.hidden-text3');
window.addEventListener('scroll', function () {
    const scrollPosition = window.scrollY + window.innerHeight;
    const revealPosition = reveal3.offsetTop + reveal3.offsetHeight;

    if (scrollPosition > revealPosition) {
        reveal3.style.opacity = 1;
        reveal3.style.transform = 'translateY(0)';
    }
});

const reveal4 = document.querySelector('.hidden-text4');
window.onload = function () {
    reveal4.style.opacity = 1;
    reveal4.style.transform = 'translateY(0)';
}

