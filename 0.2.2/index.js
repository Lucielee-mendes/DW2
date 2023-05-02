const usuario = {
    nome: 'Lucielee',
    idade: 25,
    respostas: [
        {
            descricao: 'Qual sua profissão?',
            valor: 'Nutricionista'
        },
        {
            descricao: 'Voce possui animais de estimação, quais?',
            valores: ['gato', 'passarinho']
        }
    ]
}

const questionarios = [
    {
        idQuestionario: 'q1',
        tipo: 'texto',
        pergunta: 'Qual sua profissão?'
    },
    {
        idQuestionario: 'q2',
        tipo: 'checkbox',
        pergunta: 'Voce possui animais de estimação, quais?',
        opcoes: [
            {
                id: 1,
                descricao: 'cachorro',
            },
            {
                id: 2,
                descricao: 'gato',
            },
            {
                id: 3,
                descricao: 'passarinho'
            }
           

        ]

    }
   
];

console.log(JSON.stringify(usuario, null, Infinity))

console.log(JSON.stringify(questionarios,null, Infinity))
