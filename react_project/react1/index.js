// const,let　変数宣言
// var val1 = 'valへんすう';
// console.log(val1);
// //val変数は上書き可能
// var val1 = 'valへんすう上書き';
// console.log(val1);
// //val変数は再宣言可能
// var val1 = 'val再宣言';
// console.log(val1);

// let宣言、上書き可能、宣言不可
//let l1 = 'let変数';
//console.log(l1);

// const宣言 、上書き不可、宣言不可、定数だしね。
// const c1 = 'const変数';
// console.log(c1);

//constで定義したオブジェクトはプロパティいの変更が可能
// const val1 = {
//   name: 'あいう',
// };
// val1.name = 'かきく';
// console.log(val1);

// ⭐️テンプレート文字列
// const name = 'あいう';
// const age = '20';
//従来の方法
// const i = '私の名前は' + name + 'です。年齢は' + age + 'です。';
// console.log(i);

// ⭐️テンプレート文字列
// const i2 = `私の名前は${name}です。年齢はまさかの${age}です。`;
// console.log(i2);

//⭐️アロー関数functionキーワードを使わずとも関数定義できる
// const 変数 =(x,y)=>{
//  処理;
//   }

// const func1 = (str) => {
//   return str;
// };
// console.log(func1('func1です'));

// const func2 = (num1, num2) => {
//   return num1 + num2;
// };
// console.log(func2(10, 2));

//⭐️オブジェクトを書く場合は{}を使う
//⭐️分割代入 {} [] これはオブジェクトや配列に使える
const myProfile = {
  name: '太郎 ',
  age: 20,
};

// const func3 = `名前は${myProfile.name}です。年齢は${myProfile.age}です。`;
// console.log(func3);

const { name, age } = myProfile;
const func4 = `名前は${myProfile.name}です。年齢は${myProfile.age}です。`;
console.log(func4);
