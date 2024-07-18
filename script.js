const words = [
    "Te amo",
     "愛してる",
   "I love you",
 "Je t'aime",
   "Ich liebe dich",
   "Ti amo",
"Я люблю тебя",
   "أنا أحبك",
 "मैं तुमसे प्यार करता हूँ",
 "Aku cinta kamu",
  "Σ' αγαπώ",
 "사랑해",
 "Ik hou van jou",
 "Të dua",
 "Я цябе кахаю",
 "Volim te",
 "Miluji tě",
  "Ma armastan sind",
 "Mahal kita",
  "אני אוהב אותך",
 "Szeretlek",
"Tá grá agam duit",
 "Es tevi mīlu",
 "Aš tave myliu",
"Я люблю тебе",
 "Те сакам",
   "Aku cinta kamu",
  "من تو را دوست دارم",
   "Te iubesc",
   "Miluji tě",
   "Mwen renmen ou",
   "እኔ አንተን እወዳለሁ",
   "Kusilla",
   "Men seni sevirəm",
   "Те сакам",
   "Kelevu",
  "Ami amu",
  "Ami amu",
   "Eg elski teg",
   "Rohayhu",
   "Nakupenda",
  "Ina son ku",
   "Volim te",
 "Ես քեզ սիրում եմ",
 "Мен сени жакшы көрөм",
 "Мен сени жакшы көрөм",
 "Σ'αγαπώ", //cambiar
"Aroha ana au i a koe",
 "KHAIR",
 "मैं तुमसे प्यार करता हूँ",
 "Jeg elsker deg",
   "Kusilla",
   "Waan ku jeclahay",
   "Jag älskar dig",
   "Seni seviyorum",
  "Mahal kita",
   "Мин сине яратам",
   "میں تم سے محبت کرتا ہوں",
   "Uthando lwami",
   "Ngiyakuthanda",
  "ฉันรักเธอ",
   "Seni seviyorum",
   "Anh yêu em",
   "איך האב דיר ליב"
  ];
  const dom = {
    love: document.querySelector(".love")
  };
  
  dom.love.style.setProperty("--particles", words.length);
  
  words.forEach((word, i) => {
    let span = document.createElement("span");
    span.style.setProperty("--n", i + 1);
    span.innerText = word;
    dom.love.appendChild(span);
  });
  