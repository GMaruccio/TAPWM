document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll(".topnav a");

    navLinks.forEach(link => {
        link.addEventListener("click", function () {
            // Remove a classe 'active' de todos os itens
            navLinks.forEach(item => item.classList.remove("active"));
            
            // Adiciona a classe 'active' apenas ao item clicado
            this.classList.add("active");
        });
    });
});

document.querySelectorAll('.topnav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if (targetId.startsWith("#")) {
            document.querySelector(targetId).scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});


document.addEventListener("DOMContentLoaded", function () {
    const text = " Definição, Exemplos e Critérios de Escolha";
    let index = 0;
    function typeEffect() {
        if (index < text.length) {
            document.getElementById("typedText").textContent += text.charAt(index);
            index++;
            setTimeout(typeEffect, 50);
        }
    }
    typeEffect();
});


