function countChar(string) {
    const array = string.split("");
    let count = {};
    let result = '';
    for (let i = 0; i < array.length; i++) {
      if(count[array[i]]) {
        count[array[i]]+=1;
      } else {
        count[array[i]] = 1;
      }
    }
    Object.keys(count).map(key => {
    result += key + ':'+ count[key]+','; 
    });
    return result;
  }
  console.log('{' + countChar('hellothisisatest') + '}');

  //參考https://stackoverflow.com/questions/70839990/how-to-count-similar-words-in-a-string-and-display-their-individual-count-in-a-n