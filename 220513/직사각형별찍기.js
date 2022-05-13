//이 문제에는 표준 입력으로 두 개의 정수 n과 m이 주어집니다.
//별(*) 문자를 이용해 가로의 길이가 n, 세로의 길이가 m인 직사각형 형태를 출력해보세요.
//제한 조건 : n과 m은 각각 1000 이하인 자연수입니다.



process.stdin.setEncoding('utf8'); //값을 문자열로 받는다.
process.stdin.on('data', data => {
    const n = data.split(" "); //문자열로 받은 값을 띄어쓰기를 기준으로 나눈다.
    const a = Number(n[0]), b = Number(n[1]); //a=숫자로 바꾼 인덱스 0값 , b=숫자로 바꾼 인덱스 1값
    const row = '*'.repeat(a); //row값을 선언하고 '*' 을  a값(가로)만큼 반복해라.
    for(let i =0; i < b; i++){ //i는 0부터 시작하고  i가 b값(세로) 미만일떄까지 더하는것을 반복해라.
        console.log(row);//그 값을 console에 찍어라
    }

});