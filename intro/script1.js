 function convertFahrToCelsius(F){
     let inputtype = Object.prototype.toString.call(F);
     if(inputtype === "[object Number]" || (inputtype == "[object String]" && !isNaN(F))){
         return ((F-32)*5/9).toFixed(4);
     }
     else{
         return `$JSON.stringify(F)} is not valid number but a/an ${inputtype.substring(7,inputtype.length-1)}`;
     }
    }


