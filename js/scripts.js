$(function() {
    $('.jumbotron').fadeIn(1000);
    $('h1').fadeIn();
    $('.jumbotron').hover(function() {
      $('h1').fadeOut(function() {
        $('h1').text('are you...');
        $('h1').fadeIn();
        $('input[name=question1]').delay(500).fadeIn();
        $('span.q1').fadeIn(1000);
      });
  });
  $(function() {
    $('input[value=bored]').click(function() {
      $('.h1').fadeOut();
      $('input[name=question1]').fadeOut();
      $('span.q1').fadeOut(function() {
        $('h1').text('why?');
        $('h1').fadeIn();
        $('input[name=question2]').fadeIn();
        $('span.q2').fadeIn();
      });
    });
  });
});

// $(function() {
//   $('input[name=question1]').click(function() {
//     alert('click');
//   });
// });


//code from--> http://jsfiddle.net/6czap/3/
// $(function() {
// var $el = $(".textfade:first"), text = $.trim($el.text()),
//     words = text.split(" "), html = "";
//
// for (var i = 0; i < words.length; i++) {
//     html += "<span>" + words[i] + ((i+1) === words.length ? "" : " ") + "</span>";
// };
// $el.html(html).children().hide().each(function(i){
//   $(this).delay(i*500).fadeIn(1000);
// });
// $el.find("span").promise().done(function(){
//     $el.text(function(i, text){
//        return $.trim(text);
//      });
//     });
// });
