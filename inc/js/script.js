jQuery(document).ready( function($){

    var win_height = $(window).height();
    var box_width = $('#bar').width();

    console.log( 'win height: ' + win_height );

    $(window).scroll( function(){
        var pos = ( win_height / $(window).scrollTop() ) * box_width / 100;
        console.log( $(window).scrollTop() );
        $('#bar span').animate({left: pos + '%' }, 100 );
    } );

} );