const objetoFilme = new Filmes()
const objetoCard = new CardFilme()


objetoFilme.buscarFilmes()
  .then(function(resposta){
    
    resposta.json()

      .then(function(dados){        
        objetoCard.adicionaNoSwap(dados, 0)
    })
  })