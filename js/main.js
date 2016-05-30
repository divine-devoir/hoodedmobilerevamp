$(document).on('ready',function(){
  $(".foo-hamburger").on('click',function(){
    $(".navmobile-wrapper").toggle();
  });
  //scroll to with offset
  var buffer = 20;
  var offset = buffer + $('.nav-main').outerHeight(true);
  console.log(offset);


  $('body').css('margin-top', offset);
    $('.navdesktop-wrapper').outerHeight(true);


  $('.navmobile-wrapper a').on('click',function(event){

    console.log(event);

    event.preventDefault();

    var pageToScrollTo = $(this).attr('href');


    $(window).scrollTo(/*can put to content inside of section*/pageToScrollTo, 800, {offset: -offset});

  });
  $('.navdesktop-wrapper a').on('click',function(event){

    console.log(event);

    event.preventDefault();

    var pageToScrollTo = $(this).attr('href');


    $(window).scrollTo(/*can put to content inside of section*/pageToScrollTo, 800, {offset: -offset});

//end scrollTo

//responsive youtube iframe

function adjustIframes()
{
  $('iframe').each(function(){
    var
    $this       = $(this),
    proportion  = $this.data( 'proportion' ),
    w           = $this.attr('width'),
    actual_w    = $this.width();

    if ( ! proportion )
    {
        proportion = $this.attr('height') / w;
        $this.data( 'proportion', proportion );
    }

    if ( actual_w != w )
    {
        $this.css( 'height', Math.round( actual_w * proportion ) + 'px' );
    }
  });
}
$(window).on('resize load',adjustIframes);

//end responsive iframe


//responsive images
function adjustImages()
{
  $('resImage').each(function(){
    var
    $this       = $(this),
    proportion  = $this.data( 'proportion' ),
    w           = $this.attr('width'),
    actual_w    = $this.width();

    if ( ! proportion )
    {
        proportion = $this.attr('height') / w;
        $this.data( 'proportion', proportion );
    }

    if ( actual_w != w )
    {
        $this.css( 'height', Math.round( actual_w * proportion ) + 'px' );
    }
  });
}
$(window).on('resize load',adjustImages);
//end responsive images





});
})
