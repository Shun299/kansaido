document.addEventListener("DOMContentLoaded", () => {
    const option = {
        root: null,
        rootMargin: "0px",
        threshold: 0.3,
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if(entry.isIntersecting) {
                entry.target.classList.add("active")
                observer.unobserve(entry.target);
            }
        })
    },option);

    document.querySelectorAll(".reco-card-move, .move_upwards, .right1, .left2, .blur , .active").forEach(el => observer.observe(el));
        
    const loadingImg = document.querySelector("#loading__img");
    setTimeout(() => {
        loadingImg.classList.add("is-blur");
    },100);
    
    window.addEventListener("load", ()=> {    
        const loading = document.querySelector("#loading");
        setTimeout(() => {
            loading.classList.add("is-hidden");
        }, 800);
    });

    const headerHamburger = document.querySelector("#hamburger_menu");
    const headerSmartphoneNav = document.querySelector("#smartphone-nav");
    const smartphoneNavItems = document.querySelectorAll("#smartphone-nav__items a");

    headerHamburger.addEventListener("click", () => {
        const isOpen = headerSmartphoneNav.classList.toggle("clicked");
        headerHamburger.classList.toggle("clicked", isOpen);
        headerHamburger.setAttribute("aria-expanded", isOpen);
        headerHamburger.setAttribute("aria-label", isOpen ? "メニューを閉じる" : "メニューを開く");
    });

    smartphoneNavItems.forEach(item => {
        item.addEventListener("click", () => {
            headerSmartphoneNav.classList.remove("clicked");
            headerHamburger.classList.remove("clicked");
            headerHamburger.setAttribute("aria-expanded", "false");
            headerHamburger.setAttribute("aria-label", "メニューを開く");
        });
    });
});