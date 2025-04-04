window.addEventListener("scroll", function () {
    let navbar = document.querySelector(".header");
    
    if (window.scrollY > 0) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});



document.addEventListener('DOMContentLoaded', () => {
    const words = document.querySelectorAll('.slider-text b');
    let currentIndex = 0;
    let letterIndex = 0;
    let isDeleting = false;

    function type() {
        const currentWord = words[currentIndex];
        const text = currentWord.dataset.text || currentWord.textContent;
        
        // حفظ النص الأصلي في data-text عشان ما يضيعش
        if (!currentWord.dataset.text) {
            currentWord.dataset.text = currentWord.textContent;
        }

        // تحديث النص المعروض
        currentWord.textContent = text.substring(0, letterIndex);

        if (!isDeleting && letterIndex < text.length) {
            // الكتابة
            letterIndex++;
            setTimeout(type, 150); // سرعة الكتابة
        } else if (isDeleting && letterIndex > 0) {
            // المسح
            letterIndex--;
            setTimeout(type, 100); // سرعة المسح
        } else if (!isDeleting && letterIndex === text.length) {
            // التوقف بعد الكتابة
            isDeleting = true;
            setTimeout(type, 2000); // مدة التوقف قبل المسح
        } else if (isDeleting && letterIndex === 0) {
            // الانتقال للكلمة التالية
            isDeleting = false;
            currentWord.classList.remove('is-visible');
            currentWord.classList.add('is-hidden');
            
            // تحديث المؤشر للكلمة التالية
            currentIndex = (currentIndex + 1) % words.length;
            
            const nextWord = words[currentIndex];
            nextWord.classList.remove('is-hidden');
            nextWord.classList.add('is-visible');
            letterIndex = 0;
            
            setTimeout(type, 500); // التوقف قبل بدء الكتابة
        }
    }

    // بدء التأثير
    type();
});