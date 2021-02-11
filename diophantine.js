function diophantine(n) 
{
    //x ^ 2 - 4 * y ^ 2 = n
    // x = (a + b)/ 2  
    // y = (b - a)/ 4
    // x^2 - 4y^2 = n => ab = n
    //b = (n/a)
    //a = (n/b)

    let result = [], a, b;

    for(let a = 1; a <= Math.sqrt(n); a++) 
    {
        //check if solution is solvable by getting an integer
        if(Number.isInteger(b = n/a))
        {
            if(Number.isInteger(x = (b+a)/2))
            {
                if(Number.isInteger(y = (b-a)/4))
                {
                    result.push([x, y]);
                }
            }
        }
    }

    return result;
}