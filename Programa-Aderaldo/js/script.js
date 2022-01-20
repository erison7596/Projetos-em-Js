var quant;
let total = 0;
function gerarQuant(){
    if(total == 0){
           alert("Por favor, envie primeiro o valor da Porcentagem");
     
         
        return 1;
    }
    quant = document.getElementById("quantProd").value;
    document.getElementById("quantidadeProdutos").style.display = 'none';
    const escreve = document.getElementById("formInputNum");

    for (let i = 0; i < quant; i++) {
          
        escreve.insertAdjacentHTML('beforeend', `<div class="teste"><label for="produto${i} class="nomeProduto">Produto ${i+1}  </label>
        <input type="number" inputmode="decimal" step="0.1" required id="num${i}"></div>       <div class="gerados_2" id="divgerados_${i}">
        
            </div>
            <div class="resultFinal" id="resultfinal${i}">
                
            </div><br> `);
        
        if(i == quant-1) {
            escreve.insertAdjacentHTML('beforeend', '<br><input type="button" value="Enviar" class="botaoEnvi" onclick="gerarResult()">');
        }
    }
}
var quanti;
function gerarPorcert(){
    total++;
    quanti = document.getElementById("porcent2").value;
    quanti = quanti/100;
    document.getElementById("porcent").style.display = 'none';
}

function gerarResult(){
    for(let i = 0; i < 15; i++){
        var apagar = document.getElementById(`del${i}`);
        if (apagar != null) {
            apagar.remove();
        }
    }
    for(let i = 0; i < 15; i++){
        var apagar = document.getElementById(`dele${i}`);
        if (apagar != null) {
            apagar.remove();
        }
    }
    var escreve;
    var valor;
    var escreve2;
    let tot = 0;
    for(let i = 0; i<quant; i++){
        
        escreve2 = document.getElementById(`resultfinal${i}`);
        escreve= document.getElementById(`divgerados_${i}`);
        valor= document.getElementById(`num${i}`).value;
        let fim = parseFloat(valor)* parseFloat(quanti);
        tot += parseFloat(valor) + parseFloat(fim);
        
        escreve.insertAdjacentHTML('beforeend', `<div class="escrevendo" id="del${i}">${fim.toFixed(2)}</div>`);
        escreve2.insertAdjacentHTML('beforeend', `<div class="escrevendo" id="dele${i}">${tot.toFixed(2)}</div>`);
    }
}
