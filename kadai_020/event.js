// btnというidを持つHTML要素を取得し、定数に代入
const btn = document.getElementById('btn');

// textというidを持つHTML要素を取得し、定数に代入
const newText = document.getElementById('text')

// ボタンがクリックされたときにイベント処理を実行
btn.addEventListener('click', () => {
  // newTextに「ボタンをクリックしました」と表示
  newText.textContent = 'ボタンをクリックしました';
});