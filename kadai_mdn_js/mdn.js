// 今日（現在）の日付情報を取得する
const today = new Date();

// 年を取得する (例: 2024)
const year = today.getFullYear();

// 月を取得する (注意：月は0から始まるため、+1をする必要があります)
// 0=1月、1=2月...9=10月 となるため、現在の月にするには +1 します
const month = today.getMonth() + 1;

// 日を取得する (例: 12)
const date = today.getDate();

// コンソールに指定された形式で出力する
console.log(year + '年' + month + '月' + date + '日');