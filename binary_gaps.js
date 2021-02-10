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
function binaryGaps(binary, gaps)
{   
    //get index of first 1
    let first = binary.indexOf('1');

    if(first > -1)
    {
         //slice array from first 1
        let firstArray = binary.slice(first + 1);

        //get index of second 1
        let second = firstArray.indexOf('1');

        if(second > 0)
        {
            //push second idnex to gaps
            gaps.push(second);
        }            

        return binaryGaps(firstArray.slice(second + 1), gaps);
    }

    //return max value in gaps array
    return (gaps.length > 0)?  Math.max.apply(Math, gaps) : 0;
}

function solution (N)
{
    if(N === parseInt(N, 10) && N >= 1 && N <= 2147483647)
    {
        const binary = N.toString(2);
        const binArray = binary.split('');

        return binaryGaps(binArray, []);        
    }
    return 0;
}