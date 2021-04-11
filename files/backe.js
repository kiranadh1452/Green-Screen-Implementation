var fgImage = null ;
var bgImage = null ;
var canvas1 = document.getElementById("d1");
var canvas2 = document.getElementById("d2");
function loadfg(){
  var imgfile = document.getElementById("fg") ;
  fgImage = new SimpleImage(imgfile);
  fgImage.drawTo(canvas1);  
}
function loadbg(){
  var imgfile = document.getElementById("bg");
  bgImage = new SimpleImage(imgfile);
  bgImage.drawTo(canvas2);
}
function greenScreen(){
  if(fgImage == null || ! fgImage.complete()){ alert("Fore-ground Image not loaded."); return ;}
   if(bgImage == null || ! bgImage.complete()){ alert("Back-ground Image not loaded."); return ;}
  clr("d1"); clr("d2");
 var output = new SimpleImage(fgImage.getWidth(),fgImage.getHeight()) ;
  for (var pix of fgImage.values()){
    if(pix.getGreen() >= pix.getRed() + pix.getBlue()){
        var x = pix.getX();
        var y = pix.getY();
        var bgpix = bgImage.getPixel(x,y);
        output.setPixel(x,y,bgpix);
    }
    else{
        output.setPixel(pix.getX(),pix.getY(),pix );
    }
}  
  output.drawTo(canvas1);
}
function clrCanvas(){
  clr("d1"); clr("d2"); fgImage = null; bgImage = null ;
}
function clr(x){ 
var canvas = document.getElementById(x);
 var con = canvas.getContext("2d");  con.clearRect(0,0,canvas.width,canvas.height);
}
