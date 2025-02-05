document.addEventListener("DOMContentLoaded", function () {
    // Fade-in effect for elements
    const elements = document.querySelectorAll(".fade-in");
    elements.forEach((element, index) => {
        setTimeout(() => {
            element.classList.add("visible");
        }, index * 150);
    });

    // Logout functionality
    document.getElementById("logoutBtn").addEventListener("click", function () {
        alert("You have been logged out!");
        window.location.href = "index.html"; // Redirect to homepage
    });
});
