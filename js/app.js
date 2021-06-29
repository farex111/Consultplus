$(document).ready(function () {
    // მენიუში ფერების დატოვება
    $('.nav-link').on('click', function(){
        $('.nav-link').removeClass('target');
        $(this).addClass('target');
    });
    
    // პირველი ფაილის ჩატვირთვა
    $(".output").load('home.html');

    // Ajax ფუნქცია
    $(".nav-link").click(function (e) { 
        e.preventDefault();
        $.ajax({
            type: "GET",
            url: $(this).attr("href"),
        }).done(function(data){
            $(".output").html(data);
        });
    });
});