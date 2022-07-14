window.addEventListener('DOMContentLoaded', ()=>{

    function carouselReuse(
        clase,
        items = 4,
        loop = false,
        margin = 10,
        nav = false,
        autoplay = false,
        autoplayTimeout = 0,
        dots = false,
        mobile = 1,
        ipadPequeña = 2,
        ipadGrande = 3,
        desktop = 4
        ){
        clase.owlCarousel({
            items : items, //NUMERO DE ITEMS
            loop: loop, // HACE AL CAROUSEL INFINITO
            margin: margin, //MARGEN ENTRE ELEMENTOS
            nav: nav, //AGREGAR NAVEGACIÓN(FLECHAS)
            autoplay: autoplay, //AGREGAR AUTOPLAY
            autoplayTimeout: autoplayTimeout, //TIEMPO DEL AUTOPLAY
            dots: dots, //PARA OCULTAR O MOSTRAR LOS DOTS
            responsive: { //RESPONSIVE
                0:{
                    items: mobile
                },
                576:{
                    items: ipadPequeña
                },
                992:{
                    items: ipadGrande
                },
                1440:{
                    items: desktop
                }
            }
        });

        //CREATE CLASES DOM

        if(dots == true){
            console.log('hola');
        }

        if(nav == true){
            console.log('hola');
        }
    }

    var getOwlCarouselTwoitems = $(".owl-carousel.owl-carousel__two-items");
    var object = Object.values(getOwlCarouselTwoitems)

    object.forEach((data, indice)=>{
        if(indice == 0){
            data.classList.add('active');
        }
    });

    carouselReuse(getOwlCarouselTwoitems, undefined, true);


    var getOwlCarouselItem = $(".owl-carousel");
    carouselReuse(getOwlCarouselItem, undefined, false);




});

