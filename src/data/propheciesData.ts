export type ProphecyCategory =
  | 'All'
  | 'Old Testament (Unfulfilled)'
  | 'New Testament (Unfulfilled)'
  | 'Marian Apparitions'
  | 'Diary of St. Faustina'
  | 'Seers of Medjugorje'
  | 'Bl. Anne Catherine Emmerich'
  | 'Bl. Marie-Julie Jahenny'
  | 'Saints, Stigmatists & Seers';

export type EschatologicalPhase =
  | 'I. Pre-Tribulation & Illumination of Conscience'
  | 'II. Purification & The Three Days of Darkness'
  | 'III. Triumph of the Immaculate Heart & Era of Peace'
  | 'IV. Final Rebellion, Two Witnesses & Antichrist'
  | 'V. Glorious Parousia & New Heavens and Earth';

export interface ScriptureParallel {
  reference: string;
  testament: 'Old Testament' | 'New Testament';
  text: string;
  correspondenceNote: string;
}

export interface ProphecyRecord {
  id: string;
  accessionNumber: string;
  title: string;
  subtitle: string;
  sourceAuthor: string;
  authorRole: string;
  dateOrEra: string;
  location: string;
  category: Exclude<ProphecyCategory, 'All'>;
  ecclesiasticalStatus: string;
  eschatologicalPhase: EschatologicalPhase;
  fulfillmentStatus: 'Unfulfilled — Awaiting Eschatological Completion' | 'Unfolding in Present Epoch' | 'Conditional / Mitigable by Prayer & Fasting';
  primaryText: string;
  theologicalCommentary: string;
  keyElements: string[];
  scriptureParallels: ScriptureParallel[];
}

export const PROPHECY_CATEGORIES: ProphecyCategory[] = [
  'All',
  'Old Testament (Unfulfilled)',
  'New Testament (Unfulfilled)',
  'Marian Apparitions',
  'Diary of St. Faustina',
  'Seers of Medjugorje',
  'Bl. Anne Catherine Emmerich',
  'Bl. Marie-Julie Jahenny',
  'Saints, Stigmatists & Seers',
];

export const PROPHECIES_DATA: ProphecyRecord[] = [
  // ============================================================================
  // OLD TESTAMENT (UNFULFILLED)
  // ============================================================================
  {
    id: 'ot-isaiah-peace-new-creation',
    accessionNumber: 'CODEX-OT-01',
    title: 'The Messianic Peace & The New Heavens and New Earth',
    subtitle: 'Universal reconciliation of creation and the cessation of war under the Root of Jesse',
    sourceAuthor: 'Prophet Isaiah',
    authorRole: 'Major Prophet of Judah',
    dateOrEra: 'c. 740–681 BC (Isaiah 11:6–12; 65:17–25; 2:2–4)',
    location: 'Jerusalem, Kingdom of Judah',
    category: 'Old Testament (Unfulfilled)',
    ecclesiasticalStatus: 'Canonical Sacred Scripture — Public Revelation (De Fide)',
    eschatologicalPhase: 'V. Glorious Parousia & New Heavens and Earth',
    fulfillmentStatus: 'Unfulfilled — Awaiting Eschatological Completion',
    primaryText:
      '“They shall beat their swords into plowshares, and their spears into pruning hooks: nation shall not lift up sword against nation, neither shall they Be exercised any more to war... The wolf shall dwell with the lamb: and the leopard shall lie down with the kid: the calf and the lion, and the sheep shall abide together, and a little child shall lead them... They shall not hurt nor kill in all My holy mountain, for the earth is filled with the knowledge of the Lord, as the covering waters of the sea. For behold I create new heavens, and a new earth: and the former things shall not be in remembrance, and they shall not come upon the heart.” (Isaiah 2:4; 11:6, 9; 65:17)',
    theologicalCommentary:
      'While inaugurated spiritually in the Church at Pentecost, the full cosmic and historical realization of Isaiah’s prophecy remains unfulfilled. Catholic exegetes and the Fathers distinguish two dimensions: first, auniversal spiritual triumph of the Gospel across all nations prior to the final end (paralleled in Marian prophecies of the Era of Peace), and second, the definitive cosmic palingenesis (renewal of creation) at the Parousia when death and predation are abolished forever.',
    keyElements: [
      'Universal disarmament of nations under the dominion of Christ the King',
      'Earth filled with the contemplative knowledge of the Lord as waters cover the sea',
      'Restoration of preternatural harmony across the material creation',
      'Creation of the New Heavens and the New Earth (Isaiah 65:17; 66:22)'
    ],
    scriptureParallels: [
      {
        reference: '2 Peter 3:12–13',
        testament: 'New Testament',
        text: '“Waiting for and hasting unto the coming of the day of the Lord, by which the heavens burning shall be dissolved, and the elements shall melt with the heat of fire? But we look for new heavens and a new earth according to His promises, in which justice dwelleth.”',
        correspondenceNote: 'St. Peter explicitly cites Isaiah 65:17 as an unfulfilled promise awaiting the Day of the Lord.'
      },
      {
        reference: 'Revelation 21:1–4',
        testament: 'New Testament',
        text: '“And I saw a new heaven and a new earth. For the first heaven and the first earth was gone, and the sea is now no more... And God shall wipe away all tears from their eyes: and death shall be no more.”',
        correspondenceNote: 'St. John beholds in Patmos the eschatological fulfillment of Isaiah’s new creation oracle.'
      },
      {
        reference: 'Romans 8:19–22',
        testament: 'New Testament',
        text: '“For the expectation of the creature waiteth for the revelation of the sons of God... Because the creature also itself shall be delivered from the servitude of corruption, into the liberty of the glory of the children of God.”',
        correspondenceNote: 'Explains why Isaiah’s wolf and lamb imagery points to the liberation of the material cosmos from corruption.'
      }
    ]
  },
  {
    id: 'ot-ezekiel-zechariah-conversion-israel',
    accessionNumber: 'CODEX-OT-02',
    title: 'The Eschatological Ingathering & Conversion of Israel to the Pierced Messiah',
    subtitle: 'The pouring out of the Spirit of grace and prayers upon the House of David',
    sourceAuthor: 'Prophets Zechariah, Ezekiel & Hosea',
    authorRole: 'Major & Minor Prophets of Israel',
    dateOrEra: 'c. 750–520 BC (Zechariah 12:10–14; Ezekiel 37:21–28; Hosea 3:4–5)',
    location: 'Jerusalem & Babylon',
    category: 'Old Testament (Unfulfilled)',
    ecclesiasticalStatus: 'Canonical Sacred Scripture & Catechism of the Catholic Church §674',
    eschatologicalPhase: 'IV. Final Rebellion, Two Witnesses & Antichrist',
    fulfillmentStatus: 'Unfulfilled — Awaiting Eschatological Completion',
    primaryText:
      '“And I will pour out upon the house of David, and upon the inhabitants of Jerusalem, the spirit of grace, and of prayers: and they shall look upon Me, whom they have pierced: and they shall mourn for Him as one mourneth for an only son, and they shall grieve over Him, as the manner is to grieve for the death of the firstborn. In that day there shall be a great lamentation in Jerusalem... For the children of Israel shall sit many days without king, and without prince, and without sacrifice, and without altar: and after this the children of Israel shall return, and shall seek the Lord their God, and David their king: and they shall fear the Lord, and His goodness in the last days.” (Zechariah 12:10–11; Hosea 3:4–5)',
    theologicalCommentary:
      'As affirmed in the Catechism of the Catholic Church (§674), the glorious Messiah’s coming is suspended at every moment of history until His recognition by “all Israel” (Romans 11:26). The Old Testament prophets foretell that in “the last days” (acharit hayamim), after a prolonged dispersion without temple sacrifice, the remnant of Israel will collectively recognize the Pierced One as the true Messiah and enter the One Flock under the One Shepherd (Ezekiel 37:24).',
    keyElements: [
      'Effusion of the Spirit of grace and supplication upon the House of David',
      'Collective recognition and penitential mourning over the Pierced Messiah',
      'Return to seek the Lord and the true Son of David “in the last days” (Hosea 3:5)',
      'Union of the two sticks into one Messianic sanctuary forever (Ezekiel 37:22–28)'
    ],
    scriptureParallels: [
      {
        reference: 'Romans 11:25–27',
        testament: 'New Testament',
        text: '“For I would not have you ignorant, brethren, of this mystery... that blindness in part has happened in Israel, until the fullness of the Gentiles should come in. And so all Israel should be saved, as it is written: There shall come out of Sion, he that shall deliver, and shall turn away ungodliness from Jacob.”',
        correspondenceNote: 'St. Paul quotes Isaiah 59:20–21 to confirm the future corporate conversion of Israel after the fullness of the Gentiles enters the Church.'
      },
      {
        reference: 'Matthew 23:38–39',
        testament: 'New Testament',
        text: '“Behold, your house shall be left to you, desolate. For I say to you, you shall not see Me henceforth till you say: Blessed is He that cometh in the name of the Lord.”',
        correspondenceNote: 'Christ directly links His Second Coming to Jerusalem’s future acclamation of Him as Messianic King.'
      },
      {
        reference: 'Revelation 1:7',
        testament: 'New Testament',
        text: '“Behold, He cometh with the clouds, and every eye shall see Him, and they also that pierced Him. And all the tribes of the earth shall bewail themselves because of Him. Even so. Amen.”',
        correspondenceNote: 'Applies Zechariah 12:10 to the final manifestation of Jesus Christ.'
      }
    ]
  },
  {
    id: 'ot-daniel-final-antichrist-tribulation',
    accessionNumber: 'CODEX-OT-03',
    title: 'The Little Horn, The Abomination of Desolation & The 1,260 Days',
    subtitle: 'Daniel’s eschatological vision of the final persecutor of the saints and the intervention of St. Michael',
    sourceAuthor: 'Prophet Daniel',
    authorRole: 'Major Prophet in the Babylonian & Persian Courts',
    dateOrEra: 'c. 605–536 BC (Daniel 7:23–27; 9:27; 11:36–45; 12:1–13)',
    location: 'Babylon & Susa',
    category: 'Old Testament (Unfulfilled)',
    ecclesiasticalStatus: 'Canonical Sacred Scripture — Public Revelation (De Fide)',
    eschatologicalPhase: 'IV. Final Rebellion, Two Witnesses & Antichrist',
    fulfillmentStatus: 'Unfulfilled — Awaiting Eschatological Completion',
    primaryText:
      '“And he shall speak words against the High One, and shall crush the saints of the Most High: and he shall think himself able to change times and laws, and they shall be delivered into his hand until a time, and times, and half a time. And at that time shall Michael rise up, the great prince, who standeth for the children of thy people: and a time shall come, such as never was from the time that nations began, even until that time. And at that time shall thy people be saved, every one that shall be found written in the book. And many of those that sleep in the dust of the earth, shall awake: some unto life everlasting, and others unto reproach, to see it always.” (Daniel 7:25; 12:1–2)',
    theologicalCommentary:
      'While Antiochus IV Epiphanes (167 BC) served as a historical type, both Christ (Matthew 24:15) and the Church Fathers (St. Irenaeus, St. Jerome, St. Hippolytus, St. Thomas Aquinas) teach that Daniel’s prophecies of the “Little Horn,” the wilful king who exalts himself above every god (Daniel 11:36), the “abomination of desolation,” and the three-and-a-half years (“a time, times, and half a time” = 1,260 days / 42 months) reach their definitive fulfillment only under the final personal Antichrist immediately preceding the General Resurrection (Daniel 12:2).',
    keyElements: [
      'Rise of the final Lawless King who exalts himself above every god (Daniel 11:36)',
      'Attempt to abolish liturgical sacrifice and change sacred times and laws (Daniel 7:25; 9:27)',
      'Measured persecution lasting “a time, times, and half a time” (3.5 years / 1,260 days)',
      'Unprecedented Great Tribulation in which St. Michael the Archangel arises to defend the Church (Daniel 12:1)',
      'Immediately followed by the Resurrection of the Dead unto everlasting life or judgment (Daniel 12:2)'
    ],
    scriptureParallels: [
      {
        reference: 'Matthew 24:15, 21',
        testament: 'New Testament',
        text: '“When therefore you shall see the abomination of desolation, which was spoken of by Daniel the prophet, standing in the holy place: he that readeth let him understand... For there shall be then great tribulation, such as hath not been from the beginning of the world until now, neither shall be.”',
        correspondenceNote: 'Our Lord explicitly points future believers back to Daniel’s prophecy for the eschatological crisis.'
      },
      {
        reference: '2 Thessalonians 2:3–4',
        testament: 'New Testament',
        text: '“Let no man deceive you by any means, for unless there come a revolt first, and the man of sin be revealed, the son of perdition, who opposeth, and is lifted up above all that is called God, or that is worshipped, so that he sitteth in the temple of God, shewing himself as if he were God.”',
        correspondenceNote: 'St. Paul directly quotes Daniel 11:36 to describe the personal Antichrist.'
      },
      {
        reference: 'Revelation 13:5–7',
        testament: 'New Testament',
        text: '“And there was given to him a mouth speaking great things and blasphemies: and power was given to him to do two and forty months... And it was given unto him to make war with the saints, and to overcome them.”',
        correspondenceNote: 'Mirrors Daniel 7:25 both in blasphemous speech, war against the saints, and the 42-month duration.'
      }
    ]
  },
  {
    id: 'ot-malachi-return-of-elijah',
    accessionNumber: 'CODEX-OT-04',
    title: 'The Return of Elijah the Tishbite Before the Great Day of the Lord',
    subtitle: 'The final prophetic mission of reconciliation and conversion of Israel before Judgment',
    sourceAuthor: 'Prophet Malachi & Jesus Ben Sirach',
    authorRole: 'Last Old Testament Prophet & Wisdom Scribe',
    dateOrEra: 'c. 430 BC & c. 180 BC (Malachi 4:5–6 [3:23–24]; Sirach 48:10)',
    location: 'Jerusalem',
    category: 'Old Testament (Unfulfilled)',
    ecclesiasticalStatus: 'Canonical Sacred Scripture & Patristic Consensus',
    eschatologicalPhase: 'IV. Final Rebellion, Two Witnesses & Antichrist',
    fulfillmentStatus: 'Unfulfilled — Awaiting Eschatological Completion',
    primaryText:
      '“Behold I will send you Elias the prophet, before the coming of the great and dreadful day of the Lord. And he shall turn the heart of the fathers to the children, and the heart of the children to their fathers: lest I come, and strike the earth with anathema.” (Malachi 4:5–6) — “Who art registered in the judgments of times to appease the wrath of the Lord, to reconcile the heart of the father to the son, and to restore the tribes of Jacob.” (Sirach 48:10)',
    theologicalCommentary:
      'In Matthew 17:11–12, after the death of St. John the Baptist (who came “in the spirit and power of Elijah” at the First Advent), Jesus still speaks in the future tense: “Elias indeed shall come, and restore all things.” St. Augustine (*City of God* XX.29), St. Gregory the Great, and St. Thomas Aquinas teach that Elijah—who never tasted death but was taken up in a fiery chariot (2 Kings 2:11)—will return in person at the end of the world alongside Enoch to preach against the Antichrist and convert the tribes of Jacob to Christ.',
    keyElements: [
      'Personal return of Elijah before the “great and dreadful Day of the Lord”',
      'Reconciliation of the fathers (Patriarchs) with their descendants through faith in Christ',
      'Restoration of the tribes of Jacob (Sirach 48:10)',
      'Preaching in sackcloth alongside Enoch as the Two Witnesses before martyrdom and resurrection'
    ],
    scriptureParallels: [
      {
        reference: 'Matthew 17:10–11',
        testament: 'New Testament',
        text: '“And His disciples asked Him, saying: Why then do the scribes say that Elias must come first? But He answering, said to them: Elias indeed shall come, and restore all things.”',
        correspondenceNote: 'Spoken after John the Baptist’s beheading, confirming a future eschatological mission of Elijah himself.'
      },
      {
        reference: 'Revelation 11:3–6',
        testament: 'New Testament',
        text: '“And I will give unto My two witnesses, and they shall prophesy a thousand two hundred sixty days, clothed in sackcloth... These have power to shut heaven, that it rain not in the days of their prophecy.”',
        correspondenceNote: 'The power to shut heaven so it does not rain for 3.5 years is the signature miracle of Elijah (1 Kings 17:1; James 5:17).'
      }
    ]
  },
  {
    id: 'ot-ezekiel-gog-magog-coalition',
    accessionNumber: 'CODEX-OT-05',
    title: 'The Final Siege of Gog and Magog Against the Camp of the Saints',
    subtitle: 'The ultimate global confederacy against the Church at the close of history and its supernatural destruction',
    sourceAuthor: 'Prophet Ezekiel',
    authorRole: 'Priest & Major Prophet in Exile',
    dateOrEra: 'c. 585 BC (Ezekiel 38:1–23; 39:1–16)',
    location: 'Tel-abib by the River Chebar, Babylon',
    category: 'Old Testament (Unfulfilled)',
    ecclesiasticalStatus: 'Canonical Sacred Scripture — Public Revelation (De Fide)',
    eschatologicalPhase: 'IV. Final Rebellion, Two Witnesses & Antichrist',
    fulfillmentStatus: 'Unfulfilled — Awaiting Eschatological Completion',
    primaryText:
      '“After many days thou shalt be visited: at the end of years thou shalt come to the land that isreturned from the sword, and is gathered out of many nations... Thou shalt ascend, and come like a storm, and like a cloud to cover the land, thou and all thy bands, and many people with thee... And I will call in the sword against him in all My mountains, saith the Lord God: every man’s sword shall be pointed against his brother. And I will judge him with pestilence, and with blood, and with violent rain, and vast hailstones: I will rain fire and brimstone upon him, and upon his army, and upon the many nations that are with him.” (Ezekiel 38:8–9, 21–22)',
    theologicalCommentary:
      'That Ezekiel 38–39 was not exhausted in ancient history is proven by St. John’s Apocalypse (Revelation 20:7–9), which explicitly invokes “Gog and Magog” at the very end of the world. St. Augustine (*City of God* XX.11) explains that Gog (“the roof”) and Magog (“from the roof”) signify the final global encirclement of the “camp of the saints and the beloved city” (the universal Catholic Church) by the deceived nations in the final Satanic assault, which is terminated not by human arms but by fire descending directly from God out of heaven.',
    keyElements: [
      'Occurs explicitly “at the end of years” and “in the last days” (Ezekiel 38:8, 16)',
      'Global coalition from the four quarters of the earth encircling the peaceful Sanctuary',
      'Supernatural defeat by seismic upheaval, mutual confusion, and fire/brimstone from heaven',
      'Final manifestation of God’s holiness before the eyes of all nations (Ezekiel 38:23)'
    ],
    scriptureParallels: [
      {
        reference: 'Revelation 20:7–9',
        testament: 'New Testament',
        text: '“And when the thousand years shall be finished, Satan shall be loosed out of his prison, and shall go forth, and seduce the nations, which are over the four quarters of the earth, Gog, and Magog, and shall gather them together to battle... And they surrounded the camp of the saints, and the beloved city. And there came down fire from God out of heaven, and devoured them.”',
        correspondenceNote: 'Explicitly places the fulfillment of Ezekiel’s Gog and Magog oracle at the final Satanic loosing immediately before the Great White Throne Judgment.'
      }
    ]
  },
  {
    id: 'ot-zechariah-joel-cosmic-day-of-the-lord',
    accessionNumber: 'CODEX-OT-06',
    title: 'Cosmic Signs in the Heavens, The Mount of Olives & Valley of Jehoshaphat',
    subtitle: 'The darkening of sun and moon, the descent of the Lord with all His saints, and the Judgment of Nations',
    sourceAuthor: 'Prophets Zechariah & Joel',
    authorRole: 'Minor Prophets of Judah',
    dateOrEra: 'c. 520 BC & c. 500 BC (Zechariah 14:4–9; Joel 2:30–31; 3:1–16)',
    location: 'Jerusalem',
    category: 'Old Testament (Unfulfilled)',
    ecclesiasticalStatus: 'Canonical Sacred Scripture — Public Revelation (De Fide)',
    eschatologicalPhase: 'V. Glorious Parousia & New Heavens and Earth',
    fulfillmentStatus: 'Unfulfilled — Awaiting Eschatological Completion',
    primaryText:
      '“I will shew wonders in the heavens and in the earth, blood, and fire, and vapour of smoke. The sun shall be turned into darkness, and the moon into blood: before the great and dreadful day of the Lord doth come... Let the nations be aroused, and come up to the valley of Josaphat: for there I will sit to judge all nations round about... And His feet shall stand in that day upon the mount of Olives, which is over against Jerusalem toward the east: and the mount of Olives shall be divided in the midst thereof to the east, and to the west with a very great chasm... and the Lord my God shall come, and all the saints with Him.” (Joel 2:30–31; 3:12; Zechariah 14:4–5)',
    theologicalCommentary:
      'While St. Peter cited the beginning of Joel’s oracle (the outpouring of the Spirit in Joel 2:28–29) at Pentecost (Acts 2:16–20), the cosmic signs of the darkening of the sun, the moon turning to blood, the gathering of all nations for judgment in the Valley of Jehoshaphat (“Yahweh Judges”), and the descent of the Lord accompanied by “all the saints” over the Mount of Olives pertain to the Second Coming and the General Judgment of the Nations.',
    keyElements: [
      'Extinction of solar and lunar light prior to the Great Day of the Lord (Joel 2:31; 3:15)',
      'Return of the Lord accompanied by “all the saints” (Zechariah 14:5)',
      'Return at the Mount of Olives, matching the angelic promise at the Ascension (Acts 1:11–12)',
      'Universal convocation and separation of the nations in the Valley of Judgment (Joel 3:2, 12)'
    ],
    scriptureParallels: [
      {
        reference: 'Acts 1:11–12',
        testament: 'New Testament',
        text: '“This Jesus who is taken up from you into heaven, shall so come, as you have seen Him going into heaven. Then they returned to Jerusalem from the mount that is called Olivet.”',
        correspondenceNote: 'The two angels at the Ascension on Mount Olivet confirm Zechariah 14:4 regarding the manner and locus of Christ’s return.'
      },
      {
        reference: 'Matthew 25:31–32',
        testament: 'New Testament',
        text: '“And when the Son of man shall come in His majesty, and all the angels with Him, then shall He sit upon the seat of His majesty. And all nations shall be gathered together before Him, and He shall separate them one from another.”',
        correspondenceNote: 'Christ’s discourse on the General Judgment directly unfolds Joel 3:12 (“there I will sit to judge all nations”).'
      },
      {
        reference: '1 Thessalonians 3:13',
        testament: 'New Testament',
        text: '“To confirm your hearts without blame, in holiness, before God and our Father, at the coming of our Lord Jesus Christ, with all His saints. Amen.”',
        correspondenceNote: 'St. Paul quotes Zechariah 14:5 (“and the Lord my God shall come, and all the saints with Him”).'
      }
    ]
  },
  {
    id: 'ot-nt-third-temple-of-israel',
    accessionNumber: 'CODEX-OT-07',
    title: 'The Prophecy of the Third Temple of Israel & The Sanctuary in the Last Days',
    subtitle: 'Biblical and Patristic prophecies of the rebuilding of the Jerusalem Temple, the cessation of sacrifice, and the seat of the Man of Sin',
    sourceAuthor: 'Prophets Ezekiel & Daniel; St. Paul, St. John & St. Cyril of Jerusalem',
    authorRole: 'Biblical Prophets, Apostles & Doctors of the Church',
    dateOrEra: 'c. 573–536 BC (Ezekiel 40–48; Daniel 9:27; 12:11) & c. 51–95 AD (2 Thess 2:4; Rev 11:1–2)',
    location: 'Mount Moriah, Jerusalem',
    category: 'Old Testament (Unfulfilled)',
    ecclesiasticalStatus: 'Canonical Sacred Scripture & Patristic Tradition (St. Irenaeus, St. Hippolytus, St. Cyril of Jerusalem)',
    eschatologicalPhase: 'IV. Final Rebellion, Two Witnesses & Antichrist',
    fulfillmentStatus: 'Unfulfilled — Awaiting Eschatological Completion',
    primaryText:
      '“And he shall confirm the covenant with many, in one week: and in the half of the week the victim and the sacrifice shall fail: and there shall be in the temple the abomination of desolation: and the desolation shall continue even to the consummation, and to the end.” (Daniel 9:27)\n\n“And from the time when the continual sacrifice shall be taken away, and the abomination unto desolation shall be set up, there shall be a thousand two hundred ninety days.” (Daniel 12:11)\n\n“And there was given me a reed like unto a rod: and it was said to me: Arise, and measure the temple of God, and the altar, and them that adore therein. But the court, which is without the temple, cast out, and measure it not: because it is given unto the Gentiles, and the holy city they shall tread under foot two and forty months.” (Revelation 11:1–2)',
    theologicalCommentary:
      'Following the destruction of the First Temple (Solomon’s) by Nebuchadnezzar in 586 BC and the Second Temple (Zerubbabel’s/Herod’s) by Titus in 70 AD (fulfilling Matthew 24:2), a venerable stream of Biblical prophecy and early Church Fathers—including St. Irenaeus (*Against Heresies* V.25.2–4), St. Hippolytus (*On Christ and Antichrist* §6), St. Cyril of Jerusalem (*Catechetical Lectures* XV.15), St. Ephrem the Syrian, and St. John Damascene—holds that a Third Temple in Jerusalem will be reconstructed prior to or at the outset of the final Antichrist’s reign. In Daniel 9:27, a seven-year covenant (“one week”) is forged, and at the midpoint (“in the half of the week,” leaving 3.5 years / 42 months), the Antichrist halts the restored temple sacrifices, enters the sanctuary on Mount Moriah, and enthrones himself “in the temple of God, shewing himself as if he were God” (2 Thessalonians 2:4), while Ezekiel’s vision of the glorious eschatological Temple with the life-giving river flowing from the threshold (Ezekiel 40–47) finds its ultimate spiritual and cosmic realization in the New Jerusalem where the Lord God Almighty and the Lamb are its Temple (Revelation 21:22–22:2).',
    keyElements: [
      'Daniel 9:27 & 12:11: Forging of a seven-year (“one week”) covenant with many, followed at mid-week by the abolition of the daily sacrifice and setting up of the Abomination of Desolation in the Temple for 1,290 days',
      '2 Thessalonians 2:4: The Man of Sin sits “in the temple [naos] of God, showing himself as if he were God”',
      'Revelation 11:1–2: Measuring of the Temple and Altar in Jerusalem while the outer court is trodden by the nations for 42 months during the ministry of the Two Witnesses',
      'Patristic Witness of St. Cyril of Jerusalem (Doctor of the Church, c. 350 AD): “Antichrist will come when there shall not be left of the Temple of the Jews one stone upon another... and he will rebuild the Temple in Jerusalem to deceive them into thinking he is the Christ” (Catechesis XV.15)',
      'Ezekiel 40–47: The vision of the Third/Eschatological Temple whose living waters flow eastward to heal the Dead Sea, fulfilled mystically in the Church’s Sacraments and eschatologically in the New Jerusalem (Revelation 22:1–2)'
    ],
    scriptureParallels: [
      {
        reference: '2 Thessalonians 2:3–4',
        testament: 'New Testament',
        text: '“Unless there come a revolt first, and the man of sin be revealed, the son of perdition, who opposeth, and is lifted up above all that is called God, or that is worshipped, so that he sitteth in the temple of God, shewing himself as if he were God.”',
        correspondenceNote: 'St. Paul uses the specific Greek term naos (the inner sanctuary/Holy of Holies), which St. Irenaeus and St. Cyril of Jerusalem interpret of the rebuilt Jerusalem sanctuary profaned by the Antichrist.'
      },
      {
        reference: 'Matthew 24:15–16',
        testament: 'New Testament',
        text: '“When therefore you shall see the abomination of desolation, which was spoken of by Daniel the prophet, standing in the holy place: he that readeth let him understand. Then they that are in Judea, let them flee to the mountains.”',
        correspondenceNote: 'Locates the standing of Daniel’s Abomination of Desolation specifically “in the holy place” in Judea.'
      },
      {
        reference: 'Ezekiel 47:1, 12 & Revelation 22:1–2',
        testament: 'Old Testament',
        text: '“And he brought me again to the gate of the house, and behold waters issued out from under the threshold of the house toward the east... And by the torrent on the banks thereof on both sides shall grow all trees that bear fruit... and the leaves thereof shall be for medicine.”',
        correspondenceNote: 'Revelation 22:1–2 directly fulfills Ezekiel’s eschatological Temple vision in the Eternal New Jerusalem.'
      }
    ]
  },

  // ============================================================================
  // NEW TESTAMENT (UNFULFILLED)
  // ============================================================================
  {
    id: 'nt-thessalonians-apostasy-man-of-sin',
    accessionNumber: 'CODEX-NT-01',
    title: 'The Great Apostasy & The Revelation of the Man of Sin',
    subtitle: 'St. Paul’s explicit prerequisite before the Day of the Lord can arrive',
    sourceAuthor: 'St. Paul the Apostle',
    authorRole: 'Apostle to the Gentiles',
    dateOrEra: 'c. 51 AD (2 Thessalonians 2:1–12; 1 Timothy 4:1–3; 2 Timothy 3:1–5)',
    location: 'Written from Corinth to the Church at Thessalonica',
    category: 'New Testament (Unfulfilled)',
    ecclesiasticalStatus: 'Canonical Sacred Scripture & Catechism of the Catholic Church §675–677',
    eschatologicalPhase: 'IV. Final Rebellion, Two Witnesses & Antichrist',
    fulfillmentStatus: 'Unfulfilled — Awaiting Eschatological Completion',
    primaryText:
      '“We beseech you, brethren, by the coming of our Lord Jesus Christ, and of our gathering together unto Him: that you be not easily moved from your sense... as if the day of the Lord were at hand. Let no man deceive you by any means, for unless there come a revolt [apostasia] first, and the man of sin be revealed, the son of perdition, who opposeth, and is lifted up above all that is called God, or that is worshipped, so that he sitteth in the temple of God, shewing himself as if he were God... And now you know what withholdeth [katechon], that he may be revealed in his time. For the mystery of iniquity already worketh; only that he who now holdeth, do hold, until he be taken out of the way. And then that wicked one shall be revealed, whom the Lord Jesus shall kill with the spirit of His mouth, and shall destroy with the brightness of His coming.” (2 Thessalonians 2:1–4, 6–8)',
    theologicalCommentary:
      'St. Paul establishes an unbreakable chronological rule for Catholic eschatology: the Parousia cannot occur until two great signs precede it: (1) *The Apostasy* (a worldwide falling away from the true Catholic faith and natural moral law), and (2) the public manifestation of the *Man of Lawlessness* (the personal Antichrist), who is currently restrained by the *katechon* until his appointed hour. He will perform lying prodigies by Satanic power and offer humanity a pseudo-messianic solution to its problems at the price of apostasy from truth (CCC §675), before being effortlessly annihilated by the splendor of Christ’s Parousia.',
    keyElements: [
      'The Great Apostasy (global defection from revealed faith and apostolic authority)',
      'Removal of the Restrainer (katechon) permitting the public manifestation of the Son of Perdition',
      'Self-exaltation in the Temple of God and counterfeit miracles worked by Satan (2 Thess 2:9)',
      'Strong delusion sent upon those who “received not the love of the truth” (2 Thess 2:10–11)',
      'Annihilation of the Antichrist by “the breath of His mouth and the brightness of His coming”'
    ],
    scriptureParallels: [
      {
        reference: 'Isaiah 11:4',
        testament: 'Old Testament',
        text: '“He shall strike the earth with the rod of His mouth, and with the breath of His lips He shall slay the wicked.”',
        correspondenceNote: 'St. Paul quotes Isaiah 11:4 in 2 Thessalonians 2:8 regarding how Christ slays the Lawless One.'
      },
      {
        reference: 'Luke 18:8',
        testament: 'New Testament',
        text: '“Yet the Son of man, when He cometh, shall He find, think you, faith on earth?”',
        correspondenceNote: 'Christ’s poignant question corroborates St. Paul’s prophecy of the Great Apostasy prior to the Second Coming.'
      },
      {
        reference: '1 John 2:18, 22',
        testament: 'New Testament',
        text: '“Little children, it is the last hour; and as you have heard that Antichrist cometh, even now there are become many Antichrists... He is Antichrist, who denieth the Father, and the Son.”',
        correspondenceNote: 'Distinguishes historical precursors (“many antichrists”) from the final eschatological “Antichrist who cometh.”'
      }
    ]
  },
  {
    id: 'nt-revelation-two-witnesses',
    accessionNumber: 'CODEX-NT-02',
    title: 'The Ministry, Martyrdom & Resurrection of the Two Witnesses',
    subtitle: 'The 1,260-day prophetic testimony in sackcloth, their death in the Great City, and public assumption into heaven',
    sourceAuthor: 'St. John the Apostle & Evangelist',
    authorRole: 'Beloved Disciple & Seer of Patmos',
    dateOrEra: 'c. 95 AD (Revelation 11:1–14)',
    location: 'Island of Patmos',
    category: 'New Testament (Unfulfilled)',
    ecclesiasticalStatus: 'Canonical Sacred Scripture — Public Revelation (De Fide)',
    eschatologicalPhase: 'IV. Final Rebellion, Two Witnesses & Antichrist',
    fulfillmentStatus: 'Unfulfilled — Awaiting Eschatological Completion',
    primaryText:
      '“And I will give unto My two witnesses, and they shall prophesy a thousand two hundred sixty days, clothed in sackcloth. These are the two olive trees, and the two candlesticks, that stand before the Lord of the earth... These have power to shut heaven, that it rain not in the days of their prophecy: and they have power over waters to turn them into blood, and to strike the earth with all plagues as often as they will. And when they shall have finished their testimony, the beast, that ascendeth out of the abyss, shall make war against them, and shall overcome them, and kill them... And after three days and a half, the spirit of life from God entered into them. And they stood upon their feet, and great fear fell upon them that saw them. And they heard a great voice from heaven, saying to them: Come up hither. And they went up to heaven in a cloud: and their enemies saw them.” (Revelation 11:3–4, 6–7, 11–12)',
    theologicalCommentary:
      'According to the virtually unanimous tradition of the Fathers and Doctors of the Church (St. Irenaeus, St. Hippolytus, Tertullian, St. Augustine, St. Gregory the Great, St. Robert Bellarmine, and Cornelius a Lapide), the Two Witnesses are Enoch (representing the Gentiles/Patriarchal law) and Elijah (representing the Prophets of Israel), neither of whom died (Genesis 5:24; 2 Kings 2:11). Preserved alive by God, they will return during the 1,260 days of the Beast’s reign to preach penance, convert Israel, and refute the Antichrist’s imposture before suffering bodily martyrdom, rising visibly after 3.5 days, and ascending in a cloud before the eyes of the world.',
    keyElements: [
      '1,260 days of public preaching in penitential sackcloth',
      'Miraculous powers of Elijah (shutting the heavens from rain) and Moses (turning water to blood)',
      'Martyrdom at the hands of the Beast ascending from the Abyss once their testimony is complete',
      'Global rejoicing over their unburied bodies for three and a half days (Revelation 11:9–10)',
      'Bodily resurrection and visible ascension into heaven in a cloud before their enemies'
    ],
    scriptureParallels: [
      {
        reference: 'Zechariah 4:11–14',
        testament: 'Old Testament',
        text: '“What are these two olive trees upon the right side of the candlestick, and upon the left side thereof?... Then he said: These are two sons of oil who stand before the Lord of the whole earth.”',
        correspondenceNote: 'Revelation 11:4 directly cites Zechariah’s vision of the two anointed olive trees standing before the Lord.'
      },
      {
        reference: 'Genesis 5:24 & Hebrews 11:5',
        testament: 'Old Testament',
        text: '“And he walked with God, and was seen no more: because God took him.” — “By faith Henoch was translated, that he should not see death.”',
        correspondenceNote: 'Explains why Enoch, alongside Elijah, was preserved from death for this final witness and martyrdom.'
      },
      {
        reference: 'Sirach 44:16',
        testament: 'Old Testament',
        text: '“Henoch pleased God, and was translated into paradise, that he may give repentance to the nations.”',
        correspondenceNote: 'The Vulgate text of Sirach explicitly links Enoch’s translation to a future mission of preaching repentance to the nations.'
      }
    ]
  },
  {
    id: 'nt-revelation-beasts-and-mark',
    accessionNumber: 'CODEX-NT-03',
    title: 'The Beast from the Sea, The False Prophet & The Economic Mark (666)',
    subtitle: 'Totalitarian political-religious coercion and the patience and faith of the saints',
    sourceAuthor: 'St. John the Apostle & Evangelist',
    authorRole: 'Beloved Disciple & Seer of Patmos',
    dateOrEra: 'c. 95 AD (Revelation 13:1–18; 14:9–12)',
    location: 'Island of Patmos',
    category: 'New Testament (Unfulfilled)',
    ecclesiasticalStatus: 'Canonical Sacred Scripture — Public Revelation (De Fide)',
    eschatologicalPhase: 'IV. Final Rebellion, Two Witnesses & Antichrist',
    fulfillmentStatus: 'Unfulfilled — Awaiting Eschatological Completion',
    primaryText:
      '“And I saw another beast coming up out of the earth, and he had two horns, like a lamb, and he spoke as a dragon. And he executed all the power of the former beast in his sight; and he caused the earth, and them that dwell therein, to adore the first beast, whose wound to death was healed. And he did great signs, so that he made also fire to come down from heaven unto the earth in the sight of men... And he shall make all, both little and great, rich and poor, freemen and bondmen, to have a character in their right hand, or on their foreheads. And that no man might buy or sell, but he that hath the character, or the name of the beast, or the number of his name. Here is wisdom. He that hath understanding, let him count the number of the beast. For it is the number of a man: and the number of him is six hundred sixty-six.” (Revelation 13:11–13, 16–18)',
    theologicalCommentary:
      'Revelation 13 unveils a diabolical triad mimicking the Most Holy Trinity: the Dragon (Satan), the First Beast from the Sea (totalitarian imperial/political Antichrist power), and the Second Beast from the Earth—called the “False Prophet” in Revelation 19:20—who has “two horns like a lamb” (usurping religious and lamb-like appearance) while speaking like a dragon. Commerce itself (“that no man might buy or sell”) is weaponized to demand ideological and religious allegiance (forehead = intellect/creed; right hand = action/praxis).',
    keyElements: [
      'First Beast from the Sea wielding global political dominion for 42 months',
      'Second Beast (False Prophet) with lamb-like horns enforcing worship of the First Beast',
      'Counterfeit signs including calling fire down from heaven in the sight of men',
      'Economic exclusion (“no man might buy or sell”) for all who refuse the Mark, Name, or Number (666)',
      'Solemn angelic warning in Revelation 14:9–12 calling for the “patience of the saints, who keep the commandments of God and the faith of Jesus”'
    ],
    scriptureParallels: [
      {
        reference: 'Daniel 7:7–8, 23',
        testament: 'Old Testament',
        text: '“After this I beheld in the vision of the night, and lo, a fourth beast, terrible and wonderful, and exceeding strong... and it had ten horns... The fourth beast shall be the fourth kingdom upon earth, which shall be greater than all the kingdoms, and shall devour the whole earth.”',
        correspondenceNote: 'The Beast of Revelation 13 combines the leopard, bear, lion, and ten-horned imagery of Daniel 7.'
      },
      {
        reference: 'Matthew 24:24',
        testament: 'New Testament',
        text: '“For there shall arise false Christs and false prophets, and shallដ៏ shew great signs and wonders, insomuch as to deceive (if possible) even the elect.”',
        correspondenceNote: 'Foretells the deceptive prodigies of the False Prophet in Revelation 13:13–14.'
      }
    ]
  },
  {
    id: 'nt-matthew-olivet-parousia-sign',
    accessionNumber: 'CODEX-NT-04',
    title: 'Universal Preaching of the Gospel & The Sign of the Son of Man in Heaven',
    subtitle: 'The cosmic darkening after the Tribulation and the visible appearance of the Cross in the sky',
    sourceAuthor: 'Jesus Christ (Recorded by St. Matthew, St. Mark & St. Luke)',
    authorRole: 'Incarnate Word & Eternal Judge',
    dateOrEra: '30–33 AD (Matthew 24:14, 29–31; Luke 21:25–28)',
    location: 'Mount of Olives, Jerusalem',
    category: 'New Testament (Unfulfilled)',
    ecclesiasticalStatus: 'Canonical Sacred Scripture — Words of Our Lord (De Fide)',
    eschatologicalPhase: 'V. Glorious Parousia & New Heavens and Earth',
    fulfillmentStatus: 'Unfulfilled — Awaiting Eschatological Completion',
    primaryText:
      '“And this gospel of the kingdom shall be preached in the whole world, for a testimony to all nations, and then shall the consummation come... And immediately after the tribulation of those days, the sun shall be darkened and the moon shall not give her light, and the stars shall fall from heaven, and the powers of heaven shall be moved: And then shall appear the sign of the Son of man in heaven: and then shall all tribes of the earth mourn: and they shall see the Son of man coming in the clouds of heaven with much power and majesty. And He shall send His angels with a trumpet, and a great voice: and they shall gather together His elect from the four winds, from the farthest parts of the heavens to the utmost bounds of them.” (Matthew 24:14, 29–31)',
    theologicalCommentary:
      'In the Olivet Discourse, Our Lord reveals both the missionary prerequisite for the end (“this Gospel of the Kingdom shall be preached in the whole world for a testimony to all nations”) and the unmistakable cosmic herald of His return. The Roman Breviary, St. John Chrysostom, St. Jerome, and St. Thomas Aquinas identify “the Sign of the Son of Man in heaven” as the luminous Cross of Christ appearing in the darkened sky brighter than the sun, displaying His wounds to the redeemed and the unrepentant alike before the angelic trumpet sounds the General Resurrection.',
    keyElements: [
      'Complete evangelization of all nations as an eschatological witness prior to the end (Matt 24:14)',
      'Darkening of sun and moon and shaking of the powers of the heavens immediately after the Tribulation',
      'Appearance of the “Sign of the Son of Man” (the glorious Cross) in the sky',
      'Visible coming of Christ on the clouds with power and majesty, never in secret chambers (Matt 24:26–27)',
      'Gathering of the Elect from the four winds at the voice of the Archangel and Trumpet of God'
    ],
    scriptureParallels: [
      {
        reference: 'Daniel 7:13–14',
        testament: 'Old Testament',
        text: '“I beheld therefore in the vision of the night, and lo, one like the son of man came with the clouds of heaven, and He came even to the Ancient of days... And He gave Him power, and glory, and a kingdom: and all peoples, tribes and tongues shall serve Him.”',
        correspondenceNote: 'Christ directly claims Daniel’s title and cloud-coming prophecy for His Glorious Parousia.'
      },
      {
        reference: '1 Thessalonians 4:15–16',
        testament: 'New Testament',
        text: '“For the Lord Himself shall come down from heaven with commandment, and with the voice of an archangel, and with the trumpet of God: and the dead who are in Christ, shall rise first.”',
        correspondenceNote: 'Elaborates on the angelic trumpet and resurrection of the righteous at the Parousia.'
      }
    ]
  },

  // ============================================================================
  // MARIAN APPARITIONS
  // ============================================================================
  {
    id: 'marian-fatima-three-secrets',
    accessionNumber: 'CODEX-MAR-01',
    title: 'Our Lady of Fatima: The Three Secrets & The Triumph of the Immaculate Heart',
    subtitle: 'The vision of Hell, the consecration of Russia, the Bishop in White, and the promised Period of Peace',
    sourceAuthor: 'Our Lady of the Rosary to Venerable Lúcia dos Santos, St. Francisco & St. Jacinta Marto',
    authorRole: 'Approved Marian Apparition & Liturgical Feast (May 13)',
    dateOrEra: 'May 13 – October 13, 1917',
    location: 'Cova da Iria, Fátima, Portugal',
    category: 'Marian Apparitions',
    ecclesiasticalStatus: 'Worthy of Belief — Officially Approved by the Catholic Church (1930) & Vatican Commentary (2000)',
    eschatologicalPhase: 'III. Triumph of the Immaculate Heart & Era of Peace',
    fulfillmentStatus: 'Unfolding in Present Epoch',
    primaryText:
      '“You have seen hell where the souls of poor sinners go. To save them, God wishes to establish in the world devotion to My Immaculate Heart. If what I say to you is done, many souls will be saved and there will be peace... If My requests are heeded, Russia will be converted, and there will be peace; if not, she will scatter her errors throughout the world, causing wars and persecutions of the Church. The good will be martyred; the Holy Father will have much to suffer; various nations will be annihilated. In the end, My Immaculate Heart will triumph. The Holy Father will consecrate Russia to Me, and she shall be converted, and a period of peace will be granted to the world.” (July 13, 1917 — Second Secret)\n\n“And we saw in an immense light that is God: ‘something similar to how people appear in a mirror when they pass in front of it’ a Bishop dressed in White ‘we had the impression that it was the Holy Father’. Other Bishops, Priests, men and women Religious going up a steep mountain, at the top of which there was a big Cross of rough-hewn trunks as of a cork-tree with the bark; before reaching there the Holy Father passed through a big city half in ruins and half trembling with halting step, afflicted with pain and sorrow, he prayed for the souls of the corpses he met on his way... Beneath the two arms of the Cross there were two Angels each with a crystal aspersorium in his hand, in which they gathered up the blood of the Martyrs and with it sprinkled the souls that were making their way to God.” (Third Secret of Fatima)',
    theologicalCommentary:
      'Confirmed by the Miracle of the Sun witnessed by 70,000 spectators on October 13, 1917, the Fatima message links world history directly to spiritual reparation. While aspects of the Second and Third Secrets unfolded across the 20th century, Pope Benedict XVI declared at Fatima on May 13, 2010: “We would be mistaken to think that Fatima’s prophetic mission is complete... May the seven years which separate us from the centenary of the apparitions hasten the fulfillment of the prophecy of the triumph of the Immaculate Heart of Mary, to the glory of the Most Holy Trinity.”',
    keyElements: [
      'First Secret: Vision of Hell and the urgent need for prayer and sacrifice for poor sinners',
      'Second Secret: Devotion of the Five First Saturdays, Consecration of Russia, and warning of global errors and annihilated nations',
      'Third Secret: The Angel with a flaming sword crying “Penance, Penance, Penance!” stayed by the splendor of Our Lady’s right hand, and the martyrdom of the Bishop in White and faithful beneath the Cross',
      'Unconditional Eschatological Promise: “In the end, My Immaculate Heart will triumph... and a period of peace will be granted to the world.”'
    ],
    scriptureParallels: [
      {
        reference: 'Genesis 3:15',
        testament: 'Old Testament',
        text: '“I will put enmities between thee and the woman, and thy seed and her seed: she shall crush thy head, and thou shalt lie in wait for her heel.”',
        correspondenceNote: 'The Protoevangelium is the biblical foundation for the final Triumph of the Immaculate Heart over the ancient Serpent.'
      },
      {
        reference: 'Revelation 12:1–2, 17',
        testament: 'New Testament',
        text: '“And a great sign appeared in heaven: A woman clothed with the sun, and the moon under her feet, and on her head a crown of twelve stars... And the dragon was angry against the woman: and went to make war with the rest of her seed, who keep the commandments of God, and have the testimony of Jesus Christ.”',
        correspondenceNote: 'The Woman clothed with the Sun at the Miracle of the Sun in Fatima mirrors St. John’s eschatological Great Sign in heaven.'
      }
    ]
  },
  {
    id: 'marian-fatima-pontevedra-tuy-final-battle',
    accessionNumber: 'CODEX-MAR-02A',
    title: 'The Fatima Prophecies II: Pontevedra, Tuy & The Final Battle Over Marriage and Family',
    subtitle: 'The Five First Saturdays of Reparation, the Trinitarian Vision at Tuy, and Sister Lúcia’s warning to Cardinal Caffarra',
    sourceAuthor: 'Our Lady of Fatima & Our Lord to Venerable Sister Lúcia dos Santos',
    authorRole: 'Carmelite Visionary of Coimbra & Messenger of the Immaculate Heart (1907–2005)',
    dateOrEra: 'December 10, 1925 (Pontevedra), June 13, 1929 (Tuy), August 1931 (Rianjo) & 1983 (Letter to Card. Caffarra)',
    location: 'Pontevedra & Tuy, Spain; Coimbra, Portugal',
    category: 'Marian Apparitions',
    ecclesiasticalStatus: 'Officially Approved Liturgical Devotion & Verified Correspondence (Pontifical John Paul II Institute)',
    eschatologicalPhase: 'I. Pre-Tribulation & Illumination of Conscience',
    fulfillmentStatus: 'Unfolding in Present Epoch',
    primaryText:
      '“Look, My daughter, at My Heart, surrounded with thorns with which ungrateful men pierce Me at every moment by their blasphemies and ingratitude. You at least try to console Me and announce in My name that I promise to assist at the Moment of death, with all the graces necessary for salvation, all those who, on the first Saturday of five consecutive months, shall confess, receive Holy Communion, recite five decades of the Rosary, and keep Me company for fifteen minutes while meditating on the fifteen mysteries of the Rosary, with the intention of making reparation to Me.” (Pontevedra, December 10, 1925)\n\n“The moment has come in which God asks the Holy Father, in union with all the Bishops of the world, to make the consecration of Russia to My Immaculate Heart, promising to save it by this means.” (Tuy, June 13, 1929)\n\n“Father, a time will come when the decisive battle between the kingdom of Christ and Satan will be over marriage and the family. And those who will work for the good of the family will experience persecution and tribulation. But do not be afraid, because Our Lady has already crushed his head.” (Venerable Sr. Lúcia of Fatima to Cardinal Carlo Caffarra, 1983)',
    theologicalCommentary:
      'The Fatima prophecies did not end in October 1917; Our Lady stated on July 13, 1917, “I shall come to ask for the consecration of Russia to My Immaculate Heart, and the Communion of reparation on the First Saturdays.” That promise was fulfilled at Pontevedra (December 10, 1925) and Tuy (June 13, 1929) in the breathtaking Trinitarian vision of the Cross, where Grace and Mercy flowed as water from the side of the Crucified Christ. Later, in a prophetic letter to Cardinal Carlo Caffarra (appointed by Pope St. John Paul II to establish the Pontifical Institute for Studies on Marriage and Family), Sister Lúcia identified the ultimate battleground of the Eleventh Hour: the sanctity of Marriage and the Family as the domestic church and icon of the Trinity.',
    keyElements: [
      'Pontevedra (Dec 10, 1925): The Great Promise of the Five First Saturdays of Reparation for the five blasphemies against the Immaculate Heart',
      'Tuy (June 13, 1929): Vision of the Most Holy Trinity with the words “Grace and Mercy” streaming down the Cross onto the altar',
      'Rianjo (Aug 1931): Our Lord’s warning to the hierarchy not to delay like the King of France (Louis XIV) in heeding Heaven’s request',
      'Coimbra (1983): Prophecy to Cardinal Carlo Caffarra that the final, decisive battle between the Lord and the reign of Satan is waged over Marriage and the Family'
    ],
    scriptureParallels: [
      {
        reference: 'Genesis 1:27–28 & 3:15',
        testament: 'Old Testament',
        text: '“And God created man to His own image; to the image of God He created him: male and female He created them. And God blessed them... I will put enmities between thee and the woman, and thy seed and her seed: she shall crush thy head.”',
        correspondenceNote: 'Because human marriage and generation bear the living image of the Creator, the Serpent directs his final assault against the family, while the Woman crushes his head.'
      },
      {
        reference: 'Luke 2:34–35',
        testament: 'New Testament',
        text: '“Behold this Child is set for the fall, and for the resurrection of many in Israel, and for a sign which shall be contradicted; And thy own soul a sword shall pierce, that, out of many hearts, thoughts may be revealed.”',
        correspondenceNote: 'Simeon’s prophecy is the biblical foundation for reparation to the pierced and thorn-crowned Immaculate Heart of Mary.'
      }
    ]
  },
  {
    id: 'marian-akita-fire-from-sky',
    accessionNumber: 'CODEX-MAR-02',
    title: 'Our Lady of Akita: The Warning of Fire from the Sky & Ecclesial Division',
    subtitle: 'The third message of October 13, 1973, delivered on the 56th anniversary of the Miracle of the Sun',
    sourceAuthor: 'Our Lady of Akita to Sr. Agnes Katsuko Sasagawa',
    authorRole: 'Approved Marian Apparition (Handmaids of the Sacred Heart of Jesus in the Holy Eucharist)',
    dateOrEra: 'July 6 – October 13, 1973',
    location: 'Yuzawadai, Akita, Japan',
    category: 'Marian Apparitions',
    ecclesiasticalStatus: 'Officially Approved by Bishop John Shojiro Ito of Niigata (April 22, 1984); Confirmed by Cardinal Joseph Ratzinger (1988)',
    eschatologicalPhase: 'II. Purification & The Three Days of Darkness',
    fulfillmentStatus: 'Conditional / Mitigable by Prayer & Fasting',
    primaryText:
      '“As I told you, if men do not repent and better themselves, the Father will inflict a terrible punishment on all humanity. It will be a punishment greater than the deluge, such as one will never have seen before. Fire will fall from the sky and will wipe out a great part of humanity, the good as well as the bad, sparing neither priests nor faithful. The survivors will find themselves so desolate that they will envy the dead. The only arms which will remain for you will be the Rosary and the Sign left by My Son. Each day recite the prayers of the Rosary. With the Rosary, pray for the Pope, the bishops and the priests.\n\nThe work of the devil will infiltrate even into the Church in such a way that one will see cardinals opposing cardinals, bishops against bishops. The priests who venerate me will be scorned and opposed by their confreres... churches and altars sacked; the Church will be full of those who accept compromises and the demon will press many priests and consecrated souls to leave the service of the Lord.” (Message of October 13, 1973)',
    theologicalCommentary:
      'The wooden statue of Our Lady of Akita wept human tears on 101 documented occasions between 1975 and 1981 (scientifically analyzed by the Forensic Medicine Departments of Akita and Gifu Universities), and Sr. Agnes was miraculously cured of total deafness. Cardinal Joseph Ratzinger (later Pope Benedict XVI), as Prefect of the Congregation for the Doctrine of the Faith, judged the messages of Akita reliable and noted that the Third Message of Akita is essentially identical in substance to the Third Secret of Fatima.',
    keyElements: [
      'Conditional global purification by fire from the sky greater than the Noachic Deluge if humanity refuses repentance',
      'Internal ecclesial trial: “cardinals opposing cardinals, bishops against bishops”',
      'Temptation against consecrated souls and proliferation of doctrinal compromise',
      'Spiritual remedies: Daily recitation of the Rosary, Eucharistic reparation, and prayer for the Pope, Bishops, and Priests'
    ],
    scriptureParallels: [
      {
        reference: '2 Peter 3:5–7',
        testament: 'New Testament',
        text: '“Whereby the world that then was, being overflowed with water, perished. But the heavens and the earth which now are, by the same word are kept in store, reserved unto fire against the day of judgment and perdition of the ungodly men.”',
        correspondenceNote: 'Parallels Our Lady of Akita’s contrast between the ancient Deluge of water and the future purification by fire.'
      },
      {
        reference: 'Luke 12:49 & 17:29–30',
        testament: 'New Testament',
        text: '“And the same day that Lot went out of Sodom, it rained fire and brimstone from heaven, and destroyed them all. Even thus shall it be in the day when the Son of man shall be revealed.”',
        correspondenceNote: 'Christ uses the sudden fire from heaven upon Sodom as a direct prophetic type of the purification preceding His revelation.'
      }
    ]
  },
  {
    id: 'marian-good-success-quito',
    accessionNumber: 'CODEX-MAR-03',
    title: 'Our Lady of Good Success: The Crisis of the Twentieth Century & Restoration',
    subtitle: 'Prophetic warnings on the sacraments, the family, the priesthood, and the hour when all seems lost',
    sourceAuthor: 'Our Lady of Good Success to Venerable Mother Mariana de Jesús Torres',
    authorRole: 'Conceptionist Abbess & Mystic Victim Soul',
    dateOrEra: 'January 20, 1599 – February 2, 1634',
    location: 'Royal Convent of the Immaculate Conception, Quito, Ecuador',
    category: 'Marian Apparitions',
    ecclesiasticalStatus: 'Officially Approved by Bishop Salvador de Ribera (1611) & Canonical Coronation (1991)',
    eschatologicalPhase: 'I. Pre-Tribulation & Illumination of Conscience',
    fulfillmentStatus: 'Unfolding in Present Epoch',
    primaryText:
      '“Thus I make it known to you that from the end of the 19th century and from shortly after the mid-20th century... the passions will erupt and there will be a total corruption of customs, for Satan will reign almost completely by means of the Masonic sects. They will focus principally on the children in order to sustain this general corruption. Woe to the children of these times!\n\nAs for the Sacrament of Matrimony, which symbolizes the union of Christ with His Church, it will be attacked and deeply profaned... Unbridled passions will give way to a total corruption of customs because Satan will reign through the sects, targeting the children in particular to insure general corruption... In this supreme moment of need of the Church, the one who should speak will fall silent.\n\nKnow, however, that when the evil appears triumphant and when authority abuses its power, committing all manner of injustice and oppressing the weak, their ruin shall be near. They will fall and crash to the ground. Then will the Church, joyous and triumphant like a tender girl, reawaken and be comfortably cradled in the arms of My most dear son, the chosen heart of those times.” (Apparitions of Jan 20, 1610 & Feb 2, 1634)',
    theologicalCommentary:
      'Delivered over three centuries in advance, the prophecies to Venerable Mother Mariana de Jesús Torres in Quito were verified when the miraculous statue of Our Lady of Good Success was found completed in the convent choir by the Archangels Michael, Gabriel, and Raphael on January 16, 1599, and when Mother Mariana’s incorrupt body was uncovered in 1906. The prophecies detail the systematic assault on the seven sacraments—especially Matrimony, Holy Orders, and Extreme Unction—followed by a miraculous Marian intervention at the exact moment when evil seems to have triumphed completely.',
    keyElements: [
      'Miraculous Extinction of the Sanctuary Lamp in 1599 foreshowing five crises of the 19th–20th centuries',
      'Systematic assault on the Sacrament of Matrimony and the innocence of children',
      'Widespread crisis among priests and religious leading to the scarcity of holy vocations',
      'Sudden and complete overthrow of the powers of evil at the hour when “all seems lost and paralyzed”'
    ],
    scriptureParallels: [
      {
        reference: '2 Timothy 3:1–5',
        testament: 'New Testament',
        text: '“Know also this, that, in the last days, shall come dangerous times. Men shall be lovers of themselves, covetous, haughty, proud, blasphemers, disobedient to parents, ungrateful, wicked, without affection, without peace, slanderers, incontinent... having an appearance indeed of godliness, but denying the power thereof.”',
        correspondenceNote: 'St. Paul’s moral portrait of the perilous times directly parallels Our Lady of Good Success’s warning on the corruption of customs and family bonds.'
      },
      {
        reference: 'Ephesians 5:31–32',
        testament: 'New Testament',
        text: '“For this cause shall a man leave his father and mother, and shall cleave to his wife, and they shall be two in one flesh. This is a great sacrament; but I speak in Christ and in the church.”',
        correspondenceNote: 'Explains why the attack on Christian marriage described at Quito is simultaneously an attack on the mystery of Christ and the Church.'
      }
    ]
  },
  {
    id: 'marian-la-salette-garabandal-kibeho',
    accessionNumber: 'CODEX-MAR-04',
    title: 'La Salette, Kibeho & Garabandal: The Tears of the Mother & The Illumination of Conscience',
    subtitle: 'Prophetic calls to conversion before the Warning, the Great Miracle, and the Purification',
    sourceAuthor: 'Our Lady of La Salette (1846), Our Lady of Kibeho (1981–1989) & Garabandal Accounts (1961–1965)',
    authorRole: 'Marian Apparitions & Seer Testimonies',
    dateOrEra: '1846 (La Salette), 1961–1965 (Garabandal), 1981–1989 (Kibeho)',
    location: 'La Salette (France), Kibeho (Rwanda), San Sebastián de Garabandal (Spain)',
    category: 'Marian Apparitions',
    ecclesiasticalStatus: 'La Salette (Approved 1851) & Kibeho (Approved 2001); Garabandal (Non-constat / Open to pious reflection)',
    eschatologicalPhase: 'I. Pre-Tribulation & Illumination of Conscience',
    fulfillmentStatus: 'Unfolding in Present Epoch',
    primaryText:
      '“If my people will not submit, I shall be forced to let fall the arm of My Son. It is so strong, so heavy, that I can no longer withhold it. For how long a time do I suffer for you! If I would not have My Son abandon you, I am compelled to pray to Him without ceasing; and as to you, you take no heed of it. However much you pray, however much you do, you will never recompense the pains I have taken for you. I gave you six days to labor, I reserved the seventh for Myself; and they will not grant it to Me. It is this which makes the arm of My Son so heavy.” (Our Lady of La Salette, September 19, 1846)\n\n“The Warning is a thing that comes directly from God and will be visible throughout the entire world, in whatever place anyone might be. It will be like the revelation of our sins, and it will be seen and experienced by believers and non-believers and people of any religion whatsoever... It will purify our conscience so that we may prepare for the Great Miracle.” (Conchita González of Garabandal, 1965)',
    theologicalCommentary:
      'Across Europe and Africa, Marian apparitions form a unified prophetic tapestry: at La Salette (approved by Bishop Philibert de Bruillard in 1851), Our Lady wept over blasphemy and the profanation of Sunday; at Kibeho, Rwanda (approved by Bishop Augustin Misago in 2001), Our Lady of Sorrows showed the visionaries a “river of blood” twelve years before the 1994 genocide to warn the world that sin leads to self-destruction; and at Garabandal, the visionaries described the worldwide *Aviso* (Warning / Illumination of Conscience)—an interior and cosmic act of Divine Mercy allowing every soul on earth to see the state of its conscience in the truth of God.',
    keyElements: [
      'La Salette (1846): Reparation for blasphemy and profanation of the Lord’s Day; future renewal of the face of the earth',
      'Kibeho (1982): Verified prophetic vision of the Rwandan tragedy and universal plea for the Rosary of the Seven Sorrows',
      'Garabandal (1961–1965): Three sequential events — (1) The Worldwide Warning (Illumination of Conscience), (2) The Great Miracle at the Pines on a Thursday evening at 8:30 PM on the feast of a young martyr of the Eucharist, leaving a permanent supernatural sign, and (3) The conditional Chastisement if humanity still refuses to repent'
    ],
    scriptureParallels: [
      {
        reference: '1 Corinthians 4:5',
        testament: 'New Testament',
        text: '“Therefore judge not before the time; until the Lord come, who both will bring to light the hidden things of darkness, and will make manifest the counsels of the hearts.”',
        correspondenceNote: 'Provides the scriptural paradigm for the illumination of the hidden counsels of human hearts.'
      },
      {
        reference: 'Revelation 6:15–17',
        testament: 'New Testament',
        text: '“And the kings of the earth, and the princes, and tribunes, and the rich, and the strong, and every bondman, and every freeman, hid themselves in the dens and in the rocks of mountains: And they say to the mountains and the rocks: Fall upon us, and hide us from the face of Him that sitteth upon the throne, and from the wrath of the Lamb.”',
        correspondenceNote: 'The Opening of the Sixth Seal depicts a universal awakening of conscience across every social class upon seeing the Lamb.'
      }
    ]
  },

  // ============================================================================
  // DIARY OF ST. FAUSTINA KOWALSKA
  // ============================================================================
  {
    id: 'faustina-diary-83-sign-in-sky',
    accessionNumber: 'CODEX-FAU-01',
    title: 'Diary §83: The Extinction of Light & The Luminous Cross in the Sky',
    subtitle: 'Christ’s words to St. Faustina on the final Sign of Mercy before the Day of Justice',
    sourceAuthor: 'Jesus Christ to St. Maria Faustina Kowalska',
    authorRole: 'Canonized Mystic & Secretary of Divine Mercy (1905–1938)',
    dateOrEra: '1934 (Diary: Divine Mercy in My Soul, §83)',
    location: 'Vilnius / Krakow, Poland',
    category: 'Diary of St. Faustina',
    ecclesiasticalStatus: 'Approved Mystical Writings — Canonized by Pope St. John Paul II (April 30, 2000)',
    eschatologicalPhase: 'I. Pre-Tribulation & Illumination of Conscience',
    fulfillmentStatus: 'Unfulfilled — Awaiting Eschatological Completion',
    primaryText:
      '“Write this: before I come as the just Judge, I am coming first as the King of Mercy. Before the day of justice arrives, there will be given to people a sign in the heavens of this sort:\n\nAll light in the heavens will be extinguished, and there will be great darkness over the whole earth. Then the sign of the cross will be seen in the sky, and from the openings where the hands and the feet of the Savior were nailed will come forth great lights which will light up the earth for a period of time. This will take place shortly before the last day.” (Diary of St. Faustina, §83)',
    theologicalCommentary:
      'Paragraph 83 of St. Faustina’s *Diary* is one of the most explicit eschatological prophecies in approved Catholic mysticism. Our Lord directly interprets His own words in Matthew 24:29–30 (“the sun shall be darkened... and then shall appear the sign of the Son of Man in heaven”), revealing that before the Day of Justice arrives, a universal darkness will envelop the earth, pierced by the Sign of the Cross in the heavens with radiant beams shining from the five wounds of the Crucified Savior to illuminate the earth for a period of grace and conversion.',
    keyElements: [
      'Distinction between the present Time of Mercy (“King of Mercy”) and the coming Day of Justice (“Just Judge”)',
      'Total extinction of all light in the heavens and great darkness over the whole earth',
      'Appearance of the Sign of the Cross in the sky visible to all humanity',
      'Great lights streaming from the nail-wounds of the Savior’s hands and feet lighting up the earth for a period of time shortly before the last day'
    ],
    scriptureParallels: [
      {
        reference: 'Matthew 24:29–30',
        testament: 'New Testament',
        text: '“And immediately after the tribulation of those days, the sun shall be darkened and the moon shall not give her light... And then shall appear the sign of the Son of man in heaven.”',
        correspondenceNote: 'Diary §83 is a verbatim mystical exposition of Matthew 24:29–30.'
      },
      {
        reference: 'Amos 8:9',
        testament: 'Old Testament',
        text: '“And it shall come to pass in that day, saith the Lord God, that the sun shall go down at midday, and I will make the earth dark in the day of light.”',
        correspondenceNote: 'Old Testament prophecy of supernatural darkness enveloping the earth in the Day of the Lord.'
      },
      {
        reference: 'Habakkuk 3:4',
        testament: 'Old Testament',
        text: '“His brightness shall be as the light; horns [rays of splendor] are in His hands: There is His strength hid.”',
        correspondenceNote: 'Prophetically prefigures the rays of light streaming from the pierced hands of the Savior in Diary §83.'
      }
    ]
  },
  {
    id: 'faustina-diary-1732-spark-from-poland',
    accessionNumber: 'CODEX-FAU-02',
    title: 'Diary §1732 & §699: The Spark That Will Prepare the World for the Final Coming',
    subtitle: 'The prophetic role of the Divine Mercy devotion in the Eleventh Hour of salvation history',
    sourceAuthor: 'Jesus Christ to St. Maria Faustina Kowalska',
    authorRole: 'Canonized Mystic & Apostle of Divine Mercy',
    dateOrEra: 'May 1938 (Diary: Divine Mercy in My Soul, §429, §699, §1146, §1732)',
    location: 'Krakow, Poland',
    category: 'Diary of St. Faustina',
    ecclesiasticalStatus: 'Approved Mystical Writings — Cited by Pope St. John Paul II at the Shrine of Łagiewniki (August 17, 2002)',
    eschatologicalPhase: 'I. Pre-Tribulation & Illumination of Conscience',
    fulfillmentStatus: 'Unfolding in Present Epoch',
    primaryText:
      '“As I was praying for Poland, I heard the words: ‘I bear a special love for Poland, and if she will be obedient to My will, I will exalt her in might and holiness. From her will come forth the spark that will prepare the world for My final coming.’” (Diary, §1732)\n\n“Speak to the world about My mercy; let all mankind recognize My unfathomable mercy. It is a sign for the end times; after it will come the day of justice. While there is still time, let them have recourse to the fount of My mercy; let them profit from the Blood and Water which gushed forth for them.” (Diary, §848)\n\n“You will prepare the world for My final coming.” (Diary, §429)',
    theologicalCommentary:
      'Christ expressly designates the message and liturgical Feast of Divine Mercy as “a sign for the end times; after it will come the day of justice” (Diary §848). When consecrating the World to Divine Mercy in Krakow on August 17, 2002, Pope St. John Paul II quoted Diary §1732 directly, praying that this spark of grace from Poland—the proclamation of God’s merciful love and the Chaplet of Divine Mercy—would prepare the whole world for the Final Coming of Christ.',
    keyElements: [
      'Explicit designation of the Divine Mercy devotion as “a sign for the end times” (Diary §848)',
      'Prophecy of the “spark” coming forth from Poland to prepare the world for Christ’s Final Coming (§1732)',
      'Promise of complete forgiveness of sins and punishment on the Feast of Divine Mercy (§699)',
      'Urgent call to the Eleventh Hour before the Door of Mercy closes and the Door of Justice opens (§1146)'
    ],
    scriptureParallels: [
      {
        reference: 'Matthew 20:6–7',
        testament: 'New Testament',
        text: '“And about the eleventh hour He went out and found others standing, and He saith to them: Why stand you here all the day idle?... Go you also into My vineyard.”',
        correspondenceNote: 'The Parable of the Laborers of the Eleventh Hour reveals God’s extraordinary outpouring of mercy right before nightfall.'
      },
      {
        reference: 'John 19:34',
        testament: 'New Testament',
        text: '“But one of the soldiers with a spear opened His side, and immediately there came out blood and water.”',
        correspondenceNote: 'The fount of Blood and Water from the pierced Heart of Jesus is the biblical source of the Divine Mercy rays.'
      }
    ]
  },

  // ============================================================================
  // SEERS OF MEDJUGORJE
  // ============================================================================
  {
    id: 'medjugorje-ten-secrets-parchment',
    accessionNumber: 'CODEX-MED-01',
    title: 'The Ten Secrets of Medjugorje & The Parchment Protocol',
    subtitle: 'The three warnings, the permanent visible Sign on Apparition Hill, and the ten-day advance announcement to the world',
    sourceAuthor: 'Seers of Medjugorje (Mirjana Dragičević, Ivanka Ivanković, Jakov Čolo, Ivan Dragičević, Vicka Ivanković, Marija Pavlović)',
    authorRole: 'Six Visionaries of Our Lady Queen of Peace (Kraljica Mira)',
    dateOrEra: 'June 24, 1981 – Present',
    location: 'Medjugorje, Bosnia and Herzegovina',
    category: 'Seers of Medjugorje',
    ecclesiasticalStatus: 'Nihil Obstat Granted by the Dicastery for the Doctrine of the Faith with Approval of Pope Francis (Note “The Queen of Peace”, September 19, 2024)',
    eschatologicalPhase: 'I. Pre-Tribulation & Illumination of Conscience',
    fulfillmentStatus: 'Unfolding in Present Epoch',
    primaryText:
      '“These are the last apparitions of Our Lady on earth. That is why they are so long and so frequent... Ten days before the First Secret is to happen, Mirjana will give the parchment to Fr. Petar Ljubičić. He will fast and pray for seven days, and then three days before the event takes place, he will announce to the world what, where, and when the secret will happen. The first two secrets will be warnings for the world and will take place in Medjugorje. The Third Secret will be a visible, indestructible, permanent, and beautiful sign on Apparition Hill (Podbrdo) where Our Lady first appeared, so that all may see that it comes from God.” (Testimony of Mirjana Dragičević-Soldo & Visionary Depositions)',
    theologicalCommentary:
      'Three of the six visionaries (Mirjana in 1982, Ivanka in 1985, and Jakov in 1998) have already received all Ten Secrets, while the remaining three (Vicka, Ivan, and Marija) have received nine. Mirjana holds a tangible parchment-like material (examined by linguists and materials scientists as neither fabric nor paper, readable only by her until the appointed hour) containing all Ten Secrets and their exact dates. She has chosen the Franciscan priest Fr. Petar Ljubičić to publicly disclose each secret to the world exactly 72 hours (three days) before it occurs. On September 19, 2024, the Vatican Dicastery for the Doctrine of the Faith granted the highest positive recognition (*Nihil Obstat*) to the spiritual fruits and devotion of Medjugorje.',
    keyElements: [
      'Secrets 1 & 2: Serious admonitory warnings for the parish of Medjugorje and the world, proving the truth of the apparitions',
      'Secret 3: A permanent, indestructible, miraculous visible Sign on Apparition Hill (Podbrdo) that cannot be replicated by human technology',
      'The 10-Day Parchment Protocol: Mirjana hands the parchment to Fr. Petar Ljubičić 10 days prior; 7 days of prayer and fasting on bread and water; public disclosure 3 days before fulfillment',
      'Secrets 4 through 10: Progressive global purifications; the Seventh Secret was mitigated through prayer and fasting, while Secrets 9 and 10 remain grave chastisements for the sins of the world',
      'The Five Stones for Spiritual Combat: (1) Daily Rosary with the heart, (2) Eucharist, (3) Daily Sacred Scripture reading, (4) Fasting on Wednesdays and Fridays on bread and water, (5) Monthly Confession'
    ],
    scriptureParallels: [
      {
        reference: 'Amos 3:7',
        testament: 'Old Testament',
        text: '“For the Lord God doth nothing without revealing His secret to His servants the prophets.”',
        correspondenceNote: 'Biblical principle underlying the three-day public advance announcement of the Ten Secrets before they occur.'
      },
      {
        reference: 'Isaiah 19:19–20',
        testament: 'Old Testament',
        text: '“In that day there shall be an altar of the Lord in the midst of the land... and a monument of the Lord at the bounds thereof. It shall be for a sign, and for a testimony to the Lord of hosts.”',
        correspondenceNote: 'Prefigures a visible, permanent monument given by the Lord as a sign and testimony to convert unbelievers.'
      },
      {
        reference: 'Jonah 3:4–5, 10',
        testament: 'Old Testament',
        text: '“And Jonas began to enter into the city one day’s journey: and he cried, and said: Yet forty days, and Nineve shall be destroyed. And the men of Nineve believed in God: and they proclaimed a fast, and put on sackcloth... And God saw their works, that they were turned from their evil way: and God had mercy.”',
        correspondenceNote: 'Demonstrates how prophetic chastisements (such as the Seventh Secret of Medjugorje) can be mitigated through collective fasting and conversion.'
      }
    ]
  },

  // ============================================================================
  // BLESSED ANNE CATHERINE EMMERICH
  // ============================================================================
  {
    id: 'emmerich-two-popes-strange-church',
    accessionNumber: 'CODEX-EMM-01',
    title: 'Vision of the Strange Counterfeit Church & The Two Popes',
    subtitle: 'The undermining of St. Peter’s, the lifeless church of human making, and the intervention of Our Lady and St. Michael',
    sourceAuthor: 'Blessed Anne Catherine Emmerich',
    authorRole: 'Augustinian Canoness, Stigmatist & Beatified Mystic (1774–1824)',
    dateOrEra: 'May 13, 1820 & October 1820 (Recorded by Clemens Brentano)',
    location: 'Dülmen, Westphalia, Germany',
    category: 'Bl. Anne Catherine Emmerich',
    ecclesiasticalStatus: 'Beatified by Pope St. John Paul II (October 3, 2004)',
    eschatologicalPhase: 'I. Pre-Tribulation & Illumination of Conscience',
    fulfillmentStatus: 'Unfolding in Present Epoch',
    primaryText:
      '“I saw also the relationship between the two popes... I saw how baleful would be the consequences of this false church. I saw it increase in size; heretics of every kind came into the city of Rome. The local clergy grew lukewarm, and I saw a great darkness... Then the vision seemed to extend on all sides. Whole Catholic communities were being oppressed, harassed, confined, and deprived of their freedom... \n\nI saw again that Peter’s barque was riddled with holes by the wicked, while at the same time they were building a large, strange, and extravagant church. Everyone was to be admitted in it in order to be united and have equal rights: Evangelicals, Catholics, sects of every description. Such was to be the new church... But God had other designs, and Not a single angel or saint assisted in that work. I saw that everything related to Protestantism was gradually gaining the upper hand, and the religion of the true Catholic Church was falling into complete decadence.\n\nWhen the Church had been for the most part destroyed by the secret sect, and when only the sanctuary and altar were still standing, I saw the wreckers enter the church with the Beast. There, they met a Woman of noble carriage who seemed to be with child because she walked slowly. At this sight, the enemies were terrorized, and the Beast could not take but another step forward... Then I saw in the distance a great legion of glorious warriors descending. And I saw Our Lady ascend onto the Church and spread her wide mantle of gold over it.” (Visions of May 13, 1820, Aug–Oct 1820)',
    theologicalCommentary:
      'Beatified by Pope St. John Paul II in 2004, the Augustinian stigmatist Blessed Anne Catherine Emmerich lived solely on the Holy Eucharist and water for twelve years while bearing the bleeding wounds of Christ and the Crown of Thorns. Her 1820 visions vividly describe an attempt to construct a purely horizontal, syncretistic “strange church” devoid of supernatural grace and the communion of saints, contrasted with the indestructible Sanctuary of the true Catholic Church defended at the eleventh hour by the Woman Clothed with the Sun and St. Michael the Archangel.',
    keyElements: [
      'Vision of the “Relationship between the Two Popes” and great darkness in Rome (May 13, 1820)',
      'Attempted construction of a “strange, large, and extravagant church” based on human syncretism where no angels or saints assist',
      'Preservation of the true Sanctuary and Altar despite external demolition by the secret sect',
      'Decisive intervention of the Woman with Child (Our Lady) halting the Beast, and Our Lady spreading her golden mantle over St. Peter’s'
    ],
    scriptureParallels: [
      {
        reference: 'Psalm 127:1 (126:1)',
        testament: 'Old Testament',
        text: '“Unless the Lord build the house, they labour in vain that build it. Unless the Lord keep the city, he watcheth in vain that keepeth it.”',
        correspondenceNote: 'Directly illuminates Emmerich’s vision of the “strange church” built solely by human arrogance without the Holy Spirit or the angels.'
      },
      {
        reference: 'Matthew 16:18',
        testament: 'New Testament',
        text: '“And I say to thee: That thou art Peter; and upon this rock I will build My church, and the gates of hell shall not prevail against it.”',
        correspondenceNote: 'Explains why, in Emmerich’s vision, the Sanctuary and Altar of St. Peter’s cannot be destroyed even when the outer walls are attacked.'
      }
    ]
  },
  {
    id: 'emmerich-unchaining-of-lucifer',
    accessionNumber: 'CODEX-EMM-02',
    title: 'The Unchaining of Lucifer Fifty to Sixty Years Before the Year 2000',
    subtitle: 'Blessed Anne Catherine Emmerich’s dated chronological prophecy of the twentieth-century spiritual tempest',
    sourceAuthor: 'Blessed Anne Catherine Emmerich',
    authorRole: 'Augustinian Canoness, Stigmatist & Beatified Mystic (1774–1824)',
    dateOrEra: 'c. 1820–1823 (The Life of Jesus Christ and Biblical Revelations, Vol. IV)',
    location: 'Dülmen, Westphalia, Germany',
    category: 'Bl. Anne Catherine Emmerich',
    ecclesiasticalStatus: 'Beatified by Pope St. John Paul II (October 3, 2004)',
    eschatologicalPhase: 'I. Pre-Tribulation & Illumination of Conscience',
    fulfillmentStatus: 'Unfolding in Present Epoch',
    primaryText:
      '“In the center of Hell I saw a dark and horrible abyss, and into this Lucifer was cast, after being first strongly chained. Thick clouds of sulphurous smoke rolled up from its fearful depths... God himself had decreed this; and I was likewise told, if I remember rightly, that he will be unchained for a time fifty or sixty years before the year of Christ 2000. The dates of many other events were pointed out to me which I do not now remember; but a certain number of demons are to be let loose much earlier than Lucifer, in order to tempt men, and to serve as instruments of the divine vengeance.” (Biblical Revelations, Vision of the Abyss)',
    theologicalCommentary:
      'One of the rarest features in Catholic private revelation is an explicit calendar benchmark. Speaking in the early 1820s, Blessed Anne Catherine Emmerich stated that Lucifer would be unchained “for a time fifty or sixty years before the year of Christ 2000” (corresponding to the decade of 1940–1950), preceded by lesser spirits loosed to test mankind. This directly parallels Pope Leo XIII’s famous 1884 vision of Satan being granted a century of heightened power to test the Church.',
    keyElements: [
      'Explicit chronological marker given in 1820: “fifty or sixty years before the year of Christ 2000” (c. 1940–1950)',
      'Temporary unchaining of Lucifer and lesser spirits to test humanity and purify the Church',
      'Corroboration of Pope Leo XIII’s 1884 locution (which inspired the St. Michael Prayer after Low Mass)',
      'Eventual re-chaining of the Abyss by St. Michael and the triumph of Christ'
    ],
    scriptureParallels: [
      {
        reference: 'Revelation 20:1–3, 7',
        testament: 'New Testament',
        text: '“And I saw an angel coming down from heaven, having the key of the bottomless pit, and a great chain in his hand. And he laid hold on the dragon, the old serpent, which is the devil and Satan... and after that he must be loosed a little time.”',
        correspondenceNote: 'Emmerich’s vision of Lucifer chained in the Abyss and “loosed for a time” is rooted in the twentieth chapter of the Apocalypse.'
      },
      {
        reference: 'Revelation 12:12',
        testament: 'New Testament',
        text: '“Woe to the earth, and to the sea, because the devil is come down unto you, having great wrath, knowing that he hath a short time.”',
        correspondenceNote: 'Explains the ferocity of the spiritual combat during the “short time” of Satan’s loosing.'
      }
    ]
  },

  // ============================================================================
  // BLESSED MARIE-JULIE JAHENNY
  // ============================================================================
  {
    id: 'jahenny-three-days-of-darkness',
    accessionNumber: 'CODEX-JAH-01',
    title: 'The Three Days of Universal Darkness & The Blessed Beeswax Candle',
    subtitle: 'Prophecies and celestial protections given to the Stigmatist of La Fraudais',
    sourceAuthor: 'Marie-Julie Jahenny',
    authorRole: 'Breton Stigmatist & Victim Soul of La Fraudais (1850–1941)',
    dateOrEra: '1873–1941 (Ecstasies recorded by Marquis de la Franquerie & Abbé David)',
    location: 'La Fraudais, Blain (Brittany), France',
    category: 'Bl. Marie-Julie Jahenny',
    ecclesiasticalStatus: 'Authenticity of Stigmata & Supernatural Virtues Affirmed by Bishop Eugène-félix Fournier of Nantes (1875)',
    eschatologicalPhase: 'II. Purification & The Three Days of Darkness',
    fulfillmentStatus: 'Conditional / Mitigable by Prayer & Fasting',
    primaryText:
      '“There will come three days of continuous darkness. The tapers of blessed wax alone will give light during this horrid darkness. One taper alone will suffice for the three days, but in the houses of the wicked they will not give light. During those three days the demons will appear in abominable and nauseating forms; they will make the air resound with atrocious blasphemies. The lightning will penetrate into the houses, but it will not extinguish the light of the blessed tapers: neither wind, nor storm, nor earthquake will extinguish them.\n\nRed clouds like blood will pass in the sky; the crash of thunder will shake the earth; sinister lightnings will furrow the clouds in a season when they never occur; the earth will be shaken to its foundations; the sea will raise foaming waves that will roar and spread over the continent... All the world will observe the Three Days of Darkness. No demon will be left in Hell; all will come out to excite the wicked and to strike terror into the just. Close your doors and windows, and do not look outside.” (Ecstasies of La Fraudais, 1878–1882)',
    theologicalCommentary:
      'Marie-Julie Jahenny (1850–1941) bore the full stigmata from age 23 until her death at age 91, including the wounds of the Crown of Thorns, the shoulder wound of the Cross, and a mystical wedding ring and inscription on her chest examined by canonical physicians appointed by Bishop Fournier of Nantes. Her prophecies of the Three Days of Darkness echo those of Blessed Anna Maria Taigi (beatified 1920), St. Gaspar del Bufalo, and Blessed Mary of Jesus Crucified (Miriam Baouardy, canonized 2015), emphasizing interior recollection, remaining indoors behind sealed windows, unceasing prayer to the Sacred Heart and Immaculate Heart, and burning blessed 100% pure beeswax candles.',
    keyElements: [
      'Three consecutive days and nights of impenetrable supernatural darkness across the globe',
      'Only blessed 100% pure beeswax candles will ignite and remain lit in the homes of the faithful',
      'Strict instruction to seal doors and windows, remain indoors in prayer, and refuse to look outside or answer counterfeit voices',
      'Atmospheric purification followed on the fourth morning by a radiant sunrise and a renewed earth'
    ],
    scriptureParallels: [
      {
        reference: 'Exodus 10:21–23',
        testament: 'Old Testament',
        text: '“And the Lord said to Moses: Stretch out thy hand towards heaven: and may there be darkness upon the land of Egypt, so thick that it may be felt. And Moses stretched forth his hand towards heaven: and there came horrible darkness in all the land of Egypt for three days. No man saw his brother, nor moved himself out of the place where he was: wheresoever the children of Israel dwelt, there was light.”',
        correspondenceNote: 'The Ninth Plague of Egypt—three days of palpable darkness where only the dwellings of the Israelites had light—is the direct biblical archetype.'
      },
      {
        reference: 'Wisdom 17:1–5, 20',
        testament: 'Old Testament',
        text: '“For while they thought to be able to domineer over the holy nation, they themselves being fettered with the bonds of darkness, and a long night, shut up in their houses, lay there exiled from the eternal providence... No power of fire could give them light, neither could the bright flames of the stars enlighten that horrible night... Only over them was spread a heavy night, an image of that darkness which was to come upon them.”',
        correspondenceNote: 'The Book of Wisdom explicitly teaches that natural fire could not burn during the three days of darkness, while God’s people enjoyed great light.'
      },
      {
        reference: 'Isaiah 26:20–21',
        testament: 'Old Testament',
        text: '“Go, my people, enter into thy chambers, shut thy doors upon thee, hide thyself a little for a moment, until the indignation pass away. For behold the Lord will come out of His place, to visit the iniquity of the inhabitant of the earth against him.”',
        correspondenceNote: 'Verbatim scriptural basis for the instruction to enter one’s chambers and shut the doors until the divine visitation passes.'
      }
    ]
  },
  {
    id: 'jahenny-purple-scapular-great-monarch',
    accessionNumber: 'CODEX-JAH-02',
    title: 'The Purple Scapular of Protection, Civil Upheaval & The Great Restoration',
    subtitle: 'Heavenly sacramentals for the time of trial and the restoration of Christian Christendom',
    sourceAuthor: 'Marie-Julie Jahenny',
    authorRole: 'Breton Stigmatist & Victim Soul of La Fraudais (1850–1941)',
    dateOrEra: 'August 23, 1878 & 1880–1891',
    location: 'La Fraudais, Blain (Brittany), France',
    category: 'Bl. Marie-Julie Jahenny',
    ecclesiasticalStatus: 'Canonical Approval of Virtue by Bishop Fournier of Nantes',
    eschatologicalPhase: 'II. Purification & The Three Days of Darkness',
    fulfillmentStatus: 'Unfulfilled — Awaiting Eschatological Completion',
    primaryText:
      '“My children, here is the Scapular of Benediction and Protection... Those who wear it will be protected from the storms, the tempests, and the terrible darkness. They will have light just as if it were plain day. Look, here is the Blood that flowed from My Heart and from My Wounds; it falls upon the Immaculate Virgin who holds Me in Her arms... \n\nWhen Paris shall be overturned and bathed in blood, when the Church shall appear deprived of her Chief Shepherd for a brief hour, then the King reserved by My Heart shall arise to restore order, rebuild the sanctuaries, and reunite the scattered flock under the Angelic Pastor.” (Ecstasies of August 23, 1878 & November 1881)',
    theologicalCommentary:
      'In addition to warnings of civil revolution in France and Italy, Our Lady and Our Lord revealed to Marie-Julie Jahenny specific sacramentals of protection for the homes of the faithful—most notably the **Purple Scapular of Benediction and Protection** (displaying the Crucifixion, the instruments of the Passion, and Our Lady of Sorrows at the foot of the Cross) and the **Cross of Forgiveness**—along with herbal remedies (such as the hawthorn leaf and blessed St. Benedict medal in water) for unknown pestilences, culminating in the restoration of Christendom during the Era of Peace.',
    keyElements: [
      'Revelation of the Purple Scapular of Benediction and Protection (August 23, 1878) to shield homes during the chastisements',
      'Prophecies of civil strife in Paris, Marseilles, and Rome prior to the purification',
      'Preservation of Brittany as a refuge of faith where the Cross and Mass are honored',
      'Restoration of Christian order and sacred liturgy following the purification'
    ],
    scriptureParallels: [
      {
        reference: 'Ezekiel 9:4–6',
        testament: 'Old Testament',
        text: '“And the Lord said to him: Go through the midst of the city, through the midst of Jerusalem: and mark Thau [the Cross] upon the foreheads of the men that sigh, and mourn for all the abominations that are committed in the midst thereof... Utterly destroy old and young, maidens, children and women: but upon whomsoever you shall see Thau, kill him not.”',
        correspondenceNote: 'Illustrates how the sign of the Cross and devotion to the Passion serve as a divine mark of protection during judgment.'
      },
      {
        reference: 'Revelation 7:2–3',
        testament: 'New Testament',
        text: '“Hurt not the earth, nor the sea, nor the trees, till we sign the servants of our God in their foreheads.”',
        correspondenceNote: 'Confirms God’s sealing and protection of His faithful servants before the angels loose the four winds upon the earth.'
      }
    ]
  },

  // ============================================================================
  // SAINTS, STIGMATISTS & SEERS
  // ============================================================================
  {
    id: 'saints-bosco-two-pillars',
    accessionNumber: 'CODEX-SNT-01',
    title: 'St. John Bosco: The Prophetic Dream of the Two Pillars in the Tempest',
    subtitle: 'The Papal Flagship anchored between the Most Holy Eucharist and Mary Help of Christians',
    sourceAuthor: 'St. John Bosco',
    authorRole: 'Founder of the Salesians & Canonized Prophet-Educator (1815–1888)',
    dateOrEra: 'May 30, 1862 (Biographical Memoirs of St. John Bosco, Vol. VII)',
    location: 'Turin, Italy',
    category: 'Saints, Stigmatists & Seers',
    ecclesiasticalStatus: 'Canonized Saint (April 1, 1934)',
    eschatologicalPhase: 'III. Triumph of the Immaculate Heart & Era of Peace',
    fulfillmentStatus: 'Unfolding in Present Epoch',
    primaryText:
      '“Imagine yourselves to be with me on the seashore, or better still, on an isolated rock and not to see any patch of land other than what is under your feet. On the whole of that vast sheet of water you see a countless fleet of ships in battle array. The prows of those ships are formed like sharp spear-like beaks capable of piercing and crashing through anything... All are armed with cannons, loads of rifles, incendiary materials of all kinds, and even books, and they advance against one ship much bigger and higher than all of them, trying to ram it with their beaks, set it afire, or cripple it in any way possible.\n\nIn the midst of the boundless sea, two solid columns, a short distance apart, soar high into the sky: one is surmounted by a statue of the Immaculate Virgin at whose feet hangs a large placard with the inscription: Auxilium Christianorum [Help of Christians]; the other, far loftier and sturdier, supports a Host of proportionate size and bears beneath it the inscription: Salus Credentium [Salvation of Believers].\n\nThe Supreme Commander — the Pope — stands at the helm... Struck seriously, he falls; those who are with him run to help him and lift him up. The Pope is struck a second time; he falls again and dies. A shout of victory and joy rings out amongst the enemies; from their ships an unspeakable mockery arises. But hardly is the Pontiff dead than another takes his place... The new Pope, putting the enemy to rout and overcoming every obstacle, leads the ship right up to the two columns and comes to rest between them; he makes it fast with a light chain that hangs from the bow to an anchor of the column on which stands the Host; and with another light chain that hangs from the stern, he fastens it at the opposite end to another anchor hanging from the column on which stands the Immaculate Virgin. Then a great convulsion takes place. All the ships that until then had fought against the ship of the Pope are scattered; they flee away, collide and break to pieces one against another... Over the sea there reigns a great calm.” (May 30, 1862)',
    theologicalCommentary:
      'St. John Bosco’s 1862 prophetic vision is one of the clearest roadmaps for the Church in the Eleventh Hour. Besieged by ideological warfare (“books, incendiary materials, and cannons”) and internal tempests, the Barque of Peter endures the martyrdom of a Pontiff before his immediate successor firmly anchors the universal Church between the Two Pillars: Eucharistic Adoration (*Salus Credentium*) and Marian Devotion (*Auxilium Christianorum*), immediately ushering in the great calm (the Era of Peace).',
    keyElements: [
      'The Barque of Peter besieged by a global armada wielding ideological books and incendiary weapons',
      'Two towering pillars rising from the sea: The Most Blessed Sacrament (Salus Credentium) and Mary Immaculate (Auxilium Christianorum)',
      'Martyrdom of the Pope at the helm (echoing the Third Secret of Fatima) and immediate election of his successor',
      'Anchoring of the Papal Flagship to both Pillars, causing the instant collapse of the enemy fleet and a “great calm over the sea”'
    ],
    scriptureParallels: [
      {
        reference: 'John 6:54–55',
        testament: 'New Testament',
        text: '“Except you eat the flesh of the Son of man, and drink His blood, you shall not have life in you. He that eateth My flesh, and drinketh My blood, hath everlasting life: and I will raise him up in the last day.”',
        correspondenceNote: 'Foundation for the taller Pillar of the Eucharist (Salus Credentium) as the anchor of the Church in the last days.'
      },
      {
        reference: 'Mark 4:39',
        testament: 'New Testament',
        text: '“And rising up, He rebuked the wind, and said to the sea: Peace, be still. And the wind ceased: and there was made a great calm.”',
        correspondenceNote: 'Mirrors the “great calm over the sea” that follows the anchoring of the Barque of Peter to the Two Pillars.'
      }
    ]
  },
  {
    id: 'saints-montfort-apostles-latter-times',
    accessionNumber: 'CODEX-SNT-02',
    title: 'St. Louis de Montfort: The Apostles of the Latter Times Formed by Mary',
    subtitle: 'True Devotion to the Blessed Virgin and the fiery ministers of the Holy Spirit in the end times',
    sourceAuthor: 'St. Louis Marie Grignion de Montfort',
    authorRole: 'Apostolic Missionary & Canonized Mariologist (1673–1716)',
    dateOrEra: 'c. 1712 (Treatise on True Devotion to the Blessed Virgin, §47–59)',
    location: 'La Rochelle / Saint-Laurent-sur-Sèvre, France',
    category: 'Saints, Stigmatists & Seers',
    ecclesiasticalStatus: 'Canonized by Pope Pius XII (July 20, 1947); Masterpiece of Pope St. John Paul II’s “Totus Tuus”',
    eschatologicalPhase: 'III. Triumph of the Immaculate Heart & Era of Peace',
    fulfillmentStatus: 'Unfolding in Present Epoch',
    primaryText:
      '“It was through the Blessed Virgin Mary that Jesus Christ came into the world, and it is also through her that He must reign in the world... In the second coming of Jesus Christ, Mary must be made known and revealed by the Holy Ghost, in order that through her Jesus Christ may be known, loved and served.\n\nGod wishes, therefore, to uncover and reveal Mary, the masterpiece of His hands, in these latter times... The formation and the education of the great saints who shall appear at the end of the world are reserved for her, for only this singular and miraculous Virgin can produce, in union with the Holy Ghost, singular and extraordinary things.\n\nThey shall be a burning fire of pure love of God and of their neighbor... They shall be thunder-clouds flying through the air at the slightest breath of the Holy Ghost; attached to nothing, surprised at nothing, troubled at nothing, they shall shower down the rain of God’s word and of eternal life. They shall have the two-edged sword of the word of God in their mouths, and the blood-stained standard of the Cross on their shoulders, the crucifix in their right hand and the rosary in their left, the sacred names of Jesus and Mary on their hearts, and the modesty and mortification of Jesus Christ in their entire behavior. These are the great men who are to come; by the will of God Mary is to prepare them to extend His rule over the impious and idolatrous.” (True Devotion to Mary, §1, §49–50, §56–59)',
    theologicalCommentary:
      'Hidden in a chest in a French field for 126 years to escape destruction and discovered in 1842 (exactly as St. Louis de Montfort had prophesied in §114 of the manuscript), *True Devotion to the Blessed Virgin* outlines the pneumatological and Marian character of the Latter Times. Just as the Holy Spirit formed the physical body of Christ in Mary’s womb at the Incarnation, so at the close of history the Holy Spirit and Mary together form the “Apostles of the Latter Times” to usher in the social and spiritual Reign of Christ through Mary.',
    keyElements: [
      'Fulfilled manuscript prophecy (§114): The book itself lay buried in a chest in darkness for 126 years before its discovery in 1842',
      'Theological principle: As Christ came the first time through Mary, so His eschatological reign comes through Mary made known by the Holy Spirit',
      'Portrait of the Apostles of the Latter Times: Crucifix in the right hand, Rosary in the left, two-edged sword of the Word of God in their mouths',
      'Preparation for the universal Reign of the Sacred Heart through the Immaculate Heart'
    ],
    scriptureParallels: [
      {
        reference: 'Psalm 104:30 (103:30)',
        testament: 'Old Testament',
        text: '“Thou shalt send forth Thy spirit, and they shall be created: and Thou shalt renew the face of the earth.”',
        correspondenceNote: 'The scriptural prayer of St. Louis de Montfort’s Prayer for Missionaries calling down the new Pentecost of the Latter Times.'
      },
      {
        reference: 'Hebrews 4:12',
        testament: 'New Testament',
        text: '“For the word of God is living and effectual, and more piercing than any two-edged sword; and reaching unto the division of the soul and the spirit.”',
        correspondenceNote: 'Cited by St. Louis de Montfort (§59) to describe the preaching weapon of the Apostles of the Latter Times.'
      }
    ]
  },
  {
    id: 'saints-hildegard-holzhauser-epochs',
    accessionNumber: 'CODEX-SNT-03',
    title: 'St. Hildegard of Bingen & Ven. Bartholomew Holzhauser: The Eschatological Epochs',
    subtitle: 'The purification of the Church, the Sixth Age of Consolation, and the final rise and fall of the Son of Perdition',
    sourceAuthor: 'St. Hildegard of Bingen (Doctor of the Church) & Venerable Bartholomew Holzhauser',
    authorRole: 'Benedictine Abbess & Doctor of the Church (1098–1179); German Exegete of the Apocalypse (1613–1658)',
    dateOrEra: '1151 (Scivias, Book III, Vision 11) & 1646 (Interpretation of the Apocalypse)',
    location: 'Bingen am Rhein & Bingen/Ingolstadt, Germany',
    category: 'Saints, Stigmatists & Seers',
    ecclesiasticalStatus: 'St. Hildegard Declared Doctor of the Universal Church by Pope Benedict XVI (October 7, 2012)',
    eschatologicalPhase: 'III. Triumph of the Immaculate Heart & Era of Peace',
    fulfillmentStatus: 'Unfulfilled — Awaiting Eschatological Completion',
    primaryText:
      '“Then justice will decline, and iniquity will abound until the Church undergoes a great purification... After this purification, princes and peoples will return to the fear of God, and peace and justice will be restored to the earth, so that men will say: ‘Such peace was never granted before.’ This consolation is granted so that the Bride of Christ may be arrayed in radiant holiness before the final birth-pangs, when the Son of Perdition shall arise for a short season and attempt to ascend into heaven on a mountain, where he shall be struck down by the thunderbolt of the Father.” (St. Hildegard of Bingen, Scivias III.11)\n\n“The Sixth Age of the Church—corresponding to the Church of Philadelphia—begins with the deliverance of the nations and is the Age of Consolation, in which the Holy Spirit will pour out charity, the sciences will be sanctified, and all nations will become Catholic before the Seventh Age of the Antichrist and the End of the World.” (Venerable Bartholomew Holzhauser, Commentary on the Apocalypse)',
    theologicalCommentary:
      'Proclaimed a Doctor of the Universal Church by Pope Benedict XVI in 2012, St. Hildegard of Bingen in *Scivias* (Book III, Vision 11) and Venerable Bartholomew Holzhauser in his commentary on the Seven Churches of Revelation 2–3 provide the architectural framework uniting all Catholic prophecy: history does not end in defeat, but passes through a severe purification into an era of extraordinary sanctity and global evangelization (the Sixth Age / Era of Peace), which in turn prepares the Bride of Christ for the brief final persecution of the personal Antichrist (who is struck down when attempting a counterfeit ascension) and the Glorious Second Coming.',
    keyElements: [
      'St. Hildegard’s Five Eschatological Beasts (Scivias III.11) mapping the ages leading up to the end of time',
      'Purification of the clergy and laity followed by an unprecedented “Age of Consolation” and peace',
      'Venerable Holzhauser’s Seven Ages of the Church (Ephesus to Laodicea), identifying the Sixth Age (Philadelphia) as the universal triumph of the Faith',
      'St. Hildegard’s detailed account of the Antichrist’s counterfeit death, resurrection, and attempted ascension, where he is slain by the breath of Christ (2 Thess 2:8)'
    ],
    scriptureParallels: [
      {
        reference: 'Revelation 3:7–8, 10',
        testament: 'New Testament',
        text: '“And to the angel of the church of Philadelphia, write: These things saith the Holy One and the true one, He that hath the key of David... Behold, I have given before thee a door opened, which no man can shut... Because thou hast kept the word of My patience, I will also keep thee from the hour of temptation, which shall come upon the whole world to try them that dwell upon the earth.”',
        correspondenceNote: 'The letter to the Church of Philadelphia forms the basis of Venerable Holzhauser’s Sixth Age of Consolation.'
      },
      {
        reference: 'Ephesians 5:27',
        testament: 'New Testament',
        text: '“That He might present it to Himself a glorious church, not having spot or wrinkle, or any such thing; but that it should be holy, and without blemish.”',
        correspondenceNote: 'Explains why St. Hildegard sees the Church purified and adorned in radiant holiness prior to the final Parousia.'
      }
    ]
  }
];
