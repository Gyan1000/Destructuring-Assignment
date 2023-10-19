function uniqueElements(arr) {

   const mySet=new Set();
   
   arr.forEach(element => {

       if(!mySet.has(element))
       {
           mySet.add(element)
       }
   });   

    return mySet
  }
  
  console.log(uniqueElements([1, 2, 2, 3, 3, 4])); // Set { 1, 2, 3, 4 }
  console.log(uniqueElements([5, 6, 7, 7, 8, 8])); // Set { 5, 6, 7, 8 }
  