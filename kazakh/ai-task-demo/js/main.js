function openImage(img) {
    const modal = document.getElementById("imageModal");
    const modalImg = document.getElementById("modalImg");

    modal.style.display = "flex";
    modalImg.src = img.src;

    modalImg.style.transform = "scale(1.8)";
}

function closeImage() {
    const modal = document.getElementById("imageModal");

    modal.classList.remove("show");

    setTimeout(() => {
        modal.style.display = "none";
    }, 200);
}

// Smooth scroll (optional improvement)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href"))
            .scrollIntoView({ behavior: "smooth" });
    });
});
