  // Adicionando um ouvinte de evento para animações ao passar o mouse
  moviesContainer.addEventListener('mouseover', function (event) {
    if (event.target.tagName === 'IMG') {
      event.target.style.transform = 'scale(1.1)';
      event.target.style.filter = 'brightness(1.2)';
    }
  });

  moviesContainer.addEventListener('mouseout', function (event) {
    if (event.target.tagName === 'IMG') {
      event.target.style.transform = 'scale(1)';
      event.target.style.filter = 'brightness(1)';
    }
  });

  -----------------------------------

  // Chame a função mostraCatalogo()
function mudarPagina(paginaAtual) {

  if(paginaAtual == 'catalogo'){
      //Pagina Catálogo
      titulo = 'O Seu local de Trailers';
      console.log(paginaAtual);
      mostraCatalogo();
      //Funcao mostraCatalogo()
      // document.getElementById('catalogo_montagem').onclick = function() {
      //     mostraCatalogo();
      // };
  }
  else if(paginaAtual == 'inserir'){
       //Esconde Pagina catalogo

      //Pagina Inserir Trailer
      titulo = 'Preencha os campos de acordo com o pedido.';
      console.log(paginaAtual);
      //Funcao mostraCatalogo()
      // document.getElementById('catalogo_montagem').onclick = function() {
      //     mostraCatalogo();
      // };
  }
      
  //Alteracoes na pagina
      document.getElementById('apresentacao_conteudo_h1').innerText = titulo;
}