import React from 'react';
import { ProphecyCategory } from '../data/propheciesData';

export function HeroScriptoriumIllumination() {
  return (
    <div className="relative w-full h-full min-h-[360px] bg-[#181411] text-[#EBE6DF] overflow-hidden flex flex-col justify-between p-8 border border-[#D6CEBE]">
      {/* Subtle architectural lancet & rose window sacred geometry */}
      <svg
        viewBox="0 0 800 540"
        className="absolute inset-0 w-full h-full object-cover opacity-90 pointer-events-none"
        aria-hidden="true"
      >
        <defs>
          <radialGradient id="goldHalo" cx="50%" cy="44%" r="48%">
            <stop offset="0%" stopColor="#D97706" stopOpacity="0.32" />
            <stop offset="55%" stopColor="#78350F" stopOpacity="0.12" />
            <stop offset="100%" stopColor="#181411" stopOpacity="0" />
          </radialGradient>
          <linearGradient id="goldLeaf" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FDE68A" />
            <stop offset="50%" stopColor="#D97706" />
            <stop offset="100%" stopColor="#92400E" />
          </linearGradient>
        </defs>

        {/* Ambient illumination */}
        <rect width="800" height="540" fill="#161311" />
        <circle cx="400" cy="240" r="260" fill="url(#goldHalo)" />

        {/* Outer Gothic Lancet Arch */}
        <path
          d="M 130,520 L 130,240 Q 130,55 400,25 Q 670,55 670,240 L 670,520"
          fill="none"
          stroke="url(#goldLeaf)"
          strokeWidth="1.5"
          strokeOpacity="0.45"
        />
        <path
          d="M 148,520 L 148,245 Q 148,75 400,45 Q 652,75 652,245 L 652,520"
          fill="none"
          stroke="#D6CEBE"
          strokeWidth="0.75"
          strokeOpacity="0.25"
        />

        {/* 24 Solar Rays of the Eleventh Hour & Parousia */}
        {Array.from({ length: 24 }).map((_, i) => {
          const angle = (i * 15 * Math.PI) / 180;
          const x1 = 400 + Math.cos(angle) * 58;
          const y1 = 225 + Math.sin(angle) * 58;
          const r2 = i % 2 === 0 ? 195 : 135;
          const x2 = 400 + Math.cos(angle) * r2;
          const y2 = 225 + Math.sin(angle) * r2;
          return (
            <line
              key={i}
              x1={x1}
              y1={y1}
              x2={x2}
              y2={y2}
              stroke="url(#goldLeaf)"
              strokeWidth={i % 2 === 0 ? '1.1' : '0.6'}
              strokeOpacity={i % 2 === 0 ? '0.55' : '0.28'}
            />
          );
        })}

        {/* Concentric Horologium / Eleventh Hour Dial */}
        <circle
          cx="400"
          cy="225"
          r="142"
          fill="none"
          stroke="url(#goldLeaf)"
          strokeWidth="1.2"
          strokeOpacity="0.5"
        />
        <circle
          cx="400"
          cy="225"
          r="118"
          fill="none"
          stroke="#EBE6DF"
          strokeWidth="0.6"
          strokeDasharray="3 5"
          strokeOpacity="0.35"
        />
        <circle
          cx="400"
          cy="225"
          r="56"
          fill="#1C1917"
          stroke="url(#goldLeaf)"
          strokeWidth="1.5"
        />

        {/* Twelve Crown Stars (Revelation 12:1) */}
        {Array.from({ length: 12 }).map((_, idx) => {
          const angle = ((idx * 30 - 90) * Math.PI) / 180;
          const cx = 400 + Math.cos(angle) * 130;
          const cy = 225 + Math.sin(angle) * 130;
          const isEleventhHour = idx === 11;
          return (
            <g key={idx} transform={`translate(${cx}, ${cy})`}>
              <circle
                r={isEleventhHour ? '5.5' : '2.8'}
                fill={isEleventhHour ? '#FDE68A' : '#D97706'}
                opacity={isEleventhHour ? '1' : '0.75'}
              />
              {isEleventhHour && (
                <circle
                  r="10"
                  fill="none"
                  stroke="#FDE68A"
                  strokeWidth="1"
                  strokeOpacity="0.8"
                />
              )}
            </g>
          );
        })}

        {/* Central Luminous Cross (Sign of the Son of Man — Matt 24:30 & Diary §83) */}
        <path
          d="M 400,178 L 400,272 M 366,214 L 434,214"
          stroke="#FDE68A"
          strokeWidth="3"
          strokeLinecap="square"
        />
        {/* Alpha and Omega */}
        <text
          x="375"
          y="246"
          fill="#D6CEBE"
          fontSize="14"
          fontFamily="Cormorant Garamond, Georgia, serif"
          textAnchor="middle"
          opacity="0.85"
        >
          Α
        </text>
        <text
          x="425"
          y="246"
          fill="#D6CEBE"
          fontSize="14"
          fontFamily="Cormorant Garamond, Georgia, serif"
          textAnchor="middle"
          opacity="0.85"
        >
          Ω
        </text>

        {/* Two Pillars of St. John Bosco & The Seven-Sealed Scroll at Base */}
        <g opacity="0.65">
          {/* Left Pillar: Auxilium Christianorum */}
          <rect x="215" y="290" width="16" height="145" fill="none" stroke="url(#goldLeaf)" strokeWidth="1" />
          <line x1="209" y1="290" x2="237" y2="290" stroke="url(#goldLeaf)" strokeWidth="1.5" />
          <line x1="207" y1="435" x2="239" y2="435" stroke="url(#goldLeaf)" strokeWidth="1.5" />

          {/* Right Pillar: Salus Credentium */}
          <rect x="569" y="275" width="16" height="160" fill="none" stroke="url(#goldLeaf)" strokeWidth="1" />
          <line x1="563" y1="275" x2="591" y2="275" stroke="url(#goldLeaf)" strokeWidth="1.5" />
          <line x1="561" y1="435" x2="593" y2="435" stroke="url(#goldLeaf)" strokeWidth="1.5" />
          <circle cx="577" cy="260" r="9" fill="none" stroke="#FDE68A" strokeWidth="1.3" />
        </g>

        {/* Open Illuminated Codex at Lectern Base */}
        <path
          d="M 290,415 Q 345,402 400,418 Q 455,402 510,415 L 520,455 Q 460,442 400,458 Q 340,442 280,455 Z"
          fill="#26211D"
          stroke="url(#goldLeaf)"
          strokeWidth="1.2"
        />
        <line x1="400" y1="418" x2="400" y2="458" stroke="url(#goldLeaf)" strokeWidth="1.2" />
        {/* Seven Seals hanging from the Codex (Revelation 5:1) */}
        {[325, 348, 371, 394, 417, 440, 463].map((xPos, i) => (
          <g key={i}>
            <line x1={xPos} y1="452" x2={xPos} y2="472" stroke="#D97706" strokeWidth="1" />
            <circle cx={xPos} cy="475" r="4" fill="#9A3412" stroke="#FDE68A" strokeWidth="0.7" />
          </g>
        ))}
      </svg>

      {/* Top Archival Plate Header */}
      <div className="relative z-10 flex items-center justify-between text-xs tracking-widest uppercase text-[#D6CEBE]/80 font-mono border-b border-[#D6CEBE]/20 pb-3">
        <span>FIG. I · HOROLOGIUM PROPHETICUM</span>
        <span>HORA UNDECIMA · MATTHEW 20:6</span>
      </div>

      {/* Bottom Caption Plate */}
      <div className="relative z-10 pt-44">
        <div className="bg-[#181411]/90 backdrop-blur-xs border-t border-[#D6CEBE]/25 pt-4">
          <p className="font-display italic text-lg text-[#FDE68A] leading-snug">
            “Before I come as the just Judge, I am coming first as the King of Mercy... Then the sign of the Cross will be seen in the sky.”
          </p>
          <p className="text-xs text-[#D6CEBE]/75 mt-1.5 font-mono">
            DIARY OF ST. MARIA FAUSTINA KOWALSKA, §83 · PARALLEL: MATTHEW 24:29–30
          </p>
        </div>
      </div>
    </div>
  );
}

export function CategoryEngravingPlate({ category }: { category: Exclude<ProphecyCategory, 'All'> }) {
  return (
    <div className="w-full h-36 bg-[#1C1917] text-[#FBF9F5] border border-[#D6CEBE] relative overflow-hidden flex items-center justify-between px-6">
      <div className="relative z-10 max-w-md">
        <p className="text-[11px] font-mono uppercase tracking-widest text-[#D97706]">
          ARCHIVAL FOLIO · {category.toUpperCase()}
        </p>
        <p className="font-display text-xl text-[#FBF9F5] mt-1">
          {category === 'Old Testament (Unfulfilled)' && 'The Prophets of Israel, The Third Temple & The Day of the Lord'}
          {category === 'New Testament (Unfulfilled)' && 'The Apostolic Apocalypse, The Two Witnesses & The Parousia'}
          {category === 'Marian Apparitions' && 'Fatima, Akita, Quito, La Salette, Kibeho & Garabandal'}
          {category === 'Diary of St. Faustina' && 'Secretary of Divine Mercy: The Sign in the Heavens (§83 & §1732)'}
          {category === 'Seers of Medjugorje' && 'The Ten Secrets, The Parchment of Mirjana & The Permanent Sign'}
          {category === 'Bl. Anne Catherine Emmerich' && 'Visions of the Two Popes, The Strange Church & The Abyss'}
          {category === 'Bl. Marie-Julie Jahenny' && 'The Stigmatist of La Fraudais & The Three Days of Darkness'}
          {category === 'Saints, Stigmatists & Seers' && 'St. John Bosco, St. Louis de Montfort, St. Hildegard & Ven. Holzhauser'}
        </p>
      </div>
      <svg viewBox="0 0 160 120" className="w-36 h-28 opacity-75 shrink-0" aria-hidden="true">
        <circle cx="80" cy="60" r="46" fill="none" stroke="#D97706" strokeWidth="1" strokeOpacity="0.6" />
        <circle cx="80" cy="60" r="36" fill="none" stroke="#D6CEBE" strokeWidth="0.6" strokeDasharray="2 4" />
        <path d="M 80,22 L 80,98 M 52,50 L 108,50" stroke="#FDE68A" strokeWidth="1.8" />
        <circle cx="80" cy="50" r="6" fill="#1C1917" stroke="#FDE68A" strokeWidth="1.2" />
      </svg>
    </div>
  );
}
