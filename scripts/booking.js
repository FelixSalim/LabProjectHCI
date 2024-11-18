document.querySelector(".burger").addEventListener("click", () => {
    document.querySelector(".burger").classList.toggle("active-nav");
    document.querySelector(".menus").classList.toggle("show-menu");
    document.querySelector(".nav-bg").classList.toggle("extend");
})

let slide = 0;
setInterval(() => {
    slide++;
    if (slide == 4) {
        slide = 0;
    }
    if (window.innerWidth > 820) {
        document.querySelector(".basic-slider").style.transform = `translateX(calc(${slide} * -0.45 * 88vw))`;
    } else if (window.innerWidth > 420) {
        document.querySelector(".basic-slider").style.transform = `translateX(calc(${slide} * -0.9 * 88vw))`;
    } else {
        document.querySelector(".basic-slider").style.transform = `translateX(calc(${slide} * -1 * 88vw))`;
    }
    setTimeout(() => {
        if (window.innerWidth > 820) {
            document.querySelector(".premium-slider").style.transform = `translateX(calc(${slide} * -0.45 * 88vw))`;
        } else if (window.innerWidth > 420) {
            document.querySelector(".premium-slider").style.transform = `translateX(calc(${slide} * -0.9 * 88vw))`;
        } else {
            document.querySelector(".premium-slider").style.transform = `translateX(calc(${slide} * -1 * 88vw))`;
        } 
    }, 2000)
}, 5000)

const packages = ["Basic", "Premium"]
document.querySelectorAll(".book-btn").forEach((e, idx) => {
    e.addEventListener("click", () => {
        window.location.href = "booking-detail.html?package=" + packages[idx];
    })
})

let basicPackageObs = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("basic-on-screen");
        }
    })
}, {
    root : null,
    rootMargin : "0px",
    threshold : 0.2
})

let premPackageObs = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("prem-on-screen");
        }
    })
}, {
    root : null,
    rootMargin : "0px",
    threshold : 0.2
})

basicPackageObs.observe(document.querySelector(".basic-package"));
premPackageObs.observe(document.querySelector(".premium-package"));

const emailIcon = document.querySelector(".email-icon");
const chatIcon = document.querySelector(".chat-icon");
const emailHoverIcon = document.querySelector(".email-hover-icon");
const chatHoverIcon = document.querySelector(".chat-hover-icon");

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