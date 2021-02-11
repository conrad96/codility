function dnaComplement(dna)
{
    //incase of string append to result-string
    let result = '';          
    //loop dnastring and pass char . return complement and append to result
    for(let char of dna)
    {
        result += complementDna(char);
    }
    return result;
}

function complementDna(dnaString)
{
    if(dnaString.length === 0) return "";

    if(n == 'A')
    {
        return 'T';
    }      
    else if(n == 'T')
    {
        return 'A';
    }      
    else if(n == 'G')
    {
        return 'C';
    }      
    else if(n == 'C')
    {
        return 'G';
    }          
}