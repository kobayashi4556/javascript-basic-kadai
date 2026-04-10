// HTML要素をそれぞれ定数に代入して取得する
const btn = document.getElementById('btn');
const text = document.getElementById('text');

// ボタンをクリックした時のイベントリスナーを追加
btn.addEventListener('click', () => {
  // 2秒後（2000ミリ秒後）に実行する非同期処理
  setTimeout(() => {
    // text要素の文章を書き換える
    text.textContent = 'ボタンをクリックしました';
  }, 2000);
});