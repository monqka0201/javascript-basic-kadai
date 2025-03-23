// btnといidのHTML要素を定数に代入
const btn = document.getElementById('btn');

// textというidのHTML要素を定数に代入
const text = document.getElementById('text');

// ボタンをクリックしたときにイベント処理を実行
btn.addEventListener('click', () => {
  // 2000ミリ秒後に「ボタンをクリックしました」と表示
  setTimeout( () => {
    text.textContent = 'ボタンをクリックしました';
  }, 2000);
});
