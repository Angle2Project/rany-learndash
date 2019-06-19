import $ from "jquery";
import Swiper from 'swiper';

$(document).ready(function(){

  $(document).click(function(e){
    if($(e.target).closest('.outclose').length == 0 && $(e.target).closest('[data-action]').length == 0 && !$(e.target).attr('data-action')){
      $('.outclose').fadeOut(150);
    }
  });

  var mySwiper = new Swiper ('.swiper-container', {
    slidesPerView: 'auto',
    spaceBetween: 60,

    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },

    // Navigation arrows
    navigation: {
      nextEl: '.landing__testimonials_head .next',
      prevEl: '.landing__testimonials_head .prev',
    }    
    
  });

  $('.form-control').each(function(i, el){
    var l = $.trim($(el).val()).length;
    if(l > 0)$(el).addClass('filled');    
  });

  $('.form-control').keyup(function(e){
    var l = $.trim($(this).val()).length;
    if(l > 0)$(this).addClass('filled');
  });

  $('[data-action="landing-hit-switch"] li').click(function(e){
    var target = $(this).attr('data-target');
    $('[data-action="landing-hit-switch"] li').removeClass('current');
    $(this).addClass('current');
    $(this).closest('.landing__hit').toggleClass('retailer supplier');
  });


  //Header
  $('header .header__category_icon').mouseenter(function(e){    
    $('.header__category_menu').fadeIn(150);
  });
  $('.header__category').mouseleave(function(e){
    $('.header__category_menu').fadeOut(150);
  });
  $('.header__category .menu--list li').mouseenter(function(e){
    $('.header__category .menu--list li').removeClass('hover');
    $(this).addClass('hover');
    if($(this).find('ul').length){
      var sub = $(this).find('ul');
      $('.header__category .menu--sub').html(sub.clone());
    }        
  });  


  $('.featured-course .featured_head .tabs li').click(function(e){
    if($(this).hasClass('current'))return;
    var id = $(this).attr('data-id');
    $('.featured-course .featured_head .tabs li').removeClass('current');
    $(this).addClass('current');
    $(this).closest('.featured').find('.tabs-body li').removeClass('current');
    $(this).closest('.featured').find('.tabs-body li#'+id).addClass('current');
  });

  $('.popular-topics ul li').click(function(e){
    $('.popular-topics ul li').removeClass('current');
    $(this).addClass('current');
  });


  $('.course.details [data-action="details-more-content"]').click(function(e){
    console.log($(this).closest('.descriptions').find('.toggle .toggle--wrapper').height());
    if($(this).closest('.descriptions').hasClass('open')){
      $(this).closest('.descriptions').removeClass('open').find('.toggle').removeAttr('style');
    }else{
      var h = $(this).closest('.descriptions').find('.toggle .toggle--wrapper').height() + 30;
      $(this).closest('.descriptions').addClass('open').find('.toggle').css('max-height', h);
    }    
    e.preventDefault();
  });
  $('.course.details .details__table .content .content--list .list--title').click(function(e){
    if($(this).closest('li').hasClass('open')){
      $(this).closest('li').removeClass('open').find('.list--sub').slideUp(150);
    }else{
      $(this).closest('li').addClass('open').find('.list--sub').slideDown(150);
    }    
    
  });
  if($('body').hasClass('course-details')){
    $(document).scroll(function(e){
      var p = 100 / (196 / $(document).scrollTop());
      var headPadding = (40 / 100) * p;
      var headOpacity = (0.2 / 100) * p;
      var headHeight = (196 / 100) * p;
      var headDescriptionHeight = (56 / 100) * p;
      var headDescriptionMargin = (16 / 100) * p;
      var headStat = (12 / 100) * p;
      var headTabs = (41 / 100) * p;
      var asidePreview = (222 / 100) * p;
      var asideInfoHeight = (25 / 100) * p;
      var asideInfoMargin = (20 / 100) * p;      
      if(p < 100 && p > 0){
        $('.details__head h4').css('marginTop', 60 - headPadding);
        $('.details__head').css({'opacity': 1 - headOpacity, 'height': 310 - headHeight});
        $('.details__head_description').css({'maxHeight': 56 - headDescriptionHeight, 'marginTop': 16 - headDescriptionMargin});
        $('.details__head_stat').css('marginTop', 24 - headStat);
        $('.details__head_tabs').css('maxHeight', 41 - headTabs);

        $('.details__table aside .preview').css('maxHeight', 222 - asidePreview);
        $('.details__table aside .info').css({'maxHeight': 25 - asideInfoHeight, 'marginTop': 20 - asideInfoMargin})
        if($(document).scrollTop() >= 40) {
          $('.details__table aside').css({'position': 'fixed', 'marginTop': -290});
        }else {
          $('.details__table aside').removeAttr('style');
        }
      }else if(p > 100){
        $('.details__head h4').css('marginTop', 20);
        $('.details__head').css({'opacity': 0.8, 'height': 114});
        $('.details__head_description').css({'maxHeight': 0, 'marginTop': 0});
        $('.details__head_stat').css('marginTop', 12);
        $('.details__head_tabs').css('maxHeight', 0);
        $('.details__table aside .preview').css('maxHeight', 0);
        $('.details__table aside .info').css({'maxHeight': 0, 'marginTop': 0})
        $('.details__table aside').css({'position': 'fixed', 'marginTop': -290});

        var ar = $('.details__table article').height() + 450 - $(document).scrollTop() + 70;
        var as = $('.details__table aside').height() + 450 - 290;
        if(ar < as){
          var y = $('.details__table article').height() - $('.details__table aside').height() + 70;          
          $('.details__table aside').removeAttr('style').css('marginTop', y);
        }
      }else if(p == 0){
        $('.details__head h4').removeAttr('style');
        $('.details__head').removeAttr('style');
        $('.details__head_description').removeAttr('style');
        $('.details__head_stat').removeAttr('style');
        $('.details__head_tabs').removeAttr('style');
        $('.details__table aside .preview').removeAttr('style');
        $('.details__table aside .info').removeAttr('style');
        $('.details__table aside').removeAttr('style');
      }      
    });
  }
  $('.course-details .details__head_tabs li').click(function(e){
    var target = $(this).attr('data-target');
    $('.course-details .details__head_tabs li, .course-details .details__table_tabs li').removeClass('current');    
    $(this).addClass('current');
    $('#'+target).addClass('current');
  });
  
  $('.my-course__tabs li').click(function(e){
    var target = $(this).attr('data-target');
    $('.my-course__tabs li, .my-course__tabs_list li').removeClass('current');    
    $(this).addClass('current');
    $('#'+target).addClass('current');
  });
  $('.profile__tabs li').click(function(e){
    var target = $(this).attr('data-target');
    $('.profile__tabs li, .profile__tabs_list li').removeClass('current');    
    $(this).addClass('current');
    $('#'+target).addClass('current');
  });


  // Profile menu
  $('[data-action="profile-menu-toggle"]').click(function(e){
    $('.header__notification_menu').fadeOut(150);
    if($('.header__profile_menu').is(':hidden')){
      $('.header__profile_menu').fadeIn(150);
    }else{
      $('.header__profile_menu').fadeOut(150);
    }    
    e.preventDefault();
  });
  $('[data-action="notifications-menu-toggle"]').click(function(e){
    $('.header__profile_menu').fadeOut(150);
    if($('.header__notification_menu').is(':hidden')){
      $('.header__notification_menu').fadeIn(150);
    }else{
      $('.header__notification_menu').fadeOut(150);
    }    
    e.preventDefault();
  });

  

  
  

});
