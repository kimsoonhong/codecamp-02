// 정수 n을 입력받아 n의 약수를 모두 더한 값을 리턴하는 함수, solution을 완성해주세요.

// 제한 사항
// n은 0 이상 3000이하인 정수입니다.
// 입출력 예
// n	return
// 12	28
// 5	6
// 입출력 예 설명
// 입출력 예 #1
// 12의 약수는 1, 2, 3, 4, 6, 12입니다. 이를 모두 더하면 28입니다.

// 입출력 예 #2
// 5의 약수는 1, 5입니다. 이를 모두 더하면 6입니다.




function solution(n) {
    var answer = 0;
    
for(let i=0; i<=n; i++) {
if(n % i == 0) {
answer = answer+i;
}
}
    
    return answer;
}





1.filter 는 해당 데이터의 타입이 배열일 경우에만 사용 할 수 있다.answer
2. new Array(n)  n개의 빈 배열을 생성함
3. .fill(str)  배열을 지정된 str으로 채움
4. idx  해당 데이터의 인덱스값  



function solution(n) {
    var answer = 0;
    
new Array(n)
    .fill(1)
    .filter((num, idx)=>{
        n%(num + idx) === 0     
            ? Array = Array + (num+idx)
            : null
    })



    return answer;
}










