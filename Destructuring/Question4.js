function accessElementRandomly(array1)
{
    
   const [first,second,, , last]=array1;
   

    return [first,second, , ,last];
}

console.log(accessElementRandomly([1,2,3,4,5]))//output:[1,2,5]

