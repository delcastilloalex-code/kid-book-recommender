const STORAGE_KEY = "storyScoutProfile";
const AMAZON_ASSOCIATE_TAG = "yourtag-20";

const TAG_LABELS = {
  magic: { en: "Magic", de: "Magie" },
  fantasy: { en: "Fantasy", de: "Fantasy" },
  adventure: { en: "Adventure", de: "Abenteuer" },
  mystery: { en: "Mystery", de: "Geheimnisse" },
  humor: { en: "Humor", de: "Humor" },
  friendship: { en: "Friendship", de: "Freundschaft" },
  animals: { en: "Animals", de: "Tiere" },
  science: { en: "Science", de: "Wissenschaft" },
  space: { en: "Space", de: "Weltall" },
  dragons: { en: "Dragons", de: "Drachen" },
  school: { en: "School stories", de: "Schulgeschichten" },
  real_world: { en: "Real-life stories", de: "Geschichten aus dem echten Leben" },
  emotions: { en: "Big feelings", de: "Große Gefühle" },
  heroes: { en: "Brave heroes", de: "Mutige Heldinnen und Helden" },
  cozy: { en: "Cozy", de: "Gemütlich" },
  laugh_out_loud: { en: "Laugh-out-loud", de: "Zum Lautlachen" },
  fast_paced: { en: "Fast-moving", de: "Rasant" },
  brave: { en: "Brave", de: "Mutig" },
  heartwarming: { en: "Heartwarming", de: "Herzerwärmend" },
  brainy: { en: "Brainy", de: "Clever" },
  scary: { en: "Too scary", de: "Zu gruselig" },
  sad: { en: "Too sad", de: "Zu traurig" },
  too_long: { en: "Too long", de: "Zu lang" },
  slow_start: { en: "Slow starts", de: "Langsamer Anfang" },
  too_many_characters: { en: "Too many characters", de: "Zu viele Figuren" },
  school_drama: { en: "Lots of school drama", de: "Viel Schuldrama" },
};

const LOVE_OPTIONS = [
  "magic",
  "fantasy",
  "adventure",
  "mystery",
  "humor",
  "friendship",
  "animals",
  "science",
  "space",
  "dragons",
  "school",
  "real_world",
  "emotions",
  "heroes",
];

const VIBE_OPTIONS = [
  "cozy",
  "laugh_out_loud",
  "fast_paced",
  "brave",
  "heartwarming",
  "brainy",
];

const HATE_OPTIONS = [
  "scary",
  "sad",
  "too_long",
  "slow_start",
  "too_many_characters",
  "school_drama",
];

const GENRE_LABELS = {
  en: {
    Fantasy: "Fantasy",
    "Fantasy Adventure": "Fantasy Adventure",
    "Nature Adventure": "Nature Adventure",
    Contemporary: "Contemporary",
    "Animal Fiction": "Animal Fiction",
    "Science Fantasy": "Science Fantasy",
    "Mystery Adventure": "Mystery Adventure",
    Humor: "Humor",
    "Early Chapter Book": "Early Chapter Book",
  },
  de: {
    Fantasy: "Fantasy",
    "Fantasy Adventure": "Fantasy-Abenteuer",
    "Nature Adventure": "Naturabenteuer",
    Contemporary: "Gegenwartsgeschichte",
    "Animal Fiction": "Tiergeschichte",
    "Science Fantasy": "Science-Fantasy",
    "Mystery Adventure": "Rätselabenteuer",
    Humor: "Humor",
    "Early Chapter Book": "Erstes Kapitelbuch",
  },
};

const BOOK_COPY_DE = {
  "Harry Potter and the Sorcerer's Stone": {
    blurb: "Ein einsamer Junge entdeckt eine verborgene magische Welt und einen Ort, an dem er dazugehört.",
    note: "Ideal für Leserinnen und Leser, die Staunen, Hinweise und eine starke Welt lieben.",
  },
  "Percy Jackson and the Lightning Thief": {
    blurb: "Griechische Mythen krachen in eine schnelle, lustige Abenteuerreise der Gegenwart.",
    note: "Großartig für Kinder, die Action und Witze gleichzeitig mögen.",
  },
  "The Wild Robot": {
    blurb: "Ein Roboter lernt auf einer wilden Insel zu überleben, zu helfen und dazuzugehören.",
    note: "Eine starke Wahl für Leserinnen und Leser, die Herz und Abenteuer lieben.",
  },
  "The Tale of Despereaux": {
    blurb: "Eine winzige Maus mit riesigem Herzen verändert ein ganzes Königreich.",
    note: "Wunderschön für Kinder, die sanfte Magie und besondere Figuren mögen.",
  },
  "The Vanderbeekers of 141st Street": {
    blurb: "Fünf Geschwister kämpfen mit Kreativität und Herz für ihr Zuhause.",
    note: "Perfekt für Kinder, die warme Familiengeschichten mit Energie lieben.",
  },
  "Front Desk": {
    blurb: "Ein kluges, lustiges Kind hilft in einem Motel mit und steht für das Richtige ein.",
    note: "Ideal für Leserinnen und Leser, die mutige Hauptfiguren und echte Herausforderungen mögen.",
  },
  "The One and Only Ivan": {
    blurb: "Ein nachdenklicher Gorilla beschließt, für einen Freund etwas Besseres zu suchen.",
    note: "Sanft, klug und ein Liebling für einfühlsame Leserinnen und Leser.",
  },
  "A Wrinkle in Time": {
    blurb: "Ein kluges, ungewöhnliches Mädchen reist durch Raum und Zeit, um ihren Vater zu retten.",
    note: "Eine starke Wahl für neugierige Kinder, die große Ideen und Staunen mögen.",
  },
  "The Mysterious Benedict Society": {
    blurb: "Ein Team besonders kluger Kinder löst Rätsel und nimmt eine geheime Mission an.",
    note: "Fantastisch für Kinder, die bereit für einen großen, cleveren Seitenzieher sind.",
  },
  "How to Train Your Dragon": {
    blurb: "Ein schmaler Wikingerjunge und ein Drache werden zu einem urkomischen, mutigen Team.",
    note: "Toll für Kinder, die Fantasy mögen, aber nichts zu Schweres wollen.",
  },
  "Diary of a Wimpy Kid": {
    blurb: "Ein Tagebuch im Comicstil voller Schulchaos und sehr großer Kindermeinungen.",
    note: "Hilfreich für zaghafte Leserinnen und Leser, die Humor und schnelles Tempo lieben.",
  },
  "Frog and Toad Are Friends": {
    blurb: "Kurze, liebevolle Geschichten, die sich anfühlen wie warme Kekse für das Gehirn.",
    note: "Wunderbar zum Vorlesen oder für sicheres erstes Selberlesen.",
  },
  "The BFG": {
    blurb: "Ein Mädchen und ein freundlicher Riese erleben gemeinsam ein wunderbar schräges Abenteuer.",
    note: "Toll für Kinder, die alberne Sprache und Fantasie mögen.",
  },
  "The Phantom Tollbooth": {
    blurb: "Ein gelangweilter Junge fährt in eine Welt voller Wortspiele, Logik und Fantasie.",
    note: "Am besten für Leserinnen und Leser, die clevere Witze und spielerisches Denken lieben.",
  },
  "Zoey and Sassafras: Dragons and Marshmallows": {
    blurb: "Ein neugieriges Mädchen nutzt wissenschaftliches Denken, um magischen Wesen zu helfen.",
    note: "Eine schöne Brücke für Kinder, die sowohl Experimente als auch Zauber mögen.",
  },
  "Charlotte's Web": {
    blurb: "Ein Schwein und eine Spinne erleben eine der herzlichsten Freundschaften der Kinderliteratur.",
    note: "Sanft und wunderschön, für manche Kinder emotional aber etwas zart.",
  },
  "The Penderwicks": {
    blurb: "Vier Schwestern erleben einen lebhaften Sommer voller Chaos, Loyalität und Abenteuer.",
    note: "Großartig für Kinder, die warme Familiengeschichten mit klassischem Gefühl lieben.",
  },
  Woodwalkers: {
    blurb: "Carag sieht aus wie ein normaler Junge, aber in ihm steckt ein Puma und eine wilde, gefährliche Welt.",
    note: "Stark für Tierfans, Fantasy-Leserinnen und Leser und Kinder, die Serien lieben.",
  },
  "Die Duftapotheke": {
    blurb: "Eine verborgene Villa, magische Düfte und ein Geheimnis, das nur mutige Kinder lösen können.",
    note: "Perfekt für Kinder, die Magie, Rätsel und atmosphärische Welten mögen.",
  },
  "Rico, Oskar und die Tieferschatten": {
    blurb: "Rico und Oskar stolpern in Berlin in ein spannendes, warmherziges und oft sehr lustiges Abenteuer.",
    note: "Ideal für Kinder, die clevere Freundschaften, Humor und Alltagsabenteuer mögen.",
  },
  Rubinrot: {
    blurb: "Gwendolyn wird in eine Zeitreise-Verschwörung geworfen, in der Familiengeheimnisse und Gefühle kollidieren.",
    note: "Ein guter Übergang in jugendlichere Fantasy mit Romantik und Spannung.",
  },
  Erebos: {
    blurb: "Ein geheimnisvolles Spiel beginnt harmlos und zieht dann das echte Leben seiner Spielerinnen und Spieler in Gefahr.",
    note: "Ein starker Thriller für technikaffine Jugendliche, die Tempo und Spannung suchen.",
  },
  Shelter: {
    blurb: "Ein harmloser Streich kippt in etwas Unheimliches und deckt auf, wie schnell Angst und Gruppendruck eskalieren.",
    note: "Passt gut zu älteren Jugendlichen, die psychologische Spannung mögen.",
  },
  Cryptos: {
    blurb: "Virtuelle Welten, ökologische Krisen und ein Rätsel machen diesen Thriller schnell und hochaktuell.",
    note: "Eine gute Wahl für Jugendliche, die Spannung mit Zukunftsideen verbinden möchten.",
  },
};

const UI_TEXT = {
  en: {
    pageTitle: "Story Scout",
    metaDescription: "A bright, playful book picker that helps young readers discover their next favorite story.",
    heroEyebrow: "Story Scout for big imaginations",
    heroTitle: "Find a book your kid will want to keep reading.",
    heroLead:
      "Pick the kinds of stories she loves, skip the stuff that turns her off, and we will build a cheerful stack of strong next reads.",
    heroPills: ["Funny", "Magical", "Cozy", "Adventurous"],
    heroPanelLabel: "What makes this version better",
    heroList: [
      "Speaks directly to young readers",
      "Uses preferences that actually matter",
      "Explains why each book fits",
    ],
    introTitle: "Build your reader map",
    introHint:
      'This works best when you choose a few things your child genuinely gets excited about. Think favorite books, favorite moods, and what makes her say, "one more chapter."',
    snapshotTitle: "1. Reader Snapshot",
    readerNameLabel: "Reader name",
    readerAgeLabel: "Age",
    readerModeLabel: "Reading comfort",
    modeOptions: {
      read_aloud: "Best with read-alouds",
      just_right: "Just-right chapter books",
      big_challenge: "Ready for bigger adventures",
    },
    favoriteBookLabel: "A recent favorite",
    placeholderName: "Reader name",
    placeholderFavorite: "Favorite recent book",
    loveTitle: "2. Pick the story ingredients she loves",
    loveHint: "Tap a few. The best recommendation mix usually starts with 3 to 6 picks.",
    vibeTitle: "3. Choose the reading mood",
    vibeHint: "This helps the recommendations feel right for this moment, not just in general.",
    avoidTitle: "4. Skip these for now",
    avoidHint: "Avoiding a few friction points can be just as helpful as choosing favorites.",
    loveAria: "story ingredients you love",
    vibeAria: "reading moods",
    hateAria: "things to avoid",
    recommendBtn: "Show My Book Stack",
    resetBtn: "Start Over",
    resultsTitle: "Your Story Stack",
    matchEnergy: {
      high: "Dialed in",
      medium: "Strong match",
      low: "Good starting point",
    },
    resultEmpty: "Add a few preferences and we will build a better stack.",
    resultSubtitle(name, genre, likeCount, favoriteBook) {
      const countText = likeCount || "a few";
      const favoriteText = favoriteBook ? ` and the love for "${favoriteBook}"` : "";
      return `${name}'s stack leans ${genre.toLowerCase()} right now, shaped by ${countText} favorite ingredients${favoriteText}.`;
    },
    selectionPrompt: "Choose at least 3 things to get a strong match.",
    selectionLikes(count) {
      return `${count} loves`;
    },
    selectionVibes(count) {
      return `${count} mood picks`;
    },
    selectionAvoids(count) {
      return `${count} avoids`;
    },
    selectionReady(parts) {
      return `Reader map ready: ${parts.join(", ")}.`;
    },
    parentNoteTitle: "For parents",
    affiliatePlaceholder:
      "Purchase links below are for grown-ups. Replace the placeholder Amazon Associates tag in script.js before using these links on a live site.",
    affiliateLive:
      "Purchase links below are for grown-ups. We may earn a commission from qualifying purchases.",
    stretchTitle: "Stretch picks",
    stretchHint: "These gently widen the reading world without ignoring current favorites.",
    stretchNote: "Why stretch: it keeps the same reading comfort but opens a new lane.",
    unlockPlanBtn: "Make a 7-day reading trail",
    planTitle: "7-Day Reading Trail",
    planIntro(name) {
      return `${name}'s reading trail mixes confidence-building picks with a little variety, so the week feels exciting instead of like homework.`;
    },
    activities: [
      "Read for 15 minutes and stop at a cliffhanger.",
      "Draw the setting or one magical object.",
      "Pick the funniest or bravest moment so far.",
      "Predict what might happen next.",
      "Tell someone one surprising thing from the story.",
      "Choose your favorite character and explain why.",
      "Finish the week with a cozy reread or a fresh stretch pick.",
    ],
    days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
    fallbackReader: "Reader",
    topPick: "Top pick",
    pages: "pages",
    fitSuffix: "fit",
    forParents: "For parents",
    viewOnAmazon: "View on Amazon",
    paperback: "Check paperback options",
    amazonSearch: "Amazon search",
    strongAgeFit: "Strong age fit for this stage of reading.",
    advancedForNow: "Might feel a little older than this reader right now.",
    mayFeelYoung: "Could feel a bit young unless the topic is especially appealing.",
    goodReadAloud: "Great size for read-aloud momentum.",
    longChunks: "A longer book may work better in smaller chunks.",
    goodChapterSize: "Nice chapter-book size for steady progress.",
    biggerAdventure: "Feels satisfying for a reader ready for bigger adventures.",
    includesTag(label) {
      return `Includes ${label.toLowerCase()}.`;
    },
    matchesMood(label) {
      return `Matches the ${label.toLowerCase()} mood.`;
    },
    longerSide: "This one is on the longer side.",
    slowBeginning: "May ask for a little patience at the beginning.",
    schoolConflict: "Leans into school-life conflicts.",
    containsEnergy(label) {
      return `Contains some ${label.toLowerCase()} energy.`;
    },
    closeFavorite: "Very close to the favorite you named.",
    adjacentFavorite(favoriteBook) {
      return `Feels adjacent to "${favoriteBook}".`;
    },
    magicalSeries: "Carries some of that magical-series energy.",
  },
  de: {
    pageTitle: "Story Scout",
    metaDescription: "Ein frischer, spielerischer Buchfinder, der jungen Leserinnen und Lesern zur nächsten Lieblingsgeschichte verhilft.",
    heroEyebrow: "Story Scout für große Fantasie",
    heroTitle: "Finde ein Buch, das dein Kind wirklich weiterlesen will.",
    heroLead:
      "Wähle die Geschichten aus, die sie liebt, lass alles weg, was sie ausbremst, und wir bauen einen fröhlichen Stapel starker nächster Bücher.",
    heroPills: ["Lustig", "Magisch", "Gemütlich", "Abenteuerlich"],
    heroPanelLabel: "Was diese Version besser macht",
    heroList: [
      "Spricht junge Leserinnen und Leser direkt an",
      "Fragt nach Vorlieben, die wirklich helfen",
      "Erklärt, warum jedes Buch passt",
    ],
    introTitle: "Baue eure Leserkarte",
    introHint:
      'Am besten funktioniert es, wenn du ein paar Dinge auswählst, für die sich dein Kind wirklich begeistert. Denk an Lieblingsbücher, Lesestimmungen und alles, was zu "nur noch ein Kapitel" führt.',
    snapshotTitle: "1. Leserprofil",
    readerNameLabel: "Name des Kindes",
    readerAgeLabel: "Alter",
    readerModeLabel: "Lesekomfort",
    modeOptions: {
      read_aloud: "Am besten zum Vorlesen",
      just_right: "Passende Kapitelbücher",
      big_challenge: "Bereit für größere Abenteuer",
    },
    favoriteBookLabel: "Ein aktueller Favorit",
    placeholderName: "Name des Kindes",
    placeholderFavorite: "Lieblingsbuch der letzten Zeit",
    loveTitle: "2. Wähle die Story-Zutaten, die sie liebt",
    loveHint: "Tippe ein paar an. Die besten Treffer entstehen meistens mit 3 bis 6 Auswahlen.",
    vibeTitle: "3. Wähle die Lesestimmung",
    vibeHint: "So passen die Empfehlungen nicht nur allgemein, sondern genau für diesen Moment.",
    avoidTitle: "4. Das bitte eher nicht",
    avoidHint: "Ein paar Reibungspunkte zu vermeiden kann genauso hilfreich sein wie Favoriten zu nennen.",
    loveAria: "Story-Zutaten, die du liebst",
    vibeAria: "Lesestimmungen",
    hateAria: "Dinge, die ihr vermeiden möchtet",
    recommendBtn: "Zeig meinen Bücherstapel",
    resetBtn: "Neu anfangen",
    resultsTitle: "Dein Geschichtenstapel",
    matchEnergy: {
      high: "Sehr genau",
      medium: "Starker Treffer",
      low: "Guter Anfang",
    },
    resultEmpty: "Füge ein paar Vorlieben hinzu, dann bauen wir einen besseren Stapel.",
    resultSubtitle(name, genre, likeCount, favoriteBook) {
      const countText = likeCount || "ein paar";
      const favoriteText = favoriteBook ? ` und der Liebe zu "${favoriteBook}"` : "";
      return `${name}s Stapel geht gerade in Richtung ${genre.toLowerCase()}, geprägt von ${countText} Lieblingszutaten${favoriteText}.`;
    },
    selectionPrompt: "Wähle mindestens 3 Dinge für einen starken Treffer.",
    selectionLikes(count) {
      return `${count} Vorlieben`;
    },
    selectionVibes(count) {
      return `${count} Stimmungen`;
    },
    selectionAvoids(count) {
      return `${count} No-Gos`;
    },
    selectionReady(parts) {
      return `Leserkarte bereit: ${parts.join(", ")}.`;
    },
    parentNoteTitle: "Für Eltern",
    affiliatePlaceholder:
      "Die Kauf-Links unten sind für Erwachsene gedacht. Ersetze vor einem Live-Einsatz den Platzhalter für den Amazon-Associates-Tag in script.js.",
    affiliateLive:
      "Die Kauf-Links unten sind für Erwachsene gedacht. Wir können an qualifizierten Käufen eine Provision verdienen.",
    stretchTitle: "Blick über den Tellerrand",
    stretchHint: "Diese Picks erweitern die Lesewelt sanft, ohne aktuelle Lieblingsdinge zu ignorieren.",
    stretchNote: "Warum das ein Stretch-Pick ist: Das Lesegefühl bleibt ähnlich, aber die Richtung ist neu.",
    unlockPlanBtn: "Erstelle einen 7-Tage-Leseplan",
    planTitle: "7-Tage-Lesepfad",
    planIntro(name) {
      return `${name}s Lesepfad mischt sichere Treffer mit etwas Abwechslung, damit sich die Woche spannend anfühlt und nicht wie Hausaufgaben.`;
    },
    activities: [
      "Lies 15 Minuten und stoppe an einer spannenden Stelle.",
      "Male den Schauplatz oder einen magischen Gegenstand.",
      "Wähle den lustigsten oder mutigsten Moment bisher.",
      "Rate, was als Nächstes passieren könnte.",
      "Erzähle jemandem eine überraschende Sache aus der Geschichte.",
      "Wähle deine Lieblingsfigur und erkläre warum.",
      "Beende die Woche mit einem gemütlichen Wiederlesen oder einem neuen Stretch-Pick.",
    ],
    days: ["Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag", "Sonntag"],
    fallbackReader: "Leser",
    topPick: "Top-Tipp",
    pages: "Seiten",
    fitSuffix: "Passung",
    forParents: "Für Eltern",
    viewOnAmazon: "Bei Amazon ansehen",
    paperback: "Taschenbuch ansehen",
    amazonSearch: "Amazon-Suche",
    strongAgeFit: "Passt altersmäßig sehr gut zu dieser Lesestufe.",
    advancedForNow: "Könnte im Moment noch etwas zu anspruchsvoll wirken.",
    mayFeelYoung: "Könnte etwas jung wirken, außer das Thema reizt besonders.",
    goodReadAloud: "Tolle Größe für gutes Vorlese-Tempo.",
    longChunks: "Ein längeres Buch klappt vielleicht besser in kleinen Etappen.",
    goodChapterSize: "Gute Kapitelbuch-Größe für stetigen Lesefluss.",
    biggerAdventure: "Fühlt sich passend an für Leserinnen und Leser, die größere Abenteuer wollen.",
    includesTag(label) {
      return `Enthält ${label.toLowerCase()}.`;
    },
    matchesMood(label) {
      return `Passt zur ${label.toLowerCase()}en Stimmung.`;
    },
    longerSide: "Dieses Buch ist eher auf der längeren Seite.",
    slowBeginning: "Am Anfang braucht es vielleicht etwas Geduld.",
    schoolConflict: "Hat ziemlich viel Schulalltag und Konflikte.",
    containsEnergy(label) {
      return `Enthält etwas ${label.toLowerCase()}e Energie.`;
    },
    closeFavorite: "Liegt sehr nah an dem Favoriten, den du genannt hast.",
    adjacentFavorite(favoriteBook) {
      return `Fühlt sich verwandt mit "${favoriteBook}" an.`;
    },
    magicalSeries: "Hat etwas von dieser magischen Reihen-Energie.",
  },
};

const BOOKS = [
  {
    title: "Harry Potter and the Sorcerer's Stone",
    author: "J.K. Rowling",
    genre: "Fantasy",
    genreTag: "fantasy",
    ageMin: 8,
    ageMax: 12,
    pages: 309,
    length: "medium",
    coverClass: "cover-fantasy",
    tags: ["magic", "fantasy", "adventure", "friendship", "school", "mystery", "heroes"],
    vibes: ["brave", "fast_paced", "heartwarming"],
    compTitles: ["harry potter", "wizard", "magic school"],
    blurb: "A lonely kid discovers a hidden magical world and a place where he belongs.",
    note: "Best for readers who enjoy wonder, clues, and a strong sense of place.",
  },
  {
    title: "Percy Jackson and the Lightning Thief",
    author: "Rick Riordan",
    genre: "Fantasy Adventure",
    genreTag: "fantasy",
    ageMin: 9,
    ageMax: 13,
    pages: 377,
    length: "medium",
    coverClass: "cover-fantasy",
    tags: ["fantasy", "adventure", "humor", "friendship", "heroes"],
    vibes: ["fast_paced", "brave", "laugh_out_loud"],
    compTitles: ["harry potter", "percy jackson", "mythology"],
    blurb: "Greek myths crash into modern life in a fast, funny quest story.",
    note: "Great for kids who want action and jokes at the same time.",
  },
  {
    title: "The Wild Robot",
    author: "Peter Brown",
    genre: "Nature Adventure",
    genreTag: "nature",
    ageMin: 7,
    ageMax: 12,
    pages: 288,
    length: "medium",
    coverClass: "cover-nature",
    tags: ["animals", "science", "friendship", "emotions", "adventure"],
    vibes: ["heartwarming", "brave", "cozy"],
    compTitles: ["robot", "animals", "nature adventure"],
    blurb: "A robot learns how to survive, care, and belong on a wild island.",
    note: "A strong pick for readers who love heart plus adventure.",
  },
  {
    title: "The Tale of Despereaux",
    author: "Kate DiCamillo",
    genre: "Fantasy",
    genreTag: "fantasy",
    ageMin: 8,
    ageMax: 12,
    pages: 272,
    length: "medium",
    coverClass: "cover-heart",
    tags: ["fantasy", "adventure", "animals", "friendship", "emotions", "heroes"],
    vibes: ["heartwarming", "brave", "cozy"],
    compTitles: ["fairy tale", "brave mouse", "kind hero"],
    blurb: "A tiny mouse with a huge heart changes a kingdom.",
    note: "Lovely for readers who like gentle magic and memorable characters.",
  },
  {
    title: "The Vanderbeekers of 141st Street",
    author: "Karina Yan Glaser",
    genre: "Contemporary",
    genreTag: "real_world",
    ageMin: 8,
    ageMax: 12,
    pages: 320,
    length: "medium",
    coverClass: "cover-heart",
    tags: ["real_world", "friendship", "humor", "school", "emotions"],
    vibes: ["cozy", "heartwarming", "laugh_out_loud"],
    compTitles: ["family story", "cozy", "neighborhood"],
    blurb: "Five siblings team up to save their home with creativity and heart.",
    note: "Excellent for kids who love warm family stories with energy.",
  },
  {
    title: "Front Desk",
    author: "Kelly Yang",
    genre: "Contemporary",
    genreTag: "real_world",
    ageMin: 8,
    ageMax: 13,
    pages: 320,
    length: "medium",
    coverClass: "cover-heart",
    tags: ["real_world", "school", "friendship", "humor", "heroes"],
    vibes: ["brave", "heartwarming", "fast_paced"],
    compTitles: ["school story", "real life", "front desk"],
    blurb: "A smart, funny kid helps run a motel and stands up for what is right.",
    note: "Perfect for readers who like bold main characters and real stakes.",
  },
  {
    title: "The One and Only Ivan",
    author: "Katherine Applegate",
    genre: "Animal Fiction",
    genreTag: "nature",
    ageMin: 8,
    ageMax: 12,
    pages: 320,
    length: "medium",
    coverClass: "cover-nature",
    tags: ["animals", "friendship", "emotions", "heroes", "real_world"],
    vibes: ["heartwarming", "brainy", "cozy"],
    compTitles: ["animal story", "ivan", "gorilla"],
    blurb: "A thoughtful gorilla decides he wants something better for a friend.",
    note: "Tender, clever, and a favorite for empathetic readers.",
  },
  {
    title: "A Wrinkle in Time",
    author: "Madeleine L'Engle",
    genre: "Science Fantasy",
    genreTag: "science",
    ageMin: 8,
    ageMax: 13,
    pages: 256,
    length: "medium",
    coverClass: "cover-science",
    tags: ["science", "space", "adventure", "friendship", "heroes"],
    vibes: ["brainy", "brave", "fast_paced"],
    compTitles: ["space", "science fantasy", "time travel"],
    blurb: "A smart, unusual girl travels through space and time to save her father.",
    note: "A strong fit for curious readers who enjoy big ideas and wonder.",
  },
  {
    title: "The Mysterious Benedict Society",
    author: "Trenton Lee Stewart",
    genre: "Mystery Adventure",
    genreTag: "mystery",
    ageMin: 9,
    ageMax: 13,
    pages: 496,
    length: "long",
    coverClass: "cover-mystery",
    tags: ["mystery", "adventure", "friendship", "science", "heroes"],
    vibes: ["brainy", "brave", "fast_paced"],
    compTitles: ["mystery", "puzzles", "clever kids"],
    blurb: "A team of gifted kids solves puzzles and takes on a secret mission.",
    note: "Fantastic for kids ready for a big, clever page-turner.",
  },
  {
    title: "How to Train Your Dragon",
    author: "Cressida Cowell",
    genre: "Fantasy",
    genreTag: "fantasy",
    ageMin: 7,
    ageMax: 11,
    pages: 224,
    length: "short",
    coverClass: "cover-fantasy",
    tags: ["fantasy", "dragons", "humor", "adventure", "friendship", "heroes"],
    vibes: ["laugh_out_loud", "fast_paced", "brave"],
    compTitles: ["dragon", "funny fantasy", "viking"],
    blurb: "A scrawny Viking kid and a dragon make a hilarious, brave team.",
    note: "Great for readers who want fantasy without feeling too heavy.",
  },
  {
    title: "Diary of a Wimpy Kid",
    author: "Jeff Kinney",
    genre: "Humor",
    genreTag: "humor",
    ageMin: 8,
    ageMax: 13,
    pages: 224,
    length: "short",
    coverClass: "cover-humor",
    tags: ["humor", "school", "real_world", "friendship"],
    vibes: ["laugh_out_loud", "fast_paced", "cozy"],
    compTitles: ["funny school", "diary", "wimpy kid"],
    blurb: "A cartoon-style diary full of school disasters and big kid opinions.",
    note: "Handy for reluctant readers who love humor and quick momentum.",
  },
  {
    title: "Frog and Toad Are Friends",
    author: "Arnold Lobel",
    genre: "Early Chapter Book",
    genreTag: "nature",
    ageMin: 5,
    ageMax: 8,
    pages: 64,
    length: "short",
    coverClass: "cover-nature",
    tags: ["animals", "friendship", "humor", "emotions"],
    vibes: ["cozy", "heartwarming", "laugh_out_loud"],
    compTitles: ["frog and toad", "gentle", "friendship"],
    blurb: "Short, sweet stories that feel like warm cookies for the brain.",
    note: "Wonderful for read-alouds or confidence-building independent reading.",
  },
  {
    title: "The BFG",
    author: "Roald Dahl",
    genre: "Fantasy",
    genreTag: "fantasy",
    ageMin: 7,
    ageMax: 11,
    pages: 224,
    length: "short",
    coverClass: "cover-fantasy",
    tags: ["fantasy", "humor", "adventure", "friendship", "heroes"],
    vibes: ["laugh_out_loud", "brave", "cozy"],
    compTitles: ["giants", "roald dahl", "funny fantasy"],
    blurb: "A girl and a gentle giant team up in a wonderfully odd adventure.",
    note: "Great for kids who like silly language and imagination.",
  },
  {
    title: "The Phantom Tollbooth",
    author: "Norton Juster",
    genre: "Fantasy",
    genreTag: "fantasy",
    ageMin: 8,
    ageMax: 13,
    pages: 256,
    length: "medium",
    coverClass: "cover-mystery",
    tags: ["fantasy", "adventure", "humor", "science", "heroes"],
    vibes: ["brainy", "laugh_out_loud", "fast_paced"],
    compTitles: ["wordplay", "clever fantasy", "phantom tollbooth"],
    blurb: "A bored kid drives into a world full of wordplay, logic, and imagination.",
    note: "Best for readers who enjoy smart jokes and playful thinking.",
  },
  {
    title: "Zoey and Sassafras: Dragons and Marshmallows",
    author: "Asia Citro",
    genre: "Science Fantasy",
    genreTag: "science",
    ageMin: 6,
    ageMax: 9,
    pages: 96,
    length: "short",
    coverClass: "cover-science",
    tags: ["science", "magic", "dragons", "animals", "adventure"],
    vibes: ["brainy", "cozy", "heartwarming"],
    compTitles: ["science and magic", "zoey and sassafras", "dragons"],
    blurb: "A curious girl uses science thinking to help magical creatures.",
    note: "A lovely bridge for kids who want both experiments and enchantment.",
  },
  {
    title: "Charlotte's Web",
    author: "E.B. White",
    genre: "Animal Fiction",
    genreTag: "nature",
    ageMin: 7,
    ageMax: 11,
    pages: 192,
    length: "short",
    coverClass: "cover-nature",
    tags: ["animals", "friendship", "emotions", "real_world"],
    vibes: ["heartwarming", "cozy"],
    compTitles: ["animal classic", "friendship", "charlotte's web"],
    blurb: "A pig and a spider form one of the sweetest friendships in children's literature.",
    note: "Gentle and beautiful, though a little tender emotionally for some readers.",
  },
  {
    title: "The Penderwicks",
    author: "Jeanne Birdsall",
    genre: "Contemporary",
    genreTag: "real_world",
    ageMin: 8,
    ageMax: 12,
    pages: 272,
    length: "medium",
    coverClass: "cover-heart",
    tags: ["real_world", "friendship", "humor", "adventure", "emotions"],
    vibes: ["cozy", "heartwarming", "laugh_out_loud"],
    compTitles: ["family", "summer story", "cozy"],
    blurb: "Four sisters experience a lively summer full of trouble, loyalty, and adventure.",
    note: "Excellent for kids who love warm, classic-feeling family stories.",
  },
  {
    title: "Skandar and the Unicorn Thief",
    author: "A.F. Steadman",
    genre: "Fantasy Adventure",
    genreTag: "fantasy",
    language: "en",
    ageMin: 8,
    ageMax: 12,
    pages: 416,
    length: "medium",
    coverClass: "cover-fantasy",
    tags: ["fantasy", "adventure", "friendship", "heroes"],
    vibes: ["fast_paced", "brave"],
    compTitles: ["unicorn", "epic fantasy", "skandar"],
    blurb: "A boy enters a dangerous world of unicorn riders, high stakes, and fierce friendships.",
    note: "A great next step for readers who want big fantasy energy and quick momentum.",
  },
  {
    title: "City Spies",
    author: "James Ponti",
    genre: "Mystery Adventure",
    genreTag: "mystery",
    language: "en",
    ageMin: 8,
    ageMax: 12,
    pages: 400,
    length: "medium",
    coverClass: "cover-mystery",
    tags: ["mystery", "adventure", "friendship", "heroes", "humor"],
    vibes: ["fast_paced", "brainy", "brave"],
    compTitles: ["spy", "city spies", "mission"],
    blurb: "A team of brilliant kids from around the world trains for real missions as young spies.",
    note: "Perfect for readers who love teamwork, gadgets, travel, and page-turning missions.",
  },
  {
    title: "Legendborn",
    author: "Tracy Deonn",
    genre: "Fantasy",
    genreTag: "fantasy",
    language: "en",
    ageMin: 14,
    ageMax: 16,
    pages: 512,
    length: "long",
    coverClass: "cover-fantasy",
    tags: ["fantasy", "mystery", "heroes", "school"],
    vibes: ["brave", "fast_paced", "brainy"],
    compTitles: ["arthurian", "legendborn", "secret society"],
    blurb: "A teen uncovers hidden magic, buried grief, and a secret society tied to Arthurian legend.",
    note: "Best for older teens ready for layered fantasy, emotion, and a bigger world.",
  },
  {
    title: "The Sunbearer Trials",
    author: "Aiden Thomas",
    genre: "Fantasy Adventure",
    genreTag: "fantasy",
    language: "en",
    ageMin: 13,
    ageMax: 16,
    pages: 400,
    length: "medium",
    coverClass: "cover-fantasy",
    tags: ["fantasy", "adventure", "humor", "heroes"],
    vibes: ["fast_paced", "brave", "laugh_out_loud"],
    compTitles: ["sunbearer", "competition fantasy", "demigods"],
    blurb: "A semidios teen is thrown into dazzling trials where wit and courage matter as much as power.",
    note: "A strong fit for readers who want high-energy fantasy with humor and heart.",
  },
  {
    title: "A Good Girl's Guide to Murder",
    author: "Holly Jackson",
    genre: "Mystery",
    genreTag: "mystery",
    language: "en",
    ageMin: 14,
    ageMax: 16,
    pages: 400,
    length: "medium",
    coverClass: "cover-mystery",
    tags: ["mystery", "real_world", "heroes", "school"],
    vibes: ["brainy", "fast_paced"],
    compTitles: ["murder mystery", "cold case", "pip"],
    blurb: "A determined student reopens a murder case from her town and discovers far more than she expected.",
    note: "Ideal for older teens who want a sharp, modern mystery with real tension.",
  },
  {
    title: "Woodwalkers",
    author: "Katja Brandis",
    genre: "Fantasy",
    genreTag: "fantasy",
    language: "de",
    ageMin: 10,
    ageMax: 14,
    pages: 336,
    length: "medium",
    coverClass: "cover-nature",
    tags: ["fantasy", "animals", "adventure", "friendship", "school"],
    vibes: ["fast_paced", "brave", "heartwarming"],
    compTitles: ["woodwalkers", "animals", "shape shifter"],
    blurb: "A shapeshifting boy caught between wilderness and school life discovers how dangerous belonging can be.",
    note: "Great for readers who love animals, series momentum, and fantasy with real stakes.",
  },
  {
    title: "Die Duftapotheke",
    author: "Anna Ruhe",
    genre: "Fantasy",
    genreTag: "fantasy",
    language: "de",
    ageMin: 10,
    ageMax: 13,
    pages: 264,
    length: "medium",
    coverClass: "cover-science",
    tags: ["fantasy", "mystery", "adventure", "friendship"],
    vibes: ["brainy", "cozy", "heartwarming"],
    compTitles: ["duftapotheke", "magic", "mystery"],
    blurb: "A hidden villa, magical scents, and a dangerous secret pull two kids into a fragrant mystery.",
    note: "Wonderful for readers who want softer magic and lots of atmosphere.",
  },
  {
    title: "Rico, Oskar und die Tieferschatten",
    author: "Andreas Steinhoefel",
    genre: "Contemporary",
    genreTag: "real_world",
    language: "de",
    ageMin: 9,
    ageMax: 12,
    pages: 224,
    length: "short",
    coverClass: "cover-humor",
    tags: ["real_world", "friendship", "humor", "mystery", "heroes"],
    vibes: ["laugh_out_loud", "heartwarming", "brainy"],
    compTitles: ["rico oskar", "berlin", "friendship mystery"],
    blurb: "Two unforgettable boys stumble into a funny, heartfelt mystery in Berlin.",
    note: "A strong choice for kids who like humor, warmth, and clever friendship stories.",
  },
  {
    title: "Rubinrot",
    author: "Kerstin Gier",
    genre: "Fantasy Adventure",
    genreTag: "fantasy",
    language: "de",
    ageMin: 12,
    ageMax: 16,
    pages: 352,
    length: "medium",
    coverClass: "cover-heart",
    tags: ["fantasy", "adventure", "mystery", "school"],
    vibes: ["fast_paced", "heartwarming", "brainy"],
    compTitles: ["rubinrot", "time travel", "romantic fantasy"],
    blurb: "A teen discovers she is part of a secret time-travel mystery with far more danger than she expected.",
    note: "Works well for readers ready for a slightly older blend of adventure, secrets, and feelings.",
  },
  {
    title: "Erebos",
    author: "Ursula Poznanski",
    genre: "Mystery",
    genreTag: "mystery",
    language: "de",
    ageMin: 14,
    ageMax: 16,
    pages: 496,
    length: "long",
    coverClass: "cover-mystery",
    tags: ["mystery", "science", "real_world", "heroes"],
    vibes: ["brainy", "fast_paced", "brave"],
    compTitles: ["erebos", "game thriller", "technology"],
    blurb: "A mysterious game starts making demands in the real world, and refusing is no longer simple.",
    note: "Excellent for older teens who like tense thrillers and tech-tinged suspense.",
  },
  {
    title: "Shelter",
    author: "Ursula Poznanski",
    genre: "Mystery",
    genreTag: "mystery",
    language: "de",
    ageMin: 14,
    ageMax: 16,
    pages: 432,
    length: "long",
    coverClass: "cover-mystery",
    tags: ["mystery", "real_world", "school", "heroes"],
    vibes: ["brainy", "fast_paced"],
    compTitles: ["shelter", "psychological thriller", "school"],
    blurb: "What starts as a party joke spirals into fear, conspiracy, and escalating pressure.",
    note: "Best for older readers who enjoy psychological suspense with social tension.",
  },
  {
    title: "Cryptos",
    author: "Ursula Poznanski",
    genre: "Science Fantasy",
    genreTag: "science",
    language: "de",
    ageMin: 14,
    ageMax: 16,
    pages: 448,
    length: "long",
    coverClass: "cover-science",
    tags: ["science", "mystery", "adventure", "heroes"],
    vibes: ["brainy", "fast_paced", "brave"],
    compTitles: ["cryptos", "virtual worlds", "future thriller"],
    blurb: "In a future of collapsing realities and curated virtual worlds, one mystery becomes impossible to ignore.",
    note: "A standout pick for teens who like smart thrillers with futuristic ideas.",
  },
];

const state = {
  language: "en",
  name: "Luna",
  age: 9,
  mode: "just_right",
  favoriteBook: "Harry Potter",
  likes: new Set(["magic", "adventure"]),
  vibes: new Set(["heartwarming"]),
  dislikes: new Set(),
};

const els = {
  metaDescription: document.querySelector('meta[name="description"]'),
  heroEyebrow: document.getElementById("heroEyebrow"),
  heroTitle: document.getElementById("heroTitle"),
  heroLead: document.getElementById("heroLead"),
  heroPillFunny: document.getElementById("heroPillFunny"),
  heroPillMagic: document.getElementById("heroPillMagic"),
  heroPillCozy: document.getElementById("heroPillCozy"),
  heroPillAdventure: document.getElementById("heroPillAdventure"),
  heroPanelLabel: document.getElementById("heroPanelLabel"),
  heroList1: document.getElementById("heroList1"),
  heroList2: document.getElementById("heroList2"),
  heroList3: document.getElementById("heroList3"),
  introTitle: document.getElementById("introTitle"),
  introHint: document.getElementById("introHint"),
  snapshotTitle: document.getElementById("snapshotTitle"),
  readerNameLabel: document.getElementById("readerNameLabel"),
  readerAgeLabel: document.getElementById("readerAgeLabel"),
  readerModeLabel: document.getElementById("readerModeLabel"),
  readerModeReadAloud: document.getElementById("readerModeReadAloud"),
  readerModeJustRight: document.getElementById("readerModeJustRight"),
  readerModeBigChallenge: document.getElementById("readerModeBigChallenge"),
  favoriteBookLabel: document.getElementById("favoriteBookLabel"),
  loveTitle: document.getElementById("loveTitle"),
  loveHint: document.getElementById("loveHint"),
  vibeTitle: document.getElementById("vibeTitle"),
  vibeHint: document.getElementById("vibeHint"),
  avoidTitle: document.getElementById("avoidTitle"),
  avoidHint: document.getElementById("avoidHint"),
  resultsTitle: document.getElementById("resultsTitle"),
  parentNoteTitle: document.getElementById("parentNoteTitle"),
  stretchTitle: document.getElementById("stretchTitle"),
  stretchHint: document.getElementById("stretchHint"),
  planTitle: document.getElementById("planTitle"),
  langEnglish: document.getElementById("langEnglish"),
  langGerman: document.getElementById("langGerman"),
  name: document.getElementById("readerName"),
  age: document.getElementById("readerAge"),
  mode: document.getElementById("readerMode"),
  favoriteBook: document.getElementById("favoriteBook"),
  loveChips: document.getElementById("loveChips"),
  vibeChips: document.getElementById("vibeChips"),
  hateChips: document.getElementById("hateChips"),
  selectionSummary: document.getElementById("selectionSummary"),
  recommendBtn: document.getElementById("recommendBtn"),
  resetBtn: document.getElementById("resetBtn"),
  recommendationsSection: document.getElementById("recommendationsSection"),
  resultSubtitle: document.getElementById("resultSubtitle"),
  matchEnergy: document.getElementById("matchEnergy"),
  affiliateDisclosure: document.getElementById("affiliateDisclosure"),
  spotlightCard: document.getElementById("spotlightCard"),
  recommendGrid: document.getElementById("recommendGrid"),
  exploreCards: document.getElementById("exploreCards"),
  unlockPlanBtn: document.getElementById("unlockPlanBtn"),
  planSection: document.getElementById("planSection"),
  planIntro: document.getElementById("planIntro"),
  planGrid: document.getElementById("planGrid"),
};

let lastRecommendations = [];
let lastSortedRecommendations = [];
let planUnlocked = false;

renderChipBank();
hydrate();
renderInputs();
bind();
applyLanguage();
renderSelectedStyles();

if (state.likes.size || state.vibes.size || state.dislikes.size) {
  generateRecommendations({ scroll: false });
}

function t() {
  return UI_TEXT[state.language];
}

function renderChipBank() {
  LOVE_OPTIONS.forEach((item) => createChip(item, "love", els.loveChips));
  VIBE_OPTIONS.forEach((item) => createChip(item, "vibe", els.vibeChips));
  HATE_OPTIONS.forEach((item) => createChip(item, "hate", els.hateChips));
}

function createChip(value, mode, target) {
  const chip = document.createElement("button");
  chip.type = "button";
  chip.className = "chip";
  chip.dataset.value = value;
  chip.dataset.mode = mode;
  chip.textContent = labelForTag(value);
  target.appendChild(chip);
}

function bind() {
  bindProfileInputs();
  els.loveChips.addEventListener("click", (event) => toggleFromChip(event, "love"));
  els.vibeChips.addEventListener("click", (event) => toggleFromChip(event, "vibe"));
  els.hateChips.addEventListener("click", (event) => toggleFromChip(event, "hate"));
  els.recommendBtn.addEventListener("click", () => generateRecommendations());
  els.resetBtn.addEventListener("click", resetChoices);
  els.unlockPlanBtn.addEventListener("click", unlockReadingPlan);
  els.langEnglish.addEventListener("click", () => setLanguage("en"));
  els.langGerman.addEventListener("click", () => setLanguage("de"));
}

function bindProfileInputs() {
  [els.name, els.age, els.mode, els.favoriteBook].forEach((element) => {
    element.addEventListener("input", handleProfileChange);
    element.addEventListener("change", handleProfileChange);
  });
}

function setLanguage(language) {
  if (!UI_TEXT[language] || state.language === language) {
    return;
  }

  state.language = language;
  persistState();
  applyLanguage();
}

function applyLanguage() {
  const copy = t();

  document.documentElement.lang = state.language;
  document.title = copy.pageTitle;
  if (els.metaDescription) {
    els.metaDescription.setAttribute("content", copy.metaDescription);
  }

  els.heroEyebrow.textContent = copy.heroEyebrow;
  els.heroTitle.textContent = copy.heroTitle;
  els.heroLead.textContent = copy.heroLead;
  els.heroPillFunny.textContent = copy.heroPills[0];
  els.heroPillMagic.textContent = copy.heroPills[1];
  els.heroPillCozy.textContent = copy.heroPills[2];
  els.heroPillAdventure.textContent = copy.heroPills[3];
  els.heroPanelLabel.textContent = copy.heroPanelLabel;
  els.heroList1.textContent = copy.heroList[0];
  els.heroList2.textContent = copy.heroList[1];
  els.heroList3.textContent = copy.heroList[2];
  els.introTitle.textContent = copy.introTitle;
  els.introHint.textContent = copy.introHint;
  els.snapshotTitle.textContent = copy.snapshotTitle;
  els.readerNameLabel.textContent = copy.readerNameLabel;
  els.readerAgeLabel.textContent = copy.readerAgeLabel;
  els.readerModeLabel.textContent = copy.readerModeLabel;
  els.readerModeReadAloud.textContent = copy.modeOptions.read_aloud;
  els.readerModeJustRight.textContent = copy.modeOptions.just_right;
  els.readerModeBigChallenge.textContent = copy.modeOptions.big_challenge;
  els.favoriteBookLabel.textContent = copy.favoriteBookLabel;
  els.name.placeholder = copy.placeholderName;
  els.favoriteBook.placeholder = copy.placeholderFavorite;
  els.loveTitle.textContent = copy.loveTitle;
  els.loveHint.textContent = copy.loveHint;
  els.vibeTitle.textContent = copy.vibeTitle;
  els.vibeHint.textContent = copy.vibeHint;
  els.avoidTitle.textContent = copy.avoidTitle;
  els.avoidHint.textContent = copy.avoidHint;
  els.loveChips.setAttribute("aria-label", copy.loveAria);
  els.vibeChips.setAttribute("aria-label", copy.vibeAria);
  els.hateChips.setAttribute("aria-label", copy.hateAria);
  els.recommendBtn.textContent = copy.recommendBtn;
  els.resetBtn.textContent = copy.resetBtn;
  els.resultsTitle.textContent = copy.resultsTitle;
  els.parentNoteTitle.textContent = copy.parentNoteTitle;
  els.stretchTitle.textContent = copy.stretchTitle;
  els.stretchHint.textContent = copy.stretchHint;
  els.unlockPlanBtn.textContent = copy.unlockPlanBtn;
  els.planTitle.textContent = copy.planTitle;

  updateLanguageButtons();
  refreshChipLabels();
  updateSelectionSummary();
  renderAffiliateDisclosure();
  rerenderVisibleContent();
}

function updateLanguageButtons() {
  const isEnglish = state.language === "en";
  els.langEnglish.classList.toggle("is-active", isEnglish);
  els.langGerman.classList.toggle("is-active", !isEnglish);
  els.langEnglish.setAttribute("aria-pressed", String(isEnglish));
  els.langGerman.setAttribute("aria-pressed", String(!isEnglish));
}

function refreshChipLabels() {
  document.querySelectorAll(".chip").forEach((chip) => {
    chip.textContent = labelForTag(chip.dataset.value);
  });
}

function rerenderVisibleContent() {
  if (!els.recommendationsSection.classList.contains("hidden") && lastRecommendations.length) {
    renderResultHeader(lastRecommendations);
    renderSpotlight(lastRecommendations[0]);
    renderRecommendationCards(lastRecommendations);
    renderExploreCards(lastSortedRecommendations, lastRecommendations);
  }

  if (!els.planSection.classList.contains("hidden") && planUnlocked) {
    renderPlan();
  }
}

function toggleFromChip(event, mode) {
  const button = event.target.closest(".chip");
  if (!button) {
    return;
  }

  togglePreference(mode, button.dataset.value);
}

function togglePreference(mode, value) {
  const bucket = mode === "love" ? state.likes : mode === "vibe" ? state.vibes : state.dislikes;

  if (bucket.has(value)) {
    bucket.delete(value);
  } else {
    bucket.add(value);
  }

  renderSelectedStyles();
  updateSelectionSummary();
  persistState();

  if (!els.recommendationsSection.classList.contains("hidden")) {
    generateRecommendations({ scroll: false });
  }
}

function renderSelectedStyles() {
  document.querySelectorAll(".chip").forEach((chip) => {
    const { value, mode } = chip.dataset;
    chip.classList.toggle("active-like", mode === "love" && state.likes.has(value));
    chip.classList.toggle("active-vibe", mode === "vibe" && state.vibes.has(value));
    chip.classList.toggle("active-hate", mode === "hate" && state.dislikes.has(value));
  });
}

function renderInputs() {
  els.name.value = state.name;
  els.age.value = state.age;
  els.mode.value = state.mode;
  els.favoriteBook.value = state.favoriteBook;
}

function handleProfileChange() {
  collectProfile();
  persistState();

  if (!els.recommendationsSection.classList.contains("hidden")) {
    generateRecommendations({ scroll: false });
  }
}

function collectProfile() {
  state.name = els.name.value.trim();
  state.age = Math.min(16, Math.max(5, Number(els.age.value) || 9));
  state.mode = els.mode.value || "just_right";
  state.favoriteBook = els.favoriteBook.value.trim();
}

function getReaderName() {
  return state.name || t().fallbackReader;
}

function updateSelectionSummary() {
  const total = state.likes.size + state.vibes.size + state.dislikes.size;

  if (total < 3) {
    els.selectionSummary.textContent = t().selectionPrompt;
    return;
  }

  const parts = [];
  if (state.likes.size) {
    parts.push(t().selectionLikes(state.likes.size));
  }
  if (state.vibes.size) {
    parts.push(t().selectionVibes(state.vibes.size));
  }
  if (state.dislikes.size) {
    parts.push(t().selectionAvoids(state.dislikes.size));
  }

  els.selectionSummary.textContent = t().selectionReady(parts);
}

function generateRecommendations(options = {}) {
  collectProfile();
  persistState();

  const scored = BOOKS.map((book) => ({ book, ...scoreBook(book) }));
  const sorted = scored.sort((a, b) => b.score - a.score || a.book.title.localeCompare(b.book.title));
  const topPicks = sorted.slice(0, 6);

  lastSortedRecommendations = sorted;
  lastRecommendations = topPicks;

  renderResultHeader(topPicks);
  renderSpotlight(topPicks[0]);
  renderRecommendationCards(topPicks);
  renderExploreCards(sorted, topPicks);

  if (planUnlocked) {
    renderPlan();
  } else {
    els.planSection.classList.add("hidden");
  }

  els.recommendationsSection.classList.remove("hidden");

  if (options.scroll !== false) {
    els.recommendationsSection.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

function scoreBook(book) {
  let score = 52;
  const positiveReasons = [];
  const cautionReasons = [];
  const favoriteKey = normalizeText(state.favoriteBook);
  const bookLanguage = book.language || "en";

  if (bookLanguage === state.language) {
    score += 10;
  } else if (book.language) {
    score -= 3;
  }

  if (state.age >= book.ageMin && state.age <= book.ageMax) {
    score += 14;
    positiveReasons.push(t().strongAgeFit);
  } else if (state.age < book.ageMin) {
    score -= 20;
    cautionReasons.push(t().advancedForNow);
  } else {
    score -= 8;
    cautionReasons.push(t().mayFeelYoung);
  }

  if (state.mode === "read_aloud") {
    if (book.length === "short") {
      score += 12;
      positiveReasons.push(t().goodReadAloud);
    } else if (book.length === "long") {
      score -= 8;
      cautionReasons.push(t().longChunks);
    }
  }

  if (state.mode === "just_right") {
    if (book.length === "medium") {
      score += 9;
      positiveReasons.push(t().goodChapterSize);
    }
    if (book.length === "long") {
      score -= 3;
    }
  }

  if (state.mode === "big_challenge" && (book.length === "medium" || book.length === "long")) {
    score += 9;
    positiveReasons.push(t().biggerAdventure);
  }

  state.likes.forEach((tag) => {
    if (book.tags.includes(tag)) {
      score += 11;
      positiveReasons.push(t().includesTag(labelForTag(tag)));
    }
  });

  state.vibes.forEach((tag) => {
    if (book.vibes.includes(tag)) {
      score += 8;
      positiveReasons.push(t().matchesMood(labelForTag(tag)));
    }
  });

  state.dislikes.forEach((tag) => {
    if (tag === "too_long" && book.pages > 320) {
      score -= 16;
      cautionReasons.push(t().longerSide);
      return;
    }

    if (tag === "slow_start" && book.length === "long") {
      score -= 10;
      cautionReasons.push(t().slowBeginning);
      return;
    }

    if (tag === "school_drama" && book.tags.includes("school")) {
      score -= 10;
      cautionReasons.push(t().schoolConflict);
      return;
    }

    if (book.tags.includes(tag) || book.vibes.includes(tag)) {
      score -= 14;
      cautionReasons.push(t().containsEnergy(labelForTag(tag)));
    }
  });

  if (favoriteKey) {
    if (normalizeText(book.title).includes(favoriteKey)) {
      score += 18;
      positiveReasons.push(t().closeFavorite);
    } else if (
      book.compTitles.some((entry) => normalizeText(entry).includes(favoriteKey) || favoriteKey.includes(normalizeText(entry)))
    ) {
      score += 13;
      positiveReasons.push(t().adjacentFavorite(state.favoriteBook));
    }
  }

  if (favoriteKey.includes("harry potter") && (book.tags.includes("magic") || book.tags.includes("fantasy"))) {
    score += 12;
    positiveReasons.push(t().magicalSeries);
  }

  if (state.likes.has("magic") && state.likes.has("adventure") && book.tags.includes("fantasy")) {
    score += 6;
  }

  score = Math.max(18, Math.min(99, score));

  const reasons = [...new Set([...positiveReasons, ...cautionReasons])].slice(0, 3);
  return { score, reasons };
}

function renderResultHeader(recommendations) {
  const topPick = recommendations[0];
  const totalInputs = state.likes.size + state.vibes.size + state.dislikes.size;
  const confidence = totalInputs >= 6 ? t().matchEnergy.high : totalInputs >= 4 ? t().matchEnergy.medium : t().matchEnergy.low;

  els.matchEnergy.textContent = confidence;

  if (!topPick) {
    els.resultSubtitle.textContent = t().resultEmpty;
    return;
  }

  els.resultSubtitle.textContent = t().resultSubtitle(
    getReaderName(),
    localizeGenre(topPick.book),
    state.likes.size || 0,
    state.favoriteBook,
  );
}

function renderSpotlight(entry) {
  if (!entry) {
    els.spotlightCard.innerHTML = "";
    return;
  }

  els.spotlightCard.innerHTML = `
    <div class="book-cover ${escapeHtml(entry.book.coverClass)}">
      <span class="cover-kicker">${escapeHtml(t().topPick)}</span>
      <span class="cover-title">${escapeHtml(entry.book.title)}</span>
      <span class="cover-author">${escapeHtml(entry.book.author)}</span>
    </div>
    <div class="spotlight-copy">
      <h3>${escapeHtml(entry.book.title)}</h3>
      <p class="book-meta">${escapeHtml(entry.book.author)} | ${escapeHtml(localizeGenre(entry.book))} | ${entry.book.pages} ${escapeHtml(t().pages)}</p>
      <p class="spotlight-blurb">${escapeHtml(localizeBookCopy(entry.book, "blurb"))}</p>
      <div class="badge-row">
        <span class="badge">${escapeHtml(languageLabel(entry.book))}</span>
        ${entry.book.tags.slice(0, 5).map((tag) => `<span class="badge">${escapeHtml(labelForTag(tag))}</span>`).join("")}
      </div>
      <ul class="reason-list">
        ${entry.reasons.map((reason) => `<li>${escapeHtml(reason)}</li>`).join("")}
      </ul>
      <p class="parent-label">${escapeHtml(t().forParents)}</p>
      <div class="parent-actions">
        <a class="parent-link" href="${escapeHtml(buildAmazonSearchUrl(entry.book))}" target="_blank" rel="noopener noreferrer sponsored">
          ${escapeHtml(t().viewOnAmazon)}
        </a>
        <a class="parent-link secondary" href="${escapeHtml(buildAmazonSearchUrl(entry.book, "paperback"))}" target="_blank" rel="noopener noreferrer sponsored">
          ${escapeHtml(t().paperback)}
        </a>
      </div>
    </div>
  `;
}

function renderRecommendationCards(items) {
  els.recommendGrid.innerHTML = "";

  items.forEach((entry) => {
    const card = document.createElement("article");
    card.className = "book-card";
    card.innerHTML = `
      <div class="card-topline">
        <div>
          <h4>${escapeHtml(entry.book.title)}</h4>
          <p class="book-meta">${escapeHtml(entry.book.author)} | ${escapeHtml(localizeGenre(entry.book))}</p>
        </div>
        <span class="fit-badge">${Math.round(entry.score)}% ${escapeHtml(t().fitSuffix)}</span>
      </div>
      <p class="book-copy">${escapeHtml(localizeBookCopy(entry.book, "blurb"))}</p>
      <div class="badge-row">
        <span class="badge">${escapeHtml(languageLabel(entry.book))}</span>
        ${entry.book.vibes.map((tag) => `<span class="badge">${escapeHtml(labelForTag(tag))}</span>`).join("")}
      </div>
      <ul class="reason-list">
        ${entry.reasons.map((reason) => `<li>${escapeHtml(reason)}</li>`).join("")}
      </ul>
      <p class="supporting-note">${escapeHtml(localizeBookCopy(entry.book, "note"))}</p>
      <p class="parent-label">${escapeHtml(t().forParents)}</p>
      <div class="parent-actions">
        <a class="parent-link" href="${escapeHtml(buildAmazonSearchUrl(entry.book))}" target="_blank" rel="noopener noreferrer sponsored">
          ${escapeHtml(t().amazonSearch)}
        </a>
      </div>
    `;
    els.recommendGrid.appendChild(card);
  });
}

function renderExploreCards(sorted, topPicks) {
  const usedTitles = new Set(topPicks.map((entry) => entry.book.title));
  const mainGenres = new Set(topPicks.slice(0, 3).map((entry) => entry.book.genreTag));

  const stretch = sorted
    .filter((entry) => !usedTitles.has(entry.book.title))
    .filter((entry) => !mainGenres.has(entry.book.genreTag) || entry.book.vibes.some((tag) => state.vibes.has(tag)))
    .slice(0, 3);

  els.exploreCards.innerHTML = "";

  stretch.forEach((entry) => {
    const card = document.createElement("article");
    card.className = "explore-card";
    card.innerHTML = `
      <h4>${escapeHtml(entry.book.title)}</h4>
      <p class="book-meta">${escapeHtml(entry.book.author)} | ${escapeHtml(localizeGenre(entry.book))}</p>
      <div class="badge-row">
        <span class="badge">${escapeHtml(languageLabel(entry.book))}</span>
      </div>
      <p class="book-copy">${escapeHtml(localizeBookCopy(entry.book, "blurb"))}</p>
      <p class="supporting-note">${escapeHtml(t().stretchNote)}</p>
      <p class="parent-label">${escapeHtml(t().forParents)}</p>
      <div class="parent-actions">
        <a class="parent-link secondary" href="${escapeHtml(buildAmazonSearchUrl(entry.book))}" target="_blank" rel="noopener noreferrer sponsored">
          ${escapeHtml(t().amazonSearch)}
        </a>
      </div>
    `;
    els.exploreCards.appendChild(card);
  });
}

function unlockReadingPlan() {
  if (!lastRecommendations.length) {
    generateRecommendations({ scroll: false });
  }

  planUnlocked = true;
  renderPlan();
  persistState();
  els.planSection.scrollIntoView({ behavior: "smooth", block: "start" });
}

function renderPlan() {
  const activities = t().activities;
  const days = t().days;
  els.planGrid.innerHTML = "";
  els.planIntro.textContent = t().planIntro(getReaderName());

  days.forEach((day, index) => {
    const recommendation = lastRecommendations[index % lastRecommendations.length];
    const card = document.createElement("article");
    card.className = "plan-card";
    card.innerHTML = `
      <p class="plan-day">${escapeHtml(day)}</p>
      <h4>${escapeHtml(recommendation.book.title)}</h4>
      <p class="book-meta">${escapeHtml(recommendation.book.author)}</p>
      <p class="plan-text">${escapeHtml(activities[index])}</p>
    `;
    els.planGrid.appendChild(card);
  });

  els.planSection.classList.remove("hidden");
}

function resetChoices() {
  state.name = "Luna";
  state.age = 9;
  state.mode = "just_right";
  state.favoriteBook = "Harry Potter";
  state.likes = new Set();
  state.vibes = new Set();
  state.dislikes = new Set();
  lastRecommendations = [];
  lastSortedRecommendations = [];
  planUnlocked = false;

  renderInputs();
  renderSelectedStyles();
  updateSelectionSummary();
  persistState();
  els.recommendationsSection.classList.add("hidden");
  els.planSection.classList.add("hidden");
}

function hydrate() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (!saved) {
      return;
    }

    const parsed = JSON.parse(saved);
    state.language = parsed.language || state.language;
    state.name = parsed.name || state.name;
    state.age = Number(parsed.age) || state.age;
    state.mode = parsed.mode || state.mode;
    state.favoriteBook = parsed.favoriteBook || state.favoriteBook;
    state.likes = new Set(parsed.likes || []);
    state.vibes = new Set(parsed.vibes || []);
    state.dislikes = new Set(parsed.dislikes || []);
    planUnlocked = Boolean(parsed.planUnlocked);
  } catch (_error) {
    // Ignore broken localStorage data and continue with defaults.
  }
}

function persistState() {
  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify({
      language: state.language,
      name: state.name,
      age: state.age,
      mode: state.mode,
      favoriteBook: state.favoriteBook,
      likes: [...state.likes],
      vibes: [...state.vibes],
      dislikes: [...state.dislikes],
      planUnlocked,
    }),
  );
}

function renderAffiliateDisclosure() {
  if (!els.affiliateDisclosure) {
    return;
  }

  const usesPlaceholderTag = AMAZON_ASSOCIATE_TAG === "yourtag-20";
  els.affiliateDisclosure.textContent = usesPlaceholderTag ? t().affiliatePlaceholder : t().affiliateLive;
}

function buildAmazonSearchUrl(book, extraTerm = "") {
  const query = [book.title, book.author, extraTerm].filter(Boolean).join(" ");
  const url = new URL("https://www.amazon.com/s");
  url.searchParams.set("k", query);
  url.searchParams.set("tag", AMAZON_ASSOCIATE_TAG);
  return url.toString();
}

function localizeGenre(book) {
  return GENRE_LABELS[state.language][book.genre] || book.genre;
}

function localizeBookCopy(book, field) {
  if (state.language === "de" && BOOK_COPY_DE[book.title] && BOOK_COPY_DE[book.title][field]) {
    return BOOK_COPY_DE[book.title][field];
  }

  return book[field];
}

function languageLabel(book) {
  const language = book.language || "en";

  if (state.language === "de") {
    return language === "de" ? "Deutsch" : "Englisch";
  }

  return language === "de" ? "German" : "English";
}

function labelForTag(tag) {
  return TAG_LABELS[tag]?.[state.language] || tag.replace(/_/g, " ");
}

function normalizeText(value) {
  return String(value || "")
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}
