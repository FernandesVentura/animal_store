$(document).ready(function () {
    $('.opcao-animal').click(function(e) {
        e.preventDefault();

        const destino = $('#form');
        const opcaoDesejada = $(this).data('pet');

        $('#opcao').val(opcaoDesejada);

        $('html').animate({
            scrollTop: destino.offset().top
        }, 500);
    })
    
    $("#telefone").mask('(+351) 000-000-000' );

    
})