//Week 5 Pair Programming By @ChrisPytel and @Mpalko07 


const wordSearch = (letters, word) => { 
  
  //for handling horizontal words
    for (const row of letters) {
        if (row.join('').includes(word)) return true;
        if (row.reverse().join('').includes(word)) return true;
    }

  //for handling vertical words
    for (let columnNum = 0; columnNum < letters[0].length; columnNum++) {
      let verticalWord = "";

      for (let rowNum = 0; rowNum < letters.length; rowNum++) {
        verticalWord += letters[rowNum][columnNum];
      }
      console.log(`verticalWord is `, verticalWord);
      if (verticalWord.includes(word)) return true;
      if (verticalWord.split("").reverse().join("").includes(word)) return true;
    }
  //otherwise as a catch all, returns false
    return false;
}



module.exports = wordSearch;