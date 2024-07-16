jQuery(document).ready(function($) {


    /*======= Skillset *=======*/
    
    
    $('.level-bar-inner').css('width', '0');

    function resizeCanvasToDisplaySize(canvas) {
        const width = canvas.clientWidth;
        const height = canvas.clientHeight;

        if (canvas.width !== width || canvas.height !== height) {
            canvas.width = width;
            canvas.height = height;
            return true;
        }

        return false;
    }
    
    $(window).on('load', function () {

        let canvas = document.getElementById('myCanvas');
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;


        $('#header').prepend('<div id="menu-icon"><span class="first"></span><span class="second"></span><span class="third"></span></div>');

        $("#menu-icon").on("click", function () {
            $("nav").slideToggle();
            $(this).toggleClass("active");
        });

        $('.level-bar-inner').each(function() {
        
            var itemWidth = $(this).data('level');
            
            $(this).animate({
                width: itemWidth
            }, 800);
            
        });

    });
   
    

});