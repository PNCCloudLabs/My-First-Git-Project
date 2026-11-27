    document.getElementById("year").textContent = new Date().getFullYear();


// Mobile navigation menu
document.addEventListener("DOMContentLoaded", function () {
    const menuButton = document.getElementById("menu-toggle");
    const navigation = document.getElementById("main-nav");

    if (!menuButton || !navigation) {
        console.log("Navigation elements not found.");
        return;
    }

    menuButton.addEventListener("click", function () {
        const isOpen = navigation.classList.toggle("open");

        menuButton.setAttribute("aria-expanded", isOpen);
        menuButton.textContent = isOpen ? "✕ Close" : "☰ Menu";
    });

    navigation.querySelectorAll("a").forEach(function (link) {
        link.addEventListener("click", function () {
            navigation.classList.remove("open");
            menuButton.setAttribute("aria-expanded", "false");
            menuButton.textContent = "☰ Menu";
        });
    });
});
