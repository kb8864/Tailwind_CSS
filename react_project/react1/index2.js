// 分割代入などに使えるデフォルト値
// 値が設定されていない時に使えるのがデフォルト値
// 例：引数の名前がわからん場合、hello()のように引数を省略してしまうと、こんにちはundefinedさんという文言が表示されてしまう
//人物名がわからない場合は、こんにちはundefinedさんと表示するのではなく、こんにちはゲストさんと表示したいと

// const sayHello = (name = 'ゲスト') => {
//   console.log(`こんち${name}さん`);
// };
// sayHello();

// オブジェクトから初期値を分割代入するのはreactでもよく使う;
// const myProfile = {
//   age: 20,
// };
// const { age, name = 'ゲスト' } = myProfile;
// console.log(age);
// console.log(name);

//⭐️オブジェクトの省略方法
// 一次的に変数を持ちながら、オブジェクトを定義していく時
// const name = 'aaaa';
// const age = 27;
// const myProfile = { name, age };
// console.log(myProfile);

// ⭐️スプレッド構文(...変数))

// const art1 = [1, 2];
// console.log(art1); //1列目
// console.log(...art1); //2列目

// const sum = (num1, num2) => console.log(num1 + num2);
// sum(art1[0], art1[1]); //sumに代入された関数の実行//3列目

//⭐️mapやfilterを使った配列の処理
// const nameary = ['田中', '山田', '佐藤'];
// // for (let index = 0; index < nameary.length; index++) {
// //   console.log(nameary[index]);
// // } //これをmapを使って書き換える
// nameary.map((name) => {
//   console.log(name);
// });

// // ⭐️filterは配列の要素をフィルタリングして新規の配列を作成する。
// // ある要素を特定の配列から持ってきたい時などに使う
// const nameary = [1, 2, 3, 4, 5];
// const nameary2 = nameary.filter((num) => {
//   return num % 2 == 1; //奇数のみの配列を作る場合
// });
// console.log(nameary2);
