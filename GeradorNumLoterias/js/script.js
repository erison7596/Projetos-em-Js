//parte de aparecer e sumir quando escolher o tipo de jogo
function mega(i, j, k, l, m, n) {
    document.getElementById(i).style.display = 'block';
    document.getElementById(j).style.display = 'none';
    document.getElementById(k).style.display = 'none';
    document.getElementById(l).style.display = 'none';
    document.getElementById(m).style.display = 'none';
    document.getElementById(n).style.display = 'none';
    //para apagar as bolas que estão na tela anterior
    for (let i = 0; i < 50; i++) {
        var apagar = document.getElementById(`apagar${i}`);
        if (apagar != null) {
            apagar.remove();
        }
        var apagar2 = document.getElementById("prob");
        if (apagar2 != null) {
            apagar2.remove();
        }
        var apagarbr = document.getElementById("br");
        if (apagarbr != null) {
            apagarbr.remove();
        }
    }
    const teste = document.getElementById("mega");
    mega.classList.add("megaclick");
}

function quina(i, j, k, l, m, n) {
    document.getElementById(i).style.display = 'block';
    document.getElementById(j).style.display = 'none';
    document.getElementById(k).style.display = 'none';
    document.getElementById(l).style.display = 'none';
    document.getElementById(m).style.display = 'none';
    document.getElementById(n).style.display = 'none';
    for (let i = 0; i < 50; i++) {
        var apagar = document.getElementById(`apagar${i}`);
        if (apagar != null) {
            apagar.remove();
        }
        var apagar2 = document.getElementById("prob");
        if (apagar2 != null) {
            apagar2.remove();
        }
        var apagarbr = document.getElementById("br");
        if (apagarbr != null) {
            apagarbr.remove();
        }
    }
    const teste = document.getElementById("quina");
    mega.classList.add("quinaclick");
}

function dupla(i, j, k, l, m, n) {
    document.getElementById(i).style.display = 'block';
    document.getElementById(j).style.display = 'none';
    document.getElementById(k).style.display = 'none';
    document.getElementById(l).style.display = 'none';
    document.getElementById(m).style.display = 'none';
    document.getElementById(n).style.display = 'none';
    for (let i = 0; i < 50; i++) {
        var apagar = document.getElementById(`apagar${i}`);
        if (apagar != null) {
            apagar.remove();
        }
        var apagar2 = document.getElementById("prob");
        if (apagar2 != null) {
            apagar2.remove();
        }
        var apagarbr = document.getElementById("br");
        if (apagarbr != null) {
            apagarbr.remove();
        }
    }
    const teste = document.getElementById("dupla");
    mega.classList.add("duplaclick");
}

function lotof(i, j, k, l, m, n) {
    document.getElementById(i).style.display = 'block';
    document.getElementById(j).style.display = 'none';
    document.getElementById(k).style.display = 'none';
    document.getElementById(l).style.display = 'none';
    document.getElementById(m).style.display = 'none';
    document.getElementById(n).style.display = 'none';
    for (let i = 0; i < 50; i++) {
        var apagar = document.getElementById(`apagar${i}`);
        if (apagar != null) {
            apagar.remove();
        }
        var apagar2 = document.getElementById("prob");
        if (apagar2 != null) {
            apagar2.remove();
        }
        var apagarbr = document.getElementById("br");
        if (apagarbr != null) {
            apagarbr.remove();
        }
    }
    const teste = document.getElementById("lotof");
    mega.classList.add("lotofclick");
}

function lotom(i, j, k, l, m, n) {
    document.getElementById(i).style.display = 'block';
    document.getElementById(j).style.display = 'none';
    document.getElementById(k).style.display = 'none';
    document.getElementById(l).style.display = 'none';
    document.getElementById(m).style.display = 'none';
    document.getElementById(n).style.display = 'none';
    for (let i = 0; i < 50; i++) {
        var apagar = document.getElementById(`apagar${i}`);
        if (apagar != null) {
            apagar.remove();
        }
        var apagar2 = document.getElementById("prob");
        if (apagar2 != null) {
            apagar2.remove();
        }
        var apagarbr = document.getElementById("br");
        if (apagarbr != null) {
            apagarbr.remove();
        }
    }
    const teste = document.getElementById("lotom");
    mega.classList.add("lotomclick");
}

function time(i, j, k, l, m, n) {
    document.getElementById(i).style.display = 'block';
    document.getElementById(j).style.display = 'none';
    document.getElementById(k).style.display = 'none';
    document.getElementById(l).style.display = 'none';
    document.getElementById(m).style.display = 'none';
    document.getElementById(n).style.display = 'none';
    for (let i = 0; i < 50; i++) {
        var apagar = document.getElementById(`apagar${i}`);
        if (apagar != null) {
            apagar.remove();
        }
        var apagar2 = document.getElementById("prob");
        if (apagar2 != null) {
            apagar2.remove();
        }
        var apagarbr = document.getElementById("br");
        if (apagarbr != null) {
            apagarbr.remove();
        }
    }
    const teste = document.getElementById("time");
    mega.classList.add("timeclick");
}

//parte de ficar escondendo e aparecendo as cores que estiverem selecionadas
window.onhashchange = function (e) {
    const oldURL = e.oldURL.split('#')[1];
    const newURL = e.newURL.split('#')[1];
    const oldMenu = document.querySelector(`.buttons a[href='#${oldURL}']`);
    const newMenu = document.querySelector(`.buttons a[href='#${newURL}']`);
    oldMenu && oldMenu.classList.remove(`${oldURL}click`);
    newMenu && newMenu.classList.add(`${newURL}click`);
}

//megasena
function megaSena() {
    var quant = document.getElementById("quantMega").value;

    function rand1to60() {
        return Math.floor(Math.random() * (60 - 1 + 1)) + 1;
    }
    let numeros = [];
    let result;
    let cont = 0;
    while (cont < quant) {
        result = rand1to60();
        if (numeros.indexOf(result) == -1) {
            numeros.push(result);
            cont++;
        }
    }
    numeros.sort(function (a, b) {
        return a - b
    });

    for (let i = 0; i < 50; i++) {
        var apagar = document.getElementById(`apagar${i}`);
        if (apagar != null) {
            apagar.remove(); 
        }
        var apagar2 = document.getElementById("prob");
        if (apagar2 != null) {
            apagar2.remove();
        }
        var apagarbr = document.getElementById("br");
        if (apagarbr != null) {
            apagarbr.remove();
        }

    }
    const escreve = document.getElementById("escreveBolas");
    for (let i = 0; i < quant; i++) {
        escreve.insertAdjacentHTML('beforeend', `<div class="megaBola" id=apagar${i}>${numeros[i]}</div>`);
        if (i == 9 || i == 19 || i == 29 || i == 39) {
            escreve.insertAdjacentHTML('beforeend', '<br id="br">');
        }
    }
    if (quant == 6) {
        escreve.insertAdjacentHTML('beforeend', `<div class="probabilidade" id="prob">Suas chances de ganhar são as seguintes:<br><span class="bold">Sena</span>
            - 1 em 50.063.860
            <br>
            <span class="bold">Quina</span> - 1 em 154.518
            <br>
            <span class="bold">Quadra</span> - 1 em 2.332
            <br>
            <span class="valorJogo">Valor do Jogo: </span> <span class="bold">R$ 4,50</span>
            </div>`);
    }
    if (quant == 7) {
        escreve.insertAdjacentHTML('beforeend', `<div class="probabilidade" id="prob">Suas chances de ganhar são as seguintes:<br>
            <span class="bold">Sena</span> - 1 em 7.151.980
            <br>
            <span class="bold">Quina</span> - 1 em 44.981
            <br>
            <span class="bold">Quadra</span> - 1 em 1.038
            <br>
            <span class="valorJogo">Valor do Jogo: </span> <span class="bold">R$ 31,50</span>
            </div>`);
    }
    if (quant == 8) {
        escreve.insertAdjacentHTML('beforeend', `<div class="probabilidade" id="prob">Suas chances de ganhar são as seguintes:<br>
            <span class="bold">Sena</span> - 1 em 1.787.995
            <br>
            <span class="bold">Quina</span> - 1 em 17.192
            <br>
            <span class="bold">Quadra</span> - 1 em 539
            <br>
            <span class="valorJogo">Valor do Jogo: </span> <span class="bold">R$ 126,00</span>
            </div>`);
    }
    if (quant == 9) {
        escreve.insertAdjacentHTML('beforeend', `<div class="probabilidade" id="prob">Suas chances de ganhar são as seguintes:<br>
            <span class="bold">Sena</span> - 1 em 595.998
            <br>
            <span class="bold">Quina</span> - 1 em 7.791
            <br>
            <span class="bold">Quadra</span> - 1 em 312
            <br>
            <span class="valorJogo">Valor do Jogo: </span> <span class="bold">R$ 378,00</span>
            </div>`);
    }
    if (quant == 10) {
        escreve.insertAdjacentHTML('beforeend', `<div class="probabilidade" id="prob">Suas chances de ganhar são as seguintes:<br>
            <span class="bold">Sena</span> - 1 em 238.399
            <br>
            <span class="bold">Quina</span> - 1 em 3.973
            <br>
            <span class="bold">Quadra</span> - 1 em 195
            <br>
            <span class="valorJogo">Valor do Jogo: </span> <span class="bold">R$ 945,00</span>
            </div>`);
    }
    if (quant == 11) {
        escreve.insertAdjacentHTML('beforeend', `<div class="probabilidade" id="prob">Suas chances de ganhar são as seguintes:<br>
            <span class="bold">Sena</span> - 1 em 108.363
            <br>
            <span class="bold">Quina</span> - 1 em 2.211
            <br>
            <span class="bold">Quadra</span> - 1 em 129
            <br>
            <span class="valorJogo">Valor do Jogo: </span> <span class="bold">R$ 2.079,00</span>
            </div>`);
    }
    if (quant == 12) {
        escreve.insertAdjacentHTML('beforeend', `<div class="probabilidade" id="prob">Suas chances de ganhar são as seguintes:<br>
            <span class="bold">Sena</span> - 1 em 54.182
            <br>
            <span class="bold">Quina</span> - 1 em 1.317
            <br>
            <span class="bold">Quadra</span> - 1 em 90
            <br>
            <span class="valorJogo">Valor do Jogo: </span> <span class="bold">R$ 4.158,00</span>
            </div>`);
    }
    if (quant == 13) {
        escreve.insertAdjacentHTML('beforeend', `<div class="probabilidade" id="prob">Suas chances de ganhar são as seguintes:<br>
            <span class="bold">Sena</span> - 1 em 29.175
            <br>
            <span class="bold">Quina</span> - 1 em 628
            <br>
            <span class="bold">Quadra</span> - 1 em 65
            <br>
            <span class="valorJogo">Valor do Jogo: </span> <span class="bold">R$ 7.722,00</span>
            </div>`);
    }
    if (quant == 14) {
        escreve.insertAdjacentHTML('beforeend', `<div class="probabilidade" id="prob">Suas chances de ganhar são as seguintes:<br>
            <span class="bold">Sena</span> - 1 em 16.671
            <br>
            <span class="bold">Quina</span> - 1 em 544
            <br>
            <span class="bold">Quadra</span> - 1 em 48
            <br>
            <span class="valorJogo">Valor do Jogo: </span> <span class="bold">R$ 13.513,50</span>
            </div>`);
    }
    if (quant == 15) {
        escreve.insertAdjacentHTML('beforeend', `<div class="probabilidade" id="prob">Suas chances de ganhar são as seguintes:<br>
            <span class="bold">Sena</span> - 1 em 10.003
            <br>
            <span class="bold">Quina</span> - 1 em 370
            <br>
            <span class="bold">Quadra</span> - 1 em 37
            <br>
            <span class="valorJogo">Valor do Jogo: </span> <span class="bold">R$ 22.522,50</span>
            </div>`);
    }


}
//------------------------------------------------------
//quina
function quinaFunc() {
    var quant = document.getElementById("quantQuina").value;

    function rand1to80() {
        return Math.floor(Math.random() * (80 - 1 + 1)) + 1;
    }
    let numeros = [];
    let result;
    let cont = 0;
    while (cont < quant) {
        result = rand1to80();
        if (numeros.indexOf(result) == -1) {
            numeros.push(result);
            cont++;
        }
    }
    numeros.sort(function (a, b) {
        return a - b
    });

    for (let i = 0; i < 15; i++) {
        var apagar = document.getElementById(`apagar${i}`);
        if (apagar != null) {
            apagar.remove();
        }
        var apagar2 = document.getElementById("prob");
        if (apagar2 != null) {
            apagar2.remove();
        }
        var apagarbr = document.getElementById("br");
        if (apagarbr != null) {
            apagarbr.remove();
        }
    }
    const escreve = document.getElementById("escreveBolas");
    for (let i = 0; i < quant; i++) {
        escreve.insertAdjacentHTML('beforeend', `<div class="quinaBola" id=apagar${i}>${numeros[i]}</div>`);
        if (i == 9 || i == 19 || i == 29 || i == 39) {
            escreve.insertAdjacentHTML('beforeend', '<br id="br">');
        }
    }
    if (quant == 5) {
        escreve.insertAdjacentHTML('beforeend', `<div class="probabilidade" id="prob">Suas chances de ganhar são as seguintes:<br>
            <span class="bold">Quina</span> - 1 em 24.040.016
            <br>
            <span class="bold">Quadra</span> - 1 em 64.106
            <br>
            <span class="bold">Terno</span> - 1 em 866
            <br>
            <span class="bold">Duque</span> - 1 em 36
            <br>
            <span class="valorJogo">Valor do Jogo: </span> <span class="bold">R$ 1,50</span>
            </div>`);
    }
    if (quant == 6) {
        escreve.insertAdjacentHTML('beforeend', `<div class="probabilidade" id="prob">Suas chances de ganhar são as seguintes:<br>
            <span class="bold">Quina</span> - 1 em 4.006.669
            <br>
            <span class="bold">Quadra</span> - 1 em 21.657
            <br>
            <span class="bold">Terno</span> - 1 em 445
            <br>
            <span class="bold">Duque</span> - 1 em 25
            <br>
            <span class="valorJogo">Valor do Jogo: </span> <span class="bold">R$ 9,00</span>
            </div>`);
    }
    if (quant == 7) {
        escreve.insertAdjacentHTML('beforeend', `<div class="probabilidade" id="prob">Suas chances de ganhar são as seguintes:<br>
            <span class="bold">Quina</span> - 1 em 1.144.762
            <br>
            <span class="bold">Quadra</span> - 1 em 9.409
            <br>
            <span class="bold">Terno</span> - 1 em 261
            <br>
            <span class="bold">Duque</span> - 1 em 18
            <br>
            <span class="valorJogo">Valor do Jogo: </span> <span class="bold">R$ 31,50</span>
            </div>`);
    }
    if (quant == 8) {
        escreve.insertAdjacentHTML('beforeend', `<div class="probabilidade" id="prob">Suas chances de ganhar são as seguintes:<br>
            <span class="bold">Quina</span> - 1 em 429.285
            <br>
            <span class="bold">Quadra</span> - 1 em 4.769
            <br>
            <span class="bold">Terno</span> - 1 em 167
            <br>
            <span class="bold">Duque</span> - 1 em 14
            <br>
            <span class="valorJogo">Valor do Jogo: </span> <span class="bold">R$ 84,00</span>
            </div>`);
    }
    if (quant == 9) {
        escreve.insertAdjacentHTML('beforeend', `<div class="probabilidade" id="prob">Suas chances de ganhar são as seguintes:<br>
            <span class="bold">Quina</span> - 1 em 190.793
            <br>
            <span class="bold">Quadra</span> - 1 em 2.687
            <br>
            <span class="bold">Terno</span> - 1 em 115
            <br>
            <span class="bold">Duque</span> - 1 em 12
            <br>
            <span class="valorJogo">Valor do Jogo: </span> <span class="bold">R$ 189,00</span>
            </div>`);
    }
    if (quant == 10) {
        escreve.insertAdjacentHTML('beforeend', `<div class="probabilidade" id="prob">Suas chances de ganhar são as seguintes:<br>
            <span class="bold">Quina</span> - 1 em 95.396
            <br>
            <span class="bold">Quadra</span> - 1 em 1.635
            <br>
            <span class="bold">Terno</span> - 1 em 82
            <br>
            <span class="bold">Duque</span> - 1 em 9
            <br>
            <span class="valorJogo">Valor do Jogo: </span> <span class="bold">R$ 378,00</span>
            </div>`);
    }
    if (quant == 11) {
        escreve.insertAdjacentHTML('beforeend', `<div class="probabilidade" id="prob">Suas chances de ganhar são as seguintes:<br>
            <span class="bold">Quina</span> - 1 em 52.034
            <br>
            <span class="bold">Quadra</span> - 1 em 1.055
            <br>
            <span class="bold">Terno</span> - 1 em 62
            <br>
            <span class="bold">Duque</span> - 1 em 8
            <br>
            <span class="valorJogo">Valor do Jogo: </span> <span class="bold">R$ 693,00</span>
            </div>`);
    }
    if (quant == 12) {
        escreve.insertAdjacentHTML('beforeend', `<div class="probabilidade" id="prob">Suas chances de ganhar são as seguintes:<br>
            <span class="bold">Quina</span> - 1 em 30.353
            <br>
            <span class="bold">Quadra</span> - 1 em 714
            <br>
            <span class="bold">Terno</span> - 1 em 47
            <br>
            <span class="bold">Duque</span> - 1 em 7
            <br>
            <span class="valorJogo">Valor do Jogo: </span> <span class="bold">R$ 1.188,00</span>
            </div>`);
    }
    if (quant == 13) {
        escreve.insertAdjacentHTML('beforeend', `<div class="probabilidade" id="prob">Suas chances de ganhar são as seguintes:<br>
            <span class="bold">Quina</span> - 1 em 18.679	
            <br>
            <span class="bold">Quadra</span> - 1 em 501
            <br>
            <span class="bold">Terno</span> - 1 em 38
            <br>
            <span class="bold">Duque</span> - 1 em 6
            <br>
            <span class="valorJogo">Valor do Jogo: </span> <span class="bold">R$ 1.930,50</span>
            </div>`);
    }
    if (quant == 14) {
        escreve.insertAdjacentHTML('beforeend', `<div class="probabilidade" id="prob">Suas chances de ganhar são as seguintes:<br>
            <span class="bold">Quina</span> - 1 em 12.007
            <br>
            <span class="bold">Quadra</span> - 1 em 363
            <br>
            <span class="bold">Terno</span> - 1 em 30
            <br>
            <span class="bold">Duque</span> - 1 em 5,8
            <br>
            <span class="valorJogo">Valor do Jogo: </span> <span class="bold">R$ 3.003,00</span>
            </div>`);
    }
    if (quant == 15) {
        escreve.insertAdjacentHTML('beforeend', `<div class="probabilidade" id="prob">Suas chances de ganhar são as seguintes:<br>
            <span class="bold">Quina</span> - 1 em 8.005
            <br>
            <span class="bold">Quadra</span> - 1 em 270
            <br>
            <span class="bold">Terno</span> - 1 em 25
            <br>
            <span class="bold">Duque</span> - 1 em 5,2
            <br>
            <span class="valorJogo">Valor do Jogo: </span> <span class="bold">R$ 4.504,50</span>
            </div>`);
    }

}
//----------------------------------------------------------------------------------------------------------------------
//Dupla sena
function duplaSenaFunc() {
    var quant = document.getElementById("quantDupla").value;

    function rand1to50() {
        return Math.floor(Math.random() * (50 - 1 + 1)) + 1;
    }
    let numeros = [];
    let result;
    let cont = 0;
    while (cont < quant) {
        result = rand1to50();
        if (numeros.indexOf(result) == -1) {
            numeros.push(result);
            cont++;
        }
    }
    numeros.sort(function (a, b) {
        return a - b
    });

    for (let i = 0; i < 50; i++) {
        var apagar = document.getElementById(`apagar${i}`);
        if (apagar != null) {
            apagar.remove();
        }
        var apagar2 = document.getElementById("prob");
        if (apagar2 != null) {
            apagar2.remove();
        }
        var apagarbr = document.getElementById("br");
        if (apagarbr != null) {
            apagarbr.remove();
        }
    }
    const escreve = document.getElementById("escreveBolas");
    for (let i = 0; i < quant; i++) {
        escreve.insertAdjacentHTML('beforeend', `<div class="duplaBola" id=apagar${i}>${numeros[i]}</div>`);
        if (i == 9 || i == 19 || i == 29 || i == 39) {
            escreve.insertAdjacentHTML('beforeend', '<br id="br">');
        }
    }
    if (quant == 6) {
        escreve.insertAdjacentHTML('beforeend', `<div class="probabilidade" id="prob">Suas chances de ganhar são as seguintes:<br>
            <span class="bold">Sena</span> - 1 em 15.890.700
            <br>
            <span class="bold">Quina</span> - 1 em 60.192
            <br>
            <span class="bold">Quadra</span> - 1 em 1.119
            <br>
            <span class="bold">Terno</span> - 1 em 60
            <br>
            <span class="valorJogo">Valor do Jogo: </span> <span class="bold">R$ 2,00</span>
            </div>`);
    }
    if (quant == 7) {
        escreve.insertAdjacentHTML('beforeend', `<div class="probabilidade" id="prob">Suas chances de ganhar são as seguintes:<br>
        <span class="bold">Sena</span> - 1 em 2.270.100
            <br>    
        <span class="bold">Quina</span> - 1 em 17.597
            <br>
            <span class="bold">Quadra</span> - 1 em 502
            <br>
            <span class="bold">Terno</span> - 1 em 37
            <br>
            <span class="valorJogo">Valor do Jogo: </span> <span class="bold">R$ 14,00</span>
            </div>`);
    }
    if (quant == 8) {
        escreve.insertAdjacentHTML('beforeend', `<div class="probabilidade" id="prob">Suas chances de ganhar são as seguintes:<br>
        <span class="bold">Sena</span> - 1 em 567.525
            <br>   
        <span class="bold">Quina</span> - 1 em 6.756
            <br>
            <span class="bold">Quadra</span> - 1 em 263
            <br>
            <span class="bold">Terno</span> - 1 em 25
            <br>
            <span class="valorJogo">Valor do Jogo: </span> <span class="bold">R$ 56,00</span>
            </div>`);
    }
    if (quant == 9) {
        escreve.insertAdjacentHTML('beforeend', `<div class="probabilidade" id="prob">Suas chances de ganhar são as seguintes:<br>
        <span class="bold">Sena</span> - 1 em 189.175
            <br>   
        <span class="bold">Quina</span> - 1 em 3.076
            <br>
            <span class="bold">Quadra</span> - 1 em 153
            <br>
            <span class="bold">Terno</span> - 1 em 18
            <br>
            <span class="valorJogo">Valor do Jogo: </span> <span class="bold">R$ 168,00</span>
            </div>`);
    }
    if (quant == 10) {
        escreve.insertAdjacentHTML('beforeend', `<div class="probabilidade" id="prob">Suas chances de ganhar são as seguintes:<br>
        <span class="bold">Sena</span> - 1 em 75.670
            <br>   
        <span class="bold">Quina</span> - 1 em 1.576
            <br>
            <span class="bold">Quadra</span> - 1 em 97
            <br>
            <span class="bold">Terno</span> - 1 em 13
            <br>
            <span class="valorJogo">Valor do Jogo: </span> <span class="bold">R$ 420,00</span>
            </div>`);
    }
    if (quant == 11) {
        escreve.insertAdjacentHTML('beforeend', `<div class="probabilidade" id="prob">Suas chances de ganhar são as seguintes:<br>
        <span class="bold">Sena</span> - 1 em 34.395
            <br>   
        <span class="bold">Quina</span> - 1 em 881
            <br>
            <span class="bold">Quadra</span> - 1 em 64
            <br>
            <span class="bold">Terno</span> - 1 em 11
            <br>
            <span class="valorJogo">Valor do Jogo: </span> <span class="bold">R$ 924,00</span>
            </div>`);
    }
    if (quant == 12) {
        escreve.insertAdjacentHTML('beforeend', `<div class="probabilidade" id="prob">Suas chances de ganhar são as seguintes:<br>
        <span class="bold">Sena</span> - 1 em 17.197
            <br>   
        <span class="bold">Quina</span> - 1 em 528
            <br>
            <span class="bold">Quadra</span> - 1 em 45
            <br>
            <span class="bold">Terno</span> - 1 em 9
            <br>
            <span class="valorJogo">Valor do Jogo: </span> <span class="bold">R$ 1.848,00</span>
            </div>`);
    }
    if (quant == 13) {
        escreve.insertAdjacentHTML('beforeend', `<div class="probabilidade" id="prob">Suas chances de ganhar são as seguintes:<br>
        <span class="bold">Sena</span> - 1 em 9.260
            <br>   
        <span class="bold">Quina</span> - 1 em 333	
            <br>
            <span class="bold">Quadra</span> - 1 em 33
            <br>
            <span class="bold">Terno</span> - 1 em 7
            <br>
            <span class="valorJogo">Valor do Jogo: </span> <span class="bold">R$ 3.432,00</span>
            </div>`);
    }
    if (quant == 14) {
        escreve.insertAdjacentHTML('beforeend', `<div class="probabilidade" id="prob">Suas chances de ganhar são as seguintes:<br>
        <span class="bold">Sena</span> - 1 em 5.291
            <br>   
        <span class="bold">Quina</span> - 1 em 220
            <br>
            <span class="bold">Quadra</span> - 1 em 25
            <br>
            <span class="bold">Terno</span> - 1 em 6
            <br>
            <span class="valorJogo">Valor do Jogo: </span> <span class="bold">R$ 6.006,00</span>
            </div>`);
    }
    if (quant == 15) {
        escreve.insertAdjacentHTML('beforeend', `<div class="probabilidade" id="prob">Suas chances de ganhar são as seguintes:<br>
        <span class="bold">Sena</span> - 1 em 3.174
            <br>   
        <span class="bold">Quina</span> - 1 em 151
            <br>
            <span class="bold">Quadra</span> - 1 em 19
            <br>
            <span class="bold">Terno</span> - 1 em 5
            <br>
            <span class="valorJogo">Valor do Jogo: </span> <span class="bold">R$ 10.010,00</span>
            </div>`);
    }

}
//----------------------------------------------------------------------------------------------------------------------
//Lotofacil
function lotofacilFunc() {
    var quant = document.getElementById("quantLotof").value;

    function rand1to25() {
        return Math.floor(Math.random() * (25 - 1 + 1)) + 1;
    }
    let numeros = [];
    let result;
    let cont = 0;
    while (cont < quant) {
        result = rand1to25();
        if (numeros.indexOf(result) == -1) {
            numeros.push(result);
            cont++;
        }
    }
    numeros.sort(function (a, b) {
        return a - b
    });

    for (let i = 0; i < 50; i++) {
        var apagar = document.getElementById(`apagar${i}`);
        if (apagar != null) {
            apagar.remove();
        }
        var apagar2 = document.getElementById("prob");
        if (apagar2 != null) {
            apagar2.remove();
        }
        var apagarbr = document.getElementById("br");
        if (apagarbr != null) {
            apagarbr.remove();
        }
    }
    const escreve = document.getElementById("escreveBolas");
    for (let i = 0; i < quant; i++) {
        escreve.insertAdjacentHTML('beforeend', `<div class="lotofBola" id=apagar${i}>${numeros[i]}</div>`);
        if (i == 9 || i == 19 || i == 29 || i == 39) {
            escreve.insertAdjacentHTML('beforeend', '<br id="br">');
        }
    }
    if (quant == 15) {
        escreve.insertAdjacentHTML('beforeend', `<div class="probabilidade" id="prob">Suas chances de ganhar são as seguintes:<br>
            <span class="bold">15 pts</span> - 1 em 3.268.760
            <br>
            <span class="bold">14 pts</span> - 1 em 21.791
            <br>
            <span class="bold">13 pts</span> - 1 em 691
            <br>
            <span class="bold">12 pts</span> - 1 em 59
            <br>
            <span class="bold">11 pts</span> - 1 em 11
            <br>
            <span class="valorJogo">Valor do Jogo: </span> <span class="bold">R$ 2,00</span>
            </div>`);
    }
    if (quant == 16) {
        escreve.insertAdjacentHTML('beforeend', `<div class="probabilidade" id="prob">Suas chances de ganhar são as seguintes:<br>
        <span class="bold">15 pts</span> - 1 em 204.297
            <br>
            <span class="bold">14 pts</span> - 1 em 3.026
            <br>
            <span class="bold">13 pts</span> - 1 em 162
            <br>
            <span class="bold">12 pts</span> - 1 em 21
            <br>
            <span class="bold">11 pts</span> - 1 em 5
            <br>
            <span class="valorJogo">Valor do Jogo: </span> <span class="bold">R$ 32,00</span>
            </div>`);
    }
    if (quant == 17) {
        escreve.insertAdjacentHTML('beforeend', `<div class="probabilidade" id="prob">Suas chances de ganhar são as seguintes:<br>
        <span class="bold">15 pts</span> - 1 em 24.034
            <br>
            <span class="bold">14 pts</span> - 1 em 600
            <br>
            <span class="bold">13 pts</span> - 1 em 49
            <br>
            <span class="bold">12 pts</span> - 1 em 9
            <br>
            <span class="bold">11 pts</span> - 1 em 3
            <br>
            <span class="valorJogo">Valor do Jogo: </span> <span class="bold">R$ 272,00</span>
            </div>`);
    }
    if (quant == 18) {
        escreve.insertAdjacentHTML('beforeend', `<div class="probabilidade" id="prob">Suas chances de ganhar são as seguintes:<br>
        <span class="bold">15 pts</span> - 1 em 4.005
            <br>
            <span class="bold">14 pts</span> - 1 em 152
            <br>
            <span class="bold">13 pts</span> - 1 em 18
            <br>
            <span class="bold">12 pts</span> - 1 em 5
            <br>
            <span class="bold">11 pts</span> - 1 em 2
            <br>
            <span class="valorJogo">Valor do Jogo: </span> <span class="bold">R$ 1.532,00</span>
            </div>`);
    }


}
//----------------------------------------------------------------------------------------------------------------------
//LotoMania
function lotomaniaFunc() {
    var quant = document.getElementById("quantLotom").value;

    function rand1to100() {
        return Math.floor(Math.random() * (100 - 1 + 1)) + 1;
    }
    let numeros = [];
    let result;
    let cont = 0;
    while (cont < quant) {
        result = rand1to100();
        if (numeros.indexOf(result) == -1) {
            numeros.push(result);
            cont++;
        }
    }
    numeros.sort(function (a, b) {
        return a - b
    });

    for (let i = 0; i < 50; i++) {
        var apagar = document.getElementById(`apagar${i}`);
        if (apagar != null) {
            apagar.remove();
        }
        var apagar2 = document.getElementById("prob");
        if (apagar2 != null) {
            apagar2.remove();
        }
        var apagarbr = document.getElementById("br");
        if (apagarbr != null) {
            apagarbr.remove();
        }
    }
    const escreve = document.getElementById("escreveBolas");
    for (let i = 0; i < quant; i++) {
        escreve.insertAdjacentHTML('beforeend', `<div class="lotoMBola" id=apagar${i}>${numeros[i]}</div>`);
        if (i == 9 || i == 19 || i == 29 || i == 39) {
            escreve.insertAdjacentHTML('beforeend', '<br id="br">');
        }
    }
    if (quant == 50) {
        escreve.insertAdjacentHTML('beforeend', `<div class="probabilidade" id="prob">Suas chances de ganhar são as seguintes:<br>
            <span class="bold">20 e 0 pts</span> - 1 em 11.372.635
            <br>
            <span class="bold">19 pts</span> - 1 em 352.551
            <br>
            <span class="bold">18 pts</span> - 1 em 24.235
            <br>
            <span class="bold">17 pts</span> - 1 em 2.776
            <br>
            <span class="bold">16 pts</span> - 1 em 472
            <br>
            <span class="bold">15 pts</span> - 1 em 112
            <br>
            <span class="valorJogo">Valor do Jogo: </span> <span class="bold">R$ 1,50</span>
            </div>`);
    }



}
//TimeMania
function timemaniaFunc() {
    var quant = document.getElementById("quantTime").value;

    function rand1to80() {
        return Math.floor(Math.random() * (80 - 1 + 1)) + 1;
    }
    let numeros = [];
    let result;
    let cont = 0;
    while (cont < quant) {
        result = rand1to80();
        if (numeros.indexOf(result) == -1) {
            numeros.push(result);
            cont++;
        }
    }
    numeros.sort(function (a, b) {
        return a - b
    });

    for (let i = 0; i < 50; i++) {
        var apagar = document.getElementById(`apagar${i}`);
        if (apagar != null) {
            apagar.remove();
        }
        var apagar2 = document.getElementById("prob");
        if (apagar2 != null) {
            apagar2.remove();
        }
        var apagarbr = document.getElementById("br");
        if (apagarbr != null) {
            apagarbr.remove();
        }
    }
    const escreve = document.getElementById("escreveBolas");
    for (let i = 0; i < quant; i++) {
        escreve.insertAdjacentHTML('beforeend', `<div class="timeBola" id=apagar${i}>${numeros[i]}</div>`);
        if (i == 9 || i == 19 || i == 29 || i == 39) {
            escreve.insertAdjacentHTML('beforeend', '<br id="br">');
        }
    }
    if (quant == 10) {
        escreve.insertAdjacentHTML('beforeend', `<div class="probabilidade" id="prob">Suas chances de ganhar são as seguintes:<br>
            <span class="bold">7 pts</span> - 1 em 26.472.637
            <br>
            <span class="bold">6 pts</span> - 1 em 216.103
            <br>
            <span class="bold">5 pts</span> - 1 em 5.220
            <br>
            <span class="bold">4 pts</span> - 1 em 276
            <br>
            <span class="bold">3 pts</span> - 1 em 29
            <br>
            <span class="bold">Time do Coração</span> - 1 em 80
            <br>
            <span class="valorJogo">Valor do Jogo: </span> <span class="bold">R$ 2,00</span>
            </div>`);
    }



}