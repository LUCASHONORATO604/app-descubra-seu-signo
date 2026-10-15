let botaoo = document.querySelector("#botao");
let entrada1 = document.querySelector("#dia");
let entrada2 = document.querySelector("#mes");
let paragrafo = document.querySelector("#para")

//paragrafo.innerHTML = ""

botaoo.addEventListener("click", verificar)

function verificar() {
    let digitado1 = Number(entrada1.value)
    let digitado2 = entrada2.value.toLowerCase()

    // JANEIRO
    if (digitado1 >= 1 && digitado1 < 20 && digitado2 == "janeiro") {
        paragrafo.innerHTML = "voce e do signo Capricórnio";
        return
    }
    if (digitado1 >= 20 && digitado1 <= 31 && digitado2 == "janeiro") {
        paragrafo.innerHTML = "voce e do signo Aquário";
        return
    }

    // FEVEREIRO
    if (digitado1 >= 1 && digitado1 < 19 && digitado2 == "fevereiro") {
        paragrafo.innerHTML = "voce e do signo Aquário";
        return
    }
    if (digitado1 >= 19 && digitado1 <= 29 && digitado2 == "fevereiro") {
        paragrafo.innerHTML = "voce e do signo Peixes";
        return
    }

    // MARÇO
    if (digitado1 >= 1 && digitado1 < 21 && digitado2 == "março") {
        paragrafo.innerHTML = "voce e do signo Peixes";
        return
    }
    if (digitado1 >= 21 && digitado1 <= 31 && digitado2 == "março") {
        paragrafo.innerHTML = "voce e do signo Áries";
        return
    }

    // ABRIL
    if (digitado1 >= 1 && digitado1 < 20 && digitado2 == "abril") {
        paragrafo.innerHTML = "voce e do signo Áries";
        return
    }
    if (digitado1 >= 20 && digitado1 <= 30 && digitado2 == "abril") {
        paragrafo.innerHTML = "voce e do signo Touro";
        return
    }

    // MAIO
    if (digitado1 >= 1 && digitado1 < 21 && digitado2 == "maio") {
        paragrafo.innerHTML = "voce e do signo Touro";
        return
    }
    if (digitado1 >= 21 && digitado1 <= 31 && digitado2 == "maio") {
        paragrafo.innerHTML = "voce e do signo Gêmeos";
        return
    }

    // JUNHO
    if (digitado1 >= 1 && digitado1 < 21 && digitado2 == "junho") {
        paragrafo.innerHTML = "voce e do signo Gêmeos";
        return
    }
    if (digitado1 >= 21 && digitado1 <= 30 && digitado2 == "junho") {
        paragrafo.innerHTML = "voce e do signo Câncer";
        return
    }

    // JULHO
    if (digitado1 >= 1 && digitado1 < 23 && digitado2 == "julho") {
        paragrafo.innerHTML = "voce e do signo Câncer";
        return
    }
    if (digitado1 >= 23 && digitado1 <= 31 && digitado2 == "julho") {
        paragrafo.innerHTML = "voce e do signo Leão";
        return
    }

    // AGOSTO
    if (digitado1 >= 1 && digitado1 < 23 && digitado2 == "agosto") {
        paragrafo.innerHTML = "voce e do signo Leão";
        return
    }
    if (digitado1 >= 23 && digitado1 <= 31 && digitado2 == "agosto") {
        paragrafo.innerHTML = "voce e do signo Virgem";
        return
    }

    // SETEMBRO
    if (digitado1 >= 1 && digitado1 < 23 && digitado2 == "setembro") {
        paragrafo.innerHTML = "voce e do signo Virgem";
        return
    }
    if (digitado1 >= 23 && digitado1 <= 30 && digitado2 == "setembro") {
        paragrafo.innerHTML = "voce e do signo Libra";
        return
    }

    // OUTUBRO
    if (digitado1 >= 1 && digitado1 < 23 && digitado2 == "outubro") {
        paragrafo.innerHTML = "voce e do signo Libra";
        return
    }
    if (digitado1 >= 23 && digitado1 <= 31 && digitado2 == "outubro") {
        paragrafo.innerHTML = "voce e do signo Escorpião";
        return
    }

    // NOVEMBRO
    if (digitado1 >= 1 && digitado1 < 22 && digitado2 == "novembro") {
        paragrafo.innerHTML = "voce e do signo Escorpião";
        return
    }
    if (digitado1 >= 22 && digitado1 <= 30 && digitado2 == "novembro") {
        paragrafo.innerHTML = "voce e do signo Sagitário";
        return
    }

    // DEZEMBRO
    if (digitado1 >= 1 && digitado1 < 22 && digitado2 == "dezembro") {
        paragrafo.innerHTML = "voce e do signo Sagitário";
        return
    }
    if (digitado1 >= 22 && digitado1 <= 31 && digitado2 == "dezembro") {
        paragrafo.innerHTML = "voce e do signo Capricórnio";
        return
    }
    
    // Caso a data digitada seja inválida ou o mês esteja escrito errado
    paragrafo.innerHTML = "Data ou mês inválido. Verifique o que digitou.";
}

















