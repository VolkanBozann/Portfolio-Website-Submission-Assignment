document.addEventListener("DOMContentLoaded", () => {
    console.log("Portfolio Loaded!");

    const links = document.querySelectorAll("nav a");
    links.forEach(link => {
        link.addEventListener("click", e => {
            e.preventDefault();
            const id = link.getAttribute("href").substring(1);
            const section = document.getElementById(id);
            if (section) {
                window.scrollTo({
                    top: section.offsetTop - 60,
                    behavior: "smooth"
                });
            }
        });
    });
});
