// === 198カ国完全データ（GitHub raw png1000px 高解像度）===
const FLAGS = [
  { name: "アフガニスタン", code: "af", file: "https://raw.githubusercontent.com/hampusborgos/country-flags/main/png1000px/af.png" },
  { name: "アルバニア", code: "al", file: "https://raw.githubusercontent.com/hampusborgos/country-flags/main/png1000px/al.png" },
  { name: "アルジェリア", code: "dz", file: "https://raw.githubusercontent.com/hampusborgos/country-flags/main/png1000px/dz.png" },
  { name: "アンドラ", code: "ad", file: "https://raw.githubusercontent.com/hampusborgos/country-flags/main/png1000px/ad.png" },
  { name: "アンゴラ", code: "ao", file: "https://raw.githubusercontent.com/hampusborgos/country-flags/main/png1000px/ao.png" },
  { name: "アンティグア・バーブーダ", code: "ag", file: "https://raw.githubusercontent.com/hampusborgos/country-flags/main/png1000px/ag.png" },
  { name: "アルゼンチン", code: "ar", file: "https://raw.githubusercontent.com/hampusborgos/country-flags/main/png1000px/ar.png" },
  { name: "アルメニア", code: "am", file: "https://raw.githubusercontent.com/hampusborgos/country-flags/main/png1000px/am.png" },
  { name: "オーストラリア", code: "au", file: "https://raw.githubusercontent.com/hampusborgos/country-flags/main/png1000px/au.png" },
  { name: "オーストリア", code: "at", file: "https://raw.githubusercontent.com/hampusborgos/country-flags/main/png1000px/at.png" },
  { name: "アゼルバイジャン", code: "az", file: "https://raw.githubusercontent.com/hampusborgos/country-flags/main/png1000px/az.png" },
  { name: "バハマ", code: "bs", file: "https://raw.githubusercontent.com/hampusborgos/country-flags/main/png1000px/bs.png" },
  { name: "バーレーン", code: "bh", file: "https://raw.githubusercontent.com/hampusborgos/country-flags/main/png1000px/bh.png" },
  { name: "バングラデシュ", code: "bd", file: "https://raw.githubusercontent.com/hampusborgos/country-flags/main/png1000px/bd.png" },
  { name: "バルバドス", code: "bb", file: "https://raw.githubusercontent.com/hampusborgos/country-flags/main/png1000px/bb.png" },
  { name: "ベラルーシ", code: "by", file: "https://raw.githubusercontent.com/hampusborgos/country-flags/main/png1000px/by.png" },
  { name: "ベルギー", code: "be", file: "https://raw.githubusercontent.com/hampusborgos/country-flags/main/png1000px/be.png" },
  { name: "ベリーズ", code: "bz", file: "https://raw.githubusercontent.com/hampusborgos/country-flags/main/png1000px/bz.png" },
  { name: "ベナン", code: "bj", file: "https://raw.githubusercontent.com/hampusborgos/country-flags/main/png1000px/bj.png" },
  { name: "ブータン", code: "bt", file: "https://raw.githubusercontent.com/hampusborgos/country-flags/main/png1000px/bt.png" },
  { name: "ボリビア", code: "bo", file: "https://raw.githubusercontent.com/hampusborgos/country-flags/main/png1000px/bo.png" },
  { name: "ボスニア・ヘルツェゴビナ", code: "ba", file: "https://raw.githubusercontent.com/hampusborgos/country-flags/main/png1000px/ba.png" },
  { name: "ボツワナ", code: "bw", file: "https://raw.githubusercontent.com/hampusborgos/country-flags/main/png1000px/bw.png" },
  { name: "ブラジル", code: "br", file: "https://raw.githubusercontent.com/hampusborgos/country-flags/main/png1000px/br.png" },
  { name: "ブルネイ", code: "bn", file: "https://raw.githubusercontent.com/hampusborgos/country-flags/main/png1000px/bn.png" },
  { name: "ブルガリア", code: "bg", file: "https://raw.githubusercontent.com/hampusborgos/country-flags/main/png1000px/bg.png" },
  { name: "ブルキナファソ", code: "bf", file: "https://raw.githubusercontent.com/hampusborgos/country-flags/main/png1000px/bf.png" },
  { name: "ブルンジ", code: "bi", file: "https://raw.githubusercontent.com/hampusborgos/country-flags/main/png1000px/bi.png" },
  { name: "カーボベルデ", code: "cv", file: "https://raw.githubusercontent.com/hampusborgos/country-flags/main/png1000px/cv.png" },
  { name: "カンボジア", code: "kh", file: "https://raw.githubusercontent.com/hampusborgos/country-flags/main/png1000px/kh.png" },
  { name: "カメルーン", code: "cm", file: "https://raw.githubusercontent.com/hampusborgos/country-flags/main/png1000px/cm.png" },
  { name: "カナダ", code: "ca", file: "https://raw.githubusercontent.com/hampusborgos/country-flags/main/png1000px/ca.png" },
  { name: "中央アフリカ", code: "cf", file: "https://raw.githubusercontent.com/hampusborgos/country-flags/main/png1000px/cf.png" },
  { name: "チャド", code: "td", file: "https://raw.githubusercontent.com/hampusborgos/country-flags/main/png1000px/td.png" },
  { name: "チリ", code: "cl", file: "https://raw.githubusercontent.com/hampusborgos/country-flags/main/png1000px/cl.png" },
  { name: "ちゅうごく", code: "cn", file: "https://raw.githubusercontent.com/hampusborgos/country-flags/main/png1000px/cn.png" },
  { name: "コロンビア", code: "co", file: "https://raw.githubusercontent.com/hampusborgos/country-flags/main/png1000px/co.png" },
  { name: "コモロ", code: "km", file: "https://raw.githubusercontent.com/hampusborgos/country-flags/main/png1000px/km.png" },
  { name: "コンゴきょうわこく", code: "cg", file: "https://raw.githubusercontent.com/hampusborgos/country-flags/main/png1000px/cg.png" },
  { name: "コンゴみんしゅこく", code: "cd", file: "https://raw.githubusercontent.com/hampusborgos/country-flags/main/png1000px/cd.png" },
  { name: "コスタリカ", code: "cr", file: "https://raw.githubusercontent.com/hampusborgos/country-flags/main/png1000px/cr.png" },
  { name: "コートジボワール", code: "ci", file: "https://raw.githubusercontent.com/hampusborgos/country-flags/main/png1000px/ci.png" },
  { name: "クロアチア", code: "hr", file: "https://raw.githubusercontent.com/hampusborgos/country-flags/main/png1000px/hr.png" },
  { name: "キューバ", code: "cu", file: "https://raw.githubusercontent.com/hampusborgos/country-flags/main/png1000px/cu.png" },
  { name: "キプロス", code: "cy", file: "https://raw.githubusercontent.com/hampusborgos/country-flags/main/png1000px/cy.png" },
  { name: "チェコ", code: "cz", file: "https://raw.githubusercontent.com/hampusborgos/country-flags/main/png1000px/cz.png" },
  { name: "デンマーク", code: "dk", file: "https://raw.githubusercontent.com/hampusborgos/country-flags/main/png1000px/dk.png" },
  { name: "ジブチ", code: "dj", file: "https://raw.githubusercontent.com/hampusborgos/country-flags/main/png1000px/dj.png" },
  { name: "ドミニカ", code: "dm", file: "https://raw.githubusercontent.com/hampusborgos/country-flags/main/png1000px/dm.png" },
  { name: "ドミニカきょうわこく", code: "do", file: "https://raw.githubusercontent.com/hampusborgos/country-flags/main/png1000px/do.png" },
  { name: "エクアドル", code: "ec", file: "https://raw.githubusercontent.com/hampusborgos/country-flags/main/png1000px/ec.png" },
  { name: "エジプト", code: "eg", file: "https://raw.githubusercontent.com/hampusborgos/country-flags/main/png1000px/eg.png" },
  { name: "エルサルバドル", code: "sv", file: "https://raw.githubusercontent.com/hampusborgos/country-flags/main/png1000px/sv.png" },
  { name: "赤道ギニア", code: "gq", file: "https://raw.githubusercontent.com/hampusborgos/country-flags/main/png1000px/gq.png" },
  { name: "エリトリア", code: "er", file: "https://raw.githubusercontent.com/hampusborgos/country-flags/main/png1000px/er.png" },
  { name: "エストニア", code: "ee", file: "https://raw.githubusercontent.com/hampusborgos/country-flags/main/png1000px/ee.png" },
  { name: "エスワティニ", code: "sz", file: "https://raw.githubusercontent.com/hampusborgos/country-flags/main/png1000px/sz.png" },
  { name: "エチオピア", code: "et", file: "https://raw.githubusercontent.com/hampusborgos/country-flags/main/png1000px/et.png" },
  { name: "フィジー", code: "fj", file: "https://raw.githubusercontent.com/hampusborgos/country-flags/main/png1000px/fj.png" },
  { name: "フィンランド", code: "fi", file: "https://raw.githubusercontent.com/hampusborgos/country-flags/main/png1000px/fi.png" },
  { name: "フランス", code: "fr", file: "https://raw.githubusercontent.com/hampusborgos/country-flags/main/png1000px/fr.png" },
  { name: "ガボン", code: "ga", file: "https://raw.githubusercontent.com/hampusborgos/country-flags/main/png1000px/ga.png" },
  { name: "ガンビア", code: "gm", file: "https://raw.githubusercontent.com/hampusborgos/country-flags/main/png1000px/gm.png" },
  { name: "ジョージア", code: "ge", file: "https://raw.githubusercontent.com/hampusborgos/country-flags/main/png1000px/ge.png" },
  { name: "ドイツ", code: "de", file: "https://raw.githubusercontent.com/hampusborgos/country-flags/main/png1000px/de.png" },
  { name: "ガーナ", code: "gh", file: "https://raw.githubusercontent.com/hampusborgos/country-flags/main/png1000px/gh.png" },
  { name: "ギリシャ", code: "gr", file: "https://raw.githubusercontent.com/hampusborgos/country-flags/main/png1000px/gr.png" },
  { name: "グレナダ", code: "gd", file: "https://raw.githubusercontent.com/hampusborgos/country-flags/main/png1000px/gd.png" },
  { name: "グアテマラ", code: "gt", file: "https://raw.githubusercontent.com/hampusborgos/country-flags/main/png1000px/gt.png" },
  { name: "ギニア", code: "gn", file: "https://raw.githubusercontent.com/hampusborgos/country-flags/main/png1000px/gn.png" },
  { name: "ギニアビサウ", code: "gw", file: "https://raw.githubusercontent.com/hampusborgos/country-flags/main/png1000px/gw.png" },
  { name: "ガイアナ", code: "gy", file: "https://raw.githubusercontent.com/hampusborgos/country-flags/main/png1000px/gy.png" },
  { name: "ハイチ", code: "ht", file: "https://raw.githubusercontent.com/hampusborgos/country-flags/main/png1000px/ht.png" },
  { name: "ホンジュラス", code: "hn", file: "https://raw.githubusercontent.com/hampusborgos/country-flags/main/png1000px/hn.png" },
  { name: "ハンガリー", code: "hu", file: "https://raw.githubusercontent.com/hampusborgos/country-flags/main/png1000px/hu.png" },
  { name: "アイスランド", code: "is", file: "https://raw.githubusercontent.com/hampusborgos/country-flags/main/png1000px/is.png" },
  { name: "インド", code: "in", file: "https://raw.githubusercontent.com/hampusborgos/country-flags/main/png1000px/in.png" },
  { name: "インドネシア", code: "id", file: "https://raw.githubusercontent.com/hampusborgos/country-flags/main/png1000px/id.png" },
  { name: "イラン", code: "ir", file: "https://raw.githubusercontent.com/hampusborgos/country-flags/main/png1000px/ir.png" },
  { name: "イラク", code: "iq", file: "https://raw.githubusercontent.com/hampusborgos/country-flags/main/png1000px/iq.png" },
  { name: "アイルランド", code: "ie", file: "https://raw.githubusercontent.com/hampusborgos/country-flags/main/png1000px/ie.png" },
  { name: "イスラエル", code: "il", file: "https://raw.githubusercontent.com/hampusborgos/country-flags/main/png1000px/il.png" },
  { name: "イタリア", code: "it", file: "https://raw.githubusercontent.com/hampusborgos/country-flags/main/png1000px/it.png" },
  { name: "ジャマイカ", code: "jm", file: "https://raw.githubusercontent.com/hampusborgos/country-flags/main/png1000px/jm.png" },
  { name: "にほん", code: "jp", file: "https://raw.githubusercontent.com/hampusborgos/country-flags/main/png1000px/jp.png" },
  { name: "ヨルダン", code: "jo", file: "https://raw.githubusercontent.com/hampusborgos/country-flags/main/png1000px/jo.png" },
  { name: "カザフスタン", code: "kz", file: "https://raw.githubusercontent.com/hampusborgos/country-flags/main/png1000px/kz.png" },
  { name: "ケニア", code: "ke", file: "https://raw.githubusercontent.com/hampusborgos/country-flags/main/png1000px/ke.png" },
  { name: "キリバス", code: "ki", file: "https://raw.githubusercontent.com/hampusborgos/country-flags/main/png1000px/ki.png" },
  { name: "クウェート", code: "kw", file: "https://raw.githubusercontent.com/hampusborgos/country-flags/main/png1000px/kw.png" },
  { name: "キルギス", code: "kg", file: "https://raw.githubusercontent.com/hampusborgos/country-flags/main/png1000px/kg.png" },
  { name: "ラオス", code: "la", file: "https://raw.githubusercontent.com/hampusborgos/country-flags/main/png1000px/la.png" },
  { name: "ラトビア", code: "lv", file: "https://raw.githubusercontent.com/hampusborgos/country-flags/main/png1000px/lv.png" },
  { name: "レバノン", code: "lb", file: "https://raw.githubusercontent.com/hampusborgos/country-flags/main/png1000px/lb.png" },
  { name: "レソト", code: "ls", file: "https://raw.githubusercontent.com/hampusborgos/country-flags/main/png1000px/ls.png" },
  { name: "リベリア", code: "lr", file: "https://raw.githubusercontent.com/hampusborgos/country-flags/main/png1000px/lr.png" },
  { name: "リビア", code: "ly", file: "https://raw.githubusercontent.com/hampusborgos/country-flags/main/png1000px/ly.png" },
  { name: "リヒテンシュタイン", code: "li", file: "https://raw.githubusercontent.com/hampusborgos/country-flags/main/png1000px/li.png" },
  { name: "リトアニア", code: "lt", file: "https://raw.githubusercontent.com/hampusborgos/country-flags/main/png1000px/lt.png" },
  { name: "ルクセンブルク", code: "lu", file: "https://raw.githubusercontent.com/hampusborgos/country-flags/main/png1000px/lu.png" },
  { name: "マダガスカル", code: "mg", file: "https://raw.githubusercontent.com/hampusborgos/country-flags/main/png1000px/mg.png" },
  { name: "マラウイ", code: "mw", file: "https://raw.githubusercontent.com/hampusborgos/country-flags/main/png1000px/mw.png" },
  { name: "マレーシア", code: "my", file: "https://raw.githubusercontent.com/hampusborgos/country-flags/main/png1000px/my.png" },
  { name: "モルディブ", code: "mv", file: "https://raw.githubusercontent.com/hampusborgos/country-flags/main/png1000px/mv.png" },
  { name: "マリ", code: "ml", file: "https://raw.githubusercontent.com/hampusborgos/country-flags/main/png1000px/ml.png" },
  { name: "マルタ", code: "mt", file: "https://raw.githubusercontent.com/hampusborgos/country-flags/main/png1000px/mt.png" },
  { name: "マーシャルしょとう", code: "mh", file: "https://raw.githubusercontent.com/hampusborgos/country-flags/main/png1000px/mh.png" },
  { name: "モーリタニア", code: "mr", file: "https://raw.githubusercontent.com/hampusborgos/country-flags/main/png1000px/mr.png" },
  { name: "モーリシャス", code: "mu", file: "https://raw.githubusercontent.com/hampusborgos/country-flags/main/png1000px/mu.png" },
  { name: "メキシコ", code: "mx", file: "https://raw.githubusercontent.com/hampusborgos/country-flags/main/png1000px/mx.png" },
  { name: "ミクロネシア", code: "fm", file: "https://raw.githubusercontent.com/hampusborgos/country-flags/main/png1000px/fm.png" },
  { name: "モルドバ", code: "md", file: "https://raw.githubusercontent.com/hampusborgos/country-flags/main/png1000px/md.png" },
  { name: "モナコ", code: "mc", file: "https://raw.githubusercontent.com/hampusborgos/country-flags/main/png1000px/mc.png" },
  { name: "モンゴル", code: "mn", file: "https://raw.githubusercontent.com/hampusborgos/country-flags/main/png1000px/mn.png" },
  { name: "モンテネグロ", code: "me", file: "https://raw.githubusercontent.com/hampusborgos/country-flags/main/png1000px/me.png" },
  { name: "モロッコ", code: "ma", file: "https://raw.githubusercontent.com/hampusborgos/country-flags/main/png1000px/ma.png" },
  { name: "モザンビーク", code: "mz", file: "https://raw.githubusercontent.com/hampusborgos/country-flags/main/png1000px/mz.png" },
  { name: "ミャンマー", code: "mm", file: "https://raw.githubusercontent.com/hampusborgos/country-flags/main/png1000px/mm.png" },
  { name: "ナミビア", code: "na", file: "https://raw.githubusercontent.com/hampusborgos/country-flags/main/png1000px/na.png" },
  { name: "ナウル", code: "nr", file: "https://raw.githubusercontent.com/hampusborgos/country-flags/main/png1000px/nr.png" },
  { name: "ネパール", code: "np", file: "https://raw.githubusercontent.com/hampusborgos/country-flags/main/png1000px/np.png" },
  { name: "オランダ", code: "nl", file: "https://raw.githubusercontent.com/hampusborgos/country-flags/main/png1000px/nl.png" },
  { name: "ニュージーランド", code: "nz", file: "https://raw.githubusercontent.com/hampusborgos/country-flags/main/png1000px/nz.png" },
  { name: "ニカラグア", code: "ni", file: "https://raw.githubusercontent.com/hampusborgos/country-flags/main/png1000px/ni.png" },
  { name: "ニジェール", code: "ne", file: "https://raw.githubusercontent.com/hampusborgos/country-flags/main/png1000px/ne.png" },
  { name: "ナイジェリア", code: "ng", file: "https://raw.githubusercontent.com/hampusborgos/country-flags/main/png1000px/ng.png" },
  { name: "北朝鮮", code: "kp", file: "https://raw.githubusercontent.com/hampusborgos/country-flags/main/png1000px/kp.png" },
  { name: "北マケドニア", code: "mk", file: "https://raw.githubusercontent.com/hampusborgos/country-flags/main/png1000px/mk.png" },
  { name: "ノルウェー", code: "no", file: "https://raw.githubusercontent.com/hampusborgos/country-flags/main/png1000px/no.png" },
  { name: "オマーン", code: "om", file: "https://raw.githubusercontent.com/hampusborgos/country-flags/main/png1000px/om.png" },
  { name: "パキスタン", code: "pk", file: "https://raw.githubusercontent.com/hampusborgos/country-flags/main/png1000px/pk.png" },
  { name: "パラオ", code: "pw", file: "https://raw.githubusercontent.com/hampusborgos/country-flags/main/png1000px/pw.png" },
  { name: "パナマ", code: "pa", file: "https://raw.githubusercontent.com/hampusborgos/country-flags/main/png1000px/pa.png" },
  { name: "パプアニューギニア", code: "pg", file: "https://raw.githubusercontent.com/hampusborgos/country-flags/main/png1000px/pg.png" },
  { name: "パラグアイ", code: "py", file: "https://raw.githubusercontent.com/hampusborgos/country-flags/main/png1000px/py.png" },
  { name: "ペルー", code: "pe", file: "https://raw.githubusercontent.com/hampusborgos/country-flags/main/png1000px/pe.png" },
  { name: "フィリピン", code: "ph", file: "https://raw.githubusercontent.com/hampusborgos/country-flags/main/png1000px/ph.png" },
  { name: "ポーランド", code: "pl", file: "https://raw.githubusercontent.com/hampusborgos/country-flags/main/png1000px/pl.png" },
  { name: "ポルトガル", code: "pt", file: "https://raw.githubusercontent.com/hampusborgos/country-flags/main/png1000px/pt.png" },
  { name: "カタール", code: "qa", file: "https://raw.githubusercontent.com/hampusborgos/country-flags/main/png1000px/qa.png" },
  { name: "ルーマニア", code: "ro", file: "https://raw.githubusercontent.com/hampusborgos/country-flags/main/png1000px/ro.png" },
  { name: "ロシア", code: "ru", file: "https://raw.githubusercontent.com/hampusborgos/country-flags/main/png1000px/ru.png" },
  { name: "ルワンダ", code: "rw", file: "https://raw.githubusercontent.com/hampusborgos/country-flags/main/png1000px/rw.png" },
  { name: "セントクリストファー・ネーヴィス", code: "kn", file: "https://raw.githubusercontent.com/hampusborgos/country-flags/main/png1000px/kn.png" },
  { name: "セントルシア", code: "lc", file: "https://raw.githubusercontent.com/hampusborgos/country-flags/main/png1000px/lc.png" },
  { name: "セントビンセントおよびグレナディーン", code: "vc", file: "https://raw.githubusercontent.com/hampusborgos/country-flags/main/png1000px/vc.png" },
  { name: "サモア", code: "ws", file: "https://raw.githubusercontent.com/hampusborgos/country-flags/main/png1000px/ws.png" },
  { name: "サンマリノ", code: "sm", file: "https://raw.githubusercontent.com/hampusborgos/country-flags/main/png1000px/sm.png" },
  { name: "サントメ・プリンシペ", code: "st", file: "https://raw.githubusercontent.com/hampusborgos/country-flags/main/png1000px/st.png" },
  { name: "サウジアラビア", code: "sa", file: "https://raw.githubusercontent.com/hampusborgos/country-flags/main/png1000px/sa.png" },
  { name: "セネガル", code: "sn", file: "https://raw.githubusercontent.com/hampusborgos/country-flags/main/png1000px/sn.png" },
  { name: "セルビア", code: "rs", file: "https://raw.githubusercontent.com/hampusborgos/country-flags/main/png1000px/rs.png" },
  { name: "セーシェル", code: "sc", file: "https://raw.githubusercontent.com/hampusborgos/country-flags/main/png1000px/sc.png" },
  { name: "シエラレオネ", code: "sl", file: "https://raw.githubusercontent.com/hampusborgos/country-flags/main/png1000px/sl.png" },
  { name: "シンガポール", code: "sg", file: "https://raw.githubusercontent.com/hampusborgos/country-flags/main/png1000px/sg.png" },
  { name: "スロバキア", code: "sk", file: "https://raw.githubusercontent.com/hampusborgos/country-flags/main/png1000px/sk.png" },
  { name: "スロベニア", code: "si", file: "https://raw.githubusercontent.com/hampusborgos/country-flags/main/png1000px/si.png" },
  { name: "ソロモンしょとう", code: "sb", file: "https://raw.githubusercontent.com/hampusborgos/country-flags/main/png1000px/sb.png" },
  { name: "ソマリア", code: "so", file: "https://raw.githubusercontent.com/hampusborgos/country-flags/main/png1000px/so.png" },
  { name: "南アフリカ", code: "za", file: "https://raw.githubusercontent.com/hampusborgos/country-flags/main/png1000px/za.png" },
  { name: "韓国", code: "kr", file: "https://raw.githubusercontent.com/hampusborgos/country-flags/main/png1000px/kr.png" },
  { name: "南スーダン", code: "ss", file: "https://raw.githubusercontent.com/hampusborgos/country-flags/main/png1000px/ss.png" },
  { name: "スペイン", code: "es", file: "https://raw.githubusercontent.com/hampusborgos/country-flags/main/png1000px/es.png" },
  { name: "スリランカ", code: "lk", file: "https://raw.githubusercontent.com/hampusborgos/country-flags/main/png1000px/lk.png" },
  { name: "スーダン", code: "sd", file: "https://raw.githubusercontent.com/hampusborgos/country-flags/main/png1000px/sd.png" },
  { name: "スリナム", code: "sr", file: "https://raw.githubusercontent.com/hampusborgos/country-flags/main/png1000px/sr.png" },
  { name: "スウェーデン", code: "se", file: "https://raw.githubusercontent.com/hampusborgos/country-flags/main/png1000px/se.png" },
  { name: "スイス", code: "ch", file: "https://raw.githubusercontent.com/hampusborgos/country-flags/main/png1000px/ch.png" },
  { name: "シリア", code: "sy", file: "https://raw.githubusercontent.com/hampusborgos/country-flags/main/png1000px/sy.png" },
  { name: "タジキスタン", code: "tj", file: "https://raw.githubusercontent.com/hampusborgos/country-flags/main/png1000px/tj.png" },
  { name: "タンザニア", code: "tz", file: "https://raw.githubusercontent.com/hampusborgos/country-flags/main/png1000px/tz.png" },
  { name: "タイ", code: "th", file: "https://raw.githubusercontent.com/hampusborgos/country-flags/main/png1000px/th.png" },
  { name: "東ティモール", code: "tl", file: "https://raw.githubusercontent.com/hampusborgos/country-flags/main/png1000px/tl.png" },
  { name: "トーゴ", code: "tg", file: "https://raw.githubusercontent.com/hampusborgos/country-flags/main/png1000px/tg.png" },
  { name: "トンガ", code: "to", file: "https://raw.githubusercontent.com/hampusborgos/country-flags/main/png1000px/to.png" },
  { name: "トリニダード・トバゴ", code: "tt", file: "https://raw.githubusercontent.com/hampusborgos/country-flags/main/png1000px/tt.png" },
  { name: "チュニジア", code: "tn", file: "https://raw.githubusercontent.com/hampusborgos/country-flags/main/png1000px/tn.png" },
  { name: "トルコ", code: "tr", file: "https://raw.githubusercontent.com/hampusborgos/country-flags/main/png1000px/tr.png" },
  { name: "トルクメニスタン", code: "tm", file: "https://raw.githubusercontent.com/hampusborgos/country-flags/main/png1000px/tm.png" },
  { name: "ツバル", code: "tv", file: "https://raw.githubusercontent.com/hampusborgos/country-flags/main/png1000px/tv.png" },
  { name: "ウガンダ", code: "ug", file: "https://raw.githubusercontent.com/hampusborgos/country-flags/main/png1000px/ug.png" },
  { name: "ウクライナ", code: "ua", file: "https://raw.githubusercontent.com/hampusborgos/country-flags/main/png1000px/ua.png" },
  { name: "アラブ首長国連邦", code: "ae", file: "https://raw.githubusercontent.com/hampusborgos/country-flags/main/png1000px/ae.png" },
  { name: "イギリス", code: "gb", file: "https://raw.githubusercontent.com/hampusborgos/country-flags/main/png1000px/gb.png" },
  { name: "アメリカ", code: "us", file: "https://raw.githubusercontent.com/hampusborgos/country-flags/main/png1000px/us.png" },
  { name: "ウルグアイ", code: "uy", file: "https://raw.githubusercontent.com/hampusborgos/country-flags/main/png1000px/uy.png" },
  { name: "ウズベキスタン", code: "uz", file: "https://raw.githubusercontent.com/hampusborgos/country-flags/main/png1000px/uz.png" },
  { name: "バヌアツ", code: "vu", file: "https://raw.githubusercontent.com/hampusborgos/country-flags/main/png1000px/vu.png" },
  { name: "ベネズエラ", code: "ve", file: "https://raw.githubusercontent.com/hampusborgos/country-flags/main/png1000px/ve.png" },
  { name: "ベトナム", code: "vn", file: "https://raw.githubusercontent.com/hampusborgos/country-flags/main/png1000px/vn.png" },
  { name: "イエメン", code: "ye", file: "https://raw.githubusercontent.com/hampusborgos/country-flags/main/png1000px/ye.png" },
  { name: "ザンビア", code: "zm", file: "https://raw.githubusercontent.com/hampusborgos/country-flags/main/png1000px/zm.png" },
  { name: "ジンバブエ", code: "zw", file: "https://raw.githubusercontent.com/hampusborgos/country-flags/main/png1000px/zw.png" },
  { name: "バチカン", code: "va", file: "https://raw.githubusercontent.com/hampusborgos/country-flags/main/png1000px/va.png" },
  { name: "コソボ", code: "xk", file: "https://raw.githubusercontent.com/hampusborgos/country-flags/main/png1000px/xk.png" },
  { name: "クックしょとう", code: "ck", file: "https://raw.githubusercontent.com/hampusborgos/country-flags/main/png1000px/ck.png" },
  { name: "ニウエ", code: "nu", file: "https://raw.githubusercontent.com/hampusborgos/country-flags/main/png1000px/nu.png" },
  { name: "たいわん", code: "tw", file: "https://raw.githubusercontent.com/hampusborgos/country-flags/main/png1000px/tw.png" }
];

// 一覧用小さい国旗（png250px）
const SMALL_FLAGS = FLAGS.map(f => ({ ...f, file: f.file.replace('png1000px', 'png250px') }));

let quizFlags = [];
let currentFlag = null;
let questionCount = 0;
let correctCount = 0;
let missedFlags = []; // 誤答記憶（セッション）
let missRecords = JSON.parse(localStorage.getItem('flag_miss_records')) || {}; // 日付別誤答
const TOTAL_QUESTIONS = 20;
const STORAGE_KEY = 'flag_quiz_records';
const MISS_STORAGE_KEY = 'flag_miss_records';
const FALLBACK_IMG_LARGE = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwMCIgaGVpZ2h0PSI2NjciIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjEwMDAiIGhlaWdodD0iNjY3IiBmaWxsPSIjY2NjIi8+PHRleHQgeD0iNTAwIiB5PSI0MDAiIGZvbnQtc2l6ZT0iNDAwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWxsPSJ3aGl0ZSI+PyI8L3RleHQ+PC9zdmc+';
const FALLBACK_IMG_SMALL = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjUwIiBoZWlnaHQ9IjE2NyIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMjUwIiBoZWlnaHQ9IjE2NyIgZmlsbD0iI2NjYyIvPjx0ZXh0IHg9IjEyNSIgeT0iMTAwIiBmb250LXNpemU9IjEwMCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZmlsbD0id2hpdGUiPj88L3RleHQ+PC9zdmc+';

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

  document.getElementById("flag-area").innerHTML = `<img src="${currentFlag.file}" alt="" loading="eager" crossorigin="anonymous" onerror="this.src='${FALLBACK_IMG_LARGE}'">`;
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
    // ご褒美なし時は音声なし
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
  
  const img = document.getElementById("reward-flag");
  img.src = reward.file;
  img.onerror = function() { this.src = FALLBACK_IMG_LARGE; };
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
      const f = SMALL_FLAGS.find(x => x.code === code);
      if (f) {
        const img = document.createElement("img");
        img.src = f.file;
        img.alt = f.name;
        img.title = f.name;
        img.loading = "eager";
        img.onerror = function() { this.src = FALLBACK_IMG_SMALL; };
        img.onclick = () => startReview(FLAGS.find(x => x.code === code));
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

  document.getElementById("review-flag-area").innerHTML = `<img src="${flag.file}" alt="" loading="eager" crossorigin="anonymous" onerror="this.src='${FALLBACK_IMG_LARGE}'">`;

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
      const f = SMALL_FLAGS.find(x => x.code === code);
      if (f) {
        const img = document.createElement("img");
        img.src = f.file;
        img.alt = f.name;
        img.title = f.name;
        img.onerror = function() { this.src = FALLBACK_IMG_SMALL; };
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
