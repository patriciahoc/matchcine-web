class CardFilme{
  constructor(){
    this.filme = document.getElementById("filmesSwap")
    
  }

  adicionaNoSwap(dados, indice){
    let filmesHTML = "";        

    filmesHTML = `<div class="movie-image">
    <img src="${dados.filmes[indice].img}" alt="${dados.filmes[indice].nome}" />
    </div>
    <div  class="movie-info">
      <h3>${dados.filmes[indice].nome}</h3>
      <p>${dados.filmes[indice].descricao}</p>
      <h4>Avaliação: ${dados.filmes[indice].avaliacao}</h4>
    </div>
    `
    this.filme.innerHTML = filmesHTML
  }
}