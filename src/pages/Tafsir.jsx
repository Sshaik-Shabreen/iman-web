 import { useEffect, useMemo, useState } from "react";

/**
 * Full list of 114 Surahs (number, Arabic name, English translation)
 */
const surahs = [
  { number: 1, name: "الفاتحة", translation: "The Opening" },
  { number: 2, name: "البقرة", translation: "The Cow" },
  { number: 3, name: "آل عمران", translation: "The Family of Imran" },
  { number: 4, name: "النساء", translation: "The Women" },
  { number: 5, name: "المائدة", translation: "The Table Spread" },
  { number: 6, name: "الأنعام", translation: "The Cattle" },
  { number: 7, name: "الأعراف", translation: "The Heights" },
  { number: 8, name: "الأنفال", translation: "The Spoils of War" },
  { number: 9, name: "التوبة", translation: "The Repentance" },
  { number: 10, name: "يونس", translation: "Jonah" },
  { number: 11, name: "هود", translation: "Hud" },
  { number: 12, name: "يوسف", translation: "Joseph" },
  { number: 13, name: "الرعد", translation: "The Thunder" },
  { number: 14, name: "ابراهيم", translation: "Abraham" },
  { number: 15, name: "الحجر", translation: "The Rocky Tract" },
  { number: 16, name: "النحل", translation: "The Bee" },
  { number: 17, name: "الإسراء", translation: "The Night Journey" },
  { number: 18, name: "الكهف", translation: "The Cave" },
  { number: 19, name: "مريم", translation: "Mary" },
  { number: 20, name: "طه", translation: "Ta-Ha" },
  { number: 21, name: "الأنبياء", translation: "The Prophets" },
  { number: 22, name: "الحج", translation: "The Pilgrimage" },
  { number: 23, name: "المؤمنون", translation: "The Believers" },
  { number: 24, name: "النور", translation: "The Light" },
  { number: 25, name: "الفرقان", translation: "The Criterion" },
  { number: 26, name: "الشعراء", translation: "The Poets" },
  { number: 27, name: "النمل", translation: "The Ant" },
  { number: 28, name: "القصص", translation: "The Stories" },
  { number: 29, name: "العنكبوت", translation: "The Spider" },
  { number: 30, name: "الروم", translation: "The Romans" },
  { number: 31, name: "لقمان", translation: "Luqman" },
  { number: 32, name: "السجدة", translation: "The Prostration" },
  { number: 33, name: "الأحزاب", translation: "The Confederates" },
  { number: 34, name: "سبأ", translation: "Sheba" },
  { number: 35, name: "فاطر", translation: "The Originator" },
  { number: 36, name: "يس", translation: "Ya-Sin" },
  { number: 37, name: "الصافات", translation: "Those Who Set the Ranks" },
  { number: 38, name: "ص", translation: "Sad" },
  { number: 39, name: "الزمر", translation: "The Groups" },
  { number: 40, name: "غافر", translation: "The Forgiver" },
  { number: 41, name: "فصلت", translation: "Explained in Detail" },
  { number: 42, name: "الشورى", translation: "The Consultation" },
  { number: 43, name: "الزخرف", translation: "The Gold Adornments" },
  { number: 44, name: "الدخان", translation: "The Smoke" },
  { number: 45, name: "الجاثية", translation: "The Crouching" },
  { number: 46, name: "الأحقاف", translation: "The Wind-Curved Sandhills" },
  { number: 47, name: "محمد", translation: "Muhammad" },
  { number: 48, name: "الفتح", translation: "The Victory" },
  { number: 49, name: "الحجرات", translation: "The Rooms" },
  { number: 50, name: "ق", translation: "Qaf" },
  { number: 51, name: "الذاريات", translation: "The Winnowing Winds" },
  { number: 52, name: "الطور", translation: "The Mount" },
  { number: 53, name: "النجم", translation: "The Star" },
  { number: 54, name: "القمر", translation: "The Moon" },
  { number: 55, name: "الرحمن", translation: "The Beneficent" },
  { number: 56, name: "الواقعة", translation: "The Inevitable" },
  { number: 57, name: "الحديد", translation: "The Iron" },
  { number: 58, name: "المجادلة", translation: "The Pleading Woman" },
  { number: 59, name: "الحشر", translation: "The Exile" },
  { number: 60, name: "الممتحنة", translation: "The Woman Tested" },
  { number: 61, name: "الصف", translation: "The Ranks" },
  { number: 62, name: "الجمعة", translation: "The Congregation" },
  { number: 63, name: "المنافقون", translation: "The Hypocrites" },
  { number: 64, name: "التغابن", translation: "Mutual Disillusion" },
  { number: 65, name: "الطلاق", translation: "The Divorce" },
  { number: 66, name: "التحريم", translation: "The Prohibition" },
  { number: 67, name: "الملك", translation: "The Sovereignty" },
  { number: 68, name: "القلم", translation: "The Pen" },
  { number: 69, name: "الحاقة", translation: "The Inevitable" },
  { number: 70, name: "المعارج", translation: "The Ascending Stairways" },
  { number: 71, name: "نوح", translation: "Noah" },
  { number: 72, name: "الجن", translation: "The Jinn" },
  { number: 73, name: "المزمل", translation: "The Enshrouded One" },
  { number: 74, name: "المدثر", translation: "The Cloaked One" },
  { number: 75, name: "القيامة", translation: "The Resurrection" },
  { number: 76, name: "الانسان", translation: "Man" },
  { number: 77, name: "المرسلات", translation: "The Emissaries" },
  { number: 78, name: "النبأ", translation: "The Announcement" },
  { number: 79, name: "النازعات", translation: "Those Who Drag Forth" },
  { number: 80, name: "عبس", translation: "He Frowned" },
  { number: 81, name: "التكوير", translation: "The Overthrowing" },
  { number: 82, name: "الانفطار", translation: "The Cleaving" },
  { number: 83, name: "المطففين", translation: "Defrauding" },
  { number: 84, name: "الانشقاق", translation: "The Splitting Open" },
  { number: 85, name: "البروج", translation: "The Mansions of the Stars" },
  { number: 86, name: "الطارق", translation: "The Morning Star" },
  { number: 87, name: "الأعلى", translation: "The Most High" },
  { number: 88, name: "الغاشية", translation: "The Overwhelming" },
  { number: 89, name: "الفجر", translation: "The Dawn" },
  { number: 90, name: "البلد", translation: "The City" },
  { number: 91, name: "الشمس", translation: "The Sun" },
  { number: 92, name: "الليل", translation: "The Night" },
  { number: 93, name: "الضحى", translation: "The Morning Hours" },
  { number: 94, name: "الشرح", translation: "The Relief" },
  { number: 95, name: "التين", translation: "The Fig" },
  { number: 96, name: "العلق", translation: "The Clot" },
  { number: 97, name: "القدر", translation: "The Power" },
  { number: 98, name: "البينة", translation: "The Clear Proof" },
  { number: 99, name: "الزلزلة", translation: "The Earthquake" },
  { number: 100, name: "العاديات", translation: "The Courser" },
  { number: 101, name: "القارعة", translation: "The Calamity" },
  { number: 102, name: "التكاثر", translation: "Rivalry in World Increase" },
  { number: 103, name: "العصر", translation: "The Declining Day" },
  { number: 104, name: "الهمزة", translation: "The Traducer" },
  { number: 105, name: "الفيل", translation: "The Elephant" },
  { number: 106, name: "قريش", translation: "Quraish" },
  { number: 107, name: "الماعون", translation: "Small Kindnesses" },
  { number: 108, name: "الكوثر", translation: "Abundance" },
  { number: 109, name: "الكافرون", translation: "The Disbelievers" },
  { number: 110, name: "النصر", translation: "The Divine Support" },
  { number: 111, name: "المسد", translation: "The Palm Fiber" },
  { number: 112, name: "الإخلاص", translation: "Sincerity" },
  { number: 113, name: "الفلق", translation: "The Daybreak" },
  { number: 114, name: "الناس", translation: "Mankind" },
];

/**
 * Tafsir source (Quran.com API v4)
 * 169 = Tafsir Ibn Kathir (English)
 * You can swap to other tafsir IDs if you like.
 */
const TAFSIR_ID = 169;

/** Utility: strip any HTML tags the API might return */
function stripHtml(html) {
  if (!html) return "";
  return html.replace(/<\/?[^>]+(>|$)/g, "").trim();
}

export default function Tafsir() {
  const [selectedSurah, setSelectedSurah] = useState(1);
  const [items, setItems] = useState([]); // array of { verse_key, text }
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // For heading
  const currentSurah = useMemo(
    () => surahs.find((s) => s.number === Number(selectedSurah)),
    [selectedSurah]
  );

  useEffect(() => {
    let cancelled = false;

    async function fetchAllPages() {
      setLoading(true);
      setError("");
      setItems([]);

      try {
        // Quran.com API supports pagination. We'll page through all tafsir entries.
        const perPage = 50;
        let page = 1;
        const acc = [];

        while (true) {
          const url = `https://api.quran.com/v4/tafsirs/${TAFSIR_ID}/by_surah/${selectedSurah}?page=${page}&per_page=${perPage}`;
          const res = await fetch(url);
          if (!res.ok) {
            throw new Error(`HTTP ${res.status}`);
          }
          const data = await res.json();

          // Two possible shapes seen in the wild:
          // - { tafsirs: [ { verse_key, text, ... } ], pagination: {...} }
          // - { tafsir: { verses: [ { verse_key, text } ] } }  <-- legacy
          const pageItems =
            data?.tafsirs ??
            data?.tafsir?.verses ??
            [];

          acc.push(
            ...pageItems.map((it) => ({
              verse_key: it.verse_key,
              text: stripHtml(it.text),
            }))
          );

          // Determine pagination stop
          const p = data?.pagination;
          if (!p) break;
          const hasNext =
            (p?.current_page ?? page) < (p?.total_pages ?? page);
          if (!hasNext) break;
          page += 1;
        }

        if (!cancelled) {
          setItems(acc);
          if (acc.length === 0) {
            setError(
              "Tafsir not available yet for this Surah (for the selected tafsir source)."
            );
          }
        }
      } catch (e) {
        if (!cancelled) {
          console.error(e);
          setError("Failed to load tafsir. Please try another surah later.");
        }
      } finally {
        if (!cancelled) setLoading(false);
      }
    }

    fetchAllPages();
    return () => {
      cancelled = true;
    };
  }, [selectedSurah]);

  return (
    <div className="min-h-screen bg-[#fde6d8] text-[#2c2c2c] px-6 py-12">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold text-[#c94f2c] mb-6 text-center">
          Tafsir (Ibn Kathir)
        </h1>

        {/* Surah Selector */}
        <div className="mb-8 grid gap-3 sm:grid-cols-[1fr_auto] items-center">
          <div className="text-center sm:text-left">
            <label className="font-semibold text-lg mr-2">Select Surah:</label>
            <select
              value={selectedSurah}
              onChange={(e) => setSelectedSurah(Number(e.target.value))}
              className="p-2 rounded-lg border border-gray-300 w-full sm:w-auto"
            >
              {surahs.map((s) => (
                <option key={s.number} value={s.number}>
                  {s.number}. {s.translation} ({s.name})
                </option>
              ))}
            </select>
          </div>

          <div className="text-center sm:text-right text-sm text-gray-600">
            Source: Tafsir Ibn Kathir (EN)
          </div>
        </div>

        {/* Current Surah Heading */}
        <div className="bg-white rounded-2xl shadow-sm p-5 mb-6">
          <div className="text-xl font-semibold text-[#c94f2c]">
            {currentSurah?.number}. {currentSurah?.translation} ({currentSurah?.name})
          </div>
        </div>

        {/* Content */}
        {loading ? (
          <p className="text-center text-gray-600">Loading tafsir…</p>
        ) : error ? (
          <p className="text-center text-gray-600">{error}</p>
        ) : items.length > 0 ? (
          <div className="space-y-4">
            {items.map((item, idx) => (
              <div
                key={idx}
                className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition"
              >
                <p className="text-[#c94f2c] font-bold text-lg mb-2">
                  Verse {item.verse_key}
                </p>
                <p className="text-gray-800 whitespace-pre-wrap leading-relaxed">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-600">
            Tafsir not available yet for this Surah.
          </p>
        )}
      </div>
    </div>
  );
}
