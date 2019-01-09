$('.button-right').click(function() {
    console.log('hi I\'m going right');

    var baseOffset = $('.eve').offsetParent().offset();
    console.log('the offset is', baseOffset);
    $('.eve').offset({
        left: baseOffset.left + 500,
       
    });
});

$('.button-left').click(function() {
    console.log('hi I\'m eve');
    var baseOffset = $('.eve').offsetParent().offset();
    $('.eve').offset({
        left: baseOffset.left,
       
    });
});
