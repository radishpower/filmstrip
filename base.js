var baseurl = "imgs/*.png";
var start = 10;
var striplen = 3;
var end = 15;
var inc = start;
var urlname;
var done = false;

//padding a number
function padToFour(number) {
   if (number <= 9999) { number = ("000"+number).slice(-4); }
   return number;
}

//make a div
function makeDiv(imgpath, num) {
   var header = '<div class="frame" id="code' + padToFour(num) +  '"><img src="';
   var tail = '"></div>';
   return (header+imgpath+tail);
}

//add one photo
function addOnePhoto() {
   if (inc < end) { 
      inc = inc+1; 
      urlname = baseurl.replace("*", padToFour(inc));
      $('.filmstrip').prepend(makeDiv(urlname, inc));
   }
   else  { done = true; } ;
}

//delete a photo
function deleteOnePhoto() {
   var delphoto = inc-striplen;
   if (delphoto > start) {
      $('#code'+padToFour(delphoto)).remove();
   }
}

function timedUpdate() {
   if (done == false) {
      addOnePhoto();
      deleteOnePhoto();
      window.setTimeout('timedUpdate()', 1000);
   }
}

$(document).ready(function() {
   timedUpdate();
});
