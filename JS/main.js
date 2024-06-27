$(document).ready(function () {
    $('#btn-menu').click(function () {
        if ($('.btn-menu span').attr('class') == 'fa fa-bars') {
            $('.btn-menu span').removeClass('fa fa-bars').addClass('fa fa-close');
            $('.etiquetas').css({ 'left': '0' });
        } else {
            $('.btn-menu span').removeClass('fa fa-close').addClass('fa fa-bars');
            $('etiquetas').css({ 'left': '100%' });
        }
    })
    // Función para verificar si una tarjeta es visible en el viewport
    function esVisible($elemento) {
        var desplazamientoSuperior = $(window).scrollTop();
        var alturaVentana = $(window).height();
        var parteSuperiorElemento = $elemento.offset().top;
        var alturaElemento = $elemento.height();
        
        return ((parteSuperiorElemento + alturaElemento >= desplazamientoSuperior) && (parteSuperiorElemento <= (desplazamientoSuperior + alturaVentana)));
    }

    // Chequear la visibilidad de las tarjetas al cargar la página y al hacer scroll
    function chequearVisibilidad() {
        $('.card').each(function() {
            var $card = $(this);
            if (esVisible($card) && !$card.hasClass('visible')) {
                $card.addClass('visible').fadeTo(1000, 1).css('transform', 'translateY(0)');
            }
        });
    }

    $(window).on('scroll resize', chequearVisibilidad);
    $('.Card').hover(function() {
        $(this).animate({ marginTop: '-10px' }, 200);
    }, function() {
        $(this).animate({ marginTop: '0' }, 200);
    });
    chequearVisibilidad(); 

});