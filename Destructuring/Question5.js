function find_Max_Min(arr)
{
   const max=Math.max(...arr);
   const min=Math.min(...arr);
   
   return {max:max,min:min};
}

console.log(find_Max_Min([5,2,7,1,9]))//output: {max:9, min:1}