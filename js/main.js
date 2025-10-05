$(document).ready(function () {

    $('.slider-portafolio').slick({
        slidesToShow: 3,       // Número de cards visibles a la vez
        slidesToScroll: 1,     // Cuántas se mueven por clic
        infinite: true,        // Que sea infinito
        arrows: true,          // Muestra flechas
        dots: true,            // Muestra los puntitos de navegación
        autoplay: true,        // Activa autoplay
        autoplaySpeed: 3000,   // Velocidad del autoplay en ms
        responsive: [
            {
                breakpoint: 1024, // Tablets y laptops pequeñas
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 768, // Celulares grandes
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });

    $('.slider-academico').slick({
        slidesToShow: 3,       // Número de cards visibles a la vez
        slidesToScroll: 1,     // Cuántas se mueven por clic
        infinite: true,        // Que sea infinito
        arrows: true,          // Muestra flechas
        dots: true,            // Muestra los puntitos de navegación
        autoplay: true,        // Activa autoplay
        autoplaySpeed: 3000,   // Velocidad del autoplay en ms
        responsive: [
            {
                breakpoint: 1024, // Tablets y laptops pequeñas
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 768, // Celulares grandes
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });

    // Cerrar navbar al hacer clic en enlaces
    $('.nav-link').on('click', function() {
        $('.navbar-collapse').collapse('hide');
    });

});

