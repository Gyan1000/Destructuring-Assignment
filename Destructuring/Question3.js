function swapValues(x,y)
{
    //before swapping
    console.log("Before swapping","x=",x,", y=",y);

    //after swapping

    
    [x,y]=[y,x];
    
    return [x,y];

}

console.log("After swapping ","x ","y =",swapValues(5,10));// output: Before swapping x= 5 , y= 10
                                                            // After swapping  x  y = [ 10, 5 ]
