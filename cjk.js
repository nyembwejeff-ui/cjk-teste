/* Code du site : pas besoin de modifier ce fichier. */

const LANGUAGES = [
  { code: "fr", name: "Français", native: "Français", flag: "🇫🇷" },
  { code: "en", name: "English", native: "English", flag: "🇬🇧" },
  { code: "ja", name: "日本語", native: "日本語", flag: "🇯🇵" },
  { code: "es", name: "Español", native: "Español", flag: "🇪🇸" },
  { code: "de", name: "Deutsch", native: "Deutsch", flag: "🇩🇪" },
  { code: "pt", name: "Português", native: "Português", flag: "🇵🇹" },
  { code: "ar", name: "العربية", native: "العربية", flag: "🇸🇦" },
  { code: "zh", name: "中文", native: "中文", flag: "🇨🇳" },
  { code: "ko", name: "한국어", native: "한국어", flag: "🇰🇷" },
  { code: "ru", name: "Русский", native: "Русский", flag: "🇷🇺" }
];

const TRANSLATIONS = {
  fr: {
    "nav.about": "À propos",
    "nav.history": "Histoire du centre",
    "about.title": "À propos du Centre Japonais de Kinshasa",
    "about.intro": "Le Centre Japonais de Kinshasa est un espace de rencontre et d’apprentissage qui rapproche la République démocratique du Congo et le Japon.",
    "about.mission.title": "Notre mission",
    "about.mission.text": "Promouvoir la connaissance du Japon et favoriser les échanges culturels, éducatifs et humains entre les communautés congolaise et japonaise.",
    "about.vision.title": "Notre vision",
    "about.vision.text": "Construire un pont durable entre la RDC et le Japon, fondé sur la compréhension mutuelle, le partage des savoirs et l’ouverture au monde.",
    "about.values.title": "Nos valeurs",
    "about.values.text": "Respect, dialogue, curiosité, apprentissage continu et partage sont au cœur de notre engagement.",
    "about.role.title": "Un lieu d’échanges culturels et éducatifs",
    "about.role.text": "À travers ses formations, ses activités culturelles et ses rencontres, le centre encourage les échanges, l’acquisition de compétences et la découverte réciproque des cultures congolaise et japonaise.",
    "history.title": "Histoire du centre",
    "history.intro": "Découvrez la vocation du Centre Japonais de Kinshasa et les grandes étapes de son développement.",
    "history.foundation.title": "La fondation",
    "history.foundation.text": "Le centre est né de la volonté de créer à Kinshasa un lieu de rapprochement entre la RDC et le Japon, où la culture et l’éducation favorisent le dialogue.",
    "history.timeline.title": "Étapes clés",
    "history.stage1.title": "Création du centre",
    "history.stage1.text": "Mise en place d’un espace dédié à la découverte du Japon et au renforcement des liens entre les deux pays.",
    "history.stage2.title": "Développement des activités",
    "history.stage2.text": "Élargissement des activités autour des formations, des pratiques culturelles et des occasions de rencontre.",
    "history.stage3.title": "Un lieu vivant d’échanges",
    "history.stage3.text": "Le centre poursuit sa mission en proposant aux publics de Kinshasa des occasions d’apprendre, de partager et de créer des liens.",
    "history.note": "Les dates précises des étapes pourront être ajoutées dès qu’elles auront été confirmées par le centre.",
    "nav.formations": "Formations",
    "nav.activities": "Activités",
    "nav.news": "Actualités",
    "nav.contact": "Contactez-nous",
    "formations.title": "Nos formations",
    "formations.intro": "Découvrez les parcours d’apprentissage proposés par le Centre Japonais de Kinshasa.",
    "activities.title": "Activités et rendez-vous",
    "activities.intro": "Retrouvez les activités sportives, culturelles et les rendez-vous qui font vivre le centre.",
    "home.kicker": "ようこそ",
    "home.discover": "Découvrir le centre",
    "home.history": "Histoire du centre",
    "home.history.text1": "Le Centre Japonais de Kinshasa a été créé pour renforcer les liens culturels, éducatifs et sociaux entre la République Démocratique du Congo et le Japon.",
    "home.history.text2": "Au fil des années, il est devenu un espace de rencontre, de formation, de culture et d’échange entre les communautés locales et internationales.",
    "home.activities.title": "Nos activités",
    "home.activities.muted": "Cliquez sur une activité pour ouvrir sa page.",
    "contact.title": "Contact",
    "contact.form.title": "Écrivez-nous",
    "contact.form.name": "Votre nom",
    "contact.form.message": "Votre message",
    "contact.form.submit": "Envoyer par WhatsApp",
    "contact.form.error": "Écrivez votre nom et votre message.",
    "contact.address": "Adresse",
    "contact.address_value": "Centre Japonais de Kinshasa, Kinshasa, RDC",
    "contact.phone": "Téléphone et e-mail",
    "contact.phone_value": "+243 850 881 102",
    "contact.email_label": "Email",
    "contact.hours": "Horaires",
    "contact.hours_value1": "Lundi – Vendredi : 08h00 – 17h00",
    "contact.hours_value2": "Samedi : 09h00 – 13h00",
    "contact.write.whatsapp": "Écrire sur WhatsApp",
    "contact.socials": "Réseaux sociaux",
    "contact.map.title": "Carte du centre",
    "page.back": "Retour à l'accueil",
    "activity.open": "Ouvrir la page",
    "activity.presentation": "Présentation",
    "activity.schedule": "Horaires",
    "activity.price": "Tarif",
    "activity.registration_fee": "Frais d’inscription",
    "activity.monthly_fee": "Abonnement mensuel",
    "news.hero.kicker": "Actualités",
    "news.hero.title": "Actualités & Événements",
    "news.hero.text": "Suivez les ateliers, les festivals, les cours et les annonces du Centre Japonais de Kinshasa.",
    "news.search.placeholder": "Rechercher une actualité...",
    "news.filter.all": "Tous",
    "news.filter.samedi_nippon": "Samedi Nippon",
    "news.filter.arts-martiaux": "Arts martiaux",
    "news.date.tbc": "Date à confirmer",
    "samedi.nippon.regular.title": "Samedi Nippon régulier",
    "samedi.nippon.regular.kicker": "Samedi Nippon",
    "samedi.nippon.regular.free": "Entrée libre • chaque samedi",
    "samedi.nippon.regular.description": "Le rendez-vous hebdomadaire du centre : un moment simple, convivial et gratuit pour découvrir la culture japonaise, échanger et partager autour de la communauté.",
    "samedi.nippon.regular.schedule": "Chaque samedi • 14h00 à 16h00",
    "samedi.nippon.regular.price": "Gratuit",
    "samedi.nippon.specials.title": "Éditions spéciales du Samedi Nippon",
    "samedi.nippon.specials.subtitle": "Des rendez-vous thématiques à la hauteur des moments forts de l’année.",
    "samedi.nippon.special.echange_vœux.title": "Samedi Nippon : Échange de vœux",
    "samedi.nippon.special.echange_vœux.summary": "Une rencontre chaleureuse pour accueillir la nouvelle année et partager des vœux entre la communauté.",
    "samedi.nippon.special.echange_vœux.body": "Cette édition spéciale met l’accent sur les échanges de vœux, le partage de bonnes intentions et la convivialité qui caractérise la culture japonaise et les valeurs de proximité du centre.",
    "samedi.nippon.special.saint_valentin.title": "Samedi Nippon : Saint-Valentin",
    "samedi.nippon.special.saint_valentin.summary": "Une célébration douce et créative autour de l’amour, du partage et de la culture.",
    "samedi.nippon.special.saint_valentin.body": "À l’occasion de la Saint-Valentin, le centre organise une édition spéciale pensée pour célébrer les liens humains, la gentillesse et les échanges artistiques.",
    "samedi.nippon.special.white_days.title": "Samedi Nippon : White Days",
    "samedi.nippon.special.white_days.summary": "Un moment festif inspiré du retour des cadeaux et des gestes attentionnés.",
    "samedi.nippon.special.white_days.body": "Les White Days sont l’occasion de prolonger la magie des échanges, dans une ambiance conviviale et créative qui valorise le partage et la gratitude.",
    "samedi.nippon.special.halloween.title": "Samedi Nippon : Halloween",
    "samedi.nippon.special.halloween.summary": "Une édition festive, colorée et pleine d’énergie pour découvrir des codes culturels inspirants.",
    "samedi.nippon.special.halloween.body": "L’Halloween au centre propose un cadre joyeux et dynamique autour des costumes, de la créativité et du partage entre participants.",
    "samedi.nippon.special.photo.title": "Samedi Nippon : Shooting photo",
    "samedi.nippon.special.photo.summary": "Une séance conviviale de portraits et de prises de vue inspirées par la culture japonaise.",
    "samedi.nippon.special.photo.body": "Cette édition met à l’honneur la créativité visuelle avec un shooting photo dans une ambiance lumineuse et artistique, ouvert à tous.",
    "activities.culture.title": "Activités culturelles",
    "activities.culture.subtitle": "Des ateliers et rencontres culturelles inspirés par le Japon et les échanges artistiques.",
    "news.filter.judo": "Judo",
    "news.filter.informatique": "Informatique",
    "news.filter.langue_japonaise": "Langue Japonaise",
    "news.filter.langue_anglaise": "Langue Anglaise",
    "news.filter.rh": "Ressources Humaines",
    "news.card.read_more": "Lire la suite",
    "news.card.empty": "Aucune actualité ne correspond à votre recherche.",
    "news.category.samedi-nippon": "Samedi Nippon",
    "news.category.arts-martiaux": "Arts martiaux",
    "news.category.judo": "Judo",
    "news.category.informatique": "Informatique",
    "news.category.langue-japonaise": "Langue Japonaise",
    "news.category.langue-anglaise": "Langue Anglaise",
    "news.category.rh": "Ressources Humaines",
    "news.samedi_nippon.title": "Grand rendez-vous du Samedi Nippon",
    "news.samedi_nippon.summary": "Une rencontre culturelle et conviviale autour des traditions japonaises et des échanges citoyens.",
    "news.samedi_nippon.body": "Le Samedi Nippon réunit la communauté autour de moments de découverte, de pratique culturelle et d’échanges inspirés par la culture japonaise. C’est un rendez-vous incontournable pour apprendre, partager et célébrer la richesse de cette culture.",
    "news.judo.title": "Entraînement et valeurs du Judo au centre",
    "news.judo.summary": "Des séances de judo structurées pour renforcer la discipline, le respect et la confiance en soi.",
    "news.judo.body": "Les activités de judo du centre invitent les participants à développer la discipline, la concentration et le respect mutuel. Les entraînements sont conçus pour s’adapter à différents niveaux et encourager le développement personnel.",
    "news.informatique.title": "Formations en Informatique",
    "news.informatique.summary": "Des ateliers pratiques pour maîtriser les outils numériques, la bureautique et les usages du web.",
    "news.informatique.body": "Les formations en informatique visent à renforcer les compétences numériques des apprenants à travers des contenus adaptés à l’usage quotidien professionnel, éducatif et personnel.",
    "news.langue_japonaise.title": "Nouveaux sessions d'apprentissage du Japonais",
    "news.langue_japonaise.summary": "Des cours ouverts à tous pour progresser en japonais à travers des méthodes vivantes et adaptées.",
    "news.langue_japonaise.body": "Les nouveaux cours de japonais offrent un cadre dynamique pour améliorer la compréhension orale, la lecture et l’expression écrite. Les groupes sont conçus pour accompagner les apprenants selon leur niveau et leurs besoins.",
    "news.langue_anglaise.title": "Nouveaux sessions d'apprentissage de l'Anglais",
    "news.langue_anglaise.summary": "Des ateliers interactifs pour renforcer les compétences communicatives et professionnelles en anglais.",
    "news.langue_anglaise.body": "Les sessions d’anglais du centre abordent les compétences orales, écrites et professionnelles avec un accompagnement progressif. Elles sont particulièrement utiles pour les étudiants, les professionnels et les apprenants débutants.",
    "news.rh.title": "Ateliers et opportunités en Ressources Humaines",
    "news.rh.summary": "Des espaces d’échange autour du recrutement, du développement des talents et des compétences professionnelles.",
    "news.rh.body": "Les activités en ressources humaines permettent de développer des compétences utiles à la gestion des talents, au recrutement et au travail collaboratif. C’est une opportunité pour renforcer les méthodes de gestion et les compétences d’employabilité.",
    "activity.not_found": "Activité introuvable",
    "activity.not_found_text": "Cette activité n'existe pas.",
    "activity.see_all": "Voir toutes les activités",
    "activity.see_others": "Voir les autres activités",
    "activity.register": "S'inscrire par WhatsApp",
    "activity.category.formation": "Formation",
    "activity.category.sport": "Sport",
    "activity.category.culture": "Culture",
    "activity.japonais.title": "Cours de japonais",
    "activity.japonais.summary": "Du niveau débutant au niveau avancé.",
    "activity.cuisine-japonaise.title": "Atelier de cuisine japonaise",
    "activity.cuisine-japonaise.summary": "Découvrez et préparez plusieurs plats emblématiques du Japon.",
    "activity.anglais.title": "Formation en anglais",
    "activity.anglais.summary": "Cours d’anglais pour tous les niveaux.",
    "activity.informatique.title": "Formation en informatique",
    "activity.informatique.summary": "Bureautique, internet et bases de l’informatique.",
    "activity.judo.title": "Judo",
    "activity.judo.summary": "Pratique du judo pour enfants et adultes.",
    "activity.sports.title": "Arts martiaux",
    "activity.sports.summary": "Judo, karaté, jiu-jitsu et aïkido pour tous les niveaux.",
    "activity.culture.title": "Activités culturelles",
    "activity.culture.summary": "Ateliers et rencontres, notamment le samedi.",
    "activity.samedi-nippon.title": "Samedi Nippon",
    "activity.samedi-nippon.summary": "Un rendez-vous culturel autour du Japon et du partage.",
    "lang.search.placeholder": "Rechercher une langue",
    "lang.open": "Choisir une langue",
    "activity.open": "Ouvrir la page"
  },
  en: {
    "nav.about": "About",
    "nav.history": "Center history",
    "about.title": "About the Centre Japonais de Kinshasa",
    "about.intro": "The Centre Japonais de Kinshasa is a place for meeting and learning that brings the Democratic Republic of the Congo and Japan closer together.",
    "about.mission.title": "Our mission",
    "about.mission.text": "To promote knowledge of Japan and foster cultural, educational, and human exchanges between Congolese and Japanese communities.",
    "about.vision.title": "Our vision",
    "about.vision.text": "To build a lasting bridge between the DRC and Japan, founded on mutual understanding, shared knowledge, and openness to the world.",
    "about.values.title": "Our values",
    "about.values.text": "Respect, dialogue, curiosity, lifelong learning, and sharing are at the heart of our commitment.",
    "about.role.title": "A place for cultural and educational exchange",
    "about.role.text": "Through courses, cultural activities, and meetings, the centre encourages exchange, skills development, and mutual discovery of Congolese and Japanese cultures.",
    "history.title": "History of the centre",
    "history.intro": "Discover the purpose of the Centre Japonais de Kinshasa and the key stages in its development.",
    "history.foundation.title": "Foundation",
    "history.foundation.text": "The centre grew from the desire to create a place in Kinshasa that brings the DRC and Japan closer, where culture and education foster dialogue.",
    "history.timeline.title": "Key stages",
    "history.stage1.title": "Establishment of the centre",
    "history.stage1.text": "A space was created to introduce visitors to Japan and strengthen ties between the two countries.",
    "history.stage2.title": "Expansion of activities",
    "history.stage2.text": "Activities expanded to include courses, cultural practices, and opportunities to meet.",
    "history.stage3.title": "A living place of exchange",
    "history.stage3.text": "The centre continues its mission by offering people in Kinshasa opportunities to learn, share, and build connections.",
    "history.note": "Exact dates for these stages can be added once they have been confirmed by the centre.",
    "nav.formations": "Courses",
    "nav.activities": "Activities",
    "nav.news": "News",
    "nav.contact": "Contact us",
    "formations.title": "Our courses",
    "formations.intro": "Explore the learning programs offered by the Centre Japonais de Kinshasa.",
    "activities.title": "Activities and events",
    "activities.intro": "Discover the sports, cultural activities, and events that bring the centre to life.",
    "home.kicker": "Welcome",
    "home.discover": "Discover the center",
    "home.history": "Center history",
    "home.history.text1": "The Centre Japonais de Kinshasa was created to strengthen cultural, educational, and social ties between the Democratic Republic of the Congo and Japan.",
    "home.history.text2": "Over the years, it has become a space for meeting, training, culture, and exchange between local and international communities.",
    "home.activities.title": "Our activities",
    "home.activities.muted": "Click an activity to open its page.",
    "contact.title": "Contact",
    "contact.form.title": "Write to us",
    "contact.form.name": "Your name",
    "contact.form.message": "Your message",
    "contact.form.submit": "Send via WhatsApp",
    "contact.form.error": "Please enter your name and message.",
    "contact.address": "Address",
    "contact.address_value": "Centre Japonais de Kinshasa, Kinshasa, DRC",
    "contact.phone": "Phone and email",
    "contact.phone_value": "+243 850 881 102",
    "contact.email_label": "Email",
    "contact.hours": "Hours",
    "contact.hours_value1": "Monday – Friday: 08:00 – 17:00",
    "contact.hours_value2": "Saturday: 09:00 – 13:00",
    "contact.write.whatsapp": "Write on WhatsApp",
    "contact.socials": "Social networks",
    "contact.map.title": "Center map",
    "page.back": "Back to home",
    "activity.open": "Open page",
    "activity.presentation": "Presentation",
    "activity.schedule": "Schedule",
    "activity.price": "Price",
    "news.hero.kicker": "News",
    "news.hero.title": "News & Events",
    "news.hero.text": "Follow the workshops, festivals, courses and announcements of the Centre Japonais de Kinshasa.",
    "news.search.placeholder": "Search for an article...",
    "news.filter.all": "All",
    "news.filter.samedi_nippon": "Saturday Nippon",
    "news.date.tbc": "Date to be confirmed",
    "samedi.nippon.regular.title": "Regular Saturday Nippon",
    "samedi.nippon.regular.kicker": "Saturday Nippon",
    "samedi.nippon.regular.free": "Free entry • every Saturday",
    "samedi.nippon.regular.description": "The weekly community meeting at the centre: a simple, friendly and free moment to discover Japanese culture, exchange ideas and share experiences.",
    "samedi.nippon.regular.schedule": "Every Saturday • 10:00 to 13:00",
    "samedi.nippon.regular.price": "Free",
    "samedi.nippon.specials.title": "Special Saturday Nippon editions",
    "samedi.nippon.specials.subtitle": "Seasonal events designed around memorable moments of the year.",
    "samedi.nippon.special.echange_vœux.title": "Saturday Nippon: New Year Wishes",
    "samedi.nippon.special.echange_vœux.summary": "A warm gathering to welcome the new year and share wishes within the community.",
    "samedi.nippon.special.echange_vœux.body": "This special edition focuses on exchanging greetings, kind wishes and community warmth inspired by Japanese culture and the centre's spirit of togetherness.",
    "samedi.nippon.special.saint_valentin.title": "Saturday Nippon: Valentine's Day",
    "samedi.nippon.special.saint_valentin.summary": "A gentle, creative celebration around love, sharing and culture.",
    "samedi.nippon.special.saint_valentin.body": "For Valentine's Day, the centre organizes a special edition dedicated to human connection, kindness and artistic exchange.",
    "samedi.nippon.special.white_days.title": "Saturday Nippon: White Day",
    "samedi.nippon.special.white_days.summary": "A festive moment inspired by thoughtful gifts and appreciation.",
    "samedi.nippon.special.white_days.body": "White Day offers a joyful and friendly atmosphere that celebrates gratitude, generosity and togetherness.",
    "samedi.nippon.special.halloween.title": "Saturday Nippon: Halloween",
    "samedi.nippon.special.halloween.summary": "A lively and colourful event inspired by festive creative culture.",
    "samedi.nippon.special.halloween.body": "Halloween at the centre creates a cheerful and dynamic space where costumes, creativity and sharing come together.",
    "samedi.nippon.special.photo.title": "Saturday Nippon: Photo Shoot",
    "samedi.nippon.special.photo.summary": "A friendly photo session inspired by Japanese visual culture.",
    "samedi.nippon.special.photo.body": "This edition celebrates creativity through a photo shoot in a warm artistic atmosphere open to everyone.",
    "activities.culture.title": "Cultural activities",
    "activities.culture.subtitle": "Workshops and cultural encounters inspired by Japan and artistic exchange.",
    "news.filter.judo": "Judo",
    "news.filter.arts-martiaux": "Martial arts",
    "news.filter.informatique": "IT",
    "news.filter.langue_japonaise": "Japanese Language",
    "news.filter.langue_anglaise": "English Language",
    "news.filter.rh": "Human Resources",
    "news.card.read_more": "Read more",
    "news.card.empty": "No news match your search.",
    "news.category.samedi-nippon": "Saturday Nippon",
    "news.category.arts-martiaux": "Martial arts",
    "news.category.judo": "Judo",
    "news.category.informatique": "IT",
    "news.category.langue-japonaise": "Japanese Language",
    "news.category.langue-anglaise": "English Language",
    "news.category.rh": "Human Resources",
    "news.samedi_nippon.title": "Grand Saturday Nippon gathering",
    "news.samedi_nippon.summary": "A cultural and friendly meeting around Japanese traditions and community exchange.",
    "news.samedi_nippon.body": "Saturday Nippon brings the community together for discovery, cultural practice and exchanges inspired by Japanese culture. It is a must-attend event for learning, sharing and celebrating this rich heritage.",
    "news.judo.title": "Judo training and values at the centre",
    "news.judo.summary": "Structured judo sessions to build discipline, respect and self-confidence.",
    "news.judo.body": "The centre's judo activities invite participants to develop discipline, concentration and mutual respect. Sessions are adapted to different levels and encourage personal growth.",
    "news.informatique.title": "IT training programs",
    "news.informatique.summary": "Hands-on workshops to master digital tools, office software and web usage.",
    "news.informatique.body": "The IT training courses aim to strengthen learners' digital skills through content adapted to everyday professional, educational and personal use.",
    "news.langue_japonaise.title": "New Japanese language learning sessions",
    "news.langue_japonaise.summary": "Open courses for progressing in Japanese through practical and engaging methods.",
    "news.langue_japonaise.body": "The new Japanese courses provide a dynamic environment to improve oral comprehension, reading and writing. The groups support learners according to their level and objectives.",
    "news.langue_anglaise.title": "New English learning sessions",
    "news.langue_anglaise.summary": "Interactive workshops to strengthen communication and professional skills in English.",
    "news.langue_anglaise.body": "The centre's English sessions cover oral, written and professional communication with progressive support. They are particularly useful for students, professionals and beginners.",
    "news.rh.title": "HR workshops and opportunities",
    "news.rh.summary": "Discussion spaces on recruitment, talent development and professional skills.",
    "news.rh.body": "Human resources activities help develop skills in talent management, recruitment and teamwork. They create opportunities to strengthen employability and organizational effectiveness.",
    "activity.not_found": "Activity not found",
    "activity.not_found_text": "This activity does not exist.",
    "activity.see_all": "See all activities",
    "activity.see_others": "See other activities",
    "activity.register": "Register via WhatsApp",
    "activity.category.formation": "Training",
    "activity.category.sport": "Sport",
    "activity.category.culture": "Culture",
    "activity.japonais.title": "Japanese course",
    "activity.japonais.summary": "From beginner to advanced level.",
    "activity.cuisine-japonaise.title": "Japanese cooking workshop",
    "activity.cuisine-japonaise.summary": "Discover and prepare several iconic Japanese dishes.",
    "activity.anglais.title": "English training",
    "activity.anglais.summary": "English courses for all levels.",
    "activity.informatique.title": "Computer training",
    "activity.informatique.summary": "Office tools, internet and basic computer skills.",
    "activity.judo.title": "Judo",
    "activity.judo.summary": "Judo practice for children and adults.",
    "activity.sports.title": "Martial arts",
    "activity.sports.summary": "Judo, karate, jiu-jitsu and aikido for all levels.",
    "activity.culture.title": "Cultural activities",
    "activity.culture.summary": "Workshops and meetings, especially on Saturdays.",
    "activity.samedi-nippon.title": "Saturday Nippon",
    "activity.samedi-nippon.summary": "A cultural gathering to discover Japan and share experiences.",
    "lang.search.placeholder": "Search for a language",
    "lang.open": "Choose a language",
    "activity.open": "Open page"
  },
  ja: {
    "nav.about": "センターについて",
    "nav.history": "センターの歴史",
    "about.title": "キンシャサ日本センターについて",
    "about.intro": "キンシャサ日本センターは、コンゴ民主共和国と日本をつなぐ交流と学びの場です。",
    "about.mission.title": "使命",
    "about.mission.text": "日本への理解を広め、コンゴと日本の人々の間で文化的・教育的・人的交流を促進します。",
    "about.vision.title": "ビジョン",
    "about.vision.text": "相互理解、知識の共有、世界への開かれた姿勢を基盤に、コンゴ民主共和国と日本の持続的な架け橋を築きます。",
    "about.values.title": "大切にする価値",
    "about.values.text": "尊重、対話、好奇心、継続的な学び、そして分かち合いを大切にしています。",
    "about.role.title": "文化・教育交流の場",
    "about.role.text": "講座、文化活動、交流会を通じて、学びと能力の向上を促し、コンゴと日本の文化を互いに知る機会をつくります。",
    "history.title": "センターの歴史",
    "history.intro": "キンシャサ日本センターの目的と発展の主な段階をご紹介します。",
    "history.foundation.title": "設立",
    "history.foundation.text": "文化と教育を通じて対話を促し、コンゴ民主共和国と日本をつなぐ場所をキンシャサにつくりたいという思いから、センターは生まれました。",
    "history.timeline.title": "主な歩み",
    "history.stage1.title": "センターの設立",
    "history.stage1.text": "日本を知り、両国のつながりを深めるための場が設けられました。",
    "history.stage2.title": "活動の発展",
    "history.stage2.text": "講座や文化活動、人々が出会う機会へと活動が広がりました。",
    "history.stage3.title": "交流が生まれる場",
    "history.stage3.text": "センターは、キンシャサの人々が学び、分かち合い、つながる機会を提供しながら活動を続けています。",
    "history.note": "各段階の正確な日付は、センターによる確認後に掲載できます。",
    "nav.formations": "講座",
    "nav.activities": "活動",
    "nav.news": "ニュース",
    "nav.contact": "お問い合わせ",
    "formations.title": "講座",
    "formations.intro": "キンシャサ日本センターが提供する学習プログラムをご紹介します。",
    "activities.title": "活動・イベント",
    "activities.intro": "センターを彩るスポーツ、文化活動、定期イベントをご覧ください。",
    "home.kicker": "ようこそ",
    "home.discover": "センターを見る",
    "home.history": "センターの歴史",
    "home.history.text1": "キンシャサ日本センターは、コンゴ民主共和国と日本の間の文化的、教育的、社会的なつながりを強化するために設立されました。",
    "home.history.text2": "年月を経るにつれて、地域社会と国際社会の交流、研修、文化の場として発展してきました。",
    "home.activities.title": "活動内容",
    "home.activities.muted": "活動をクリックしてページを開きます。",
    "contact.title": "お問い合わせ",
    "contact.form.title": "メッセージを送る",
    "contact.form.name": "お名前",
    "contact.form.message": "メッセージ",
    "contact.form.submit": "WhatsAppで送信",
    "contact.form.error": "お名前とメッセージを入力してください。",
    "contact.address": "住所",
    "contact.address_value": "Centre Japonais de Kinshasa, Kinshasa, RDC",
    "contact.phone": "電話とメール",
    "contact.phone_value": "+243 850 881 102",
    "contact.email_label": "メール",
    "contact.hours": "営業時間",
    "contact.hours_value1": "月曜 – 金曜 : 08h00 – 17h00",
    "contact.hours_value2": "土曜 : 09h00 – 13h00",
    "contact.write.whatsapp": "WhatsAppで連絡",
    "contact.socials": "SNS",
    "contact.map.title": "センターマップ",
    "page.back": "ホームに戻る",
    "activity.open": "ページを開く",
    "activity.presentation": "紹介",
    "activity.schedule": "時間",
    "activity.price": "料金",
    "activity.not_found": "活動が見つかりません",
    "activity.not_found_text": "この活動は存在しません。",
    "activity.see_all": "すべての活動を見る",
    "activity.see_others": "他の活動を見る",
    "activity.register": "WhatsAppで申し込む",
    "activity.category.formation": "講座",
    "activity.category.sport": "スポーツ",
    "activity.category.culture": "文化",
    "activity.japonais.title": "日本語講座",
    "activity.japonais.summary": "初心者から上級者まで対応。",
    "activity.anglais.title": "英語講座",
    "activity.anglais.summary": "すべてのレベル向けの英語コース。",
    "activity.informatique.title": "情報技術講座",
    "activity.informatique.summary": "オフィスツール、インターネット、コンピュータの基礎。",
    "activity.judo.title": "柔道",
    "activity.judo.summary": "子どもから大人まで対応した柔道。",
    "activity.sports.title": "武道",
    "activity.sports.summary": "柔道、空手、柔術、合気道をあらゆるレベルで学べます。",
    "activity.culture.title": "文化活動",
    "activity.culture.summary": "特に土曜日に開催されるワークショップや交流会。",
    "activity.samedi-nippon.title": "サマディ・ニッポン",
    "activity.samedi-nippon.summary": "日本文化を知り、交流する文化イベントです。",
    "lang.search.placeholder": "言語を検索",
    "lang.open": "言語を選択",
    "activity.open": "ページを開く"
  },
  es: {
    "nav.about": "Acerca de",
    "nav.history": "Historia del centro",
    "about.title": "Acerca del Centro Japonés de Kinshasa",
    "about.intro": "El Centro Japonés de Kinshasa es un espacio de encuentro y aprendizaje que acerca a la República Democrática del Congo y Japón.",
    "about.mission.title": "Nuestra misión",
    "about.mission.text": "Promover el conocimiento de Japón y fomentar los intercambios culturales, educativos y humanos entre las comunidades congoleña y japonesa.",
    "about.vision.title": "Nuestra visión",
    "about.vision.text": "Construir un puente duradero entre la RDC y Japón, basado en el entendimiento mutuo, el intercambio de conocimientos y la apertura al mundo.",
    "about.values.title": "Nuestros valores",
    "about.values.text": "El respeto, el diálogo, la curiosidad, el aprendizaje continuo y el intercambio son la base de nuestro compromiso.",
    "about.role.title": "Un espacio de intercambio cultural y educativo",
    "about.role.text": "Mediante cursos, actividades culturales y encuentros, el centro fomenta el intercambio, el desarrollo de competencias y el conocimiento mutuo de las culturas congoleña y japonesa.",
    "history.title": "Historia del centro",
    "history.intro": "Descubra la vocación del Centro Japonés de Kinshasa y las principales etapas de su desarrollo.",
    "history.foundation.title": "Fundación",
    "history.foundation.text": "El centro nació del deseo de crear en Kinshasa un lugar que acercara a la RDC y Japón y donde la cultura y la educación favorecieran el diálogo.",
    "history.timeline.title": "Etapas clave",
    "history.stage1.title": "Creación del centro",
    "history.stage1.text": "Se creó un espacio dedicado a descubrir Japón y fortalecer los vínculos entre ambos países.",
    "history.stage2.title": "Desarrollo de las actividades",
    "history.stage2.text": "Las actividades se ampliaron para incluir cursos, prácticas culturales y oportunidades de encuentro.",
    "history.stage3.title": "Un espacio vivo de intercambio",
    "history.stage3.text": "El centro continúa su misión ofreciendo al público de Kinshasa oportunidades para aprender, compartir y crear vínculos.",
    "history.note": "Las fechas exactas de estas etapas podrán añadirse cuando el centro las confirme.",
    "nav.formations": "Cursos",
    "nav.news": "Noticias",
    "nav.activities": "Actividades",
    "nav.contact": "Contáctanos",
    "formations.title": "Nuestros cursos",
    "formations.intro": "Descubra los programas de aprendizaje que ofrece el Centro Japonés de Kinshasa.",
    "activities.title": "Actividades y eventos",
    "activities.intro": "Descubra las actividades deportivas y culturales y los encuentros que dan vida al centro.",
    "home.kicker": "Bienvenido",
    "home.discover": "Descubre el centro",
    "home.history": "Historia del centro",
    "home.history.text1": "El Centro Japonés de Kinshasa fue creado para fortalecer los lazos culturales, educativos y sociales entre la República Democrática del Congo y Japón.",
    "home.history.text2": "Con el paso de los años, se convirtió en un espacio de encuentro, formación, cultura e intercambio entre comunidades locales e internacionales.",
    "home.activities.title": "Nuestras actividades",
    "home.activities.muted": "Haz clic en una actividad para abrir su página.",
    "contact.title": "Contacto",
    "contact.form.title": "Escríbenos",
    "contact.form.name": "Tu nombre",
    "contact.form.message": "Tu mensaje",
    "contact.form.submit": "Enviar por WhatsApp",
    "contact.form.error": "Escribe tu nombre y tu mensaje.",
    "contact.address": "Dirección",
    "contact.address_value": "Centre Japonais de Kinshasa, Kinshasa, RDC",
    "contact.phone": "Teléfono y correo",
    "contact.phone_value": "+243 850 881 102",
    "contact.email_label": "Correo",
    "contact.hours": "Horario",
    "contact.hours_value1": "Lunes – Viernes: 08:00 – 17:00",
    "contact.hours_value2": "Sábado: 09:00 – 13:00",
    "contact.write.whatsapp": "Escribir por WhatsApp",
    "contact.socials": "Redes sociales",
    "contact.map.title": "Mapa del centro",
    "page.back": "Volver al inicio",
    "activity.open": "Abrir página",
    "activity.presentation": "Presentación",
    "activity.schedule": "Horario",
    "activity.price": "Precio",
    "activity.not_found": "Actividad no encontrada",
    "activity.not_found_text": "Esta actividad no existe.",
    "activity.see_all": "Ver todas las actividades",
    "activity.see_others": "Ver otras actividades",
    "activity.register": "Inscribirse por WhatsApp",
    "activity.category.formation": "Formación",
    "activity.category.sport": "Deporte",
    "activity.category.culture": "Cultura",
    "activity.japonais.title": "Curso de japonés",
    "activity.japonais.summary": "Desde principiantes hasta niveles avanzados.",
    "activity.anglais.title": "Formación en inglés",
    "activity.anglais.summary": "Clases de inglés para todos los niveles.",
    "activity.informatique.title": "Formación en informática",
    "activity.informatique.summary": "Ofimática, internet y fundamentos de informática.",
    "activity.judo.title": "Judo",
    "activity.judo.summary": "Práctica de judo para niños y adultos.",
    "activity.sports.title": "Artes marciales",
    "activity.sports.summary": "Judo, karate, jiu-jitsu y aikido para todos los niveles.",
    "activity.culture.title": "Actividades culturales",
    "activity.culture.summary": "Talleres y encuentros, especialmente los sábados.",
    "activity.samedi-nippon.title": "Sábado Nippon",
    "activity.samedi-nippon.summary": "Un encuentro cultural para descubrir Japón y compartir.",
    "lang.search.placeholder": "Buscar un idioma",
    "lang.open": "Elegir un idioma",
    "activity.open": "Abrir página"
  },
  de: {
    "nav.about": "Über uns",
    "nav.history": "Geschichte des Zentrums",
    "about.title": "Über das Centre Japonais de Kinshasa",
    "about.intro": "Das Centre Japonais de Kinshasa ist ein Ort der Begegnung und des Lernens, der die Demokratische Republik Kongo und Japan einander näherbringt.",
    "about.mission.title": "Unsere Mission",
    "about.mission.text": "Wir fördern das Wissen über Japan und den kulturellen, bildungsbezogenen und menschlichen Austausch zwischen kongolesischen und japanischen Gemeinschaften.",
    "about.vision.title": "Unsere Vision",
    "about.vision.text": "Wir wollen eine dauerhafte Brücke zwischen der DR Kongo und Japan bauen, getragen von gegenseitigem Verständnis, Wissensaustausch und Offenheit gegenüber der Welt.",
    "about.values.title": "Unsere Werte",
    "about.values.text": "Respekt, Dialog, Neugier, lebenslanges Lernen und Teilen stehen im Mittelpunkt unseres Engagements.",
    "about.role.title": "Ein Ort des kulturellen und bildungsbezogenen Austauschs",
    "about.role.text": "Mit Kursen, kulturellen Aktivitäten und Begegnungen fördert das Zentrum Austausch, Kompetenzentwicklung und die gegenseitige Entdeckung kongolesischer und japanischer Kulturen.",
    "history.title": "Geschichte des Zentrums",
    "history.intro": "Entdecken Sie den Auftrag des Centre Japonais de Kinshasa und die wichtigsten Phasen seiner Entwicklung.",
    "history.foundation.title": "Gründung",
    "history.foundation.text": "Das Zentrum entstand aus dem Wunsch, in Kinshasa einen Ort zu schaffen, der die DR Kongo und Japan einander näherbringt und an dem Kultur und Bildung den Dialog fördern.",
    "history.timeline.title": "Wichtige Etappen",
    "history.stage1.title": "Gründung des Zentrums",
    "history.stage1.text": "Es entstand ein Ort, der Japan näherbringt und die Beziehungen zwischen beiden Ländern stärkt.",
    "history.stage2.title": "Ausbau der Aktivitäten",
    "history.stage2.text": "Das Angebot wurde um Kurse, kulturelle Aktivitäten und Begegnungsmöglichkeiten erweitert.",
    "history.stage3.title": "Ein lebendiger Ort des Austauschs",
    "history.stage3.text": "Das Zentrum setzt seine Arbeit fort und bietet den Menschen in Kinshasa Möglichkeiten zum Lernen, Teilen und Vernetzen.",
    "history.note": "Genaue Daten zu diesen Etappen können ergänzt werden, sobald das Zentrum sie bestätigt hat.",
    "nav.formations": "Kurse",
    "nav.news": "Nachrichten",
    "nav.activities": "Aktivitäten",
    "nav.contact": "Kontaktieren Sie uns",
    "formations.title": "Unsere Kurse",
    "formations.intro": "Entdecken Sie die Lernangebote des Centre Japonais de Kinshasa.",
    "activities.title": "Aktivitäten und Veranstaltungen",
    "activities.intro": "Entdecken Sie die Sport- und Kulturangebote sowie die regelmäßigen Treffen des Zentrums.",
    "home.kicker": "Willkommen",
    "home.discover": "Zentrum entdecken",
    "home.history": "Geschichte des Zentrums",
    "home.history.text1": "Das Centre Japonais de Kinshasa wurde gegründet, um die kulturellen, bildungsbezogenen und sozialen Beziehungen zwischen der Demokratischen Republik Kongo und Japan zu stärken.",
    "home.history.text2": "Im Laufe der Jahre wurde es zu einem Ort des Treffens, der Ausbildung, der Kultur und des Austauschs zwischen lokalen und internationalen Gemeinschaften.",
    "home.activities.title": "Unsere Aktivitäten",
    "home.activities.muted": "Klicke auf eine Aktivität, um ihre Seite zu öffnen.",
    "contact.title": "Kontakt",
    "contact.form.title": "Schreib uns",
    "contact.form.name": "Dein Name",
    "contact.form.message": "Deine Nachricht",
    "contact.form.submit": "Per WhatsApp senden",
    "contact.form.error": "Bitte gib deinen Namen und deine Nachricht ein.",
    "contact.address": "Adresse",
    "contact.address_value": "Centre Japonais de Kinshasa, Kinshasa, RDC",
    "contact.phone": "Telefon und E-Mail",
    "contact.phone_value": "+243 850 881 102",
    "contact.email_label": "E-Mail",
    "contact.hours": "Öffnungszeiten",
    "contact.hours_value1": "Montag – Freitag: 08:00 – 17:00",
    "contact.hours_value2": "Samstag: 09:00 – 13:00",
    "contact.write.whatsapp": "Per WhatsApp schreiben",
    "contact.socials": "Soziale Medien",
    "contact.map.title": "Kartenlage",
    "page.back": "Zur Startseite",
    "activity.open": "Seite öffnen",
    "activity.presentation": "Präsentation",
    "activity.schedule": "Zeitplan",
    "activity.price": "Preis",
    "activity.not_found": "Aktivität nicht gefunden",
    "activity.not_found_text": "Diese Aktivität existiert nicht.",
    "activity.see_all": "Alle Aktivitäten sehen",
    "activity.see_others": "Andere Aktivitäten sehen",
    "activity.register": "Per WhatsApp anmelden",
    "activity.category.formation": "Ausbildung",
    "activity.category.sport": "Sport",
    "activity.category.culture": "Kultur",
    "activity.japonais.title": "Japanischkurs",
    "activity.japonais.summary": "Von Anfängern bis zum Fortgeschrittenen Niveau.",
    "activity.anglais.title": "Englischkurs",
    "activity.anglais.summary": "Englischkurse für alle Niveaus.",
    "activity.informatique.title": "Informatikkurs",
    "activity.informatique.summary": "Büroanwendungen, Internet und Grundlagen der Informatik.",
    "activity.judo.title": "Judo",
    "activity.judo.summary": "Judo für Kinder und Erwachsene.",
    "activity.sports.title": "Kampfsportarten",
    "activity.sports.summary": "Judo, Karate, Jiu-Jitsu und Aikido für alle Niveaus.",
    "activity.culture.title": "Kulturelle Aktivitäten",
    "activity.culture.summary": "Workshops und Treffen, besonders am Samstag.",
    "activity.samedi-nippon.title": "Samstag Nippon",
    "activity.samedi-nippon.summary": "Ein kulturelles Treffen, um Japan zu entdecken und Erfahrungen zu teilen.",
    "lang.search.placeholder": "Sprache suchen",
    "lang.open": "Sprache wählen",
    "activity.open": "Seite öffnen"
  },
  pt: {
    "nav.about": "Sobre",
    "nav.history": "História do centro",
    "about.title": "Sobre o Centre Japonais de Kinshasa",
    "about.intro": "O Centre Japonais de Kinshasa é um espaço de encontro e aprendizagem que aproxima a República Democrática do Congo e o Japão.",
    "about.mission.title": "Nossa missão",
    "about.mission.text": "Promover o conhecimento do Japão e incentivar intercâmbios culturais, educacionais e humanos entre as comunidades congolesa e japonesa.",
    "about.vision.title": "Nossa visão",
    "about.vision.text": "Construir uma ponte duradoura entre a RDC e o Japão, baseada na compreensão mútua, na partilha de conhecimentos e na abertura ao mundo.",
    "about.values.title": "Nossos valores",
    "about.values.text": "Respeito, diálogo, curiosidade, aprendizagem contínua e partilha estão no centro do nosso compromisso.",
    "about.role.title": "Um espaço de intercâmbio cultural e educacional",
    "about.role.text": "Por meio de cursos, atividades culturais e encontros, o centro incentiva o intercâmbio, o desenvolvimento de competências e a descoberta mútua das culturas congolesa e japonesa.",
    "history.title": "História do centro",
    "history.intro": "Conheça a vocação do Centre Japonais de Kinshasa e as principais etapas do seu desenvolvimento.",
    "history.foundation.title": "Fundação",
    "history.foundation.text": "O centro nasceu da vontade de criar em Kinshasa um espaço que aproximasse a RDC e o Japão, onde a cultura e a educação favorecessem o diálogo.",
    "history.timeline.title": "Etapas importantes",
    "history.stage1.title": "Criação do centro",
    "history.stage1.text": "Foi criado um espaço dedicado à descoberta do Japão e ao fortalecimento dos laços entre os dois países.",
    "history.stage2.title": "Desenvolvimento das atividades",
    "history.stage2.text": "As atividades se expandiram para incluir cursos, práticas culturais e oportunidades de encontro.",
    "history.stage3.title": "Um espaço vivo de intercâmbio",
    "history.stage3.text": "O centro continua sua missão, oferecendo ao público de Kinshasa oportunidades para aprender, compartilhar e criar laços.",
    "history.note": "As datas exatas dessas etapas poderão ser incluídas após a confirmação pelo centro.",
    "nav.formations": "Cursos",
    "nav.news": "Notícias",
    "nav.activities": "Atividades",
    "nav.contact": "Fale conosco",
    "formations.title": "Nossos cursos",
    "formations.intro": "Conheça os programas de aprendizagem oferecidos pelo Centre Japonais de Kinshasa.",
    "activities.title": "Atividades e eventos",
    "activities.intro": "Descubra as atividades esportivas e culturais e os encontros que dão vida ao centro.",
    "home.kicker": "Bem-vindo",
    "home.discover": "Descobrir o centro",
    "home.history": "História do centro",
    "home.history.text1": "O Centre Japonais de Kinshasa foi criado para fortalecer os laços culturais, educativos e sociais entre a República Democrática do Congo e o Japão.",
    "home.history.text2": "Ao longo dos anos, tornou-se um espaço de encontro, formação, cultura e troca entre comunidades locais e internacionais.",
    "home.activities.title": "Nossas atividades",
    "home.activities.muted": "Clique em uma atividade para abrir sua página.",
    "contact.title": "Contato",
    "contact.form.title": "Escreva-nos",
    "contact.form.name": "Seu nome",
    "contact.form.message": "Sua mensagem",
    "contact.form.submit": "Enviar por WhatsApp",
    "contact.form.error": "Digite seu nome e sua mensagem.",
    "contact.address": "Endereço",
    "contact.address_value": "Centre Japonais de Kinshasa, Kinshasa, RDC",
    "contact.phone": "Telefone e e-mail",
    "contact.phone_value": "+243 850 881 102",
    "contact.email_label": "E-mail",
    "contact.hours": "Horário",
    "contact.hours_value1": "Segunda – Sexta: 08:00 – 17:00",
    "contact.hours_value2": "Sábado: 09:00 – 13:00",
    "contact.write.whatsapp": "Escrever no WhatsApp",
    "contact.socials": "Redes sociais",
    "contact.map.title": "Mapa do centro",
    "page.back": "Voltar para o início",
    "activity.open": "Abrir página",
    "activity.presentation": "Apresentação",
    "activity.schedule": "Horário",
    "activity.price": "Preço",
    "activity.not_found": "Atividade não encontrada",
    "activity.not_found_text": "Essa atividade não existe.",
    "activity.see_all": "Ver todas as atividades",
    "activity.see_others": "Ver outras atividades",
    "activity.register": "Inscrever-se por WhatsApp",
    "activity.category.formation": "Formação",
    "activity.category.sport": "Esporte",
    "activity.category.culture": "Cultura",
    "activity.japonais.title": "Curso de japonês",
    "activity.japonais.summary": "Do nível iniciante ao avançado.",
    "activity.anglais.title": "Treinamento em inglês",
    "activity.anglais.summary": "Aulas de inglês para todos os níveis.",
    "activity.informatique.title": "Curso de informática",
    "activity.informatique.summary": "Informática básica, internet e ferramentas de escritório.",
    "activity.judo.title": "Judô",
    "activity.judo.summary": "Prática de judô para crianças e adultos.",
    "activity.sports.title": "Artes marciais",
    "activity.sports.summary": "Judô, karatê, jiu-jitsu e aikido para todos os níveis.",
    "activity.culture.title": "Atividades culturais",
    "activity.culture.summary": "Oficinas e encontros, especialmente aos sábados.",
    "activity.samedi-nippon.title": "Sábado Nippon",
    "activity.samedi-nippon.summary": "Um encontro cultural para descobrir o Japão e compartilhar experiências.",
    "lang.search.placeholder": "Buscar idioma",
    "lang.open": "Escolher idioma",
    "activity.open": "Abrir página"
  },
  ar: {
    "nav.about": "من نحن",
    "nav.history": "تاريخ المركز",
    "about.title": "عن المركز الياباني في كينشاسا",
    "about.intro": "المركز الياباني في كينشاسا مساحة للقاء والتعلم تقرّب بين جمهورية الكونغو الديمقراطية واليابان.",
    "about.mission.title": "رسالتنا",
    "about.mission.text": "تعزيز المعرفة باليابان وتشجيع التبادل الثقافي والتعليمي والإنساني بين المجتمعين الكونغولي والياباني.",
    "about.vision.title": "رؤيتنا",
    "about.vision.text": "بناء جسر دائم بين جمهورية الكونغو الديمقراطية واليابان يقوم على التفاهم المتبادل وتبادل المعرفة والانفتاح على العالم.",
    "about.values.title": "قيمنا",
    "about.values.text": "الاحترام والحوار والفضول والتعلم المستمر والمشاركة هي أساس التزامنا.",
    "about.role.title": "مساحة للتبادل الثقافي والتعليمي",
    "about.role.text": "من خلال الدورات والأنشطة الثقافية واللقاءات، يشجع المركز التبادل وتنمية المهارات والتعرف المتبادل على الثقافتين الكونغولية واليابانية.",
    "history.title": "تاريخ المركز",
    "history.intro": "اكتشفوا رسالة المركز الياباني في كينشاسا والمراحل الرئيسية لتطوره.",
    "history.foundation.title": "التأسيس",
    "history.foundation.text": "نشأ المركز من الرغبة في إنشاء مساحة في كينشاسا تقرّب بين جمهورية الكونغو الديمقراطية واليابان، وتعزز فيها الثقافة والتعليم الحوار.",
    "history.timeline.title": "محطات رئيسية",
    "history.stage1.title": "إنشاء المركز",
    "history.stage1.text": "إنشاء مساحة مخصصة للتعرف على اليابان وتعزيز الروابط بين البلدين.",
    "history.stage2.title": "تطوير الأنشطة",
    "history.stage2.text": "توسعت الأنشطة لتشمل الدورات والممارسات الثقافية وفرص اللقاء.",
    "history.stage3.title": "مساحة حيوية للتبادل",
    "history.stage3.text": "يواصل المركز رسالته من خلال إتاحة فرص التعلم والمشاركة وبناء الروابط لسكان كينشاسا.",
    "history.note": "يمكن إضافة التواريخ الدقيقة لهذه المراحل بعد تأكيدها من المركز.",
    "nav.formations": "الدورات",
    "nav.news": "الأخبار",
    "nav.activities": "الأنشطة",
    "nav.contact": "تواصل معنا",
    "formations.title": "دوراتنا التدريبية",
    "formations.intro": "اكتشفوا برامج التعلم التي يقدمها المركز الياباني في كينشاسا.",
    "activities.title": "الأنشطة والفعاليات",
    "activities.intro": "اكتشفوا الأنشطة الرياضية والثقافية واللقاءات التي تبث الحياة في المركز.",
    "home.kicker": "أهلاً وسهلاً",
    "home.discover": "اكتشف المركز",
    "home.history": "تاريخ المركز",
    "home.history.text1": "تم إنشاء مركز كينشاسا الياباني لتعزيز الروابط الثقافية والتعليمية والاجتماعية بين جمهورية الكونغو الديمقراطية واليابان.",
    "home.history.text2": "مع مرور السنوات، أصبح مساحة للقاء والتدريب والثقافة والتبادل بين المجتمعات المحلية والدولية.",
    "home.activities.title": "أنشطتنا",
    "home.activities.muted": "انقر على نشاط لفتح صفحته.",
    "contact.title": "تواصل",
    "contact.form.title": "اكتب لنا",
    "contact.form.name": "اسمك",
    "contact.form.message": "رسالتك",
    "contact.form.submit": "إرسال عبر واتساب",
    "contact.form.error": "يرجى كتابة اسمك ورسالتك.",
    "contact.address": "العنوان",
    "contact.address_value": "Centre Japonais de Kinshasa, Kinshasa, RDC",
    "contact.phone": "الهاتف والبريد",
    "contact.phone_value": "+243 850 881 102",
    "contact.email_label": "البريد الإلكتروني",
    "contact.hours": "مواعيد العمل",
    "contact.hours_value1": "الاثنين – الجمعة: 08:00 – 17:00",
    "contact.hours_value2": "السبت: 09:00 – 13:00",
    "contact.write.whatsapp": "كتابة عبر واتساب",
    "contact.socials": "الشبكات الاجتماعية",
    "contact.map.title": "خريطة المركز",
    "page.back": "العودة إلى الرئيسية",
    "activity.open": "فتح الصفحة",
    "activity.presentation": "العرض",
    "activity.schedule": "الجدول",
    "activity.price": "السعر",
    "activity.not_found": "النشاط غير موجود",
    "activity.not_found_text": "هذا النشاط غير موجود.",
    "activity.see_all": "عرض جميع الأنشطة",
    "activity.see_others": "عرض الأنشطة الأخرى",
    "activity.register": "التسجيل عبر واتساب",
    "activity.category.formation": "تدريب",
    "activity.category.sport": "رياضة",
    "activity.category.culture": "ثقافة",
    "activity.japonais.title": "دورة اللغة اليابانية",
    "activity.japonais.summary": "من المستوى المبتدئ إلى المستوى المتقدم.",
    "activity.anglais.title": "دورة اللغة الإنجليزية",
    "activity.anglais.summary": "دروس لغة إنجليزية لجميع المستويات.",
    "activity.informatique.title": "تدريب الحوسبة",
    "activity.informatique.summary": "الأدوات المكتبية والإنترنت وأساسيات الحوسبة.",
    "activity.judo.title": "الجودو",
    "activity.judo.summary": "ممارسة الجودو للأطفال والبالغين.",
    "activity.sports.title": "فنون قتالية",
    "activity.sports.summary": "الجودو والكاراتيه والجيوجيتسو والأيكيدو لجميع المستويات.",
    "activity.culture.title": "الأنشطة الثقافية",
    "activity.culture.summary": "ورش عمل ولقاءات، وخاصة يوم السبت.",
    "activity.samedi-nippon.title": "السبت الياباني",
    "activity.samedi-nippon.summary": "لقاء ثقافي لاكتشاف اليابان وتبادل الخبرات.",
    "lang.search.placeholder": "ابحث عن لغة",
    "lang.open": "اختر لغة",
    "activity.open": "فتح الصفحة"
  },
  zh: {
    "nav.about": "关于我们",
    "nav.history": "中心历史",
    "about.title": "关于金夏沙日本中心",
    "about.intro": "金夏沙日本中心是促进刚果民主共和国与日本相互了解的交流与学习空间。",
    "about.mission.title": "我们的使命",
    "about.mission.text": "推广对日本的了解，促进刚果社区与日本社区之间的文化、教育和人员交流。",
    "about.vision.title": "我们的愿景",
    "about.vision.text": "以相互理解、知识共享和开放的态度，在刚果民主共和国与日本之间建立持久的桥梁。",
    "about.values.title": "我们的价值观",
    "about.values.text": "尊重、对话、好奇心、持续学习与分享是我们工作的核心。",
    "about.role.title": "文化与教育交流空间",
    "about.role.text": "通过课程、文化活动和交流会，中心推动交流、技能培养以及对刚果和日本文化的相互了解。",
    "history.title": "中心历史",
    "history.intro": "了解金夏沙日本中心的宗旨及其发展的重要阶段。",
    "history.foundation.title": "创立",
    "history.foundation.text": "中心源于在金夏沙建立交流空间的愿望，旨在拉近刚果民主共和国与日本的距离，并以文化和教育促进对话。",
    "history.timeline.title": "重要阶段",
    "history.stage1.title": "中心成立",
    "history.stage1.text": "建立了一个介绍日本、加强两国联系的空间。",
    "history.stage2.title": "活动发展",
    "history.stage2.text": "活动逐步扩展到课程、文化实践和交流机会。",
    "history.stage3.title": "充满活力的交流空间",
    "history.stage3.text": "中心继续履行使命，为金夏沙民众提供学习、分享和建立联系的机会。",
    "history.note": "中心确认具体日期后，可补充各阶段的准确时间。",
    "nav.formations": "课程",
    "nav.news": "新闻",
    "nav.activities": "活动",
    "nav.contact": "联系我们",
    "formations.title": "我们的课程",
    "formations.intro": "了解金夏沙日本中心提供的学习课程。",
    "activities.title": "活动与精彩项目",
    "activities.intro": "了解为中心带来活力的体育、文化活动和定期交流项目。",
    "home.kicker": "欢迎",
    "home.discover": "发现中心",
    "home.history": "中心历史",
    "home.history.text1": "金夏沙日本中心是为加强刚果民主共和国与日本之间的文化、教育和社会联系而成立的。",
    "home.history.text2": "多年来，它已成为当地和国际社区交流、培训、文化和沟通的空间。",
    "home.activities.title": "我们的活动",
    "home.activities.muted": "点击活动即可打开页面。",
    "contact.title": "联系",
    "contact.form.title": "给我们留言",
    "contact.form.name": "你的名字",
    "contact.form.message": "你的留言",
    "contact.form.submit": "通过 WhatsApp 发送",
    "contact.form.error": "请输入你的名字和留言。",
    "contact.address": "地址",
    "contact.address_value": "Centre Japonais de Kinshasa, Kinshasa, RDC",
    "contact.phone": "电话和邮箱",
    "contact.phone_value": "+243 850 881 102",
    "contact.email_label": "邮箱",
    "contact.hours": "营业时间",
    "contact.hours_value1": "周一 – 周五：08:00 – 17:00",
    "contact.hours_value2": "周六：09:00 – 13:00",
    "contact.write.whatsapp": "通过 WhatsApp 联系",
    "contact.socials": "社交媒体",
    "contact.map.title": "中心地图",
    "page.back": "返回首页",
    "activity.open": "打开页面",
    "activity.presentation": "介绍",
    "activity.schedule": "时间表",
    "activity.price": "价格",
    "activity.not_found": "未找到活动",
    "activity.not_found_text": "此活动不存在。",
    "activity.see_all": "查看所有活动",
    "activity.see_others": "查看其他活动",
    "activity.register": "通过 WhatsApp 报名",
    "activity.category.formation": "培训",
    "activity.category.sport": "体育",
    "activity.category.culture": "文化",
    "activity.japonais.title": "日语课程",
    "activity.japonais.summary": "从初学者到高级水平都有。",
    "activity.anglais.title": "英语培训",
    "activity.anglais.summary": "适合所有水平的英语课程。",
    "activity.informatique.title": "计算机培训",
    "activity.informatique.summary": "办公软件、互联网和计算机基础。",
    "activity.judo.title": "柔道",
    "activity.judo.summary": "适合儿童和成人的柔道训练。",
    "activity.sports.title": "武术",
    "activity.sports.summary": "面向各级学员的柔道、空手道、柔术和合气道课程。",
    "activity.culture.title": "文化活动",
    "activity.culture.summary": "工作坊和交流会，尤其是星期六。",
    "activity.samedi-nippon.title": "日本星期六",
    "activity.samedi-nippon.summary": "一场了解日本文化、分享交流的文化活动。",
    "lang.search.placeholder": "搜索语言",
    "lang.open": "选择语言",
    "activity.open": "打开页面"
  },
  ko: {
    "nav.about": "센터 소개",
    "nav.history": "센터 역사",
    "about.title": "킨샤사 일본 센터 소개",
    "about.intro": "킨샤사 일본 센터는 콩고민주공화국과 일본을 잇는 만남과 배움의 공간입니다.",
    "about.mission.title": "사명",
    "about.mission.text": "일본에 대한 이해를 높이고 콩고와 일본 공동체 사이의 문화·교육·인적 교류를 촉진합니다.",
    "about.vision.title": "비전",
    "about.vision.text": "상호 이해와 지식 공유, 세계를 향한 개방성을 바탕으로 콩고민주공화국과 일본 사이에 지속적인 가교를 만듭니다.",
    "about.values.title": "가치",
    "about.values.text": "존중, 대화, 호기심, 지속적인 배움과 나눔을 소중히 여깁니다.",
    "about.role.title": "문화·교육 교류의 장",
    "about.role.text": "강좌와 문화 활동, 만남을 통해 교류와 역량 개발을 장려하고 콩고와 일본 문화를 서로 알아가는 기회를 제공합니다.",
    "history.title": "센터의 역사",
    "history.intro": "킨샤사 일본 센터의 목적과 발전의 주요 단계를 소개합니다.",
    "history.foundation.title": "설립",
    "history.foundation.text": "문화와 교육을 통해 대화를 촉진하고 콩고민주공화국과 일본을 잇는 공간을 킨샤사에 만들고자 하는 뜻에서 센터가 시작되었습니다.",
    "history.timeline.title": "주요 단계",
    "history.stage1.title": "센터 설립",
    "history.stage1.text": "일본을 알리고 두 나라의 유대를 강화하기 위한 공간을 마련했습니다.",
    "history.stage2.title": "활동 확대",
    "history.stage2.text": "강좌와 문화 활동, 만남의 기회로 활동 범위를 넓혔습니다.",
    "history.stage3.title": "살아 있는 교류의 공간",
    "history.stage3.text": "센터는 킨샤사 시민에게 배우고 나누며 관계를 맺을 기회를 제공하며 사명을 이어가고 있습니다.",
    "history.note": "센터에서 확인한 뒤 각 단계의 정확한 날짜를 추가할 수 있습니다.",
    "nav.formations": "과정",
    "nav.news": "뉴스",
    "nav.activities": "활동",
    "nav.contact": "문의하기",
    "formations.title": "교육 과정",
    "formations.intro": "킨샤사 일본 센터에서 제공하는 학습 프로그램을 확인해 보세요.",
    "activities.title": "활동 및 행사",
    "activities.intro": "센터에 활기를 더하는 스포츠·문화 활동과 정기 모임을 만나 보세요.",
    "home.kicker": "환영합니다",
    "home.discover": "센터 알아보기",
    "home.history": "센터 소개",
    "home.history.text1": "킨샤사 일본 센터는 콩고 민주 공화국과 일본 사이의 문화적, 교육적, 사회적 연결을 강화하기 위해 설립되었습니다.",
    "home.history.text2": "수년 동안 지역 및 국제 커뮤니티 간의 만남, 교육, 문화, 교류의 공간으로 발전해 왔습니다.",
    "home.activities.title": "우리의 활동",
    "home.activities.muted": "활동을 클릭하면 해당 페이지가 열립니다.",
    "contact.title": "연락처",
    "contact.form.title": "문의하기",
    "contact.form.name": "이름",
    "contact.form.message": "메시지",
    "contact.form.submit": "WhatsApp로 보내기",
    "contact.form.error": "이름과 메시지를 입력해주세요.",
    "contact.address": "주소",
    "contact.address_value": "Centre Japonais de Kinshasa, Kinshasa, RDC",
    "contact.phone": "전화 및 이메일",
    "contact.phone_value": "+243 850 881 102",
    "contact.email_label": "이메일",
    "contact.hours": "운영시간",
    "contact.hours_value1": "월요일 – 금요일: 08:00 – 17:00",
    "contact.hours_value2": "토요일: 09:00 – 13:00",
    "contact.write.whatsapp": "WhatsApp로 문의",
    "contact.socials": "소셜 미디어",
    "contact.map.title": "센터 지도",
    "page.back": "홈으로 돌아가기",
    "activity.open": "페이지 열기",
    "activity.presentation": "소개",
    "activity.schedule": "시간표",
    "activity.price": "가격",
    "activity.not_found": "활동을 찾을 수 없습니다",
    "activity.not_found_text": "해당 활동은 존재하지 않습니다.",
    "activity.see_all": "모든 활동 보기",
    "activity.see_others": "다른 활동 보기",
    "activity.register": "WhatsApp로 등록",
    "activity.category.formation": "교육",
    "activity.category.sport": "스포츠",
    "activity.category.culture": "문화",
    "activity.japonais.title": "일본어 과정",
    "activity.japonais.summary": "초급부터 고급까지 모두 가능합니다.",
    "activity.anglais.title": "영어 교육",
    "activity.anglais.summary": "모든 수준을 위한 영어 수업.",
    "activity.informatique.title": "컴퓨터 교육",
    "activity.informatique.summary": "사무용 도구, 인터넷, 컴퓨터 기초.",
    "activity.judo.title": "유도",
    "activity.judo.summary": "어린이와 성인을 위한 유도 수업.",
    "activity.sports.title": "무술",
    "activity.sports.summary": "모든 수준을 위한 유도, 가라테, 주짓수, 합기도 수업입니다.",
    "activity.culture.title": "문화 활동",
    "activity.culture.summary": "특히 토요일에 열리는 워크숍과 만남.",
    "activity.samedi-nippon.title": "사마디 닛폰",
    "activity.samedi-nippon.summary": "일본 문화를 알아보고 경험을 나누는 문화 모임입니다.",
    "lang.search.placeholder": "언어 검색",
    "lang.open": "언어 선택",
    "activity.open": "페이지 열기"
  },
  ru: {
    "nav.about": "О центре",
    "nav.history": "История центра",
    "about.title": "О Centre Japonais de Kinshasa",
    "about.intro": "Centre Japonais de Kinshasa — это пространство для встреч и обучения, сближающее Демократическую Республику Конго и Японию.",
    "about.mission.title": "Наша миссия",
    "about.mission.text": "Распространять знания о Японии и развивать культурный, образовательный и человеческий обмен между конголезским и японским сообществами.",
    "about.vision.title": "Наше видение",
    "about.vision.text": "Создать прочный мост между ДР Конго и Японией на основе взаимопонимания, обмена знаниями и открытости миру.",
    "about.values.title": "Наши ценности",
    "about.values.text": "Уважение, диалог, любознательность, постоянное обучение и обмен лежат в основе нашей работы.",
    "about.role.title": "Пространство культурного и образовательного обмена",
    "about.role.text": "Через курсы, культурные мероприятия и встречи центр развивает обмен, навыки и взаимное знакомство с конголезской и японской культурами.",
    "history.title": "История центра",
    "history.intro": "Узнайте о предназначении Centre Japonais de Kinshasa и основных этапах его развития.",
    "history.foundation.title": "Основание",
    "history.foundation.text": "Центр возник из стремления создать в Киншасе место, сближающее ДР Конго и Японию, где культура и образование способствуют диалогу.",
    "history.timeline.title": "Ключевые этапы",
    "history.stage1.title": "Создание центра",
    "history.stage1.text": "Было создано пространство для знакомства с Японией и укрепления связей между двумя странами.",
    "history.stage2.title": "Развитие деятельности",
    "history.stage2.text": "Деятельность расширилась и включила курсы, культурные практики и возможности для встреч.",
    "history.stage3.title": "Живое пространство для обмена",
    "history.stage3.text": "Центр продолжает свою миссию, предоставляя жителям Киншасы возможности учиться, делиться опытом и налаживать связи.",
    "history.note": "Точные даты этапов можно добавить после их подтверждения центром.",
    "nav.formations": "Курсы",
    "nav.news": "Новости",
    "nav.activities": "Мероприятия",
    "nav.contact": "Связаться с нами",
    "formations.title": "Наши курсы",
    "formations.intro": "Познакомьтесь с образовательными программами Centre Japonais de Kinshasa.",
    "activities.title": "Мероприятия и встречи",
    "activities.intro": "Откройте для себя спортивные и культурные мероприятия, а также регулярные встречи центра.",
    "home.kicker": "Добро пожаловать",
    "home.discover": "Узнать центр",
    "home.history": "История центра",
    "home.history.text1": "Центр японской культуры в Киншасе был создан для укрепления культурных, образовательных и социальных связей между Демократической Республикой Конго и Японией.",
    "home.history.text2": "С годами он стал местом встреч, обучения, культуры и обмена между местными и международными сообществами.",
    "home.activities.title": "Наши активности",
    "home.activities.muted": "Нажмите на активность, чтобы открыть страницу.",
    "contact.title": "Контакты",
    "contact.form.title": "Напишите нам",
    "contact.form.name": "Ваше имя",
    "contact.form.message": "Ваше сообщение",
    "contact.form.submit": "Отправить в WhatsApp",
    "contact.form.error": "Пожалуйста, укажите ваше имя и сообщение.",
    "contact.address": "Адрес",
    "contact.address_value": "Centre Japonais de Kinshasa, Kinshasa, RDC",
    "contact.phone": "Телефон и электронная почта",
    "contact.phone_value": "+243 850 881 102",
    "contact.email_label": "Электронная почта",
    "contact.hours": "Часы работы",
    "contact.hours_value1": "Понедельник – Пятница: 08:00 – 17:00",
    "contact.hours_value2": "Суббота: 09:00 – 13:00",
    "contact.write.whatsapp": "Написать в WhatsApp",
    "contact.socials": "Социальные сети",
    "contact.map.title": "Карта центра",
    "page.back": "Вернуться на главную",
    "activity.open": "Открыть страницу",
    "activity.presentation": "Описание",
    "activity.schedule": "Расписание",
    "activity.price": "Цена",
    "activity.not_found": "Активность не найдена",
    "activity.not_found_text": "Эта активность не существует.",
    "activity.see_all": "Посмотреть все активности",
    "activity.see_others": "Посмотреть другие активности",
    "activity.register": "Записаться через WhatsApp",
    "activity.category.formation": "Обучение",
    "activity.category.sport": "Спорт",
    "activity.category.culture": "Культура",
    "activity.japonais.title": "Курс японского языка",
    "activity.japonais.summary": "От начального до продвинутого уровня.",
    "activity.anglais.title": "Курсы английского языка",
    "activity.anglais.summary": "Английские курсы для всех уровней.",
    "activity.informatique.title": "Курс информатики",
    "activity.informatique.summary": "Офисные инструменты, интернет и основы информатики.",
    "activity.judo.title": "Дзюдо",
    "activity.judo.summary": "Занятия дзюдо для детей и взрослых.",
    "activity.sports.title": "Боевые искусства",
    "activity.sports.summary": "Дзюдо, каратэ, джиу-джитсу и айкидо для всех уровней.",
    "activity.culture.title": "Культурные активности",
    "activity.culture.summary": "Мастерские и встречи, особенно по субботам.",
    "activity.samedi-nippon.title": "Самади Ниппон",
    "activity.samedi-nippon.summary": "Культурная встреча, посвящённая знакомству с Японией и обмену опытом.",
    "lang.search.placeholder": "Найти язык",
    "lang.open": "Выбрать язык",
    "activity.open": "Открыть страницу"
  }
};

const ACTIVITY_TRANSLATIONS = {
  fr: {
    "activity.japonais.description": "Apprenez les bases du japonais, la conversation, la lecture et l’écriture avec un accompagnement progressif adapté à chaque niveau.",
    "activity.cuisine-japonaise.description": "Un atelier pratique pour découvrir les ingrédients, les techniques et les saveurs de la cuisine japonaise à travers plusieurs recettes.",
    "activity.cuisine.catalog.title": "Catalogue des plats",
    "activity.cuisine.catalog.intro": "Sélectionnez un plat pour en découvrir la présentation.",
    "activity.cuisine.dish.discover": "Découvrir ce plat",
    "activity.cuisine.sushi.title": "Sushis",
    "activity.cuisine.sushi.description": "Apprenez à préparer des sushis avec du riz vinaigré, des légumes et des garnitures variées.",
    "activity.cuisine.ramen.title": "Ramen",
    "activity.cuisine.ramen.description": "Découvrez les nouilles ramen, leur bouillon savoureux et les garnitures qui composent ce plat populaire.",
    "activity.cuisine.takoyaki.title": "Takoyaki",
    "activity.cuisine.takoyaki.description": "Préparez ces boulettes japonaises dorées, traditionnellement garnies de poulpe et servies avec une sauce savoureuse.",
    "activity.cuisine.okonomiyaki.title": "Okonomiyaki",
    "activity.cuisine.okonomiyaki.description": "Réalisez cette galette japonaise garnie selon vos envies, à base de chou et d’une pâte légère.",
    "activity.cuisine.tempura.title": "Tempura",
    "activity.cuisine.tempura.description": "Apprenez à enrober et frire légumes ou fruits de mer dans une pâte légère et croustillante.",
    "activity.cuisine-japonaise.schedule": "Dates à confirmer auprès du centre",
    "activity.cuisine-japonaise.price": "À confirmer",
    "activity.anglais.description": "Des séances pratiques pour améliorer la compréhension orale, l’expression écrite et la communication quotidienne en anglais.",
    "activity.informatique.description": "Initiation et perfectionnement sur les outils bureautiques, la navigation web, les présentations et les usages numériques de base.",
    "activity.judo.description": "Des cours encadrés avec un travail sur la discipline, le respect, la technique et la confiance en soi.",
    "activity.sports.description": "Le centre propose des cours de judo, de karaté, de jiu-jitsu et d’aïkido, encadrés autour de la discipline, du respect et de la maîtrise technique.",
    "activity.culture.description": "Des ateliers culturels autour de la calligraphie, du cinéma, des échanges artistiques et des rencontres de culture japonaise.",
    "activity.japonais.schedule": "Lundi, mercredi et vendredi – 17h30 à 19h00",
    "activity.anglais.schedule": "Mardi et jeudi – 17h30 à 19h00",
    "activity.informatique.schedule": "Mercredi et samedi – 09h00 à 12h00",
    "activity.judo.schedule": "Lundi, mercredi et samedi – 15h00 à 18h00",
    "activity.sports.program.judo-karate": "Judo et Karaté",
    "activity.sports.schedule.judo-karate": "Lundi, mercredi et vendredi – 17h00 à 19h00",
    "activity.sports.program.jiu-jitsu-aikido": "Jiu-jitsu et Aïkido",
    "activity.sports.schedule.jiu-jitsu-aikido": "Mardi et jeudi – 17h00 à 19h00 ; samedi – 8h00 à 10h00",
    "activity.event.upcoming": "À venir",
    "activity.registration_fee": "Frais d’inscription",
    "activity.monthly_fee": "Abonnement mensuel",
    "activity.culture.schedule": "Tous les samedis – 10h00 à 13h00",
    "activity.japonais.price": "40 $ / mois",
    "activity.anglais.price": "35 $ / mois",
    "activity.informatique.price": "45 $ / mois",
    "activity.judo.price": "30 $ / mois",
    "activity.sports.registration_fee": "20 $",
    "activity.sports.monthly_fee": "30 $ / mois",
    "activity.culture.price": "20 $ / séance",
    "activity.samedi-nippon.description": "Le Samedi Nippon invite la communauté à découvrir la culture japonaise, à participer à des activités culturelles et à échanger.",
    "activity.samedi-nippon.schedule": "Chaque samedi – 14h00 à 16h00",
    "activity.samedi-nippon.price": "Gratuit",
    "activity.rh-atelier.title": "Atelier de ressources humaines",
    "activity.rh-atelier.summary": "Des échanges autour du recrutement, des talents et des compétences professionnelles.",
    "activity.rh-atelier.description": "Les ateliers de ressources humaines aident à développer les compétences en gestion des talents, recrutement et collaboration.",
    "activity.rh-atelier.schedule": "Dates à confirmer auprès du centre",
    "activity.rh-atelier.price": "Modalités à confirmer auprès du centre",
    "activity.samedi-nippon-echange-de-voeux.title": "Samedi Nippon : Échange de vœux",
    "activity.samedi-nippon-echange-de-voeux.summary": "Une rencontre chaleureuse pour accueillir la nouvelle année et partager des vœux entre la communauté.",
    "activity.samedi-nippon-echange-de-voeux.description": "Cette édition spéciale met l’accent sur les échanges de vœux, le partage de bonnes intentions et la convivialité qui caractérise la culture japonaise et les valeurs de proximité du centre.",
    "activity.samedi-nippon-echange-de-voeux.schedule": "Date : 25 décembre 2026",
    "activity.samedi-nippon-echange-de-voeux.price": "Gratuit",
    "activity.samedi-nippon-saint-valentin.title": "Samedi Nippon : Saint-Valentin",
    "activity.samedi-nippon-saint-valentin.summary": "Une célébration douce et créative autour de l’amour, du partage et de la culture.",
    "activity.samedi-nippon-saint-valentin.description": "À l’occasion de la Saint-Valentin, le centre organise une édition spéciale pensée pour célébrer les liens humains, la gentillesse et les échanges artistiques.",
    "activity.samedi-nippon-saint-valentin.schedule": "Date : 14 février 2027",
    "activity.samedi-nippon-saint-valentin.price": "Gratuit",
    "activity.samedi-nippon-white-days.title": "Samedi Nippon : White Days",
    "activity.samedi-nippon-white-days.summary": "Un moment festif inspiré du retour des cadeaux et des gestes attentionnés.",
    "activity.samedi-nippon-white-days.description": "Les White Days sont l’occasion de prolonger la magie des échanges, dans une ambiance conviviale et créative qui valorise le partage et la gratitude.",
    "activity.samedi-nippon-white-days.schedule": "Date : 14 mars 2027",
    "activity.samedi-nippon-white-days.price": "Gratuit",
    "activity.samedi-nippon-halloween.title": "Samedi Nippon : Halloween",
    "activity.samedi-nippon-halloween.summary": "Une édition festive, colorée et pleine d’énergie pour découvrir des codes culturels inspirants.",
    "activity.samedi-nippon-halloween.description": "L’Halloween au centre propose un cadre joyeux et dynamique autour des costumes, de la créativité et du partage entre participants.",
    "activity.samedi-nippon-halloween.schedule": "Date : 31 octobre 2027",
    "activity.samedi-nippon-halloween.price": "Gratuit",
    "activity.samedi-nippon-shooting-photo.title": "Samedi Nippon : Shooting photo",
    "activity.samedi-nippon-shooting-photo.summary": "Une séance conviviale de portraits et de prises de vue inspirées par la culture japonaise.",
    "activity.samedi-nippon-shooting-photo.description": "Cette édition met à l’honneur la créativité visuelle avec un shooting photo dans une ambiance lumineuse et artistique, ouvert à tous.",
    "activity.samedi-nippon-shooting-photo.schedule": "Date à confirmer",
    "activity.samedi-nippon-shooting-photo.price": "Gratuit",
    "activity.kizuna.title": "Kizuna",
    "activity.kizuna.summary": "Une rencontre culturelle autour des liens et du partage.",
    "activity.kizuna.description": "Kizuna est une occasion de découvrir la culture japonaise, de tisser des liens et de partager un moment avec la communauté.",
    "activity.kizuna.price": "À confirmer",
    "activity.tanabata.title": "Tanabata",
    "activity.tanabata.summary": "Découvrez la fête japonaise des étoiles et des souhaits.",
    "activity.tanabata.description": "Tanabata célèbre les étoiles et les souhaits dans une fête japonaise traditionnelle, avec des activités culturelles et créatives.",
    "activity.tanabata.price": "À confirmer",
    "activity.kodomo-no-hi.title": "Kodomo no Hi",
    "activity.kodomo-no-hi.summary": "Une célébration japonaise dédiée aux enfants.",
    "activity.kodomo-no-hi.description": "Kodomo no Hi est une fête japonaise consacrée aux enfants, à leur bonheur et à leur épanouissement.",
    "activity.kodomo-no-hi.price": "À confirmer"
  },
  en: {
    "activity.japonais.description": "Learn the basics of Japanese, conversation, reading and writing with gradual support adapted to each level.",
    "activity.cuisine-japonaise.description": "A hands-on workshop to discover Japanese ingredients, techniques and flavours through several recipes.",
    "activity.cuisine.catalog.title": "Dish catalogue",
    "activity.cuisine.catalog.intro": "Select a dish to discover more about it.",
    "activity.cuisine.dish.discover": "Discover this dish",
    "activity.cuisine.sushi.title": "Sushi",
    "activity.cuisine.sushi.description": "Learn to make sushi with seasoned rice, vegetables and a variety of toppings.",
    "activity.cuisine.ramen.title": "Ramen",
    "activity.cuisine.ramen.description": "Discover ramen noodles, their flavourful broth and the toppings that make this popular dish.",
    "activity.cuisine.takoyaki.title": "Takoyaki",
    "activity.cuisine.takoyaki.description": "Prepare these golden Japanese bites, traditionally filled with octopus and served with a savoury sauce.",
    "activity.cuisine.okonomiyaki.title": "Okonomiyaki",
    "activity.cuisine.okonomiyaki.description": "Make this Japanese savoury pancake with cabbage and a light batter, with toppings to suit your taste.",
    "activity.cuisine.tempura.title": "Tempura",
    "activity.cuisine.tempura.description": "Learn to coat and fry vegetables or seafood in a light, crisp batter.",
    "activity.cuisine-japonaise.schedule": "Dates to be confirmed with the centre",
    "activity.cuisine-japonaise.price": "To be confirmed",
    "activity.anglais.description": "Practical sessions to improve oral comprehension, written expression and everyday communication in English.",
    "activity.informatique.description": "Introduction and improvement in office tools, web browsing, presentations and basic digital skills.",
    "activity.judo.description": "Structured classes focused on discipline, respect, technique and self-confidence.",
    "activity.sports.description": "The centre offers judo, karate, jiu-jitsu and aikido classes focused on discipline, respect and technical skill.",
    "activity.culture.description": "Cultural workshops around calligraphy, cinema, artistic exchanges and meetings on Japanese culture.",
    "activity.japonais.schedule": "Monday, Wednesday and Friday – 5:30 PM to 7:00 PM",
    "activity.anglais.schedule": "Tuesday and Thursday – 5:30 PM to 7:00 PM",
    "activity.informatique.schedule": "Wednesday and Saturday – 9:00 AM to 12:00 PM",
    "activity.judo.schedule": "Monday, Wednesday and Saturday – 3:00 PM to 6:00 PM",
    "activity.sports.program.judo-karate": "Judo and Karate",
    "activity.sports.schedule.judo-karate": "Monday, Wednesday and Friday – 5:00 PM to 7:00 PM",
    "activity.sports.program.jiu-jitsu-aikido": "Jiu-jitsu and Aikido",
    "activity.sports.schedule.jiu-jitsu-aikido": "Tuesday and Thursday – 5:00 PM to 7:00 PM; Saturday – 8:00 AM to 10:00 AM",
    "activity.event.upcoming": "Coming soon",
    "activity.registration_fee": "Registration fee",
    "activity.monthly_fee": "Monthly subscription",
    "activity.culture.schedule": "Every Saturday – 10:00 AM to 1:00 PM",
    "activity.japonais.price": "$40 / month",
    "activity.anglais.price": "$35 / month",
    "activity.informatique.price": "$45 / month",
    "activity.judo.price": "$30 / month",
    "activity.sports.registration_fee": "$20",
    "activity.sports.monthly_fee": "$30 / month",
    "activity.culture.price": "$20 / session",
    "activity.samedi-nippon.description": "Saturday Nippon invites the community to discover Japanese culture, take part in cultural activities, and connect.",
    "activity.samedi-nippon.schedule": "Every Saturday – 2:00 PM to 4:00 PM",
    "activity.samedi-nippon.price": "Free",
    "activity.kizuna.title": "Kizuna",
    "activity.kizuna.summary": "A cultural gathering about connection and sharing.",
    "activity.kizuna.description": "Kizuna is an opportunity to discover Japanese culture, build connections and share a moment with the community.",
    "activity.kizuna.price": "To be confirmed",
    "activity.tanabata.title": "Tanabata",
    "activity.tanabata.summary": "Discover the Japanese festival of stars and wishes.",
    "activity.tanabata.description": "Tanabata celebrates the stars and wishes through a traditional Japanese festival with cultural and creative activities.",
    "activity.tanabata.price": "To be confirmed",
    "activity.kodomo-no-hi.title": "Kodomo no Hi",
    "activity.kodomo-no-hi.summary": "A Japanese celebration dedicated to children.",
    "activity.kodomo-no-hi.description": "Kodomo no Hi is a Japanese holiday dedicated to children's happiness and well-being.",
    "activity.kodomo-no-hi.price": "To be confirmed"
  },
  ja: {
    "activity.japonais.description": "各レベルに合わせた段階的な指導で、日本語の基礎、会話、読解、書き取りを学びます。",
    "activity.anglais.description": "英語の聞き取り、書き言葉、日常会話を向上させるための実践的な授業です。",
    "activity.informatique.description": "オフィスツール、ウェブ閲覧、プレゼンテーション、基本的なデジタル活用を学びます。",
    "activity.judo.description": "規律、礼儀、技術、自信を育む指導付きの授業です。",
    "activity.sports.description": "規律、礼儀、技術を重視した柔道、空手、柔術、合気道のクラスを提供しています。",
    "activity.culture.description": "書道、映画、芸術交流、日本文化の交流会を中心とした文化ワークショップです。",
    "activity.japonais.schedule": "月・水・金 – 17:30 ～ 19:00",
    "activity.anglais.schedule": "火・木 – 17:30 ～ 19:00",
    "activity.informatique.schedule": "水曜・土曜 – 09:00 ～ 12:00",
    "activity.judo.schedule": "月・水・土 – 15:00 ～ 18:00",
    "activity.sports.schedule": "金曜・土曜 – 15:00 ～ 18:00",
    "activity.culture.schedule": "毎土曜 – 10:00 ～ 13:00",
    "activity.japonais.price": "40 $ / 月",
    "activity.anglais.price": "35 $ / 月",
    "activity.informatique.price": "45 $ / 月",
    "activity.judo.price": "30 $ / 月",
    "activity.sports.price": "25 $ / 月",
    "activity.culture.price": "20 $ / 回",
    "activity.samedi-nippon.description": "サマディ・ニッポンでは、日本文化に触れ、文化活動に参加し、交流することができます。",
    "activity.samedi-nippon.schedule": "毎週土曜日 – 14:00～16:00",
    "activity.samedi-nippon.price": "無料"
  },
  es: {
    "activity.japonais.description": "Aprende lo básico del japonés, conversación, lectura y escritura con apoyo gradual adaptado a cada nivel.",
    "activity.anglais.description": "Sesiones prácticas para mejorar la comprensión oral, la expresión escrita y la comunicación diaria en inglés.",
    "activity.informatique.description": "Introducción y perfeccionamiento en herramientas ofimáticas, navegación web, presentaciones y usos digitales básicos.",
    "activity.judo.description": "Clases guiadas con trabajo de disciplina, respeto, técnica y confianza personal.",
    "activity.sports.description": "El centro ofrece clases de judo, karate, jiu-jitsu y aikido centradas en la disciplina, el respeto y la técnica.",
    "activity.culture.description": "Talleres culturales sobre caligrafía, cine, intercambios artísticos y encuentros de cultura japonesa.",
    "activity.japonais.schedule": "Lunes, miércoles y viernes – 17:30 a 19:00",
    "activity.anglais.schedule": "Martes y jueves – 17:30 a 19:00",
    "activity.informatique.schedule": "Miércoles y sábado – 09:00 a 12:00",
    "activity.judo.schedule": "Lunes, miércoles y sábado – 15:00 a 18:00",
    "activity.sports.schedule": "Viernes y sábado – 15:00 a 18:00",
    "activity.culture.schedule": "Todos los sábados – 10:00 a 13:00",
    "activity.japonais.price": "40 $ / mes",
    "activity.anglais.price": "35 $ / mes",
    "activity.informatique.price": "45 $ / mes",
    "activity.judo.price": "30 $ / mes",
    "activity.sports.price": "25 $ / mes",
    "activity.culture.price": "20 $ / sesión",
    "activity.samedi-nippon.description": "El Sábado Nippon invita a la comunidad a descubrir la cultura japonesa, participar en actividades culturales e intercambiar experiencias.",
    "activity.samedi-nippon.schedule": "Cada sábado – 14:00 a 16:00",
    "activity.samedi-nippon.price": "Gratis"
  },
  de: {
    "activity.japonais.description": "Lerne die Grundlagen des Japanischen, Konversation, Lesen und Schreiben mit einer schrittweisen Begleitung für jedes Niveau.",
    "activity.anglais.description": "Praktische Einheiten zur Verbesserung des mündlichen Verständnisses, der schriftlichen Ausdrucksfähigkeit und der alltäglichen Kommunikation auf Englisch.",
    "activity.informatique.description": "Einführung und Vertiefung in Bürotools, Webnavigation, Präsentationen und grundlegende digitale Fähigkeiten.",
    "activity.judo.description": "Strukturierte Kurse mit Fokus auf Disziplin, Respekt, Technik und Selbstvertrauen.",
    "activity.sports.description": "Das Zentrum bietet Judo-, Karate-, Jiu-Jitsu- und Aikido-Kurse mit Schwerpunkt auf Disziplin, Respekt und Technik.",
    "activity.culture.description": "Kulturelle Workshops rund um Kalligraphie, Film, künstlerische Austauschprogramme und Treffen zur japanischen Kultur.",
    "activity.japonais.schedule": "Montag, Mittwoch und Freitag – 17:30 bis 19:00",
    "activity.anglais.schedule": "Dienstag und Donnerstag – 17:30 bis 19:00",
    "activity.informatique.schedule": "Mittwoch und Samstag – 09:00 bis 12:00",
    "activity.judo.schedule": "Montag, Mittwoch und Samstag – 15:00 bis 18:00",
    "activity.sports.schedule": "Freitag und Samstag – 15:00 bis 18:00",
    "activity.culture.schedule": "Jeden Samstag – 10:00 bis 13:00",
    "activity.japonais.price": "40 $ / Monat",
    "activity.anglais.price": "35 $ / Monat",
    "activity.informatique.price": "45 $ / Monat",
    "activity.judo.price": "30 $ / Monat",
    "activity.sports.price": "25 $ / Monat",
    "activity.culture.price": "20 $ / Sitzung",
    "activity.samedi-nippon.description": "Samstag Nippon lädt die Gemeinschaft ein, die japanische Kultur kennenzulernen, an kulturellen Aktivitäten teilzunehmen und sich auszutauschen.",
    "activity.samedi-nippon.schedule": "Jeden Samstag – 14:00 bis 16:00 Uhr",
    "activity.samedi-nippon.price": "Kostenlos"
  },
  pt: {
    "activity.japonais.description": "Aprenda o básico do japonês, conversação, leitura e escrita com apoio gradual adaptado a cada nível.",
    "activity.anglais.description": "Sessões práticas para melhorar a compreensão oral, a expressão escrita e a comunicação diária em inglês.",
    "activity.informatique.description": "Introdução e aperfeiçoamento em ferramentas de escritório, navegação web, apresentações e usos digitais básicos.",
    "activity.judo.description": "Aulas estruturadas com foco em disciplina, respeito, técnica e autoconfiança.",
    "activity.sports.description": "O centro oferece aulas de judô, karatê, jiu-jitsu e aikido com foco na disciplina, no respeito e na técnica.",
    "activity.culture.description": "Oficinas culturais sobre caligrafia, cinema, intercâmbios artísticos e encontros de cultura japonesa.",
    "activity.japonais.schedule": "Segunda, quarta e sexta – 17h30 às 19h00",
    "activity.anglais.schedule": "Terça e quinta – 17h30 às 19h00",
    "activity.informatique.schedule": "Quarta e sábado – 09h00 às 12h00",
    "activity.judo.schedule": "Segunda, quarta e sábado – 15h00 às 18h00",
    "activity.sports.schedule": "Sexta e sábado – 15h00 às 18h00",
    "activity.culture.schedule": "Todos os sábados – 10h00 às 13h00",
    "activity.japonais.price": "40 $ / mês",
    "activity.anglais.price": "35 $ / mês",
    "activity.informatique.price": "45 $ / mês",
    "activity.judo.price": "30 $ / mês",
    "activity.sports.price": "25 $ / mês",
    "activity.culture.price": "20 $ / sessão",
    "activity.samedi-nippon.description": "O Sábado Nippon convida a comunidade a descobrir a cultura japonesa, participar de atividades culturais e trocar experiências.",
    "activity.samedi-nippon.schedule": "Todos os sábados – 14h00 às 16h00",
    "activity.samedi-nippon.price": "Gratuito"
  },
  ar: {
    "activity.japonais.description": "تعلم أساسيات اليابانية والمحادثة والقراءة والكتابة مع دعم تدريجي يناسب كل مستوى.",
    "activity.anglais.description": "جلسات عملية لتحسين الفهم الشفهي والتعبير الكتابي والتواصل اليومي باللغة الإنجليزية.",
    "activity.informatique.description": "مقدمة وتحسين في أدوات المكتب والتصفح الإلكتروني والعروض التقديمية والمهارات الرقمية الأساسية.",
    "activity.judo.description": "دروس منظمة تركز على الانضباط والاحترام والتقنية والثقة بالنفس.",
    "activity.sports.description": "يقدم المركز دروسًا في الجودو والكاراتيه والجيوجيتسو والأيكيدو تركّز على الانضباط والاحترام والتقنية.",
    "activity.culture.description": "ورش ثقافية حول الخط، السينما، التبادلات الفنية واللقاءات المتعلقة بالثقافة اليابانية.",
    "activity.japonais.schedule": "الإثنين والأربعاء والجمعة – 17:30 إلى 19:00",
    "activity.anglais.schedule": "الثلاثاء والخميس – 17:30 إلى 19:00",
    "activity.informatique.schedule": "الأربعاء والسبت – 09:00 إلى 12:00",
    "activity.judo.schedule": "الإثنين والأربعاء والسبت – 15:00 إلى 18:00",
    "activity.sports.schedule": "الجمعة والسبت – 15:00 إلى 18:00",
    "activity.culture.schedule": "كل يوم سبت – 10:00 إلى 13:00",
    "activity.japonais.price": "40 دولار / شهر",
    "activity.anglais.price": "35 دولار / شهر",
    "activity.informatique.price": "45 دولار / شهر",
    "activity.judo.price": "30 دولار / شهر",
    "activity.sports.price": "25 دولار / شهر",
    "activity.culture.price": "20 دولار / جلسة",
    "activity.samedi-nippon.description": "يدعو السبت الياباني المجتمع إلى اكتشاف الثقافة اليابانية والمشاركة في أنشطة ثقافية وتبادل الخبرات.",
    "activity.samedi-nippon.schedule": "كل يوم سبت – 14:00 إلى 16:00",
    "activity.samedi-nippon.price": "مجانًا"
  },
  zh: {
    "activity.japonais.description": "学习日语基础、会话、阅读和写作，并根据每个水平提供逐步支持。",
    "activity.anglais.description": "通过实践课程提高英语口语理解、写作表达和日常沟通能力。",
    "activity.informatique.description": "介绍和提升办公软件、网页浏览、演示文稿和基础数字技能。",
    "activity.judo.description": "结构化课程，注重纪律、尊重、技术和自信。",
    "activity.sports.description": "中心开设柔道、空手道、柔术和合气道课程，注重纪律、尊重和技术。",
    "activity.culture.description": "围绕书法、电影、艺术交流和日本文化交流的文化工作坊。",
    "activity.japonais.schedule": "周一、周三、周五 – 17:30 至 19:00",
    "activity.anglais.schedule": "周二、周四 – 17:30 至 19:00",
    "activity.informatique.schedule": "周三、周六 – 09:00 至 12:00",
    "activity.judo.schedule": "周一、周三、周六 – 15:00 至 18:00",
    "activity.sports.schedule": "周五、周六 – 15:00 至 18:00",
    "activity.culture.schedule": "每周六 – 10:00 至 13:00",
    "activity.japonais.price": "40 美元 / 月",
    "activity.anglais.price": "35 美元 / 月",
    "activity.informatique.price": "45 美元 / 月",
    "activity.judo.price": "30 美元 / 月",
    "activity.sports.price": "25 美元 / 月",
    "activity.culture.price": "20 美元 / 次",
    "activity.samedi-nippon.description": "日本星期六邀请社区了解日本文化、参加文化活动并交流分享。",
    "activity.samedi-nippon.schedule": "每周六 – 14:00 至 16:00",
    "activity.samedi-nippon.price": "免费"
  },
  ko: {
    "activity.japonais.description": "각 수준에 맞춘 단계별 지도를 통해 일본어 기초, 회화, 읽기, 쓰기를 배웁니다.",
    "activity.anglais.description": "영어 청해, 쓰기, 일상 회화를 향상시키는 실습 수업입니다.",
    "activity.informatique.description": "사무 도구, 웹 탐색, 발표, 기본 디지털 사용법을 배우고 향상시킵니다.",
    "activity.judo.description": "규율, 존중, 기술, 자신감을 중심으로 하는 체계적인 수업입니다.",
    "activity.sports.description": "센터는 규율, 존중, 기술에 중점을 둔 유도, 가라테, 주짓수, 합기도 수업을 제공합니다.",
    "activity.culture.description": "서예, 영화, 예술적 교류, 일본 문화 만남을 중심으로 한 문화 워크숍입니다.",
    "activity.japonais.schedule": "월·수·금 – 17:30 ~ 19:00",
    "activity.anglais.schedule": "화·목 – 17:30 ~ 19:00",
    "activity.informatique.schedule": "수·토 – 09:00 ~ 12:00",
    "activity.judo.schedule": "월·수·토 – 15:00 ~ 18:00",
    "activity.sports.schedule": "금·토 – 15:00 ~ 18:00",
    "activity.culture.schedule": "매주 토요일 – 10:00 ~ 13:00",
    "activity.japonais.price": "40 $ / 월",
    "activity.anglais.price": "35 $ / 월",
    "activity.informatique.price": "45 $ / 월",
    "activity.judo.price": "30 $ / 월",
    "activity.sports.price": "25 $ / 월",
    "activity.culture.price": "20 $ / 회",
    "activity.samedi-nippon.description": "사마디 닛폰은 일본 문화를 알아보고 문화 활동에 참여하며 교류할 수 있는 모임입니다.",
    "activity.samedi-nippon.schedule": "매주 토요일 – 14:00~16:00",
    "activity.samedi-nippon.price": "무료"
  },
  ru: {
    "activity.japonais.description": "Изучайте основы японского языка, разговорную речь, чтение и письмо с постепенной поддержкой для каждого уровня.",
    "activity.anglais.description": "Практические занятия для улучшения устного понимания, письменной речи и повседневного общения на английском языке.",
    "activity.informatique.description": "Введение и совершенствование в офисных инструментах, веб-серфинге, презентациях и базовых цифровых навыках.",
    "activity.judo.description": "Структурированные занятия, посвященные дисциплине, уважению, технике и уверенности в себе.",
    "activity.sports.description": "В центре проходят занятия дзюдо, каратэ, джиу-джитсу и айкидо с упором на дисциплину, уважение и технику.",
    "activity.culture.description": "Культурные мастерские по каллиграфии, кино, художественным обменам и встречам по японской культуре.",
    "activity.japonais.schedule": "Понедельник, среда и пятница – 17:30 до 19:00",
    "activity.anglais.schedule": "Вторник и четверг – 17:30 до 19:00",
    "activity.informatique.schedule": "Среда и суббота – 09:00 до 12:00",
    "activity.judo.schedule": "Понедельник, среда и суббота – 15:00 до 18:00",
    "activity.sports.schedule": "Пятница и суббота – 15:00 до 18:00",
    "activity.culture.schedule": "Каждую субботу – 10:00 до 13:00",
    "activity.japonais.price": "40 $ / месяц",
    "activity.anglais.price": "35 $ / месяц",
    "activity.informatique.price": "45 $ / месяц",
    "activity.judo.price": "30 $ / месяц",
    "activity.sports.price": "25 $ / месяц",
    "activity.culture.price": "20 $ / занятие",
    "activity.samedi-nippon.description": "Самади Ниппон приглашает всех познакомиться с японской культурой, принять участие в культурных мероприятиях и обменяться опытом.",
    "activity.samedi-nippon.schedule": "Каждую субботу – с 14:00 до 16:00",
    "activity.samedi-nippon.price": "Бесплатно"
  }
};

function esc(value) {
  const div = document.createElement("div");
  div.textContent = value;
  return div.innerHTML;
}

function whatsappLink(message) {
  const base = contactInfo.whatsapp || WHATSAPP_DIRECT_LINK || `https://wa.me/${WHATSAPP_NUMBER}`;
  return `${base}${base.includes("?") ? "&" : "?"}text=${encodeURIComponent(message)}`;
}

function getCurrentLanguage() {
  const saved = localStorage.getItem("cjk-language");
  if (saved && TRANSLATIONS[saved]) return saved;
  return document.body.dataset.lang || "fr";
}

function translateText(key, lang = getCurrentLanguage()) {
  const dictionary = TRANSLATIONS[lang] || TRANSLATIONS.fr;
  const fallback = TRANSLATIONS.en || TRANSLATIONS.fr;
  const activityDictionary = ACTIVITY_TRANSLATIONS[lang] || ACTIVITY_TRANSLATIONS.fr || {};
  return dictionary[key] || activityDictionary[key] || fallback[key] || ACTIVITY_TRANSLATIONS.en?.[key] || TRANSLATIONS.fr[key] || key;
}

function updateLanguageTrigger(lang) {
  const selected = LANGUAGES.find((item) => item.code === lang) || LANGUAGES[0];
  const triggerCode = document.getElementById("langTriggerCode");
  const triggerCodeInline = document.querySelector(".lang-switcher__trigger .lang-switcher__code");
  if (triggerCode) triggerCode.textContent = selected.code.toUpperCase();
  if (triggerCodeInline) triggerCodeInline.textContent = selected.code.toUpperCase();
  const triggerButton = document.querySelector(".lang-switcher__trigger");
  if (triggerButton) triggerButton.setAttribute("aria-label", `${selected.native} (${selected.code.toUpperCase()})`);
}

function applyTranslations() {
  const currentLang = getCurrentLanguage();
  const dictionary = TRANSLATIONS[currentLang] || TRANSLATIONS.fr;
  document.body.dataset.lang = currentLang;
  document.documentElement.lang = currentLang;
  document.documentElement.dir = currentLang === "ar" ? "rtl" : "ltr";

  document.querySelectorAll("[data-i18n], [data-translate]").forEach((el) => {
    const key = el.dataset.i18n || el.dataset.translate;
    const text = translateText(key, currentLang);
    if (text) el.textContent = text;
    el.setAttribute("data-lang", currentLang);
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
    const key = el.dataset.i18nPlaceholder;
    const text = translateText(key, currentLang);
    if (text) el.setAttribute("placeholder", text);
  });

  document.querySelectorAll("[data-translate-value]").forEach((el) => {
    const key = el.dataset.translateValue;
    const text = translateText(key, currentLang);
    if (text) el.textContent = text;
  });

  const searchInput = document.getElementById("langSearch");
  if (searchInput) {
    searchInput.placeholder = translateText("lang.search.placeholder", currentLang);
  }

  updateLanguageTrigger(currentLang);

  const buttons = document.querySelectorAll(".lang-option");
  buttons.forEach((btn) => {
    const isSelected = btn.dataset.langCode === currentLang;
    btn.classList.toggle("is-selected", isSelected);
    btn.setAttribute("aria-pressed", String(isSelected));
  });
}

function renderLanguageOptions(search = "") {
  const list = document.getElementById("langSwitchList");
  if (!list) return;

  const query = search.trim().toLowerCase();
  const languages = LANGUAGES.filter((language) => {
    if (!query) return true;
    return [language.name, language.native, language.code].some((value) => value.toLowerCase().includes(query));
  });

  list.innerHTML = languages.map((language) => {
    const current = getCurrentLanguage();
    const isSelected = language.code === current;
    return `
      <button type="button" class="lang-option${isSelected ? " is-selected" : ""}" data-lang-code="${language.code}" aria-pressed="${String(isSelected)}">
        <span class="lang-option__left">
          <span class="lang-option__flag" aria-hidden="true">${language.flag}</span>
          <span class="lang-option__meta">${language.code.toUpperCase()}</span>
        </span>
        <span class="lang-option__label">${language.name}</span>
        <span class="lang-option__check">${isSelected ? "✓" : ""}</span>
      </button>
    `;
  }).join("");
}

function setupLanguageSwitcher() {
  const trigger = document.querySelector(".lang-switcher__trigger");
  const switcher = document.querySelector(".lang-switcher");
  const panel = document.getElementById("langSwitchPanel");
  const searchInput = document.getElementById("langSearch");
  if (!trigger || !switcher || !panel || !searchInput) return;

  renderLanguageOptions();
  applyTranslations();

  trigger.addEventListener("click", () => {
    const isOpen = switcher.classList.toggle("is-open");
    trigger.setAttribute("aria-expanded", String(isOpen));
    if (isOpen) searchInput.focus();
  });

  searchInput.addEventListener("input", (event) => {
    renderLanguageOptions(event.target.value);
  });

  panel.addEventListener("click", (event) => {
    const option = event.target.closest(".lang-option");
    if (!option) return;
    const nextLang = option.dataset.langCode;
    localStorage.setItem("cjk-language", nextLang);
    switcher.classList.remove("is-open");
    trigger.setAttribute("aria-expanded", "false");
    applyTranslations();
    renderLanguageOptions();
    document.dispatchEvent(new CustomEvent("languagechange", { detail: { language: nextLang } }));
  });

  document.addEventListener("click", (event) => {
    if (!switcher.contains(event.target)) {
      switcher.classList.remove("is-open");
      trigger.setAttribute("aria-expanded", "false");
    }
  });
}

function updateActiveNav() {
  const links = document.querySelectorAll(".topbar__nav a");
  if (!links.length) return;

  const currentPath = window.location.pathname.split("/").pop() || "index.html";

  links.forEach((link) => {
    const href = link.getAttribute("href") || "";
    const destination = new URL(href, window.location.href);
    const destinationPath = destination.pathname.split("/").pop();
    const isActive = destinationPath === currentPath
      || currentPath === "activite.html" && destinationPath === "activites.html";

    link.classList.toggle("is-active", isActive);
  });
}

const page = document.body.dataset.page;

function renderActivityCards(items) {
  const t = (key) => translateText(key);
  return items.map((activity) => {
    const categoryKey = `activity.category.${activity.category.toLowerCase() === "formation" ? "formation" : activity.category.toLowerCase() === "culture" ? "culture" : "sport"}`;
    const titleKey = `activity.${activity.id}.title`;
    const summaryKey = `activity.${activity.id}.summary`;
    return `
      <a class="card" href="activite.html?id=${encodeURIComponent(activity.id)}">
        <!-- TODO: Remplacer ou insérer les photos des cartes dans la propriété image de data.js. -->
        ${activity.image ? `<img class="card__image" src="${esc(activity.image)}" alt="${esc(activity.title)}" loading="lazy">` : ""}
        <span class="tag" data-translate="${categoryKey}">${esc(t(categoryKey))}</span>
        <h2 data-translate="${titleKey}">${esc(t(titleKey))}</h2>
        <p data-translate="${summaryKey}">${esc(t(summaryKey))}</p>
        ${activity.dateKey ? `<span class="card__schedule" data-translate="${activity.dateKey}">${esc(t(activity.dateKey))}</span>` : ""}
        <span class="card__link" data-translate="activity.open">${esc(t("activity.open"))}</span>
      </a>`;
  }).join("");
}

function renderCuisineCatalog(dishes) {
  if (!dishes || !dishes.length) return "";
  const t = (key) => translateText(key);
  return `
    <section class="cuisine-catalog" aria-labelledby="cuisineCatalogTitle">
      <h2 id="cuisineCatalogTitle" data-translate="activity.cuisine.catalog.title">${esc(t("activity.cuisine.catalog.title"))}</h2>
      <p data-translate="activity.cuisine.catalog.intro">${esc(t("activity.cuisine.catalog.intro"))}</p>
      <div class="cuisine-catalog__grid">
        ${dishes.map((dish) => `
          <article class="cuisine-dish">
            <!-- TODO: Remplacer les URL de photos par nos propres images de plats dans data.js. -->
            <img class="cuisine-dish__image" src="${esc(dish.image)}" alt="${esc(t(dish.titleKey))}" loading="lazy">
            <div class="cuisine-dish__content">
              <h3 data-translate="${dish.titleKey}">${esc(t(dish.titleKey))}</h3>
              <button type="button" class="cuisine-dish__toggle" data-cuisine-toggle aria-expanded="false" aria-controls="cuisine-dish-${esc(dish.id)}" data-translate="activity.cuisine.dish.discover">${esc(t("activity.cuisine.dish.discover"))}</button>
              <p id="cuisine-dish-${esc(dish.id)}" data-translate="${dish.descriptionKey}" hidden>${esc(t(dish.descriptionKey))}</p>
            </div>
          </article>`).join("")}
      </div>
    </section>`;
}

/* ============ PAGE D'ACCUEIL ============ */
if (page === "home") {
  const discover = document.getElementById("discover");
  document.getElementById("trainingGrid").innerHTML = renderActivityCards(
    activities.filter((activity) => activity.category === "Formation")
  );
  document.getElementById("activityGrid").innerHTML = renderActivityCards(
    activities.filter((activity) => activity.category !== "Formation")
  );

  // Affiche la partie "Histoire + activités" puis descend jusqu'à elle
  function reveal(targetId) {
    discover.hidden = false;
    const target = document.getElementById(targetId || "histoire");
    // petit délai pour que le navigateur affiche la section avant de défiler
    requestAnimationFrame(() => target.scrollIntoView({ behavior: "smooth", block: "start" }));
  }

  document.getElementById("discoverBtn").addEventListener("click", () => reveal("histoire"));

  document.querySelectorAll("[data-reveal]").forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      reveal(link.dataset.reveal);
      updateActiveNav();
    });
  });

  // Si on arrive depuis une autre page avec #histoire ou #activites
  if (location.hash === "#histoire" || location.hash === "#activites") {
    reveal(location.hash.slice(1));
  }

  updateActiveNav();
}

if (page === "formations" || page === "activites") {
  const grid = document.getElementById("programGrid");
  const visibleActivities = page === "formations"
    ? activities.filter((activity) => activity.category === "Formation")
    : activities.filter((activity) => activity.category !== "Formation");
  grid.innerHTML = renderActivityCards(visibleActivities);
}

/* ============ PAGE D'UNE ACTIVITÉ ============ */
if (page === "activite") {
  const id = new URLSearchParams(location.search).get("id");
  const a = activities.find((item) => item.id === id);
  const root = document.getElementById("activityPage");
  const t = (key) => translateText(key);

  if (!a) {
    root.innerHTML = `
      <h1 data-translate="activity.not_found">${esc(t("activity.not_found"))}</h1>
      <p>${esc(t("activity.not_found_text"))} <a class="inline" href="activites.html" data-translate="activity.see_all">${esc(t("activity.see_all"))}</a></p>`;
  } else {
    const categoryKey = `activity.category.${a.category.toLowerCase() === "formation" ? "formation" : a.category.toLowerCase() === "culture" ? "culture" : "sport"}`;
    const titleKey = `activity.${a.id}.title`;
    const summaryKey = `activity.${a.id}.summary`;
    const descriptionKey = `activity.${a.id}.description`;
    const scheduleKey = a.scheduleKey || `activity.${a.id}.schedule`;
    const priceKey = `activity.${a.id}.price`;
    const title = t(titleKey) || a.title;
    const summary = t(summaryKey) || a.summary;
    const description = t(descriptionKey) || a.description || "";
    const schedule = t(scheduleKey) || a.schedule || "";
    const price = t(priceKey) || a.price || "";
    const programHtml = (a.programs || []).map((program) => `
      <div class="activity-program">
        <h3 data-translate="${program.titleKey}">${esc(t(program.titleKey))}</h3>
        <p data-translate="${program.scheduleKey}">${esc(t(program.scheduleKey))}</p>
      </div>`).join("");
    const feeHtml = a.registrationFee || a.monthlyFee
      ? `<p><strong data-translate="activity.registration_fee">${esc(t("activity.registration_fee"))}</strong> : ${esc(a.registrationFee || "")}</p>
         <p><strong data-translate="activity.monthly_fee">${esc(t("activity.monthly_fee"))}</strong> : ${esc(a.monthlyFee || "")}</p>`
      : `<p data-translate="${priceKey}">${esc(price)}</p>`;
    const message = `Bonjour, je souhaite m'inscrire à : ${title}.`;
    // TODO: Remplacer la photo de couverture de la formation cuisine dans data.js.
    const activityHero = a.image ? `<div class="activity-hero"><img src="${esc(a.image)}" alt="${esc(title)}" loading="eager"></div>` : "";
    const cuisineCatalog = renderCuisineCatalog(a.cuisineDishes);
    document.title = `${title} – Centre Japonais de Kinshasa`;
    root.innerHTML = `
      ${activityHero}
      <span class="tag" data-translate="${categoryKey}">${esc(t(categoryKey))}</span>
      <h1 data-translate="${titleKey}">${esc(title)}</h1>
      <p class="lead" data-translate="${summaryKey}">${esc(summary)}</p>
      ${cuisineCatalog}
      <div class="info-grid">
        <div class="panel"><h2 data-translate="activity.presentation">${esc(t("activity.presentation"))}</h2><p data-translate="${descriptionKey}">${esc(description)}</p></div>
        <div class="panel">
          <h2 data-translate="activity.schedule">${esc(t("activity.schedule"))}</h2>${programHtml || `<p data-translate="${scheduleKey}">${esc(schedule)}</p>`}
          <h2 data-translate="activity.price">${esc(t("activity.price"))}</h2>${feeHtml}
          <a class="btn btn--gold" href="${whatsappLink(message)}" target="_blank" rel="noopener" data-translate="activity.register">${esc(t("activity.register"))}</a>
        </div>
      </div>
      <p><a class="inline" href="${a.category === "Formation" ? "formations.html" : "activites.html"}" data-translate="${a.category === "Formation" ? "nav.formations" : "activity.see_others"}">${esc(t(a.category === "Formation" ? "nav.formations" : "activity.see_others"))}</a></p>`;

    root.addEventListener("click", (event) => {
      const toggle = event.target.closest("[data-cuisine-toggle]");
      if (!toggle || !root.contains(toggle)) return;
      const description = document.getElementById(toggle.getAttribute("aria-controls"));
      if (!description) return;
      const expanded = toggle.getAttribute("aria-expanded") !== "true";
      toggle.setAttribute("aria-expanded", String(expanded));
      description.hidden = !expanded;
    });
  }
}

/* ============ CONTACT (accueil + page contact) ============ */
function contactHtml() {
  const t = (key) => translateText(key);
  return `
    <h2 data-translate="contact.address">${esc(t("contact.address"))}</h2>
    <p data-translate-value="contact.address_value">${esc(t("contact.address_value"))}</p>
    <h2 data-translate="contact.phone">${esc(t("contact.phone"))}</h2>
    <p>
      <span data-translate-value="contact.phone_value">${esc(t("contact.phone_value"))}</span><br>
      <a href="${esc(contactInfo.emailLink || `mailto:${contactInfo.email}`)}">${esc(contactInfo.email)}</a>
    </p>
    <h2 data-translate="contact.hours">${esc(t("contact.hours"))}</h2>
    <p>
      <span data-translate-value="contact.hours_value1">${esc(t("contact.hours_value1"))}</span><br>
      <span data-translate-value="contact.hours_value2">${esc(t("contact.hours_value2"))}</span>
    </p>
    <div class="socials" aria-label="${esc(t("contact.socials"))}">
      <a class="socials__link socials__link--wa" href="${esc(contactInfo.whatsapp)}" target="_blank" rel="noopener" aria-label="WhatsApp"><img src="images/icon%20whatsapp%20G.jfif" alt="WhatsApp"></a>
      <a class="socials__link socials__link--img" href="${esc(contactInfo.facebook)}" target="_blank" rel="noopener" aria-label="Facebook"><img src="images/icon%20Facebook.jfif" alt="Facebook"></a>
      <a class="socials__link socials__link--img" href="${esc(contactInfo.emailLink || `mailto:${contactInfo.email}`)}" target="_blank" rel="noopener" aria-label="Gmail"><img src="images/icon%20gmail.jfif" alt="Gmail"></a>
      <a class="socials__link socials__link--img" href="${esc(contactInfo.instagram)}" target="_blank" rel="noopener" aria-label="Instagram"><img src="images/icon%20instragram.jfif" alt="Instagram"></a>
      <a class="socials__link socials__link--img" href="${esc(contactInfo.tiktok)}" target="_blank" rel="noopener" aria-label="TikTok"><img src="images/icon%20tiktok.jfif" alt="TikTok"></a>
    </div>
  `;
}

function mapHtml() {
  const t = (key) => translateText(key);
  return contactInfo.mapEmbed
    ? `<iframe src="${esc(contactInfo.mapEmbed)}" title="${esc(t("contact.map.title"))}" loading="lazy"></iframe>`
    : `[${esc(t("contact.map.title"))}]`;
}

if (page === "contact") {
  const wa = whatsappLink("Bonjour, j'aimerais avoir des informations sur le centre.");
  const t = (key) => translateText(key);
  document.getElementById("contactPanel").innerHTML =
    contactHtml() + `<a class="btn btn--gold" href="${wa}" target="_blank" rel="noopener">${esc(t("contact.write.whatsapp"))}</a>`;
  document.getElementById("contactMap").innerHTML = mapHtml();
}

if (page === "home") {
  document.getElementById("contactDetails").innerHTML = contactHtml();
  document.getElementById("contactMap").innerHTML = mapHtml();

  document.getElementById("contactForm").addEventListener("submit", (e) => {
    e.preventDefault();
    const nom = document.getElementById("cNom").value.trim();
    const msg = document.getElementById("cMsg").value.trim();
    const error = document.getElementById("contactError");
    const t = (key) => translateText(key);
    if (!nom || !msg) {
      error.textContent = t("contact.form.error");
      return;
    }
    error.textContent = "";
    window.open(whatsappLink(`Bonjour, je suis ${nom}.\n${msg}`), "_blank", "noopener");
  });

  /* ============ SLIDER AUTOMATIQUE ============ */
  const slider = document.getElementById("slider");
  const dots = document.getElementById("sliderDots");
  slider.innerHTML = slides.map((src, i) =>
    `<div class="slide${i === 0 ? " is-active" : ""}" style="background-image:url('${src}')"></div>`).join("");
  dots.innerHTML = slides.map((_, i) =>
    `<button type="button" aria-label="Photo ${i + 1}" data-i="${i}" class="${i === 0 ? "is-active" : ""}"></button>`).join("");

  const slideEls = slider.querySelectorAll(".slide");
  const dotEls = dots.querySelectorAll("button");
  let current = 0;
  let timer = null;

  function showSlide(index) {
    current = (index + slides.length) % slides.length;
    slideEls.forEach((el, i) => el.classList.toggle("is-active", i === current));
    dotEls.forEach((el, i) => el.classList.toggle("is-active", i === current));
  }

  function startSlider() {
    stopSlider();
    // pas de défilement automatique si la personne a demandé moins d'animations
    if (slides.length < 2 || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    timer = setInterval(() => showSlide(current + 1), SLIDE_DELAY);
  }
  function stopSlider() { clearInterval(timer); timer = null; }

  dots.addEventListener("click", (e) => {
    const btn = e.target.closest("button");
    if (!btn) return;
    showSlide(Number(btn.dataset.i));
    startSlider();
  });
  document.addEventListener("visibilitychange", () => (document.hidden ? stopSlider() : startSlider()));
  startSlider();
}

setupLanguageSwitcher();
updateActiveNav();
window.addEventListener("hashchange", updateActiveNav);
