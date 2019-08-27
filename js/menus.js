function mostrarPestanas(n) {
  var cabeceras = document.getElementsByClassName('cabeceras');
  var pestanas = document.getElementsByClassName('pestanas');

  for (var i = 0; i < pestanas.length; i++) {
    if (pestanas[i].className.includes('p-activa')) {
      pestanas[i].className = pestanas[i].className.replace('p-activa', '');
      cabeceras[i].className = cabeceras[i].className.replace('c-activa', '');
      break;
    }
  }
  pestanas[n].className += ' p-activa';
  cabeceras[n].className += ' c-activa';

  console.log(cabeceras);
  console.log(pestanas);
}


// var menus = {
//   "lunes": [
//         "Plato1",
//         "Plato2",
//         "Plato3",
//         "Plato4",
//         "Plato5"
//       ],
//   "martes": [
//         "Plato1",
//         "Plato2",
//         "Plato3",
//         "Plato4",
//         "Plato5"
//       ],
//   "miercoles": [
//         "Plato1",
//         "Plato2",
//         "Plato3",
//         "tu vieja en tangoide",
//         "Plato5"
//       ],
//   "jueves": [
//         "Plato1",
//         "Plato2",
//         "Plato3",
//         "Plato4",
//         "Plato5"
//       ],
//   "viernes": [
//         "Plato1",
//         "Plato2",
//         "Plato3",
//         "Plato4",
//         "Plato5"
//       ]
// };
