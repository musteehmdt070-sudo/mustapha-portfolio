
"use strict";

/* =====================================================
   1. SELECT HTML ELEMENTS
===================================================== */

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

const certificateLightbox = document.getElementById(
    "certificateLightbox"
);

const lightboxClose = document.getElementById("lightboxClose");
const lightboxTitle = document.getElementById("lightboxTitle");
const lightboxImage = document.getElementById("lightboxImage");

const backToTop = document.getElementById("backToTop");

const contactForm = document.getElementById("contactForm");
const formNote = document.getElementById("formNote");

const currentYear = document.getElementById("year");


/* =====================================================
   2. MOBILE NAVIGATION
===================================================== */

if (menuToggle && navLinks) {

    // Open and close the mobile menu
    menuToggle.addEventListener("click", () => {

        const isOpen = navLinks.classList.toggle("active");

        menuToggle.classList.toggle("active", isOpen);

        menuToggle.setAttribute("aria-expanded", String(isOpen));

        menuToggle.setAttribute(
            "aria-label",
            isOpen ? "Close navigation menu" : "Open navigation menu"
        );

    });


    // Close the menu after clicking a navigation link
    const navigationItems = navLinks.querySelectorAll("a");

    navigationItems.forEach((link) => {

        link.addEventListener("click", () => {

            navLinks.classList.remove("active");

            menuToggle.classList.remove("active");

            menuToggle.setAttribute("aria-expanded", "false");

            menuToggle.setAttribute(
                "aria-label",
                "Open navigation menu"
            );

        });

    });


    // Close menu when clicking outside it
    document.addEventListener("click", (event) => {

        const clickedInsideMenu = navLinks.contains(event.target);

        const clickedToggle = menuToggle.contains(event.target);

        if (!clickedInsideMenu && !clickedToggle) {

            navLinks.classList.remove("active");

            menuToggle.classList.remove("active");

            menuToggle.setAttribute("aria-expanded", "false");

            menuToggle.setAttribute(
                "aria-label",
                "Open navigation menu"
            );

        }

    });


    // Close menu when pressing Escape
    document.addEventListener("keydown", (event) => {

        if (event.key === "Escape") {

            navLinks.classList.remove("active");

            menuToggle.classList.remove("active");

            menuToggle.setAttribute("aria-expanded", "false");

            menuToggle.setAttribute(
                "aria-label",
                "Open navigation menu"
            );

        }

    });

}


/* =====================================================
   3. ACTIVE NAVIGATION HIGHLIGHTING
===================================================== */

const sections = document.querySelectorAll("main section[id]");

const navItems = document.querySelectorAll(".nav-links a");

if ("IntersectionObserver" in window) {

    const sectionObserver = new IntersectionObserver(
        (entries) => {

            entries.forEach((entry) => {

                if (entry.isIntersecting) {

                    const sectionId = entry.target.id;

                    navItems.forEach((link) => {

                        const linkTarget = link.getAttribute("href");

                        link.classList.toggle(
                            "active",
                            linkTarget === `#${sectionId}`
                        );

                    });

                }

            });

        },
        {
            root: null,
            threshold: 0,
            rootMargin: "-35% 0px -55% 0px"
        }
    );

    sections.forEach((section) => {
        sectionObserver.observe(section);
    });

}


/* =====================================================
   4. CERTIFICATE IMAGE LIGHTBOX
===================================================== */

const certificateCards = document.querySelectorAll(
    ".certificate-card[data-image][data-title]"
);


function openCertificate(imagePath, title) {

    if (!certificateLightbox || !lightboxImage || !lightboxTitle) {
        return;
    }

    lightboxImage.src = imagePath;

    lightboxImage.alt = title;

    lightboxTitle.textContent = title;

    if (typeof certificateLightbox.showModal === "function") {

        certificateLightbox.showModal();

    }

}


function closeCertificate() {

    if (
        certificateLightbox &&
        certificateLightbox.open
    ) {

        certificateLightbox.close();

    }

}


// Open a certificate when clicked
certificateCards.forEach((card) => {

    card.addEventListener("click", () => {

        const imagePath = card.dataset.image;

        const title = card.dataset.title;

        if (imagePath && title) {

            openCertificate(imagePath, title);

        }

    });

});


// Close using the close button
if (lightboxClose) {

    lightboxClose.addEventListener("click", closeCertificate);

}


// Close when clicking the dark background
if (certificateLightbox) {

    certificateLightbox.addEventListener("click", (event) => {

        if (event.target === certificateLightbox) {

            closeCertificate();

        }

    });

}


/* =====================================================
   5. BACK TO TOP BUTTON
===================================================== */

if (backToTop) {

    // Show or hide button while scrolling
    window.addEventListener("scroll", () => {

        if (window.scrollY > 400) {

            backToTop.classList.add("show");

        } else {

            backToTop.classList.remove("show");

        }

    }, { passive: true });


    // Return to the top
    backToTop.addEventListener("click", () => {

        const reducedMotion = window.matchMedia(
            "(prefers-reduced-motion: reduce)"
        ).matches;

        window.scrollTo({

            top: 0,

            behavior: reducedMotion ? "instant" : "smooth"

        });

    });

}


/* =====================================================
   6. CONTACT FORM VALIDATION
===================================================== */

if (contactForm) {

    contactForm.addEventListener("submit", (event) => {

        event.preventDefault();

        const nameInput = document.getElementById("name");

        const emailInput = document.getElementById("email");

        const messageInput = document.getElementById("message");


        // Check that all required elements exist
        if (!nameInput || !emailInput || !messageInput || !formNote) {
            return;
        }


        // Get the values entered by the visitor
        const name = nameInput.value.trim();

        const email = emailInput.value.trim();

        const message = messageInput.value.trim();


        // Reset previous message
        formNote.textContent = "";

        formNote.classList.remove("success", "error");


        // Validate name
        if (name.length < 2) {

            showFormMessage(
                "Please enter your full name.",
                "error"
            );

            nameInput.focus();

            return;

        }


        // Validate email
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailPattern.test(email)) {

            showFormMessage(
                "Please enter a valid email address.",
                "error"
            );

            emailInput.focus();

            return;

        }


        // Validate message
        if (message.length < 10) {

            showFormMessage(
                "Your message must contain at least 10 characters.",
                "error"
            );

            messageInput.focus();

            return;

        }


        // Frontend validation completed
        showFormMessage(
            "Your message has passed validation. Message delivery will be connected to a backend or email service.",
            "success"
        );

    });

}


// Display contact form messages
function showFormMessage(message, type) {

    if (!formNote) {
        return;
    }

    formNote.textContent = message;

    formNote.classList.remove("success", "error");

    formNote.classList.add(type);

    formNote.setAttribute("role", "status");

}


/* =====================================================
   7. AUTOMATIC COPYRIGHT YEAR
===================================================== */

if (currentYear) {

    currentYear.textContent = new Date().getFullYear();

}


/* =====================================================
   8. SMOOTH SCROLLING FOR INTERNAL LINKS
===================================================== */

const internalLinks = document.querySelectorAll(
    'a[href^="#"]:not([href="#"])'
);

internalLinks.forEach((link) => {

    link.addEventListener("click", (event) => {

        const targetId = link.getAttribute("href");

        const targetElement = document.querySelector(targetId);

        if (targetElement) {

            event.preventDefault();

            const reducedMotion = window.matchMedia(
                "(prefers-reduced-motion: reduce)"
            ).matches;

            targetElement.scrollIntoView({

                behavior: reducedMotion ? "instant" : "smooth",

                block: "start"

            });

        }

    });

});


/* =====================================================
   9. CONSOLE WELCOME MESSAGE
===================================================== */

console.log(
    "Welcome to Mustapha Yahuza Kamfa's Portfolio!"
);

console.log(
    "Portfolio JavaScript loaded successfully."
);
