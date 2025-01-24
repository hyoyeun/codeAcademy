let 이름: string = 'kim';

let 이름1: string[] = ['kim', 'park'];

type NameType = 'kim' | 'park';


function mul(x: number | string) {
    if (typeof x === 'number') {
        return x * 2;
    }
    else {
        return '연산을 진행할 수 없습니다';
    }
}

mul(5);
mul('한글');

type Member = [number, boolean];
let john: Member = [10, true];

let name01: string = 'kim';
name01 = 123;
let age2: number = 12;
let marry: boolean = true;
let or: null = null;
let un: undefined = undefined;

let myname = '방효윤';
let myage = 31;
type Song = { singer: string | number, songName: string | number };
let favoritSong: { singer: string | number, songName: string | number } = {
    'singer': 'BTS',
    'songName': '봄날2'
}

let favoritSong2: Song = {
    'singer': '신화',
    'songName': 'I Pray 4U'
}



let project: {
    member: string[],
    days: number,
    started: boolean
} = {
    member: ['kim', 'park'],
    days: 30,
    started: true,
}

let 회원들: (number | string)[] = [1, '2', 3];
let 오브젝트: { a: string | number } = { a: '123' };

let user: string = 'kim';
let age: undefined | number = undefined;
let married: boolean = false;
let 철수: (string | (undefined | number) | boolean)[] = [user, age, married];

let 학교: {
    score: (number | boolean)[],
    teacher: string,
    friend: string | string[],
}
    = {
    score: [100, 97, 84],
    teacher: 'Phil',
    friend: 'John'
}
학교.score[4] = false;
학교.friend = ['Lee', 학교.teacher]


function Hello(x?: string): void {
    if (x) {
        console.log('안녕하세요' + x + '입니다');
    } else {
        console.log('이름이 없습니다.');
    }
}

function CheckLength(x: string | number): void {
    if (typeof x === 'string') {
        console.log(x.length)
    } else {
        console.log(x.toString.length);
    }
}

function Ismarry(m: number, h: boolean | number, l: string | number): string | void {
    if (typeof l === 'number' || typeof h === 'number') {
        return null;
    }

    if (typeof l === 'string' && l === '상') {
        l = 100;
    } else {
        l = 0;
    }

    if (h) {
        h = 500;
    } else {
        h = 0;
    }

    let total = m + l + h;
    if (total >= 600) {
        return '결혼가능'
    }
} Ismarry(700, false, '중');
Ismarry(100, false, '상');