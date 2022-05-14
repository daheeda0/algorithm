function solution(a, b) {
    var answer = '';

    var weekday = ['SUN','MON','TUE','WED','THU','FRI','SAT']
    answer = new Date(`2016, ${a}, ${b}`); //템플릿 리터럴을 사용, 2016년의 a(월), b(일)를 인수로 준다.


    return weekday[answer.getDay()]; //getDay() 메서드로 0(일)~6(토)까지의 숫자 중 하나를 받아온다.
    //받아온 숫자를 배열 weekday의 인덱스로 반환한다.
}