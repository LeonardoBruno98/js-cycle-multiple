for (i=1; i < 100; i++) {
  if (i % 5 == 0) {
    document.getElementById("mul5").innerHTML += i + "<br>";
  }
  else if (i % 7 == 0) {
    document.getElementById("mul7").innerHTML += i + "<br>";
  }
  else {
    document.getElementById("other").innerHTML += i + "<br>";
  }
}
