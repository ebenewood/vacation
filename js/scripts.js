$(function() {
  $('.jumbotron').hover(function() {
    $('.question').fadeIn();
    $('.test').delay(1000).fadeIn(200);
  });
});

//code from--> http://jsfiddle.net/6czap/3/
$(function() {
var $el = $(".textfade:first"), text = $.trim($el.text()),
    words = text.split(" "), html = "";

for (var i = 0; i < words.length; i++) {
    html += "<span>" + words[i] + ((i+1) === words.length ? "" : " ") + "</span>";
};
$el.html(html).children().hide().each(function(i){
  $(this).delay(i*500).fadeIn(1000);
});
$el.find("span").promise().done(function(){
    $el.text(function(i, text){
       return $.trim(text);
     });
    });
});
