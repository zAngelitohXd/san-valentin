document.addEventListener("DOMContentLoaded", function () {

    const slider = document.getElementById("slider");

    const totalImagenes = 7;
    let indice = 1;

    slider.src = "1.jpg";

    setInterval(function () {

        indice++;

        if (indice > totalImagenes) {
            indice = 1;
        }

        slider.src = indice + ".jpg";

    }, 3000);

});













