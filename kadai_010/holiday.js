const holidays = ["正月","成人の日","建国記念の日","天皇誕生日","春分の日","昭和の日","憲法記念日","みどりの日","こどもの日","海の日","山の日","敬老の日","秋分の日","スポーツの日","文化の日","勤労感謝の日"];

// --- for文の場合 ---
console.log("--- for文の出力結果 ---");

// 変数 i を 0 から始め、配列の長さ（holidays.length）より小さい間ループを回します
for (let i = 0; i < holidays.length; i++) {
    console.log(holidays[i]);
}


// --- while文の場合 ---
console.log("--- while文の出力結果 ---");

// カウンタ変数 i を初期化
let i = 0;

// i が配列の長さより小さい間ループを繰り返します
while (i < holidays.length) {
    console.log(holidays[i]);
    // 最後に i をインクリメント（1増やす）するのを忘れないようにします
    i++;
}