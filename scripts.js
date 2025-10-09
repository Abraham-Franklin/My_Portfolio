let spanTag = document.querySelector('.span-tag');
let wordArray = ["Frontend Designer", "Python Developer", "Javascript Developer", "C++ Developer", "Java Developer", "Django Developer", "PHP Developer", "Bash Script Writer"];
let wordIndex = 0;

window.addEventListener('load', () => {
    const iterateWord = () => {
        let spanContent = wordArray[wordIndex];
        iterateSpan(spanContent);
        wordIndex = (wordIndex + 1) % wordArray.length;
    }

    const clearSpan = () => {
        let spanLength = spanTag.textContent.length;
        let deleteText = setInterval(() => {
            if (spanLength > 0) {
                spanTag.textContent = spanTag.textContent.slice(0, -1);
                spanLength--;
            } else {
                clearInterval(deleteText);
                iterateWord();
            }
        }, 100);
    }

    const iterateSpan = (spanContent) => {
        let spanIndex = 0;

        let iterateTextContent = setInterval(() => {
            if (spanIndex < spanContent.length) {
                spanTag.textContent += spanContent[spanIndex];
                spanIndex++;
            } else {
                clearInterval(iterateTextContent);
                setTimeout(clearSpan, 1000); // Call clearSpan after a delay
            }
        }, 100);
    }

    iterateWord();





















    const observer1 = new IntersectionObserver(
        (entries, observer1) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("show"); // Add class to trigger animation
                    observer1.unobserve(entry.target); // Stop observing once animated
                }
            });
        },
        { threshold: 0.2 } // Trigger animation when 20% of the element is visible
    );

    document.querySelectorAll(".features-tile-sub-div").forEach(tile => observer1.observe(tile));


















    const observer2 = new IntersectionObserver(
        (entries, observer2) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("show"); // Add the class to trigger animation
                    observer2.unobserve(entry.target); // Stop observing once animated
                }
            });
        },
        { threshold: 0.2 } // Trigger animation when 20% of the div is visible
    );

    document.querySelectorAll(".portfolio-tile").forEach(tile => observer2.observe(tile));



















    const menuIcon = document.querySelector(".nav-menu");
    const sidebar = document.querySelector("header");


    menuIcon.addEventListener("click", function () {
        if (sidebar.classList.contains("active")) {
            sidebar.classList.remove("active")
        } else {
            sidebar.classList.add("active")
        }
    });


    // menuIcon.addEventListener("click", function () {
    //     if (sidebar.style.display === "block") {
    //         sidebar.style.display = "none";
    //     } else {
    //         sidebar.style.display = "block";
    //     }
    // });




    // menuIcon.addEventListener("click", function () {
    //     sidebar.classList.toggle("active"); // Toggle menu
    //     console.log("slide in")
    // });

    // // Optional: Close menu when clicking outside
    // document.addEventListener("click", function (event) {
    //     if (!sidebar.contains(event.target) && !menuIcon.contains(event.target)) {
    //         sidebar.classList.remove("active");
    //         console.log("removed")
    //     }
    // });











    const testimonials = document.querySelectorAll(".testimonial-section");
    const prevBtn = document.querySelector(".testimonial-left");
    const nextBtn = document.querySelector(".testimonial-right");

    function getActiveIndex() {
        return [...testimonials].findIndex(testimonial => 
            testimonial.classList.contains("testimonial-section-active")
        );
    }

    function moveToNext() {
        let currentIndex = getActiveIndex();
        let nextIndex = (currentIndex + 1) % testimonials.length;

        testimonials[currentIndex].classList.remove("testimonial-section-active");
        testimonials[nextIndex].classList.add("testimonial-section-active");
    }

    function moveToPrevious() {
        let currentIndex = getActiveIndex();
        let prevIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;

        testimonials[currentIndex].classList.remove("testimonial-section-active");
        testimonials[prevIndex].classList.add("testimonial-section-active");
    }

    nextBtn.addEventListener("click", moveToNext);
    prevBtn.addEventListener("click", moveToPrevious);
});




















// document.addEventListener("DOMContentLoaded", function () {

// });
