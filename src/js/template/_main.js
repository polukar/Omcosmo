//Аккордеоны
let acc = document.getElementsByClassName('question');
let i;
    for (i=0; i < acc.length; i++)
        acc[i].onclick = function () {
            this.classList.toggle('active');
            this.nextElementSibling.classList.toggle('invisible');
        };

let accPrice = document.getElementsByClassName('price-list__headline');
let n;
for (n=0; n < accPrice.length; n++)
    accPrice[n].onclick = function () {
        console.log('123');
        this.classList.toggle('active');
        this.nextElementSibling.classList.toggle('invisible');
    };

//Мобильное меню
(function($){
    $(function() {
        $('.mobile-btn').on('click', function() {
            $('div.mobile-menu').toggleClass('active');
        });
    });
})(jQuery);

(function($){
    $(function() {
        $('.btn-close').on('click', function() {
            returnDefault();
            $('div.mobile-menu').toggleClass('active');
        });
    });
})(jQuery);

(function($){
    $(function() {
        $('.sub-1').on('click', function() {
            $('#mobile-menu__main').toggleClass('active');
            $('#mobile-menu__sub-1').toggleClass('active');
        });
    });
})(jQuery);

(function($){
    $(function() {
        $('.btn-back').on('click', function() {
            returnDefault();
            $('div.mobile-menu').addClass('active');
        });
    });
})(jQuery);

function returnDefault() {
    $('#mobile-menu__main').addClass('active');
    $('#mobile-menu__sub-1').removeClass('active');
}


// Плагин twentytwenty
$(window).load(function() {
    $("#before-after").twentytwenty();
    $("#before-after-about").twentytwenty();
})(jQuery);
