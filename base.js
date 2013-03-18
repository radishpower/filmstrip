var baseurl = "http://gracewoo.com/imgs/170313_goprorun/GOPR*.JPG";
var start = 2822;
var end = 4056;
var striplen = 2;
var inc = start;
var urlname;
var done = false;
var animspeed = 8*100;

//padding a number
function padToFour(number) {
   if (number <= 9999) { number = ("000"+number).slice(-4); }
   return number;
}

//make a div
function makeDiv(imgpath, num) {
   var header = '<div class="frame" id="code' + padToFour(num) +  '">'
   var imgsrc = '<img src="'+imgpath+'">';
   var tail = '</div>';
   return (header+'<a href="'+imgpath+'">'+imgsrc+'</a>'+tail);
}

//add one photo
function addOnePhoto() {
   if (inc < end) { 
      inc = inc+1; 
      urlname = baseurl.replace("*", padToFour(inc));
      $('.filmstrip').append(makeDiv(urlname, inc)).append();
      $('#code'+padToFour(inc)).css("display", "none").fadeIn('slow');
   }
   else  { done = true; } ;
}

//delete a photo
function deleteOnePhoto() {
   var delphoto = inc-striplen;
   if (delphoto > start) {
   
      $('#code'+padToFour(delphoto)).animate({
         width: '0',
         opacity: '0',
      }, animspeed, function() {
         $('#code'+padToFour(delphoto)).remove();
      });

   }
}

function timedUpdate() {
   if (done == false) {
      addOnePhoto();
      deleteOnePhoto();
      window.setTimeout('timedUpdate()', animspeed);
   }
}

$(document).ready(function() {
   timedUpdate();
});
