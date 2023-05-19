/* -------------------------------------------------------------------------------------------------------------------------------------------------------------

    Este programa resuelve el ejercicio propuesto. Se han asumido algunos aspectos como que no hay comunicacion directa entre el nodo inicial y final.
    Para una mayor comodidad de testeo, se ha creado una funcion que crea automaticamente una matriz de dimension N introducida por el usuario.
    Dicha matriz contiene valores comprendidos entre 1-10, teniendo ademas en cuenta que si fuese 0, no habría conexión.
    Para valores de N suficientemente grandes, la solucion tiende a ser 2, puesto que habrá dos caminos consecutivos óptimos de valor 1 en este caso.
    Para una mejor visualización se recomienda probar con valores de N coprendidos entre 5-6, puesto que no se han incluido restricciones para los valores de N,
    asumiendo que estos cumplen con lo propuesto en el enunciado.

 ------------------------------------------------------------------------------------------------------------------------------------------------------------- */
//Importaciones necesarias
const readline = require("readline");

//Funcion con algoritmo de búsqueda de camino más corto
//Params:       N:Number          matriz:Number[][]
function encontrarCaminoMasRapido(N, matriz) {
  const INFINITO = Infinity;

  // Creamos una matriz de distancias y la inicializamos con infinito
  const distancias = [];
  for (let i = 0; i < N; i++) {
    distancias.push(new Array(N).fill(INFINITO));
  }

  // El tiempo necesario para llegar a la primera base es 0
  distancias[0][0] = 0;
  //Asumimos que no hay ruta entre el primer y el último nodo
  matriz[0][N - 1] = 0;

  // Creamos un array para marcar las bases visitadas
  const visitado = new Array(N).fill(false);

  for (let i = 0; i < N - 1; i++) {
    // Encontrar la base con la distancia mínima
    let baseActual = -1;
    for (let j = 0; j < N; j++) {
      if (
        !visitado[j] &&
        (baseActual === -1 || distancias[0][j] < distancias[0][baseActual])
      ) {
        baseActual = j;
      }
    }

    // Marcar la base como visitada
    visitado[baseActual] = true;

    // Actualizar las distancias de las bases adyacentes
    for (let j = 0; j < N; j++) {
      if (!visitado[j] && matriz[baseActual][j] > 0) {
        distancias[0][j] = Math.min(
          distancias[0][j],
          distancias[0][baseActual] + matriz[baseActual][j]
        );
      }
    }
  }

  // Devolver la distancia mínima hasta la última base
  return distancias[0][N - 1];
}

const generaMatriz = (N) => {
  // Generar la matriz NxN con números enteros positivos aleatorios entre 1-10
  const matriz = [];
  for (let i = 0; i < N; i++) {
    const fila = [];
    for (let j = 0; j < N; j++) {
      if (i >= j) {
        fila.push(0);
      } else {
        fila.push(Math.floor(Math.random() * 10) + 1); // Valor predeterminado para los otros elementos de la matriz
      }
    }
    matriz.push(fila);
  }
  return matriz;
};

const leerNumero = () => {
  return new Promise((resolve, reject) => {
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });

    rl.question("Escribe el valor de N: ", (N) => {
      rl.close();
      resolve(parseInt(N));
    });
  });
};

//Función principal
const main = async () => {
  const N = await leerNumero();
  const matriz = generaMatriz(Number(N));

  const tiempoMinimo = encontrarCaminoMasRapido(N, matriz);
  console.log(matriz);
  console.log(tiempoMinimo);
};

//Ejecución main()
main()