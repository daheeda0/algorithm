function solution(a, b) {
    var answer = '';

    var weekday = ['SUN','MON','TUE','WED','THU','FRI','SAT']
    answer = new Date(`2016, ${a}, ${b}`);
    //템플릿 리터럴을 사용, 2016년의 a(월), b(일)를 인수로 준다.
    //new Date()는 Date 타입인 새로운 객체를 생성, 인수를 생략하면 현재날짜를 나타내는 객체가 생성되고 인수가 전달되면
    //인수 형ㅌ채에 따라 새로운 Date객체가 생성된다.

    return weekday[answer.getDay()]; //getDay() 메서드로 0(일)~6(토)까지의 숫자 중 하나를 받아온다.
    //받아온 숫자를 배열 weekday의 인덱스로 반환한다.
}