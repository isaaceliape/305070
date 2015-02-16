var documentHeight = window.innerHeight;
var sections       = $('.projects');
var sectionsCount  = $('.projects').length;
var worksWidth     = $('.content-works .work').width();
var worksCount     = $('.content-works .work').length;
var itemCurrentPos = 1;
var isInnerPage    = (($('body').hasClass('inner-page')) ? true : false);  
var pagination     = $('.pagination');
var topPositions   = [];


function updateSizes(){
  documentHeight = window.innerHeight;
  sections       = $('.projects');
  sectionsCount  = $('.projects').length;

  $('.projects, .projects .content').height(documentHeight);
  $('body').height(documentHeight * sectionsCount);

  if(isInnerPage === false){
    sections.each(function(index, el) {
      $(el).css('z-index',sectionsCount - index);
    });
  }
}

$(document).ready(function() {
  updateSizes();
  if(sectionsCount < 10){
    pagination.html("01/0"+sectionsCount);
  }else{
    pagination.html("01/"+sectionsCount);
  }

  window.onscroll = function(e) {

    if(isInnerPage === false){
      if($(sections).eq(itemCurrentPos-1).height() <= 0){
        itemCurrentPos++;
      }else if($(sections).eq(itemCurrentPos-1).height() > documentHeight){
        itemCurrentPos--;
      }
      $(sections).eq(itemCurrentPos-1).height((documentHeight*itemCurrentPos) - window.scrollY);
    }else{
      $.each(topPositions, function(index, val) {
        if (window.scrollY >= val){
          if(index < 10){
            index++
            pagination.html("0"+index+"/0"+sectionsCount);
          }else{
            pagination.html(index+1+"/"+sectionsCount);
          }
        };
      });
    }
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

  sections.each(function( index ) {
    topPositions.push($(this).offset().top);
  });
});



