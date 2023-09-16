function reverseInt(num){
    const str=num.toString()
    const reverse=str.split("").reverse().join("");
 //   if(num<0){
 //    return parseInt(reverse)*-1
     
     
 //   }else{
 //     return parseInt(reverse)
 //   }
   return parseInt(reverse)*Math.sign(num)
 }
 
 console.log(reverseInt(-998))
 