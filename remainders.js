const splitInteger = (num, parts) => {
    // Complete this function
    var val;
    //get the modulus
    var mod = num % parts;
    
    //if remainder = 0 then add remainder into parts array
    if(mod == 0){
      val = num/parts;
      retData = Array(parts).fill(val);
    } else {
      //subtract remainder from num and get dividend
      val = (num-mod)/parts;
      //add val to parts array
      retData = Array(parts).fill(val);
      for(i=0;i<mod;i++){
        retData[i] = retData[i] + 1;
      }
      //reverse array
      retData.reverse()
    }
  
    return retData;
  };