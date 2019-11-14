var i = 0;

setInterval(function() {
    $('#test').append($('<div>').html(i + '<br/>'));
    i++
}, 2000);
