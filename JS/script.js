window.addEventListener("scroll", function () {
    let navbar = document.querySelector(".header");
    
    if (window.scrollY > 0) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});



document.addEventListener('DOMContentLoaded', function() {
    const words = document.querySelectorAll('.slider-text b');
    let currentIndex = 0;
    
    function animateText() {
        // إخفاء الكلمة الحالية مع تحريك المؤشر للخلف
        words[currentIndex].classList.add('retracting');
        setTimeout(() => {
            words[currentIndex].classList.remove('is-visible', 'retracting');
            words[currentIndex].classList.add('is-hidden');
            
            // الانتقال للكلمة التالية
            currentIndex = (currentIndex + 1) % words.length;
            
            // إظهار الكلمة الجديدة مع تحريك المؤشر للأمام
            words[currentIndex].classList.remove('is-hidden');
            words[currentIndex].classList.add('extending', 'is-visible');
            
            setTimeout(() => {
                words[currentIndex].classList.remove('extending');
            }, 500);
        }, 500);
    }
    
    setInterval(animateText, 3000);
});