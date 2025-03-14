// 現在日付を定義
const today = new Date();

// 年を定義
const year  = today.getFullYear();
// 月を定義
const month = today.getUTCMonth() + 1;
// 日を定義
const day   = today.getDate();

// 現在の日付を出力
console.log(year + '年' + month + '月' + day + '日') ;