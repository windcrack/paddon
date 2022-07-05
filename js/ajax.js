$('.send').on('click', function(){
    $.ajax({
        type: 'post',
        url: '../php/sendMail.php',
        success: function(){
            alert('Заявка была отправлена');
        },
        error: function(){
            alert('Опачки, что-то пошло не так');
        }
    })
})