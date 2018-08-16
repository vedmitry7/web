$('.message a').click(function(){
    $('form').animate({height: "toggle", opacity: "toggle"}, "slow");
});


var socket = io();

$(function(){

    var socket = io();

    socket.on('new message', function (data) {
        console.log(data);
    });

    $(".loginButton").on("click", function(){
        var login = $('.loginText').val();
        var password = $('.passwordText').val();

        $.ajax({
            type: "POST",
            dataType: "json",
            contentType: "application/json; charset=utf-8",
            url: "/",
            data: '{ login:' + login + ', password:' + password + '}',
            success: function(msg, e){
                alert('wow '+msg);
                location.href = msg;
            },
            error: function (a,b,c) {
                console.log(a)
            }
        });

        console.log(login + " " + password);
    });


});