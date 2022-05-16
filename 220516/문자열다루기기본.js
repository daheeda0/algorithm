//문제 설명
// 문자열 s의 길이가 4 혹은 6이고, 숫자로만 구성돼있는지 확인해주는 함수, solution을 완성하세요.
// 예를 들어 s가 "a234"이면 False를 리턴하고 "1234"라면 True를 리턴하면 됩니다.

// 제한 사항
// s는 길이 1 이상, 길이 8 이하인 문자열입니다.



function solution(s) {
    if(s.length !== 4 && s.length !== 6)return false; // 길이가 4 혹은 6이 아니면 false 반환
    // 연결연산자 !== ->피연산자나 자료형이 같지않으면 true
    //논리연산자 && ->AND연산자/피연산자가 모두 true일경우에만 true가됨
    for(let i=0;i< s.length;i++) {
        if(isNaN(s)) return false;} // 각 자리중에 숫자가 아닌 것이 하나라도 있으면 false 반환
    //isNaN 매개변수가 숫자인지 검사하는 함수(NaN은 Not a Number)

    return true;// 위의 모든 조건에 포함되지 않으면  (길이가 4 혹은 6이고, 숫자로만 구성되어 있으면) true 반환
}