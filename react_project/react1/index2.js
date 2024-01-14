// 分割代入などに使えるデフォルト値
// 値が設定されていない時に使えるのがデフォルト値
// 例：引数の名前がわからん場合、hello()のように引数を省略してしまうと、こんにちはundefinedさんという文言が表示されてしまう
//人物名がわからない場合は、こんにちはundefinedさんと表示するのではなく、こんにちはゲストさんと表示したいと

// const sayHello = (name = 'ゲスト') => {
//   console.log(`こんち${name}さん`);
// };
// sayHello();

オブジェクトから初期値を分割代入するのはreactでもよく使う;
const myProfile = {
  age: 20,
};
const { age, name = 'ゲスト' } = myProfile;
console.log(age);
console.log(name);
