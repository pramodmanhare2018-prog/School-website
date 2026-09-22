// ===== MOBILE MENU =====

function toggleMenu() {

    const menu = document.querySelector(".nav-links");

    menu.classList.toggle("active");

}


// ===== APPLY BUTTON =====

function showMessage() {

    alert(
        "Thank you for your interest in Bright Future School!"
    );

}


// ===== CONTACT FORM =====

const form = document.getElementById("contactForm");

form.addEventListener("submit", function(event) {

    // Prevent page refresh
    event.preventDefault();

    const name =
        document.getElementById("name").value;

    alert(
        "Thank you " + name +
        "! Your message has been received."
    );

    // Clear form
    form.reset();

});
