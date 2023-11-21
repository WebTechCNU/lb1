// забезпечує виклик функції після завантаження документа
$(document).ready(function() {
    // зробити фонове зображення повноекранним
    $('.header').height($(window).height());

    // відслідковуємо зміни розміру вікна
    $(window).resize(function() {
        $('.header').height($(window).height());
    });
});
