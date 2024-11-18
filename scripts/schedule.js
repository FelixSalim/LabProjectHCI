document.querySelector(".burger").addEventListener("click", () => {
    document.querySelector(".burger").classList.toggle("active-nav");
    document.querySelector(".menus").classList.toggle("show-menu");
    document.querySelector(".nav-bg").classList.toggle("extend");
})

let curIdx = 0;

document.querySelectorAll(".schedule-card > div:not(:first-of-type)").forEach((e, idx) => {
    e.addEventListener("click", () => {
        document.querySelectorAll(".schedule-img").forEach((e) => {
            e.classList.remove("active-img");
        })
        document.querySelectorAll(".schedule-img")[idx].classList.add("active-img");
        document.querySelectorAll(".schedule-card > div:not(:first-of-type)").forEach((e) => {
            e.classList.remove("highlight-content");
        })
        e.classList.add("highlight-content");
        curIdx = idx;
        if (idx == 0) {
            if (window.innerWidth > 820) {
                document.querySelector(".highlight-bg").style.transform = "translateY(-11.5vw)";
            } else if (window.innerWidth > 420) {
                document.querySelector(".highlight-bg").style.transform = "translateY(-22.5vw)";
            } else {
                document.querySelector(".highlight-bg").style.transform = "translateY(-37.2vw)";
            }  
        } else if (idx == 1) {
            if (window.innerWidth > 820) {
                document.querySelector(".highlight-bg").style.transform = "translateY(-3.3vw)";
            } else if (window.innerWidth > 420) {
                document.querySelector(".highlight-bg").style.transform = "translateY(-7.5vw)";
            } else {
                document.querySelector(".highlight-bg").style.transform = "translateY(-11.5vw)";
            }  
        } else if (idx == 2) {
            if (window.innerWidth > 820) {
                document.querySelector(".highlight-bg").style.transform = "translateY(4.7vw)";
            } else if (window.innerWidth > 420) {
                document.querySelector(".highlight-bg").style.transform = "translateY(7.5vw)";
            } else {
                document.querySelector(".highlight-bg").style.transform = "translateY(13vw)";
            }  
        } else {
            if (window.innerWidth > 820) {
                document.querySelector(".highlight-bg").style.transform = "translateY(13vw)";
            } else if (window.innerWidth > 420) {
                document.querySelector(".highlight-bg").style.transform = "translateY(22.5vw)";
            } else {
                document.querySelector(".highlight-bg").style.transform = "translateY(39.2vw)";
            }  
        }
        window.location.href = "schedule.html#schedule-part2"
    })
})

window.addEventListener("resize", () => {
    if (curIdx == 0) {
        if (window.innerWidth > 820) {
            document.querySelector(".highlight-bg").style.transform = "translateY(-11.5vw)";
        } else if (window.innerWidth > 420) {
            document.querySelector(".highlight-bg").style.transform = "translateY(-22.5vw)";
        } else {
            document.querySelector(".highlight-bg").style.transform = "translateY(-37.2vw)";
        }  
    } else if (curIdx == 1) {
        if (window.innerWidth > 820) {
            document.querySelector(".highlight-bg").style.transform = "translateY(-3.3vw)";
        } else if (window.innerWidth > 420) {
            document.querySelector(".highlight-bg").style.transform = "translateY(-7.5vw)";
        } else {
            document.querySelector(".highlight-bg").style.transform = "translateY(-11.5vw)";
        }  
    } else if (curIdx == 2) {
        if (window.innerWidth > 820) {
            document.querySelector(".highlight-bg").style.transform = "translateY(4.7vw)";
        } else if (window.innerWidth > 420) {
            document.querySelector(".highlight-bg").style.transform = "translateY(7.5vw)";
        } else {
            document.querySelector(".highlight-bg").style.transform = "translateY(13vw)";
        }  
    } else {
        if (window.innerWidth > 820) {
            document.querySelector(".highlight-bg").style.transform = "translateY(13vw)";
        } else if (window.innerWidth > 420) {
            document.querySelector(".highlight-bg").style.transform = "translateY(22.5vw)";
        } else {
            document.querySelector(".highlight-bg").style.transform = "translateY(39.2vw)";
        }  
    }
})

document.querySelectorAll(".schedule-arrow-container img").forEach((e, idx) => {
    e.addEventListener("click", () => {
        if (document.querySelectorAll(".schedule-card > div:not(:first-of-type)")[idx].classList.contains("highlight-content")) {
            window.location.href = "booking.html";
        }
    })
})

let schedObs = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("sched-on-screen");
        }
    })
}, {
    root : null,
    rootMargin : "0px",
    threshold : 0.2
})

schedObs.observe(document.querySelector(".schedule-part2"));

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