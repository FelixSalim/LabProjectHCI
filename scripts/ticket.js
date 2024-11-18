document.querySelector(".burger").addEventListener("click", () => {
    document.querySelector(".burger").classList.toggle("active-nav");
    document.querySelector(".menus").classList.toggle("show-menu");
    document.querySelector(".nav-bg").classList.toggle("extend");
})

let currentSlide = 0;

window.addEventListener("resize", () => {
    currentSlide = 0;
    document.querySelector(".seat-card-slide").style.transform = "translateX(0)";
    document.querySelectorAll(".seat-card-slide > div").forEach((e) => {
        e.classList.remove("active");
    })
    document.querySelectorAll(".seat-card-slide > div")[0].classList.add("active");
})

document.querySelector(".prev-btn").addEventListener("click", slideLeft);
document.querySelector(".next-btn").addEventListener("click", slideRight);

function slideLeft() {
    document.querySelector(".prev-btn").removeEventListener("click", slideLeft);
    document.querySelector(".next-btn").removeEventListener("click", slideRight);
    document.querySelectorAll(".seat-card-slide > div").forEach((e) => {
        e.classList.add("active");
    })
    setTimeout(() => {
        document.querySelectorAll(".seat-card-slide > div").forEach((e, idx) => {
            if (currentSlide != idx) e.classList.remove("active");
        })
    }, 700)
    currentSlide--;
    if (currentSlide == -1) {
        currentSlide = 3;
    }
    document.querySelectorAll(".seat-card-slide > div")[currentSlide].classList.add("active");
    document.querySelector(".seat-card-slide").style.transform = `translateX(calc(${currentSlide} * -100vw))`;
    setTimeout(() => {
        document.querySelector(".prev-btn").addEventListener("click", slideLeft);
        document.querySelector(".next-btn").addEventListener("click", slideRight);
    }, 1001)
}

function slideRight() {
    document.querySelector(".prev-btn").removeEventListener("click", slideLeft);
    document.querySelector(".next-btn").removeEventListener("click", slideRight);
    document.querySelectorAll(".seat-card-slide > div").forEach((e) => {
        e.classList.add("active");
    })
    setTimeout(() => {
        document.querySelectorAll(".seat-card-slide > div").forEach((e, idx) => {
            if (currentSlide != idx) e.classList.remove("active");
        })
    }, 800)
    currentSlide ++;
    if (currentSlide == 4) {
        currentSlide = 0;
    }
    document.querySelectorAll(".seat-card-slide > div")[currentSlide].classList.add("active");
    document.querySelector(".seat-card-slide").style.transform = `translateX(calc(${currentSlide} * -100vw))`;
    setTimeout(() => {
        document.querySelector(".prev-btn").addEventListener("click", slideLeft);
        document.querySelector(".next-btn").addEventListener("click", slideRight);
    }, 1001)
}

let descObs = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("desc-on-screen");
        }
    })
}, {
    root : null,
    rootMargin : "0px",
    threshold : 0.1
})

let circuitObs = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("circuit-on-screen");
        }
    })
}, {
    root : null, 
    rootMargin : "0px",
    threshold : 0.25
})

let ttDescObs = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("desc-on-screen");
        }
    })
}, {
    root : null,
    rootMargin : "0px",
    threshold : 0.1
})

let cardObs = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("card-on-screen");
        }
    })
}, {
    root : null,
    rootMargin : "0px",
    threshold : (window.innerWidth > 820) ? 0.2 : 0.1
})

descObs.observe(document.querySelector(".cc-desc"));
circuitObs.observe(document.querySelector(".circuit-img-section"));
ttDescObs.observe(document.querySelector(".tt-desc"));
cardObs.observe(document.querySelector(".seat-card-slide"));

const getTicketButtons = document.querySelectorAll(".get-tickets-btn");
const emailIcon = document.querySelector(".email-icon");
const chatIcon = document.querySelector(".chat-icon");
const emailHoverIcon = document.querySelector(".email-hover-icon");
const chatHoverIcon = document.querySelector(".chat-hover-icon");

getTicketButtons.forEach((btn) =>  {
    btn.addEventListener("click", () => {
        window.location.href = "booking.html";
    })
})

chatIcon.addEventListener("click", () => {
    window.open("https://wa.me/082134492031");
})

emailIcon.addEventListener("click", () => {
    window.open("mailto:info@email.com");
})

emailIcon.addEventListener("mouseover", () => {
    emailHoverIcon.classList.remove("hidden");
    emailIcon.classList.add("hidden");
})

emailIcon.addEventListener("mouseout", () => {
    emailHoverIcon.classList.add("hidden");
    emailIcon.classList.remove("hidden");
})

chatIcon.addEventListener("mouseover", () => {
    chatHoverIcon.classList.remove("hidden");
    chatIcon.classList.add("hidden");
})

chatIcon.addEventListener("mouseout", () => {
    chatHoverIcon.classList.add("hidden");
    chatIcon.classList.remove("hidden");
})