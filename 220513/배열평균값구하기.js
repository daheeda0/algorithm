// 정수를 담고 있는 배열 arr의 평균값을 return하는 함수, solution을 완성해보세요.
//
// 제한사항
// arr은 길이 1 이상, 100 이하인 배열입니다.
// arr의 원소는 -10,000 이상 10,000 이하인 정수입니다.

function solution(arr) { //solution매서드안에 arr를 매개변수로 넣고
    var answer = 0; //배열 전체값을 더해주고 저장하기 위한 answer 변수 선언
    for(let i = 0; i < arr.length; i++) { //배열의 길이만큼 더해줘라
        answer += arr[i]; //다 더한 값인 answer은 arr의 값+answer
    }
    return answer/arr.length; //answer값을 배열길이만큼 나눠서 return해라.
}



