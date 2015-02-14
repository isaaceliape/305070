var documentHeight = window.innerHeight;
var sections       = $('.projects');
var sectionsCount  = $('.projects').length;
var itemCurrentPos = 1;


$(document).ready(function() {
  $('.projects, .projects .content').height(documentHeight);

  $('body').height(documentHeight * sectionsCount);
  sections.each(function(index, el) {
    $(el)
      // .height(documentHeight)
      .css('z-index',sectionsCount - index);
  });

  window.onscroll = function(e) {
    if($(sections).eq(itemCurrentPos-1).height() <= 0){
      itemCurrentPos++;
    }else if($(sections).eq(itemCurrentPos-1).height() > documentHeight){
      itemCurrentPos--;
    }
    $(sections).eq(itemCurrentPos-1).height((documentHeight*itemCurrentPos) - window.scrollY);
  }
});

