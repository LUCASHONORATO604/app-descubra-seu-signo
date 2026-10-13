let botaoo = document.querySelector("#botao");
let entrada1 = document.querySelector("#idade");
let entrada2 = document.querySelector("#signo");
let paragrafo = document.querySelector("#para")

paragrafo.innerHTML = ""

botaoo.addEventListener("click", verificar)

function verificar() {
    let digitado1 = Number(entrada1.value)
    let digitado2 = entrada2.value.toLowerCase()

    if (digitado1 >= 1 && digitado1 < 99 && digitado2 == "janeiro") {
        paragrafo.innerHTML = "voce e do signo Capricórnio  ";
        return
    }


    if (digitado1 >= 1 && digitado1 < 99 && digitado2 == "fevereiro") {
        paragrafo.innerHTML = "voce e do signo Aquário";
        return
    }


    if (digitado1 >= 1 && digitado1 < 99 && digitado2 == "março") {
        paragrafo.innerHTML = "voce e do signo Peixes  ";
        return
    }


    if (digitado1 >= 1 && digitado1 < 99 && digitado2 == "abril") {
        paragrafo.innerHTML = "voce e do signo  Touro  ";
        return
    }


    if (digitado1 >= 1 && digitado1 < 99 && digitado2 == "maio") {
        paragrafo.innerHTML = "voce e do signo virgem ";
        return
    }


    if (digitado1 >= 1 && digitado1 < 99 && digitado2 == "junho") {
        paragrafo.innerHTML = "voce e do signo virgem ";
        return
    }


    if (digitado1 >= 1 && digitado1 < 99 && digitado2 == "julho") {
        paragrafo.innerHTML = "voce e do signo Câncer";
        return
    }


    if (digitado1 >= 1 && digitado1 < 99 && digitado2 == "agosto") {
        paragrafo.innerHTML = "voce e do signo Leão ";
        return
    }


    if (digitado1 >= 1 && digitado1 < 99 && digitado2 == "setembro") {
        paragrafo.innerHTML = "voce e do signo virgem ";
        return
    }


    if (digitado1 >= 1 && digitado1 < 99 && digitado2 == "outubro") {
        paragrafo.innerHTML = "voce e do signo Libra ";
        return
    }


    if (digitado1 >= 1 && digitado1 < 99 && digitado2 == "novembro") {
        paragrafo.innerHTML = "voce e do signo Escorpião ";
        return
    }


    if (digitado1 >= 1 && digitado1 < 99 && digitado2 == "dezembro") {
        paragrafo.innerHTML = "voce e do signo Sagitário ";
        return
    }











}





