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

    document.querySelectorAll('.reco-card-move, .move_upwards, .right1, .left2, .blur , .active').forEach(el => observer.observe(el));

    const loadingImg = document.querySelector("#loading__img");
    loadingImg.classList.add("is-blur");

    window.addEventListener("load", ()=> {
        const loading = document.querySelector("#loading");
        setTimeout(() => {
            loading.classList.add("is-hidden");
        }, 800);
    });
});