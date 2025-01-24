var 이름 = 'kim';
var 이름1 = ['kim', 'park'];
function mul(x) {
    if (typeof x === 'number') {
        return x * 2;
    }
    else {
        return '연산을 진행할 수 없습니다';
    }
}
mul(5);
mul('한글');
var john = [10, true];
var name01 = 'kim';
name01 = 123;
var age2 = 12;
var marry = true;
var or = null;
var un = undefined;
var myname = '방효윤';
var myage = 31;
var favoritSong = {
    'singer': 'BTS',
    'songName': '봄날2'
};
var favoritSong2 = {
    'singer': '신화',
    'songName': 'I Pray 4U'
};
var project = {
    member: ['kim', 'park'],
    days: 30,
    started: true,
};
var 회원들 = [1, '2', 3];
var 오브젝트 = { a: '123' };
var user = 'kim';
var age = undefined;
var married = false;
var 철수 = [user, age, married];
var 학교 = {
    score: [100, 97, 84],
    teacher: 'Phil',
    friend: 'John'
};
학교.score[4] = false;
학교.friend = ['Lee', 학교.teacher];
function Hello(x) {
    if (x) {
        console.log('안녕하세요' + x + '입니다');
    }
    else {
        console.log('이름이 없습니다.');
    }
}
function CheckLength(x) {
    if (typeof x === 'string') {
        console.log(x.length);
    }
    else {
        console.log(x.toString.length);
    }
}
function Ismarry(m, h, l) {
    if (typeof l === 'number' || typeof h === 'number') {
        return null;
    }
    if (typeof l === 'string' && l === '상') {
        l = 100;
    }
    else {
        l = 0;
    }
    if (h) {
        h = 500;
    }
    else {
        h = 0;
    }
    var total = m + l + h;
    if (total >= 600) {
        return '결혼가능';
    }
}
Ismarry(700, false, '중');
Ismarry(100, false, '상');
