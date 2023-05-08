const filmes = [
    {
      nome: 'O Senhor do Aneis: A Sociedade do Anel',
      lancamento: 2002,
      diretores: ['Peter Jackson'],
      generos: ['Fantasia', 'Aventura'],
    },
    {
      nome: 'Harry Potter e a Pedra Filosofal',
      lancamento: 2001,
      diretores: ['Chris Columbus'],
      generos: ['Fantasia'],
    },
    {
      nome: 'Matrix',
      lancamento: 1999,
      diretores: ['Lana Wachowski', 'Lilly Wachowski'],
      generos: ['Ação', 'Ficção Cientifica'],
    }
  ]

  const titulosElancamentos = filmes.map((x) => {
    const obj = {
      Titulo: x.nome,
      Lancamento: x.lancamento,
    };
    return obj;
  });
  console.log(titulosElancamentos);

  const filmesComId = filmes.map((x, index) => {
    const obj = {
      Titulo: x.nome,
      Lancamento: x.lancamento,
      Diretores: x.diretores,
      Generos: x.generos,
      Id: index + 1,
    };
    return obj;
  });
  
  console.log(filmesComId);