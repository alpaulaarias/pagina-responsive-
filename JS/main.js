$(document).ready(function () {
    $('#logo').hover(function() {
        $(this).css('transform', 'rotate(360deg)');
    }, function() {
        $(this).css('transform', 'rotate(0deg)');
    });

    $('#Nombre').hover(function() {
        $(this).animate({ fontSize: '65px' }, 200);
    }, function() {
        $(this).animate({ fontSize: '60px' }, 200);
    });
    
    // Manejo del botón de menú
    $('#btn-menu').click(function () {
        var $btnMenuSpan = $('.btn-menu span');
        var $etiquetas = $('.etiquetas');

        if ($btnMenuSpan.hasClass('fa fa-bars')) {
            $btnMenuSpan.removeClass('fa fa-bars').addClass('fa fa-close');
            $etiquetas.css('left', '0');
        } else {
            $btnMenuSpan.removeClass('fa fa-close').addClass('fa fa-bars');
            $etiquetas.css('left', '100%');
        }
    });

    // Función para verificar si una tarjeta es visible en el viewport
    function esVisible($elemento) {
        var desplazamientoSuperior = $(window).scrollTop();
        var alturaVentana = $(window).height();
        var parteSuperiorElemento = $elemento.offset().top;
        var alturaElemento = $elemento.height();

        return (parteSuperiorElemento + alturaElemento >= desplazamientoSuperior) && (parteSuperiorElemento <= desplazamientoSuperior + alturaVentana);
    }

    // Función para chequear la visibilidad de las tarjetas
    function chequearVisibilidad() {
        $('.card').each(function () {
            var $card = $(this);
            if (esVisible($card) && !$card.hasClass('visible')) {
                $card.addClass('visible').fadeTo(1000, 1).css('transform', 'translateY(0)');
            }
        });
    }

    // Eventos de scroll y resize para chequear visibilidad al cargar y al hacer scroll
    $(window).on('scroll resize', function () {
        chequearVisibilidad();
    });

    // Efecto de zoom al pasar el mouse sobre las tarjetas
    $('.Card').hover(function () {
        $(this).animate({ marginTop: '-10px' }, 200);
    }, function () {
        $(this).animate({ marginTop: '0' }, 200);
    });

    // Animación al hacer hover sobre los botones del formulario
    $('.button-form').hover(function() {
        $(this).stop().animate({
            backgroundColor: '#a2d2ff',
            scale: '1.1'
        }, 300); 
    }, function() {
        $(this).stop().animate({
            backgroundColor: '',
            scale: '1'
        }, 300); 
    });  

    $('.form').hide();
    $('.form').fadeIn(900);
    // Chequear visibilidad al cargar la página
    chequearVisibilidad();
});
