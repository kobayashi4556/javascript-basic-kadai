// HTML要素を定数に代入する
const btn = document.getElementById('btn');
const text = document.getElementById('text');

// ボタンがクリックされたときにイベント処理を実行する
btn.addEventListener('click', () => {
  // id="text"の文章を書き換える
  text.textContent = 'ボタンをクリックしました';
});