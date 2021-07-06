function solution(arr){
    var result = [];
    
    for (let i=0; i <=arr.length; i += 1){
        if(arr[i] !== arr[i+1]) {
            result.push(arr[i]);
        }
    }
    
    return result;
}
