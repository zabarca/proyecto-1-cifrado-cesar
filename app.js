//obtener la palabra que deseamos cifrar

//let palabra1 = parseInt(palabra);//dando posicion a la palabra ingresada
//obtener el numero de posiciones que se quiere recorrer


//se convierte a numero para calcular espacios a recorrer
//si aplican valor se continua con la formula de acuerdo al numero de letras del abecedario
let resultado = document.getElementById("resultado");
let result = "";
//se obtiene numero de espacios reales que se van a recorrer
//funcion enlazada al input del html
  function obteniendoPalabra () {
  let word = document.getElementById("frase").value;
  let word1 = word.toUpperCase();
  wrd.innerHTML = "La palabra a cifrar es: " + word1;//imprimir palabra a cifrar
  return word1;
}

//me falta llamar a la funcion de forma correcta
function cifrar () {
  let palabra = document.getElementById("frase").value;//ingresando palabra
  let letraPosicion = document.getElementById("pos").value;
  let posicion = parseInt(letraPosicion); // el string ingresado
  let result = "";
	for (let i = 0; (i < palabra.length); i++) { //palabra de 0 hasta su largo
  let c = palabra.charCodeAt(i); //palabra convertida a ascii
  console.log(c);
  //65 al 90 son sólo mayúsculas
  if  (65 <= c && c <=  90) {
    // se aplica formula con signo +=  result=result+string etc...
    let completo = (c - 65 + posicion) % 26 + 65;
    console.log(completo);
    result = String.fromCharCode(completo);// se convierten a letra
    console.log(result);

}


}
return resultado.innerHTML= "El resultado es: "+ (result);
//return console.log(result);
}






  //if (true) {
    //function ()
  //}

//descubrir el valor de cada letra
//const str = "a,b,c,d,e,f,g,h,i,j,k,l,m,n,ñ,v,w,x,y,z"
