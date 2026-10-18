let botaoo = document.querySelector("#botao");
let entrada1 = document.querySelector("#dia");
let entrada2 = document.querySelector("#mes");
let paragrafo = document.querySelector("#para")

paragrafo.innerHTML = ""

botaoo.addEventListener("click", verificar)

function verificar() {
    let digitado1 = Number(entrada1.value)
    let digitado2 = entrada2.value.toLowerCase().trim();

    // JANEIRO
    if (digitado1 >= 1 && digitado1 < 20 && digitado2 == "janeiro") {
        paragrafo.innerHTML = "signo de Capricórnio";
        return
    }
    if (digitado1 >= 20 && digitado1 <= 31 && digitado2 == "janeiro") {
        paragrafo.innerHTML = "signo de Aquário";
        return
    }

    // FEVEREIRO
    if (digitado1 >= 1 && digitado1 < 19 && digitado2 == "fevereiro") {
        paragrafo.innerHTML = "signo de Aquário";
        return
    }
    if (digitado1 >= 19 && digitado1 <= 29 && digitado2 == "fevereiro") {
        paragrafo.innerHTML = "signo de Peixes";
        return
    }

    // MARÇO
    if (digitado1 >= 1 && digitado1 < 21 && digitado2 == "março") {
        paragrafo.innerHTML = "signo  de Peixes";
        return
    }
    if (digitado1 >= 21 && digitado1 <= 31 && digitado2 == "março") {
        paragrafo.innerHTML = "signo de Áries";
        return
    }

    // ABRIL
    if (digitado1 >= 1 && digitado1 < 20 && digitado2 == "abril") {
        paragrafo.innerHTML = "signo de Áries";
        return
    }
    if (digitado1 >= 20 && digitado1 <= 30 && digitado2 == "abril") {
        paragrafo.innerHTML = " signo  de Touro";
        return
    }

    // MAIO
    if (digitado1 >= 1 && digitado1 < 21 && digitado2 == "maio") {
        paragrafo.innerHTML = "signo de Touro";
        return
    }
    if (digitado1 >= 21 && digitado1 <= 31 && digitado2 == "maio") {
        paragrafo.innerHTML = "signo de Gêmeos";
        return
    }

    // JUNHO
    if (digitado1 >= 1 && digitado1 < 21 && digitado2 == "junho") {
        paragrafo.innerHTML = "signo  de Gêmeos";
        return
    }
    if (digitado1 >= 21 && digitado1 <= 30 && digitado2 == "junho") {
        paragrafo.innerHTML = "signo de Câncer";
        return
    }

    // JULHO
    if (digitado1 >= 1 && digitado1 < 23 && digitado2 == "julho") {
        paragrafo.innerHTML = "signo de Câncer";
        return
    }
    if (digitado1 >= 23 && digitado1 <= 31 && digitado2 == "julho") {
        paragrafo.innerHTML = "signo de Leão";
        return
    }

    // AGOSTO
    if (digitado1 >= 1 && digitado1 < 23 && digitado2 == "agosto") {
        paragrafo.innerHTML = " signo de Leão";
        return
    }
    if (digitado1 >= 23 && digitado1 <= 31 && digitado2 == "agosto") {
        paragrafo.innerHTML = "signo de Virgem";
        return
    }

    // SETEMBRO
    if (digitado1 >= 1 && digitado1 < 23 && digitado2 == "setembro") {
        paragrafo.innerHTML = "signo  de Virgem";
        return
    }
    if (digitado1 >= 23 && digitado1 <= 30 && digitado2 == "setembro") {
        paragrafo.innerHTML = "signo de Libra";
        return
    }

    // OUTUBRO
    if (digitado1 >= 1 && digitado1 < 23 && digitado2 == "outubro") {
        paragrafo.innerHTML = " signo de Libra";
        return
    }
    if (digitado1 >= 23 && digitado1 <= 31 && digitado2 == "outubro") {
        paragrafo.innerHTML = " signo de Escorpião";
        return
    }

    // NOVEMBRO
    if (digitado1 >= 1 && digitado1 < 22 && digitado2 == "novembro") {
        paragrafo.innerHTML = " signo  de Escorpião";
        return
    }
    if (digitado1 >= 22 && digitado1 <= 30 && digitado2 == "novembro") {
        paragrafo.innerHTML = "signo de  Sagitário";
        return
    }

    // DEZEMBRO
    if (digitado1 >= 1 && digitado1 < 22 && digitado2 == "dezembro") {
        paragrafo.innerHTML = " signo de Sagitário";
        return
    }
    if (digitado1 >= 22 && digitado1 <= 31 && digitado2 == "dezembro") {
        paragrafo.innerHTML = " signo de Capricórnio";
        return
    }
    
    // Caso a data digitada seja inválida ou o mês esteja escrito errado
    paragrafo.innerHTML = "Data ou mês inválido. ou campo vazio";
}











