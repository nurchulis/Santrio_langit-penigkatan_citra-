var originalImage;
var grayImage;

function upload() {
  //Get input from file input
  var fileinput = document.getElementById("finput");
  //Make new SimpleImages from file input
  originalImage = new SimpleImage(fileinput);
  grayImage = new SimpleImage(fileinput);
  //Get canvas
  var canvas = document.getElementById("can");
  //Draw image on canvas
  originalImage.drawTo(canvas);
}

function reset(){
  var fileinput = document.getElementById("finput");
  //Make new SimpleImages from file input
  originalImage = new SimpleImage(fileinput);
  grayImage = new SimpleImage(fileinput);
  //Get canvas
  var canvas = document.getElementById("canr");
  //Draw image on canvas
  originalImage.drawTo(canvas);
}

function makeGray() {
  //change all pixels of image to gray
  for (var pixel of grayImage.values()) {
    var avg = (pixel.getRed()+pixel.getGreen()+pixel.getBlue())/3;
    pixel.setRed(avg);
    pixel.setGreen(avg);
    pixel.setBlue(avg);
  }
  //display new image
  canvas = document.getElementById("canr");
  grayImage.drawTo(canvas);
}

function Noise() {
    func = 'noise'; // last used function
    var imgd = contextOrig.getImageData(0, 0, iW, iH);
    var data = imgd.data;

    for (var i = 0, n = data.length; i < n; i += 4) {

       // generating random color coefficients
       var randColor1 = 0.6 + Math.random() * 0.4;
       var randColor2 = 0.6 + Math.random() * 0.4;
       var randColor3 = 0.6 + Math.random() * 0.4;

        // assigning random colors to our data
        data[i] = data[i]*p2*randColor1+er; // green
        data[i+1] = data[i+1]*p2*randColor2+eg; // green
        data[i+2] = data[i+2]*p3*randColor3+eb; // blue
    }

    // put image date back to context
    context.putImageData(imgd, 0, 0);
}


function Negative() {
  //change all pixels of image to gray
  for (var pixel of grayImage.values()) {
    var avg = (pixel.getRed(),pixel.getGreen(),pixel.getBlue());
    avg = 255 - avg;
    pixel.setRed(avg);
    pixel.setGreen(avg);
    pixel.setBlue(avg);
  }
  //display new image
  canvas = document.getElementById("canr");
  grayImage.drawTo(canvas);
}


function biner() {
  //change all pixels of image to gray
  for (var pixel of grayImage.values()) {
    var avg = (pixel.getRed(),pixel.getGreen(),pixel.getBlue());
    if(avg < 128){
      avg = 0;
    } else {
      avg = 255;
    }
    pixel.setRed(avg);
    pixel.setGreen(avg);
    pixel.setBlue(avg);
  }
  //display new image
  canvas = document.getElementById("canr");
  grayImage.drawTo(canvas);
}/////



function level1() {
  //change all pixels of image to gray
  for (var pixel of grayImage.values()) {
    var avg = (pixel.getRed()*0.2126 + pixel.getGreen() * 0.7152 + pixel.getBlue() * 1)/1;
    pixel.setRed(avg);
    pixel.setGreen(avg);
    pixel.setBlue(avg);
  }
  //display new image
  canvas = document.getElementById("canr");
  grayImage.drawTo(canvas);
}


function level2() {
  //change all pixels of image to gray
  for (var pixel of grayImage.values()) {
    var avg = (pixel.getRed()*0.2126 + pixel.getGreen() * 1 + pixel.getBlue() * 1)/1;
    pixel.setRed(avg);
    pixel.setGreen(avg);
    pixel.setBlue(avg);
  }
  //display new image
  canvas = document.getElementById("canr");
  grayImage.drawTo(canvas);
}

function level3() {
  //change all pixels of image to gray
  for (var pixel of grayImage.values()) {
    var avg = (pixel.getRed()*0.3126 + pixel.getGreen() * 1 + pixel.getBlue() * 1)/1;
    pixel.setRed(avg);
    pixel.setGreen(avg);
    pixel.setBlue(avg);
  }
  //display new image
  canvas = document.getElementById("canr");
  grayImage.drawTo(canvas);
}


function level_1() {
  //change all pixels of image to gray
  for (var pixel of grayImage.values()) {
    var avg = (pixel.getRed()*0.1 + pixel.getGreen() * 0.1 + pixel.getBlue() * 0.1)/1;
    pixel.setRed(avg);
    pixel.setGreen(avg);
    pixel.setBlue(avg);
  }
  //display new image
  canvas = document.getElementById("canr");
  grayImage.drawTo(canvas);
}


function level2_() {
  //change all pixels of image to gray
  for (var pixel of grayImage.values()) {
    var avg = (pixel.getRed()*0.05 + pixel.getGreen() * 0.05 + pixel.getBlue() * 0.05)/1;
    pixel.setRed(avg);
    pixel.setGreen(avg);
    pixel.setBlue(avg);
  }
  //display new image
  canvas = document.getElementById("canr");
  grayImage.drawTo(canvas);
}

function level_3() {
  //change all pixels of image to gray
  for (var pixel of grayImage.values()) {
    var avg = (pixel.getRed()*0.01 + pixel.getGreen() * 0.01 + pixel.getBlue() * 0.01)/1;
    pixel.setRed(avg);
    pixel.setGreen(avg);
    pixel.setBlue(avg);
  }
  //display new image
  canvas = document.getElementById("canr");
  grayImage.drawTo(canvas);
}