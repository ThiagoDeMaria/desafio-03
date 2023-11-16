   
    // Criando lista no Js (Arrays)
    var listaFilmes = [
        {imagem: 'https://upload.wikimedia.org/wikipedia/pt/thumb/1/1b/Schoolrockposter.jpg/210px-Schoolrockposter.jpg', nome: 'Escola do Rock', link: 'https://www.youtube.com/embed/TExoc0MG4I4?si=XhhD15g3Wl8BQ6Sz&autoplay=1'},
        {imagem: 'https://media.fstatic.com/b5SBe_6din_sIgNTHD97j4n1L28=/322x478/smart/filters:format(webp)/media/movies/covers/2014/10/john-wick_t78749.jpg', nome:'De Volta ao Jogo' , link: 'https://www.youtube.com/embed/rUKOAwlyNag?si=ZGhpspcDJc2o9RV3&autoplay=1'},
        {imagem: 'https://musicart.xboxlive.com/7/94fc5000-0000-0000-0000-000000000002/504/image.jpg', nome:'Spiderman no Aranhaverso' , link: 'https://www.youtube.com/embed/SS6ABPkfmBE?si=O_71G8y8YQfFu4Vh&autoplay=1'},
        {imagem: 'https://1.bp.blogspot.com/-ImZPRqLsluE/WFK156_6pNI/AAAAAAAAYBY/0lEhNRF5wfQdLfr6hpT57_Jt2eBrE9H5wCLcB/s1600/arrival-kartoun-desert.jpg', nome:'A Chegada' , link: 'https://www.youtube.com/embed/rNciXGzYZms?si=aclhdae07eXSBgMl&autoplay=1'},
        {imagem: 'https://br.web.img2.acsta.net/medias/nmedia/18/91/08/82/20128877.jpg', nome:'Matrix' , link: 'https://www.youtube.com/embed/2KnZac176Hs?si=WimJ88IBqozYA_ZW&autoplay=1',},
        {imagem: 'https://img.elo7.com.br/product/original/2657A05/big-poster-harry-potter-e-o-prisioneiro-de-azkaban-lo2-90x60-geek.jpg', nome:'Harry Potter e o Prisioneiro de Azkaban' , link: 'https://www.youtube.com/embed/e02fwhC6DiQ?si=B_zuMGLf1eHNXBpv&autoplay=1'},
        {imagem: 'https://br.web.img3.acsta.net/pictures/19/04/26/17/30/2428965.jpg', nome:'Vingadores: Ultimato' , link: 'https://www.youtube.com/embed/PgrmbRID0eY?si=pCLgLP39zZq0dc3c&autoplay=1'},
        {imagem: 'https://www.claquete.com.br/fotos/filmes/poster/15405_medio.jpg', nome:'WONKA' , link: 'https://www.youtube.com/embed/i4236tIVEkM?si=5tKRn5ZLA1ocdGag&autoplay=1'},
        {imagem: 'https://www.tvguide.com/a/img/catalog/provider/1/2/1-172521311.jpg', nome:'A Origem' , link: 'https://www.youtube.com/embed/HiixbtN-O24?si=phZ-zk7UhSp-FU7G&autoplay=1'},
        {imagem: 'https://br.web.img2.acsta.net/pictures/23/05/08/10/29/0695770.jpg', nome:'OPPENHEIMER' , link: 'https://www.youtube.com/embed/F3OxA9Cz17A?si=Wdhb5tMageStZRaR&autoplay=1'},
        {imagem: 'https://br.web.img3.acsta.net/pictures/20/05/19/20/45/1889845.jpg', nome:'TENET' , link: 'https://www.youtube.com/embed/ASTU3rFyOm4?si=BQCsSatsCe6pAgxA&autoplay=1'}
    ];

    var mostraCatalogo = document.querySelector('.catalogo');

    // Escreve na pagina HTML
    for(i = 0; i < listaFilmes.length; i ++){
        
        //Verifica se é imagem.
        if((listaFilmes[i].imagem.endsWith('jpg')) || (listaFilmes[i].imagem.endsWith('jpeg'))){

            var estruturaFilme = `
            <div class="filme">
                <a href="#" onclick="abrirPopup('${listaFilmes[i].link}')">
                <img src="${listaFilmes[i].imagem}">
                <p class="texto_filme">${listaFilmes[i].nome}</p>
                </a>
            </div>
        `
        mostraCatalogo.innerHTML += estruturaFilme;

        }
        else{
            alert('A imagem de  ' + listaFilmes[i].nome + ' não foi lida pois não é um arquivo do tipo jpeg ou jpg');
        }       
        
    }

//Popup do Trailer (Ajuda do ChatGPT)
function abrirPopup(url) {

    // Define as dimensões da janela popup
    var largura = 1280;
    var altura = 720;

    // Calcula o centro da tela para posicionar a janela popup
    var esquerda = (window.innerWidth - largura) / 2;
    var topo = (window.innerHeight - altura) / 2;

    // Cria a string de opções para a janela popup
    var opcoes = 'width=' + largura + ',height=' + altura + ',left=' + esquerda + ',top=' + topo;

    // Abre a janela popup com o iframe do YouTube
    window.open(url, 'popupYouTube', opcoes);
  }