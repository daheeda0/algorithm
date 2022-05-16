//문제 설명
// 문자열 s는 한 개 이상의 단어로 구성되어 있습니다. 각 단어는 하나 이상의 공백문자로 구분되어 있습니다. 각 단어의 짝수번째 알파벳은 대문자로, 홀수번째 알파벳은 소문자로 바꾼 문자열을 리턴하는 함수, solution을 완성하세요.
//
// 제한 사항
// 문자열 전체의 짝/홀수 인덱스가 아니라, 단어(공백을 기준)별로 짝/홀수 인덱스를 판단해야합니다.
// 첫 번째 글자는 0번째 인덱스로 보아 짝수번째 알파벳으로 처리해야 합니다.

function solution(s) {
    let arr = s.split(' ') // 띄어쓰기 기준으로 배열에 단어를 넣어주기
        let result = [];

        for(let i = 0; i<arr.length; i++){
            let words = arr[i].split('').map((word,idx)=>{
                //그 배열만큼 반복문을 돌리는데, 각 단어마다 접근하기 위해 다시 split으로 단어마다 나눠주고 map을 사용하여 인덱스와 워드를 가져온다.
            if(idx % 2 === 0){
                return word.toUpperCase()
            } else if(word % 2 !== 0) {
                return word.toLowerCase();
                //인덱스를 2로 나눠 나머지가 0이면 인덱스 위치가 짝수임으로 toUpperCase() 해주고, 0이 아니라면 toLowerCase()해준다.
        }
    }).join(''); //그렇게 만든 각 알파벳을 join으로 다시 합친다.

            result.push(words) //이렇게 각각의 단어가 만들어지면 result라는 빈배열에 푸쉬해준다.
    }

    return result.join(' ') //배열안의 단어를 합치며 하나의 문자열로 만들기 위해 띄어쓰기를 기준으로 만들어준다.
}