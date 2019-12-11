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
//Вызов главного меню
(function($){
    $(function() {
        $('.mobile-btn').on('click', function() {
            $('div.mobile-menu').toggleClass('active');
        });
    });
})(jQuery);

//Закрытие меню. По нажатию на кнопку закрыть меню все классы сбрасываются по умолчанию
(function($){
    $(function() {
        $('.btn-close').on('click', function() {
            returnDefault();
            $('div.mobile-menu').toggleClass('active');
        });
    });
})(jQuery);

//Открытие первого подменю
(function($){
    $(function() {
        $('.sub-1').on('click', function() {
            $('#mobile-menu__main').toggleClass('active');
            $('#mobile-menu__sub-1').toggleClass('active');
        });
    });
})(jQuery);
//Нажатие на кнопку назад из первого подменю
(function($){
    $(function() {
        $('.btn-back').on('click', function() {
            returnDefault();
            $('div.mobile-menu').addClass('active');
        });
    });
})(jQuery);
//Нажатие на кнопку назад из второго подменю
(function($){
    $(function() {
        $('.btn-back-1').on('click', function() {
            $('.sub-3').removeClass('active');
            $('#mobile-menu__sub-1').addClass('active');
        });
    });
})(jQuery);

//Открытие второго поменю
(function($){
    $(function() {
        $('.sub-2').on('click', function() {
            $menu = "#" + this.dataset.menu;
            $('#mobile-menu__sub-1').removeClass('active');
            $($menu).addClass('active');
        });
    });
})(jQuery);


//Функция сброса классов по умолчанию
function returnDefault() {
    $('#mobile-menu__main').addClass('active');
    $('#mobile-menu__sub-1').removeClass('active');
    $('.sub-3').removeClass('active');
}



// Плагин twentytwenty
$(window).load(function() {
    $("#before-after").twentytwenty();
    $("#before-after-about").twentytwenty();
});

//Маска ввода телефона
$(document).ready(function() {
    $(".phone-mask").mask("+7 (999) 999-99-99");
});


// Модальное окно
function showModal() {
    $('.modal-bg').fadeIn();
    $('.send-form').fadeIn();
}
// открыть по кнопке
$('.popup').click(function() {
    showModal();
});

// закрыть на крестик
$('.close-modal-btn').click(function() {
    $('.modal-bg').fadeOut();
    $('.send-form').fadeOut();
});
// закрыть по клику вне окна
$(document).mouseup(function (e) {
    var popup = $('.send-form');
    // var popupQuestion = $('.modal-content');
    if (e.target!=popup[0]&&popup.has(e.target).length === 0){
        $('.send-form').fadeOut();
        $('.modal-bg').fadeOut();
    }
});
