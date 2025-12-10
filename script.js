console.log("Tema: script carregado!");

document.addEventListener("DOMContentLoaded", () => {
    const toggleBtn = document.getElementById("theme-toggle");

    if (!toggleBtn) {
        console.error("Botão #theme-toggle não encontrado!");
        return;
    }

    const savedTheme = localStorage.getItem("tema");
    if (savedTheme === "dark") {
        document.documentElement.classList.add("dark");
    }

    toggleBtn.addEventListener("click", () => {
        document.documentElement.classList.toggle("dark");
        const isDark = document.documentElement.classList.contains("dark");
        localStorage.setItem("tema", isDark ? "dark" : "light");

        console.log("Tema atual:", isDark ? "dark" : "light");
    });
});
