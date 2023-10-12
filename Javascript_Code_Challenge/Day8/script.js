// function unChunked(array,size){
//     const chunked=[];
//     for(let item of array){
//         const lastElement=chunked[chunked.length-1];
//         if(!lastElement || lastElement.length===num){
//             chunked.push([item])
//         }else{
//             lastElement.push(item)
//         }

//     }
//     return chunked;

    

// }
// console.log(unChunked([1,2,3,4,5],2))

function chunked(array,size){
    const unChunked=[];
    let index=0;
    while(index<array.length){
        unChunked.push(array.slice(index,index+size))
        index+=size;
        
    }
    return unChunked;
}
console.log(chunked([1,2,3,4,5,6],2))
