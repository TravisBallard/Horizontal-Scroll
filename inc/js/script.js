jQuery(document).ready( function($){

    var win_height = $(document).height() - $(window).height();
    var box_width = $('#bar').width();

    $(window).scroll( function(){
        var pos = ( $(window).scrollTop() / win_height ) * ( box_width - $('#bar span').width() );
        $('#bar span').css({ left: pos + 'px' });
    } );

} );
