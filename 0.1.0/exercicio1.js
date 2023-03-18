
function calcValue (valor, conv, cartao){

    if(conv && cartao){
        //desconto 15%
        let desconto = valor*0.15;
        let calc = valor - desconto;
        return calc;
    }else if(conv || cartao){
        //desconto 10%
        let desconto = valor*0.10;
        let calc = valor - desconto;
        return calc;
    }
        return valor;
    

}


console.log("O VALOR SERA DE??", calcValue(100, true, false));