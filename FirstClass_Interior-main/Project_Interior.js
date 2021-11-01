// About Us page
// button to change CEO to MD & MD to CEO
var btn_click_MD = 0;
function MDFunction() {
  if (0 == btn_click_MD % 2){
  document.getElementById("MD-D").innerHTML = "George brings a breadth of global industry knowledge from his work on infrastructure projects in the U.S. and Middle East. He is well versed in procurement, design, tendering construction management and maintenance, and stakeholder management.";
  document.getElementById("MD-T").innerHTML = "Managing Director (MD)";
  document.getElementById("MD-N").innerHTML = "George Smith";
  document.getElementById('CEO').src='Project_Interior_resources/MD.png';
  document.getElementById("MD-B").innerHTML = "Meet Our CEO";
  btn_click_MD++;
  }
  else if (0 != btn_click_MD % 2)
  {
    document.getElementById("MD-D").innerHTML = "Captivate Interiors was founded by Jeff Gate. According to him, a place without an interior is like a body without a soul. He wants to provide a sustainable, natural, and futuristic interior that makes a space livable.";
  document.getElementById("MD-T").innerHTML = "Chief Executive Officer (CEO)";
  document.getElementById("MD-N").innerHTML = "Jeff Gate";
  document.getElementById('CEO').src='Project_Interior_resources/CEO.jpg';
  document.getElementById("MD-B").innerHTML = "Meet Our MD";
  btn_click_MD++;
  }
}

// Buttons to hide a particular staff
var btn_click_S1 = 0;
function S1() {
  if (0 == btn_click_S1 % 2){
  document.getElementById("S1I").style.display= "none";
  document.getElementById("S1D").style.display= "none";
btn_click_S1++;}
else if (0 != btn_click_S1 % 2){
  document.getElementById("S1I").style.display= "block";
  document.getElementById("S1D").style.display= "block";
btn_click_S1++;}
}

var btn_click_S2 = 0;
function S2() {
  if (0 == btn_click_S2 % 2){
  document.getElementById("S2I").style.display= "none";
  document.getElementById("S2D").style.display= "none";
btn_click_S2++;}
else if (0 != btn_click_S2 % 2){
  document.getElementById("S2I").style.display= "block";
  document.getElementById("S2D").style.display= "block";
btn_click_S2++;}
}

var btn_click_S3 = 0;
function S3() {
  if (0 == btn_click_S3 % 2){
  document.getElementById("S3I").style.display= "none";
  document.getElementById("S3D").style.display= "none";
btn_click_S3++;}
else if (0 != btn_click_S3 % 2){
  document.getElementById("S3I").style.display= "block";
  document.getElementById("S3D").style.display= "block";
btn_click_S3++;}
}

var btn_click_S4 = 0;
function S4() {
  if (0 == btn_click_S4 % 2){
  document.getElementById("S4I").style.display= "none";
  document.getElementById("S4D").style.display= "none";
btn_click_S4++;}
else if (0 != btn_click_S4 % 2){
  document.getElementById("S4I").style.display= "block";
  document.getElementById("S4D").style.display= "block";
btn_click_S4++;}
}

var btn_click_S5 = 0;
function S5() {
  if (0 == btn_click_S5 % 2){
  document.getElementById("S5I").style.display= "none";
  document.getElementById("S5D").style.display= "none";
btn_click_S5++;}
else if (0 != btn_click_S5 % 2){
  document.getElementById("S5I").style.display= "block";
  document.getElementById("S5D").style.display= "block";
btn_click_S5++;}
}

// contact page
// to change text color and font size
function Contact_HFS_Function() { document.getElementById("ContFS").style.fontSize= "40px";
}
function Contact_HFC_Function() { document.getElementById("ContFS").style.color= "Yellow";}
// To align text to right
function Contact_Info_Function() { document.getElementById("Continfo").style.textAlign= "right";} 


// Shop page
// button to change purchase to purchased
var btn_click_buy = 0;
function buyFunction() {
  if (0 == btn_click_buy % 2){
  document.getElementById("buy").innerHTML = "Purchased";
  btn_click_buy++;
  }
  else if (0 != btn_click_buy % 2)
  {
  document.getElementById("buy").innerHTML = "Purchase";
  btn_click_buy++;
  }
}

var btn_click_buy2 = 0;
function buyFunction2() {
  if (0 == btn_click_buy2 % 2){
  document.getElementById("buy2").innerHTML = "Purchased";
  btn_click_buy2++;
  }
  else if (0 != btn_click_buy2 % 2)
  {
  document.getElementById("buy2").innerHTML = "Purchase";
  btn_click_buy2++;
  }
}

var btn_click_buy3 = 0;
function buyFunction3() {
  if (0 == btn_click_buy3 % 2){
  document.getElementById("buy3").innerHTML = "Purchased";
  btn_click_buy3++;
  }
  else if (0 != btn_click_buy3 % 2)
  {
  document.getElementById("buy3").innerHTML = "Purchase";
  btn_click_buy3++;
  }
}

var btn_click_buy4 = 0;
function buyFunction4() {
  if (0 == btn_click_buy4 % 2){
  document.getElementById("buy4").innerHTML = "Purchased";
  btn_click_buy4++;
  }
  else if (0 != btn_click_buy4 % 2)
  {
  document.getElementById("buy4").innerHTML = "Purchase";
  btn_click_buy4++;
  }
}

var btn_click_buy5 = 0;
function buyFunction5() {
  if (0 == btn_click_buy5 % 2){
  document.getElementById("buy5").innerHTML = "Purchased";
  btn_click_buy5++;
  }
  else if (0 != btn_click_buy5 % 2)
  {
  document.getElementById("buy5").innerHTML = "Purchase";
  btn_click_buy5++;
  }
}
var btn_click_buy6 = 0;
function buyFunction6() {
  if (0 == btn_click_buy6 % 2){
  document.getElementById("buy6").innerHTML = "Purchased";
  btn_click_buy6++;
  }
  else if (0 != btn_click_buy6 % 2)
  {
  document.getElementById("buy6").innerHTML = "Purchase";
  btn_click_buy6++;
  }
}
var btn_click_buy7 = 0;
function buyFunction7() {
  if (0 == btn_click_buy7 % 2){
  document.getElementById("buy7").innerHTML = "Purchased";
  btn_click_buy7++;
  }
  else if (0 != btn_click_buy7 % 2)
  {
  document.getElementById("buy7").innerHTML = "Purchase";
  btn_click_buy7++;
  }
}
var btn_click_buy8 = 0;
function buyFunction8() {
  if (0 == btn_click_buy8 % 2){
  document.getElementById("buy8").innerHTML = "Purchased";
  btn_click_buy8++;
  }
  else if (0 != btn_click_buy8 % 2)
  {
  document.getElementById("buy8").innerHTML = "Purchase";
  btn_click_buy8++;
  }
}
var btn_click_buy9 = 0;
function buyFunction9() {
  if (0 == btn_click_buy9 % 2){
  document.getElementById("buy9").innerHTML = "Purchased";
  btn_click_buy9++;
  }
  else if (0 != btn_click_buy9 % 2)
  {
  document.getElementById("buy9").innerHTML = "Purchase";
  btn_click_buy9++;
  }
}
var btn_click_buy10 = 0;
function buyFunction10() {
  if (0 == btn_click_buy10 % 2){
  document.getElementById("buy10").innerHTML = "Purchased";
  btn_click_buy10++;
  }
  else if (0 != btn_click_buy10 % 2)
  {
  document.getElementById("buy10").innerHTML = "Purchase";
  btn_click_buy10++;
  }
}