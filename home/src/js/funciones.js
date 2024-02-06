$(document).ready(function() {
    // fija el menu cuando pasas la página
    $(".masthead").visibility({
        once: false,
        //oculta y desoculta el menu según la clase "movil" o "computadora"
        onBottomPassed: function() {
        $("#menuComputadora").transition("fade in");
        $("#menuMovil").transition("fade in");
        },
        onBottomPassedReverse: function() {
        $("#menuComputadora").transition("fade out");
        $("#menuMovil").transition("fade out");
        }
    });
    $(".secondhead").visibility({
        once: false,
        //oculta y desoculta el menu según la clase "movil" o "computadora"
        onBottomPassed: function() {
        $("#menuComputadora").transition("fade in");
        $("#menuMovil").transition("fade in");
        },
        onBottomPassedReverse: function() {
        $("#menuComputadora").transition("fade out");
        $("#menuMovil").transition("fade out");
        }
    });
    // create sidebar and attach to menu open
    $(".ui.sidebar").sidebar("attach events", ".toc.item");
    // tarjetas con blur
    $('.special.cards .image').dimmer({
        on: 'hover'
    });
    //blur para el slider
    $('.slide .image').dimmer({
        on: 'hover'
    });
    //menú dropdown
    $('.ui.dropdown')
        .dropdown()
    ;
    //acordeones
    $('.ui.accordion')
        .accordion()
    ;
    // popups
    $('.ver.mas')
        .popup()
    ;
    // Modal de aviso de privacidad xd
    $('#avisoPrivacidad').click(function() {
        $('#privacidad')
            .modal('show')
        ;
    });
    // Modal de aviso de bolsa de trabajop3 xd
    $('#bolsaTrabajo').click(function() {
        $('#bolsa')
            .modal('show')
        ;
    });
});
