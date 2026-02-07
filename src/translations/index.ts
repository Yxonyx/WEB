export type Language = 'hu' | 'en';

export const translations = {
    hu: {
        meta: {
            title: "Céges Weboldal Készítés Garanciával | CyberLabs Web",
            description: "Nem jön elég ajánlatkérés? Olyan weboldalt építünk, ami elad helyetted. Villámgyors, modern és AI-optimalizált weboldal készítés garanciával."
        },
        nav: {
            services: "szolgáltatások",
            pricing: "árazás",
            references: "referenciák",
            insights: "cikkek",
            contact: "kapcsolat",
            cta: "Beszéljünk",
            language: "Nyelv:",
            dropdown: {
                webdev: "Weboldal készítés",
                webshop: "Webshop készítés",
                seo: "SEO optimalizálás",
                geo: "AI-találhatóság (GEO)",
                maintenance: "Weboldal karbantartás",
                chatbot: "AI Chatbot"
            }
        },
        hero: {
            tag: "< Web + SEO + GEO >_",
            title_prefix: "Egyedi weboldal",
            title_gradient: "fejlesztés",
            title_suffix: "karbantartás",
            subtitle_1: "Modern, mesterséges intelligencia ",
            subtitle_highlight: "alapú megoldások.",
            subtitle_desc_1: "Weboldalad ott jelenik meg, ahol a döntések születnek: a ",
            subtitle_google: "Google keresésekben",
            subtitle_desc_2: " és az ",
            subtitle_ai: "AI-alapú találatokban",
            cta_primary: "Beszéljünk",
            cta_secondary: "Válaszd ki a csomagod"
        },
        stats: {
            years: { label: "Év tapasztalat", sub: "Full-stack fejlesztésben" },
            clients: { label: "Elégedett ügyfél", sub: "Magyarországon és külföldön" },
            guarantee: { label: "Garancia", sub: "Pénzvisszafizetési opcióval" }
        },
        trustbar: {
            text_prefix: "44+ elégedett ügyfél —",
            highlight: "Magyarországon",
            text_suffix: " és külföldön."
        },
        whyus: {
            title_prefix: "Miért",
            title_highlight: "minket",
            title_suffix: "válassz?",
            subtitle_1: "A weboldal nem dísz. A weboldal a",
            subtitle_highlight: "döntés helye",
            subtitle_2: ". Mi úgy építjük meg, hogy megtalálják, megértsék, és válasszanak.",
            features: [
                {
                    title: "Reszponzív webdizájn",
                    desc: "Mobilbarát és gyors megoldások – mert a lassú oldalról elmennek."
                },
                {
                    title: "Keresőbarát felépítés",
                    desc: "Mert hiába szép, ha nem találnak rá."
                },
                {
                    title: "AI-találhatóság",
                    desc: "Mert egyre többen nem csak keresnek, hanem kérdeznek."
                },
                {
                    title: "Admin felület",
                    desc: "Hogy később te is tudd frissíteni a tartalmat.",
                    sub: "(ha kéred)"
                },
                {
                    title: "Karbantartás és biztonság",
                    desc: "Hogy hosszú távon is stabil maradjon."
                }
            ]
        },
        guarantee: {
            title: "100% Minőségi Garancia",
            desc: "Addig finomítjuk a weboldaladat, amíg tökéletesen elégedett nem leszel vele. Csak akkor fizetsz, ha büszke vagy az eredményre.",
            cta: "Biztosra megyek"
        },
        quote: {
            badges: {
                trial: "1 héten belül próbaverzió",
                payment: "Csak akkor fizetsz, ha tetszik"
            },
            title: {
                prefix: "1 héten belül kapsz egy ",
                highlight: "működő próbaverziót",
                suffix: "."
            },
            subtitle: "Addig finomítjuk, amíg tényleg olyan nem lesz, amilyet szeretnél. És csak akkor fizetsz, ha tetszik az alapváz.",
            benefits_title: "Miért jó ez neked?",
            benefits: [
                "Nem ígéretek alapján döntesz, hanem kézzelfogható tesztoldal alapján.",
                "Kockázat nélkül vágsz bele: ha nem tetszik, nem fizetsz.",
                "A végeredmény nem „valahogy elkészül”, hanem addig csiszoljuk, amíg késznek nem érzed."
            ],
            cta: {
                trial: "Kérem a próbaverziót",
                pricing: "Árak & csomagok"
            },
            cards: {
                req: { title: "Igényfelmérés" },
                demo: { title: "tesztoldal.hu", status: "Állapot: Kész", match: "Egyezés" },
                feedback: { accepted: "Elfogadva", launch: "Indítás" }
            }
        },
        services: {
            tag: "Megoldások",
            title: "Szolgáltatások",
            subtitle: "Nem sablonokat gyártunk, hanem üzleti rendszereket építünk.",
            webdev: {
                title: "Reszponzív weboldalak és webáruházak",
                tagline: "Keresőoptimalizálva • Kulcsrakészen",
                desc: "Mobilbarát és gyors weboldalak, amik üzleti célt szolgálnak (érdeklődő, ajánlatkérés, vásárlás).",
                benefits_title: "Miért jó ez neked?",
                benefits: ["Profibb első benyomás", "Több megkeresés", "Kevesebb elvesztett látogató"]
            },
            seo: {
                title: "Keresőbarát beállítások",
                desc: "Úgy alakítjuk ki az oldalt, hogy a Google könnyen értse, miről szól, és esélye legyen jó helyen megjelenni.",
                benefits_title: "Miért kell ez neked?",
                why: "Mert a legtöbb ügyfél a Google-ben kezd, és általában az első találatokból választ.",
                flow: [
                    { id: "1", title: "Felépítés", sub: "technikai alap" },
                    { id: "2", title: "Tartalom", sub: "relevancia" },
                    { id: "3", title: "Mérhetőség", sub: "több látogató" }
                ]
            },
            mock: {
                nav: { name: "Dr. Kovács", about: "Rólam", services: "Szolgáltatások", book: "Időpontfoglalás" },
                hero: { title: "Magánorvosi rendelő", loc: "Budapesten", desc: "Személyre szabott ellátás, rövid várakozás", cta: "Időpontot kérek" },
                cards: { c1: "Belgyógyászat", c1s: "Teljes körű vizsgálat", c2: "Online foglalás", c2s: "24 órán belül" }
            }
        },
        geo: {
            header: {
                tag: "Új korszak",
                title: "AI-találhatóság, egyszerűen",
                desc: "Régen elég volt kulcsszavazni. Ma az számít, hogy a tartalom érthető, bizonyítható és jól felépített legyen."
            },
            shift: {
                title: "A Váltás",
                desc: "AI-vezérelt tartalom: a klasszikus SEO önmagában már nem elég. Az algoritmusok már nem kulcsszavakat keresnek, hanem összefüggéseket.",
                visual_search: "KERESÉS:",
                visual_query: "\"Hogyan működnek a modern keresők?\""
            },
            where: {
                title: "Hol kell megjelenned?",
                desc: "Nemcsak a Google listában, hanem az AI-válaszokban is, ahol az emberek konkrét kérdéseket tesznek fel.",
                list: ["Google keresési találatok", "ChatGPT / Gemini válaszok"],
                dialog: {
                    q1: { label: "Kérdés", text: "\"Melyik a legjobb kivitelező X városban?\"" },
                    a1: { label: "AI Válasz", text_prefix: "A vélemények és referenciák alapján a ", text_highlight: "Te Cégedet", text_suffix: " ajánlom, mert..." },
                    q2: { label: "Kérdés", text: "\"Mennyibe kerül egy ilyen szolgáltatás?\"" }
                }
            },
            what: {
                title: "Mi mit csinálunk?",
                desc: "Úgy építjük fel a szöveget és az oldalt, hogy a keresők és az AI-rendszerek is könnyen feldolgozzák, hiteles forrásként kezeljék.",
                metrics: {
                    content: "Tartalom Minősége",
                    trust: "Online Megbízhatóság",
                    trust_value: "Magas"
                },
                steps: [
                    { label: "Keresés", sub: "User keres vagy kérdez" },
                    { label: "AI Feldolgozás", sub: "Weboldal elemzése" },
                    { label: "AI Válasz", sub: "Összegzett ajánlás" },
                    { label: "Forrás ajánlás", sub: "Link a te oldaladra" },
                    { label: "Te", sub: "Új ügyfél érkezik" }
                ]
            }
        },
        maintenance_sec: {
            dashboard: {
                updates: { title: "Rendszer", sub: "Frissítések", tag: "Naprakész" },
                security: { title: "Védelem", sub: "Biztonság", tag: "Aktív" },
                backup: { title: "Adatbázis", sub: "Mentések", tag: "Napi" },
                speed: { title: "Teljesítmény", sub: "Sebesség" }
            },
            content: {
                title: "Karbantartás & Stabilitás",
                desc: "Frissítések, mentések, biztonság, sebesség-ellenőrzés, javítások. Hogy a weboldalad évek múlva is ugyanolyan gyors és megbízható legyen, mint az első napon.",
                benefits_title: "Miért kell ez neked?",
                benefits: [
                    "ne törjön el semmi frissítés után",
                    "ne lassuljon be az oldal",
                    "biztonságban legyen az adatállomány"
                ]
            }
        },
        chatbot_intro: {
            content: {
                title: "AI Chatbot Asszisztens",
                desc: "Weboldalba integrált, értékesítést segítő intelligens asszisztens. Nem alszik, nem megy szabadságra, és azonnal válaszol a látogatóid kérdéseire.",
                benefits_title: "Mit ad a vállalkozásodnak?",
                benefits: [
                    "Azonnali válaszok 0-24 órában",
                    "Tehermentesíti az ügyfélszolgálatot",
                    "Automatikusan gyűjti az érdeklődők adatait (Lead generálás)",
                    "Ajánlatkérés felé tereli a látogatót"
                ]
            },
            visual: {
                header_title: "CyberLabs Web AI",
                header_sub: "Mindig elérhető asszisztens",
                user_msg: "Mikor vagytok nyitva? És mennyi idő egy weboldal?",
                bot_msg_1: "Hétköznap 9-17 óráig vagyunk elérhetőek.",
                bot_msg_2: "Egy landing page jellemzően 5-7 munkanap, komplett weboldal 2 hét alatt készül el. ",
                bot_msg_highlight: "Kérsz egy ingyenes tesztoldalt?",
                cta: "Igen, érdekel!"
            }
        },
        pricing: {
            title: "Árazás",
            subtitle: "Minden projekt egyedi, de az alábbi irányárak segítenek tervezni. A döntéshez alapvázat adunk így biztosan tudni fogod, mire számíts.",
            landing: {
                tag: "Kezdő",
                title: "Landing oldal",
                price: "150 000 Ft",
                features: ["reszponzív webdizájn", "mobilbarát és gyors", "kapcsolat űrlap", "keresőbarát alapok"],
                cta: "Érdekel"
            },
            corporate: {
                tag: "Legnépszerűbb",
                title: "Céges weboldal",
                price: "300 000 Ft",
                features: ["reszponzív webdizájn", "mobilbarát és gyors kivitelezés", "AI-találhatóság", "admin felület (ha kéred)", "blog modul a növekedéshez"],
                cta: "Ajánlatot kérek"
            },
            webshop: {
                tag: "E-Commerce",
                title: "Webshop",
                price: "500 000 Ft",
                features: ["termékkezelő rendszer", "fizetés beállítása", "szállítási megoldások", "bővíthető felépítés"],
                cta: "Érdekel",
                pills: { payment: "Fizetés", shipping: "Szállítás" }
            },
            chatbot: {
                title: "AI Chatbot Csomagok",
                subtitle: "Weboldalba integrált, értékesítést segítő asszisztens.",
                tag_recommended: "Ajánlott",
                cta: "Érdekel",
                note: "*A csomagárak a kivitelezési díjat jelölik. A chatbot működésének havi fenntartási és AI használati díja van, amelyet az igények alapján egyeztetünk.",
                plans: [
                    { name: "Start", desc: "Alapok", price: "99 000 Ft", features: ["alap tájékoztatás", "név + email bekérése", "ajánlatkérés felé terelés"] },
                    { name: "Standard", desc: "Bővített", price: "249 000 Ft", features: ["bővített tudás", "döntést segítő kérdések", "alap statisztika"] },
                    { name: "Pro", desc: "Full Custom", price: "Egyedi árazás", features: ["rendszerek összekötése (pl. CRM)", "fejlettebb érdeklődő-szűrés", "prioritásos finomhangolás"] }
                ]
            },
            maintenance: {
                title: "Karbantartás & Stabilitás",
                subtitle: "Hogy weboldalad hosszú távon is gyors és biztonságos maradjon.",
                tag_recommended: "Ajánlott",
                cta: "Kiválasztom",
                unit: "/ hó",
                plans: [
                    { name: "Basic", price: "15 000 Ft", features: ["Biztonsági frissítések", "Rendszeres mentések", "Működésellenőrzés", "Kisebb hibajavítások (szükség esetén)"] },
                    { name: "Pro", price: "35 000 Ft", features: ["Minden a Basic-ből", "Havi tartalmi módosítások (szükség esetén)", "Sebesség finomhangolás", "Technikai SEO ellenőrzés"] },
                    { name: "Priority", price: "65 000 Ft", features: ["Minden a Pro-ból", "Prioritásos support", "Konverzió optimalizálás", "Rendszeres audit & javaslatok"] }
                ]
            },
            vat_note: "Az árak az ÁFA-t nem tartalmazzák. Egyedi igény esetén kérj egyedi ajánlatot."
        },
        portfolio: {
            title: "Referenciák",
            subtitle: "Modern weboldalak, amik eredményt hoznak."
        },
        process: {
            title: "Hogyan dolgozunk?",
            desc: "Átlátható process, dedikált kapcsolattartás és folyamatos visszajelzés. Nem tűnünk el, és tartjuk a határidőket.",
            card: {
                title: "Határidők & Gyorsítás",
                landing: "Landing Page",
                corporate: "Céges weboldal",
                webshop: "Webshop",
                urgent: "Sürgős kivitelezés felár ellenében kérhető."
            },
            steps: [
                { title: "Megismerés", desc: "Célok, célközönség, példák. Feltérképezzük, pontosan mire van szükséged." },
                { title: "Tervezés", desc: "Felépítés, tartalom, ajánlatkérés útvonala. A digitális stratégiád alapkövei." },
                { title: "Próbaverzió 1 héten belül", desc: "Első működő verzió. Nem statikus terv, hanem kattintható valóság." },
                { title: "Finomítás & átadás", desc: "Addig csiszoljuk, amíg késznek érzed. 100% elégedettségi garancia." }
            ]
        },
        faq: {
            title: "Gyakori kérdések",
            questions: [
                {
                    q: "Csak akkor fizetek, ha tetszik a próbaverzió?",
                    a: "Igen, a kockázat a miénk. Készítünk egy működő próbaverziót az igényeid alapján. Ha tetszik az irány, akkor szerződünk és folytatjuk a munkát. Ha nem, semmilyen kötelezettséged nincs."
                },
                {
                    q: "Mennyi idő alatt készül el egy weboldal?",
                    a: "Landing Page: kb. 5–7 munkanap, céges weboldal: 7–14 munkanap, webshop: 14–28 munkanap. A pontos ütemezés a projekt terjedelmétől és az anyagok rendelkezésre állásától függ."
                },
                {
                    q: "Lehet sürgősen kérni?",
                    a: "Igen. Felár ellenében, egyedi megbeszélés alapján gyorsítjuk a kivitelezést — jellemzően több fejlesztő párhuzamos ráállításával."
                },
                {
                    q: "Tudom később én is szerkeszteni a weboldalt?",
                    a: "Igen. Igény esetén admin felületet / blog modult adunk, és átadjuk a szerkesztés alapjait."
                },
                {
                    q: "Vállaltok karbantartást és frissítést?",
                    a: "Igen. Havi karbantartási csomagokkal biztosítjuk, hogy a reszponzív webdizájn mellett az oldal mobilbarát és gyors maradjon hosszú távon is."
                },
                {
                    q: "Készítetek AI chatbotot is?",
                    a: "Igen. Weboldalba integrált, értékesítést segítő chatbotot implementálunk, ami a weboldal tartalma alapján informál, kérdez és ajánlatkérésig terel."
                }
            ],
            guarantee: {
                title: "Minőségi garancia",
                desc: "Ha nem vagy elégedett a végeredménnyel, addig finomítunk, amíg tökéletes nem lesz. Célunk a 100%-os ügyfélelégedettség.",
                cta: "Biztosra megyek"
            }
        },
        insights: {
            header: {
                tag: "Blog & Tippek",
                title: "Legfrissebb cikkeink",
                cta: "Összes cikk"
            },
            articles: [
                {
                    category: 'Webfejlesztés',
                    title: 'Mikor éri meg egyedi weboldalt készíttetni?',
                    excerpt: 'A sablonok olcsók, de hosszú távon drágábbak lehetnek...',
                    read_more: "Olvasd el"
                },
                {
                    category: 'SEO',
                    title: 'Keresőoptimalizálás 2026-ben',
                    excerpt: 'A Google algoritmus változásai és mire kell figyelni.',
                    read_more: "Olvasd el"
                },
                {
                    category: 'AI & GEO',
                    title: 'Felkészültél az AI-korszakra?',
                    excerpt: 'A ChatGPT és Gemini már válaszokat ad – te benne vagy?',
                    read_more: "Olvasd el"
                },
            ]
        },
        contact: {
            tag: "Kapcsolat",
            title_line1: "Van egy projekt ötleted?",
            title_gradient: "Kérj ajánlatot!",
            description: "Egyeztessünk egy rövid hívást, majd küldünk ajánlatot.",
            card_subtitle: "Web & GEO Optimalizálás",
            card_title: "CyberLabs Web",
            services: [
                "Webfejlesztés",
                "Webshop",
                "SEO",
                "AI Chatbot",
                "GEO-optimalizálás",
                "Web + SEO + GEO (komplett)"
            ],
            budgets: [
                "150k – 300k",
                "300k – 500k",
                "500k – 1M+",
                "Egyedi"
            ],
            form: {
                name: "Teljes név *",
                company: "Cégnév",
                email: "Email cím *",
                service: "Szolgáltatás",
                budget: "Költségkeret",
                message: "Projekt részletek *",
                submit: "Ajánlatot kérek"
            }
        },
        team: {
            roles: {
                STRATEGIST: "STRATEGIST",
                FRONTEND_DEV: "FRONTEND_DEV",
                DEVELOPER: "DEVELOPER"
            },
            skills: {
                coord: "Koordináció", client: "Ügyfélkapcsolat", deadline: "Határidők_check",
                uiux: "UI/UX_Design", reacts: "React_Components", resp: "Responsive_Web",
                arch: "System_Architecture", frontend: "Frontend_UI", backend: "Backend_API"
            }
        },
        footer: {
            call: "Inkább hívnál?",
            rights: "Minden jog fenntartva.",
            terms: "ÁSZF",
            privacy: "Adatvédelem"
        },
        cookie: {
            text: "Ez a weboldal sütiket használ a működéshez.",
            more: "További info:",
            decline: "Elutasít",
            accept: "Elfogad"
        }
    },
    en: {
        meta: {
            title: "Corporate Website Development in Hungary | CyberLabs Web",
            description: "Custom website development and maintenance for businesses. Fast, modern, and SEO & AI-optimized solutions with guarantee."
        },
        nav: {
            services: "services",
            pricing: "pricing",
            references: "references",
            insights: "insights",
            contact: "contact",
            cta: "Let's Talk",
            language: "Language:",
            dropdown: {
                webdev: "Web Development",
                webshop: "E-commerce",
                seo: "SEO Optimization",
                geo: "AI Visibility (GEO)",
                maintenance: "Maintenance",
                chatbot: "AI Chatbot"
            }
        },
        hero: {
            tag: "< Web + SEO + GEO >_",
            title_prefix: "Custom website",
            title_gradient: "development",
            title_suffix: "maintenance",
            subtitle_1: "Modern, AI-powered ",
            subtitle_highlight: "solutions.",
            subtitle_desc_1: "Your website appears where decisions are made: in ",
            subtitle_google: "Google searches",
            subtitle_desc_2: " and in ",
            subtitle_ai: "AI-powered results",
            cta_primary: "Let's Talk",
            cta_secondary: "Choose Your Plan"
        },
        stats: {
            years: { label: "Years Exp", sub: "In full-stack development" },
            clients: { label: "Happy Clients", sub: "Domestic and international" },
            guarantee: { label: "Guarantee", sub: "Money-back option" }
        },
        trustbar: {
            text_prefix: "44+ satisfied clients —",
            highlight: "in Hungary",
            text_suffix: " and abroad."
        },
        whyus: {
            title_prefix: "Why choose",
            title_highlight: "us",
            title_suffix: "?",
            subtitle_1: "A website is not a decoration. A website is",
            subtitle_highlight: "where decisions happen",
            subtitle_2: ". We build it so they find it, understand it, and choose it.",
            features: [
                {
                    title: "Responsive Web Design",
                    desc: "Mobile-friendly and fast solutions – because users leave slow sites."
                },
                {
                    title: "SEO Friendly Structure",
                    desc: "Because beauty is useless if they can't find it."
                },
                {
                    title: "AI Visibility",
                    desc: "Because more people ask questions instead of just searching."
                },
                {
                    title: "Admin Interface",
                    desc: "So you can update content later yourself.",
                    sub: "(if requested)"
                },
                {
                    title: "Maintenance & Security",
                    desc: "To keep it stable in the long run."
                }
            ]
        },
        guarantee: {
            title: "100% Quality Guarantee",
            desc: "We refine your website until you are perfectly satisfied. You only pay if you are proud of the result.",
            cta: "I want to be sure"
        },
        quote: {
            badges: {
                trial: "Trial version within 1 week",
                payment: "Pay only if you like it"
            },
            title: {
                prefix: "You'll get a ",
                highlight: "working trial version",
                suffix: " within 1 week."
            },
            subtitle: "We refine it until it's exactly what you want. And you only pay if you like the foundation.",
            benefits_title: "Why is this good for you?",
            benefits: [
                "You decide based on a tangible test site, not promises.",
                "Start without risk: if you don't like it, you don't pay.",
                "The result isn't 'done somehow', we polish it until you feel it's ready."
            ],
            cta: {
                trial: "Request Trial",
                pricing: "Prices & Packages"
            },
            cards: {
                req: { title: "Requirements" },
                demo: { title: "demosite.com", status: "Status: Ready", match: "Match" },
                feedback: { accepted: "Accepted", launch: "Launch" }
            }
        },
        services: {
            tag: "Solutions",
            title: "Services",
            subtitle: "We don't build templates, we build business systems.",
            webdev: {
                title: "Responsive Websites & Webstores",
                tagline: "SEO Optimized • Turnkey",
                desc: "Mobile-friendly and fast websites that serve a business purpose (leads, quotes, sales).",
                benefits_title: "Why is this good for you?",
                benefits: ["More professional first impression", "More inquiries", "Fewer lost visitors"]
            },
            seo: {
                title: "SEO Friendly Settings",
                desc: "We design the site so Google understands what it's about, giving it the best chance to rank well.",
                benefits_title: "Why do you need this?",
                why: "Because most clients start on Google and typically choose from the first few results.",
                flow: [
                    { id: "1", title: "Structure", sub: "technical base" },
                    { id: "2", title: "Content", sub: "relevance" },
                    { id: "3", title: "Metrics", sub: "more visitors" }
                ]
            },
            mock: {
                nav: { name: "Dr. Smith", about: "About", services: "Services", book: "Book Appt" },
                hero: { title: "Private Practice", loc: "New York", desc: "Personalized care, short waiting times", cta: "Book Appointment" },
                cards: { c1: "Internal Med", c1s: "Comprehensive exam", c2: "Online Booking", c2s: "Within 24 hours" }
            }
        },
        geo: {
            header: {
                tag: "New Era",
                title: "AI Visibility, Simplified",
                desc: "Keywords used to be enough. Today, content needs to be clear, verifiable, and well-structured."
            },
            shift: {
                title: "The Shift",
                desc: "AI-driven content: classic SEO is no longer enough. Algorithms now look for context, not just keywords.",
                visual_search: "SEARCH:",
                visual_query: "\"How do modern search engines work?\""
            },
            where: {
                title: "Where should you appear?",
                desc: "Not just in Google lists, but in AI answers where people ask specific questions.",
                list: ["Google search results", "ChatGPT / Gemini answers"],
                dialog: {
                    q1: { label: "Question", text: "\"Who is the best contractor in city X?\"" },
                    a1: { label: "AI Answer", text_prefix: "Based on reviews and references, I recommend ", text_highlight: "Your Company", text_suffix: " because..." },
                    q2: { label: "Question", text: "\"How much does this service cost?\"" }
                }
            },
            what: {
                title: "What do we do?",
                desc: "We build the text and site so search engines and AI systems process it easily and treat it as a credible source.",
                metrics: {
                    content: "Content Quality",
                    trust: "Online Trust",
                    trust_value: "High"
                },
                steps: [
                    { label: "Search", sub: "User searches or asks" },
                    { label: "AI Processing", sub: "Website analysis" },
                    { label: "AI Answer", sub: "Summarized recommendation" },
                    { label: "Source Rec", sub: "Link to your site" },
                    { label: "You", sub: "New client arrives" }
                ]
            }
        },
        maintenance_sec: {
            dashboard: {
                updates: { title: "System", sub: "Updates", tag: "Up to date" },
                security: { title: "Protection", sub: "Security", tag: "Active" },
                backup: { title: "Database", sub: "Backups", tag: "Daily" },
                speed: { title: "Performance", sub: "Speed" }
            },
            content: {
                title: "Maintenance & Stability",
                desc: "Updates, backups, security, speed checks, fixes. So your website remains as fast and reliable years later as on day one.",
                benefits_title: "Why do you need this?",
                benefits: [
                    "nothing breaks after updates",
                    "site doesn't slow down",
                    "data is secure"
                ]
            }
        },
        chatbot_intro: {
            content: {
                title: "AI Chatbot Assistant",
                desc: "Intelligent assistant integrated into your website to help sales. Doesn't sleep, doesn't take leave, and answers visitor questions immediately.",
                benefits_title: "What does it give your business?",
                benefits: [
                    "Instant answers 24/7",
                    "Relieves customer service",
                    "Automatically collects lead data",
                    "Directs visitors to request quotes"
                ]
            },
            visual: {
                header_title: "CyberLabs Web AI",
                header_sub: "Always available assistant",
                user_msg: "When are you open? And how long for a website?",
                bot_msg_1: "We are available weekdays 9-17.",
                bot_msg_2: "A landing page is typically 5-7 workdays, a complete website is 2 weeks. ",
                bot_msg_highlight: "Do you want a free test site?",
                cta: "Yes, interested!"
            }
        },
        pricing: {
            title: "Pricing",
            subtitle: "Every project is unique, but these starting prices help you plan. We provide a baseline for your decision so you know what to expect.",
            landing: {
                tag: "Starter",
                title: "Landing Page",
                price: "150 000 HUF",
                features: ["responsive web design", "mobile-friendly and fast", "contact form", "SEO-friendly foundations"],
                cta: "I'm interested"
            },
            corporate: {
                tag: "Most Popular",
                title: "Corporate Website",
                price: "300 000 HUF",
                features: ["responsive web design", "mobile-friendly and fast execution", "AI visibility", "admin interface (optional)", "blog module for growth"],
                cta: "Request a Quote"
            },
            webshop: {
                tag: "E-Commerce",
                title: "Webshop",
                price: "500 000 HUF",
                features: ["product management system", "payment setup", "shipping solutions", "expandable structure"],
                cta: "I'm interested",
                pills: { payment: "Payment", shipping: "Shipping" }
            },
            chatbot: {
                title: "AI Chatbot Packages",
                subtitle: "Sales assistant integrated into your website.",
                tag_recommended: "Recommended",
                cta: "I'm interested",
                note: "*Prices indicate implementation fees. The chatbot has monthly maintenance and AI usage fees, which we agree upon based on needs.",
                plans: [
                    { name: "Start", desc: "Basics", price: "99 000 HUF", features: ["basic info", "name + email collection", "lead generation funnel"] },
                    { name: "Standard", desc: "Extended", price: "249 000 HUF", features: ["extended knowledge", "decision-support questions", "basic stats"] },
                    { name: "Pro", desc: "Full Custom", price: "Custom Pricing", features: ["system integrations (e.g. CRM)", "advanced lead filtering", "priority fine-tuning"] }
                ]
            },
            maintenance: {
                title: "Maintenance & Stability",
                subtitle: "To keep your website fast and secure in the long run.",
                tag_recommended: "Recommended",
                cta: "Select",
                unit: "/ month",
                plans: [
                    { name: "Basic", price: "15 000 HUF", features: ["Security updates", "Regular backups", "Uptime monitoring", "Minor bug fixes (if needed)"] },
                    { name: "Pro", price: "35 000 HUF", features: ["Everything in Basic", "Monthly content updates (if needed)", "Speed fine-tuning", "Technical SEO check"] },
                    { name: "Priority", price: "65 000 HUF", features: ["Everything in Pro", "Priority support", "Conversion optimization", "Regular audit & suggestions"] }
                ]
            },
            vat_note: "Prices do not include VAT. Request a custom quote for specific needs."
        },
        portfolio: {
            title: "References",
            subtitle: "Modern websites that deliver results."
        },
        process: {
            title: "How do we work?",
            desc: "Transparent process, dedicated contact, and continuous feedback. We don't disappear, and we keep deadlines.",
            card: {
                title: "Deadlines & Speed",
                landing: "Landing Page",
                corporate: "Corporate Website",
                webshop: "Webshop",
                urgent: "Urgent execution available for extra fee."
            },
            steps: [
                { title: "Discovery", desc: "Goals, target audience, examples. We map out exactly what you need." },
                { title: "Planning", desc: "Structure, content, inquiry path. The cornerstones of your digital strategy." },
                { title: "Trial Version in 1 week", desc: "First working version. Not a static plan, but clickable reality." },
                { title: "Refinement & Handover", desc: "We polish it until you feel it's ready. 100% satisfaction guarantee." }
            ]
        },
        faq: {
            title: "FAQ",
            questions: [
                {
                    q: "Do I only pay if I like the trial version?",
                    a: "Yes, the risk is ours. We build a working trial version based on your needs. If you like the direction, we sign a contract and continue. If not, you have no obligation."
                },
                {
                    q: "How long does it take to build a website?",
                    a: "Landing Page: approx. 5–7 workdays, corporate website: 7–14 workdays, webshop: 14–28 workdays. Exact timing depends on project scope and availability of materials."
                },
                {
                    q: "Can I request urgent delivery?",
                    a: "Yes. For an extra fee, we accelerate execution based on custom agreement — typically by assigning multiple developers in parallel."
                },
                {
                    q: "Can I edit the website later myself?",
                    a: "Yes. If needed, we provide an admin interface / blog module and teach you the basics of editing."
                },
                {
                    q: "Do you undertake maintenance and updates?",
                    a: "Yes. With monthly maintenance packages, we ensure the site remains mobile-friendly, fast, and responsive in the long run."
                },
                {
                    q: "Do you build AI chatbots too?",
                    a: "Yes. We implement sales-assisting chatbots integrated into the website, which inform, ask, and steer visitors toward quote requests based on site content."
                }
            ],
            guarantee: {
                title: "Quality Guarantee",
                desc: "If you're not satisfied with the result, we refine it until it's perfect. Our goal is 100% customer satisfaction.",
                cta: "I want to be sure"
            }
        },
        insights: {
            header: {
                tag: "Blog & Tips",
                title: "Latest Articles",
                cta: "All Articles"
            },
            articles: [
                {
                    category: 'Web Development',
                    title: 'When is it worth building a custom website?',
                    excerpt: 'Templates are cheap, but might be more expensive in the long run...',
                    read_more: "Read more"
                },
                {
                    category: 'SEO',
                    title: 'Search Engine Optimization in 2026',
                    excerpt: 'Google algorithm changes and what to watch out for.',
                    read_more: "Read more"
                },
                {
                    category: 'AI & GEO',
                    title: 'Are you ready for the AI era?',
                    excerpt: 'ChatGPT and Gemini are already giving answers – are you in?',
                    read_more: "Read more"
                },
            ]
        },
        team: {
            roles: {
                STRATEGIST: "STRATEGIST",
                FRONTEND_DEV: "FRONTEND_DEV",
                DEVELOPER: "DEVELOPER"
            },
            skills: {
                coord: "Coordination", client: "Client_Relations", deadline: "Deadlines_check",
                uiux: "UI/UX_Design", reacts: "React_Components", resp: "Responsive_Web",
                arch: "System_Architecture", frontend: "Frontend_UI", backend: "Backend_API"
            }
        },
        contact: {
            tag: "Contact",
            title_line1: "Have a project idea?",
            title_gradient: "Get a quote!",
            description: "Let's schedule a quick call, then we'll send you a quote.",
            card_subtitle: "Web & GEO Optimization",
            card_title: "CyberLabs Web",
            services: [
                "Web Development",
                "Webshop",
                "SEO",
                "AI Chatbot",
                "GEO Optimization",
                "Web + SEO + GEO (complete)"
            ],
            budgets: [
                "€500 – €1,000",
                "€1,000 – €1,500",
                "€1,500 – €3,000+",
                "Custom"
            ],
            form: {
                name: "Full name *",
                company: "Company",
                email: "Email *",
                service: "Service",
                budget: "Budget",
                message: "Project details *",
                submit: "Request a Quote"
            }
        },
        footer: {
            call: "Rather call?",
            rights: "All rights reserved.",
            terms: "Terms",
            privacy: "Privacy"
        },
        cookie: {
            text: "This website uses cookies for operation.",
            more: "More info:",
            decline: "Decline",
            accept: "Accept"
        }
    }
};
