function checkVowel(str){
    let counter=0;
    const checker=["a","e","i","o","u"]
    
    for(let char of str.toLowerCase()){
        if(checker.includes(char)){
            counter++
        }


        
    }
    return `"${str}" words has ${counter} vowels`
}

console.log(checkVowel("testing vowels"))