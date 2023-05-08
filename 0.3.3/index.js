const medicos = [
    {
      nome: 'Leticia',
      sobrenome: 'Costana',
      genero: 'feminino',
    },
    {
      nome: 'Adimaldo',
      sobrenome: 'Pinto',
      genero: 'masculino',
    },
    {
      nome: 'Noah',
      sobrenome: 'Lutus',
      genero: 'nao-binario',
    },
  ];


function formatarNomes(medicos) {
  const nomesFormatados = [];

  medicos.forEach((medico) => {
    let nomeFormatado = '';
    if (medico.genero === 'nao-binario') {
      nomeFormatado = `Dr(e) ${medico.nome} ${medico.sobrenome}`;
    } else if (medico.genero === 'masculino') {
      nomeFormatado = `Dr. ${medico.nome} ${medico.sobrenome}`;
    } else {
      nomeFormatado = `Dr(a) ${medico.nome} ${medico.sobrenome}`;
    }
    nomesFormatados.push(nomeFormatado);
  });

  return nomesFormatados;
}
const nomesFormatados = formatarNomes(medicos);
console.log(nomesFormatados);