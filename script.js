const whatsappNumber = "8801842658423";

document.querySelectorAll(".book-btn").forEach(button => {

    button.addEventListener("click", function(){

        const priceItem = this.parentElement;
        const priceCard = this.closest(".price-card");

        const service = priceCard.querySelector("h3").innerText;
        const duration = priceItem.querySelector("span").innerText;
        const price = priceItem.querySelector("strong").innerText;

       const message =
`Hello,

I'm interested in booking the following service.

Service: ${service}
Duration: ${duration}
Price: ${price}

Please let me know the available time.

Thank you!`;

        window.open(
            `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`,
            "_blank"
        );

    });

});
// Gallery Lightbox

const galleryImages = document.querySelectorAll(".gallery-grid img");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const closeBtn = document.querySelector(".close");

galleryImages.forEach(img => {
    img.addEventListener("click", () => {
        lightbox.style.display = "flex";
        lightboxImg.src = img.src;
    });
});

closeBtn.addEventListener("click", () => {
    lightbox.style.display = "none";
});

lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) {
        lightbox.style.display = "none";
    }
});
// Mobile Menu

const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", (e) => {
    e.stopPropagation();
    navLinks.classList.toggle("active");
});

// Close when clicking outside
document.addEventListener("click", (e) => {
    if (
        !navLinks.contains(e.target) &&
        !menuToggle.contains(e.target)
    ) {
        navLinks.classList.remove("active");
    }
});

// Close after clicking a menu item
document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
    });
});
ScrollReveal().reveal(
'.hero-content, .service-card, .gallery-grid img, .price-card, .testimonial-card, .faq-item, .contact-box, .map-section, .footer',
{
    distance:'60px',
    duration:1200,
    origin:'bottom',
    interval:150,
    reset:false
});