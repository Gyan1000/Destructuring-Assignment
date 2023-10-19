const person={
    name:"Mithun",
    age:21,
    address:{
        street:"B8, Block B, Industrial Area",
        city:"Sector 62 Noida",
        state:"Uttar Pradesh"
    },

};
function printDetails(p)
{
  const {name,address:{street}}=p;
   return {name,street} ;
}

console.log(printDetails(person));//{name:Mithun, street:'B8, Block B, Industrial Area'}