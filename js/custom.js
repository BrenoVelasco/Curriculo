// Inicializa uma instância de Code Mirror para o visual de editor no site
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

// Muda o tempo de transição do Carousel
$('.carousel').carousel({
   interval: 4000
  });

// Chama o método popover do Bootstrap
$(function(){
  $('[data-toggle="popover"]').popover()
})

// Faz o controle de list-items ativas da navbar após ação de clique
$('li > a').click(function() {
    $('li').removeClass();
    $(this).parent().addClass('active');
});

// Fecha a navbar ao clique de algum list-item
$('.navbar-nav>li>a').on('click', function(){
    $('.navbar-collapse').collapse('hide');
});

// =)
$('#fotoVelasco').on('click', function(){
  var messages = ['Hello, World!', 'Contrata eu, por favor =´(', 'I <3 Ruby', '"Building the future and keeping the past alive are one and the same thing" - Solid Snake.', 'Instrumentalizando no violão e no violino desde... 2011, eu acho.', 'Breaking Bad só perde para The Sopranos.'];
  var randomMessage = Math.round(Math.random()*messages.length-1);
  console.log(messages[randomMessage]);
});
