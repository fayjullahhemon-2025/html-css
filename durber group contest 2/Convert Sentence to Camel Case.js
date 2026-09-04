function convertToCamelCase(sentence) {
    
    let splitedSentence = sentence.trim().split(' ');
    let camelCase = splitedSentence[0];
      for(let i =1;i<splitedSentence.length;i++){
        let capitalizedText = splitedSentence[i][0].toUpperCase();
        for(let j = 1; j<splitedSentence[i].length;j++){
            capitalizedText = capitalizedText + splitedSentence[i][j];
        }
        camelCase = camelCase  + capitalizedText; 
      } 
      return camelCase;
}
console.log(convertToCamelCase("  hello world  "));
console.log(convertToCamelCase("hello   world"));
console.log(convertToCamelCase("java script is fun"));