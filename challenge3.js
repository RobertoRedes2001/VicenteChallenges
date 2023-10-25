const fs = require('fs');

// Leer el archivo mochilas.txt
const data = fs.readFileSync('mochilas.txt', 'utf8');
const lineas = data.split('\n'); // Dividir el archivo en líneas

// Función para calcular la prioridad de una letra
function calcularPrioridad(letra) {
  if (letra >= 'a' && letra <= 'z') {
    return letra.charCodeAt(0) - 'a'.charCodeAt(0) + 1;
  } else if (letra >= 'A' && letra <= 'Z') {
    return letra.charCodeAt(0) - 'A'.charCodeAt(0) + 27;
  } else {
    return 0; // No es una letra válida
  }
}

let sumaPrioridades = 0;

for (let i = 0; i < lineas.length; i++) {
  const cadena = lineas[i].trim(); // Eliminar espacios en blanco alrededor de la línea
  const longitud = cadena.length;
  const compartimento1 = cadena.substring(0, longitud / 2);
  const compartimento2 = cadena.substring(longitud / 2);

  // Encontrar elementos que aparecen en ambos compartimentos
  const elementosComunes = new Set();
  for (let letra of compartimento1) {
    if (compartimento2.includes(letra)) {
      elementosComunes.add(letra);
    }
  }

  // Calcular la suma de prioridades de los elementos comunes
  let sumaPrioridadesMochila = 0;
  for (let letra of elementosComunes) {
    sumaPrioridadesMochila += calcularPrioridad(letra);
  }

  sumaPrioridades += sumaPrioridadesMochila;
}

console.log(`La suma de prioridades de los elementos comunes en todas las mochilas es: ${sumaPrioridades}`);
