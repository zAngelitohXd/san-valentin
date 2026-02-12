document.addEventListener("DOMContentLoaded", function () {

    const slider = document.getElementById("slider");

    const totalImagenes = 7; // cambia si tienes más
    let indice = 1;

    slider.src = indice + ".jpg";

    setInterval(function () {

        slider.style.transform = "rotateY(-90deg)";

        setTimeout(function () {

            indice++;
            if (indice > totalImagenes) {
                indice = 1;
            }

            slider.src = indice + ".jpg";
            slider.style.transform = "rotateY(0deg)";

        }, 500);

    }, 3000);

});






