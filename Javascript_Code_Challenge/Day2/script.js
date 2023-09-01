// First Method
// function anagram(stringA,stringB){
//   const aCharMap=buildCharMap(stringA);
//   const bCharMap=buildCharMap(stringB);
  
//   if(Object.keys(aCharMap).length !== Object.keys(bCharMap).length){
//     return false
    
//   }
//   for(let char in aCharMap){
//     if(aCharMap[char]!==bCharMap[char]){
//       return false
       
//        }
//   }
//   return true;
  
  
  
// }

// function buildCharMap(str){
//   const charMap={};
//   for (let char of str.replace(/[^\w]/g,"").toLowerCase()){
//     charMap[char]=charMap[char]+1||1;
    
//   }
//   return charMap;
// }
// console.log(anagram("He!!!llo!!!!","olleH"))
// second method
function anagram(stringA,stringB){
    return cleanString(stringA)===cleanString(stringB)
    
  }
  
  function cleanString(str){
    return str.replace(/[^\w]/g, "").toLowerCase().split("").sort().join("");
  }
  
  console.log(anagram("hello!!! world!!!!","world hello"))