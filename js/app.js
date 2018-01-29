window.addEventListener('load',function() {
  let input = document.getElementById('cipherDecipher');
  let subtitle = document.getElementById('describeText');
  let result = document.getElementById('result');
  let btnCipher = document.getElementById('btnCipher');
  let btnDecipher = document.getElementById('btnDecipher');
  let string= '';

  btnCipher.addEventListener('click', (e) => {
    e.preventDefault();
    let cipher = input.value;
    for (i = 0; i < cipher.length; i++) {
      if (cipher.charCodeAt(i) >= 65 && cipher.charCodeAt(i) <= 90) {
        let assci = ( ( ( cipher.charCodeAt(i) ) - 65 + 33 ) % 26 + 65 );
        let newLetter = ( String.fromCharCode(assci) );
        string += newLetter;

      }else if (cipher.charCodeAt(i) >= 97 && cipher.charCodeAt(i) <= 122) {
        let assci2 = ( ( (cipher.charCodeAt(i) ) - 97 + 33 ) % 26 + 97 );
        let newLetter2 = ( String.fromCharCode(assci2) );
        string += newLetter2;
      
      }else {
        if (cipher.charCodeAt(i) == 32){
          alert("No deje espacios en la frase la proxima vez. =) ");
        }else if ( cipher.charCodeAt(i) >= 48 && cipher.charCodeAt(i) <= 57 ){
          alert("No escriba numeros en la frase la proxima vez, por que no podra encriptarlo. :) ");
        }
      }
    }

    subtitle.textContent = 'Tu mensaje encriptado es ...';
    result.textContent = string;

    string = '';
  });

  btnDecipher.addEventListener('click', (e) => {
    e.preventDefault();
    
    let decipher = input.value;
  
    for( i = 0; i < decipher.length; i++){
      if ( decipher.charCodeAt(i) >= 65 && decipher.charCodeAt(i) <= 90 ){
        let assci = ( ( ( decipher.charCodeAt(i) ) + 65 - 33 ) % 26 + 65 );
        let newLetter = ( String.fromCharCode(assci) );
        string += newLetter;

      }else if ( decipher.charCodeAt(i) >= 97 && decipher.charCodeAt(i) <= 122 ) {
        let assci2 = ( ( decipher.charCodeAt(i) ) % 26 + 97 );
        let newLetter2 = ( String.fromCharCode(assci2) );
        string += newLetter2;

      }else{
        if ( decipher.charCodeAt(i) == 32 ){
          alert("No deje espacios en la frase en la proxima vez. =) ");
        }else if ( decipher.charCodeAt(i) >= 48 && decipher.charCodeAt(i) <= 57 ){
          alert("No escriba numeros en la frase porque no podra descifrarlo. :) ");
        }
      }
    }

    subtitle.textContent = 'Tu mensaje desifrado es ...';
    result.textContent = string; 
    resultOnSmall.textContent = string;

    string = '';
  });

});