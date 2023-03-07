const anos = ['2012', '2010', '2020', '2022' , '2035', '2045'];

const anoPassado  = '2022';
const menoresAnos =(anoPassado)=>{
    let list=[]
    for (let i = 0; i < anos.length; i++){
        if(anos[i]<anoPassado){
            list.push(anos[i])
        }
    }
    return list
}

console.log(menoresAnos('2022'));

const maiorOuIgualAnos =(anoPassado)=>{
    let list=[]
    for (let i = 0; i < anos.length; i++){
        if(anos[i]>=anoPassado){
            list.push(anos[i])
        }
    }
    return list.length
}
console.log(maiorOuIgualAnos('2022'));

