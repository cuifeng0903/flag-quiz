// === 198カ国完全データ（flagcdn PNG統一）===
const FLAGS = [
  { name: "アフガニスタン", code: "af", file: "https://flagcdn.com/w320/af.png" },
  { name: "アルバニア", code: "al", file: "https://flagcdn.com/w320/al.png" },
  { name: "アルジェリア", code: "dz", file: "https://flagcdn.com/w320/dz.png" },
  { name: "アンドラ", code: "ad", file: "https://flagcdn.com/w320/ad.png" },
  { name: "アンゴラ", code: "ao", file: "https://flagcdn.com/w320/ao.png" },
  { name: "アンティグア・バーブーダ", code: "ag", file: "https://flagcdn.com/w320/ag.png" },
  { name: "アルゼンチン", code: "ar", file: "https://flagcdn.com/w320/ar.png" },
  { name: "アルメニア", code: "am", file: "https://flagcdn.com/w320/am.png" },
  { name: "オーストラリア", code: "au", file: "https://flagcdn.com/w320/au.png" },
  { name: "オーストリア", code: "at", file: "https://flagcdn.com/w320/at.png" },
  { name: "アゼルバイジャン", code: "az", file: "https://flagcdn.com/w320/az.png" },
  { name: "バハマ", code: "bs", file: "https://flagcdn.com/w320/bs.png" },
  { name: "バーレーン", code: "bh", file: "https://flagcdn.com/w320/bh.png" },
  { name: "バングラデシュ", code: "bd", file: "https://flagcdn.com/w320/bd.png" },
  { name: "バルバドス", code: "bb", file: "https://flagcdn.com/w320/bb.png" },
  { name: "ベラルーシ", code: "by", file: "https://flagcdn.com/w320/by.png" },
  { name: "ベルギー", code: "be", file: "https://flagcdn.com/w320/be.png" },
  { name: "ベリーズ", code: "bz", file: "https://flagcdn.com/w320/bz.png" },
  { name: "ベナン", code: "bj", file: "https://flagcdn.com/w320/bj.png" },
  { name: "ブータン", code: "bt", file: "https://flagcdn.com/w320/bt.png" },
  { name: "ボリビア", code: "bo", file: "https://flagcdn.com/w320/bo.png" },
  { name: "ボスニア・ヘルツェゴビナ", code: "ba", file: "https://flagcdn.com/w320/ba.png" },
  { name: "ボツワナ", code: "bw", file: "https://flagcdn.com/w320/bw.png" },
  { name: "ブラジル", code: "br", file: "https://flagcdn.com/w320/br.png" },
  { name: "ブルネイ", code: "bn", file: "https://flagcdn.com/w320/bn.png" },
  { name: "ブルガリア", code: "bg", file: "https://flagcdn.com/w320/bg.png" },
  { name: "ブルキナファソ", code: "bf", file: "https://flagcdn.com/w320/bf.png" },
  { name: "ブルンジ", code: "bi", file: "https://flagcdn.com/w320/bi.png" },
  { name: "カーボベルデ", code: "cv", file: "https://flagcdn.com/w320/cv.png" },
  { name: "カンボジア", code: "kh", file: "https://flagcdn.com/w320/kh.png" },
  { name: "カメルーン", code: "cm", file: "https://flagcdn.com/w320/cm.png" },
  { name: "カナダ", code: "ca", file: "https://flagcdn.com/w320/ca.png" },
  { name: "中央アフリカ", code: "cf", file: "https://flagcdn.com/w320/cf.png" },
  { name: "チャド", code: "td", file: "https://flagcdn.com/w320/td.png" },
  { name: "チリ", code: "cl", file: "https://flagcdn.com/w320/cl.png" },
  { name: "ちゅうごく", code: "cn", file: "https://flagcdn.com/w320/cn.png" },
  { name: "コロンビア", code: "co", file: "https://flagcdn.com/w320/co.png" },
  { name: "コモロ", code: "km", file: "https://flagcdn.com/w320/km.png" },
  { name: "コンゴきょうわこく", code: "cg", file: "https://flagcdn.com/w320/cg.png" },
  { name: "コンゴみんしゅこく", code: "cd", file: "https://flagcdn.com/w320/cd.png" },
  { name: "コスタリカ", code: "cr", file: "https://flagcdn.com/w320/cr.png" },
  { name: "コートジボワール", code: "ci", file: "https://flagcdn.com/w320/ci.png" },
  { name: "クロアチア", code: "hr", file: "https://flagcdn.com/w320/hr.png" },
  { name: "キューバ", code: "cu", file: "https://flagcdn.com/w320/cu.png" },
  { name: "キプロス", code: "cy", file: "https://flagcdn.com/w320/cy.png" },
  { name: "チェコ", code: "cz", file: "https://flagcdn.com/w320/cz.png" },
  { name: "デンマーク", code: "dk", file: "https://flagcdn.com/w320/dk.png" },
  { name: "ジブチ", code: "dj", file: "https://flagcdn.com/w320/dj.png" },
  { name: "ドミニカ", code: "dm", file: "https://flagcdn.com/w320/dm.png" },
  { name: "ドミニカきょうわこく", code: "do", file: "https://flagcdn.com/w320/do.png" },
  { name: "エクアドル", code: "ec", file: "https://flagcdn.com/w320/ec.png" },
  { name: "エジプト", code: "eg", file: "https://flagcdn.com/w320/eg.png" },
  { name: "エルサルバドル", code: "sv", file: "https://flagcdn.com/w320/sv.png" },
  { name: "赤道ギニア", code: "gq", file: "https://flagcdn.com/w320/gq.png" },
  { name: "エリトリア", code: "er", file: "https://flagcdn.com/w320/er.png" },
  { name: "エストニア", code: "ee", file: "https://flagcdn.com/w320/ee.png" },
  { name: "エスワティニ", code: "sz", file: "https://flagcdn.com/w320/sz.png" },
  { name: "エチオピア", code: "et", file: "https://flagcdn.com/w320/et.png" },
  { name: "フィジー", code: "fj", file: "https://flagcdn.com/w320/fj.png" },
  { name: "フィンランド", code: "fi", file: "https://flagcdn.com/w320/fi.png" },
  { name: "フランス", code: "fr", file: "https://flagcdn.com/w320/fr.png" },
  { name: "ガボン", code: "ga", file: "https://flagcdn.com/w320/ga.png" },
  { name: "ガンビア", code: "gm", file: "https://flagcdn.com/w320/gm.png" },
  { name: "ジョージア", code: "ge", file: "https://flagcdn.com/w320/ge.png" },
  { name: "ドイツ", code: "de", file: "https://flagcdn.com/w320/de.png" },
  { name: "ガーナ", code: "gh", file: "https://flagcdn.com/w320/gh.png" },
  { name: "ギリシャ", code: "gr", file: "https://flagcdn.com/w320/gr.png" },
  { name: "グレナダ", code: "gd", file: "https://flagcdn.com/w320/gd.png" },
  { name: "グアテマラ", code: "gt", file: "https://flagcdn.com/w320/gt.png" },
  { name: "ギニア", code: "gn", file: "https://flagcdn.com/w320/gn.png" },
  { name: "ギニアビサウ", code: "gw", file: "https://flagcdn.com/w320/gw.png" },
  { name: "ガイアナ", code: "gy", file: "https://flagcdn.com/w320/gy.png" },
  { name: "ハイチ", code: "ht", file: "https://flagcdn.com/w320/ht.png" },
  { name: "ホンジュラス", code: "hn", file: "https://flagcdn.com/w320/hn.png" },
  { name: "ハンガリー", code: "hu", file: "https://flagcdn.com/w320/hu.png" },
  { name: "アイスランド", code: "is", file: "https://flagcdn.com/w320/is.png" },
  { name: "インド", code: "in", file: "https://flagcdn.com/w320/in.png" },
  { name: "インドネシア", code: "id", file: "https://flagcdn.com/w320/id.png" },
  { name: "イラン", code: "ir", file: "https://flagcdn.com/w320/ir.png" },
  { name: "イラク", code: "iq", file: "https://flagcdn.com/w320/iq.png" },
  { name: "アイルランド", code: "ie", file: "https://flagcdn.com/w320/ie.png" },
  { name: "イスラエル", code: "il", file: "https://flagcdn.com/w320/il.png" },
  { name: "イタリア", code: "it", file: "https://flagcdn.com/w320/it.png" },
  { name: "ジャマイカ", code: "jm", file: "https://flagcdn.com/w320/jm.png" },
  { name: "にほん", code: "jp", file: "https://flagcdn.com/w320/jp.png" },
  { name: "ヨルダン", code: "jo", file: "https://flagcdn.com/w320/jo.png" },
  { name: "カザフスタン", code: "kz", file: "https://flagcdn.com/w320/kz.png" },
  { name: "ケニア", code: "ke", file: "https://flagcdn.com/w320/ke.png" },
  { name: "キリバス", code: "ki", file: "https://flagcdn.com/w320/ki.png" },
  { name: "クウェート", code: "kw", file: "https://flagcdn.com/w320/kw.png" },
  { name: "キルギス", code: "kg", file: "https://flagcdn.com/w320/kg.png" },
  { name: "ラオス", code: "la", file: "https://flagcdn.com/w320/la.png" },
  { name: "ラトビア", code: "lv", file: "https://flagcdn.com/w320/lv.png" },
  { name: "レバノン", code: "lb", file: "https://flagcdn.com/w320/lb.png" },
  { name: "レソト", code: "ls", file: "https://flagcdn.com/w320/ls.png" },
  { name: "リベリア", code: "lr", file: "https://flagcdn.com/w320/lr.png" },
  { name: "リビア", code: "ly", file: "https://flagcdn.com/w320/ly.png" },
  { name: "リヒテンシュタイン", code: "li", file: "https://flagcdn.com/w320/li.png" },
  { name: "リトアニア", code: "lt", file: "https://flagcdn.com/w320/lt.png" },
  { name: "ルクセンブルク", code: "lu", file: "https://flagcdn.com/w320/lu.png" },
  { name: "マダガスカル", code: "mg", file: "https://flagcdn.com/w320/mg.png" },
  { name: "マラウイ", code: "mw", file: "https://flagcdn.com/w320/mw.png" },
  { name: "マレーシア", code: "my", file: "https://flagcdn.com/w320/my.png" },
  { name: "モルディブ", code: "mv", file: "https://flagcdn.com/w320/mv.png" },
  { name: "マリ", code: "ml", file: "https://flagcdn.com/w320/ml.png" },
  { name: "マルタ", code: "mt", file: "https://flagcdn.com/w320/mt.png" },
  { name: "マーシャルしょとう", code: "mh", file: "https://flagcdn.com/w320/mh.png" },
  { name: "モーリタニア", code: "mr", file: "https://flagcdn.com/w320/mr.png" },
  { name: "モーリシャス", code: "mu", file: "https://flagcdn.com/w320/mu.png" },
  { name: "メキシコ", code: "mx", file: "https://flagcdn.com/w320/mx.png" },
  { name: "ミクロネシア", code: "fm", file: "https://flagcdn.com/w320/fm.png" },
  { name: "モルドバ", code: "md", file: "https://flagcdn.com/w320/md.png" },
  { name: "モナコ", code: "mc", file: "https://flagcdn.com/w320/mc.png" },
  { name: "モンゴル", code: "mn", file: "https://flagcdn.com/w320/mn.png" },
  { name: "モンテネグロ", code: "me", file: "https://flagcdn.com/w320/me.png" },
  { name: "モロッコ", code: "ma", file: "https://flagcdn.com/w320/ma.png" },
  { name: "モザンビーク", code: "mz", file: "https://flagcdn.com/w320/mz.png" },
  { name: "ミャンマー", code: "mm", file: "https://flagcdn.com/w320/mm.png" },
  { name: "ナミビア", code: "na", file: "https://flagcdn.com/w320/na.png" },
  { name: "ナウル", code: "nr", file: "https://flagcdn.com/w320/nr.png" },
  { name: "ネパール", code: "np", file: "https://flagcdn.com/w320/np.png" },
  { name: "オランダ", code: "nl", file: "https://flagcdn.com/w320/nl.png" },
  { name: "ニュージーランド", code: "nz", file: "https://flagcdn.com/w320/nz.png" },
  { name: "ニカラグア", code: "ni", file: "https://flagcdn.com/w320/ni.png" },
  { name: "ニジェール", code: "ne", file: "https://flagcdn.com/w320/ne.png" },
  { name: "ナイジェリア", code: "ng", file: "https://flagcdn.com/w320/ng.png" },
  { name: "北朝鮮", code: "kp", file: "https://flagcdn.com/w320/kp.png" },
  { name: "北マケドニア", code: "mk", file: "https://flagcdn.com/w320/mk.png" },
  { name: "ノルウェー", code: "no", file: "https://flagcdn.com/w320/no.png" },
  { name: "オマーン", code: "om", file: "https://flagcdn.com/w320/om.png" },
  { name: "パキスタン", code: "pk", file: "https://flagcdn.com/w320/pk.png" },
  { name: "パラオ", code: "pw", file: "https://flagcdn.com/w320/pw.png" },
  { name: "パナマ", code: "pa", file: "https://flagcdn.com/w320/pa.png" },
  { name: "パプアニューギニア", code: "pg", file: "https://flagcdn.com/w320/pg.png" },
  { name: "パラグアイ", code: "py", file: "https://flagcdn.com/w320/py.png" },
  { name: "ペルー", code: "pe", file: "https://flagcdn.com/w320/pe.png" },
  { name: "フィリピン", code: "ph", file: "https://flagcdn.com/w320/ph.png" },
  { name: "ポーランド", code: "pl", file: "https://flagcdn.com/w320/pl.png" },
  { name: "ポルトガル", code: "pt", file: "https://flagcdn.com/w320/pt.png" },
  { name: "カタール", code: "qa", file: "https://flagcdn.com/w320/qa.png" },
  { name: "ルーマニア", code: "ro", file: "https://flagcdn.com/w320/ro.png" },
  { name: "ロシア", code: "ru", file: "https://flagcdn.com/w320/ru.png" },
  { name: "ルワンダ", code: "rw", file: "https://flagcdn.com/w320/rw.png" },
  { name: "セントクリストファー・ネーヴィス", code: "kn", file: "https://flagcdn.com/w320/kn.png" },
  { name: "セントルシア", code: "lc", file: "https://flagcdn.com/w320/lc.png" },
  { name: "セントビンセントおよびグレナディーン", code: "vc", file: "https://flagcdn.com/w320/vc.png" },
  { name: "サモア", code: "ws", file: "https://flagcdn.com/w320/ws.png" },
  { name: "サンマリノ", code: "sm", file: "https://flagcdn.com/w320/sm.png" },
  { name: "サントメ・プリンシペ", code: "st", file: "https://flagcdn.com/w320/st.png" },
  { name: "サウジアラビア", code: "sa", file: "https://flagcdn.com/w320/sa.png" },
  { name: "セネガル", code: "sn", file: "https://flagcdn.com/w320/sn.png" },
  { name: "セルビア", code: "rs", file: "https://flagcdn.com/w320/rs.png" },
  { name: "セーシェル", code: "sc", file: "https://flagcdn.com/w320/sc.png" },
  { name: "シエラレオネ", code: "sl", file: "https://flagcdn.com/w320/sl.png" },
  { name: "シンガポール", code: "sg", file: "https://flagcdn.com/w320/sg.png" },
  { name: "スロバキア", code: "sk", file: "https://flagcdn.com/w320/sk.png" },
  { name: "スロベニア", code: "si", file: "https://flagcdn.com/w320/si.png" },
  { name: "ソロモンしょとう", code: "sb", file: "https://flagcdn.com/w320/sb.png" },
  { name: "ソマリア", code: "so", file: "https://flagcdn.com/w320/so.png" },
  { name: "南アフリカ", code: "za", file: "https://flagcdn.com/w320/za.png" },
  { name: "韓国", code: "kr", file: "https://flagcdn.com/w320/kr.png" },
  { name: "南スーダン", code: "ss", file: "https://flagcdn.com/w320/ss.png" },
  { name: "スペイン", code: "es", file: "https://flagcdn.com/w320/es.png" },
  { name: "スリランカ", code: "lk", file: "https://flagcdn.com/w320/lk.png" },
  { name: "スーダン", code: "sd", file: "https://flagcdn.com/w320/sd.png" },
  { name: "スリナム", code: "sr", file: "https://flagcdn.com/w320/sr.png" },
  { name: "スウェーデン", code: "se", file: "https://flagcdn.com/w320/se.png" },
  { name: "スイス", code: "ch", file: "https://flagcdn.com/w320/ch.png" },
  { name: "シリア", code: "sy", file: "https://flagcdn.com/w320/sy.png" },
  { name: "タジキスタン", code: "tj", file: "https://flagcdn.com/w320/tj.png" },
  { name: "タンザニア", code: "tz", file: "https://flagcdn.com/w320/tz.png" },
  { name: "タイ", code: "th", file: "https://flagcdn.com/w320/th.png" },
  { name: "東ティモール", code: "tl", file: "https://flagcdn.com/w320/tl.png" },
  { name: "トーゴ", code: "tg", file: "https://flagcdn.com/w320/tg.png" },
  { name: "トンガ", code: "to", file: "https://flagcdn.com/w320/to.png" },
  { name: "トリニダード・トバゴ", code: "tt", file: "https://flagcdn.com/w320/tt.png" },
  { name: "チュニジア", code: "tn", file: "https://flagcdn.com/w320/tn.png" },
  { name: "トルコ", code: "tr", file: "https://flagcdn.com/w320/tr.png" },
  { name: "トルクメニスタン", code: "tm", file: "https://flagcdn.com/w320/tm.png" },
  { name: "ツバル", code: "tv", file: "https://flagcdn.com/w320/tv.png" },
  { name: "ウガンダ", code: "ug", file: "https://flagcdn.com/w320/ug.png" },
  { name: "ウクライナ", code: "ua", file: "https://flagcdn.com/w320/ua.png" },
  { name: "アラブ首長国連邦", code: "ae", file: "https://flagcdn.com/w320/ae.png" },
  { name: "イギリス", code: "gb", file: "https://flagcdn.com/w320/gb.png" },
  { name: "アメリカ", code: "us", file: "https://flagcdn.com/w320/us.png" },
  { name: "ウルグアイ", code: "uy", file: "https://flagcdn.com/w320/uy.png" },
  { name: "ウズベキスタン", code: "uz", file: "https://flagcdn.com/w320/uz.png" },
  { name: "バヌアツ", code: "vu", file: "https://flagcdn.com/w320/vu.png" },
  { name: "ベネズエラ", code: "ve", file: "https://flagcdn.com/w320/ve.png" },
  { name: "ベトナム", code: "vn", file: "https://flagcdn.com/w320/vn.png" },
  { name: "イエメン", code: "ye", file: "https://flagcdn.com/w320/ye.png" },
  { name: "ザンビア", code: "zm", file: "https://flagcdn.com/w320/zm.png" },
  { name: "ジンバブエ", code: "zw", file: "https://flagcdn.com/w320/zw.png" },
  // 追加5カ国
  { name: "バチカン", code: "va", file: "https://flagcdn.com/w320/va.png" },
  { name: "コソボ", code: "xk", file: "https://flagcdn.com/w320/xk.png" },
  { name: "クックしょとう", code: "ck", file: "https://flagcdn.com/w320/ck.png" },
  { name: "ニウエ", code: "nu", file: "https://flagcdn.com/w320/nu.png" },
  { name: "たいわん", code: "tw", file: "https://flagcdn.com/w320/tw.png" }
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
  for (let i = 0; i < 300; i++) {  // ← 300個
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
  
  // 重複防止保存
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
