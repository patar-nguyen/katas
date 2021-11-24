const urlEncode = function(text) {
  text = text.trim();
  let newText = "";

  for(let texts of text){
    if(texts === " "){
      newText += "%20";
    }
    else {
      newText += texts;
    }
  }
  return newText;
};

console.log(urlEncode("Lighthouse Labs"));
console.log(urlEncode(" Lighthouse Labs "));
console.log(urlEncode("blue is greener than purple for sure"));

/* Can also use this solution

    for(let i = 0; i < text.length; i++){
    if(text[i] === " "){
      newText += "%20";
    }
    else {
      newText += text[i];
    }
  }
*/