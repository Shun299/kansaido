document.addEventListener('DOMContentLoaded', () => {
    const option = {
        root: null,
        rootMargin: "0px",
        threshold: 0.3,
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if(entry.isIntersecting) {
                entry.target.classList.add('active')
                observer.unobserve(entry.target);
            }
        })
    },option);

    document.querySelectorAll('.move_upwards, .right1, .left2, .blur , .active').forEach(el => observer.observe(el));


    const swiper = new Swiper('.swiper', {
        grabCursor: true,
        loop: true,
        effect: 'cards',
        autoplay: {
            delay: 8000,
        },
    });
})