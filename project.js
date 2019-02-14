for (i=0; i <= 100; i++) {
  if (i % 5 == 0) {
    document.getElementById("mul5").innerHTML += i ;
  }
  else if (i % 7 == 0) {
    document.getElementById("mul7").innerHTML += i ;
  }
  if (i % 5 != 0 && i % 7 != 0){
    document.getElementById("other").innerHTML += i;
  }
}
