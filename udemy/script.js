//MainTab Navigation
const slides = [
    "In-demand skills. Available on demand.",
    "Advance your career with new skills.",
    "Upskill with the latest technology courses."
];

let currentSlide = 0;

document.querySelector(".hero_prev").addEventListener("click", () => {
    currentSlide = (currentSlide === 0) ? slides.length - 1 : currentSlide - 1;
    updateSlide();
});

document.querySelector(".hero_next").addEventListener("click", () => {
    currentSlide = (currentSlide === slides.length - 1) ? 0 : currentSlide + 1;
    updateSlide();
});

function updateSlide() {
    document.querySelector(".hero-content h1").innerText = slides[currentSlide];
}

//Tab Navigation

document.querySelectorAll(".category").forEach(category => {
    category.addEventListener("click", () => {
        document.querySelector(".category.active").classList.remove("active");
        category.classList.add("active");
    });
});

document.querySelectorAll(".skill").forEach(skill => {
    skill.addEventListener("click", () => {
        document.querySelector(".skill.active").classList.remove("active");
        skill.classList.add("active");
    });
});


//Card Navigation
document.querySelector(".scroll-left").addEventListener("click", () => {
    document.querySelector(".courses").scrollBy({ left: -300, behavior: "smooth" });
});

document.querySelector(".scroll-right").addEventListener("click", () => {
    document.querySelector(".courses").scrollBy({ left: 300, behavior: "smooth" });
});

document.querySelector(".Learners_scroll-left").addEventListener("click", () => {
    document.querySelector(".Learners_courses").scrollBy({ left: -300, behavior: "smooth" });
});

document.querySelector(".Learners_scroll-right").addEventListener("click", () => {
    document.querySelector(".Learners_courses").scrollBy({ left: 300, behavior: "smooth" });
});

//Card button click
document.addEventListener("DOMContentLoaded", function () {
    const cards = document.querySelectorAll(".card");

    cards.forEach(card => {
        card.addEventListener("click", () => {
            cards.forEach(c => c.classList.remove("active"));
            card.classList.add("active");
        });
    });
});
//Accelerate growth — for you or your organization
document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll(".subscribe-btn, .demo-btn");

    buttons.forEach(button => {
        button.addEventListener("click", () => {
            alert("Redirecting to subscription page...");
        });
    });
});


//Trending Now

document.addEventListener("DOMContentLoaded", function () {
    const btn = document.querySelector(".trending-btn");
    btn.addEventListener("click", function () {
        alert("Redirecting to all trending skills!");
    });
});

//Booz

const dots = document.querySelectorAll(".dot");
const prevButton = document.querySelector(".prev");
const nextButton = document.querySelector(".next");
let currentIndex = 0;

// Function to update active dot
function updateActiveDot(index) {
    dots.forEach(dot => dot.classList.remove("active"));
    dots[index].classList.add("active");
}

// Event Listeners
prevButton.addEventListener("click", () => {
    if (currentIndex > 0) {
        currentIndex--;
        updateActiveDot(currentIndex);
    }
});

nextButton.addEventListener("click", () => {
    if (currentIndex < dots.length - 1) {
        currentIndex++;
        updateActiveDot(currentIndex);
    }
});

// Initialize Active Dot
updateActiveDot(currentIndex);
