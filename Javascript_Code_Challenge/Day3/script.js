function maxChar(str){
    const charMap={}
    let max=0;
    let maxChar="";
    for(let char of str.toLowerCase()){
        // if(charMap[char]){
        //     charMap[char]++;
        // }else{
        //     charMap[char]=1;
        // }
        charMap[char]=charMap[char]+1||1;
    }
    for(let char in charMap){
        if(charMap[char]>max){
            max=charMap[char]
            maxChar=char
        }
    }
    return `Most no of character in the string: ${maxChar}`

}

console.log(maxChar("Hello WORLD!RR!"))