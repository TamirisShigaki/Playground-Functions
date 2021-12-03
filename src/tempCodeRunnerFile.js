function catAndMouse(mouse, cat1, cat2) {
  let distanciaCat1 = cat1 - mouse;
  let distanciaCat2 = cat2 - mouse;
  let negCat1 = distanciaCat1 * (-1)
  let negCat2 = distanciaCat2 * (-1)
  if (distanciaCat1 <= 0 || distanciaCat2 <= 0) {
    distanciaCat1 * (-1)
    distanciaCat2 * (-1)
  }
  if (distanciaCat1 === distanciaCat2 || distanciaCat1 <= 0 || distanciaCat2 <= 0) {
    return "os gatos trombam e o rato foge";
  } else if (distanciaCat1 < distanciaCat2 || distanciaCat1 <= 0 || distanciaCat2 <= 0) {
   return "cat1";
  } else if (distanciaCat1 > distanciaCat2 || distanciaCat1 <= 0 || distanciaCat2 <= 0) {
    return "cat2";
  }
}
console.log (catAndMouse(6, 0, 9));