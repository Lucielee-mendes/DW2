const anos = ['2012', '2010', '2020', '2022' , '2035', '2045'];

function  menoresAnos (anoPassado){
    let list=[]
    for (let i = 0; i < anos.length; i++){
        if(Number(anos[i]) < Number(anoPassado)){
            list.push(anos[i])
        }
    }
    return list
}

console.log(menoresAnos());

function maiorOuIgualAnos (anoPassado){
    let list=[]
    for (let i = 0; i < anos.length; i++){
        if(Number(anos[i]) >= Number(anoPassado)){
            list.push(anos[i])
        }
    }
    return list.length
}
console.log(maiorOuIgualAnos(2022));

function anosDecimos (divisor = 10){
    let list=[]
    for (let i = 0; i < anos.length; i++){
        if(Number(anos[i]) % +divisor === 0){
            list.push(anos[i])
        }
    }
    return list.length
}
console.log(anosDecimos());
