// =========================================
// MENU MOBILE
// =========================================

const menuButton = document.getElementById("menuButton");
const nav = document.getElementById("nav");

if (menuButton && nav) {

    menuButton.addEventListener("click", () => {

        nav.classList.toggle("active");

    });

}


// =========================================
// FECHAR MENU AO CLICAR EM UM LINK
// =========================================

const navLinks = document.querySelectorAll(".nav a");

navLinks.forEach((link) => {

    link.addEventListener("click", () => {

        nav.classList.remove("active");

    });

});


// =========================================
// AVISO 18+
// =========================================

const ageWarning = document.querySelector(".age-warning");
const closeWarning = document.getElementById("closeWarning");

if (closeWarning && ageWarning) {

    closeWarning.addEventListener("click", () => {

        ageWarning.classList.add("hidden");

        localStorage.setItem("binggoAgeConfirmed", "true");

    });

}


// Verifica se o usuário já confirmou

const ageConfirmed = localStorage.getItem("binggoAgeConfirmed");

if (ageConfirmed === "true" && ageWarning) {

    ageWarning.classList.add("hidden");

}


// =========================================
// WHATSAPP
// =========================================

const whatsappButton = document.getElementById("whatsappButton");

if (whatsappButton) {

    whatsappButton.addEventListener("click", (event) => {

        event.preventDefault();

        /*
            TROQUE PELO WHATSAPP DA BINGGO.

            Exemplo:

            const phone = "5541999999999";
        */

        const phone = "554933531444";

        const message =
            "Olá! Gostaria de saber mais sobre os produtos Binggo Bebidas.";

        const url =
            `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

        window.open(url, "_blank");

    });

}


// =========================================
// ANO AUTOMÁTICO NO FOOTER
// =========================================

const currentYear = new Date().getFullYear();

const footerYear = document.querySelector(".footer-bottom p");

if (footerYear) {

    footerYear.innerHTML =
        `© ${currentYear} Binggo Bebidas. Todos os direitos reservados.`;

}