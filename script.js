// === 198カ国完全データ（flagsapi.com flat/64.png 大文字コード）===
const FLAGS = [
  { name: "アフガニスタン", code: "AF", file: "https://flagsapi.com/AF/flat/64.png" },
  { name: "アルバニア", code: "AL", file: "https://flagsapi.com/AL/flat/64.png" },
  { name: "アルジェリア", code: "DZ", file: "https://flagsapi.com/DZ/flat/64.png" },
  { name: "アンドラ", code: "AD", file: "https://flagsapi.com/AD/flat/64.png" },
  { name: "アンゴラ", code: "AO", file: "https://flagsapi.com/AO/flat/64.png" },
  { name: "アンティグア・バーブーダ", code: "AG", file: "https://flagsapi.com/AG/flat/64.png" },
  { name: "アルゼンチン", code: "AR", file: "https://flagsapi.com/AR/flat/64.png" },
  { name: "アルメニア", code: "AM", file: "https://flagsapi.com/AM/flat/64.png" },
  { name: "オーストラリア", code: "AU", file: "https://flagsapi.com/AU/flat/64.png" },
  { name: "オーストリア", code: "AT", file: "https://flagsapi.com/AT/flat/64.png" },
  { name: "アゼルバイジャン", code: "AZ", file: "https://flagsapi.com/AZ/flat/64.png" },
  { name: "バハマ", code: "BS", file: "https://flagsapi.com/BS/flat/64.png" },
  { name: "バーレーン", code: "BH", file: "https://flagsapi.com/BH/flat/64.png" },
  { name: "バングラデシュ", code: "BD", file: "https://flagsapi.com/BD/flat/64.png" },
  { name: "バルバドス", code: "BB", file: "https://flagsapi.com/BB/flat/64.png" },
  { name: "ベラルーシ", code: "BY", file: "https://flagsapi.com/BY/flat/64.png" },
  { name: "ベルギー", code: "BE", file: "https://flagsapi.com/BE/flat/64.png" },
  { name: "ベリーズ", code: "BZ", file: "https://flagsapi.com/BZ/flat/64.png" },
  { name: "ベナン", code: "BJ", file: "https://flagsapi.com/BJ/flat/64.png" },
  { name: "ブータン", code: "BT", file: "https://flagsapi.com/BT/flat/64.png" },
  { name: "ボリビア", code: "BO", file: "https://flagsapi.com/BO/flat/64.png" },
  { name: "ボスニア・ヘルツェゴビナ", code: "BA", file: "https://flagsapi.com/BA/flat/64.png" },
  { name: "ボツワナ", code: "BW", file: "https://flagsapi.com/BW/flat/64.png" },
  { name: "ブラジル", code: "BR", file: "https://flagsapi.com/BR/flat/64.png" },
  { name: "ブルネイ", code: "BN", file: "https://flagsapi.com/BN/flat/64.png" },
  { name: "ブルガリア", code: "BG", file: "https://flagsapi.com/BG/flat/64.png" },
  { name: "ブルキナファソ", code: "BF", file: "https://flagsapi.com/BF/flat/64.png" },
  { name: "ブルンジ", code: "BI", file: "https://flagsapi.com/BI/flat/64.png" },
  { name: "カーボベルデ", code: "CV", file: "https://flagsapi.com/CV/flat/64.png" },
  { name: "カンボジア", code: "KH", file: "https://flagsapi.com/KH/flat/64.png" },
  { name: "カメルーン", code: "CM", file: "https://flagsapi.com/CM/flat/64.png" },
  { name: "カナダ", code: "CA", file: "https://flagsapi.com/CA/flat/64.png" },
  { name: "中央アフリカ", code: "CF", file: "https://flagsapi.com/CF/flat/64.png" },
  { name: "チャド", code: "TD", file: "https://flagsapi.com/TD/flat/64.png" },
  { name: "チリ", code: "CL", file: "https://flagsapi.com/CL/flat/64.png" },
  { name: "ちゅうごく", code: "CN", file: "https://flagsapi.com/CN/flat/64.png" },
  { name: "コロンビア", code: "CO", file: "https://flagsapi.com/CO/flat/64.png" },
  { name: "コモロ", code: "KM", file: "https://flagsapi.com/KM/flat/64.png" },
  { name: "コンゴきょうわこく", code: "CG", file: "https://flagsapi.com/CG/flat/64.png" },
  { name: "コンゴみんしゅこく", code: "CD", file: "https://flagsapi.com/CD/flat/64.png" },
  { name: "コスタリカ", code: "CR", file: "https://flagsapi.com/CR/flat/64.png" },
  { name: "コートジボワール", code: "CI", file: "https://flagsapi.com/CI/flat/64.png" },
  { name: "クロアチア", code: "HR", file: "https://flagsapi.com/HR/flat/64.png" },
  { name: "キューバ", code: "CU", file: "https://flagsapi.com/CU/flat/64.png" },
  { name: "キプロス", code: "CY", file: "https://flagsapi.com/CY/flat/64.png" },
  { name: "チェコ", code: "CZ", file: "https://flagsapi.com/CZ/flat/64.png" },
  { name: "デンマーク", code: "DK", file: "https://flagsapi.com/DK/flat/64.png" },
  { name: "ジブチ", code: "DJ", file: "https://flagsapi.com/DJ/flat/64.png" },
  { name: "ドミニカ", code: "DM", file: "https://flagsapi.com/DM/flat/64.png" },
  { name: "ドミニカきょうわこく", code: "DO", file: "https://flagsapi.com/DO/flat/64.png" },
  { name: "エクアドル", code: "EC", file: "https://flagsapi.com/EC/flat/64.png" },
  { name: "エジプト", code: "EG", file: "https://flagsapi.com/EG/flat/64.png" },
  { name: "エルサルバドル", code: "SV", file: "https://flagsapi.com/SV/flat/64.png" },
  { name: "赤道ギニア", code: "GQ", file: "https://flagsapi.com/GQ/flat/64.png" },
  { name: "エリトリア", code: "ER", file: "https://flagsapi.com/ER/flat/64.png" },
  { name: "エストニア", code: "EE", file: "https://flagsapi.com/EE/flat/64.png" },
  { name: "エスワティニ", code: "SZ", file: "https://flagsapi.com/SZ/flat/64.png" },
  { name: "エチオピア", code: "ET", file: "https://flagsapi.com/ET/flat/64.png" },
  { name: "フィジー", code: "FJ", file: "https://flagsapi.com/FJ/flat/64.png" },
  { name: "フィンランド", code: "FI", file: "https://flagsapi.com/FI/flat/64.png" },
  { name: "フランス", code: "FR", file: "https://flagsapi.com/FR/flat/64.png" },
  { name: "ガボン", code: "GA", file: "https://flagsapi.com/GA/flat/64.png" },
  { name: "ガンビア", code: "GM", file: "https://flagsapi.com/GM/flat/64.png" },
  { name: "ジョージア", code: "GE", file: "https://flagsapi.com/GE/flat/64.png" },
  { name: "ドイツ", code: "DE", file: "https://flagsapi.com/DE/flat/64.png" },
  { name: "ガーナ", code: "GH", file: "https://flagsapi.com/GH/flat/64.png" },
  { name: "ギリシャ", code: "GR", file: "https://flagsapi.com/GR/flat/64.png" },
  { name: "グレナダ", code: "GD", file: "https://flagsapi.com/GD/flat/64.png" },
  { name: "グアテマラ", code: "GT", file: "https://flagsapi.com/GT/flat/64.png" },
  { name: "ギニア", code: "GN", file: "https://flagsapi.com/GN/flat/64.png" },
  { name: "ギニアビサウ", code: "GW", file: "https://flagsapi.com/GW/flat/64.png" },
  { name: "ガイアナ", code: "GY", file: "https://flagsapi.com/GY/flat/64.png" },
  { name: "ハイチ", code: "HT", file: "https://flagsapi.com/HT/flat/64.png" },
  { name: "ホンジュラス", code: "HN", file: "https://flagsapi.com/HN/flat/64.png" },
  { name: "ハンガリー", code: "HU", file: "https://flagsapi.com/HU/flat/64.png" },
  { name: "アイスランド", code: "IS", file: "https://flagsapi.com/IS/flat/64.png" },
  { name: "インド", code: "IN", file: "https://flagsapi.com/IN/flat/64.png" },
  { name: "インドネシア", code: "ID", file: "https://flagsapi.com/ID/flat/64.png" },
  { name: "イラン", code: "IR", file: "https://flagsapi.com/IR/flat/64.png" },
  { name: "イラク", code: "IQ", file: "https://flagsapi.com/IQ/flat/64.png" },
  { name: "アイルランド", code: "IE", file: "https://flagsapi.com/IE/flat/64.png" },
  { name: "イスラエル", code: "IL", file: "https://flagsapi.com/IL/flat/64.png" },
  { name: "イタリア", code: "IT", file: "https://flagsapi.com/IT/flat/64.png" },
  { name: "ジャマイカ", code: "JM", file: "https://flagsapi.com/JM/flat/64.png" },
  { name: "にほん", code: "JP", file: "https://flagsapi.com/JP/flat/64.png" },
  { name: "ヨルダン", code: "JO", file: "https://flagsapi.com/JO/flat/64.png" },
  { name: "カザフスタン", code: "KZ", file: "https://flagsapi.com/KZ/flat/64.png" },
  { name: "ケニア", code: "KE", file: "https://flagsapi.com/KE/flat/64.png" },
  { name: "キリバス", code: "KI", file: "https://flagsapi.com/KI/flat/64.png" },
  { name: "クウェート", code: "KW", file: "https://flagsapi.com/KW/flat/64.png" },
  { name: "キルギス", code: "KG", file: "https://flagsapi.com/KG/flat/64.png" },
  { name: "ラオス", code: "LA", file: "https://flagsapi.com/LA/flat/64.png" },
  { name: "ラトビア", code: "LV", file: "https://flagsapi.com/LV/flat/64.png" },
  { name: "レバノン", code: "LB", file: "https://flagsapi.com/LB/flat/64.png" },
  { name: "レソト", code: "LS", file: "https://flagsapi.com/LS/flat/64.png" },
  { name: "リベリア", code: "LR", file: "https://flagsapi.com/LR/flat/64.png" },
  { name: "リビア", code: "LY", file: "https://flagsapi.com/LY/flat/64.png" },
  { name: "リヒテンシュタイン", code: "LI", file: "https://flagsapi.com/LI/flat/64.png" },
  { name: "リトアニア", code: "LT", file: "https://flagsapi.com/LT/flat/64.png" },
  { name: "ルクセンブルク", code: "LU", file: "https://flagsapi.com/LU/flat/64.png" },
  { name: "マダガスカル", code: "MG", file: "https://flagsapi.com/MG/flat/64.png" },
  { name: "マラウイ", code: "MW", file: "https://flagsapi.com/MW/flat/64.png" },
  { name: "マレーシア", code: "MY", file: "https://flagsapi.com/MY/flat/64.png" },
  { name: "モルディブ", code: "MV", file: "https://flagsapi.com/MV/flat/64.png" },
  { name: "マリ", code: "ML", file: "https://flagsapi.com/ML/flat/64.png" },
  { name: "マルタ", code: "MT", file: "https://flagsapi.com/MT/flat/64.png" },
  { name: "マーシャルしょとう", code: "MH", file: "https://flagsapi.com/MH/flat/64.png" },
  { name: "モーリタニア", code: "MR", file: "https://flagsapi.com/MR/flat/64.png" },
  { name: "モーリシャス", code: "MU", file: "https://flagsapi.com/MU/flat/64.png" },
  { name: "メキシコ", code: "MX", file: "https://flagsapi.com/MX/flat/64.png" },
  { name: "ミクロネシア", code: "FM", file: "https://flagsapi.com/FM/flat/64.png" },
  { name: "モルドバ", code: "MD", file: "https://flagsapi.com/MD/flat/64.png" },
  { name: "モナコ", code: "MC", file: "https://flagsapi.com/MC/flat/64.png" },
  { name: "モンゴル", code: "MN", file: "https://flagsapi.com/MN/flat/64.png" },
  { name: "モンテネグロ", code: "ME", file: "https://flagsapi.com/ME/flat/64.png" },
  { name: "モロッコ", code: "MA", file: "https://flagsapi.com/MA/flat/64.png" },
  { name: "モザンビーク", code: "MZ", file: "https://flagsapi.com/MZ/flat/64.png" },
  { name: "ミャンマー", code: "MM", file: "https://flagsapi.com/MM/flat/64.png" },
  { name: "ナミビア", code: "NA", file: "https://flagsapi.com/NA/flat/64.png" },
  { name: "ナウル", code: "NR", file: "https://flagsapi.com/NR/flat/64.png" },
  { name: "ネパール", code: "NP", file: "https://flagsapi.com/NP/flat/64.png" },
  { name: "オランダ", code: "NL", file: "https://flagsapi.com/NL/flat/64.png" },
  { name: "ニュージーランド", code: "NZ", file: "https://flagsapi.com/NZ/flat/64.png" },
  { name: "ニカラグア", code: "NI", file: "https://flagsapi.com/NI/flat/64.png" },
  { name: "ニジェール", code: "NE", file: "https://flagsapi.com/NE/flat/64.png" },
  { name: "ナイジェリア", code: "NG", file: "https://flagsapi.com/NG/flat/64.png" },
  { name: "北朝鮮", code: "KP", file: "https://flagsapi.com/KP/flat/64.png" },
  { name: "北マケドニア", code: "MK", file: "https://flagsapi.com/MK/flat/64.png" },
  { name: "ノルウェー", code: "NO", file: "https://flagsapi.com/NO/flat/64.png" },
  { name: "オマーン", code: "OM", file: "https://flagsapi.com/OM/flat/64.png" },
  { name: "パキスタン", code: "PK", file: "https://flagsapi.com/PK/flat/64.png" },
  { name: "パラオ", code: "PW", file: "https://flagsapi.com/PW/flat/64.png" },
  { name: "パナマ", code: "PA", file: "https://flagsapi.com/PA/flat/64.png" },
  { name: "パプアニューギニア", code: "PG", file: "https://flagsapi.com/PG/flat/64.png" },
  { name: "パラグアイ", code: "PY", file: "https://flagsapi.com/PY/flat/64.png" },
  { name: "ペルー", code: "PE", file: "https://flagsapi.com/PE/flat/64.png" },
  { name: "フィリピン", code: "PH", file: "https://flagsapi.com/PH/flat/64.png" },
  { name: "ポーランド", code: "PL", file: "https://flagsapi.com/PL/flat/64.png" },
  { name: "ポルトガル", code: "PT", file: "https://flagsapi.com/PT/flat/64.png" },
  { name: "カタール", code: "QA", file: "https://flagsapi.com/QA/flat/64.png" },
  { name: "ルーマニア", code: "RO", file: "https://flagsapi.com/RO/flat/64.png" },
  { name: "ロシア", code: "RU", file: "https://flagsapi.com/RU/flat/64.png" },
  { name: "ルワンダ", code: "RW", file: "https://flagsapi.com/RW/flat/64.png" },
  { name: "セントクリストファー・ネーヴィス", code: "KN", file: "https://flagsapi.com/KN/flat/64.png" },
  { name: "セントルシア", code: "LC", file: "https://flagsapi.com/LC/flat/64.png" },
  { name: "セントビンセントおよびグレナディーン", code: "VC", file: "https://flagsapi.com/VC/flat/64.png" },
  { name: "サモア", code: "WS", file: "https://flagsapi.com/WS/flat/64.png" },
  { name: "サンマリノ", code: "SM", file: "https://flagsapi.com/SM/flat/64.png" },
  { name: "サントメ・プリンシペ", code: "ST", file: "https://flagsapi.com/ST/flat/64.png" },
  { name: "サウジアラビア", code: "SA", file: "https://flagsapi.com/SA/flat/64.png" },
  { name: "セネガル", code: "SN", file: "https://flagsapi.com/SN/flat/64.png" },
  { name: "セルビア", code: "RS", file: "https://flagsapi.com/RS/flat/64.png" },
  { name: "セーシェル", code: "SC", file: "https://flagsapi.com/SC/flat/64.png" },
  { name: "シエラレオネ", code: "SL", file: "https://flagsapi.com/SL/flat/64.png" },
  { name: "シンガポール", code: "SG", file: "https://flagsapi.com/SG/flat/64.png" },
  { name: "スロバキア", code: "SK", file: "https://flagsapi.com/SK/flat/64.png" },
  { name: "スロベニア", code: "SI", file: "https://flagsapi.com/SI/flat/64.png" },
  { name: "ソロモンしょとう", code: "SB", file: "https://flagsapi.com/SB/flat/64.png" },
  { name: "ソマリア", code: "SO", file: "https://flagsapi.com/SO/flat/64.png" },
  { name: "南アフリカ", code: "ZA", file: "https://flagsapi.com/ZA/flat/64.png" },
  { name: "韓国", code: "KR", file: "https://flagsapi.com/KR/flat/64.png" },
  { name: "南スーダン", code: "SS", file: "https://flagsapi.com/SS/flat/64.png" },
  { name: "スペイン", code: "ES", file: "https://flagsapi.com/ES/flat/64.png" },
  { name: "スリランカ", code: "LK", file: "https://flagsapi.com/LK/flat/64.png" },
  { name: "スーダン", code: "SD", file: "https://flagsapi.com/SD/flat/64.png" },
  { name: "スリナム", code: "SR", file: "https://flagsapi.com/SR/flat/64.png" },
  { name: "スウェーデン", code: "SE", file: "https://flagsapi.com/SE/flat/64.png" },
  { name: "スイス", code: "CH", file: "https://flagsapi.com/CH/flat/64.png" },
  { name: "シリア", code: "SY", file: "https://flagsapi.com/SY/flat/64.png" },
  { name: "タジキスタン", code: "TJ", file: "https://flagsapi.com/TJ/flat/64.png" },
  { name: "タンザニア", code: "TZ", file: "https://flagsapi.com/TZ/flat/64.png" },
  { name: "タイ", code: "TH", file: "https://flagsapi.com/TH/flat/64.png" },
  { name: "東ティモール", code: "TL", file: "https://flagsapi.com/TL/flat/64.png" },
  { name: "トーゴ", code: "TG", file: "https://flagsapi.com/TG/flat/64.png" },
  { name: "トンガ", code: "TO", file: "https://flagsapi.com/TO/flat/64.png" },
  { name: "トリニダード・トバゴ", code: "TT", file: "https://flagsapi.com/TT/flat/64.png" },
  { name: "チュニジア", code: "TN", file: "https://flagsapi.com/TN/flat/64.png" },
  { name: "トルコ", code: "TR", file: "https://flagsapi.com/TR/flat/64.png" },
  { name: "トルクメニスタン", code: "TM", file: "https://flagsapi.com/TM/flat/64.png" },
  { name: "ツバル", code: "TV", file: "https://flagsapi.com/TV/flat/64.png" },
  { name: "ウガンダ", code: "UG", file: "https://flagsapi.com/UG/flat/64.png" },
  { name: "ウクライナ", code: "UA", file: "https://flagsapi.com/UA/flat/64.png" },
  { name: "アラブ首長国連邦", code: "AE", file: "https://flagsapi.com/AE/flat/64.png" },
  { name: "イギリス", code: "GB", file: "https://flagsapi.com/GB/flat/64.png" },
  { name: "アメリカ", code: "US", file: "https://flagsapi.com/US/flat/64.png" },
  { name: "ウルグアイ", code: "UY", file: "https://flagsapi.com/UY/flat/64.png" },
  { name: "ウズベキスタン", code: "UZ", file: "https://flagsapi.com/UZ/flat/64.png" },
  { name: "バヌアツ", code: "VU", file: "https://flagsapi.com/VU/flat/64.png" },
  { name: "ベネズエラ", code: "VE", file: "https://flagsapi.com/VE/flat/64.png" },
  { name: "ベトナム", code: "VN", file: "https://flagsapi.com/VN/flat/64.png" },
  { name: "イエメン", code: "YE", file: "https://flagsapi.com/YE/flat/64.png" },
  { name: "ザンビア", code: "ZM", file: "https://flagsapi.com/ZM/flat/64.png" },
  { name: "ジンバブエ", code: "ZW", file: "https://flagsapi.com/ZW/flat/64.png" },
  { name: "バチカン", code: "VA", file: "https://flagsapi.com/VA/flat/64.png" },
  { name: "コソボ", code: "XK", file: "https://flagsapi.com/XK/flat/64.png" },
  { name: "クックしょとう", code: "CK", file: "https://flagsapi.com/CK/flat/64.png" },
  { name: "ニウエ", code: "NU", file: "https://flagsapi.com/NU/flat/64.png" },
  { name: "たいわん", code: "TW", file: "https://flagsapi.com/TW/flat/64.png" }
];

let quizFlags = [];
let currentFlag = null;
let questionCount = 0;
let correctCount = 0;
let missedFlags = []; // 誤答記憶（セッション）
let missRecords = JSON.parse(localStorage.getItem('flag_miss_records')) || {}; // 日付別誤答
const TOTAL_QUESTIONS = 20;
const STORAGE_KEY = 'flag_quiz_records';
const MISS_STORAGE_KEY = 'flag_miss_records';
const FALLBACK_IMG = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjY0IiBoZWlnaHQ9IjY0IiBmaWxsPSIjY2NjIi8+PHRleHQgeD0iMzIiIHk9IjQwIiBmb250LXNpemU9IjI0IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWxsPSJ3aGl0ZSI+PyI8L3RleHQ+PC9zdmc+';

const audioCtx = new (window.AudioContext || window.webkitAudioContext)();

// 正答音：楽しいチャイム風
const playCorrectChime = () => {
  [880, 1100, 1320].forEach((freq, i) => {
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    osc.connect(gain); gain.connect(audioCtx.destination);
    osc.frequency.value = freq;
    gain.gain.setValueAtTime(0.3, audioCtx.currentTime + i * 0.1);
    gain.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + i * 0.1 + 0.2);
    osc.start(audioCtx.currentTime + i * 0.1);
    osc.stop(audioCtx.currentTime + i * 0.1 + 0.2);
  });
};

// 不正解音
const playWrongBeep = () => {
  const osc = audioCtx.createOscillator();
  const gain = audioCtx.createGain();
  osc.connect(gain); gain.connect(audioCtx.destination);
  osc.frequency.value = 300;
  gain.gain.setValueAtTime(0.3, audioCtx.currentTime);
  gain.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.3);
  osc.start(); osc.stop(audioCtx.currentTime + 0.3);
};

const speak = (text) => {
  const utter = new SpeechSynthesisUtterance(text);
  utter.lang = "ja-JP"; utter.rate = 0.9;
  speechSynthesis.speak(utter);
};

const canvas = document.getElementById("confetti");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth; canvas.height = window.innerHeight;
let particles = [];

// 紙吹雪：ゆっくり広がる
function createConfetti() {
  particles = [];
  const fountainX = canvas.width / 2;
  for (let i = 0; i < 300; i++) {
    const angle = (Math.random() - 0.5) * Math.PI / 2;
    const speed = Math.random() * 4 + 6;
    particles.push({
      x: fountainX + (Math.random() - 0.5) * 100,
      y: canvas.height + 50,
      vx: Math.cos(angle) * speed * (Math.random() > 0.5 ? 1 : -1),
      vy: -speed - Math.random() * 3,
      color: ["#FFEB3B","#FF5252","#4CAF50","#2196F3","#FF9800"][Math.floor(Math.random()*5)],
      size: Math.random() * 8 + 4,
      gravity: 0.15,
      drag: 0.99
    });
  }
}

function drawConfetti() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  particles.forEach(p => {
    ctx.fillStyle = p.color;
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
    ctx.fill();
    p.vx *= p.drag;
    p.vy += p.gravity;
    p.x += p.vx;
    p.y += p.vy;
  });
  particles = particles.filter(p => p.y < canvas.height + 50 && Math.abs(p.vx) > 0.05);
  if (particles.length > 0) requestAnimationFrame(drawConfetti);
}

let records = JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};
const getToday = () => new Date().toISOString().split('T')[0];

function prepareQuiz() {
  let selected = [];
  if (missedFlags.length > 0) {
    const retry = missedFlags.splice(Math.floor(Math.random() * missedFlags.length), 1)[0];
    selected.push(retry);
  }
  const remaining = TOTAL_QUESTIONS - selected.length;
  const pool = FLAGS.filter(f => !selected.some(s => s.code === f.code));
  const randoms = pool.sort(() => Math.random() - 0.5).slice(0, remaining);
  quizFlags = [...selected, ...randoms];
  questionCount = 0;
  correctCount = 0;
}

function newQuestion() {
  if (questionCount >= quizFlags.length) return;
  currentFlag = quizFlags[questionCount];
  const otherFlags = FLAGS.filter(f => f.code !== currentFlag.code);
  const wrongChoices = otherFlags.sort(() => Math.random() - 0.5).slice(0, 3);
  const choices = [currentFlag, ...wrongChoices].sort(() => Math.random() - 0.5);

  document.getElementById("flag-area").innerHTML = `<img src="${currentFlag.file}" alt="" loading="eager" onerror="this.src='${FALLBACK_IMG}'">`;
  document.getElementById("progress").textContent = `${questionCount + 1} / ${TOTAL_QUESTIONS}`;

  const choicesDiv = document.getElementById("choices");
  choicesDiv.innerHTML = "";
  choices.forEach(c => {
    const btn = document.createElement("button");
    btn.className = "choice-btn";
    btn.textContent = c.name;
    btn.onclick = () => selectAnswer(c === currentFlag, btn, choices);
    choicesDiv.appendChild(btn);
  });

  document.getElementById("feedback").classList.remove("show");
  canvas.style.display = "none";
}

function selectAnswer(isCorrect, btn, choices) {
  [...document.querySelectorAll(".choice-btn")].forEach(b => b.disabled = true);
  const feedback = document.getElementById("feedback");

  if (isCorrect) {
    correctCount++;
    btn.classList.add("correct");
    feedback.textContent = "○"; feedback.className = "show mar";
    playCorrectChime();
    canvas.style.display = "block";
    createConfetti(); drawConfetti();
  } else {
    if (!missedFlags.some(f => f.code === currentFlag.code)) {
      missedFlags.push(currentFlag);
    }
    const today = getToday();
    if (!missRecords[today]) missRecords[today] = [];
    if (!missRecords[today].includes(currentFlag.code)) {
      missRecords[today].push(currentFlag.code);
      localStorage.setItem(MISS_STORAGE_KEY, JSON.stringify(missRecords));
    }

    feedback.textContent = "×"; feedback.className = "show batsu";
    playWrongBeep();
    choices.forEach((c, i) => {
      if (c === currentFlag) {
        document.querySelectorAll(".choice-btn")[i].classList.add("highlight");
      }
    });
  }

  questionCount++;
  setTimeout(() => {
    if (questionCount >= TOTAL_QUESTIONS) {
      endQuiz();
    } else {
      newQuestion();
    }
  }, 2000);
}

function endQuiz() {
  const rate = correctCount / TOTAL_QUESTIONS;
  document.getElementById("game-screen").classList.add("hidden");
  
  if (rate >= 0.9) {
    showRewardPopup();
  } else {
    document.getElementById("start-screen").classList.remove("hidden");
    speak("おわり！またチャレンジしてね！");
  }
}

function showRewardPopup() {
  const today = getToday();
  const todayGained = records[today] || [];
  const available = FLAGS.filter(f => !todayGained.includes(f.code));
  
  let reward;
  if (available.length === 0) {
    reward = FLAGS[Math.floor(Math.random() * FLAGS.length)];
  } else {
    reward = available[Math.floor(Math.random() * available.length)];
  }
  
  document.getElementById("reward-flag").src = reward.file;
  document.getElementById("reward-flag").onerror = function() { this.src = FALLBACK_IMG; };
  document.getElementById("reward-name").textContent = reward.name;
  document.getElementById("reward-popup").classList.remove("hidden");
  speak(`やったね！${reward.name}を ゲット！`);
  
  if (!records[today]) records[today] = [];
  if (!records[today].includes(reward.code)) {
    records[today].push(reward.code);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(records));
  }
}

document.getElementById("reward-ok").onclick = () => {
  document.getElementById("reward-popup").classList.add("hidden");
  document.getElementById("start-screen").classList.remove("hidden");
};

// まちがいきろく
document.getElementById("miss-btn").onclick = showMissHistory;
document.getElementById("miss-back-btn").onclick = () => {
  document.getElementById("miss-screen").classList.add("hidden");
  document.getElementById("start-screen").classList.remove("hidden");
};

function showMissHistory() {
  document.getElementById("start-screen").classList.add("hidden");
  document.getElementById("miss-screen").classList.remove("hidden");
  
  const list = document.getElementById("miss-list");
  list.innerHTML = "";
  
  const dates = Object.keys(missRecords).sort((a,b) => b.localeCompare(a));
  const cutoff = new Date();
  cutoff.setDate(cutoff.getDate() - 30);
  const cutoffStr = cutoff.toISOString().split('T')[0];
  
  const recentDates = dates.filter(d => d >= cutoffStr);
  if (recentDates.length === 0) {
    list.innerHTML = "<p style='font-size:36px; color:#666;'>まちがいが ありません！えらい！</p>";
    return;
  }
  
  recentDates.forEach(date => {
    const dayDiv = document.createElement("div");
    dayDiv.className = "miss-day";
    
    const dateSpan = document.createElement("span");
    dateSpan.className = "miss-date";
    dateSpan.textContent = date.replace(/-/g, '/');
    dayDiv.appendChild(dateSpan);
    
    const flagsDiv = document.createElement("div");
    flagsDiv.className = "miss-flags";
    missRecords[date].forEach(code => {
      const f = FLAGS.find(x => x.code === code);
      if (f) {
        const img = document.createElement("img");
        img.src = f.file;
        img.alt = f.name;
        img.title = f.name;
        img.loading = "eager";
        img.onerror = function() { this.src = FALLBACK_IMG; };
        img.onclick = () => startReview(f);
        flagsDiv.appendChild(img);
      }
    });
    dayDiv.appendChild(flagsDiv);
    list.appendChild(dayDiv);
  });
}

// 復習クイズ
let reviewFlag;
function startReview(flag) {
  reviewFlag = flag;
  document.getElementById("miss-screen").classList.add("hidden");
  document.getElementById("review-screen").classList.remove("hidden");
  
  const otherFlags = FLAGS.filter(f => f.code !== flag.code);
  const wrongChoices = otherFlags.sort(() => Math.random() - 0.5).slice(0, 3);
  const choices = [flag, ...wrongChoices].sort(() => Math.random() - 0.5);

  document.getElementById("review-flag-area").innerHTML = `<img src="${flag.file}" alt="" loading="eager" onerror="this.src='${FALLBACK_IMG}'">`;

  const choicesDiv = document.getElementById("review-choices");
  choicesDiv.innerHTML = "";
  choices.forEach(c => {
    const btn = document.createElement("button");
    btn.className = "choice-btn";
    btn.textContent = c.name;
    btn.onclick = () => reviewAnswer(c === flag, btn, choices);
    choicesDiv.appendChild(btn);
  });

  document.getElementById("review-feedback").classList.remove("show");
}

function reviewAnswer(isCorrect, btn, choices) {
  [...document.querySelectorAll("#review-choices .choice-btn")].forEach(b => b.disabled = true);
  const feedback = document.getElementById("review-feedback");

  if (isCorrect) {
    btn.classList.add("correct");
    feedback.textContent = "○"; feedback.className = "show mar";
    playCorrectChime();
  } else {
    feedback.textContent = "×"; feedback.className = "show batsu";
    playWrongBeep();
    choices.forEach((c, i) => {
      if (c === reviewFlag) {
        document.querySelectorAll("#review-choices .choice-btn")[i].classList.add("highlight");
      }
    });
  }

  setTimeout(() => {
    document.getElementById("review-screen").classList.add("hidden");
    document.getElementById("miss-screen").classList.remove("hidden");
  }, 2000);
}

document.getElementById("review-back-btn").onclick = () => {
  document.getElementById("review-screen").classList.add("hidden");
  document.getElementById("miss-screen").classList.remove("hidden");
};

// がんばりきろく
document.getElementById("history-btn").onclick = showHistory;
document.getElementById("back-btn").onclick = () => {
  document.getElementById("history-screen").classList.add("hidden");
  document.getElementById("start-screen").classList.remove("hidden");
};

function showHistory() {
  document.getElementById("start-screen").classList.add("hidden");
  document.getElementById("history-screen").classList.remove("hidden");
  
  const list = document.getElementById("history-list");
  list.innerHTML = "";
  
  const dates = Object.keys(records).sort((a,b) => b.localeCompare(a));
  const cutoff = new Date();
  cutoff.setDate(cutoff.getDate() - 30);
  const cutoffStr = cutoff.toISOString().split('T')[0];
  
  const recentDates = dates.filter(d => d >= cutoffStr);
  if (recentDates.length === 0) {
    list.innerHTML = "<p style='font-size:36px; color:#666;'>まだきろくが ありません。</p>";
    return;
  }
  
  recentDates.forEach(date => {
    const dayDiv = document.createElement("div");
    dayDiv.className = "history-day";
    
    const dateSpan = document.createElement("span");
    dateSpan.className = "history-date";
    dateSpan.textContent = date.replace(/-/g, '/');
    dayDiv.appendChild(dateSpan);
    
    const flagsDiv = document.createElement("div");
    flagsDiv.className = "history-flags";
    records[date].forEach(code => {
      const f = FLAGS.find(x => x.code === code);
      if (f) {
        const img = document.createElement("img");
        img.src = f.file;
        img.alt = f.name;
        img.title = f.name;
        img.onerror = function() { this.src = FALLBACK_IMG; };
        flagsDiv.appendChild(img);
      }
    });
    dayDiv.appendChild(flagsDiv);
    list.appendChild(dayDiv);
  });
}

document.getElementById("start-btn").onclick = () => {
  document.getElementById("start-screen").classList.add("hidden");
  document.getElementById("game-screen").classList.remove("hidden");
  prepareQuiz();
  newQuestion();
};

window.addEventListener("resize", () => {
  canvas.width = window.innerWidth; canvas.height = window.innerHeight;
});
