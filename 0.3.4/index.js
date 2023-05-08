const arquivos = [
    {
      nome: 'Filmes',
      arquivos: [
        {
          nome: 'Comedia',
          arquivos: [
            {
              nome: 'Mr. Bean',
            },
            {
              nome: '2021',
              arquivos: [
                {
                  nome: 'Nice Guy',
                }
              ]
            }
          ]
        },
        {
          nome: 'Harry Potter Ordem da Fênix',
        }
      ]
    }
  ]

  function listarFilmes(arquivos) {
    let filmes = [];
    arquivos.forEach(arquivo => {
      if (arquivo.arquivos) {
        filmes = filmes.concat(listarFilmes(arquivo.arquivos));
      } else {
        filmes.push(arquivo.nome);
      }
    });
    return filmes;
  }

  const filmes = listarFilmes(arquivos);
  console.log(filmes);