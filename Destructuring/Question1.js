function count(str) {
    const separated_words = str.toLowerCase().split(" ");

    const myMap = new Map();
  
    for (let word of separated_words) {

      if (myMap.has(word)) {

        myMap.set(word, myMap.get(word) + 1);

      } 
      else {

          myMap.set(word, 1);
      }
    
    }
  
    return myMap;
  }
  
  const sentence = "My Name Is Shri_Ram and my course name is FULL STACK WEB DEVELOPMENT";

  const map=count(sentence);
  
  console.log(map);

