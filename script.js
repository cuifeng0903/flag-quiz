// === 198カ国完全データ（512x512固定PNG）===
const FLAGS = [
  { name: "アフガニスタン", code: "af", file: "https://flagcdn.com/512x512/af.png" },
  { name: "アルバニア", code: "al", file: "https://flagcdn.com/512x512/al.png" },
  { name: "アルジェリア", code: "dz", file: "https://flagcdn.com/512x512/dz.png" },
  { name: "アンドラ", code: "ad", file: "https://flagcdn.com/512x512/ad.png" },
  { name: "アンゴラ", code: "ao", file: "https://flagcdn.com/512x512/ao.png" },
  { name: "アンティグア・バーブーダ", code: "ag", file: "https://flagcdn.com/512x512/ag.png" },
  { name: "アルゼンチン", code: "ar", file: "https://flagcdn.com/512x512/ar.png" },
  { name: "アルメニア", code: "am", file: "https://flagcdn.com/512x512/am.png" },
  { name: "オーストラリア", code: "au", file: "https://flagcdn.com/512x512/au.png" },
  { name: "オーストリア", code: "at", file: "https://flagcdn.com/512x512/at.png" },
  { name: "アゼルバイジャン", code: "az", file: "https://flagcdn.com/512x512/az.png" },
  { name: "バハマ", code: "bs", file: "https://flagcdn.com/512x512/bs.png" },
  { name: "バーレーン", code: "bh", file: "https://flagcdn.com/512x512/bh.png" },
  { name: "バングラデシュ", code: "bd", file: "https://flagcdn.com/512x512/bd.png" },  // ← 512x512に修正
  { name: "バルバドス", code: "bb", file: "https://flagcdn.com/512x512/bb.png" },
  { name: "ベラルーシ", code: "by", file: "https://flagcdn.com/512x512/by.png" },
  { name: "ベルギー", code: "be", file: "https://flagcdn.com/512x512/be.png" },
  { name: "ベリーズ", code: "bz", file: "https://flagcdn.com/512x512/bz.png" },
  { name: "ベナン", code: "bj", file: "https://flagcdn.com/512x512/bj.png" },
  { name: "ブータン", code: "bt", file: "https://flagcdn.com/512x512/bt.png" },
  { name: "ボリビア", code: "bo", file: "https://flagcdn.com/512x512/bo.png" },
  { name: "ボスニア・ヘルツェゴビナ", code: "ba", file: "https://flagcdn.com/512x512/ba.png" },
  { name: "ボツワナ", code: "bw", file: "https://flagcdn.com/512x512/bw.png" },
  { name: "ブラジル", code: "br", file: "https://flagcdn.com/512x512/br.png" },
  { name: "ブルネイ", code: "bn", file: "https://flagcdn.com/512x512/bn.png" },
  { name: "ブルガリア", code: "bg", file: "https://flagcdn.com/512x512/bg.png" },
  { name: "ブルキナファソ", code: "bf", file: "https://flagcdn.com/512x512/bf.png" },
  { name: "ブルンジ", code: "bi", file: "https://flagcdn.com/512x512/bi.png" },
  { name: "カーボベルデ", code: "cv", file: "https://flagcdn.com/512x512/cv.png" },
  { name: "カンボジア", code: "kh", file: "https://flagcdn.com/512x512/kh.png" },
  { name: "カメルーン", code: "cm", file: "https://flagcdn.com/512x512/cm.png" },
  { name: "カナダ", code: "ca", file: "https://flagcdn.com/512x512/ca.png" },
  { name: "中央アフリカ", code: "cf", file: "https://flagcdn.com/512x512/cf.png" },
  { name: "チャド", code: "td", file: "https://flagcdn.com/512x512/td.png" },
  { name: "チリ", code: "cl", file: "https://flagcdn.com/512x512/cl.png" },
  { name: "ちゅうごく", code: "cn", file: "https://flagcdn.com/512x512/cn.png" },
  { name: "コロンビア", code: "co", file: "https://flagcdn.com/512x512/co.png" },
  { name: "コモロ", code: "km", file: "https://flagcdn.com/512x512/km.png" },
  { name: "コンゴきょうわこく", code: "cg", file: "https://flagcdn.com/512x512/cg.png" },
  { name: "コンゴみんしゅこく", code: "cd", file: "https://flagcdn.com/512x512/cd.png" },
  { name: "コスタリカ", code: "cr", file: "https://flagcdn.com/512x512/cr.png" },
  { name: "コートジボワール", code: "ci", file: "https://flagcdn.com/512x512/ci.png" },
  { name: "クロアチア", code: "hr", file: "https://flagcdn.com/512x512/hr.png" },
  { name: "キューバ", code: "cu", file: "https://flagcdn.com/512x512/cu.png" },
  { name: "キプロス", code: "cy", file: "https://flagcdn.com/512x512/cy.png" },
  { name: "チェコ", code: "cz", file: "https://flagcdn.com/512x512/cz.png" },
  { name: "デンマーク", code: "dk", file: "https://flagcdn.com/512x512/dk.png" },
  { name: "ジブチ", code: "dj", file: "https://flagcdn.com/512x512/dj.png" },
  { name: "ドミニカ", code: "dm", file: "https://flagcdn.com/512x512/dm.png" },
  { name: "ドミニカきょうわこく", code: "do", file: "https://flagcdn.com/512x512/do.png" },
  { name: "エクアドル", code: "ec", file: "https://flagcdn.com/512x512/ec.png" },
  { name: "エジプト", code: "eg", file: "https://flagcdn.com/512x512/eg.png" },
  { name: "エルサルバドル", code: "sv", file: "https://flagcdn.com/512x512/sv.png" },
  { name: "赤道ギニア", code: "gq", file: "https://flagcdn.com/512x512/gq.png" },
  { name: "エリトリア", code: "er", file: "https://flagcdn.com/512x512/er.png" },
  { name: "エストニア", code: "ee", file: "https://flagcdn.com/512x512/ee.png" },
  { name: "エスワティニ", code: "sz", file: "https://flagcdn.com/512x512/sz.png" },
  { name: "エチオピア", code: "et", file: "https://flagcdn.com/512x512/et.png" },
  { name: "フィジー", code: "fj", file: "https://flagcdn.com/512x512/fj.png" },
  { name: "フィンランド", code: "fi", file: "https://flagcdn.com/512x512/fi.png" },
  { name: "フランス", code: "fr", file: "https://flagcdn.com/512x512/fr.png" },
  { name: "ガボン", code: "ga", file: "https://flagcdn.com/512x512/ga.png" },
  { name: "ガンビア", code: "gm", file: "https://flagcdn.com/512x512/gm.png" },
  { name: "ジョージア", code: "ge", file: "https://flagcdn.com/512x512/ge.png" },
  { name: "ドイツ", code: "de", file: "https://flagcdn.com/512x512/de.png" },
  { name: "ガーナ", code: "gh", file: "https://flagcdn.com/512x512/gh.png" },
  { name: "ギリシャ", code: "gr", file: "https://flagcdn.com/512x512/gr.png" },
  { name: "グレナダ", code: "gd", file: "https://flagcdn.com/512x512/gd.png" },
  { name: "グアテマラ", code: "gt", file: "https://flagcdn.com/512x512/gt.png" },
  { name: "ギニア", code: "gn", file: "https://flagcdn.com/512x512/gn.png" },
  { name: "ギニアビサウ", code: "gw", file: "https://flagcdn.com/512x512/gw.png" },
  { name: "ガイアナ", code: "gy", file: "https://flagcdn.com/512x512/gy.png" },
  { name: "ハイチ", code: "ht", file: "https://flagcdn.com/512x512/ht.png" },
  { name: "ホンジュラス", code: "hn", file: "https://flagcdn.com/512x512/hn.png" },
  { name: "ハンガリー", code: "hu", file: "https://flagcdn.com/512x512/hu.png" },
  { name: "アイスランド", code: "is", file: "https://flagcdn.com/512x512/is.png" },
  { name: "インド", code: "in", file: "https://flagcdn.com/512x512/in.png" },
  { name: "インドネシア", code: "id", file: "https://flagcdn.com/512x512/id.png" },
  { name: "イラン", code: "ir", file: "https://flagcdn.com/512x512/ir.png" },
  { name: "イラク", code: "iq", file: "https://flagcdn.com/512x512/iq.png" },
  { name: "アイルランド", code: "ie", file: "https://flagcdn.com/512x512/ie.png" },
  { name: "イスラエル", code: "il", file: "https://flagcdn.com/512x512/il.png" },
  { name: "イタリア", code: "it", file: "https://flagcdn.com/512x512/it.png" },
  { name: "ジャマイカ", code: "jm", file: "https://flagcdn.com/512x512/jm.png" },
  { name: "にほん", code: "jp", file: "https://flagcdn.com/512x512/jp.png" },
  { name: "ヨルダン", code: "jo", file: "https://flagcdn.com/512x512/jo.png" },
  { name: "カザフスタン", code: "kz", file: "https://flagcdn.com/512x512/kz.png" },
  { name: "ケニア", code: "ke", file: "https://flagcdn.com/512x512/ke.png" },
  { name: "キリバス", code: "ki", file: "https://flagcdn.com/512x512/ki.png" },
  { name: "クウェート", code: "kw", file: "https://flagcdn.com/512x512/kw.png" },
  { name: "キルギス", code: "kg", file: "https://flagcdn.com/512x512/kg.png" },
  { name: "ラオス", code: "la", file: "https://flagcdn.com/512x512/la.png" },
  { name: "ラトビア", code: "lv", file: "https://flagcdn.com/512x512/lv.png" },
  { name: "レバノン", code: "lb", file: "https://flagcdn.com/512x512/lb.png" },
  { name: "レソト", code: "ls", file: "https://flagcdn.com/512x512/ls.png" },
  { name: "リベリア", code: "lr", file: "https://flagcdn.com/512x512/lr.png" },
  { name: "リビア", code: "ly", file: "https://flagcdn.com/512x512/ly.png" },
  { name: "リヒテンシュタイン", code: "li", file: "https://flagcdn.com/512x512/li.png" },
  { name: "リトアニア", code: "lt", file: "https://flagcdn.com/512x512/lt.png" },
  { name: "ルクセンブルク", code: "lu", file: "https://flagcdn.com/512x512/lu.png" },
  { name: "マダガスカル", code: "mg", file: "https://flagcdn.com/512x512/mg.png" },
  { name: "マラウイ", code: "mw", file: "https://flagcdn.com/512x512/mw.png" },
  { name: "マレーシア", code: "my", file: "https://flagcdn.com/512x512/my.png" },
  { name: "モルディブ", code: "mv", file: "https://flagcdn.com/512x512/mv.png" },
  { name: "マリ", code: "ml", file: "https://flagcdn.com/512x512/ml.png" },
  { name: "マルタ", code: "mt", file: "https://flagcdn.com/512x512/mt.png" },
  { name: "マーシャルしょとう", code: "mh", file: "https://flagcdn.com/512x512/mh.png" },
  { name: "モーリタニア", code: "mr", file: "https://flagcdn.com/512x512/mr.png" },
  { name: "モーリシャス", code: "mu", file: "https://flagcdn.com/512x512/mu.png" },
  { name: "メキシコ", code: "mx", file: "https://flagcdn.com/512x512/mx.png" },
  { name: "ミクロネシア", code: "fm", file: "https://flagcdn.com/512x512/fm.png" },
  { name: "モルドバ", code: "md", file: "https://flagcdn.com/512x512/md.png" },
  { name: "モナコ", code: "mc", file: "https://flagcdn.com/512512/mc.png" },
  { name: "モンゴル", code: "mn", file: "https://flagcdn.com/512x512/mn.png" },
  { name: "モンテネグロ", code: "me", file: "https://flagcdn.com/512x512/me.png" },
  { name: "モロッコ", code: "ma", file: "https://flagcdn.com/512x512/ma.png" },
  { name: "モザンビーク", code: "mz", file: "https://flagcdn.com/512x512/mz.png" },
  { name: "ミャンマー", code: "mm", file: "https://flagcdn.com/512x512/mm.png" },
  { name: "ナミビア", code: "na", file: "https://flagcdn.com/512x512/na.png" },
  { name: "ナウル", code: "nr", file: "https://flagcdn.com/512x512/nr.png" },
  { name: "ネパール", code: "np", file: "https://flagcdn.com/512x512/np.png" },
  { name: "オランダ", code: "nl", file: "https://flagcdn.com/512x512/nl.png" },
  { name: "ニュージーランド", code: "nz", file: "https://flagcdn.com/512x512/nz.png" },
  { name: "ニカラグア", code: "ni", file: "https://flagcdn.com/512x512/ni.png" },
  { name: "ニジェール", code: "ne", file: "https://flagcdn.com/512x512/ne.png" },
  { name: "ナイジェリア", code: "ng", file: "https://flagcdn.com/512x512/ng.png" },
  { name: "北朝鮮", code: "kp", file: "https://flagcdn.com/512x512/kp.png" },
  { name: "北マケドニア", code: "mk", file: "https://flagcdn.com/512x512/mk.png" },
  { name: "ノルウェー", code: "no", file: "https://flagcdn.com/512x512/no.png" },
  { name: "オマーン", code: "om", file: "https://flagcdn.com/512x512/om.png" },
  { name: "パキスタン", code: "pk", file: "https://flagcdn.com/512x512/pk.png" },
  { name: "パラオ", code: "pw", file: "https://flagcdn.com/512x512/pw.png" },
  { name: "パナマ", code: "pa", file: "https://flagcdn.com/512x512/pa.png" },
  { name: "パプアニューギニア", code: "pg", file: "https://flagcdn.com/512x512/pg.png" },
  { name: "パラグアイ", code: "py", file: "https://flagcdn.com/512x512/py.png" },
  { name: "ペルー", code: "pe", file: "https://flagcdn.com/512x512/pe.png" },
  { name: "フィリピン", code: "ph", file: "https://flagcdn.com/512x512/ph.png" },
  { name: "ポーランド", code: "pl", file: "https://flagcdn.com/512x512/pl.png" },
  { name: "ポルトガル", code: "pt", file: "https://flagcdn.com/512x512/pt.png" },
  { name: "カタール", code: "qa", file: "https://flagcdn.com/512x512/qa.png" },
  { name: "ルーマニア", code: "ro", file: "https://flagcdn.com/512x512/ro.png" },
  { name: "ロシア", code: "ru", file: "https://flagcdn.com/512x512/ru.png" },
  { name: "ルワンダ", code: "rw", file: "https://flagcdn.com/512x512/rw.png" },
  { name: "セントクリストファー・ネーヴィス", code: "kn", file: "https://flagcdn.com/512x512/kn.png" },
  { name: "セントルシア", code: "lc", file: "https://flagcdn.com/512x512/lc.png" },
  { name: "セントビンセントおよびグレナディーン", code: "vc", file: "https://flagcdn.com/512x512/vc.png" },
  { name: "サモア", code: "ws", file: "https://flagcdn.com/512x512/ws.png" },
  { name: "サンマリノ", code: "sm", file: "https://flagcdn.com/512x512/sm.png" },
  { name: "サントメ・プリンシペ", code: "st", file: "https://flagcdn.com/512x512/st.png" },
  { name: "サウジアラビア", code: "sa", file: "https://flagcdn.com/512x512/sa.png" },
  { name: "セネガル", code: "sn", file: "https://flagcdn.com/512x512/sn.png" },
  { name: "セルビア", code: "rs", file: "https://flagcdn.com/512x512/rs.png" },
  { name: "セーシェル", code: "sc", file: "https://flagcdn.com/512x512/sc.png" },
  { name: "シエラレオネ", code: "sl", file: "https://flagcdn.com/512x512/sl.png" },
  { name: "シンガポール", code: "sg", file: "https://flagcdn.com/512x512/sg.png" },
  { name: "スロバキア", code: "sk", file: "https://flagcdn.com/512x512/sk.png" },
  { name: "スロベニア", code: "si", file: "https://flagcdn.com/512x512/si.png" },
  { name: "ソロモンしょとう", code: "sb", file: "https://flagcdn.com/512x512/sb.png" },
  { name: "ソマリア", code: "so", file: "https://flagcdn.com/512x512/so.png" },
  { name: "南アフリカ", code: "za", file: "https://flagcdn.com/512x512/za.png" },
  { name: "韓国", code: "kr", file: "https://flagcdn.com/512x512/kr.png" },
  { name: "南スーダン", code: "ss", file: "https://flagcdn.com/512x512/ss.png" },
  { name: "スペイン", code: "es", file: "https://flagcdn.com/512x512/es.png" },
  { name: "スリランカ", code: "lk", file: "https://flagcdn.com/512x512/lk.png" },
  { name: "スーダン", code: "sd", file: "https://flagcdn.com/512x512/sd.png" },
  { name: "スリナム", code: "sr", file: "https://flagcdn.com/512x512/sr.png" },
  { name: "スウェーデン", code: "se", file: "https://flagcdn.com/512x512/se.png" },
  { name: "スイス", code: "ch", file: "https://flagcdn.com/512x512/ch.png" },
  { name: "シリア", code: "sy", file: "https://flagcdn.com/512x512/sy.png" },
  { name: "タジキスタン", code: "tj", file: "https://flagcdn.com/512x512/tj.png" },
  { name: "タンザニア", code: "tz", file: "https://flagcdn.com/512x512/tz.png" },
  { name: "タイ", code: "th", file: "https://flagcdn.com/512x512/th.png" },
  { name: "東ティモール", code: "tl", file: "https://flagcdn.com/512x512/tl.png" },
  { name: "トーゴ", code: "tg", file: "https://flagcdn.com/512x512/tg.png" },
  { name: "トンガ", code: "to", file: "https://flagcdn.com/512x512/to.png" },
  { name: "トリニダード・トバゴ", code: "tt", file: "https://flagcdn.com/512x512/tt.png" },
  { name: "チュニジア", code: "tn", file: "https://flagcdn.com/512x512/tn.png" },
  { name: "トルコ", code: "tr", file: "https://flagcdn.com/512x512/tr.png" },
  { name: "トルクメニスタン", code: "tm", file: "https://flagcdn.com/512x512/tm.png" },
  { name: "ツバル", code: "tv", file: "https://flagcdn.com/512x512/tv.png" },
  { name: "ウガンダ", code: "ug", file: "https://flagcdn.com/512x512/ug.png" },
  { name: "ウクライナ", code: "ua", file: "https://flagcdn.com/512x512/ua.png" },
  { name: "アラブ首長国連邦", code: "ae", file: "https://flagcdn.com/512x512/ae.png" },
  { name: "イギリス", code: "gb", file: "https://flagcdn.com/512x512/gb.png" },
  { name: "アメリカ", code: "us", file: "https://flagcdn.com/512x512/us.png" },
  { name: "ウルグアイ", code: "uy", file: "https://flagcdn.com/512x512/uy.png" },
  { name: "ウズベキスタン", code: "uz", file: "https://flagcdn.com/512x512/uz.png" },
  { name: "バヌアツ", code: "vu", file: "https://flagcdn.com/512x512/vu.png" },
  { name: "ベネズエラ", code: "ve", file: "https://flagcdn.com/512x512/ve.png" },
  { name: "ベトナム", code: "vn", file: "https://flagcdn.com/512x512/vn.png" },
  { name: "イエメン", code: "ye", file: "https://flagcdn.com/512x512/ye.png" },
  { name: "ザンビア", code: "zm", file: "https://flagcdn.com/512x512/zm.png" },
  { name: "ジンバブエ", code: "zw", file: "https://flagcdn.com/512x512/zw.png" },
  // 追加5カ国
  { name: "バチカン", code: "va", file: "https://flagcdn.com/512x512/va.png" },
  { name: "コソボ", code: "xk", file: "https://flagcdn.com/512x512/xk.png" },
  { name: "クックしょとう", code: "ck", file: "https://flagcdn.com/512x512/ck.png" },
  { name: "ニウエ", code: "nu", file: "https://flagcdn.com/512x512/nu.png" },
  { name: "たいわん", code: "tw", file: "https://flagcdn.com/512x512/tw.png" }
];

let quizFlags = [];
let currentFlag = null;
let questionCount = 0;
let correctCount = 0;
const TOTAL_QUESTIONS = 20;
const STORAGE_KEY = 'flag_quiz_records';

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

// 紙吹雪：300個、下から噴水状
function createConfetti() {
  particles = [];
  const fountainX = canvas.width / 2;
  for (let i = 0; i < 300; i++) {
    const angle = (Math.random() - 0.5) * Math.PI / 3;
    const speed = Math.random() * 8 + 10;
    particles.push({
      x: fountainX + (Math.random() - 0.5) * 100,
      y: canvas.height + 50,
      vx: Math.cos(angle) * speed * (Math.random() > 0.5 ? 1 : -1),
      vy: -speed - Math.random() * 5,
      color: ["#FFEB3B","#FF5252","#4CAF50","#2196F3","#FF9800"][Math.floor(Math.random()*5)],
      size: Math.random() * 8 + 4,
      gravity: 0.2,
      drag: 0.98
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
  particles = particles.filter(p => p.y < canvas.height + 50 && Math.abs(p.vx) > 0.1);
  if (particles.length > 0) requestAnimationFrame(drawConfetti);
}

let records = JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};
const getToday = () => new Date().toISOString().split('T')[0];

function prepareQuiz() {
  quizFlags = [...FLAGS].sort(() => Math.random() - 0.5).slice(0, TOTAL_QUESTIONS);
  questionCount = 0;
  correctCount = 0;
}

function newQuestion() {
  if (questionCount >= quizFlags.length) return;
  currentFlag = quizFlags[questionCount];
  const otherFlags = FLAGS.filter(f => f.code !== currentFlag.code);
  const wrongChoices = otherFlags.sort(() => Math.random() - 0.5).slice(0, 3);
  const choices = [currentFlag, ...wrongChoices].sort(() => Math.random() - 0.5);

  document.getElementById("flag-area").innerHTML = `<img src="${currentFlag.file}" alt="">`;
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
