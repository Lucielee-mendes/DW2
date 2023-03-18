
function calcValue (valor, desc, cartao){

    if(valor<=100){
        if(desc && cartao){
            //desconto 15%
            let desconto = valor*0.15
            let calc = valor - desconto
            return calc;
        }else if(desc || cartao){
            //desconto 10%
            let desconto = valor*0.10
            let calc = valor - desconto
            return calc;
        }
        else{
            return valor;
        }
    }else{
        return valor
    }

  

}


console.log("O VALOR SERA DE??", calcValue(101, true, true))