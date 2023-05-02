const filmesAssistidos = [
    {
        titulo: "Palmer",
        ano: 2021,
        diretor: "Fisher Stevens",
        favorito: true,
        generos: ["drama", "romance"],
        avaliacoes: [4.5,4.2]
    },
    {
        titulo: "continencia ao amor ",
        ano: 2022,
        diretor: "Elisabeth Allen",
        favorito: true,
        generos: ["drama", "romance"],
        avaliacoes: [4.5,4.2, 5.0]   
    },
    {
        titulo: "Megan",
        ano: 2022,
        diretor: "Gerard Johnstone",
        favorito: false,
        generos: ["Terror", "Ficção cientifica"],
        avaliacoes: [3.9,4.0]
    }
] 
console.log(JSON.stringify(filmesAssistidos, null, Infinity));