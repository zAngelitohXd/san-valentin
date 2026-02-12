const slider = document.getElementById("slider");

const totalImagenes = 7; // cambia según tus fotos
let indice = 1;

slider.src = `img/${indice}.jpg`;

setInterval(() => {

    slider.style.transform = "rotateY(-90deg)";

    setTimeout(() => {
        indice++;
        if (indice > totalImagenes) indice = 1;

        slider.src = `img/${indice}.jpg`;
        slider.style.transform = "rotateY(0deg)";
    }, 500);

}, 3000);

