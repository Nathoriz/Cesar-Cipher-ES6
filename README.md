# __Cifrado César__

Crea una web que pida, por medio de un prompt(), una frase al usuario y devuelva el mismo mensaje encriptado según el algoritmo de Cifrado César con el parámetro de desplazamiento de 33 espacios hacia la derecha.

### Peudocodigo de Cifrado César


>__Crear una variable, que contenga un prompt donde el usuario debera escoger entre dos opciones : encriptar o descifrar mensaje.__

>> __\n =__ sirve para que la oracion siguiente , este en una diferente linea de parrafo




__variable menu__ = __prompt__ ("Eliga una opcion.__*\n*__ 1.Encriptar mensaje.__*\n*__ 2.Descifrar mensaje")__;__




>__Crear una condición donde deberas poner lo que quieres que pase en caso de que el usuario eliga la opcion 1.__



  __Si__ ( menu __Es igual a__ "1" ) {

__variable respuesta__ = __prompt__ ("Escriba una frase para convertirlo en un mensaje encriptado")__;__

__variable string__ = ""__;__



>>Crea una función llamada __Cifrado__




__variable cifrado__ = __función__ (frase) {




>>Crea un __for__ para que pase por cada letra de la respuesta.





__for__ ( index = 0 __;__ index < frase.length __;__ index++) {



>>Crea otra condición para las letras que son Mayusculas en el argumento de la función cifrado.



__Si__ (frase.charCodeAt(index) __Sea mayor o igual a__ 65 __Y__ frase.charCodeAt(index) __Sea menor o iagual a__ 90 ) {

__variable assci__ = (((frase.charCodeAt(index)) __-__ 65 __+__ 33)__%__ 26 __+__ 65)__;__

__variable nuevaLetra__ = (String.fromCharCode(assci))__;__

string __+=__ nuevaLetra __;__

    }



>>Crea otra condicion para las letras que son Minusculas en el argumento de la función cifrado.



  __Si no__ ( frase.charCodeAt(index) __Sea mayor o igual a__ 97 __Y__ frase.charCodeAt(index) __Sea menor o igual a__ 122) {

__variable assci2__ = (((frase.charCodeAt(index)) __-__ 97 __+__ 33)__%__ 26 __+__ 97)__;__

__variable nuevaLetra2__ = (String.fromCharCode(assci2))__;__  

string __+=__ nuevaLetra2 __;__

}



>>Crea otra condición para los espacios y numeros en el argumento de la función cifrado.




__Otro__ {

  __Si__ (frase.charCodeAt(index) __Sea igual a__ 32) {

  __alert__ ("No deje espacios en la frase la proxima vez. =) ")__;__

     }

  __Si no__ (frase.charCodeAt(index) __Sea mayor o igual__ 48 __Y__ frase.charCodeAt(index) __Sea menor o igual a__ 57) {

   __alert__ ("No escriba numeros en la frase la proxima vez, por que no podra encriptarlo. :) ")__;__

     }

}

    }

__alert__ (string)__;__  
}


__cifrado__ (respuesta)__;__




>>Llama la funcioón cifrado, en caso de que el usuario eliga la opción 1.





}



>__Crear otra condición donde deberas poner lo que quieres que pase en caso de que el usuario eliga la opcion 2.__




__Si no__ (menu __Es igual a__ "2") {

  __variable respuesta2__ = __prompt__("Introdusca el mensaje encriptado para convertilo en una frase.")__;__

__variable string2__ = ""__;__




>>Crear una función decifrado.




__variable decifrado__ = __función__ (frase2) {




  >>Crea un __for__ para que pase por cada letra de la respuests2.




   __for__ ( index = 0 __;__ index < frase2.length __;__ index++ ) {




>>Crea otra condición para las letras que son Mayusculas en el argumento de la función decifrado




__Si__ (frase2.charCodeAt(index) __Sea mayor o igual a__ 65 __Y__ frase2.charCodeAt(index) __Sea menor o igual a__ 90) {


  __variable assci__ =(((frase2.charCodeAt(index)) __+__ 65 __-__ 33)__%__ 26 __+__ 65)__;__

  __variable nuevaLetra__ = (String.fromCharCode(assci))__;__

  string2 __+=__ nuevaLetra __;__

    }



>>Crea otra condicion para las letras que son Minusculas en el argumento de la función decifrado.




 __Si no__ (frase2.charCodeAt(index) __Sea mayor o igual a__ 97 __Y__ frase2.charCodeAt(index) __Sea menor o igual a__ 122) {

   >> __%__ = El __resto__ de un division.

  __variable assci2__ = ((frase2.charCodeAt(index))__%__ 26 __+__ 97)__;__

  __variable nuevaLetra2__ = (String.fromCharCode(assci2))__;__

  string2 __+=__ nuevaLetra2 __;__

}



>>Crea otra condición para los espacios y numeros en el argumento de la función decifrado.



__Otro__ {

 __Si__ ( frase2.charCodeAt(index) __Sea igaul a__ 32 ) {  
   __alert__ ("No deje espacios en la frase en la proxima vez. =) ")__;__

     }

  __Si no__ ( frase2.charCodeAt(index) __Sea mayor o igual a__ 48 __Y__ frase2.charCodeAt(index) __Sea menor o igual a__ 57 ) {  

   __alert__ ("No escriba numeros en la frase porque no podra descifrarlo. :) ")__;__

     }
}


    }

__alert__ (respuesta2)__;__  
}



>>Llama la funcioón decifrado, en caso de que el usuario eliga la opción 2.



__decifrado__ (respuesta2)__;__



}



>__Crea una condición en caso el usuario, escriba una opción que no existe en el menu.__



__Otro__ {  
  menu __no es igual a__ "1"  __O__  menu __no es igual a__ "2"__;__

  __alert__ ("Por favor eliga el numero de las opciones existentes. =( ")__;__

}
