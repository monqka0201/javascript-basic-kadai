// btnというidを持つHTML要素を取得し、定数に代入
const btn = document.getElementById('btn');

const newText = document.getElementById('text')

// ボタンがクリックされたときにイベント処理を実行
btn.addEventListener('click', () => {
  newText.textContent = 'ボタンをクリックしました';
});