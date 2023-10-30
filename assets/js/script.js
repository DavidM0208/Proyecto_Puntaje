const Marco_Puntaje = document.querySelector('.puntaje');
let Puntaje_Actual = 0;
const Puntaje_Limite = 5;
// .map es para puder dibujar en el HTML
const html_Mapa = Array.from(Array(Puntaje_Limite)).map((item, i) =>{
    // item es para guardar el nombre de la clase e i es para guardar su posición
    return `<div class="item item-${i}" data-pos="${i}"></div>`;
});
Marco_Puntaje.innerHTML = html_Mapa.join('');
document.querySelectorAll(".item").forEach(item =>{
    item.addEventListener("mouseover", e =>{
        // console.log("Funciona");
        const Posicion = item.getAttribute("data-pos");
        // Los 3 === es una comparación estricta
        if (Puntaje_Actual === parseInt(Posicion) + 1) {
            return;
        }
        document.querySelectorAll(".item").forEach(Cuadrado_Gris => {
            if (Cuadrado_Gris.classList.contains("select")) {
                Cuadrado_Gris.classList.remove("select");
            }
        });
        for (let i = 0; i <= Posicion; i++) {
            const Cuadrado = document.querySelector(`.item-${i}`);
            if (!Cuadrado.classList.contains("select")) {
                Cuadrado.classList.add("select")
            }
        }
        Puntaje_Actual = parseInt(Posicion) + 1;
    });
    item.addEventListener("click", (e) => {
        const Posicion = item.getAttribute("data-pos");
        Puntaje_Actual = parseInt(Posicion) + 1;
        console.log(Puntaje_Actual);
    })
});