document.querySelector(".burger").addEventListener("click", () => {
    document.querySelector(".burger").classList.toggle("active-nav");
    document.querySelector(".menus").classList.toggle("show-menu");
    document.querySelector(".nav-bg").classList.toggle("extend");
})

const firstName = document.querySelector("#first-name");
const lastName = document.querySelector("#last-name");
const email = document.querySelector("#email");
const date = document.querySelector("#date");
const cardNumber = document.querySelector("#card-number");
const expiry = document.querySelector("#expiry");
const cvc = document.querySelector("#cvc");
const country = document.querySelector("#country");
const postal = document.querySelector("#postal");
const countryCode = document.querySelector("#country-code");
const phone = document.querySelector("#phone");
const total = document.querySelector("#total");
const error = document.querySelector(".error");

date.addEventListener("click", () => {
    date.showPicker();
})

expiry.addEventListener("click", () => {
    expiry.showPicker();
})

cardNumber.addEventListener("keydown", (e) => {
    if (e.key.length == 1) {
        if (cardNumber.value.length == 4 || cardNumber.value.length == 9 || cardNumber.value.length == 14) {
            cardNumber.value += " ";
        }
    } else if (e.key == "Backspace") {
        if (cardNumber.value.length == 6 && cardNumber.value[4] == " " || cardNumber.value.length == 11 && cardNumber.value[9] == " " || cardNumber.value.length == 16 && cardNumber.value[14] == " ") {
            cardNumber.value = cardNumber.value.substring(0, cardNumber.value.length - 1);
        } 
    }
})

phone.addEventListener("keydown", (e) => {
    if (e.key.length == 1) {
        if (phone.value.length == 3 || phone.value.length == 8) {
            phone.value += " ";
        }
    } else if (e.key == "Backspace") {
        if (phone.value.length == 5 && phone.value[3] || phone.value.length == 10 && phone.value[8]) {
            phone.value = phone.value.substring(0, phone.value.length - 1);
        }
    }
})

let package = new URLSearchParams(document.location.search).get("package")
if (package == null) {
    package = "Basic";
}
let price = 0;
if (package == "Basic") {
    price = 5999999;
} else {
    price = 15999999;
}

if (package == "Basic") {
    document.querySelector(".package-img-container").innerHTML = "<img src='assets/images/basic-slide-1.png'>";
} else {
    document.querySelector(".package-img-container").innerHTML = "<img src='assets/images/premium-slide-1.png'>";
}

let actualPrice = price;
let tax = 0.01 * actualPrice;
total.value = 1;

function updatePrice() {
    actualPrice = parseInt(total.value) * price;
    tax = 0.01 * actualPrice;
    document.querySelector(".subtotal p:last-of-type").innerHTML = "Rp" + (actualPrice).toLocaleString();
    document.querySelector(".tax p:last-of-type").innerHTML = "Rp" + tax.toLocaleString();
    document.querySelector(".total p:last-of-type").innerHTML = "Rp" + (actualPrice + tax).toLocaleString();
}

document.querySelector(".package-name").innerHTML = package + " Package";
document.querySelector(".package-price").innerHTML = "Rp" + price.toLocaleString();
updatePrice();

document.querySelector(".increase").addEventListener("click", (e) => {
    e.preventDefault();
    total.value = parseInt(total.value) + 1;
    updatePrice();
})

document.querySelector(".decrease").addEventListener("click", (e) => {
    e.preventDefault();
    if (parseInt(total.value) > 1) {
        total.value = parseInt(total.value) - 1;
    }
    updatePrice();
})

total.addEventListener("keyup", () => {
    updatePrice();
})

function submitForm(e) {
    e.preventDefault();
    if (total.value < 1) {
        error.innerHTML = "Total Must at Least be 1";
        return;
    }
    error.innerHTML = "";
    window.location.href = "index.html?type=after";
}

document.querySelector(".pay").addEventListener("click", submitForm)

let prev = -1;
let curStep = 1;
const back = document.querySelector(".back-btn");
const next = document.querySelector(".next-btn");

function updateProgress() {
    const iconNames = ["personal-icon", "method-icon", "payment-icon"];
    const progressIcons = [document.querySelector(".personal-icon"), document.querySelector(".method-icon"), document.querySelector(".payment-icon")];
    const progressIconImages = [document.querySelector(".personal-icon img"), document.querySelector(".method-icon img"), document.querySelector(".payment-icon img")];
    const hr = document.querySelectorAll(".progress-bar hr");
    if (curStep > prev) {
        progressIcons[prev - 1].classList.remove("current");
        progressIcons[prev - 1].classList.add("past");
        hr[prev].classList.remove("off")
        hr[prev].classList.add("past")
        progressIconImages[prev - 1].src = "assets/images/" + iconNames[prev - 1] + "-finish.png"
    } else {
        progressIcons[prev - 1].classList.remove("current");
        progressIcons[prev - 1].classList.add("off");
        hr[curStep].classList.remove("past")
        hr[curStep].classList.add("off")
        progressIconImages[prev - 1].src = "assets/images/" + iconNames[prev - 1] + "-off.png"
    }
    progressIcons[curStep - 1].classList.remove("off");
    progressIcons[curStep - 1].classList.remove("past");
    progressIcons[curStep - 1].classList.add("current");
    document.querySelector("header").scrollIntoView();
    progressIconImages[curStep - 1].src = "assets/images/" + iconNames[curStep - 1] + "-progress.png"
}

function updateButton() {
    if (curStep == 1) {
        back.removeEventListener("click", backForm);
        back.addEventListener("click", backToBooking);
    } else if (curStep == 3) {
        next.removeEventListener("click", nextForm);
        next.disabled = true;
        next.classList.add("disable");
    } else {
        next.disabled = false;
        next.classList.remove("disable");
        next.addEventListener("click", nextForm);
        back.removeEventListener("click", backToBooking);
        back.addEventListener("click", backForm);
    }
}

let today = new Date();
let year = today.getFullYear();
let month = today.getMonth() + 1;
if (month < 10) {
    month = "0" + month.toString();
}
let dates = today.getDate();
if (dates < 10) {
    dates = "0" + dates.toString();
}
date.min =  `${year}-${month}-${dates}`;
expiry.min = `${year}-${month}`;

function nextForm(e) {
    e.preventDefault();
    if (curStep == 1) {
        if (firstName.value.length == 0 || lastName.value.length == 0 || email.value.length == 0 || date.value.length == 0) {
            error.innerHTML = "All Fields Must be Filled";
            return;
        }
        let split = firstName.value.split(" ");
        if (split.length > 1) {
            error.innerHTML = "First Name Must Only Consist of One Word.<br>If Your Name Consists of More Than 2 Words,<br>Please Insert It in The Last Name Field.";
            return;
        }
        let valid = true;
        for (let i = 0; i < firstName.value.length; i++) {
            if ((firstName.value[i] >= "a" && firstName.value[i] <= "z") || (firstName.value[i] >= "A" && firstName.value[i] <= "Z") || firstName.value[i] == " ") {
                continue;
            } else {
                valid = false;
                break;
            }
        }
        if (!valid) {
            error.innerHTML = "First Name Must Only Consist of Alphabetical Characters";
            return;
        }
        valid = true;
        for (let i = 0; i < lastName.value.length; i++) {
            if ((lastName.value[i] >= "a" && lastName.value[i] <= "z") || (lastName.value[i] >= "A" && lastName.value[i] <= "Z") || lastName.value[i] == " ") {
                continue;
            } else {
                valid = false;
                break;
            }
        }
        if (!valid) {
            error.innerHTML = "Last Name Must Only Consist of Alphabets and Spaces";
            return;
        }
        if (lastName.value.indexOf(" ") == 0) {
            error.innerHTML = "Space Can't be at The Front";
            return;
        }
        if (lastName.value.lastIndexOf(" ") == lastName.value.length - 1) {
            error.innerHTML = "Space Can't be at The End";
            return;
        }
        let aCnt = 0, dCnt = 0;
        for (let i = 0; i < email.value.length; i++) {
            if (email.value[i] == "@"){
                aCnt ++;
            }
            if (email.value[i] == ".") {
                dCnt ++;
            }
        }
        if (aCnt != 1 || dCnt != 1) {
            error.innerHTML = "Email Must Contain Only 1 ' @ ' and 1 ' . '";
            return;
        }
        if (email.value.indexOf("@") == 0 || email.value.indexOf("@") == email.value.length - 1) {
            error.innerHTML = "' @ ' Can't be at The Start or The End of Email";
            return;
        }
        if (email.value.indexOf(".") == email.value.length - 1) {
            error.innerHTML = "' . ' Can't be at The End of Email";
            return;
        }
        if (email.value.indexOf("@") > email.value.indexOf(".")) {
            error.innerHTML = "' @ ' Must be before ' . '";
            return;
        }
        if (email.value.indexOf("@") == email.value.indexOf(".") - 1) {
            error.innerHTML = "' @ ' and ' . ' Must Not be Next to Each Other";
            return;
        }
        if (email.value.split(" ").length > 1) {
            error.innerHTML - "Email Must Not Contain Any Spaces";
            return;     
        }
    } else if (curStep == 2) {
        if (document.querySelector(".selected") == null) {
            error.innerHTML = "Please Select a Payment Method";
            return;
        }
        if (document.querySelector(".selected").classList[0] == "visa") {
            if (cardNumber.value.length == 0 || expiry.value.length == 0 || cvc.value.length == 0 || country.value.length == 0 || postal.value.length == 0) {
                error.innerHTML = "All Fields Must be Filled";
                return;
            }
            if (cardNumber.value.length != 19) {
                error.innerHTML = "Card Number Must Consist of 16 Digits";
                return;
            }
            let spaceCount = 0;
            let valid = true;
            for (let i = 0; i < cardNumber.value.length; i++) {
                if (cardNumber.value[i] >= "0" && cardNumber.value[i] <= "9") {
                    continue;
                } else if (cardNumber.value[i] == " ") {
                    spaceCount ++;
                } else {
                    valid = false;
                    break;
                }
            }
            if (!valid || spaceCount > 3) {
                error.innerHTML = "Card Number Must Only Consist of Numbers";
                return;
            }
            if (cvc.value.length != 3) {
                error.innerHTML = "CVC Must Consist of 3 Digits";
                return;
            }
            valid = true;
            for (let i = 0; i < cvc.value.length; i++) {
                if (cvc.value[i] >= "0" && cvc.value[i] <= "9") {
                    continue;
                } else {
                    valid = false;
                    break;
                }
            }
            if (!valid) {
                error.innerHTML = "CVC Must Only Consist of Numbers";
                return;
            }
            valid = true;
            for (let i = 0; i < country.value.length; i++) {
                if ((country.value[i] >= "a" && country.value[i] <= "z") || (country.value[i] >= "A" && country.value[i] <= "Z") || country.value[i] == " ") {
                    continue;
                } else {
                    valid = false;
                    break;
                }
            }
            if (!valid) {
                error.innerHTML = "Country Must Only Consist of Alphabets and Spaces";
                return;
            }
            if (postal.value.length != 5) {
                error.innerHTML = "Postal Code Must Consist of 5 Digits";
                return;
            }
            valid = true;
            for (let i = 0; i < postal.value.length; i++) {
                if (postal.value[i] >= "0" && postal.value[i] <= "9") {
                    continue;
                } else {
                    valid = false;
                    break;
                }
            }
            if (!valid) {
                error.innerHTML = "Postal Code Must Only Consist of Numbers";
                return;
            }
        } else {
            if (countryCode.value.length == 0 || phone.value.length == 0) {
                error.innerHTML = "All Fields Must be Filled";
                return;
            }
            if (countryCode.value[0] != "+") {
                error.innerHTML = "Phone Country Code Must Start With +";
                return;
            }
            let valid = true;
            for (let i = 1; i < countryCode.value.length; i++) {
                if (countryCode.value[i] >= "0" && countryCode.value[i] <= "9") {
                    continue;
                } else {
                    valid = false;
                    break;
                }
            }
            if (!valid) {
                error.innerHTML = "Phone Country Code Must Only Consist of + at The Start and Numbers";
                return;
            }
            let spaceCount = 0;
            valid = true;
            for (let i = 0; i < phone.value.length; i++) {
                if (phone.value[i] >= "0" && phone.value[i] <= "9") {
                    continue;
                } else if (phone.value[i] == " ") {
                    spaceCount ++;
                } else {
                    valid = false;
                    break;
                }
            }
            if (!valid || spaceCount > 2) {
                error.innerHTML = "Phone Number Must Only Consist of Numbers";
                return;
            }
        }
    }
    error.innerHTML = "";
    document.querySelector(`.step${curStep}`).classList.remove("current-step");
    document.querySelector(`.step${curStep}`).classList.add("hidden");
    prev = curStep;
    curStep++;
    document.querySelector(`.step${curStep}`).classList.add("current-step");
    document.querySelector(`.step${curStep}`).classList.remove("hidden");
    updateProgress();
    updateButton();
}

function backToBooking(e) {
    e.preventDefault();
    window.location.href = "booking.html";
}

function backForm(e) {
    e.preventDefault();
    document.querySelector(`.step${curStep}`).classList.remove("current-step");
    document.querySelector(`.step${curStep}`).classList.add("hidden");
    prev = curStep;
    curStep--;
    document.querySelector(`.step${curStep}`).classList.add("current-step");
    document.querySelector(`.step${curStep}`).classList.remove("hidden");
    updateProgress();
    updateButton();
}

next.addEventListener("click", nextForm);
back.addEventListener("click", backToBooking);


const sections = [document.querySelector(".visa-section"), document.querySelector(".jpay-section")];
document.querySelectorAll(".selection > div").forEach((selection, index) => {
    selection.addEventListener("click", () => {
        document.querySelectorAll(".selection > div").forEach((select, idx) => {
            if (idx != index) {
                select.classList.remove("selected");
                sections[idx].classList.remove("selected-section");
                sections[idx].classList.add("hidden");
            }
        })
        selection.classList.add("selected");
        sections[index].classList.remove("hidden");
        sections[index].classList.add("selected-section");
        error.innerHTML = "";
    })
})

window.addEventListener("beforeunload", (e) => {
    if ((firstName.value.length != 0 || lastName.value.length != 0 || email.value.length != 0 || date.value.length != 0 || document.querySelector(".selected") != null || cardNumber.value.length != 0 || expiry.value.length != 0 || cvc.value.length != 0 || country.value.length != 0 || postal.value.length != 0 || countryCode.value.length != 0 || phone.value.length != 0 || parseInt(total.value) > 1) && curStep != 3) {
        e.preventDefault();
    }
})

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