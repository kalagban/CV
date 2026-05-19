// Animation au scroll

const sections = document.querySelectorAll(".fade");

window.addEventListener("scroll", () => {

    sections.forEach((section) => {

        const top = section.getBoundingClientRect().top;

        if(top < window.innerHeight - 100){

            section.classList.add("show");

        }

    });

});

// Animation chargement

window.addEventListener("load", () => {

    setTimeout(() => {

        alert("Bienvenue sur le CV de Kalagban Camara 🚀");

    }, 800);

});