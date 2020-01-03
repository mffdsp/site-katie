var myIndex = 0;

function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides");
console.log(x.length);
  for (i = 0; i < x.length; i++) {
      console.log("opa");
    x[i].style.display = "none";  
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1}    
  x[myIndex-1].style.display = "block";  
  setTimeout(carousel, 2000);
}