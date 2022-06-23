console.log("Arrancó el programa");

// ejercicio en consola

for (var x = 0; x <= 10; x = x + 1) {
  if (x == 7) {
    break;
  }
  console.log(x);
}

// ejercicio en body
// var i, repeticion;
for (i = 1; i <= 30; i++) {
  for (repeticion = 0; repeticion < i; repeticion++) {
    document.write(i);
  }
  document.write("<br>");
}
