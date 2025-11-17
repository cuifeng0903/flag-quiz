// === 198カ国データ（flagcdn.com CDN）===
const FLAGS = [
  { name: "アフガニスタン", code: "af" },
  { name: "アルバニア", code: "al" },
  { name: "アルジェリア", code: "dz" },
  { name: "アンドラ", code: "ad" },
  { name: "アンゴラ", code: "ao" },
  { name: "アンティグア・バーブーダ", code: "ag" },
  { name: "アルゼンチン", code: "ar" },
  { name: "アルメニア", code: "am" },
  { name: "オーストラリア", code: "au" },
  { name: "オーストリア", code: "at" },
  { name: "アゼルバイジャン", code: "az" },
  { name: "バハマ", code: "bs" },
  { name: "バーレーン", code: "bh" },
  { name: "バングラデシュ", code: "bd" },
  { name: "バルバドス", code: "bb" },
  { name: "ベラルーシ", code: "by" },
  { name: "ベルギー", code: "be" },
  { name: "ベリーズ", code: "bz" },
  { name: "ベナン", code: "bj" },
  { name: "ブータン", code: "bt" },
  { name: "ボリビア", code: "bo" },
  { name: "ボスニア・ヘルツェゴビナ", code: "ba" },
  { name: "ボツワナ", code: "bw" },
  { name: "ブラジル", code: "br" },
  { name: "ブルネイ", code: "bn" },
  { name: "ブルガリア", code: "bg" },
  { name: "ブルキナファソ", code: "bf" },
  { name: "ブルンジ", code: "bi" },
  { name: "カーボベルデ", code: "cv" },
  { name: "カンボジア", code: "kh" },
  { name: "カメルーン", code: "cm" },
  { name: "カナダ", code: "ca" },
  { name: "中央アフリカ", code: "cf" },
  { name: "チャド", code: "td" },
  { name: "チリ", code: "cl" },
  { name: "ちゅうごく", code: "cn" },
  { name: "コロンビア", code: "co" },
  { name: "コモロ", code: "km" },
  { name: "コンゴきょうわこく", code: "cg" },
  { name: "コンゴみんしゅこく", code: "cd" },
  { name: "コスタリカ", code: "cr" },
  { name: "コートジボワール", code: "ci" },
  { name: "クロアチア", code: "hr" },
  { name: "キューバ", code: "cu" },
  { name: "キプロス", code: "cy" },
  { name: "チェコ", code: "cz" },
  { name: "デンマーク", code: "dk" },
  { name: "ジブチ", code: "dj" },
  { name: "ドミニカ", code: "dm" },
  { name: "ドミニカきょうわこく", code: "do" },
  { name: "エクアドル", code: "ec" },
  { name: "エジプト", code: "eg" },
  { name: "エルサルバドル", code: "sv" },
  { name: "赤道ギニア", code: "gq" },
  { name: "エリトリア", code: "er" },
  { name: "エストニア", code: "ee" },
  { name: "エスワティニ", code: "sz" },
  { name: "エチオピア", code: "et" },
  { name: "フィジー", code: "fj" },
  { name: "フィンランド", code: "fi" },
  { name: "フランス", code: "fr" },
  { name: "ガボン", code: "ga" },
  { name: "ガンビア", code: "gm" },
  { name: "ジョージア", code: "ge" },
  { name: "ドイツ", code: "de" },
  { name: "ガーナ", code: "gh" },
  { name: "ギリシャ", code: "gr" },
  { name: "グレナダ", code: "gd" },
  { name: "グアテマラ", code: "gt" },
  { name: "ギニア", code: "gn" },
  { name: "ギニアビサウ", code: "gw" },
  { name: "ガイアナ", code: "gy" },
  { name: "ハイチ", code: "ht" },
  { name: "ホンジュラス", code: "hn" },
  { name: "ハンガリー", code: "hu" },
  { name: "アイスランド", code: "is" },
  { name: "インド", code: "in" },
  { name: "インドネシア", code: "id" },
  { name: "イラン", code: "ir" },
  { name: "イラク", code: "iq" },
  { name: "アイルランド", code: "ie" },
  { name: "イスラエル", code: "il" },
  { name: "イタリア", code: "it" },
  { name: "ジャマイカ", code: "jm" },
  { name: "にほん", code: "jp" },
  { name: "ヨルダン", code: "jo" },
  { name: "カザフスタン", code: "kz" },
  { name: "ケニア", code: "ke" },
  { name: "キリバス", code: "ki" },
  { name: "クウェート", code: "kw" },
  { name: "キルギス", code: "kg" },
  { name: "ラオス", code: "la" },
  { name: "ラトビア", code: "lv" },
  { name: "レバノン", code: "lb" },
  { name: "レソト", code: "ls" },
  { name: "リベリア", code: "lr" },
  { name: "リビア", code: "ly" },
  { name: "リヒテンシュタイン", code: "li" },
  { name: "リトアニア", code: "lt" },
  { name: "ルクセンブルク", code: "lu" },
  { name: "マダガスカル", code: "mg" },
  { name: "マラウィ", code: "mw" },
  { name: "マレーシア", code: "my" },
  { name: "モルディブ", code: "mv" },
  { name: "マリ", code: "ml" },
  { name: "マルタ", code: "mt" },
  { name: "マーシャルしょとう", code: "mh" },
  { name: "モーリタニア", code: "mr" },
  { name: "モーリシャス", code: "mu" },
  { name: "メキシコ", code: "mx" },
  { name: "ミクロネシア", code: "fm" },
  { name: "モルドバ", code: "md" },
  { name: "モナコ", code: "mc" },
  { name: "モンゴル", code: "mn" },
  { name: "モンテネグロ", code: "me" },
  { name: "モロッコ", code: "ma" },
  { name: "モザンビーク", code: "mz" },
  { name: "ミャンマー", code: "mm" },
  { name: "ナミビア", code: "na" },
  { name: "ナウル", code: "nr" },
  { name: "ネパール", code: "np" },
  { name: "オランダ", code: "nl" },
  { name: "ニュージーランド", code: "nz" },
  { name: "ニカラグア", code: "ni" },
  { name: "ニジェール", code: "ne" },
  { name: "ナイジェリア", code: "ng" },
  { name: "ニウエ", code: "nu" },
  { name: "北マケドニア", code: "mk" },
  { name: "ノルウェー", code: "no" },
  { name: "オマーン", code: "om" },
  { name: "パキスタン", code: "pk" },
  { name: "パラオ", code: "pw" },
  { name: "パナマ", code: "pa" },
  { name: "パプアニューギニア", code: "pg" },
  { name: "パラグアイ", code: "py" },
  { name: "ペルー", code: "pe" },
  { name: "フィリピン", code: "ph" },
  { name: "ポーランド", code: "pl" },
  { name: "ポルトガル", code: "pt" },
  { name: "カタール", code: "qa" },
  { name: "ルーマニア", code: "ro" },
  { name: "ロシア", code: "ru" },
  { name: "ルワンダ", code: "rw" },
  { name: "セントクリストファー・ネーヴィス", code: "kn" },
  { name: "セントルシア", code: "lc" },
  { name: "セントビンセントおよびグレナディーン諸島", code: "vc" },
  { name: "サモア", code: "ws" },
  { name: "サンマリノ", code: "sm" },
  { name: "サントメ・プリンシペ", code: "st" },
  { name: "サウジアラビア", code: "sa" },
  { name: "セネガル", code: "sn" },
  { name: "セルビア", code: "rs" },
  { name: "セーシェル", code: "sc" },
  { name: "シエラレオネ", code: "sl" },
  { name: "シンガポール", code: "sg" },
  { name: "スロバキア", code: "sk" },
  { name: "スロベニア", code: "si" },
  { name: "ソロモンしょとう", code: "sb" },
  { name: "ソマリア", code: "so" },
  { name: "南アフリカ", code: "za" },
  { name: "韓国", code: "kr" },
  { name: "南スーダン", code: "ss" },
  { name: "スペイン", code: "es" },
  { name: "スリランカ", code: "lk" },
  { name: "スーダン", code: "sd" },
  { name: "スリナム", code: "sr" },
  { name: "スウェーデン", code: "se" },
  { name: "スイス", code: "ch" },
  { name: "シリア", code: "sy" },
  { name: "たいわん", code: "tw" },
  { name: "タジキスタン", code: "tj" },
  { name: "タンザニア", code: "tz" },
  { name: "タイ", code: "th" },
  { name: "東ティモール", code: "tl" },
  { name: "トーゴ", code: "tg" },
  { name: "トンガ", code: "to" },
  { name: "トリニダード・トバゴ", code: "tt" },
  { name: "チュニジア", code: "tn" },
  { name: "トルコ", code: "tr" },
  { name: "トルクメニスタン", code: "tm" },
  { name: "ツバル", code: "tv" },
  { name: "ウガンダ", code: "ug" },
  { name: "ウクライナ", code: "ua" },
  { name: "アラブ首長国連邦", code: "ae" },
  { name: "イギリス", code: "gb" },
  { name: "アメリカ", code: "us" },
  { name: "ウルグアイ", code: "uy" },
  { name: "ウズベキスタン", code: "uz" },
  { name: "バヌアツ", code: "vu" },
  { name: "バチカン", code: "va" },
  { name: "ベネズエラ", code: "ve" },
  { name: "ベトナム", code: "vn" },
  { name: "イエメン", code: "ye" },
  { name: "ザンビア", code: "zm" },
  { name: "ジンバブエ", code: "zw" },
  { name: "コソボ", code: "xk" },
  { name: "クックしょとう", code: "ck" }
];

// 画像URL生成
const getFlagUrl = (code) => `https://flagcdn.com/w640/${code}.png`;

// fallback
const FALLBACK_LARGE = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwMCIgaGVpZ2h0PSI2NjciIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjEwMDAiIGhlaWdodD0iNjY3IiBmaWxsPSIjY2NjIi8+PHRleHQgeD0iNTAwIiB5PSI0MDAiIGZvbnQtc2l6ZT0iNDAwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWxsPSJ3aGl0ZSI+PyI8L3RleHQ+PC9zdmc+';

let quizFlags = [];
let currentFlag = null;
let questionCount = 0;
let correctCount = 0;
let missedFlags = [];
const TOTAL_QUESTIONS = 20;

const audioCtx = new (window.AudioContext || window.webkitAudioContext)();

const playCorrectChime = () => {
  [1046, 1318, 1568].forEach((freq, i) => {
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    osc.connect(gain); gain.connect(audioCtx.destination);
    osc.frequency.value = freq;
    gain.gain.setValueAtTime(0.2, audioCtx.currentTime + i * 0.08);
    gain.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + i * 0.08 + 0.2);
    osc.start(audioCtx.currentTime + i * 0.08);
    osc.stop(audioCtx.currentTime + i * 0.08 + 0.2);
  });
};

const playWrongBeep = () => {
  const osc = audioCtx.createOscillator();
  const gain = audioCtx.createGain();
  osc.connect(gain); gain.connect(audioCtx.destination);
  osc.frequency.value = 200;
  gain.gain.setValueAtTime(0.2, audioCtx.currentTime);
  gain.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.4);
  osc.start(); osc.stop(audioCtx.currentTime + 0.4);
};

// 星の初期化
function initStars() {
  const starsContainer = document.getElementById("stars");
  starsContainer.innerHTML = "";
  for (let i = 0; i < TOTAL_QUESTIONS; i++) {
    const star = document.createElement("div");
    star.className = "star";
    star.id = `star-${i}`;
    starsContainer.appendChild(star);
  }
}

// 正解時に星を光らせる
function fillStar() {
  const star = document.getElementById(`star-${correctCount - 1}`);
  if (star) {
    star.classList.add("filled");
  }
}

// 星パーティクル
function createStarParticles(btn) {
  for (let i = 0; i < 8; i++) {
    const star = document.createElement("div");
    star.textContent = "★";
    star.style.position = "absolute";
    star.style.left = "50%";
    star.style.top = "50%";
    star.style.fontSize = "6vmin";
    star.style.color = "#FFD700";
    star.style.pointerEvents = "none";
    star.style.transform = "translate(-50%, -50%)";
    star.style.zIndex = "20";
    btn.appendChild(star);

    const angle = Math.random() * Math.PI * 2;
    const velocity = 6 + Math.random() * 8;
    const anim = star.animate([
      { transform: "translate(-50%, -50%) scale(0)", opacity: 1 },
      { transform: `translate(${Math.cos(angle)*velocity}vmin, ${Math.sin(angle)*velocity}vmin) scale(1)`, opacity: 1 },
      { transform: `translate(${Math.cos(angle)*velocity*2}vmin, ${Math.sin(angle)*velocity*2}vmin) scale(0)`, opacity: 0 }
    ], {
      duration: 800,
      easing: "cubic-bezier(0.2, 0.8, 0.4, 1)"
    });
    anim.onfinish = () => star.remove();
  }
}

function prepareQuiz() {
  quizFlags = FLAGS.sort(() => Math.random() - 0.5).slice(0, TOTAL_QUESTIONS);
  questionCount = 0;
  correctCount = 0;
}

function newQuestion() {
  if (questionCount >= quizFlags.length) return;
  currentFlag = quizFlags[questionCount];
  const otherFlags = FLAGS.filter(f => f.code !== currentFlag.code);
  const wrongChoices = otherFlags.sort(() => Math.random() - 0.5).slice(0, 3);
  const choices = [currentFlag, ...wrongChoices].sort(() => Math.random() - 0.5);

  document.getElementById("flag-area").innerHTML = `<img src="${getFlagUrl(currentFlag.code)}" alt="" loading="eager" crossorigin="anonymous" onerror="this.src='${FALLBACK_LARGE}'">`;
  document.getElementById("progress").textContent = `${questionCount + 1} / ${TOTAL_QUESTIONS}`;

  const choicesDiv = document.getElementById("choices");
  choicesDiv.innerHTML = "";
  choices.forEach(c => {
    const btn = document.createElement("button");
    btn.className = "choice-btn";
    btn.textContent = c.name;
    btn.onclick = () => selectAnswer(c === currentFlag, btn);
    choicesDiv.appendChild(btn);
  });

  document.getElementById("feedback").classList.remove("show");
}

function selectAnswer(isCorrect, btn) {
  document.querySelectorAll(".choice-btn").forEach(b => b.disabled = true);

  if (isCorrect) {
    correctCount++;
    btn.classList.add("correct");
    document.getElementById("feedback").textContent = "◎";
    document.getElementById("feedback").className = "show mar";
    playCorrectChime();
    fillStar();
    createStarParticles(btn);
  } else {
    btn.classList.add("wrong");
    document.getElementById("feedback").textContent = "×";
    document.getElementById("feedback").className = "show batsu";
    playWrongBeep();
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
  document.getElementById("result-text").textContent = `せいかい ${correctCount}もん！`;
  document.getElementById("game-screen").classList.remove("active");
  document.getElementById("end-screen").classList.add("active");
}

// スタート・再スタート・ホーム
document.getElementById("start-btn").onclick = () => {
  document.getElementById("start-screen").classList.remove("active");
  document.getElementById("game-screen").classList.add("active");
  initStars();
  prepareQuiz();
  newQuestion();
};

document.getElementById("restart-btn").onclick = () => {
  document.getElementById("end-screen").classList.remove("active");
  document.getElementById("game-screen").classList.add("active");
  questionCount = 0;
  correctCount = 0;
  initStars();
  prepareQuiz();
  newQuestion();
};

document.getElementById("home-btn").onclick = () => {
  document.getElementById("end-screen").classList.remove("active");
  document.getElementById("start-screen").classList.add("active");
};
