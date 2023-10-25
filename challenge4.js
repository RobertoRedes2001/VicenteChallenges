const fs = require('fs');

// Leer el archivo "numeros.txt"
const data = fs.readFileSync('numeros.txt', 'utf8');
const lineas = data.split('\n');

let countParesContenidos = 0;

for (let i = 0; i < lineas.length; i++) {
  const asignaciones = lineas[i].split(',');
  for (let j = 0; j < asignaciones.length; j++) {
    for (let k = j + 1; k < asignaciones.length; k++) {
      const [inicio1, fin1] = asignaciones[j].split('-').map(Number);
      const [inicio2, fin2] = asignaciones[k].split('-').map(Number);

      if ((inicio1 >= inicio2 && fin1 <= fin2) || (inicio2 >= inicio1 && fin2 <= fin1)) {
        countParesContenidos++;
      }
    }
  }
}

console.log(`En el archivo "numeros.txt", hay ${countParesContenidos} pares de asignaciones que se contienen completamente.`);
