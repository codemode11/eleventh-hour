import React, { useState, useMemo, useEffect } from 'react';
import {
  BookOpen,
  Calendar,
  ChevronLeft,
  ChevronRight,
  Search,
  Bookmark,
  Plus,
  Check,
  ScrollText,
  Compass,
  Clock,
  Sparkles,
  FileText,
  X,
} from 'lucide-react';
import {
  PROPHECIES_DATA,
  PROPHECY_CATEGORIES,
  ProphecyCategory,
  ProphecyRecord,
  EschatologicalPhase,
} from './data/propheciesData';
import {
  getDailyLiturgicalDossier,
  getDayOfYearIndex,
  INITIAL_CUSTOM_DAILY_FEATURES,
  DailyCustomFeature,
} from './data/dailyLiturgyEngine';
import {
  HeroScriptoriumIllumination,
  CategoryEngravingPlate,
} from './components/SacredIlluminations';

const ESCHATOLOGICAL_PHASES: {
  phase: EschatologicalPhase;
  roman: string;
  summary: string;
  scripturalKey: string;
}[] = [
  {
    phase: 'I. Pre-Tribulation & Illumination of Conscience',
    roman: '01. First Watch',
    summary:
      'Spiritual tempest, crisis of marriage and family, proliferation of warnings, the Spark of Divine Mercy, Medjugorje’s initial secrets, and the worldwide Warning (Illumination of Conscience).',
    scripturalKey: 'Matthew 20:6 · 1 Corinthians 4:5 · Diary of St. Faustina §83 & §1732',
  },
  {
    phase: 'II. Purification & The Three Days of Darkness',
    roman: '02. Second Watch',
    summary:
      'Severe purification of the world and the Church if humanity refuses repentance; fire from the sky (Akita) and the Three Days of Darkness (Bl. Marie-Julie Jahenny) traversed with blessed beeswax candles and prayer.',
    scripturalKey: 'Exodus 10:21–23 · Wisdom 17:1–20 · Isaiah 26:20–21',
  },
  {
    phase: 'III. Triumph of the Immaculate Heart & Era of Peace',
    roman: '03. Third Watch',
    summary:
      'Anchoring of the Barque of Peter between the Two Pillars of the Eucharist and Our Lady (St. John Bosco), the Apostles of the Latter Times (St. Louis de Montfort), the Sixth Age of Consolation (Ven. Holzhauser), and the universal preaching of the Gospel to all nations.',
    scripturalKey: 'Genesis 3:15 · Matthew 24:14 · Revelation 3:7–10',
  },
  {
    phase: 'IV. Final Rebellion, Two Witnesses & Antichrist',
    roman: '04. Fourth Watch',
    summary:
      'The final loosing of Satan, the Great Apostasy, the rebuilding/profanation of the Third Temple in Jerusalem, the 1,260-day reign of the Beast and False Prophet, and the public preaching, martyrdom, and resurrection of Enoch and Elijah (the Two Witnesses), culminating in the conversion of All Israel.',
    scripturalKey: 'Daniel 9:27; 12:1–11 · 2 Thessalonians 2:1–12 · Revelation 11:1–13; 13:1–18 · Romans 11:25–27',
  },
  {
    phase: 'V. Glorious Parousia & New Heavens and Earth',
    roman: '05. Dawn of Eternity',
    summary:
      'Darkening of sun and moon, appearance of the Luminous Sign of the Son of Man (the Cross) in heaven, annihilation of the Antichrist by the splendor of Christ’s coming, the General Resurrection and Last Judgment, and the New Heavens and New Earth.',
    scripturalKey: 'Zechariah 14:4–9 · Matthew 24:29–31 · 2 Peter 3:10–13 · Revelation 20:11–21:5',
  },
];

export default function App() {
  // Automatically sync with current date and check every minute for midnight date rollover
  const [selectedDate, setSelectedDate] = useState<Date>(() => new Date());
  const [activeReadingTab, setActiveReadingTab] = useState<
    'readings' | 'commentary' | 'saint' | 'mystic-daily'
  >('readings');

  // Prophetic Codex filters & selection
  const [selectedCategory, setSelectedCategory] = useState<ProphecyCategory>('All');
  const [selectedPhaseFilter, setSelectedPhaseFilter] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeProphecyId, setActiveProphecyId] = useState<string>(
    'ot-nt-third-temple-of-israel'
  );
  const [bookmarkedIds, setBookmarkedIds] = useState<string[]>([
    'ot-nt-third-temple-of-israel',
    'marian-fatima-three-secrets',
    'faustina-diary-83-sign-in-sky',
    'jahenny-three-days-of-darkness',
  ]);
  const [showBookmarksOnly, setShowBookmarksOnly] = useState<boolean>(false);

  // Custom daily-updated features state (persisted in localStorage so user additions update daily)
  const [customDailyFeatures, setCustomDailyFeatures] = useState<DailyCustomFeature[]>(() => {
    try {
      const saved = localStorage.getItem('eleventh_hour_daily_features_v1');
      if (saved) {
        return JSON.parse(saved);
      }
    } catch {
      // ignore storage errors
    }
    return INITIAL_CUSTOM_DAILY_FEATURES;
  });

  const [isAddFeatureModalOpen, setIsAddFeatureModalOpen] = useState<boolean>(false);
  const [newFeatureTitle, setNewFeatureTitle] = useState<string>('');
  const [newFeatureCategory, setNewFeatureCategory] = useState<string>('Daily Prophetic Watch');
  const [newFeatureHeading1, setNewFeatureHeading1] = useState<string>('');
  const [newFeatureSource1, setNewFeatureSource1] = useState<string>('');
  const [newFeatureContent1, setNewFeatureContent1] = useState<string>('');
  const [newFeatureScripture1, setNewFeatureScripture1] = useState<string>('');

  useEffect(() => {
    try {
      localStorage.setItem(
        'eleventh_hour_daily_features_v1',
        JSON.stringify(customDailyFeatures)
      );
    } catch {
      // ignore storage errors
    }
  }, [customDailyFeatures]);

  // Automatic midnight rollover check so the live app updates daily without reload
  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      setSelectedDate((prev) => {
        const isViewingToday =
          prev.getFullYear() === now.getFullYear() &&
          prev.getMonth() === now.getMonth() &&
          prev.getDate() - 1 === now.getDate() - 1;
        if (isViewingToday && prev.getDate() !== now.getDate()) {
          return now;
        }
        return prev;
      });
    }, 60_000);
    return () => clearInterval(timer);
  }, []);

  const dailyDossier = useMemo(
    () => getDailyLiturgicalDossier(selectedDate),
    [selectedDate]
  );

  const dayOfYearIndex = useMemo(
    () => getDayOfYearIndex(selectedDate),
    [selectedDate]
  );

  const filteredProphecies = useMemo(() => {
    return PROPHECIES_DATA.filter((item) => {
      if (showBookmarksOnly && !bookmarkedIds.includes(item.id)) {
        return false;
      }
      if (selectedCategory !== 'All' && item.category !== selectedCategory) {
        return false;
      }
      if (
        selectedPhaseFilter !== 'All' &&
        item.eschatologicalPhase !== selectedPhaseFilter
      ) {
        return false;
      }
      if (searchQuery.trim() !== '') {
        const q = searchQuery.toLowerCase();
        const inTitle = item.title.toLowerCase().includes(q);
        const inSubtitle = item.subtitle.toLowerCase().includes(q);
        const inAuthor = item.sourceAuthor.toLowerCase().includes(q);
        const inText = item.primaryText.toLowerCase().includes(q);
        const inCommentary = item.theologicalCommentary.toLowerCase().includes(q);
        const inScripture = item.scriptureParallels.some(
          (sp) =>
            sp.reference.toLowerCase().includes(q) ||
            sp.text.toLowerCase().includes(q)
        );
        return (
          inTitle ||
          inSubtitle ||
          inAuthor ||
          inText ||
          inCommentary ||
          inScripture
        );
      }
      return true;
    });
  }, [selectedCategory, selectedPhaseFilter, searchQuery, showBookmarksOnly, bookmarkedIds]);

  const activeProphecy: ProphecyRecord = useMemo(() => {
    const found = PROPHECIES_DATA.find((p) => p.id === activeProphecyId);
    if (found) return found;
    return filteredProphecies[0] || PROPHECIES_DATA[0];
  }, [activeProphecyId, filteredProphecies]);

  const shiftDateByDays = (delta: number) => {
    setSelectedDate((prev) => {
      const next = new Date(prev);
      next.setDate(next.getDate() + delta);
      return next;
    });
  };

  const jumpToSpecificMonthDay = (month: number, day: number) => {
    setSelectedDate((prev) => new Date(prev.getFullYear(), month - 1, day));
  };

  const toggleBookmark = (id: string) => {
    setBookmarkedIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const toggleCustomFeature = (featureId: string) => {
    setCustomDailyFeatures((prev) =>
      prev.map((f) => (f.id === featureId ? { ...f, enabled: !f.enabled } : f))
    );
  };

  const handleCreateCustomDailyFeature = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newFeatureTitle.trim() || !newFeatureContent1.trim()) return;

    const newFeature: DailyCustomFeature = {
      id: `custom-${Date.now()}`,
      title: newFeatureTitle.trim(),
      category: newFeatureCategory.trim() || 'Daily Devotion',
      enabled: true,
      dailyEntries: [
        {
          heading: newFeatureHeading1.trim() || newFeatureTitle.trim(),
          source: newFeatureSource1.trim() || 'Personal Prophetic & Liturgical Rule',
          content: newFeatureContent1.trim(),
          scriptureAnchor: newFeatureScripture1.trim() || 'Matthew 25:13 · Watch ye therefore',
        },
      ],
    };

    setCustomDailyFeatures((prev) => [...prev, newFeature]);
    setNewFeatureTitle('');
    setNewFeatureHeading1('');
    setNewFeatureSource1('');
    setNewFeatureContent1('');
    setNewFeatureScripture1('');
    setIsAddFeatureModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#FBF9F5] text-[#1C1917] flex flex-col">
      {/* =====================================================================
          TOP BAR CONTRACT (Strictly 3 zones separated by gap-8)
      ====================================================================== */}
      <header className="sticky top-0 z-30 bg-[#FBF9F5]/95 backdrop-blur-xs border-b border-[#D6CEBE] px-6 lg:px-12 py-4 flex items-center justify-between gap-8">
        {/* Zone 1: Single text element wordmark */}
        <a
          href="#top"
          className="font-display text-2xl font-bold tracking-tight text-[#1C1917] whitespace-nowrap shrink-0"
        >
          Eleventh Hour
        </a>

        {/* Zone 2: 4–5 clean single-line text navigation links */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-[#57534E]">
          <a
            href="#daily-sanctuary"
            className="hover:text-[#1C1917] hover:underline underline-offset-4 transition-colors whitespace-nowrap shrink-0"
          >
            Daily Liturgy
          </a>
          <a
            href="#prophetic-codex"
            className="hover:text-[#1C1917] hover:underline underline-offset-4 transition-colors whitespace-nowrap shrink-0"
          >
            Prophetic Codex
          </a>
          <a
            href="#scripture-concordance"
            className="hover:text-[#1C1917] hover:underline underline-offset-4 transition-colors whitespace-nowrap shrink-0"
          >
            Biblical Parallels
          </a>
          <a
            href="#eschatological-chronology"
            className="hover:text-[#1C1917] hover:underline underline-offset-4 transition-colors whitespace-nowrap shrink-0"
          >
            Chronology
          </a>
          <a
            href="#daily-rule-modules"
            className="hover:text-[#1C1917] hover:underline underline-offset-4 transition-colors whitespace-nowrap shrink-0"
          >
            Daily Rule
          </a>
        </nav>

        {/* Zone 3: 1 Primary Action */}
        <div className="flex items-center shrink-0">
          <a
            href="#daily-sanctuary"
            className="px-4 py-2 text-xs font-medium text-[#FBF9F5] bg-[#1C1917] hover:bg-[#292524] transition-colors whitespace-nowrap shrink-0"
          >
            Read Today’s Mass
          </a>
        </div>
      </header>

      {/* =====================================================================
          OPERATIONAL LITURGICAL UTILITY RIBBON (Pattern A: Institutional Archive)
      ====================================================================== */}
      <div className="bg-[#EBE6DF] border-b border-[#D6CEBE] px-6 lg:px-12 py-2.5 text-xs text-[#44403C] flex flex-wrap items-center justify-between gap-4">
        <div className="flex flex-wrap items-center gap-2">
          <span className="font-mono uppercase tracking-wider text-[#78350F] font-medium">
            {dailyDossier.formattedDate}
          </span>
          <span aria-hidden="true">·</span>
          <span className="font-medium text-[#1C1917]">
            {dailyDossier.liturgicalDayTitle}
          </span>
          <span aria-hidden="true">·</span>
          <span>Liturgical Vestment: {dailyDossier.liturgicalColor}</span>
          <span aria-hidden="true">·</span>
          <span>Saint of the Day: {dailyDossier.saintOfTheDay.name.split(',')[0]}</span>
        </div>
        <div className="flex items-center gap-3 font-mono text-[11px] text-[#57534E]">
          <span>CORPUS: {PROPHECIES_DATA.length} DOSSIERS</span>
          <span aria-hidden="true">·</span>
          <span>AUTO-SYNCHRONIZED DAILY</span>
        </div>
      </div>

      <main id="top" className="flex-1 max-w-[1360px] w-full mx-auto px-6 lg:px-12 py-10 space-y-20">
        {/* =====================================================================
            HERO SECTION: INSTITUTIONAL ARCHIVE MARQUEE (2-Column Asymmetric Split)
        ====================================================================== */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch border-b border-[#D6CEBE] pb-14">
          <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="flex flex-wrap items-center gap-2 text-xs uppercase tracking-widest text-[#78350F] font-mono">
                <span>CATHOLIC PROPHETIC & LITURGICAL ARCHIVE</span>
                <span aria-hidden="true">·</span>
                <span>MATTHEW 20:6–7</span>
                <span aria-hidden="true">·</span>
                <span>DEPOSITUM FIDEI</span>
              </div>

              <h1 className="font-display text-4xl sm:text-5xl lg:text-[3.5rem] font-semibold text-[#1C1917] leading-[1.08] balance-text">
                The Prophetic Word of Scripture, the Saints & the Mystics of the Eleventh Hour
              </h1>

              <p className="text-base sm:text-lg text-[#44403C] leading-relaxed max-w-2xl">
                A curated theological and scriptural compendium uniting every unfulfilled prophecy of the Old and New Testaments—including the Third Temple of Israel, the Two Witnesses, and the Conversion of All Israel—with the approved Marian apparitions of Fatima, Akita, Quito, La Salette, and Kibeho, the <em>Diary</em> of St. Faustina Kowalska, the Ten Secrets of Medjugorje, and the stigmatists Blessed Anne Catherine Emmerich and Blessed Marie-Julie Jahenny, alongside daily updated Mass readings, the Saint of the Day, and Patristic Gospel commentary.
              </p>
            </div>

            {/* Quick Jump Folio Directory */}
            <div className="pt-4 border-t border-[#D6CEBE] space-y-4">
              <p className="text-xs font-mono uppercase tracking-widest text-[#57534E]">
                DIRECT FOLIO ACCESS · SELECT A TRADITION TO INSPECT
              </p>
              <div className="flex flex-wrap gap-2">
                <button
                  type="button"
                  onClick={() => {
                    setSelectedCategory('Old Testament (Unfulfilled)');
                    setActiveProphecyId('ot-nt-third-temple-of-israel');
                    document.getElementById('prophetic-codex')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="px-3.5 py-2 text-xs font-medium bg-[#EBE6DF] hover:bg-[#1C1917] hover:text-[#FBF9F5] text-[#1C1917] transition-colors whitespace-nowrap shrink-0 cursor-pointer"
                >
                  Third Temple of Israel
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setSelectedCategory('Marian Apparitions');
                    setActiveProphecyId('marian-fatima-three-secrets');
                    document.getElementById('prophetic-codex')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="px-3.5 py-2 text-xs font-medium bg-[#EBE6DF] hover:bg-[#1C1917] hover:text-[#FBF9F5] text-[#1C1917] transition-colors whitespace-nowrap shrink-0 cursor-pointer"
                >
                  The Fatima Prophecies
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setSelectedCategory('Diary of St. Faustina');
                    setActiveProphecyId('faustina-diary-83-sign-in-sky');
                    document.getElementById('prophetic-codex')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="px-3.5 py-2 text-xs font-medium bg-[#EBE6DF] hover:bg-[#1C1917] hover:text-[#FBF9F5] text-[#1C1917] transition-colors whitespace-nowrap shrink-0 cursor-pointer"
                >
                  Diary of St. Faustina (§83)
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setSelectedCategory('Seers of Medjugorje');
                    setActiveProphecyId('medjugorje-ten-secrets-parchment');
                    document.getElementById('prophetic-codex')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="px-3.5 py-2 text-xs font-medium bg-[#EBE6DF] hover:bg-[#1C1917] hover:text-[#FBF9F5] text-[#1C1917] transition-colors whitespace-nowrap shrink-0 cursor-pointer"
                >
                  Seers of Medjugorje
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setSelectedCategory('Bl. Anne Catherine Emmerich');
                    setActiveProphecyId('emmerich-two-popes-strange-church');
                    document.getElementById('prophetic-codex')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="px-3.5 py-2 text-xs font-medium bg-[#EBE6DF] hover:bg-[#1C1917] hover:text-[#FBF9F5] text-[#1C1917] transition-colors whitespace-nowrap shrink-0 cursor-pointer"
                >
                  Bl. Anne Catherine Emmerich
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setSelectedCategory('Bl. Marie-Julie Jahenny');
                    setActiveProphecyId('jahenny-three-days-of-darkness');
                    document.getElementById('prophetic-codex')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="px-3.5 py-2 text-xs font-medium bg-[#EBE6DF] hover:bg-[#1C1917] hover:text-[#FBF9F5] text-[#1C1917] transition-colors whitespace-nowrap shrink-0 cursor-pointer"
                >
                  Bl. Marie-Julie Jahenny
                </button>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 flex">
            <HeroScriptoriumIllumination />
          </div>
        </section>

        {/* =====================================================================
            SECTION 01: DAILY UPDATED LITURGICAL SANCTUARY
            (Date, Mass Readings, Saint of the Day, & Patristic Gospel Commentary)
        ====================================================================== */}
        <section id="daily-sanctuary" className="space-y-8 scroll-mt-24">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 border-b border-[#D6CEBE] pb-6">
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#78350F]">
                <span>01. QUOTIDIANUM LITURGICUM</span>
                <span aria-hidden="true">·</span>
                <span>UPDATED DAILY</span>
                <span aria-hidden="true">·</span>
                <span>{dailyDossier.lectionaryCycle}</span>
              </div>
              <h2 className="font-display text-3xl sm:text-4xl font-semibold text-[#1C1917] balance-text">
                {dailyDossier.formattedDate}: {dailyDossier.liturgicalDayTitle}
              </h2>
              <p className="text-sm text-[#57534E]">
                {dailyDossier.liturgicalSeason} · Vestment Color: {dailyDossier.liturgicalColor} · {dailyDossier.psalterWeek} · Saint of the Day: {dailyDossier.saintOfTheDay.name}
              </p>
            </div>

            {/* Interactive Date Navigator */}
            <div className="flex flex-wrap items-center gap-2 shrink-0">
              <button
                type="button"
                onClick={() => shiftDateByDays(-1)}
                className="px-3 py-2 text-xs font-medium border border-[#D6CEBE] bg-[#F7F4EE] hover:bg-[#EBE6DF] text-[#1C1917] flex items-center gap-1.5 whitespace-nowrap shrink-0 cursor-pointer"
              >
                <ChevronLeft className="w-3.5 h-3.5" />
                Previous Day
              </button>
              <button
                type="button"
                onClick={() => setSelectedDate(new Date())}
                className="px-3.5 py-2 text-xs font-medium bg-[#1C1917] text-[#FBF9F5] hover:bg-[#292524] flex items-center gap-1.5 whitespace-nowrap shrink-0 cursor-pointer"
              >
                <Calendar className="w-3.5 h-3.5" />
                Today
              </button>
              <button
                type="button"
                onClick={() => shiftDateByDays(1)}
                className="px-3 py-2 text-xs font-medium border border-[#D6CEBE] bg-[#F7F4EE] hover:bg-[#EBE6DF] text-[#1C1917] flex items-center gap-1.5 whitespace-nowrap shrink-0 cursor-pointer"
              >
                Next Day
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
              <input
                type="date"
                aria-label="Select liturgical date"
                value={dailyDossier.isoDate}
                onChange={(e) => {
                  if (e.target.value) {
                    const [y, m, d] = e.target.value.split('-').map(Number);
                    setSelectedDate(new Date(y, m - 1, d));
                  }
                }}
                className="px-3 py-1.5 text-xs font-mono border border-[#D6CEBE] bg-[#FBF9F5] text-[#1C1917]"
              />
            </div>
          </div>

          {/* Quick Liturgical Day Selector Strip & Section Switcher */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-[#F7F4EE] border border-[#D6CEBE] p-3">
            {/* Functional Segmented Tab Bar for Today's 4 Daily Updated Pillars */}
            <div className="flex flex-wrap items-center gap-1 bg-[#EBE6DF] p-1">
              <button
                type="button"
                onClick={() => setActiveReadingTab('readings')}
                className={`px-3.5 py-2 text-xs font-medium transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                  activeReadingTab === 'readings'
                    ? 'bg-[#1C1917] text-[#FBF9F5]'
                    : 'text-[#44403C] hover:text-[#1C1917]'
                }`}
              >
                Daily Mass Readings ({dailyDossier.readings.gospel.citation})
              </button>
              <button
                type="button"
                onClick={() => setActiveReadingTab('commentary')}
                className={`px-3.5 py-2 text-xs font-medium transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                  activeReadingTab === 'commentary'
                    ? 'bg-[#1C1917] text-[#FBF9F5]'
                    : 'text-[#44403C] hover:text-[#1C1917]'
                }`}
              >
                Patristic Gospel Commentary
              </button>
              <button
                type="button"
                onClick={() => setActiveReadingTab('saint')}
                className={`px-3.5 py-2 text-xs font-medium transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                  activeReadingTab === 'saint'
                    ? 'bg-[#1C1917] text-[#FBF9F5]'
                    : 'text-[#44403C] hover:text-[#1C1917]'
                }`}
              >
                Saint of the Day
              </button>
              <button
                type="button"
                onClick={() => setActiveReadingTab('mystic-daily')}
                className={`px-3.5 py-2 text-xs font-medium transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                  activeReadingTab === 'mystic-daily'
                    ? 'bg-[#1C1917] text-[#FBF9F5]'
                    : 'text-[#44403C] hover:text-[#1C1917]'
                }`}
              >
                Daily Faustina & Marian Watchword
              </button>
            </div>

            {/* Quick Feast Day Jumpers */}
            <div className="flex items-center gap-2 text-xs text-[#57534E] overflow-x-auto">
              <span className="font-mono text-[11px] uppercase whitespace-nowrap shrink-0">
                Calendar Days:
              </span>
              {[
                { label: 'Oct 28 (Sts. Simon & Jude)', m: 10, d: 28 },
                { label: 'Oct 29 (St. Narcissus)', m: 10, d: 29 },
                { label: 'Oct 30 (St. Marcellus)', m: 10, d: 30 },
                { label: 'Oct 31 (All Hallows’ Eve)', m: 10, d: 31 },
                { label: 'Nov 1 (All Saints)', m: 11, d: 1 },
              ].map((preset) => (
                <button
                  key={preset.label}
                  type="button"
                  onClick={() => jumpToSpecificMonthDay(preset.m, preset.d)}
                  className="px-2.5 py-1 text-xs border border-[#D6CEBE] bg-[#FBF9F5] hover:bg-[#EBE6DF] text-[#1C1917] whitespace-nowrap shrink-0 cursor-pointer"
                >
                  {preset.label}
                </button>
              ))}
            </div>
          </div>

          {/* DAILY CONTENT PANEL (Asymmetric 70% Reading Column / 30% Margin Notes) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 bg-[#F7F4EE] border border-[#D6CEBE] p-6 sm:p-10">
            {/* Main 8-Column Liturgical Reading / Commentary Canvas */}
            <div className="lg:col-span-8 space-y-8">
              {activeReadingTab === 'readings' && (
                <div className="space-y-8">
                  {/* First Reading */}
                  <article className="space-y-3 pb-8 border-b border-[#D6CEBE]">
                    <div className="flex flex-wrap items-center justify-between gap-2 text-xs font-mono uppercase tracking-widest text-[#78350F]">
                      <span>{dailyDossier.readings.firstReading.label}</span>
                      <span>{dailyDossier.readings.firstReading.citation}</span>
                    </div>
                    <h3 className="font-display text-2xl font-semibold text-[#1C1917]">
                      {dailyDossier.readings.firstReading.title}
                    </h3>
                    <p className="text-base leading-relaxed text-[#292524] max-w-prose first-letter:text-5xl first-letter:font-display first-letter:font-bold first-letter:float-left first-letter:mr-3 first-letter:mt-1 first-letter:text-[#78350F]">
                      {dailyDossier.readings.firstReading.text}
                    </p>
                  </article>

                  {/* Responsorial Psalm */}
                  <article className="space-y-3 pb-8 border-b border-[#D6CEBE]">
                    <div className="flex flex-wrap items-center justify-between gap-2 text-xs font-mono uppercase tracking-widest text-[#78350F]">
                      <span>{dailyDossier.readings.responsorialPsalm.label}</span>
                      <span>{dailyDossier.readings.responsorialPsalm.citation}</span>
                    </div>
                    <p className="font-display italic text-xl text-[#1C1917] font-semibold">
                      {dailyDossier.readings.responsorialPsalm.responseRefrain}
                    </p>
                    <p className="text-base leading-relaxed text-[#292524] whitespace-pre-line max-w-prose">
                      {dailyDossier.readings.responsorialPsalm.text}
                    </p>
                  </article>

                  {/* Alleluia Verse */}
                  <article className="space-y-2 pb-8 border-b border-[#D6CEBE]">
                    <div className="flex flex-wrap items-center justify-between gap-2 text-xs font-mono uppercase tracking-widest text-[#78350F]">
                      <span>{dailyDossier.readings.alleluia.label}</span>
                      <span>{dailyDossier.readings.alleluia.citation}</span>
                    </div>
                    <p className="font-display italic text-lg text-[#1C1917]">
                      {dailyDossier.readings.alleluia.text}
                    </p>
                  </article>

                  {/* Holy Gospel */}
                  <article className="space-y-3">
                    <div className="flex flex-wrap items-center justify-between gap-2 text-xs font-mono uppercase tracking-widest text-[#9A3412]">
                      <span>{dailyDossier.readings.gospel.label}</span>
                      <span>{dailyDossier.readings.gospel.citation}</span>
                    </div>
                    <h3 className="font-display text-2xl sm:text-3xl font-semibold text-[#1C1917]">
                      {dailyDossier.readings.gospel.title}
                    </h3>
                    <p className="text-base sm:text-lg leading-relaxed text-[#1C1917] max-w-prose first-letter:text-5xl first-letter:font-display first-letter:font-bold first-letter:float-left first-letter:mr-3 first-letter:mt-1 first-letter:text-[#9A3412]">
                      {dailyDossier.readings.gospel.text}
                    </p>
                  </article>
                </div>
              )}

              {activeReadingTab === 'commentary' && (
                <div className="space-y-8">
                  <div className="space-y-3 pb-6 border-b border-[#D6CEBE]">
                    <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#78350F]">
                      <span>CATENA AUREA & PATRISTIC EXEGESIS</span>
                      <span aria-hidden="true">·</span>
                      <span>GOSPEL OF {dailyDossier.gospelCommentary.gospelCitation.toUpperCase()}</span>
                    </div>
                    <h3 className="font-display text-3xl font-semibold text-[#1C1917]">
                      {dailyDossier.gospelCommentary.homilyTitle}
                    </h3>
                    <p className="text-base leading-relaxed text-[#292524] max-w-prose">
                      {dailyDossier.gospelCommentary.exegeticalOverview}
                    </p>
                  </div>

                  {/* Patristic Voices */}
                  <div className="space-y-6">
                    <h4 className="text-xs font-mono uppercase tracking-widest text-[#57534E]">
                      VOICES OF THE CHURCH FATHERS ON TODAY’S GOSPEL
                    </h4>
                    {dailyDossier.gospelCommentary.patristicVoices.map((voice, idx) => (
                      <div
                        key={idx}
                        className="p-6 bg-[#FBF9F5] border border-[#D6CEBE] space-y-2"
                      >
                        <div className="flex flex-wrap items-center justify-between gap-2 text-xs text-[#78350F] font-mono">
                          <span className="font-semibold uppercase">{voice.father}</span>
                          <span>
                            {voice.sourceWork} · {voice.era}
                          </span>
                        </div>
                        <p className="font-display italic text-xl text-[#1C1917] leading-relaxed">
                          {voice.commentary}
                        </p>
                      </div>
                    ))}
                  </div>

                  {/* Eschatological Synthesis */}
                  <div className="p-6 bg-[#EBE6DF] border border-[#D6CEBE] space-y-2">
                    <p className="text-xs font-mono uppercase tracking-widest text-[#9A3412]">
                      ELEVENTH HOUR PROPHETIC APPLICATION
                    </p>
                    <p className="text-base leading-relaxed text-[#1C1917]">
                      {dailyDossier.gospelCommentary.eleventhHourApplication}
                    </p>
                  </div>
                </div>
              )}

              {activeReadingTab === 'saint' && (
                <div className="space-y-6">
                  <div className="space-y-2 pb-6 border-b border-[#D6CEBE]">
                    <div className="flex flex-wrap items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#78350F]">
                      <span>ROMAN MARTYROLOGY</span>
                      <span aria-hidden="true">·</span>
                      <span>{dailyDossier.saintOfTheDay.feastRank}</span>
                      <span aria-hidden="true">·</span>
                      <span>{dailyDossier.saintOfTheDay.dates}</span>
                    </div>
                    <h3 className="font-display text-3xl font-semibold text-[#1C1917]">
                      {dailyDossier.saintOfTheDay.name}
                    </h3>
                    <p className="text-sm text-[#57534E] italic">
                      {dailyDossier.saintOfTheDay.title} — Patronage: {dailyDossier.saintOfTheDay.patronage}
                    </p>
                  </div>

                  <div className="space-y-4">
                    <h4 className="text-xs font-mono uppercase tracking-widest text-[#57534E]">
                      HAGIOGRAPHICAL LIFE & HISTORICAL WITNESS
                    </h4>
                    <p className="text-base leading-relaxed text-[#292524] max-w-prose first-letter:text-5xl first-letter:font-display first-letter:font-bold first-letter:float-left first-letter:mr-3 first-letter:mt-1 first-letter:text-[#78350F]">
                      {dailyDossier.saintOfTheDay.biography}
                    </p>
                  </div>

                  <div className="p-6 bg-[#FBF9F5] border border-[#D6CEBE] space-y-2">
                    <p className="text-xs font-mono uppercase tracking-widest text-[#78350F]">
                      PROPHETIC LESSON FOR THE CHURCH MILITANT
                    </p>
                    <p className="text-base leading-relaxed text-[#1C1917]">
                      {dailyDossier.saintOfTheDay.propheticAndSpiritualLesson}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-[#D6CEBE] space-y-2">
                    <p className="text-xs font-mono uppercase tracking-widest text-[#57534E]">
                      COLLECT PRAYER OF THE DAY
                    </p>
                    <p className="font-display italic text-xl text-[#1C1917] leading-relaxed">
                      “{dailyDossier.saintOfTheDay.collectPrayer}”
                    </p>
                  </div>
                </div>
              )}

              {activeReadingTab === 'mystic-daily' && (
                <div className="space-y-8">
                  <div className="p-6 bg-[#FBF9F5] border border-[#D6CEBE] space-y-3">
                    <div className="flex flex-wrap items-center justify-between gap-2 text-xs font-mono uppercase tracking-widest text-[#9A3412]">
                      <span>DAILY EXCERPT FROM THE DIARY OF ST. FAUSTINA</span>
                      <span>{dailyDossier.dailyFaustinaExcerpt.diaryNumber}</span>
                    </div>
                    <h3 className="font-display text-2xl font-semibold text-[#1C1917]">
                      {dailyDossier.dailyFaustinaExcerpt.theme}
                    </h3>
                    <p className="font-display italic text-xl leading-relaxed text-[#1C1917]">
                      {dailyDossier.dailyFaustinaExcerpt.text}
                    </p>
                  </div>

                  <div className="p-6 bg-[#FBF9F5] border border-[#D6CEBE] space-y-3">
                    <div className="flex flex-wrap items-center justify-between gap-2 text-xs font-mono uppercase tracking-widest text-[#1E3A8A]">
                      <span>DAILY MARIAN WATCHWORD</span>
                      <span>{dailyDossier.dailyMarianWatchword.apparitionSource}</span>
                    </div>
                    <p className="font-display italic text-xl leading-relaxed text-[#1C1917]">
                      {dailyDossier.dailyMarianWatchword.message}
                    </p>
                    <div className="pt-3 border-t border-[#D6CEBE] text-sm text-[#44403C]">
                      <span className="font-semibold text-[#1C1917]">Today’s Spiritual Practice: </span>
                      {dailyDossier.dailyMarianWatchword.dailyPractice}
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Right 4-Column Margin Sidebar: Always-Visible Summary of Today's 4 Pillars */}
            <aside className="lg:col-span-4 lg:border-l lg:border-[#D6CEBE] lg:pl-8 space-y-6">
              <div className="space-y-2 pb-5 border-b border-[#D6CEBE]">
                <p className="text-xs font-mono uppercase tracking-widest text-[#78350F]">
                  TODAY’S SAINT OF THE DAY
                </p>
                <h4 className="font-display text-xl font-semibold text-[#1C1917]">
                  {dailyDossier.saintOfTheDay.name}
                </h4>
                <p className="text-xs text-[#57534E] font-mono">
                  {dailyDossier.saintOfTheDay.dates}
                </p>
                <p className="text-sm text-[#44403C] line-clamp-4 leading-relaxed">
                  {dailyDossier.saintOfTheDay.biography}
                </p>
                <button
                  type="button"
                  onClick={() => setActiveReadingTab('saint')}
                  className="text-xs font-medium text-[#78350F] hover:underline underline-offset-4 cursor-pointer"
                >
                  Read Full Biography & Collect →
                </button>
              </div>

              <div className="space-y-2 pb-5 border-b border-[#D6CEBE]">
                <p className="text-xs font-mono uppercase tracking-widest text-[#9A3412]">
                  TODAY’S GOSPEL COMMENTARY
                </p>
                <h4 className="font-display text-xl font-semibold text-[#1C1917]">
                  {dailyDossier.gospelCommentary.homilyTitle}
                </h4>
                <p className="text-sm text-[#44403C] line-clamp-4 leading-relaxed">
                  {dailyDossier.gospelCommentary.exegeticalOverview}
                </p>
                <button
                  type="button"
                  onClick={() => setActiveReadingTab('commentary')}
                  className="text-xs font-medium text-[#9A3412] hover:underline underline-offset-4 cursor-pointer"
                >
                  Read Patristic Homilies ({dailyDossier.gospelCommentary.patristicVoices.length} Fathers) →
                </button>
              </div>

              <div className="space-y-2">
                <p className="text-xs font-mono uppercase tracking-widest text-[#1E3A8A]">
                  ST. FAUSTINA DIARY FOR TODAY ({dailyDossier.dailyFaustinaExcerpt.diaryNumber})
                </p>
                <p className="font-display italic text-base text-[#1C1917] line-clamp-4 leading-relaxed">
                  {dailyDossier.dailyFaustinaExcerpt.text}
                </p>
                <button
                  type="button"
                  onClick={() => setActiveReadingTab('mystic-daily')}
                  className="text-xs font-medium text-[#1E3A8A] hover:underline underline-offset-4 cursor-pointer"
                >
                  Open Daily Faustina & Marian Watchword →
                </button>
              </div>
            </aside>
          </div>
        </section>

        {/* =====================================================================
            SECTION 02: THE PROPHETIC CODEX
            (Saints, Stigmatists, Seers, OT/NT Unfulfilled, Third Temple, Fatima,
             St. Faustina, Medjugorje, Bl. Emmerich, Bl. Jahenny)
        ====================================================================== */}
        <section id="prophetic-codex" className="space-y-8 scroll-mt-24">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 border-b border-[#D6CEBE] pb-6">
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#78350F]">
                <span>02. CODEX PROPHETICUS</span>
                <span aria-hidden="true">·</span>
                <span>PUBLIC & PRIVATE REVELATION</span>
                <span aria-hidden="true">·</span>
                <span>PARALLEL SCRIPTURE APPARATUSES</span>
              </div>
              <h2 className="font-display text-3xl sm:text-4xl font-semibold text-[#1C1917]">
                The Catholic Prophetic Corpus & Parallel Biblical Passages
              </h2>
              <p className="text-sm text-[#57534E] max-w-3xl">
                Every prophetic dossier includes its ecclesiastical status, verbatim primary source text, theological synthesis, and side-by-side parallel passages from Sacred Scripture.
              </p>
            </div>

            {/* Search & Bookmark Filter Controls */}
            <div className="flex flex-wrap items-center gap-3 shrink-0">
              <div className="relative">
                <Search className="w-4 h-4 text-[#57534E] absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search Third Temple, Fatima, Emmerich..."
                  className="pl-9 pr-4 py-2 text-xs bg-[#F7F4EE] border border-[#D6CEBE] text-[#1C1917] placeholder:text-[#78716C] w-64 sm:w-72 focus:outline-none focus:border-[#1C1917]"
                />
                {searchQuery && (
                  <button
                    type="button"
                    onClick={() => setSearchQuery('')}
                    aria-label="Clear search"
                    className="absolute right-2.5 top-1/2 -translate-y-1/2 text-[#57534E] hover:text-[#1C1917] cursor-pointer"
                  >
                    <X className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>

              <button
                type="button"
                onClick={() => setShowBookmarksOnly(!showBookmarksOnly)}
                className={`px-3.5 py-2 text-xs font-medium border transition-colors flex items-center gap-1.5 whitespace-nowrap shrink-0 cursor-pointer ${
                  showBookmarksOnly
                    ? 'bg-[#78350F] text-[#FBF9F5] border-[#78350F]'
                    : 'bg-[#F7F4EE] text-[#1C1917] border-[#D6CEBE] hover:bg-[#EBE6DF]'
                }`}
              >
                <Bookmark className="w-3.5 h-3.5" />
                Saved Folios ({bookmarkedIds.length})
              </button>
            </div>
          </div>

          {/* Interactive Tradition / Category Filter Bar */}
          <div className="flex flex-wrap items-center gap-1.5 bg-[#EBE6DF] p-1.5 border border-[#D6CEBE]">
            {PROPHECY_CATEGORIES.map((category) => {
              const count =
                category === 'All'
                  ? PROPHECIES_DATA.length
                  : PROPHECIES_DATA.filter((p) => p.category === category).length;
              const isActive = selectedCategory === category;
              return (
                <button
                  key={category}
                  type="button"
                  onClick={() => {
                    setSelectedCategory(category);
                    const firstInCat =
                      category === 'All'
                        ? PROPHECIES_DATA[0]
                        : PROPHECIES_DATA.find((p) => p.category === category);
                    if (firstInCat) setActiveProphecyId(firstInCat.id);
                  }}
                  className={`px-3 py-2 text-xs font-medium transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                    isActive
                      ? 'bg-[#1C1917] text-[#FBF9F5]'
                      : 'text-[#44403C] hover:text-[#1C1917] hover:bg-[#F7F4EE]'
                  }`}
                >
                  {category} ({count})
                </button>
              );
            })}
          </div>

          {/* Master-Detail Split View for the Prophetic Codex */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left 4-Column Archive Catalogue Index */}
            <div className="lg:col-span-4 space-y-2 border border-[#D6CEBE] bg-[#F7F4EE] p-4 max-h-[960px] overflow-y-auto">
              <div className="flex items-center justify-between pb-3 mb-2 border-b border-[#D6CEBE] text-xs font-mono text-[#57534E]">
                <span>CATALOGUE INDEX ({filteredProphecies.length})</span>
                {selectedPhaseFilter !== 'All' && (
                  <button
                    type="button"
                    onClick={() => setSelectedPhaseFilter('All')}
                    className="text-[#9A3412] hover:underline cursor-pointer"
                  >
                    Reset Phase Filter
                  </button>
                )}
              </div>

              {filteredProphecies.length === 0 ? (
                <div className="p-6 text-center space-y-3">
                  <p className="text-sm text-[#57534E]">
                    No prophetic dossiers match your current filter criteria.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setSelectedCategory('All');
                      setSelectedPhaseFilter('All');
                      setSearchQuery('');
                      setShowBookmarksOnly(false);
                    }}
                    className="px-3 py-1.5 text-xs font-medium bg-[#1C1917] text-[#FBF9F5] cursor-pointer"
                  >
                    Reset All Filters
                  </button>
                </div>
              ) : (
                filteredProphecies.map((record) => {
                  const isSelected = record.id === activeProphecy.id;
                  const isBookmarked = bookmarkedIds.includes(record.id);
                  return (
                    <div
                      key={record.id}
                      onClick={() => setActiveProphecyId(record.id)}
                      role="button"
                      tabIndex={0}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' || e.key === ' ') {
                          setActiveProphecyId(record.id);
                        }
                      }}
                      className={`p-4 border transition-colors cursor-pointer space-y-1.5 ${
                        isSelected
                          ? 'bg-[#1C1917] text-[#FBF9F5] border-[#1C1917]'
                          : 'bg-[#FBF9F5] text-[#1C1917] border-[#D6CEBE] hover:bg-[#EBE6DF]/60'
                      }`}
                    >
                      <div className="flex items-center justify-between gap-2 text-[11px] font-mono">
                        <span
                          className={
                            isSelected ? 'text-[#FDE68A]' : 'text-[#78350F]'
                          }
                        >
                          {record.accessionNumber} · {record.category}
                        </span>
                        {isBookmarked && (
                          <span
                            className={
                              isSelected ? 'text-[#FDE68A]' : 'text-[#78350F]'
                            }
                          >
                            Saved
                          </span>
                        )}
                      </div>
                      <h3 className="font-display text-lg font-semibold leading-snug">
                        {record.title}
                      </h3>
                      <p
                        className={`text-xs line-clamp-2 ${
                          isSelected ? 'text-[#D6CEBE]' : 'text-[#57534E]'
                        }`}
                      >
                        {record.sourceAuthor} · {record.dateOrEra}
                      </p>
                      <p
                        className={`text-[11px] font-mono pt-1 ${
                          isSelected ? 'text-[#FDE68A]/90' : 'text-[#9A3412]'
                        }`}
                      >
                        {record.scriptureParallels.length} Parallel Scripture Passages →
                      </p>
                    </div>
                  );
                })
              )}
            </div>

            {/* Right 8-Column Museum Accession Dossier Viewer */}
            <div className="lg:col-span-8 border border-[#D6CEBE] bg-[#FBF9F5] p-6 sm:p-10 space-y-8">
              {/* Engraved Plate Header for Active Category */}
              <CategoryEngravingPlate category={activeProphecy.category} />

              {/* Dossier Header & Accession Metadata */}
              <div className="space-y-4 border-b border-[#D6CEBE] pb-6">
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div className="flex flex-wrap items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#78350F]">
                    <span>{activeProphecy.accessionNumber}</span>
                    <span aria-hidden="true">·</span>
                    <span>{activeProphecy.category}</span>
                    <span aria-hidden="true">·</span>
                    <span>{activeProphecy.fulfillmentStatus}</span>
                  </div>

                  <button
                    type="button"
                    onClick={() => toggleBookmark(activeProphecy.id)}
                    className="px-3 py-1.5 text-xs font-medium border border-[#D6CEBE] bg-[#F7F4EE] hover:bg-[#EBE6DF] text-[#1C1917] flex items-center gap-1.5 whitespace-nowrap shrink-0 cursor-pointer"
                  >
                    <Bookmark className="w-3.5 h-3.5" />
                    {bookmarkedIds.includes(activeProphecy.id)
                      ? 'Saved in Folio'
                      : 'Save to Folio'}
                  </button>
                </div>

                <h3 className="font-display text-3xl sm:text-4xl font-semibold text-[#1C1917] leading-tight">
                  {activeProphecy.title}
                </h3>
                <p className="text-base text-[#57534E] italic">
                  {activeProphecy.subtitle}
                </p>

                {/* Institutional Accession Definition List (dl) */}
                <dl className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3 pt-4 border-t border-[#D6CEBE] text-xs">
                  <div>
                    <dt className="font-mono uppercase text-[#78716C]">
                      Prophet / Seer / Mystic
                    </dt>
                    <dd className="font-medium text-[#1C1917] mt-0.5">
                      {activeProphecy.sourceAuthor} ({activeProphecy.authorRole})
                    </dd>
                  </div>
                  <div>
                    <dt className="font-mono uppercase text-[#78716C]">
                      Date & Provenance
                    </dt>
                    <dd className="font-medium text-[#1C1917] mt-0.5">
                      {activeProphecy.dateOrEra} · {activeProphecy.location}
                    </dd>
                  </div>
                  <div>
                    <dt className="font-mono uppercase text-[#78716C]">
                      Ecclesiastical Standing
                    </dt>
                    <dd className="font-medium text-[#1C1917] mt-0.5">
                      {activeProphecy.ecclesiasticalStatus}
                    </dd>
                  </div>
                  <div>
                    <dt className="font-mono uppercase text-[#78716C]">
                      Eschatological Watch
                    </dt>
                    <dd className="font-medium text-[#78350F] mt-0.5">
                      {activeProphecy.eschatologicalPhase}
                    </dd>
                  </div>
                </dl>
              </div>

              {/* Verbatim Primary Prophetic Text */}
              <div className="space-y-3">
                <h4 className="text-xs font-mono uppercase tracking-widest text-[#78350F]">
                  VERBATIM PROPHETIC TEXT & PRIMARY DEPOSIT
                </h4>
                <div className="p-6 sm:p-8 bg-[#F7F4EE] border border-[#D6CEBE]">
                  <p className="font-display text-xl sm:text-2xl text-[#1C1917] leading-relaxed whitespace-pre-line">
                    {activeProphecy.primaryText}
                  </p>
                </div>
              </div>

              {/* Theological & Exegetical Synthesis */}
              <div className="space-y-3">
                <h4 className="text-xs font-mono uppercase tracking-widest text-[#57534E]">
                  THEOLOGICAL & PATRISTIC SYNTHESIS
                </h4>
                <p className="text-base leading-relaxed text-[#292524] max-w-prose">
                  {activeProphecy.theologicalCommentary}
                </p>
              </div>

              {/* Key Prophetic Constituents */}
              <div className="space-y-3 pt-4 border-t border-[#D6CEBE]">
                <h4 className="text-xs font-mono uppercase tracking-widest text-[#57534E]">
                  KEY PROPHETIC CONSTITUENTS & MILESTONES
                </h4>
                <ul className="space-y-2 text-sm text-[#292524]">
                  {activeProphecy.keyElements.map((el, i) => (
                    <li key={i} className="flex items-baseline gap-3">
                      <span className="font-mono text-xs text-[#78350F] shrink-0">
                        0{i + 1}.
                      </span>
                      <span>{el}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Parallel Passages from Sacred Scripture */}
              <div className="space-y-4 pt-6 border-t border-[#D6CEBE]">
                <div className="flex items-center justify-between">
                  <h4 className="text-xs font-mono uppercase tracking-widest text-[#9A3412]">
                    PARALLEL PASSAGES FROM SACRED SCRIPTURE ({activeProphecy.scriptureParallels.length})
                  </h4>
                  <span className="text-xs text-[#57534E] font-mono">
                    DOUAY-RHEIMS / VULGATE CONCORDANCE
                  </span>
                </div>

                <div className="space-y-4">
                  {activeProphecy.scriptureParallels.map((parallel, idx) => (
                    <div
                      key={idx}
                      className="p-5 bg-[#F7F4EE] border border-[#D6CEBE] space-y-2"
                    >
                      <div className="flex flex-wrap items-center justify-between gap-2 text-xs font-mono">
                        <span className="font-semibold text-[#9A3412] uppercase">
                          {parallel.reference}
                        </span>
                        <span className="text-[#57534E]">{parallel.testament}</span>
                      </div>
                      <p className="font-display italic text-lg sm:text-xl text-[#1C1917] leading-relaxed">
                        {parallel.text}
                      </p>
                      <p className="text-xs text-[#44403C] pt-1 border-t border-[#D6CEBE]/70">
                        <span className="font-semibold text-[#1C1917]">Exegetical Link: </span>
                        {parallel.correspondenceNote}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================================
            SECTION 03: COMPLETE SCRIPTURE PARALLEL CONCORDANCE MATRIX
        ====================================================================== */}
        <section id="scripture-concordance" className="space-y-6 scroll-mt-24 border-t border-[#D6CEBE] pt-14">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#78350F]">
              <span>03. CONCORDANTIA SACRA</span>
              <span aria-hidden="true">·</span>
              <span>OLD & NEW TESTAMENT HARMONY</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-semibold text-[#1C1917]">
              Synoptic Concordance of Unfulfilled Biblical & Mystic Prophecies
            </h2>
            <p className="text-sm text-[#57534E] max-w-3xl">
              Click any row in the concordance table below to open the full archival dossier and inspect the verbatim texts side by side.
            </p>
          </div>

          <div className="overflow-x-auto border border-[#D6CEBE] bg-[#FBF9F5]">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-[#D6CEBE] bg-[#EBE6DF] text-[11px] font-mono uppercase tracking-wider text-[#44403C]">
                  <th className="py-3.5 px-4">Folio</th>
                  <th className="py-3.5 px-4">Prophetic Event / Oracle</th>
                  <th className="py-3.5 px-4">Primary Source / Seer</th>
                  <th className="py-3.5 px-4">Parallel Scripture Passages</th>
                  <th className="py-3.5 px-4">Fulfillment Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#D6CEBE] text-sm">
                {PROPHECIES_DATA.map((item) => (
                  <tr
                    key={item.id}
                    onClick={() => {
                      setActiveProphecyId(item.id);
                      document
                        .getElementById('prophetic-codex')
                        ?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className={`cursor-pointer transition-colors ${
                      activeProphecy.id === item.id
                        ? 'bg-[#F7F4EE] font-medium'
                        : 'hover:bg-[#F7F4EE]/60'
                    }`}
                  >
                    <td className="py-3.5 px-4 font-mono text-xs text-[#78350F] tabular-nums whitespace-nowrap">
                      {item.accessionNumber}
                    </td>
                    <td className="py-3.5 px-4 font-display text-lg font-semibold text-[#1C1917]">
                      {item.title}
                    </td>
                    <td className="py-3.5 px-4 text-xs text-[#44403C]">
                      {item.sourceAuthor}
                    </td>
                    <td className="py-3.5 px-4 font-mono text-xs text-[#9A3412]">
                      {item.scriptureParallels.map((sp) => sp.reference).join(' · ')}
                    </td>
                    <td className="py-3.5 px-4 text-xs text-[#57534E]">
                      {item.fulfillmentStatus}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* =====================================================================
            SECTION 04: FIVE-PHASE ESCHATOLOGICAL CHRONOLOGY
        ====================================================================== */}
        <section id="eschatological-chronology" className="space-y-8 scroll-mt-24 border-t border-[#D6CEBE] pt-14">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#78350F]">
              <span>04. ORDO TEMPORUM</span>
              <span aria-hidden="true">·</span>
              <span>PATRISTIC & MYSTICAL SEQUENCE</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-semibold text-[#1C1917]">
              The Five Watches of Catholic Eschatology
            </h2>
            <p className="text-sm text-[#57534E] max-w-3xl">
              Synthesizing Sacred Scripture, the Catechism of the Catholic Church (§673–677), the Church Fathers, and approved Marian and mystical revelations into five ordered watches. Select any Watch to filter the Prophetic Codex above.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {ESCHATOLOGICAL_PHASES.map((watch) => {
              const matchingProphecies = PROPHECIES_DATA.filter(
                (p) => p.eschatologicalPhase === watch.phase
              );
              const isSelected = selectedPhaseFilter === watch.phase;
              return (
                <div
                  key={watch.phase}
                  onClick={() => {
                    setSelectedPhaseFilter(
                      isSelected ? 'All' : watch.phase
                    );
                    if (!isSelected && matchingProphecies[0]) {
                      setSelectedCategory('All');
                      setActiveProphecyId(matchingProphecies[0].id);
                      document
                        .getElementById('prophetic-codex')
                        ?.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      setSelectedPhaseFilter(isSelected ? 'All' : watch.phase);
                    }
                  }}
                  className={`p-5 border transition-colors flex flex-col justify-between cursor-pointer ${
                    isSelected
                      ? 'bg-[#1C1917] text-[#FBF9F5] border-[#1C1917]'
                      : 'bg-[#F7F4EE] text-[#1C1917] border-[#D6CEBE] hover:bg-[#EBE6DF]'
                  }`}
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-xs font-mono">
                      <span className={isSelected ? 'text-[#FDE68A]' : 'text-[#78350F]'}>
                        {watch.roman}
                      </span>
                      <span className="tabular-nums">
                        {matchingProphecies.length} Dossiers
                      </span>
                    </div>
                    <h3 className="font-display text-xl font-semibold leading-snug">
                      {watch.phase.replace(/^[IV]+\.\s*/, '')}
                    </h3>
                    <p
                      className={`text-xs leading-relaxed ${
                        isSelected ? 'text-[#D6CEBE]' : 'text-[#44403C]'
                      }`}
                    >
                      {watch.summary}
                    </p>
                  </div>

                  <div className="pt-4 mt-4 border-t border-[#D6CEBE]/40 text-[11px] font-mono">
                    <span className={isSelected ? 'text-[#FDE68A]' : 'text-[#9A3412]'}>
                      {watch.scripturalKey}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* =====================================================================
            SECTION 05: CUSTOMIZABLE DAILY-UPDATED SPIRITUAL RULE & MODULES
            ("...and all the other features that I will indicate to be updated every day")
        ====================================================================== */}
        <section id="daily-rule-modules" className="space-y-8 scroll-mt-24 border-t border-[#D6CEBE] pt-14">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 border-b border-[#D6CEBE] pb-6">
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#78350F]">
                <span>05. REGULA QUOTIDIANA</span>
                <span aria-hidden="true">·</span>
                <span>AUTOMATICALLY ROTATED EVERY DAY ({dailyDossier.formattedDate})</span>
              </div>
              <h2 className="font-display text-3xl sm:text-4xl font-semibold text-[#1C1917]">
                Additional Daily-Updated Prophetic & Devotional Features
              </h2>
              <p className="text-sm text-[#57534E] max-w-2xl">
                Each module below automatically rotates its teaching, examination, or sacramental remedy every day alongside the date, Mass readings, Saint of the Day, and Gospel commentary. You may also add any new daily-updated feature to your rule.
              </p>
            </div>

            <button
              type="button"
              onClick={() => setIsAddFeatureModalOpen(true)}
              className="px-4 py-2.5 text-xs font-medium bg-[#1C1917] text-[#FBF9F5] hover:bg-[#292524] flex items-center gap-2 whitespace-nowrap shrink-0 cursor-pointer"
            >
              <Plus className="w-4 h-4" />
              Add Daily-Updated Feature
            </button>
          </div>

          {/* Toggle Pills for Active Daily Modules */}
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs font-mono uppercase text-[#57534E] mr-2">
              Active Daily Features:
            </span>
            {customDailyFeatures.map((feat) => (
              <button
                key={feat.id}
                type="button"
                onClick={() => toggleCustomFeature(feat.id)}
                className={`px-3 py-1.5 text-xs font-medium border transition-colors flex items-center gap-1.5 whitespace-nowrap shrink-0 cursor-pointer ${
                  feat.enabled
                    ? 'bg-[#EBE6DF] border-[#78350F] text-[#1C1917]'
                    : 'bg-[#FBF9F5] border-[#D6CEBE] text-[#78716C]'
                }`}
              >
                <Check
                  className={`w-3.5 h-3.5 ${
                    feat.enabled ? 'opacity-100 text-[#78350F]' : 'opacity-30'
                  }`}
                />
                {feat.title}
              </button>
            ))}
          </div>

          {/* Daily Rotating Feature Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {customDailyFeatures
              .filter((f) => f.enabled)
              .map((feature) => {
                const entry =
                  feature.dailyEntries[
                    dayOfYearIndex % feature.dailyEntries.length
                  ];
                return (
                  <article
                    key={feature.id}
                    className="p-6 bg-[#F7F4EE] border border-[#D6CEBE] flex flex-col justify-between space-y-4"
                  >
                    <div className="space-y-3">
                      <div className="flex items-center justify-between gap-2 text-xs font-mono uppercase tracking-wider text-[#78350F]">
                        <span>{feature.category}</span>
                        <span>DAILY ROTATION</span>
                      </div>
                      <h3 className="font-display text-2xl font-semibold text-[#1C1917] leading-snug">
                        {entry.heading}
                      </h3>
                      <p className="text-xs text-[#57534E] italic">
                        {entry.source}
                      </p>
                      <p className="text-sm leading-relaxed text-[#292524]">
                        {entry.content}
                      </p>
                    </div>

                    <div className="pt-3 border-t border-[#D6CEBE] flex items-center justify-between text-xs font-mono text-[#9A3412]">
                      <span>{entry.scriptureAnchor}</span>
                      <span>{dailyDossier.isoDate}</span>
                    </div>
                  </article>
                );
              })}
          </div>
        </section>
      </main>

      {/* =====================================================================
          MODAL FOR ADDING NEW DAILY-UPDATED FEATURES
      ====================================================================== */}
      {isAddFeatureModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-4">
          <div className="bg-[#FBF9F5] border border-[#D6CEBE] max-w-lg w-full p-6 sm:p-8 space-y-6">
            <div className="flex items-center justify-between border-b border-[#D6CEBE] pb-4">
              <div>
                <p className="text-xs font-mono uppercase tracking-widest text-[#78350F]">
                  DAILY LITURGICAL & PROPHETIC ENGINE
                </p>
                <h3 className="font-display text-2xl font-semibold text-[#1C1917]">
                  Add Custom Daily-Updated Feature
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setIsAddFeatureModalOpen(false)}
                className="p-1 text-[#57534E] hover:text-[#1C1917] cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleCreateCustomDailyFeature} className="space-y-4">
              <div>
                <label className="block text-xs font-mono uppercase text-[#44403C] mb-1">
                  Feature Name (Updated Daily)
                </label>
                <input
                  type="text"
                  required
                  value={newFeatureTitle}
                  onChange={(e) => setNewFeatureTitle(e.target.value)}
                  placeholder="e.g., Daily St. Padre Pio Maxim or Daily Three Days of Darkness Preparation"
                  className="w-full px-3 py-2 text-sm bg-[#F7F4EE] border border-[#D6CEBE] text-[#1C1917]"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono uppercase text-[#44403C] mb-1">
                    Tradition / Category
                  </label>
                  <input
                    type="text"
                    value={newFeatureCategory}
                    onChange={(e) => setNewFeatureCategory(e.target.value)}
                    placeholder="e.g., Marian Consecration"
                    className="w-full px-3 py-2 text-sm bg-[#F7F4EE] border border-[#D6CEBE] text-[#1C1917]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-mono uppercase text-[#44403C] mb-1">
                    Parallel Scripture Anchor
                  </label>
                  <input
                    type="text"
                    value={newFeatureScripture1}
                    onChange={(e) => setNewFeatureScripture1(e.target.value)}
                    placeholder="e.g., Luke 21:36 · Revelation 12:11"
                    className="w-full px-3 py-2 text-sm bg-[#F7F4EE] border border-[#D6CEBE] text-[#1C1917]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono uppercase text-[#44403C] mb-1">
                  Today’s Heading & Source Attribution
                </label>
                <input
                  type="text"
                  value={newFeatureHeading1}
                  onChange={(e) => setNewFeatureHeading1(e.target.value)}
                  placeholder="e.g., Prayer of Reparation to the Holy Face of Jesus"
                  className="w-full px-3 py-2 text-sm bg-[#F7F4EE] border border-[#D6CEBE] text-[#1C1917]"
                />
              </div>

              <div>
                <label className="block text-xs font-mono uppercase text-[#44403C] mb-1">
                  Daily Text / Prophetic Meditation / Prayer
                </label>
                <textarea
                  rows={4}
                  required
                  value={newFeatureContent1}
                  onChange={(e) => setNewFeatureContent1(e.target.value)}
                  placeholder="Enter the daily prayer, prophetic text, or spiritual examination..."
                  className="w-full px-3 py-2 text-sm bg-[#F7F4EE] border border-[#D6CEBE] text-[#1C1917]"
                />
              </div>

              <div className="flex items-center justify-end gap-3 pt-4 border-t border-[#D6CEBE]">
                <button
                  type="button"
                  onClick={() => setIsAddFeatureModalOpen(false)}
                  className="px-4 py-2 text-xs font-medium border border-[#D6CEBE] text-[#44403C] hover:text-[#1C1917] cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 text-xs font-medium bg-[#1C1917] text-[#FBF9F5] hover:bg-[#292524] cursor-pointer"
                >
                  Save Daily Feature
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* =====================================================================
          CLEAN ARCHIVAL FOOTER
      ====================================================================== */}
      <footer className="border-t border-[#D6CEBE] bg-[#F7F4EE] px-6 lg:px-12 py-10 mt-16">
        <div className="max-w-[1360px] mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 text-xs text-[#57534E]">
          <div className="space-y-1">
            <p className="font-display text-lg font-semibold text-[#1C1917]">
              Eleventh Hour — Catholic Prophetic & Daily Liturgical Archive
            </p>
            <p>
              In conformity with the decrees of Pope Urban VIII, private revelations remain subject to the judgment of Holy Mother Church.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-4 font-mono text-[11px]">
            <a href="#daily-sanctuary" className="hover:text-[#1C1917]">
              Daily Mass Lectionary
            </a>
            <span aria-hidden="true">·</span>
            <a href="#prophetic-codex" className="hover:text-[#1C1917]">
              Prophetic Codex
            </a>
            <span aria-hidden="true">·</span>
            <a href="#scripture-concordance" className="hover:text-[#1C1917]">
              Scripture Concordance
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
