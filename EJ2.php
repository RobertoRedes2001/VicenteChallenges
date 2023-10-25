<?php

$archivo = "archivo.txt";

$gestor = fopen($archivo, 'r');

$scoreUno = 0;

$scoreDos = 0;

if ($gestor) {
    while (($linea = fgets($gestor)) !== false) {
        if($linea == 'A Y') {
            $scoreUno += 4;
            $scoreDos += 4;
        }else if($linea = 'A X'){
            $scoreUno += 1;
            $scoreDos += 8;
        }else if($linea == 'A Z') {
            $scoreUno += 7;
            $scoreDos += 3;
        }else if($linea == 'B Y'){
            $scoreUno += 8;
            $scoreDos += 1;
        }else if($linea == 'B X'){
            $scoreUno += 5;
            $scoreDos += 5;
        }else if($linea == 'B Z'){
            $scoreUno += 2;
            $scoreDos += 9;
        }else if($linea == 'C Y'){
            $scoreUno += 3;
            $scoreDos += 7;
        }else if($linea == 'C X'){
            $scoreUno += 9;
            $scoreDos += 2;
        }else{
            $scoreUno += 6;
            $scoreDos += 6;
        }
    }

    echo "<h1> Primer score es: $scoreUno </h1>";
    echo "<br></br>";
    echo "<h1> Segundo score es: $scoreDos </h1>";

    fclose($gestor);
} else {
    echo "No se pudo abrir el archivo.";
}
?>



