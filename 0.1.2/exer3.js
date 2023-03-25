const descontoTotal = 100;
function limiteDesconto (desc){
    if(desc > descontoTotal){
        desc = descontoTotal;
    }
    return desc;
}

function calcValue (valor, desc, cartao){

    
        if(desc && cartao){
            //desconto 15%
            let desconto = valor*0.15
            let calc = (valor - limiteDesconto(desconto))
            return calc;
        }else if(desc || cartao){
            //desconto 10%
            let desconto = valor*0.10
            let calc = (valor - limiteDesconto(desconto))
            return calc;
        }
        else{
            return valor;
        }

    
}

console.log("O VALOR SERA DE: ", calcValue(101, true, true))