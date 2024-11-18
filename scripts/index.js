window.addEventListener("load", () => {
    let type = new URLSearchParams(document.location.search).get("type");
    if (type != null) {
        alert("Thank you for your purchase. Your payment has been successfully processed. You will receive a confirmation email shortly with your booking details. We look forward to welcoming you to Jetelika Island!");
    }    
})

document.querySelector(".burger").addEventListener("click", () => {
    document.querySelector(".burger").classList.toggle("active-nav");
    document.querySelector(".menus").classList.toggle("show-menu");
    document.querySelector(".nav-bg").classList.toggle("extend");
})

let carousel_slide = 2;
let slideOff = "";
if (window.innerWidth > 820) {
    slideOff = "-26.7vw"
} else if (window.innerWidth > 420) {
    slideOff = "-32.7vw"
} else {
    slideOff = "-48.8vw"
}
window.addEventListener("resize", () => {
    if (window.innerWidth > 820) {
        slideOff = "-26.7vw"
    } else if (window.innerWidth > 420) {
        slideOff = "-32.7vw"
    } else {
        slideOff = "-48.8vw"
    }
    document.querySelector(".carousel-slide").style.transform = `translateX(calc(${slideOff} * ${carousel_slide - 1}))`;
})

document.querySelector(".book-btn").addEventListener("click", () => {
    window.location.href = "booking.html";
})

function changePrevClass() {
    document.querySelector(".prev img").removeEventListener("click", leftSlide);
    document.querySelector(".next img").removeEventListener("click", rightSlide);
    document.querySelector(`.img${carousel_slide - 2}`).classList.remove("onscreen");
    document.querySelector(`.img${carousel_slide - 2}`).classList.add("offscreen");
    document.querySelector(`.img${carousel_slide - 1}`).classList.remove("active");
    document.querySelector(`.img${carousel_slide - 1}`).classList.add("offscreen");
    document.querySelector(`.img${carousel_slide}`).classList.remove("onscreen");
    document.querySelector(`.img${carousel_slide}`).classList.add("offscreen");
}

function changeAfterClass() {
    document.querySelector(".carousel-slide").style.transform = `translateX(calc(${slideOff} * ${carousel_slide - 1}))`;
    document.querySelector(`.img${carousel_slide - 2}`).classList.add("onscreen");
    document.querySelector(`.img${carousel_slide - 2}`).classList.remove("offscreen");
    document.querySelector(`.img${carousel_slide - 1}`).classList.add("active");
    document.querySelector(`.img${carousel_slide - 1}`).classList.remove("offscreen");
    document.querySelector(`.img${carousel_slide}`).classList.add("onscreen");
    document.querySelector(`.img${carousel_slide}`).classList.remove("offscreen");
}

function blinkToBack() {
    document.querySelector(".carousel-slide").style.transition = `0s`;
    document.querySelector(`.img${carousel_slide - 2}`).classList.remove("onscreen");
    document.querySelector(`.img${carousel_slide - 2}`).classList.add("offscreen");
    document.querySelector(`.img${carousel_slide - 1}`).classList.remove("active");
    document.querySelector(`.img${carousel_slide - 1}`).classList.add("offscreen");
    document.querySelector(`.img${carousel_slide}`).classList.remove("onscreen");
    document.querySelector(`.img${carousel_slide}`).classList.add("offscreen");
    carousel_slide = 5;
    document.querySelector(`.img${carousel_slide - 2}`).style.transition = "0s";
    document.querySelector(`.img${carousel_slide - 1}`).style.transition = "0s";
    document.querySelector(`.img${carousel_slide}`).style.transition = "0s";
    document.querySelectorAll(`.img${carousel_slide - 2} p`).forEach((e) => {
        e.style.transition = "0s";
    })
    document.querySelectorAll(`.img${carousel_slide - 1} p`).forEach((e) => {
        e.style.transition = "0s";
    })
    document.querySelectorAll(`.img${carousel_slide} p`).forEach((e) => {
        e.style.transition = "0s";
    })
    document.querySelector(".carousel-slide").style.transform = `translateX(calc(${slideOff} * ${carousel_slide - 1}))`;
    document.querySelector(`.img${carousel_slide - 2}`).classList.add("onscreen");
    document.querySelector(`.img${carousel_slide - 2}`).classList.remove("offscreen");
    document.querySelector(`.img${carousel_slide - 1}`).classList.add("active");
    document.querySelector(`.img${carousel_slide - 1}`).classList.remove("offscreen");
    document.querySelector(`.img${carousel_slide}`).classList.add("onscreen");
    document.querySelector(`.img${carousel_slide}`).classList.remove("offscreen");
    setTimeout(() => {
        document.querySelector(".carousel-slide").style.transition = `1s ease-in-out`;
        document.querySelector(`.img${carousel_slide - 2}`).style.transition = "1s ease-in-out";
        document.querySelector(`.img${carousel_slide - 1}`).style.transition = "1s ease-in-out";
        document.querySelector(`.img${carousel_slide}`).style.transition = "1s ease-in-out";
        document.querySelectorAll(`.img${carousel_slide - 2} p`).forEach((e) => {
            e.style.transition = "1s ease-in-out";
        })
        document.querySelectorAll(`.img${carousel_slide - 1} p`).forEach((e) => {
            e.style.transition = "1s ease-in-out";
        })
        document.querySelectorAll(`.img${carousel_slide} p`).forEach((e) => {
            e.style.transition = "1s ease-in-out";
        })
    }, 50)
}

function blinkToFront() {
    document.querySelector(".carousel-slide").style.transition = `0s`;
    document.querySelector(`.img${carousel_slide - 2}`).classList.remove("onscreen");
    document.querySelector(`.img${carousel_slide - 2}`).classList.add("offscreen");
    document.querySelector(`.img${carousel_slide - 1}`).classList.remove("active");
    document.querySelector(`.img${carousel_slide - 1}`).classList.add("offscreen");
    document.querySelector(`.img${carousel_slide}`).classList.remove("onscreen");
    document.querySelector(`.img${carousel_slide}`).classList.add("offscreen");
    carousel_slide = 2;
    document.querySelector(`.img${carousel_slide - 2}`).style.transition = "0s";
    document.querySelector(`.img${carousel_slide - 1}`).style.transition = "0s";
    document.querySelector(`.img${carousel_slide}`).style.transition = "0s";
    document.querySelectorAll(`.img${carousel_slide - 2} p`).forEach((e) => {
        e.style.transition = "0s";
    })
    document.querySelectorAll(`.img${carousel_slide - 1} p`).forEach((e) => {
        e.style.transition = "0s";
    })
    document.querySelectorAll(`.img${carousel_slide} p`).forEach((e) => {
        e.style.transition = "0s";
    })
    document.querySelector(".carousel-slide").style.transform = `translateX(calc(${slideOff} * ${carousel_slide - 1}))`;
    document.querySelector(`.img${carousel_slide - 2}`).classList.add("onscreen");
    document.querySelector(`.img${carousel_slide - 2}`).classList.remove("offscreen");
    document.querySelector(`.img${carousel_slide - 1}`).classList.add("active");
    document.querySelector(`.img${carousel_slide - 1}`).classList.remove("offscreen");
    document.querySelector(`.img${carousel_slide}`).classList.add("onscreen");
    document.querySelector(`.img${carousel_slide}`).classList.remove("offscreen");
    setTimeout(() => {
        document.querySelector(".carousel-slide").style.transition = `1s ease-in-out`;
        document.querySelector(`.img${carousel_slide - 2}`).style.transition = "1s ease-in-out";
        document.querySelector(`.img${carousel_slide - 1}`).style.transition = "1s ease-in-out";
        document.querySelector(`.img${carousel_slide}`).style.transition = "1s ease-in-out";
        document.querySelectorAll(`.img${carousel_slide - 2} p`).forEach((e) => {
            e.style.transition = "1s ease-in-out";
        })
        document.querySelectorAll(`.img${carousel_slide - 1} p`).forEach((e) => {
            e.style.transition = "1s ease-in-out";
        })
        document.querySelectorAll(`.img${carousel_slide} p`).forEach((e) => {
            e.style.transition = "1s ease-in-out";
        })
    }, 50)
}

function leftSlide(){
    changePrevClass();
    carousel_slide --;
    changeAfterClass();
    setTimeout(() => {
        if (carousel_slide === 1){
            blinkToBack();
        }
    }, 1000)
    setTimeout(() => {
        document.querySelector(".prev img").addEventListener("click", leftSlide);
        document.querySelector(".next img").addEventListener("click", rightSlide);
    }, 1050)
}

function rightSlide(){
    changePrevClass();
    carousel_slide ++;
    changeAfterClass();
    setTimeout(() => {
        if (carousel_slide === 6){
            blinkToFront();
        }
    }, 1000)
    setTimeout(() => {
        document.querySelector(".next img").addEventListener("click", rightSlide);
        document.querySelector(".prev img").addEventListener("click", leftSlide);
    }, 1050)
}

document.querySelector(".prev img").addEventListener("click", leftSlide);
document.querySelector(".next img").addEventListener("click", rightSlide);

let observerBody = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("body-on-screen");
        }
    })
}, {
    root : null,
    rootMargin : "0px",
    threshold : 0.15
})

let observerPoster = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("poster-on-screen");
        }
    })
}, {
    root : null,
    rootMargin : "0px",
    threshold : 0.25
})

observerBody.observe(document.querySelector(".body-content"));
observerPoster.observe(document.querySelector(".poster-section-content"));

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