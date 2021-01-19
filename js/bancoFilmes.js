class Filmes{
  
  buscarFilmes(){
    return fetch("../db.json", {method:'get'})
  }
}