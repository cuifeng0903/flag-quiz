// === 198カ国完全データ（グルジア → ジョージア）===
const FLAGS = [
  { name: "アフガニスタン", code: "af", file: "https://upload.wikimedia.org/wikipedia/commons/5/5c/Flag_of_the_Taliban.svg" },
  { name: "アルバニア", code: "al", file: "https://upload.wikimedia.org/wikipedia/commons/3/36/Flag_of_Albania.svg" },
  { name: "アルジェリア", code: "dz", file: "https://upload.wikimedia.org/wikipedia/commons/7/77/Flag_of_Algeria.svg" },
  { name: "アンドラ", code: "ad", file: "https://upload.wikimedia.org/wikipedia/commons/1/19/Flag_of_Andorra.svg" },
  { name: "アンゴラ", code: "ao", file: "https://upload.wikimedia.org/wikipedia/commons/9/9d/Flag_of_Angola.svg" },
  { name: "アンティグア・バーブーダ", code: "ag", file: "https://upload.wikimedia.org/wikipedia/commons/8/89/Flag_of_Antigua_and_Barbuda.svg" },
  { name: "アルゼンチン", code: "ar", file: "https://upload.wikimedia.org/wikipedia/commons/1/1a/Flag_of_Argentina.svg" },
  { name: "アルメニア", code: "am", file: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Flag_of_Armenia.svg" },
  { name: "オーストラリア", code: "au", file: "https://upload.wikimedia.org/wikipedia/commons/b/b9/Flag_of_Australia.svg" },
  { name: "オーストリア", code: "at", file: "https://upload.wikimedia.org/wikipedia/commons/4/41/Flag_of_Austria.svg" },
  { name: "アゼルバイジャン", code: "az", file: "https://upload.wikimedia.org/wikipedia/commons/d/d4/Flag_of_Azerbaijan.svg" },
  { name: "バハマ", code: "bs", file: "https://upload.wikimedia.org/wikipedia/commons/9/93/Flag_of_the_Bahamas.svg" },
  { name: "バーレーン", code: "bh", file: "https://upload.wikimedia.org/wikipedia/commons/2/2c/Flag_of_Bahrain.svg" },
  { name: "バングラデシュ", code: "bd", file: "https://upload.wikimedia.org/wikipedia/commons/f/f9/Flag_of_Bangladesh.svg" },
  { name: "バルバドス", code: "bb", file: "https://upload.wikimedia.org/wikipedia/commons/e/ef/Flag_of_Barbados.svg" },
  { name: "ベラルーシ", code: "by", file: "https://upload.wikimedia.org/wikipedia/commons/8/85/Flag_of_Belarus.svg" },
  { name: "ベルギー", code: "be", file: "https://upload.wikimedia.org/wikipedia/commons/6/65/Flag_of_Belgium.svg" },
  { name: "ベリーズ", code: "bz", file: "https://upload.wikimedia.org/wikipedia/commons/e/e7/Flag_of_Belize.svg" },
  { name: "ベナン", code: "bj", file: "https://upload.wikimedia.org/wikipedia/commons/0/0a/Flag_of_Benin.svg" },
  { name: "ブータン", code: "bt", file: "https://upload.wikimedia.org/wikipedia/commons/9/91/Flag_of_Bhutan.svg" },
  { name: "ボリビア", code: "bo", file: "https://upload.wikimedia.org/wikipedia/commons/d/de/Flag_of_Bolivia_%28state%29.svg" },
  { name: "ボスニア・ヘルツェゴビナ", code: "ba", file: "https://upload.wikimedia.org/wikipedia/commons/b/bf/Flag_of_Bosnia_and_Herzegovina.svg" },
  { name: "ボツワナ", code: "bw", file: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Flag_of_Botswana.svg" },
  { name: "ブラジル", code: "br", file: "https://upload.wikimedia.org/wikipedia/commons/0/05/Flag_of_Brazil.svg" },
  { name: "ブルネイ", code: "bn", file: "https://upload.wikimedia.org/wikipedia/commons/9/9c/Flag_of_Brunei.svg" },
  { name: "ブルガリア", code: "bg", file: "https://upload.wikimedia.org/wikipedia/commons/9/9a/Flag_of_Bulgaria.svg" },
  { name: "ブルキナファソ", code: "bf", file: "https://upload.wikimedia.org/wikipedia/commons/3/31/Flag_of_Burkina_Faso.svg" },
  { name: "ブルンジ", code: "bi", file: "https://upload.wikimedia.org/wikipedia/commons/5/50/Flag_of_Burundi.svg" },
  { name: "カーボベルデ", code: "cv", file: "https://upload.wikimedia.org/wikipedia/commons/3/38/Flag_of_Cape_Verde.svg" },
  { name: "カンボジア", code: "kh", file: "https://upload.wikimedia.org/wikipedia/commons/8/83/Flag_of_Cambodia.svg" },
  { name: "カメルーン", code: "cm", file: "https://upload.wikimedia.org/wikipedia/commons/4/4f/Flag_of_Cameroon.svg" },
  { name: "カナダ", code: "ca", file: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Flag_of_Canada_%28Pantone%29.svg" },
  { name: "中央アフリカ", code: "cf", file: "https://upload.wikimedia.org/wikipedia/commons/6/6f/Flag_of_the_Central_African_Republic.svg" },
  { name: "チャド", code: "td", file: "https://upload.wikimedia.org/wikipedia/commons/4/4b/Flag_of_Chad.svg" },
  { name: "チリ", code: "cl", file: "https://upload.wikimedia.org/wikipedia/commons/7/78/Flag_of_Chile.svg" },
  { name: "ちゅうごく", code: "cn", file: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Flag_of_the_People%27s_Republic_of_China.svg" },
  { name: "コロンビア", code: "co", file: "https://upload.wikimedia.org/wikipedia/commons/2/21/Flag_of_Colombia.svg" },
  { name: "コモロ", code: "km", file: "https://upload.wikimedia.org/wikipedia/commons/d/df/Flag_of_the_Comoros.svg" },
  { name: "コンゴきょうわこく", code: "cg", file: "https://upload.wikimedia.org/wikipedia/commons/9/92/Flag_of_the_Republic_of_the_Congo.svg" },
  { name: "コンゴみんしゅこく", code: "cd", file: "https://upload.wikimedia.org/wikipedia/commons/6/6f/Flag_of_the_Democratic_Republic_of_the_Congo.svg" },
  { name: "コスタリカ", code: "cr", file: "https://upload.wikimedia.org/wikipedia/commons/b/bc/Flag_of_Costa_Rica_%28state%29.svg" },
  { name: "コートジボワール", code: "ci", file: "https://upload.wikimedia.org/wikipedia/commons/f/fe/Flag_of_C%C3%B4te_d%27Ivoire.svg" },
  { name: "クロアチア", code: "hr", file: "https://upload.wikimedia.org/wikipedia/commons/1/1b/Flag_of_Croatia.svg" },
  { name: "キューバ", code: "cu", file: "https://upload.wikimedia.org/wikipedia/commons/b/bd/Flag_of_Cuba.svg" },
  { name: "キプロス", code: "cy", file: "https://upload.wikimedia.org/wikipedia/commons/d/d4/Flag_of_Cyprus.svg" },
  { name: "チェコ", code: "cz", file: "https://upload.wikimedia.org/wikipedia/commons/c/cb/Flag_of_the_Czech_Republic.svg" },
  { name: "デンマーク", code: "dk", file: "https://upload.wikimedia.org/wikipedia/commons/9/9c/Flag_of_Denmark.svg" },
  { name: "ジブチ", code: "dj", file: "https://upload.wikimedia.org/wikipedia/commons/3/34/Flag_of_Djibouti.svg" },
  { name: "ドミニカ", code: "dm", file: "https://upload.wikimedia.org/wikipedia/commons/c/c4/Flag_of_Dominica.svg" },
  { name: "ドミニカきょうわこく", code: "do", file: "https://upload.wikimedia.org/wikipedia/commons/9/9f/Flag_of_the_Dominican_Republic.svg" },
  { name: "エクアドル", code: "ec", file: "https://upload.wikimedia.org/wikipedia/commons/e/e8/Flag_of_Ecuador.svg" },
  { name: "エジプト", code: "eg", file: "https://upload.wikimedia.org/wikipedia/commons/f/fe/Flag_of_Egypt.svg" },
  { name: "エルサルバドル", code: "sv", file: "https://upload.wikimedia.org/wikipedia/commons/3/34/Flag_of_El_Salvador.svg" },
  { name: "赤道ギニア", code: "gq", file: "https://upload.wikimedia.org/wikipedia/commons/3/31/Flag_of_Equatorial_Guinea.svg" },
  { name: "エリトリア", code: "er", file: "https://upload.wikimedia.org/wikipedia/commons/2/29/Flag_of_Eritrea.svg" },
  { name: "エストニア", code: "ee", file: "https://upload.wikimedia.org/wikipedia/commons/8/8f/Flag_of_Estonia.svg" },
  { name: "エスワティニ", code: "sz", file: "https://upload.wikimedia.org/wikipedia/commons/f/fb/Flag_of_Eswatini.svg" },
  { name: "エチオピア", code: "et", file: "https://upload.wikimedia.org/wikipedia/commons/7/71/Flag_of_Ethiopia.svg" },
  { name: "フィジー", code: "fj", file: "https://upload.wikimedia.org/wikipedia/commons/b/ba/Flag_of_Fiji.svg" },
  { name: "フィンランド", code: "fi", file: "https://upload.wikimedia.org/wikipedia/commons/b/bc/Flag_of_Finland.svg" },
  { name: "フランス", code: "fr", file: "https://upload.wikimedia.org/wikipedia/commons/c/c3/Flag_of_France.svg" },
  { name: "ガボン", code: "ga", file: "https://upload.wikimedia.org/wikipedia/commons/0/04/Flag_of_Gabon.svg" },
  { name: "ガンビア", code: "gm", file: "https://upload.wikimedia.org/wikipedia/commons/7/77/Flag_of_The_Gambia.svg" },
  { name: "ジョージア", code: "ge", file: "https://upload.wikimedia.org/wikipedia/commons/0/0f/Flag_of_Georgia.svg" },  // ← 修正
  { name: "ドイツ", code: "de", file: "https://upload.wikimedia.org/wikipedia/commons/b/ba/Flag_of_Germany.svg" },
  { name: "ガーナ", code: "gh", file: "https://upload.wikimedia.org/wikipedia/commons/1/19/Flag_of_Ghana.svg" },
  { name: "ギリシャ", code: "gr", file: "https://upload.wikimedia.org/wikipedia/commons/5/5c/Flag_of_Greece.svg" },
  { name: "グレナダ", code: "gd", file: "https://upload.wikimedia.org/wikipedia/commons/b/bc/Flag_of_Grenada.svg" },
  { name: "グアテマラ", code: "gt", file: "https://upload.wikimedia.org/wikipedia/commons/e/ec/Flag_of_Guatemala.svg" },
  { name: "ギニア", code: "gn", file: "https://upload.wikimedia.org/wikipedia/commons/e/ed/Flag_of_Guinea.svg" },
  { name: "ギニアビサウ", code: "gw", file: "https://upload.wikimedia.org/wikipedia/commons/0/01/Flag_of_Guinea-Bissau.svg" },
  { name: "ガイアナ", code: "gy", file: "https://upload.wikimedia.org/wikipedia/commons/9/99/Flag_of_Guyana.svg" },
  { name: "ハイチ", code: "ht", file: "https://upload.wikimedia.org/wikipedia/commons/5/56/Flag_of_Haiti.svg" },
  { name: "ホンジュラス", code: "hn", file: "https://upload.wikimedia.org/wikipedia/commons/8/82/Flag_of_Honduras.svg" },
  { name: "ハンガリー", code: "hu", file: "https://upload.wikimedia.org/wikipedia/commons/c/c1/Flag_of_Hungary.svg" },
  { name: "アイスランド", code: "is", file: "https://upload.wikimedia.org/wikipedia/commons/c/ce/Flag_of_Iceland.svg" },
  { name: "インド", code: "in", file: "https://upload.wikimedia.org/wikipedia/en/4/41/Flag_of_India.svg" },
  { name: "インドネシア", code: "id", file: "https://upload.wikimedia.org/wikipedia/commons/9/9f/Flag_of_Indonesia.svg" },
  { name: "イラン", code: "ir", file: "https://upload.wikimedia.org/wikipedia/commons/c/ca/Flag_of_Iran.svg" },
  { name: "イラク", code: "iq", file: "https://upload.wikimedia.org/wikipedia/commons/f/f6/Flag_of_Iraq.svg" },
  { name: "アイルランド", code: "ie", file: "https://upload.wikimedia.org/wikipedia/commons/4/45/Flag_of_Ireland.svg" },
  { name: "イスラエル", code: "il", file: "https://upload.wikimedia.org/wikipedia/commons/d/d4/Flag_of_Israel.svg" },
  { name: "イタリア", code: "it", file: "https://upload.wikimedia.org/wikipedia/en/0/03/Flag_of_Italy.svg" },
  { name: "ジャマイカ", code: "jm", file: "https://upload.wikimedia.org/wikipedia/commons/0/0a/Flag_of_Jamaica.svg" },
  { name: "にほん", code: "jp", file: "https://upload.wikimedia.org/wikipedia/commons/9/9e/Flag_of_Japan.svg" },
  { name: "ヨルダン", code: "jo", file: "https://upload.wikimedia.org/wikipedia/commons/c/c0/Flag_of_Jordan.svg" },
  { name: "カザフスタン", code: "kz", file: "https://upload.wikimedia.org/wikipedia/commons/d/d3/Flag_of_Kazakhstan.svg" },
  { name: "ケニア", code: "ke", file: "https://upload.wikimedia.org/wikipedia/commons/4/49/Flag_of_Kenya.svg" },
  { name: "キリバス", code: "ki", file: "https://upload.wikimedia.org/wikipedia/commons/d/d3/Flag_of_Kiribati.svg" },
  { name: "クウェート", code: "kw", file: "https://upload.wikimedia.org/wikipedia/commons/a/aa/Flag_of_Kuwait.svg" },
  { name: "キルギス", code: "kg", file: "https://upload.wikimedia.org/wikipedia/commons/c/c7/Flag_of_Kyrgyzstan.svg" },
  { name: "ラオス", code: "la", file: "https://upload.wikimedia.org/wikipedia/commons/5/56/Flag_of_Laos.svg" },
  { name: "ラトビア", code: "lv", file: "https://upload.wikimedia.org/wikipedia/commons/8/84/Flag_of_Latvia.svg" },
  { name: "レバノン", code: "lb", file: "https://upload.wikimedia.org/wikipedia/commons/5/59/Flag_of_Lebanon.svg" },
  { name: "レソト", code: "ls", file: "https://upload.wikimedia.org/wikipedia/commons/4/4a/Flag_of_Lesotho.svg" },
  { name: "リベリア", code: "lr", file: "https://upload.wikimedia.org/wikipedia/commons/b/b8/Flag_of_Liberia.svg" },
  { name: "リビア", code: "ly", file: "https://upload.wikimedia.org/wikipedia/commons/0/05/Flag_of_Libya.svg" },
  { name: "リヒテンシュタイン", code: "li", file: "https://upload.wikimedia.org/wikipedia/commons/4/47/Flag_of_Liechtenstein.svg" },
  { name: "リトアニア", code: "lt", file: "https://upload.wikimedia.org/wikipedia/commons/1/11/Flag_of_Lithuania.svg" },
  { name: "ルクセンブルク", code: "lu", file: "https://upload.wikimedia.org/wikipedia/commons/d/da/Flag_of_Luxembourg.svg" },
  { name: "マダガスカル", code: "mg", file: "https://upload.wikimedia.org/wikipedia/commons/b/bc/Flag_of_Madagascar.svg" },
  { name: "マラウイ", code: "mw", file: "https://upload.wikimedia.org/wikipedia/commons/d/d1/Flag_of_Malawi.svg" },
  { name: "マレーシア", code: "my", file: "https://upload.wikimedia.org/wikipedia/commons/6/66/Flag_of_Malaysia.svg" },
  { name: "モルディブ", code: "mv", file: "https://upload.wikimedia.org/wikipedia/commons/0/0f/Flag_of_Maldives.svg" },
  { name: "マリ", code: "ml", file: "https://upload.wikimedia.org/wikipedia/commons/9/92/Flag_of_Mali.svg" },
  { name: "マルタ", code: "mt", file: "https://upload.wikimedia.org/wikipedia/commons/7/73/Flag_of_Malta.svg" },
  { name: "マーシャルしょとう", code: "mh", file: "https://upload.wikimedia.org/wikipedia/commons/2/2e/Flag_of_the_Marshall_Islands.svg" },
  { name: "モーリタニア", code: "mr", file: "https://upload.wikimedia.org/wikipedia/commons/4/43/Flag_of_Mauritania.svg" },
  { name: "モーリシャス", code: "mu", file: "https://upload.wikimedia.org/wikipedia/commons/7/77/Flag_of_Mauritius.svg" },
  { name: "メキシコ", code: "mx", file: "https://upload.wikimedia.org/wikipedia/commons/f/fc/Flag_of_Mexico.svg" },
  { name: "ミクロネシア", code: "fm", file: "https://upload.wikimedia.org/wikipedia/commons/e/e4/Flag_of_the_Federated_States_of_Micronesia.svg" },
  { name: "モルドバ", code: "md", file: "https://upload.wikimedia.org/wikipedia/commons/2/27/Flag_of_Moldova.svg" },
  { name: "モナコ", code: "mc", file: "https://upload.wikimedia.org/wikipedia/commons/e/ea/Flag_of_Monaco.svg" },
  { name: "モンゴル", code: "mn", file: "https://upload.wikimedia.org/wikipedia/commons/4/4c/Flag_of_Mongolia.svg" },
  { name: "モンテネグロ", code: "me", file: "https://upload.wikimedia.org/wikipedia/commons/6/64/Flag_of_Montenegro.svg" },
  { name: "モロッコ", code: "ma", file: "https://upload.wikimedia.org/wikipedia/commons/2/2c/Flag_of_Morocco.svg" },
  { name: "モザンビーク", code: "mz", file: "https://upload.wikimedia.org/wikipedia/commons/d/d0/Flag_of_Mozambique.svg" },
  { name: "ミャンマー", code: "mm", file: "https://upload.wikimedia.org/wikipedia/commons/8/8c/Flag_of_Myanmar.svg" },
  { name: "ナミビア", code: "na", file: "https://upload.wikimedia.org/wikipedia/commons/0/00/Flag_of_Namibia.svg" },
  { name: "ナウル", code: "nr", file: "https://upload.wikimedia.org/wikipedia/commons/3/30/Flag_of_Nauru.svg" },
  { name: "ネパール", code: "np", file: "https://upload.wikimedia.org/wikipedia/commons/9/9b/Flag_of_Nepal.svg" },
  { name: "オランダ", code: "nl", file: "https://upload.wikimedia.org/wikipedia/commons/2/20/Flag_of_the_Netherlands.svg" },
  { name: "ニュージーランド", code: "nz", file: "https://upload.wikimedia.org/wikipedia/commons/3/3e/Flag_of_New_Zealand.svg" },
  { name: "ニカラグア", code: "ni", file: "https://upload.wikimedia.org/wikipedia/commons/1/19/Flag_of_Nicaragua.svg" },
  { name: "ニジェール", code: "ne", file: "https://upload.wikimedia.org/wikipedia/commons/f/f4/Flag_of_Niger.svg" },
  { name: "ナイジェリア", code: "ng", file: "https://upload.wikimedia.org/wikipedia/commons/7/79/Flag_of_Nigeria.svg" },
  { name: "北朝鮮", code: "kp", file: "https://upload.wikimedia.org/wikipedia/commons/5/51/Flag_of_North_Korea.svg" },
  { name: "北マケドニア", code: "mk", file: "https://upload.wikimedia.org/wikipedia/commons/7/79/Flag_of_North_Macedonia.svg" },
  { name: "ノルウェー", code: "no", file: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Flag_of_Norway.svg" },
  { name: "オマーン", code: "om", file: "https://upload.wikimedia.org/wikipedia/commons/d/dd/Flag_of_Oman.svg" },
  { name: "パキスタン", code: "pk", file: "https://upload.wikimedia.org/wikipedia/commons/3/32/Flag_of_Pakistan.svg" },
  { name: "パラオ", code: "pw", file: "https://upload.wikimedia.org/wikipedia/commons/4/48/Flag_of_Palau.svg" },
  { name: "パナマ", code: "pa", file: "https://upload.wikimedia.org/wikipedia/commons/a/ab/Flag_of_Panama.svg" },
  { name: "パプアニューギニア", code: "pg", file: "https://upload.wikimedia.org/wikipedia/commons/3/38/Flag_of_Papua_New_Guinea.svg" },
  { name: "パラグアイ", code: "py", file: "https://upload.wikimedia.org/wikipedia/commons/2/27/Flag_of_Paraguay.svg" },
  { name: "ペルー", code: "pe", file: "https://upload.wikimedia.org/wikipedia/commons/c/cf/Flag_of_Peru.svg" },
  { name: "フィリピン", code: "ph", file: "https://upload.wikimedia.org/wikipedia/commons/9/99/Flag_of_the_Philippines.svg" },
  { name: "ポーランド", code: "pl", file: "https://upload.wikimedia.org/wikipedia/en/1/12/Flag_of_Poland.svg" },
  { name: "ポルトガル", code: "pt", file: "https://upload.wikimedia.org/wikipedia/commons/5/5c/Flag_of_Portugal.svg" },
  { name: "カタール", code: "qa", file: "https://upload.wikimedia.org/wikipedia/commons/6/65/Flag_of_Qatar.svg" },
  { name: "ルーマニア", code: "ro", file: "https://upload.wikimedia.org/wikipedia/commons/7/73/Flag_of_Romania.svg" },
  { name: "ロシア", code: "ru", file: "https://upload.wikimedia.org/wikipedia/en/f/f3/Flag_of_Russia.svg" },
  { name: "ルワンダ", code: "rw", file: "https://upload.wikimedia.org/wikipedia/commons/1/17/Flag_of_Rwanda.svg" },
  { name: "セントクリストファー・ネーヴィス", code: "kn", file: "https://upload.wikimedia.org/wikipedia/commons/f/fe/Flag_of_Saint_Kitts_and_Nevis.svg" },
  { name: "セントルシア", code: "lc", file: "https://upload.wikimedia.org/wikipedia/commons/9/9f/Flag_of_Saint_Lucia.svg" },
  { name: "セントビンセントおよびグレナディーン", code: "vc", file: "https://upload.wikimedia.org/wikipedia/commons/6/6d/Flag_of_Saint_Vincent_and_the_Grenadines.svg" },
  { name: "サモア", code: "ws", file: "https://upload.wikimedia.org/wikipedia/commons/3/31/Flag_of_Samoa.svg" },
  { name: "サンマリノ", code: "sm", file: "https://upload.wikimedia.org/wikipedia/commons/b/b1/Flag_of_San_Marino.svg" },
  { name: "サントメ・プリンシペ", code: "st", file: "https://upload.wikimedia.org/wikipedia/commons/0/0d/Flag_of_S%C3%A3o_Tom%C3%A9_and_Pr%C3%ADncipe.svg" },
  { name: "サウジアラビア", code: "sa", file: "https://upload.wikimedia.org/wikipedia/commons/0/0d/Flag_of_Saudi_Arabia.svg" },
  { name: "セネガル", code: "sn", file: "https://upload.wikimedia.org/wikipedia/commons/f/fd/Flag_of_Senegal.svg" },
  { name: "セルビア", code: "rs", file: "https://upload.wikimedia.org/wikipedia/commons/f/ff/Flag_of_Serbia.svg" },
  { name: "セーシェル", code: "sc", file: "https://upload.wikimedia.org/wikipedia/commons/f/fc/Flag_of_Seychelles.svg" },
  { name: "シエラレオネ", code: "sl", file: "https://upload.wikimedia.org/wikipedia/commons/1/17/Flag_of_Sierra_Leone.svg" },
  { name: "シンガポール", code: "sg", file: "https://upload.wikimedia.org/wikipedia/commons/4/48/Flag_of_Singapore.svg" },
  { name: "スロバキア", code: "sk", file: "https://upload.wikimedia.org/wikipedia/commons/e/e6/Flag_of_Slovakia.svg" },
  { name: "スロベニア", code: "si", file: "https://upload.wikimedia.org/wikipedia/commons/f/f0/Flag_of_Slovenia.svg" },
  { name: "ソロモンしょとう", code: "sb", file: "https://upload.wikimedia.org/wikipedia/commons/7/74/Flag_of_the_Solomon_Islands.svg" },
  { name: "ソマリア", code: "so", file: "https://upload.wikimedia.org/wikipedia/commons/a/a0/Flag_of_Somalia.svg" },
  { name: "南アフリカ", code: "za", file: "https://upload.wikimedia.org/wikipedia/commons/a/af/Flag_of_South_Africa.svg" },
  { name: "韓国", code: "kr", file: "https://upload.wikimedia.org/wikipedia/commons/0/09/Flag_of_South_Korea.svg" },
  { name: "南スーダン", code: "ss", file: "https://upload.wikimedia.org/wikipedia/commons/7/7a/Flag_of_South_Sudan.svg" },
  { name: "スペイン", code: "es", file: "https://upload.wikimedia.org/wikipedia/en/9/9a/Flag_of_Spain.svg" },
  { name: "スリランカ", code: "lk", file: "https://upload.wikimedia.org/wikipedia/commons/1/11/Flag_of_Sri_Lanka.svg" },
  { name: "スーダン", code: "sd", file: "https://upload.wikimedia.org/wikipedia/commons/0/01/Flag_of_Sudan.svg" },
  { name: "スリナム", code: "sr", file: "https://upload.wikimedia.org/wikipedia/commons/6/60/Flag_of_Suriname.svg" },
  { name: "スウェーデン", code: "se", file: "https://upload.wikimedia.org/wikipedia/en/4/4c/Flag_of_Sweden.svg" },
  { name: "スイス", code: "ch", file: "https://upload.wikimedia.org/wikipedia/commons/f/f3/Flag_of_Switzerland.svg" },
  { name: "シリア", code: "sy", file: "https://upload.wikimedia.org/wikipedia/commons/5/53/Flag_of_Syria.svg" },
  { name: "タジキスタン", code: "tj", file: "https://upload.wikimedia.org/wikipedia/commons/d/d0/Flag_of_Tajikistan.svg" },
  { name: "タンザニア", code: "tz", file: "https://upload.wikimedia.org/wikipedia/commons/3/38/Flag_of_Tanzania.svg" },
  { name: "タイ", code: "th", file: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Flag_of_Thailand.svg" },
  { name: "東ティモール", code: "tl", file: "https://upload.wikimedia.org/wikipedia/commons/2/26/Flag_of_East_Timor.svg" },
  { name: "トーゴ", code: "tg", file: "https://upload.wikimedia.org/wikipedia/commons/6/68/Flag_of_Togo.svg" },
  { name: "トンガ", code: "to", file: "https://upload.wikimedia.org/wikipedia/commons/9/9a/Flag_of_Tonga.svg" },
  { name: "トリニダード・トバゴ", code: "tt", file: "https://upload.wikimedia.org/wikipedia/commons/6/64/Flag_of_Trinidad_and_Tobago.svg" },
  { name: "チュニジア", code: "tn", file: "https://upload.wikimedia.org/wikipedia/commons/c/ce/Flag_of_Tunisia.svg" },
  { name: "トルコ", code: "tr", file: "https://upload.wikimedia.org/wikipedia/commons/b/b4/Flag_of_Turkey.svg" },
  { name: "トルクメニスタン", code: "tm", file: "https://upload.wikimedia.org/wikipedia/commons/1/1b/Flag_of_Turkmenistan.svg" },
  { name: "ツバル", code: "tv", file: "https://upload.wikimedia.org/wikipedia/commons/3/38/Flag_of_Tuvalu.svg" },
  { name: "ウガンダ", code: "ug", file: "https://upload.wikimedia.org/wikipedia/commons/4/4e/Flag_of_Uganda.svg" },
  { name: "ウクライナ", code: "ua", file: "https://upload.wikimedia.org/wikipedia/commons/4/49/Flag_of_Ukraine.svg" },
  { name: "アラブ首長国連邦", code: "ae", file: "https://upload.wikimedia.org/wikipedia/commons/c/cb/Flag_of_the_United_Arab_Emirates.svg" },
  { name: "イギリス", code: "gb", file: "https://upload.wikimedia.org/wikipedia/en/a/ae/Flag_of_the_United_Kingdom.svg" },
  { name: "アメリカ", code: "us", file: "https://upload.wikimedia.org/wikipedia/en/a/a4/Flag_of_the_United_States.svg" },
  { name: "ウルグアイ", code: "uy", file: "https://upload.wikimedia.org/wikipedia/commons/f/fe/Flag_of_Uruguay.svg" },
  { name: "ウズベキスタン", code: "uz", file: "https://upload.wikimedia.org/wikipedia/commons/8/84/Flag_of_Uzbekistan.svg" },
  { name: "バヌアツ", code: "vu", file: "https://upload.wikimedia.org/wikipedia/commons/b/bc/Flag_of_Vanuatu.svg" },
  { name: "ベネズエラ", code: "ve", file: "https://upload.wikimedia.org/wikipedia/commons/0/06/Flag_of_Venezuela.svg" },
  { name: "ベトナム", code: "vn", file: "https://upload.wikimedia.org/wikipedia/commons/2/21/Flag_of_Vietnam.svg" },
  { name: "イエメン", code: "ye", file: "https://upload.wikimedia.org/wikipedia/commons/8/89/Flag_of_Yemen.svg" },
  { name: "ザンビア", code: "zm", file: "https://upload.wikimedia.org/wikipedia/commons/0/06/Flag_of_Zambia.svg" },
  { name: "ジンバブエ", code: "zw", file: "https://upload.wikimedia.org/wikipedia/commons/6/6a/Flag_of_Zimbabwe.svg" },
  // 追加5カ国
  { name: "バチカン", code: "va", file: "https://upload.wikimedia.org/wikipedia/commons/1/14/Flag_of_Vatican_City.svg" },
  { name: "コソボ", code: "xk", file: "https://upload.wikimedia.org/wikipedia/commons/1/1b/Flag_of_Kosovo.svg" },
  { name: "クックしょとう", code: "ck", file: "https://upload.wikimedia.org/wikipedia/commons/3/35/Flag_of_the_Cook_Islands.svg" },
  { name: "ニウエ", code: "nu", file: "https://upload.wikimedia.org/wikipedia/commons/0/01/Flag_of_Niue.svg" },
  { name: "たいわん", code: "tw", file: "https://upload.wikimedia.org/wikipedia/commons/7/72/Flag_of_the_Republic_of_China.svg" }
];

// （省略：前回と同じ198カ国データすべて。コピー時は前回のものをそのまま使用）

let quizFlags = [];
let currentFlag = null;
let questionCount = 0;
let correctCount = 0;
const TOTAL_QUESTIONS = 20;
const STORAGE_KEY = 'flag_quiz_records';

const audioCtx = new (window.AudioContext || window.webkitAudioContext)();

// 正答音：楽しいチャイム風（3音上昇）
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

// 不正解音（シンプル）
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

// 紙吹雪：下から噴水状に舞う
function createConfetti() {
  particles = [];
  const fountainX = canvas.width / 2;
  for (let i = 0; i < 150; i++) {
    const angle = (Math.random() - 0.5) * Math.PI / 3; // 噴水角度
    const speed = Math.random() * 8 + 10;
    particles.push({
      x: fountainX + (Math.random() - 0.5) * 100,
      y: canvas.height + 50, // 下からスタート
      vx: Math.cos(angle) * speed * (Math.random() > 0.5 ? 1 : -1),
      vy: -speed - Math.random() * 5, // 上向き噴射
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
    playCorrectChime(); // ← 楽しいチャイム
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

// （endQuiz, showRewardPopup, 履歴、スタート処理は前回と同じ）

document.getElementById("start-btn").onclick = () => {
  document.getElementById("start-screen").classList.add("hidden");
  document.getElementById("game-screen").classList.remove("hidden");
  prepareQuiz();
  newQuestion();
};

window.addEventListener("resize", () => {
  canvas.width = window.innerWidth; canvas.height = window.innerHeight;
});
