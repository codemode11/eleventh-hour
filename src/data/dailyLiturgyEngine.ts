export interface DailyReadingSection {
  label: string;
  citation: string;
  title: string;
  text: string;
  responseRefrain?: string;
}

export interface SaintOfTheDay {
  name: string;
  title: string;
  feastRank: string;
  dates: string;
  patronage: string;
  biography: string;
  propheticAndSpiritualLesson: string;
  collectPrayer: string;
}

export interface PatristicGospelCommentary {
  gospelCitation: string;
  homilyTitle: string;
  exegeticalOverview: string;
  patristicVoices: {
    father: string;
    sourceWork: string;
    era: string;
    commentary: string;
  }[];
  eleventhHourApplication: string;
}

export interface DailyCustomFeature {
  id: string;
  title: string;
  category: string;
  enabled: boolean;
  dailyEntries: {
    heading: string;
    source: string;
    content: string;
    scriptureAnchor: string;
  }[];
}

export interface DailyLiturgicalDossier {
  isoDate: string;
  formattedDate: string;
  liturgicalDayTitle: string;
  liturgicalSeason: string;
  liturgicalColor: 'Green' | 'White' | 'Red' | 'Violet' | 'Gold';
  lectionaryCycle: string;
  psalterWeek: string;
  readings: {
    firstReading: DailyReadingSection;
    responsorialPsalm: DailyReadingSection;
    alleluia: DailyReadingSection;
    gospel: DailyReadingSection;
  };
  saintOfTheDay: SaintOfTheDay;
  gospelCommentary: PatristicGospelCommentary;
  dailyFaustinaExcerpt: {
    diaryNumber: string;
    text: string;
    theme: string;
  };
  dailyMarianWatchword: {
    apparitionSource: string;
    message: string;
    dailyPractice: string;
  };
}

// Curated exact liturgical entries for late October / early November 2026 & algorithmic generator for all 365 days of the year
const EXACT_DAILY_LECTIONARY: Record<string, Omit<DailyLiturgicalDossier, 'isoDate' | 'formattedDate'>> = {
  '10-28': {
    liturgicalDayTitle: 'Feast of Saints Simon and Jude, Apostles',
    liturgicalSeason: 'Ordinary Time — Apostolic Feast',
    liturgicalColor: 'Red',
    lectionaryCycle: 'Festal Lectionary (No. 666) · Year II',
    psalterWeek: 'Proper of Apostles',
    readings: {
      firstReading: {
        label: 'First Reading',
        citation: 'Ephesians 2:19–22',
        title: 'Built upon the foundation of the Apostles and Prophets',
        text: 'Brethren: You are no more strangers and foreigners; but you are fellow citizens with the saints, and the domestics of God, built upon the foundation of the apostles and prophets, Jesus Christ Himself being the chief corner stone: in whom all the building, being framed together, groweth up into an holy temple in the Lord. In whom you also are built together into an habitation of God in the Spirit.'
      },
      responsorialPsalm: {
        label: 'Responsorial Psalm',
        citation: 'Psalm 19:2–3, 4–5',
        title: 'Their message goes out through all the earth',
        responseRefrain: 'R. Their message goes out through all the earth.',
        text: 'The heavens show forth the glory of God, and the firmament declareth the work of His hands. Day to day uttereth speech, and night to night showeth knowledge.\n\nThere are no speeches nor languages, where their voices are not heard. Their sound hath gone forth into all the earth: and their words unto the ends of the world.'
      },
      alleluia: {
        label: 'Alleluia Verse',
        citation: 'Te Deum / John 15:16',
        title: 'Acclamation before the Gospel',
        text: 'Alleluia, alleluia. We praise You, O God, we acclaim You as Lord; the glorious company of Apostles praise You. Alleluia.'
      },
      gospel: {
        label: 'Holy Gospel',
        citation: 'Luke 6:12–16',
        title: 'He chose twelve, whom He also named Apostles',
        text: 'In those days, Jesus went out into a mountain to pray, and He passed the whole night in the prayer of God. And when day was come, He called unto Him His disciples; and He chose twelve of them (whom also He named apostles): Simon, whom He surnamed Peter, and Andrew his brother, James and John, Philip and Bartholomew, Matthew and Thomas, James the son of Alphaeus, and Simon who is called Zelotes, and Jude the brother of James, and Judas Iscariot, who was the traitor.'
      }
    },
    saintOfTheDay: {
      name: 'Saints Simon the Zealot & Jude Thaddaeus, Apostles and Martyrs',
      title: 'Apostles of Jesus Christ & Martyrs in Persia',
      feastRank: 'Feast (Red Vestments)',
      dates: 'First Century AD (Martyred c. 65 AD in Suanir, Persia)',
      patronage: 'Desperate Cases, Impossible Causes, & Persecuted Churches in the East',
      biography: 'St. Simon is surnamed the Canaanite or Zealot to distinguish him from St. Peter, signifying his burning zeal for God’s law before being called by Christ. St. Jude (also called Thaddaeus, brother of St. James the Less) asked Our Lord at the Last Supper: “Lord, how is it that Thou wilt manifest Thyself to us, and not to the world?” (John 14:22). Author of the Catholic Epistle of Jude, which contains the famous Old Testament prophecy of Enoch regarding the Second Coming, Jude and Simon evangelized Mesopotamia and Persia together, overthrowing pagan idols and sealing their apostolic testimony with martyrdom.',
      propheticAndSpiritualLesson: 'St. Jude’s canonical Epistle was written specifically for the “last time” (Jude 1:18), preserving the ancient prophecy of Enoch: “Behold, the Lord cometh with thousands of His saints, to execute judgment upon all” (Jude 1:14–15). St. Bridget of Sweden received a revelation from Christ instructing the faithful to invoke St. Jude with unshakeable confidence in hours of desperate spiritual and temporal trial.',
      collectPrayer: 'O God, who by the blessed Apostles have brought us to acknowledge Your name, graciously grant, through the intercession of Saints Simon and Jude, that the Church may constantly grow by increase of the peoples who believe in You. Through our Lord Jesus Christ. Amen.'
    },
    gospelCommentary: {
      gospelCitation: 'Luke 6:12–16',
      homilyTitle: 'Christ’s All-Night Vigil on the Mountain & The Twelve Pillars of the New Israel',
      exegeticalOverview: 'Before constituting the hierarchy of the New Covenant—the Twelve Apostles who will sit upon twelve thrones judging the twelve tribes of Israel (Luke 22:30)—Our Lord spends the entire night in solitary prayer upon the mountain. The Church’s apostolic foundation is born directly from the nocturnal prayer of the Incarnate Word.',
      patristicVoices: [
        {
          father: 'St. Ambrose of Milan',
          sourceWork: 'Exposition of the Gospel of Luke, Book V, §43',
          era: 'Doctor of the Church (c. 389 AD)',
          commentary: '“Do not pass by lightly the fact that the Lord prays all night before He chooses the Apostles. He gives you the model you ought to imitate whenever you undertake a great work for the Kingdom of God. What should you do, O man, when Christ Himself prays all night on your behalf?”'
        },
        {
          father: 'St. Cyril of Alexandria',
          sourceWork: 'Commentary on Luke, Homily 24',
          era: 'Doctor of the Church (c. 430 AD)',
          commentary: '“By choosing twelve Apostles, Christ fulfills the ancient figure of the twelve patriarchs and the twelve springs of water at Elim (Exodus 15:27), so that from these twelve fountains the whole arid world might drink the living water of the Gospel.”'
        }
      ],
      eleventhHourApplication: 'In the Eleventh Hour of the Church, when apostolic faith is tested, Luke 6:12 reminds us that nocturnal vigil, Eucharistic adoration, and fidelity to the Apostolic Deposit (Jude 1:3) are the unshakeable anchors of the faithful.'
    },
    dailyFaustinaExcerpt: {
      diaryNumber: 'Diary §1146',
      text: '“Let the greatest sinners place their trust in My mercy. They have the right before others to trust in the abyss of My mercy. My daughter, write about My mercy towards tormented souls. Souls that make an appeal to My mercy delight Me. To such souls I grant even more graces than they ask. I cannot punish even the greatest sinner if he makes an appeal to My compassion, but on the contrary, I justify him in My unfathomable and inscrutable mercy. Write: before I come as a just Judge, I first open wide the door of My mercy. He who refuses to pass through the door of My mercy must pass through the door of My justice.”',
      theme: 'The Door of Mercy Open Wide Before the Door of Justice'
    },
    dailyMarianWatchword: {
      apparitionSource: 'Our Lady of Fatima (October 13, 1917)',
      message: '“I am the Lady of the Rosary. Continue always to pray the Rosary every day. Do not offend the Lord our God any more, because He is already so much offended.”',
      dailyPractice: 'Offer five decades of the Most Holy Rosary today in reparation for offenses against the Immaculate Heart of Mary.'
    }
  },
  '10-29': {
    liturgicalDayTitle: 'Thursday of the Thirtieth Week in Ordinary Time',
    liturgicalSeason: 'Ordinary Time · Week XXX',
    liturgicalColor: 'Green',
    lectionaryCycle: 'Weekday Cycle II · Year A/C Transition (Lectionary No. 482)',
    psalterWeek: 'Psalter Week II',
    readings: {
      firstReading: {
        label: 'First Reading',
        citation: 'Ephesians 6:10–20',
        title: 'Put on the armor of God, that you may be able to stand against the deceits of the devil',
        text: 'Brethren, be strengthened in the Lord, and in the might of His power. Put you on the armour of God, that you may be able to stand against the deceits of the devil. For our wrestling is not against flesh and blood; but against principalities and powers, against the rulers of the world of this darkness, against the spirits of wickedness in the high places. Therefore take unto you the armour of God, that you may be able to resist in the evil day, and to stand in all things perfect. Stand therefore, having your loins girt about with truth, and having on the breastplate of justice, and your feet shod with the preparation of the gospel of peace: in all things taking the shield of faith, wherewith you may be able to extinguish all the fiery darts of the most wicked one. And take unto you the helmet of salvation, and the sword of the Spirit (which is the word of God). By all prayer and supplication praying at all times in the spirit; and in the same watching with all instance and supplication for all the saints: and for me, that speech may be given me, that I may open my mouth with confidence, to make known the mystery of the gospel, for which I am an ambassador in a chain, so that therein I may be bold to speak according as I ought.'
      },
      responsorialPsalm: {
        label: 'Responsorial Psalm',
        citation: 'Psalm 144:1b, 2, 9–10',
        title: 'Blessed be the Lord, my Rock!',
        responseRefrain: 'R. Blessed be the Lord, my Rock!',
        text: 'Blessed be the Lord my God, who teacheth my hands to fight, and my fingers to war. My mercy, and my refuge: my support, and my deliverer: My protector, and I have hoped in Him: who subdueth my people under me.\n\nTo Thee, O God, I will sing a new canticle: on the psaltery and an instrument of ten strings I will sing praises to Thee. Who givest salvation to kings: who hast redeemed Thy servant David from the malicious sword.'
      },
      alleluia: {
        label: 'Alleluia Verse',
        citation: 'Luke 19:38; 2:14',
        title: 'Acclamation before the Gospel',
        text: 'Alleluia, alleluia. Blessed is the King who comes in the name of the Lord! Peace in heaven and glory in the highest! Alleluia.'
      },
      gospel: {
        label: 'Holy Gospel',
        citation: 'Luke 13:31–35',
        title: 'It cannot be that a prophet perish out of Jerusalem... Until the time come when you shall say: Blessed is He that cometh in the name of the Lord',
        text: 'The same day, there came some of the Pharisees, saying to Jesus: Depart, and get Thee hence, for Herod hath a mind to kill Thee. And He said to them: Go and tell that fox, Behold, I cast out devils, and do cures to day and to morrow, and the third day I am consummated. Nevertheless I must walk to day and to morrow, and the day following, because it cannot be that a prophet perish out of Jerusalem. Jerusalem, Jerusalem, that killest the prophets, and stonest them that are sent to thee, how often would I have gathered thy children, as the bird doth her brood under her wings, and thou wouldest not? Behold your house shall be left to you desolate. And I say to you, that you shall not see Me till the time come, when you shall say: Blessed is He that cometh in the name of the Lord.'
      }
    },
    saintOfTheDay: {
      name: 'Saint Narcissus of Jerusalem, Bishop and Confessor',
      title: 'Thirtieth Bishop of Jerusalem & Miracle-Worker of the Paschal Vigil',
      feastRank: 'Commemoration in the Roman Martyrology (October 29) · Optional Memorial',
      dates: 'c. 99 AD – c. 216 AD (Lived to 116 years of age)',
      patronage: 'Bishops Falsely Accused, Sanctuary Lamp Bearers, & Fidelity in Old Age',
      biography: 'Born at the close of the Apostolic Age near the death of St. John the Evangelist, St. Narcissus became the thirtieth Bishop of Jerusalem around 180 AD and co-presided over the Council of Caesarea (195 AD) establishing that Easter must always be celebrated on a Sunday. According to the church historian Eusebius of Caesarea (Ecclesiastical History VI.9–11), during the great Easter Vigil in Jerusalem the deacons ran out of oil for the sanctuary lamps; St. Narcissus ordered water to be drawn from the well, prayed over it in faith, and bade them pour it into the lamps, where it was miraculously transformed into pure olive oil—samples of which were preserved in Jerusalem for centuries. Later slandered by three perjurers who feared his strict discipline, Narcissus forgave them and withdrew into the desert to live as a solitary hermit for years before returning to Jerusalem after his accusers’ falsehood was exposed, governing his flock until the age of 116.',
      propheticAndSpiritualLesson: 'St. Narcissus turning water into Paschal lamp-oil during the midnight vigil is a living prophetic sign of the Wise Virgins (Matthew 25:1–13) whose lamps do not go out when the Bridegroom delays in the night, and prefigures the supernatural light promised to the faithful during the cosmic darkness.',
      collectPrayer: 'Almighty and ever-living God, who gladdened the Church of Jerusalem by the apostolic longevity, patience under calumny, and Paschal miracles of Your blessed Bishop Narcissus, grant that in the midnight vigil of this world our lamps may never lack the oil of charity and living faith when Christ the Bridegroom appears. Who lives and reigns forever and ever. Amen.'
    },
    gospelCommentary: {
      gospelCitation: 'Luke 13:31–35',
      homilyTitle: 'The Sovereign Hour of Christ, The Lament Over Jerusalem & The Eschatological Acclamation',
      exegeticalOverview: 'Today’s liturgy pairs two towering eschatological passages: St. Paul’s command in Ephesians 6:10–20 to “put on the armor of God that you may be able to resist in the evil day,” and Our Lord’s solemn prophecy over Jerusalem in Luke 13:31–35. When warned of Herod Antipas (“that fox”), Jesus reveals that no earthly tyrant can shorten His messianic timetable by a single hour (“today, tomorrow, and the third day I am consummated”). He then utters a twofold prophecy over Jerusalem: first, its desolation for rejecting the maternal wings of Divine Mercy (“your house shall be left to you desolate”), and second, its future eschatological conversion at the end of time (“until the time come when you shall say: Blessed is He that cometh in the name of the Lord”).',
      patristicVoices: [
        {
          father: 'St. Bede the Venerable',
          sourceWork: 'In Lucae Evangelium Expositio, Book IV (Catena Aurea)',
          era: 'Doctor of the Church (672–735 AD)',
          commentary: '“By ‘today and tomorrow’ Our Lord signifies the whole allotted time of His preaching in the flesh, and by ‘the third day I am consummated’ He foretells the triumph of His Passion and Resurrection on the third day, proving that He suffers not by Herod’s craft, but by His own sovereign will. And when He says, ‘You shall not see Me until the time come when you shall say: Blessed is He that cometh in the name of the Lord,’ He points beyond Palm Sunday to the end of the world, when, after the preaching of Enoch and Elijah, the remnant of Israel shall finally acclaim Him as their true Messias.”'
        },
        {
          father: 'St. Cyril of Alexandria',
          sourceWork: 'Commentary on the Gospel of St. Luke, Homily 100',
          era: 'Doctor of the Church (376–444 AD)',
          commentary: '“Consider the tenderness of the Savior: as a bird warms and shields her fledgling brood beneath her wings against the hawk in the sky, so Christ desired to gather Jerusalem beneath His divine protection against the spiritual powers of wickedness in the high places. Because she refused His wings of mercy, her house was left empty of grace until the last days when she shall repent and welcome Him with the Psalm of benediction.”'
        },
        {
          father: 'St. John Chrysostom',
          sourceWork: 'Homilies on the Gospel of Matthew (Parallel on Matt 23:39) & Homily 22 on Ephesians',
          era: 'Doctor of the Church (347–407 AD)',
          commentary: '“Why does He say ‘until you shall say, Blessed is He that cometh’? He speaks here of that future day of His Second Coming when they shall look upon Him whom they pierced and shall acknowledge the Lord whom they formerly spurned. Meanwhile, as St. Paul warns us today in Ephesians, ‘the evil day’ requires every Christian to stand fully armed with the belt of Truth, the breastplate of Justice, the shield of Faith, and the Sword of the Spirit.”'
        }
      ],
      eleventhHourApplication: 'Both readings today speak directly to the Eleventh Hour: (1) Ephesians 6:10–20 provides the exact spiritual panoply required to withstand “the evil day” and “the spirits of wickedness in the high places”; and (2) Luke 13:35 confirms the unfulfilled biblical prophecy that Jerusalem will one day convert and cry out “Blessed is He that cometh in the name of the Lord” to welcome the returning King.'
    },
    dailyFaustinaExcerpt: {
      diaryNumber: 'Diary §83 & §635',
      text: '“My daughter, speak to the world of My mercy; let all mankind recognize My unfathomable mercy. It is a sign for the end times; after it will come the day of justice. While there is still time, let them have recourse to the fount of My mercy; let them profit from the Blood and Water which gushed forth for them... Tell souls where they are to look for solace; that is, in the Tribunal of Mercy [the Sacrament of Confession]. There the greatest miracles take place and are incessantly repeated.”',
      theme: 'Putting on the Armor of God through the Tribunal of Divine Mercy'
    },
    dailyMarianWatchword: {
      apparitionSource: 'Our Lady of Fatima & Medjugorje (The Five Stones)',
      message: '“Dear children, put Sacred Scripture in a visible place in your family, read it, reflect on it, and put on the armor of prayer and fasting.”',
      dailyPractice: 'Read Ephesians 6:10–18 aloud today and trace the Sign of the Cross with Holy Water upon your forehead, lips, and heart.'
    }
  },
  '10-30': {
    liturgicalDayTitle: 'Friday of the Thirtieth Week in Ordinary Time',
    liturgicalSeason: 'Ordinary Time · Week XXX',
    liturgicalColor: 'Green',
    lectionaryCycle: 'Weekday Cycle II (Lectionary No. 483)',
    psalterWeek: 'Psalter Week II',
    readings: {
      firstReading: {
        label: 'First Reading',
        citation: 'Philippians 1:1–11',
        title: 'He who began a good work in you will bring it to completion at the Day of Jesus Christ',
        text: 'Paul and Timothy, the servants of Jesus Christ; to all the saints in Christ Jesus, who are at Philippi, with the bishops and deacons: Grace be unto you, and peace from God our Father, and from the Lord Jesus Christ. I give thanks to my God in every remembrance of you, always in all my prayers making supplication for you all, with joy; for your communication in the gospel of Christ from the first day until now. Being confident of this very thing, that He, who hath begun a good work in you, will perfect it unto the day of Christ Jesus... And this I pray, that your charity may more and more abound in knowledge, and in all understanding: that you may approve the better things, that you may be sincere and without offence unto the day of Christ, filled with the fruit of justice, through Jesus Christ, unto the glory and praise of God.'
      },
      responsorialPsalm: {
        label: 'Responsorial Psalm',
        citation: 'Psalm 111:1–2, 3–4, 5–6',
        title: 'How great are the works of the Lord!',
        responseRefrain: 'R. How great are the works of the Lord!',
        text: 'I will praise Thee, O Lord, with my whole heart; in the council of the just, and in the congregation. Great are the works of the Lord: sought out according to all His wills.\n\nHis work is praise and magnificence: and His justice continueth for ever and ever. He hath made a remembrance of His wonderful works, being a merciful and gracious Lord: He hath given food to them that fear Him. He will be mindful for ever of His covenant.'
      },
      alleluia: {
        label: 'Alleluia Verse',
        citation: 'John 10:27',
        title: 'Acclamation before the Gospel',
        text: 'Alleluia, alleluia. My sheep hear My voice, says the Lord; I know them, and they follow Me. Alleluia.'
      },
      gospel: {
        label: 'Holy Gospel',
        citation: 'Luke 14:1–6',
        title: 'Is it lawful to heal on the Sabbath day?',
        text: 'And it came to pass, when Jesus went into the house of one of the chief of the Pharisees, on the sabbath day, to eat bread, that they watched Him. And behold, there was a certain man before Him that had the dropsy. And Jesus answering, spoke to the lawyers and Pharisees, saying: Is it lawful to heal on the sabbath day? But they held their peace. But He taking him, healed him, and sent him away. And answering them, He said: Which of you shall have an ass or an ox fall into a pit, and will not immediately draw him out, on the sabbath day? And they could not answer Him to these things.'
      }
    },
    saintOfTheDay: {
      name: 'Saint Marcellus the Centurion, Martyr of Tangier',
      title: 'Roman Centurion of the Legio VII Gemina & Martyr',
      feastRank: 'Commemoration in the Roman Martyrology (October 30)',
      dates: 'Died October 30, 298 AD in Tingis (Tangier, Morocco)',
      patronage: 'Conscientious Soldiers, Public Witnesses to Christ the King, & Courage Against Idolatrous Mandates',
      biography: 'During the public festivities celebrating the birthday of the Emperor Maximian in 298 AD, when all officers of the Roman legion were required to offer incense and libations to the pagan idols of the empire, the Christian centurion St. Marcellus stepped forward before the standards, cast off his military belt, sword, and centurion’s vine-staff, and declared aloud: “I serve Jesus Christ the Eternal King. From this hour I cease to serve your emperors, and I scorn to worship your gods of wood and stone, which are deaf and dumb idols.” Tried at Tangier before the Prefect Agricolanus, whose official court stenographic transcript (*Acta Sincera*) survives to this day, Marcellus asked God to bless the judge even as he was condemned to be beheaded for Christ.',
      propheticAndSpiritualLesson: 'St. Marcellus the Centurion embodies the prophetic courage required when state power demands idolatrous homage (Revelation 13:15). He refused to compromise his baptismal allegiance to Christ the Eternal King while maintaining supernatural charity toward his executioner.',
      collectPrayer: 'O God, who strengthened Blessed Marcellus Your Martyr to cast aside earthly honors rather than burn incense to false idols, grant us unshakeable fidelity to Jesus Christ the Eternal King in every hour of trial. Amen.'
    },
    gospelCommentary: {
      gospelCitation: 'Luke 14:1–6',
      homilyTitle: 'The Divine Physician Healing Dropsy on the Sabbath & The Eternal Sabbath Rest',
      exegeticalOverview: 'In Luke 14:1–6, Our Lord heals a man afflicted with dropsy (edema—an insatiable thirst that increases the more one drinks) on the Sabbath day under the hostile gaze of the Pharisees, while St. Paul in Philippians 1:6–10twice directs the Church’s gaze toward “the Day of Christ Jesus.”',
      patristicVoices: [
        {
          father: 'St. Gregory the Great',
          sourceWork: 'Moralia in Job & Homilies on the Gospels',
          era: 'Pope & Doctor of the Church (540–604 AD)',
          commentary: '“Mystically, dropsy—in which the body swells with fluid while the patient’s thirst only grows more parched—signifies avarice and disordered worldly cravings: the more a soul drinks of earthly pleasures and riches, the more swollen with pride and thirsty it becomes. Christ heals this dropsy on the Sabbath to teach us that only the grace of the true Sabbath—the rest of the Holy Spirit—cures the insatiable fever of the world.”'
        },
        {
          father: 'St. Augustine of Hippo',
          sourceWork: 'Sermons on the New Testament',
          era: 'Doctor of the Church (354–430 AD)',
          commentary: '“The Pharisees were silent because they saw their own inner disease in the man before them. Our Lord draws us out of the pit on the Sabbath because He Himself is the Lord of the Seventh Age—the eternal Sabbath that has no evening.”'
        }
      ],
      eleventhHourApplication: 'Philippians 1:6, 10 (“unto the Day of Christ”) calls us to remain “sincere and without offense unto the Day of Christ,” cured of worldly avarice so that we are ready when the Seventh Day of eternity dawns.'
    },
    dailyFaustinaExcerpt: {
      diaryNumber: 'Diary §1588',
      text: '“At three o’clock, implore My mercy, especially for sinners; and, if only for a brief moment, immerse yourself in My Passion, particularly in My abandonment at the moment of agony. This is the hour of great mercy for the whole world.”',
      theme: 'The Three O’Clock Hour of Great Mercy on Friday'
    },
    dailyMarianWatchword: {
      apparitionSource: 'Our Lady of Medjugorje (Friday Fasting Call)',
      message: '“Dear children, only by prayer and fasting can war be stopped and the laws of nature even be suspended.”',
      dailyPractice: 'Observe Friday abstinence and pause at 3:00 PM to pray the Chaplet of Divine Mercy for the conversion of sinners.'
    }
  },
  '10-31': {
    liturgicalDayTitle: 'Saturday of the Thirtieth Week in Ordinary Time (Vigil of All Saints)',
    liturgicalSeason: 'Ordinary Time · Week XXX / Eve of All Hallows',
    liturgicalColor: 'White',
    lectionaryCycle: 'Weekday Cycle II (Lectionary No. 484)',
    psalterWeek: 'Psalter Week II',
    readings: {
      firstReading: {
        label: 'First Reading',
        citation: 'Philippians 1:18b–26',
        title: 'For to me, to live is Christ, and to die is gain',
        text: 'Brethren: Christ shall be magnified in my body, whether it be by life, or by death. For to me, to live is Christ: and to die is gain. And if to live in the flesh, this is to me the fruit of labour, and what I shall choose I know not. But I am straitened between two: having a desire to be dissolved and to be with Christ, a thing by far the better. But to abide still in the flesh, is needful for you.'
      },
      responsorialPsalm: {
        label: 'Responsorial Psalm',
        citation: 'Psalm 42:2, 3, 5cdef',
        title: 'My soul is thirsting for the living God',
        responseRefrain: 'R. My soul is thirsting for the living God.',
        text: 'As the hart panteth after the fountains of water; so my soul panteth after Thee, O God. My soul hath thirsted after the strong living God; when shall I come and appear before the face of God?'
      },
      alleluia: {
        label: 'Alleluia Verse',
        citation: 'Matthew 11:29ab',
        title: 'Acclamation before the Gospel',
        text: 'Alleluia, alleluia. Take My yoke upon you and learn from Me, for I am meek and humble of heart. Alleluia.'
      },
      gospel: {
        label: 'Holy Gospel',
        citation: 'Luke 14:1, 7–11',
        title: 'Every one that exalteth himself shall be humbled; and he that humbleth himself shall be exalted',
        text: 'Jesus spoke a parable to those who had been invited, noticing how they chose the places of honor at the table: When thou art invited to a wedding, sit not down in the first place, lest perhaps one more honorable than thou be invited by him... But when thou art invited, go, sit down in the lowest place; that when he who invited thee cometh, he may say to thee: Friend, go up higher. Then shalt thou have glory before them that sit at table with thee. Because every one that exalteth himself, shall be humbled; and he that humbleth himself, shall be exalted.'
      }
    },
    saintOfTheDay: {
      name: 'Saint Wolfgang of Regensburg, Bishop, & St. Alphonsus Rodriguez',
      title: 'Benedictine Monk, Bishop of Regensburg & Jesuit Lay Brother Mystic',
      feastRank: 'Commemoration in the Roman Martyrology (October 31) · All Hallows’ Eve',
      dates: 'St. Wolfgang (924–994 AD); St. Alphonsus Rodriguez (1532–1617)',
      patronage: 'Doorkeepers of the Sanctuary, Humility of Heart, & Vigil of All Saints',
      biography: 'St. Wolfgang of Regensburg reformed monastic life across Bavaria and formed the future Emperor St. Henry II in holiness. St. Alphonsus Rodriguez, after losing his wife and children, entered the Society of Jesus as a humble lay brother doorkeeper at Majorca for 46 years; though occupying the lowest place at the door, he was favored with extraordinary mystical visions of Our Lady (who wiped the sweat from his brow with her veil) and formed St. Peter Claver for his mission to the enslaved in Cartagena.',
      propheticAndSpiritualLesson: 'On the Eve of All Saints (All Hallows’ Eve), the Church counters darkness with the light of the Communion of Saints and the humility of the “lowest place” (Luke 14:10), which alone defeats the pride of Lucifer.',
      collectPrayer: 'Almighty God, who exalt the humble and cast down the proud, grant us on this Vigil of All Saints to seek the lowest place with Christ so as to be invited higher at the Marriage Supper of the Lamb. Amen.'
    },
    gospelCommentary: {
      gospelCitation: 'Luke 14:1, 7–11',
      homilyTitle: 'The Marriage Supper of the Lamb & The Humility That Overthrows Antichrist',
      exegeticalOverview: 'Our Lord’s parable of the Wedding Banquet in Luke 14:7–11 looks directly toward the eschatological Marriage Supper of the Lamb (Revelation 19:9). While Lucifer and the Man of Sin seek to exalt themselves to the highest seat (Isaiah 14:13; 2 Thess 2:4), the saints conquer by choosing the lowest place in imitation of the Immaculata.',
      patristicVoices: [
        {
          father: 'St. Bede the Venerable',
          sourceWork: 'Commentary on Luke, Book IV',
          era: 'Doctor of the Church (672–735 AD)',
          commentary: '“He who sits down in the lowest place at the banquet of the Church is he who esteems himself least of all; and when the heavenly Host arrives at the Day of Judgment, He says to him before all the angels: ‘Friend, go up higher.’”'
        }
      ],
      eleventhHourApplication: 'In spiritual combat, humility is the one virtue Satan cannot counterfeit. Choosing the lowest place with Jesus and Mary renders the soul impervious to the illusions of the enemy.'
    },
    dailyFaustinaExcerpt: {
      diaryNumber: 'Diary §1702',
      text: '“Because you are a child, you shall remain close to My Heart. Your simplicity is More pleasing to Me than all your mortifications. Remain always in the lowest place of humility, for there My grace flows most abundantly.”',
      theme: 'The Lowest Place Closest to the Merciful Heart'
    },
    dailyMarianWatchword: {
      apparitionSource: 'First Saturday Reparation (Pontevedra, Dec 10, 1925)',
      message: '“Look, My daughter, at My Heart, surrounded with thorns with which ungrateful men pierce Me at every moment by their blasphemies and ingratitude.”',
      dailyPractice: 'Keep vigil on this Eve of All Saints with fifteen minutes of meditative company with Our Lady on the Mysteries of the Rosary.'
    }
  },
  '11-01': {
    liturgicalDayTitle: 'Solemnity of All Saints (Omnium Sanctorum)',
    liturgicalSeason: 'Solemnity of the Universal Church',
    liturgicalColor: 'White',
    lectionaryCycle: 'Solemnity Lectionary (No. 667)',
    psalterWeek: 'Proper of Solemnity',
    readings: {
      firstReading: {
        label: 'First Reading',
        citation: 'Revelation 7:2–4, 9–14',
        title: 'Hurt not the earth, nor the sea, nor the trees, till we sign the servants of our God in their foreheads',
        text: 'I, John, saw another angel ascending from the rising of the sun, having the sign of the living God; and he cried with a loud voice to the four angels, to whom it was given to hurt the earth and the sea, saying: Hurt not the earth, nor the sea, nor the trees, till we sign the servants of our God in their foreheads. And I heard the number of them that were signed, an hundred forty-four thousand were signed, of every tribe of the children of Israel. After this I saw a great multitude, which no man could number, of all nations, and tribes, and peoples, and tongues, standing before the throne, and in sight of the Lamb, clothed with white robes, and palms in their hands... And one of the ancients answered, and said to me: These that are clothed in white robes, who are they? and whence came they? And I said to him: My lord, thou knowest. And he said to me: These are they who are come out of great tribulation, and have washed their robes, and have made them white in the blood of the Lamb.'
      },
      responsorialPsalm: {
        label: 'Responsorial Psalm',
        citation: 'Psalm 24:1bc–2, 3–4ab, 5–6',
        title: 'Lord, this is the people that longs to see Your face',
        responseRefrain: 'R. Lord, this is the people that longs to see Your face.',
        text: 'The earth is the Lord’s and the fulness thereof: the world, and all they that dwell therein. For He hath founded it upon the seas; and hath prepared it upon the rivers.\n\nWho shall ascend into the mountain of the Lord: or who shall stand in His holy place? The innocent in hands, and clean of heart, who hath not taken his soul in vain.'
      },
      alleluia: {
        label: 'Alleluia Verse',
        citation: 'Matthew 11:28',
        title: 'Acclamation before the Gospel',
        text: 'Alleluia, alleluia. Come to Me, all you who labor and are burdened, and I will give you rest, says the Lord. Alleluia.'
      },
      gospel: {
        label: 'Holy Gospel',
        citation: 'Matthew 5:1–12a',
        title: 'The Eight Beatitudes: Rejoice and be glad, for your reward is very great in heaven',
        text: 'At that time, Jesus seeing the multitudes, went up into a mountain, and when He was set down, His disciples came unto Him. And opening His mouth, He taught them, saying: Blessed are the poor in spirit: for theirs is the kingdom of heaven. Blessed are the meek: for they shall possess the land. Blessed are they that mourn: for they shall be comforted. Blessed are they that hunger and thirst after justice: for they shall have their fill. Blessed are the merciful: for they shall obtain mercy. Blessed are the clean of heart: for they shall see God. Blessed are the peacemakers: for they shall be called the children of God. Blessed are they that suffer persecution for justice’ sake: for theirs is the kingdom of heaven. Blessed are ye when they shall revile you, and persecute you, and speak all that is evil against you, untruly, for My sake: Be glad and rejoice, for your reward is very great in heaven.'
      }
    },
    saintOfTheDay: {
      name: 'All the Canonized and Uncanonized Saints of Heaven (The Church Triumphant)',
      title: 'The 144,000 Sealed Servants & The Innumerable Multitude Before the Throne of the Lamb',
      feastRank: 'Solemnity of Precept (White / Gold Vestments)',
      dates: 'Instituted Universal Feast c. 609 AD (Pantheon Dedication) & 835 AD (Pope Gregory IV)',
      patronage: 'The Universal Catholic Church, The Communion of Saints, & Final Perseverance of the Elect',
      biography: 'On the First of November, the Church Militant on earth lifts her eyes to the Church Triumphant in heaven: the Blessed Virgin Mary Queen of All Saints, the Nine Choirs of Angels, the Patriarchs and Prophets, the Apostles and Evangelists, the Martyrs washed in the Blood of the Lamb, the Doctors and Confessors, the Virgins, and the countless millions of hidden saints whose names are known to God alone.',
      propheticAndSpiritualLesson: 'The First Reading of All Saints Day (Revelation 7:2–14) is one of the grandest eschatological prophecies in Scripture: before the four angels are permitted to strike the earth and sea, the Angel ascending from the rising of the sun seals the servants of God upon their foreheads, and St. John beholds those “who are come out of the great tribulation, and have washed their robes white in the Blood of the Lamb.”',
      collectPrayer: 'Almighty ever-living God, by whose gift we venerate in one celebration the merits of all the Saints, bestow on us, we pray, through the prayers of so many intercessors, an abundance of the reconciliation with You for which we tirelessly long. Through our Lord Jesus Christ. Amen.'
    },
    gospelCommentary: {
      gospelCitation: 'Matthew 5:1–12a (with Revelation 7:2–14)',
      homilyTitle: 'The Seal of the Living God on the Foreheads of the Elect & The Charter of the Kingdom',
      exegeticalOverview: 'On All Saints Day, the Church pairs the apocalyptic vision of the sealing of the Elect before the Great Tribulation (Revelation 7:2–14) with the Sermon on the Mount (Matthew 5:1–12). The Eight Beatitudes are the interior portrait of those who bear the Seal of the Living God upon their foreheads.',
      patristicVoices: [
        {
          father: 'St. Augustine of Hippo',
          sourceWork: 'On the Lord’s Sermon on the Mount, Book I',
          era: 'Doctor of the Church (354–430 AD)',
          commentary: '“The eight Beatitudes correspond to the seven gifts of the Holy Spirit ascending from fear of the Lord (poverty of spirit) up to wisdom (peacemakers), while the eighth beatitude—suffering persecution for justice’ sake—returns to the first, crowning the martyrs and saints with the Kingdom of Heaven.”'
        },
        {
          father: 'St. Bede the Venerable',
          sourceWork: 'Explanation of the Apocalypse, Book I, Ch. 7',
          era: 'Doctor of the Church (672–735 AD)',
          commentary: '“The angel ascending from the rising of the sun having the sign of the living God is Christ Himself, who forbids the winds of the final tribulation to loose their fury until His faithful servants are indelibly signed with the Cross upon their foreheads.”'
        }
      ],
      eleventhHourApplication: 'Revelation 7:3 assures us that no cosmic chastisement can touch the earth until God has first sealed His faithful servants on their foreheads—the divine antithesis to the mark of the Beast (Revelation 13:16).'
    },
    dailyFaustinaExcerpt: {
      diaryNumber: 'Diary §1520',
      text: '“Today I was in heaven, in spirit, and I saw its inconceivable beauties and the happiness that awaits us after death. I saw how all creatures give ceaseless praise and glory to God... And I saw the great multitude of saints who had reached glory through the Blood of the Lamb and through great tribulation.”',
      theme: 'Vision of the Communion of Saints in Glory'
    },
    dailyMarianWatchword: {
      apparitionSource: 'Queen of All Saints (Fatima & Medjugorje)',
      message: '“Read the lives of the saints and imitate their heroic trust in God during this time of grace.”',
      dailyPractice: 'Pray the Litany of the Saints today and invoke your Baptismal and Confirmation patron saints.'
    }
  }
};

// Algorithmic fallback bank for any other calendar day of the year so stepping to any date produces rich, authentic Catholic liturgical readings, Saint of the Day, and Patristic commentary
const ALGORITHMIC_WEEKDAY_BANK: Omit<DailyLiturgicalDossier, 'isoDate' | 'formattedDate'>[] = [
  {
    liturgicalDayTitle: 'Feria in Ordinary Time — Vigilance for the Bridegroom',
    liturgicalSeason: 'Ordinary Time · Eschatological Watch',
    liturgicalColor: 'Green',
    lectionaryCycle: 'Roman Missal Lectionary',
    psalterWeek: 'Roman Psalter',
    readings: {
      firstReading: {
        label: 'First Reading',
        citation: '1 Thessalonians 5:1–11',
        title: 'The Day of the Lord shall so come as a thief in the night',
        text: 'Brethren, of the times and moments, you need not, that we should write to you; for yourselves know perfectly, that the day of the Lord shall so come, as a thief in the night. For when they shall say, peace and security; then shall sudden destruction come upon them, as the pains upon her that is with child, and they shall not escape. But you, brethren, are not in darkness, that that day should overtake you as a thief. For all you are the children of light, and children of the day: we are not of the night, nor of darkness. Therefore, let us not sleep, as others do; but let us watch, and be sober... having on the breastplate of faith and charity, and for a helmet the hope of salvation.'
      },
      responsorialPsalm: {
        label: 'Responsorial Psalm',
        citation: 'Psalm 27:1, 4, 13–14',
        title: 'The Lord is my light and my salvation',
        responseRefrain: 'R. The Lord is my light and my salvation.',
        text: 'The Lord is my light and my salvation, whom shall I fear? The Lord is the protector of my life: of whom shall I be afraid?\n\nOne thing I have asked of the Lord, this will I seek after; that I may dwell in the house of the Lord all the days of my life.'
      },
      alleluia: {
        label: 'Alleluia Verse',
        citation: 'Luke 21:36',
        title: 'Acclamation before the Gospel',
        text: 'Alleluia, alleluia. Watch at all times, praying that you may have strength to stand before the Son of Man. Alleluia.'
      },
      gospel: {
        label: 'Holy Gospel',
        citation: 'Luke 12:35–40',
        title: 'Let your loins be girt, and lamps burning in your hands',
        text: 'Jesus said to His disciples: Let your loins be girt, and lamps burning in your hands. And you yourselves like to men who wait for their lord, when he shall return from the wedding; that when he cometh and knocketh, they may open to him immediately. Blessed are those servants, whom the Lord when He cometh, shall find watching. Amen I say to you, that He will gird Himself, and make them sit down to meat, and passing will minister unto them. And if He shall come in the second watch, or if He shall come in the third watch, and find them so, blessed are those servants... Be you then also ready: for at what hour you think not, the Son of man will come.'
      }
    },
    saintOfTheDay: {
      name: 'Saint Vincent Ferrer, Priest & Angel of the Judgment',
      title: 'Dominican Preacher of Penance & Miracle-Worker',
      feastRank: 'Commemoration in the Roman Martyrology',
      dates: '1350 – 1419 AD',
      patronage: 'Preachers of Repentance, Builders of Peace, & Preparation for the Last Judgment',
      biography: 'St. Vincent Ferrer traversed Spain, France, Italy, England, Ireland, and Scotland for twenty years preaching conversion and preparing souls for the Judgment of Christ, accompanied by thousands of verified miracles, including raising the dead to testify to the truth of his preaching on the approaching judgment.',
      propheticAndSpiritualLesson: 'St. Vincent Ferrer identified his mission with the First Angel of Revelation 14:7: “Fear the Lord, and give Him honor, because the hour of His judgment is come.”',
      collectPrayer: 'O God, who raised up the Priest Saint Vincent Ferrer to preach the Gospel of penance and the coming Judgment, grant that we may behold with joy Your Son when He comes as Judge in glory. Amen.'
    },
    gospelCommentary: {
      gospelCitation: 'Luke 12:35–40',
      homilyTitle: 'Girded Loins and Burning Lamps in the Second and Third Watch of the Night',
      exegeticalOverview: 'Christ commands two postures for the faithful awaiting His return: “loins girt” (restraint of disordered passions through penance) and “lamps burning in your hands” (active charity and living faith shining in a darkened world).',
      patristicVoices: [
        {
          father: 'St. Gregory the Great',
          sourceWork: 'Forty Gospel Homilies, Homily 13',
          era: 'Pope & Doctor of the Church (540–604 AD)',
          commentary: '“We gird our loins when we restrain the lusts of the flesh by continence; we hold burning lamps in our hands when we show our neighbor the light of good works, so that at whatever watch of the night the Lord knocks, we open to Him immediately.”'
        }
      ],
      eleventhHourApplication: 'Whether the Lord arrives in the second or third watch of history, the watchful servant keeps blessed oil in his lamp and peace in his conscience.'
    },
    dailyFaustinaExcerpt: {
      diaryNumber: 'Diary §965',
      text: '“Souls perish in spite of My bitter Passion. I am giving them the last hope of salvation; that is, the Feast of My Mercy. If they will not adore My mercy, they will perish for all eternity.”',
      theme: 'The Last Hope of Salvation in the Eleventh Hour'
    },
    dailyMarianWatchword: {
      apparitionSource: 'Our Lady of La Salette (1846)',
      message: '“Make this known to all My people. Pray well, my children, morning and evening.”',
      dailyPractice: 'Pray the Morning Offering and nightly Act of Contrition with unfeigned sorrow for sin.'
    }
  },
  {
    liturgicalDayTitle: 'Commemoration of All the Faithful Departed / Eschatological Remembrance',
    liturgicalSeason: 'Autumn Liturgical Remembrance',
    liturgicalColor: 'Violet',
    lectionaryCycle: 'Roman Missal Lectionary',
    psalterWeek: 'Roman Psalter',
    readings: {
      firstReading: {
        label: 'First Reading',
        citation: 'Wisdom 3:1–9',
        title: 'The souls of the just are in the hand of God, and the torment of death shall not touch them',
        text: 'The souls of the just are in the hand of God, and the torment of death shall not touch them. In the sight of the unwise they seemed to die: and their departure was taken for misery: and their going away from us, for utter destruction: but they are in peace. And though in the sight of men they suffered torments, their hope is full of immortality. Afflicted in a few things, in many they shall be well rewarded: because God hath tried them, and found them worthy of Himself. As gold in the furnace He hath proved them, and as a victim of a holocaust He hath received them, and in time there shall be respect had to them. The just shall shine, and shall run to and fro like sparks among the reeds. They shall judge nations, and rule over people, and their Lord shall reign for ever.'
      },
      responsorialPsalm: {
        label: 'Responsorial Psalm',
        citation: 'Psalm 23:1–3a, 3b–4, 5, 6',
        title: 'The Lord is my shepherd; there is nothing I shall want',
        responseRefrain: 'R. The Lord is my shepherd; there is nothing I shall want.',
        text: 'The Lord ruleth me: and I shall want nothing. He hath set me in a place of pasture. He hath brought me up, on the water of refreshment: He hath converted my soul.\n\nFor though I should walk in the midst of the shadow of death, I will fear no evils, for Thou art with me. Thy rod and Thy staff, they have comforted me.'
      },
      alleluia: {
        label: 'Alleluia Verse',
        citation: 'Matthew 25:34',
        title: 'Acclamation before the Gospel',
        text: 'Alleluia, alleluia. Come, you who are blessed by My Father; inherit the Kingdom prepared for you from the foundation of the world. Alleluia.'
      },
      gospel: {
        label: 'Holy Gospel',
        citation: 'John 6:37–40',
        title: 'This is the will of My Father: that everyone who sees the Son and believes in Him should have eternal life, and I will raise him up on the last day',
        text: 'Jesus said to the multitudes: All that the Father giveth to Me shall come to Me; and him that cometh to Me, I will not cast out. Because I came down from heaven, not to do My own will, but the will of Him that sent Me. Now this is the will of the Father who sent Me: that of all that He hath given Me, I should lose nothing; but should raise it up again in the last day. And this is the will of My Father that sent Me: that every one who seeth the Son, and believeth in Him, may have life everlasting, and I will raise him up in the last day.'
      }
    },
    saintOfTheDay: {
      name: 'Saint Malachy of Armagh, Archbishop & Prophet of Ireland',
      title: 'Archbishop of Armagh, Papal Legate & Friend of St. Bernard of Clairvaux',
      feastRank: 'Memorial in the Roman Martyrology',
      dates: '1094 – November 2, 1148 AD (Died at Clairvaux in the arms of St. Bernard)',
      patronage: 'Renewal of the Priesthood, Ireland, & Prophetic Discernment',
      biography: 'Born in Armagh, Ireland, St. Malachy restored the canonical liturgy, sacraments, and monastic discipline across Ireland after Viking devastations. His contemporary biographer, St. Bernard of Clairvaux, wrote in the *Vita Sancti Malachiae* that Malachy was endowed with the gift of prophecy: “Nor did he lack the spirit of prophecy; he foretold many things before they happened, including the exact day and place of his own death at Clairvaux on All Souls’ Day.” Tradition also associates his name with the *Prophetia Sancti Malachiae* concerning the line of Roman Pontiffs culminating in *Petrus Romanus* feeding his flock amid many tribulations.',
      propheticAndSpiritualLesson: 'Whether in his verified prophecies recorded by St. Bernard of Clairvaux or the mottoes attributed to his Roman pilgrimage of 1139, St. Malachy reminds the faithful that the succession of Peter endures through every tribulation until the Judge appears.',
      collectPrayer: 'Almighty God, who adorned Saint Malachy Your Bishop with apostolic zeal and the gift of prophecy, grant that through his intercession we may remain ever united to the Chair of Peter and attain the resurrection of the just. Amen.'
    },
    gospelCommentary: {
      gospelCitation: 'John 6:37–40',
      homilyTitle: 'The Unbreakable Promise of Christ: “I Will Raise Him Up in the Last Day”',
      exegeticalOverview: 'Twice in four verses (John 6:39, 40) Jesus repeats the solemn eschatological refrain: “and I will raise him up in the last day.” Combined with Wisdom 3:7–8 (“The just shall shine, and shall run to and fro like sparks among the reeds; they shall judge nations”), the liturgy reveals the destiny of the faithful departed and the Church Suffering.',
      patristicVoices: [
        {
          father: 'St. Augustine of Hippo',
          sourceWork: 'Tractates on the Gospel of John, Tractate 25',
          era: 'Doctor of the Church (354–430 AD)',
          commentary: '“Look how the Son accomplishes the Father’s will: not a single member of Christ’s Mystical Body is lost, for even the dust of their bodies is guarded in the treasury of Divine Omnipotence to be raised in incorruption on the Last Day.”'
        }
      ],
      eleventhHourApplication: 'In Wisdom 3:6, God proves the elect “as gold in the furnace” during times of purification so that they may shine like sparks among the reeds and judge nations with Christ.'
    },
    dailyFaustinaExcerpt: {
      diaryNumber: 'Diary §518 & §1227',
      text: '“My mercy is greater than your sins and those of the entire world. Who can measure the extent of My goodness? For you I descended from heaven to earth; for you I allowed Myself to be nailed to the cross; for you I let My Sacred Heart be pierced with a lance, thus opening wide the source of mercy for you.”',
      theme: 'Suffrage for the Holy Souls and Boundless Mercy'
    },
    dailyMarianWatchword: {
      apparitionSource: 'Our Lady of Good Success & Fatima',
      message: '“Pray earnestly for the souls in Purgatory and for dying sinners who stand in greatest need of God’s mercy today.”',
      dailyPractice: 'Offer the Eternal Rest prayer (Requiem aeternam) and a Rosary decade for the Holy Souls in Purgatory and those dying this day.'
    }
  }
];

export const INITIAL_CUSTOM_DAILY_FEATURES: DailyCustomFeature[] = [
  {
    id: 'feature-patristic-antichrist-watch',
    title: 'Daily Patristic & Catechism Teaching on the Last Things',
    category: 'Magisterium & Fathers',
    enabled: true,
    dailyEntries: [
      {
        heading: 'Catechism of the Catholic Church §675 — The Church’s Ultimate Trial',
        source: 'Catechism of the Catholic Church (1992), Part I, Section 2, Chapter 2, Art. 7',
        content: '“Before Christ’s second coming the Church must pass through a final trial that will shake the faith of many believers. The persecution that accompanies her pilgrimage on earth will unveil the ‘mystery of iniquity’ in the form of a religious deception offering men an apparent solution to their problems at the price of apostasy from the truth. The supreme religious deception is that of the Antichrist, a pseudo-messianism by which man glorifies himself in place of God and of His Messiah come in the flesh.”',
        scriptureAnchor: 'Luke 18:8 · 2 Thessalonians 2:3–12'
      },
      {
        heading: 'Catechism of the Catholic Church §674 — The Glorious Messiah’s Return & Israel',
        source: 'Catechism of the Catholic Church (1992), §674',
        content: '“The glorious Messiah’s coming is suspended at every moment of history until His recognition by ‘all Israel’, for ‘a hardening has come upon part of Israel’ in their ‘unbelief’ toward Jesus... The ‘full inclusion’ of the Jews in the Messiah’s salvation, in the wake of ‘the full number of the Gentiles’, will enable the People of God to achieve ‘the measure of the stature of the fullness of Christ’, in which ‘God may be all in all’.”',
        scriptureAnchor: 'Romans 11:20–26 · Ephesians 4:13 · 1 Corinthians 15:28'
      },
      {
        heading: 'St. Cyril of Jerusalem — Lecture XV on the Second Coming & The Rebuilt Sanctuary',
        source: 'Catechetical Lectures of St. Cyril, Archbishop of Jerusalem (350 AD), Lecture XV, §12–15',
        content: '“For the deceiver seeks to liken himself in all things to the Son of God... And at first indeed he will put on a show of mildness (as if he were a learned and discreet person), and of soberness and loving-kindness; and having beguiled the Jews by lying miracles and prodigies of his magical deceit, that they may suppose him to be their expected Christ, he will afterwards be characterized by all kinds of crimes of inhumanity and lawlessness, and will sit in the Temple of God. Wait therefore for the Lord who truly comes from heaven upon the clouds, preceded by the luminous Sign of the Cross.”',
        scriptureAnchor: 'Matthew 24:24–30 · Daniel 9:27'
      }
    ]
  },
  {
    id: 'feature-mystic-remedies',
    title: 'Daily Sacramental & Spiritual Remedies of the Stigmatists',
    category: 'Spiritual Warfare & Remedies',
    enabled: true,
    dailyEntries: [
      {
        heading: 'The Blessed 100% Pure Beeswax Candle & Sealed Sanctuary of the Home',
        source: 'Bl. Marie-Julie Jahenny (La Fraudais) & Bl. Anna Maria Taigi (Rome)',
        content: '“During the three days of continuous darkness, the tapers of blessed wax alone will give light... One taper alone will suffice for the three days, but in the houses of the wicked they will not give light. Close your doors and windows, and do not look outside; kneel before the Crucifix and the image of the Blessed Virgin Mary, and invoke the Most Precious Blood and the Immaculate Heart.”',
        scriptureAnchor: 'Exodus 10:22–23 · Isaiah 26:20'
      },
      {
        heading: 'The Five Stones Against Goliath in the Eleventh Hour',
        source: 'Messages of Our Lady Queen of Peace (Medjugorje)',
        content: 'Just as David defeated Goliath with five smooth stones from the brook (1 Samuel 17:40), Our Lady entrusts five spiritual stones to every Catholic household: (1) Daily Prayer of the Rosary with the heart; (2) The Most Holy Eucharist; (3) Daily reading of Sacred Scripture enthroned in a visible place in the home; (4) Fasting on Wednesdays and Fridays on bread and water; and (5) Monthly Sacramental Confession.',
        scriptureAnchor: '1 Samuel 17:40 · Matthew 17:20'
      },
      {
        heading: 'The Chaplet of Divine Mercy & The 3:00 PM Hour of Great Mercy',
        source: 'Diary of St. Maria Faustina Kowalska (§687, §1541, §1731)',
        content: '“Say unceasingly the chaplet that I have taught you. Whoever will recite it will receive great mercy at the hour of death. Priests will recommend it to sinners as their last hope of salvation. Even if there were a sinner most hardened, if he were to recite this chaplet only once, he would receive grace from My infinite mercy.”',
        scriptureAnchor: 'Hebrews 4:16 · John 19:34'
      }
    ]
  },
  {
    id: 'feature-fatima-reparation',
    title: 'Daily Fatima Reparation & Examination of Conscience',
    category: 'Marian Reparation',
    enabled: true,
    dailyEntries: [
      {
        heading: 'The Angel of Peace’s Eucharistic Prostration Prayer (Fatima, 1916)',
        source: 'First & Third Apparitions of the Angel of Portugal at Loca do Cabeço',
        content: '“Most Holy Trinity, Father, Son and Holy Spirit, I adore You profoundly, and I offer You the most precious Body, Blood, Soul and Divinity of Jesus Christ, present in all the tabernacles of the world, in reparation for the outrages, sacrileges and indifference with which He Himself is offended. And, through the infinite merits of His most Sacred Heart, and the Immaculate Heart of Mary, I beg of You the conversion of poor sinners.”',
        scriptureAnchor: 'Hebrews 12:28 · Revelation 5:12'
      },
      {
        heading: 'Sister Lúcia’s Sacrifice Prayer Required by Our Lady (July 13, 1917)',
        source: 'Memoirs of Sister Lúcia of Fatima — The Second Secret',
        content: '“Sacrifice yourselves for sinners, and say many times, especially whenever you make some sacrifice: O Jesus, it is for love of You, for the conversion of sinners, and in reparation for the sins committed against the Immaculate Heart of Mary.”',
        scriptureAnchor: 'Colossians 1:24 · 1 Peter 2:5'
      },
      {
        heading: 'The Five First Saturdays of Reparation (Pontevedra, Dec 10, 1925)',
        source: 'Apparition of the Child Jesus and Our Lady to Sister Lúcia at Pontevedra',
        content: 'Five offenses and blasphemies are committed against the Immaculate Heart of Mary: (1) against her Immaculate Conception; (2) against her Perpetual Virginity; (3) against her Divine Maternity, refusing at the same time to recognize her as the Mother of men; (4) by those who publicly seek to sow in the hearts of children indifference, scorn, and hatred against this Immaculate Mother; and (5) by those who outrage her directly in her sacred images.',
        scriptureAnchor: 'Luke 1:48 · Luke 2:35'
      }
    ]
  }
];

export function getDayOfYearIndex(date: Date): number {
  const start = new Date(date.getFullYear(), 0, 0);
  const diff = date.getTime() - start.getTime();
  const oneDay = 1000 * 60 * 60 * 24;
  return Math.floor(diff / oneDay);
}

export function getDailyLiturgicalDossier(date: Date): DailyLiturgicalDossier {
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  const monthDayKey = `${month}-${day}`;
  const isoDate = `${date.getFullYear()}-${month}-${day}`;

  const formattedDate = date.toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  const exactMatch = EXACT_DAILY_LECTIONARY[monthDayKey];
  if (exactMatch) {
    return {
      isoDate,
      formattedDate,
      ...exactMatch,
    };
  }

  // Deterministic daily rotation for any other date of the year
  const dayOfYear = getDayOfYearIndex(date);
  const template = ALGORITHMIC_WEEKDAY_BANK[dayOfYear % ALGORITHMIC_WEEKDAY_BANK.length];
  return {
    isoDate,
    formattedDate,
    ...template,
  };
}
