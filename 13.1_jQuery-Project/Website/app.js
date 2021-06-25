$('img').on('click', function () {
  $(this).css('border', '10px solid purple')
})

$('img').on('click', function () {$(this).animate({
    opacity: 0,
    width: '50px',
    $(this).remove();
  })
})

$('#add-input').on('click', function () {
  $('form').append('<input type="text"/>');
})

$('form').on('focus', 'input', function () {
  $(this).val('lol no')
})