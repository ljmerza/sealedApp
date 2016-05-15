//https://www.typewolf.com/site-of-the-day/patrick-algrim
//http://jsfiddle.net/MgcDU/7239/
//http://stackoverflow.com/questions/21251979/play-full-html5-video-and-then-loop-a-section-of-it

// check to see if browser is on mobile or 7 inch tablet device

!function(a){var b=/iPhone/i,c=/iPod/i,d=/iPad/i,e=/(?=.*\bAndroid\b)(?=.*\bMobile\b)/i,f=/Android/i,g=/(?=.*\bAndroid\b)(?=.*\bSD4930UR\b)/i,h=/(?=.*\bAndroid\b)(?=.*\b(?:KFOT|KFTT|KFJWI|KFJWA|KFSOWI|KFTHWI|KFTHWA|KFAPWI|KFAPWA|KFARWI|KFASWI|KFSAWI|KFSAWA)\b)/i,i=/IEMobile/i,j=/(?=.*\bWindows\b)(?=.*\bARM\b)/i,k=/BlackBerry/i,l=/BB10/i,m=/Opera Mini/i,n=/(CriOS|Chrome)(?=.*\bMobile\b)/i,o=/(?=.*\bFirefox\b)(?=.*\bMobile\b)/i,p=new RegExp("(?:Nexus 7|BNTV250|Kindle Fire|Silk|GT-P1000)","i"),q=function(a,b){return a.test(b)},r=function(a){var r=a||navigator.userAgent,s=r.split("[FBAN");return"undefined"!=typeof s[1]&&(r=s[0]),s=r.split("Twitter"),"undefined"!=typeof s[1]&&(r=s[0]),this.apple={phone:q(b,r),ipod:q(c,r),tablet:!q(b,r)&&q(d,r),device:q(b,r)||q(c,r)||q(d,r)},this.amazon={phone:q(g,r),tablet:!q(g,r)&&q(h,r),device:q(g,r)||q(h,r)},this.android={phone:q(g,r)||q(e,r),tablet:!q(g,r)&&!q(e,r)&&(q(h,r)||q(f,r)),device:q(g,r)||q(h,r)||q(e,r)||q(f,r)},this.windows={phone:q(i,r),tablet:q(j,r),device:q(i,r)||q(j,r)},this.other={blackberry:q(k,r),blackberry10:q(l,r),opera:q(m,r),firefox:q(o,r),chrome:q(n,r),device:q(k,r)||q(l,r)||q(m,r)||q(o,r)||q(n,r)},this.seven_inch=q(p,r),this.any=this.apple.device||this.android.device||this.windows.device||this.other.device||this.seven_inch,this.phone=this.apple.phone||this.android.phone||this.windows.phone,this.tablet=this.apple.tablet||this.android.tablet||this.windows.tablet,"undefined"==typeof window?this:void 0},s=function(){var a=new r;return a.Class=r,a};"undefined"!=typeof module&&module.exports&&"undefined"==typeof window?module.exports=r:"undefined"!=typeof module&&module.exports&&"undefined"!=typeof window?module.exports=s():"function"==typeof define&&define.amd?define("isMobile",[],a.isMobile=s()):a.isMobile=s()}(this);

if (isMobile.apple.phone || isMobile.android.phone || isMobile.windows.device
  || isMobile.amazon.device || isMobile.seven_inch || isMobile.other.device){

    //if browser is on mobile then html5 video autoplay doesnt work - fall back to an image
    $('video').hide()
    $('#img-mobile').show()

  }else{

    // if IE then fiter css doesn't work - use JS to create div overlay
    if (navigator.userAgent.indexOf("Trident") != -1) {
      var vid = $('video')
      var vidOverlay = $('.filter-video-overlay')

      // get rid of css filter so it's not double dark
      vid.css('filter', 'brightness(1)')
      vid.css('-webkit-filter', 'brightness(1)')

      // change overlay filter to height to video for any change
      vidOverlay.css('height', parseInt(vid.css('height')))
      $(window).resize(function() {
        vidOverlay.css('height', parseInt(vid.css('height')))
      })
      $(window).scroll(function() {
        vidOverlay.css('height', parseInt(vid.css('height')))
      })
    }
  }
