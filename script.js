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
  { name: "くわいと", code: "kw" },
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
  { name: "クックしょとう", code: "ck" },
  { name: "ニウエ", code: "nu" }
];

// 画像URL生成
const getFlagUrl = (code) => `https://flagcdn.com/w640/${code}.png`;
const getSmallFlagUrl = (code) => `https://flagcdn.com/w80/${code}.png`;

// fallback
const FALLBACK_LARGE = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwMCIgaGVpZ2h0PSI2NjciIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjEwMDAiIGhlaWdodD0iNjY3IiBmaWxsPSIjY2NjIi8+PHRleHQgeD0iNTAwIiB5PSI0MDAiIGZvbnQtc2l6ZT0iNDAwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWxsPSJ3aGl0ZSI+PyI8L3RleHQ+PC9zdmc+';
const FALLBACK_SMALL = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjUwIiBoZWlnaHQ9IjE2NyIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMjUwIiBoZWlnaHQ9IjE2NyIgZmlsbD0iI2NjYyIvPjx0ZXh0IHg9IjEyNSIgeT0iMTAwIiBmb250LXNpemU9IjEwMCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZmlsbD0id2hpdGUiPj88L3RleHQ+PC9zdmc+';

let quizFlags = [];
let currentFlag = null;
let questionCount = 0;
let correctCount = 0;
let missedFlags = [];
let missRecords = JSON.parse(localStorage.getItem('flag_miss_records')) || {};
const TOTAL_QUESTIONS = 20;
const STORAGE_KEY = 'flag_quiz_records';
const MISS_STORAGE_KEY = 'flag_miss_records';

const audioCtx = new (window.AudioContext || window.webkitAudioContext)();

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

// === JSTで今日の日付を取得 ===
function getTodayJST() {
  const now = new Date();
  const jstOffset = 9 * 60; // JSTはUTC+9
  const utc = now.getTime() + (now.getTimezoneOffset() * 60000);
  const jst = new Date(utc + (jstOffset * 60000));
  return jst.toISOString().split('T')[0];
}

// 30日前もJSTで
function getCutoffJST() {
  const now = new Date();
  const jstOffset = 9 * 60;
  const utc = now.getTime() + (now.getTimezoneOffset() * 60000);
  const jst = new Date(utc + (jstOffset * 60000));
  jst.setDate(jst.getDate() - 30);
  return jst.toISOString().split('T')[0];
}

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

  document.getElementById("flag-area").innerHTML = `<img src="${getFlagUrl(currentFlag.code)}" alt="" loading="eager" crossorigin="anonymous" onerror="this.src='${FALLBACK_LARGE}'">`;
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
    feedback.textContent = "○";
    feedback.className = "show mar";
    playCorrectChime();
    canvas.style.display = "block";
    createConfetti();
    drawConfetti();
  } else {
    if (!missedFlags.some(f => f.code === currentFlag.code)) {
      missedFlags.push(currentFlag);
    }
    const today = getTodayJST();
    if (!missRecords[today]) missRecords[today] = [];
    if (!missRecords[today].includes(currentFlag.code)) {
      missRecords[today].push(currentFlag.code);
      localStorage.setItem(MISS_STORAGE_KEY, JSON.stringify(missRecords));
    }

    feedback.textContent = "×";
    feedback.className = "show batsu";
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
  }
}

function showRewardPopup() {
  const today = getTodayJST();
  const todayGained = records[today] || [];
  const available = FLAGS.filter(f => !todayGained.includes(f.code));
  
  let reward;
  if (available.length === 0) {
    reward = FLAGS[Math.floor(Math.random() * FLAGS.length)];
  } else {
    reward = available[Math.floor(Math.random() * available.length)];
  }
  
  const img = document.getElementById("reward-flag");
  img.src = getFlagUrl(reward.code);
  img.onerror = function() { this.src = FALLBACK_LARGE; };
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

// スタートボタン
document.getElementById("start-btn").onclick = () => {
  document.getElementById("start-screen").classList.add("hidden");
  document.getElementById("game-screen").classList.remove("hidden");
  prepareQuiz();
  newQuestion();
};

// 履歴ボタン
document.getElementById("history-btn").onclick = () => {
  document.getElementById("start-screen").classList.add("hidden");
  document.getElementById("history-screen").classList.remove("hidden");
  showHistory();
};

document.getElementById("miss-btn").onclick = () => {
  document.getElementById("start-screen").classList.add("hidden");
  document.getElementById("miss-screen").classList.remove("hidden");
  showMissHistory();
};

// 戻るボタン
document.querySelectorAll(".back-btn").forEach(btn => {
  btn.onclick = () => {
    document.querySelectorAll(".screen").forEach(s => s.classList.add("hidden"));
    document.getElementById("start-screen").classList.remove("hidden");
  };
});

// 履歴表示関数
function showHistory() {
  const list = document.getElementById("history-list");
  list.innerHTML = "";
  const dates = Object.keys(records).sort((a, b) => b.localeCompare(a));
  const cutoffStr = getCutoffJST();
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
      const img = document.createElement("img");
      img.src = getSmallFlagUrl(code);
      img.alt = FLAGS.find(f => f.code === code)?.name || "";
      img.onerror = () => { img.src = FALLBACK_SMALL; };
      flagsDiv.appendChild(img);
    });
    dayDiv.appendChild(flagsDiv);
    list.appendChild(dayDiv);
  });
}

function showMissHistory() {
  const list = document.getElementById("miss-list");
  list.innerHTML = "";
  const dates = Object.keys(missRecords).sort((a, b) => b.localeCompare(a));
  const cutoffStr = getCutoffJST();
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
        img.src = getSmallFlagUrl(code);
        img.alt = f.name;
        img.title = f.name;
        img.onerror = () => { img.src = FALLBACK_SMALL; };
        img.onclick = () => startReview(f);
        flagsDiv.appendChild(img);
      }
    });
    dayDiv.appendChild(flagsDiv);
    list.appendChild(dayDiv);
  });
}

let reviewFlag;
function startReview(flag) {
  reviewFlag = flag;
  document.getElementById("miss-screen").classList.add("hidden");
  document.getElementById("review-screen").classList.remove("hidden");
  
  const otherFlags = FLAGS.filter(f => f.code !== flag.code);
  const wrongChoices = otherFlags.sort(() => Math.random() - 0.5).slice(0, 3);
  const choices = [flag, ...wrongChoices].sort(() => Math.random() - 0.5);

  document.getElementById("review-flag-area").innerHTML = `<img src="${getFlagUrl(flag.code)}" alt="" loading="eager" crossorigin="anonymous" onerror="this.src='${FALLBACK_LARGE}'">`;

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
    feedback.textContent = "○";
    feedback.className = "show mar";
    playCorrectChime();
  } else {
    feedback.textContent = "×";
    feedback.className = "show batsu";
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

window.addEventListener("resize", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});
