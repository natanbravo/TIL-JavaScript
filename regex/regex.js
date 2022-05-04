//USING REGEX TO REPLACE PARTS OF A STRING;

const frase =
  "Frase que começa com uma palavra-feia e tem outra palavra-feia no final";
const fraseAtualizada = frase.replace(/palavra-feia/gi, "********");
console.log(fraseAtualizada); // "Frase que começa com uma ******** e tem outra ******** no final"

//=================//=================//=================//=================//=================//=================


//ATENTION : "If don't use 'g' or even 'gi' after the string you want to be replaced...
//            It won't work completely replacing only the first part of the string "

//EXEMPLE

const fraseDois =
  "Frase que começa com uma palavra-feia e tem outra palavra-feia no final";
const fraseAtualizadaDois = fraseDois.replace(/palavra-feia/, "********");
console.log(fraseAtualizadaDois); // "Frase que começa com uma ******** e tem outra palavra-feia no final"


//=================//=================//=================//=================//=================//=================


