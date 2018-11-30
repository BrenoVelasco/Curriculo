// Initialize a Code Mirror's instance
$(document).ready(function(){
  var code = $(".codemirror-textarea")[0];
  var editor = CodeMirror.fromTextArea(code, {
    lineNumbers: true,
    mode: 'ruby',
    theme: 'material',
    readOnly: true,
    lineWrapping: true
  });
});

// Removes anchor hashes from url
$(document).on('click', function(evt) {
  if (evt.target.hash === '#about' || evt.target.hash === '#experience' || evt.target.hash === '#courses' || evt.target.hash === '#academic') {
    console.log(evt.target.hash)
    $('html, body').animate({ scrollTop: $( evt.target.hash ).offset().top }, 100);
    return false;
  } 
});

// Scroll to top when home logo is clicked
$("#home").click(function(){
  $(window).scrollTop(0);
});

// Changes Carousel's transition duration
$('.carousel').carousel({
   interval: 4000
  });

// Calls Bootstrap's popover method
$(function(){
  $('[data-toggle="popover"]').popover()
})

// Controls active navbar's list-items after click action
$('li > a').click(function() {
    $('li').removeClass();
    $(this).parent().addClass('active');
});

// Closes navbar after list-item click
$('.navbar-nav>li>a').on('click', function(){
    $('.navbar-collapse').collapse('hide');
});

// =)
$('#velascoPhoto').on('click', function(){
  var messages = ['Hello, World!', 'Contrata eu, por favor =´(', 'I <3 Ruby', '"Building the future and keeping the past alive are one and the same thing" - Solid Snake.', 'Instrumentalizando no violão e no violino desde 2011.', 'Breaking Bad só perde para The Sopranos.'];
  var randomMessage = Math.round(Math.random()*messages.length-1);
  console.log(messages[randomMessage]);
});
