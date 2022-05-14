//전화번호가 문자열 phone_number로 주어졌을 때, 전화번호의 뒷 4자리를 제외한 나머지 숫자를 전부 *으로 가린 문자열을 리턴하는 함수, solution을 완성해주세요.
//
// 제한 조건
// phone_number는 길이 4 이상, 20이하인 문자열입니다.


function solution(phone_number) {
    var answer = '';
    answer='*'.repeat(phone_number.length - 4) + phone_number.slice(-4);
    //'*'을 phone_number이라는 배열에서 길이를 4만큼 줄이고, 남은 부분을 부분을 반복 해라. *******
    //'*'처리한 번호와 phone_number 배열에서 마지막 4개의 요소를 추출한 값을 더해라

    return answer;
}