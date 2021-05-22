$(document).ready(function () {

    //Arreglo para la lista de tarjetas
    let listadoTarjetas = [{'tit': 'Café molido',
                            'srcIni' : 'resources/images/cafe_molido.png',
                           'srcFin': 'resources/images/molido_mini.jpg' }, 
                           {'tit':'Capuchino',
                           'srcIni' : 'resources/images/capuchino.png' ,
                           'srcFin': 'resources/images/capuchino_mini.png'}, 
                           {'tit': 'Café Mocca',
                           'srcIni' : 'resources/images/cafe_mocca.png',
                           'srcFin': 'resources/images/mocca_mini.png' }, 
                           {'tit': 'Bebida',
                           'srcIni' : 'resources/images/cafe_bebida.png',
                           'srcFin': 'resources/images/cafe_bebida_mini.png'}, 
                           {'tit': 'Café Negro',
                           'srcIni' : 'resources/images/cafe_negro.png',
                           'srcFin': 'resources/images/cafe_negro_mini.png'}];

    for (let i=0; i < listadoTarjetas.length; i++){

        let imagenIni = listadoTarjetas[i].srcIni;
        let titArticle = listadoTarjetas[i].tit;

        let textoHtml = '<article class=\"miTarjeta\">' +
                        '<figure class=\"info text"\> ' +
                        '<img src=\"' + imagenIni + '\" alt=\"\">' +
                       '<figcaption>' + titArticle + '</figcaption> ' +
                       ' <p>Lorem ipsum dolor sit, <br> amet consectetur adipisicing elit. <br>Consequatur, id earum neque<br> labore quo alias voluptatum <br>voluptatem delectus animi ipsum.</p>' +
                    '</article>  ' +
                        '</figure> '
                       ;
        
        $('#listaTarjetas').append(textoHtml);
        //Funcion toggle
        $("button").click(function(){
            $("nav").toggle();
        });
    }
    

    // Funcionalida de cuando la pantalla cambia de tamaño - Ancho
    $(window).resize(function (){
        let anchoPantalla = window.innerWidth;
        //mostrar u ocultar info
        if (anchoPantalla < 920) {
            $('#listaTarjetas article p').hide();
        } else{
            $('#listaTarjetas article p').show();
        }
        //Cambio de color fondo
        if (anchoPantalla < 920) {
            $('#mainImg img').hide();
            $('body').css("background-color", "rgb(199, 189, 175)");
        } else{
            $('#mainImg img').show();
            $('body').css("background-color", "white");
        }
        //visibilidad del boton 
        if (anchoPantalla < 920) {
            $('#boton').show();
        } else{
            $('#boton').hide();
        }
        //Cambio del menu horizontal a vertical
        if (anchoPantalla < 920) {
          $('ul').removeClass("menu");
        } else{
          $('ul').addClass("menu");
        }   
        
    });   
});