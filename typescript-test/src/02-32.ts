type PersonType1 = {no: number, name: string, email: string};
type PersonType2 = {no:number, name: string, tel: string};
type PersonTypeUnion = PersonType1 | PersonType2;

let p1 : PersonTypeUnion = {no: 1001, name: "홍길동", email: "gdhong@test.com"};
let p2 : PersonTypeUnion = {no: 1001, name: "홍길동", tel: "010-1111-1111"};