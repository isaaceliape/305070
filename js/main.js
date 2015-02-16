var documentHeight = window.innerHeight;
var sections       = $('.projects');
var sectionsCount  = $('.projects').length;
var worksWidth     = $('.content-works .work').width();
var worksCount     = $('.content-works .work').length;
var itemCurrentPos = 1;

function updateSizes(){
  documentHeight = window.innerHeight;
  sections       = $('.projects');
  sectionsCount  = $('.projects').length;

  $('.projects, .projects .content').height(documentHeight);

  $('body').height(documentHeight * sectionsCount);
  sections.each(function(index, el) {
    $(el).css('z-index',sectionsCount - index);
  });
}

$(document).ready(function() {
  updateSizes();

  window.onscroll = function(e) {
    if($(sections).eq(itemCurrentPos-1).height() <= 0){
      itemCurrentPos++;
    }else if($(sections).eq(itemCurrentPos-1).height() > documentHeight){
      itemCurrentPos--;
    }
    $(sections).eq(itemCurrentPos-1).height((documentHeight*itemCurrentPos) - window.scrollY);
  }

  $(window).bind('resize', function(e){
      window.resizeEvt;
      $(window).resize(function(){
          clearTimeout(window.resizeEvt);
          window.resizeEvt = setTimeout(function(){
            updateSizes();
          }, 250);
      });
  });
  
});



