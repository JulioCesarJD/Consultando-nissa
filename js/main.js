document.getElementById("icon_menu").addEventListener("click", mostrar_menu);

function mostrar_menu() {
    const menu = document.querySelector(".menu");
    menu.classList.toggle("mostrar_menu");

    const isExpanded = menu.classList.contains("mostrar_menu");
    document.getElementById("icon_menu").setAttribute("aria-expanded", isExpanded);
}

document.addEventListener("click", function(event) {
    const menu = document.querySelector(".menu");
    const iconMenu = document.getElementById("icon_menu");

    if (!menu.contains(event.target) && event.target !== iconMenu) {
        menu.classList.remove("mostrar_menu");
    }
});

document.addEventListener("scroll", function() {
    const menu = document.querySelector(".menu");
    if (menu.classList.contains("mostrar_menu")) {
        menu.classList.remove("mostrar_menu");
    }
});

document.querySelectorAll(".menu ul li a").forEach(link => {
    link.addEventListener("click", function(e) {
        e.preventDefault();
        document.querySelector(".menu").classList.remove("mostrar_menu");
        
        const targetId = this.getAttribute("href");
        const targetSection = document.querySelector(targetId);
        
        if (targetSection) {
            targetSection.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        }
    });
});

// Eliminar cualquier preferencia del esquema oscuro
window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", (e) => {
    if (e.matches) {
      // Si el sistema está en modo oscuro, forzar modo claro
      document.documentElement.setAttribute("data-theme", "light");
    }
  });
  