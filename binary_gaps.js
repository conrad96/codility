/**
 * 
 * A binary gap within a positive integer N is any maximal sequence of consecutive zeros that is surrounded by ones at both ends in the binary representation of N.

For example, number 9 has binary representation 1001 and contains a binary gap of length 2. The number 529 has binary representation 1000010001 and contains two binary gaps: one of length 4 and one of length 3. The number 20 has binary representation 10100 and contains one binary gap of length 1. The number 15 has binary representation 1111 and has no binary gaps. The number 32 has binary representation 100000 and has no binary gaps.

Write a function:

function solution(N);

that, given a positive integer N, returns the length of its longest binary gap. The function should return 0 if N doesn't contain a binary gap.

For example, given N = 1041 the function should return 5, because N has binary representation 10000010001 and so its longest binary gap is of length 5. Given N = 32 the function should return 0, because N has binary representation '100000' and thus no binary gaps.

Write an efficient algorithm for the following assumptions:

N is an integer within the range [1..2,147,483,647].
*/

//return the number of binary gaps of an integer
function solution(N)
{
    //check for valid integer
    if(N > 0 && N <= 2147483647)
    {
        //convert N to binary representation
        let binary = N.toString(2);

        //if no 0 is in binary string return 0
        if(binary.indexOf('0') === -1) return 0;

        //get the number of 0's between 1's
        let onesIndexes = [];
        for(i = 0; i < binary.length; i++)
        {
            //get index of 1 then make substr
           if(binary[i] == '1') onesIndexes.push(i);           
        }
        
        //get substrings from 1's indexes
        let result = [];
        if(onesIndexes.length > 0)
        {            
            for(i = 0; i < onesIndexes.length; i++)
            {
                if(binary[i] === "0")
                {
                    result.push(binary.substr(i, onesIndexes[i]));
                }                
            }
        }
        console.log(result);
        //get the longest bin gap
        let longest = 0;
        for(i = 0; i < result.length; i++)
        {
            if(result[i].length > longest)
            {
                longest = result[i].length;
            }
        }
        return longest;
    }else {
        return 0;
    }
}

solution(1041);