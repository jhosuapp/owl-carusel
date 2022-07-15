window.addEventListener('DOMContentLoaded', ()=>{

    function carouselReuse(
        clase,
        items = 4,
        loop = false,
        margin = 10,
        nav = false, imgL = "../sources/img/left.svg", imgR = "../sources/img/right.svg",
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

        //CREAR NAV Y DOTS
        var objectToArrray = Object.values(clase);

        if(nav){
            objectToArrray[0].classList.add('owl-carousel__nav-active');

            let getOwlNav = document.querySelectorAll('.owl-carousel__nav-active .owl-nav button');

            let createImageLeft = document.createElement('img');
            let createImageRight = document.createElement('img');

            createImageLeft.classList.add('owl-carousel__nav-active__left');
            createImageRight.classList.add('owl-carousel__nav-active__right');

            createImageLeft.setAttribute('src', imgL);
            createImageRight.setAttribute('src', imgR);

            getOwlNav[0].append(createImageLeft);
            getOwlNav[1].append(createImageRight);
        }

        
        dots == true ? objectToArrray[0].classList.add('owl-carousel__dots-active') : ()=>{return false};

    }

    var getOwlCarouselTwoitems = $(".owl-carousel.owl-carousel__two-items");
    carouselReuse(
        getOwlCarouselTwoitems, 
        undefined,
        false,
        false,
        true,
        undefined,
        undefined,
        false,
        0,
        true,
        1,
        2,
        2,
        2,
    );


    var getOwlCarouselItem = $(".owl-carousel");
    carouselReuse(getOwlCarouselItem,
        undefined,
        false,
        false,
        false
    );


});

