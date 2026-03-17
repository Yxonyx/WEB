export interface NicheBenefit {
    icon: string; // Lucide icon name
    title: string;
    description: string;
}

export interface NicheFAQ {
    question: string;
    answer: string;
}

export interface NichePage {
    slug: string;
    profession: string; // display name e.g. "Ügyvédeknek"
    title: string; // <title> tag
    metaDescription: string;
    heroSubtitle: string;
    benefits: NicheBenefit[];
    faqs: NicheFAQ[];
    schemaType: string; // Schema.org type
}

export const nichePages: NichePage[] = [
    {
        slug: 'ugyvedeknek',
        profession: 'Ügyvédeknek',
        title: 'Weboldal Készítés Ügyvédeknek | Ügyvédi Weboldal | CyberLabs Web',
        metaDescription: 'Professzionális ügyvédi weboldal készítés, ami bizalmat épít és ügyfeleket hoz. Modern, gyors és GDPR-kompatibilis megoldás ügyvédi irodáknak.',
        heroSubtitle: 'Olyan ügyvédi weboldalt építünk, ami bizalmat sugároz és új ügyfeleket hoz – automatizáltan.',
        benefits: [
            { icon: 'Shield', title: 'Bizalomépítő megjelenés', description: 'Professzionális design, ami azonnal komolyságot és szakértelmet közvetít a potenciális ügyfeleknek.' },
            { icon: 'Search', title: 'Keresőoptimalizált', description: 'Amikor valaki „ügyvéd + város" kifejezésre keres, te jelenj meg először a Google-ben.' },
            { icon: 'Clock', title: 'Online időpontfoglalás', description: 'Automatikus konzultáció-foglalás, ami csökkenti az admin terheket és növeli a hatékonyságot.' },
            { icon: 'Lock', title: 'GDPR kompatibilis', description: 'Teljes adatvédelmi megfelelőség, cookie kezelés és jogi nyilatkozatok integrálva.' },
        ],
        faqs: [
            { question: 'Miért van szüksége egy ügyvédnek professzionális weboldalra?', answer: 'Az ügyfelek 87%-a online keres ügyvédet. Professzionális weboldal nélkül láthatatlan vagy a potenciális ügyfelek számára, és a versenytársaid szerzik meg őket.' },
            { question: 'Mennyibe kerül egy ügyvédi weboldal?', answer: 'Egyedi ügyvédi weboldalunk 250.000 Ft-tól indul, ami tartalmazza a teljes tervezést, fejlesztést, SEO optimalizálást és GDPR megfelelőséget.' },
            { question: 'Mennyi idő alatt készül el?', answer: 'Egy professzionális ügyvédi weboldal átlagosan 2-3 hét alatt készül el, a tartalom rendelkezésre állásától függően.' },
            { question: 'Tudok rajta időpontot foglaltatni?', answer: 'Igen! Beépített online időpontfoglaló rendszert integrálunk, ami automatikusan kezeli a konzultációs időpontokat.' },
        ],
        schemaType: 'LegalService',
    },
    {
        slug: 'fodraszoknak',
        profession: 'Fodrászoknak',
        title: 'Weboldal Készítés Fodrászoknak | Fodrász Weboldal | CyberLabs Web',
        metaDescription: 'Modern fodrász weboldal készítés online időpontfoglalóval. Mutasd meg munkáidat, szerezz új vendégeket és automatizáld a foglalásokat.',
        heroSubtitle: 'Stílusos fodrász weboldal, ami bemutatja munkáidat és automatikusan hozza az új vendégeket.',
        benefits: [
            { icon: 'Scissors', title: 'Portfólió galéria', description: 'Gyönyörű galéria a legjobb munkáidról, ami azonnal meggyőzi a látogatókat a szakértelmeddel.' },
            { icon: 'Calendar', title: 'Online foglalás', description: 'Beépített időpontfoglaló, ami 0-24 fogad foglalásokat – akkor is, amikor te épp dolgozol.' },
            { icon: 'MapPin', title: 'Helyi SEO', description: 'Google Térkép integráció és helyi keresőoptimalizálás, hogy a környékbeliek megtaláljanak.' },
            { icon: 'Star', title: 'Vélemények megjelenítése', description: 'Google értékelések automatikus megjelenítése, ami bizalmat épít az új vendégeknél.' },
        ],
        faqs: [
            { question: 'Miért jobb egy saját weboldal, mint csak az Instagram?', answer: 'Az Instagram algoritmus változásai bármikor csökkenthetik az elérésed. Saját weboldallal te irányítod a megjelenésedet, és a Google keresőből is érkeznek vendégek.' },
            { question: 'Lehet rajta online időpontfoglalás?', answer: 'Igen! Integrált foglalási rendszert építünk, ahol a vendégek kiválaszthatják a szolgáltatást, fodrászt és időpontot.' },
            { question: 'Mobilbarát lesz a weboldal?', answer: 'Természetesen! Minden weboldalunk reszponzív, ami azt jelenti, hogy telefonon, tableten és gépen is tökéletesen néz ki.' },
        ],
        schemaType: 'HealthAndBeautyBusiness',
    },
    {
        slug: 'kivitelezoknek',
        profession: 'Kivitelezőknek',
        title: 'Weboldal Készítés Kivitelezőknek | Építőipari Weboldal | CyberLabs Web',
        metaDescription: 'Építőipari weboldal készítés kivitelezőknek. Referenciák bemutatása, ajánlatkérő form és SEO, hogy a megrendelők megtaláljanak.',
        heroSubtitle: 'Erős online jelenlét kivitelezőknek – mutasd meg referenciáidat és szerezz több megrendelést.',
        benefits: [
            { icon: 'Hammer', title: 'Referencia galéria', description: 'Előtte-utána fotók és projekt bemutatók, amik meggyőzik a potenciális megrendelőket.' },
            { icon: 'FileText', title: 'Ajánlatkérő form', description: 'Részletes ajánlatkérő űrlap, ami előszűri a komoly érdeklődőket és időt takarít meg.' },
            { icon: 'TrendingUp', title: 'Google megjelenés', description: '„Kivitelező + város" keresésekre optimalizálva, hogy te legyél az első találat.' },
            { icon: 'Award', title: 'Bizalom jelek', description: 'Engedélyek, biztosítások és garancia feltüntetése, ami megkülönböztet a kontároktól.' },
        ],
        faqs: [
            { question: 'Miért fontos weboldal egy kivitelezőnek?', answer: 'A megrendelők 92%-a online keres kivitelezőt. Professzionális weboldal nélkül a versenytársaid szerzik meg a munkákat.' },
            { question: 'Hogyan segít a weboldal több megrendelést szerezni?', answer: 'Keresőoptimalizált oldalunk biztosítja, hogy amikor valaki kivitelezőt keres a környéken, te jelenj meg. Az ajánlatkérő form pedig automatikusan gyűjti az érdeklődőket.' },
            { question: 'Meg tudom mutatni a korábbi munkáimat?', answer: 'Igen! Részletes projekt galériát építünk előtte-utána fotókkal, leírásokkal és akár videókkal.' },
        ],
        schemaType: 'HomeAndConstructionBusiness',
    },
    {
        slug: 'orvosoknak',
        profession: 'Orvosoknak',
        title: 'Weboldal Készítés Orvosoknak | Orvosi Weboldal | CyberLabs Web',
        metaDescription: 'Professzionális orvosi weboldal készítés. Online időpontfoglalás, beteg-tájékoztató és GDPR-kompatibilis megoldás orvosoknak és rendelőknek.',
        heroSubtitle: 'Orvosi weboldal, ami bizalmat épít, tájékoztat és automatizálja az időpontfoglalást.',
        benefits: [
            { icon: 'Heart', title: 'Beteg-központú design', description: 'Könnyen navigálható felület, ami segíti a pácienseket a szükséges információk megtalálásában.' },
            { icon: 'Calendar', title: 'Online időpontfoglalás', description: 'Automatikus foglalási rendszer, ami csökkenti a telefonos adminisztrációt.' },
            { icon: 'BookOpen', title: 'Beteg-tájékoztató', description: 'Szakterületi leírások és beteg-tájékoztató anyagok, amik növelik a bizalmat.' },
            { icon: 'Shield', title: 'Adatvédelem', description: 'Teljes GDPR megfelelőség és egészségügyi adatvédelmi protokollok.' },
        ],
        faqs: [
            { question: 'Miért van szüksége egy orvosnak weboldalra?', answer: 'A páciensek egyre gyakrabban keresnek orvost online. Saját weboldallal megmutathatod szakterületedet, és az online időpontfoglalás jelentősen csökkenti az admin terheket.' },
            { question: 'GDPR-kompatibilis lesz?', answer: 'Igen, minden orvosi weboldalunkat teljes GDPR megfelelőséggel készítjük, beleértve az adatkezelési tájékoztatókat és cookie kezelést.' },
            { question: 'Lehet rajta online időpontfoglalás?', answer: 'Igen! Beépített foglalási rendszert integrálunk, ami szakterület és orvos szerint is szűrhető.' },
        ],
        schemaType: 'MedicalBusiness',
    },
    {
        slug: 'ettermeknek',
        profession: 'Éttermeknek',
        title: 'Weboldal Készítés Éttermeknek | Éttermi Weboldal | CyberLabs Web',
        metaDescription: 'Modern éttermi weboldal készítés online étlappal, asztalfoglalással és Google Térkép integrációval. Hozd be a vendégeket az ajtón!',
        heroSubtitle: 'Étvágygerjesztő éttermi weboldal, ami online étlappal és asztalfoglalással hozza a vendégeket.',
        benefits: [
            { icon: 'UtensilsCrossed', title: 'Digitális étlap', description: 'Gyönyörű, mobilbarát online étlap, ami mindig naprakész és könnyen szerkeszthető.' },
            { icon: 'Calendar', title: 'Asztalfoglalás', description: 'Online asztalfoglaló rendszer, ami 0-24 fogad foglalásokat automatikusan.' },
            { icon: 'MapPin', title: 'Google Térkép', description: 'Helyi keresőoptimalizálás és Google Térkép integráció a könnyű megtalálhatóságért.' },
            { icon: 'Camera', title: 'Étel galéria', description: 'Professzionális fotó galéria, ami megmutatja az ételeid és a hangulatos belső teret.' },
        ],
        faqs: [
            { question: 'Miért van szüksége egy étteremnek saját weboldalra?', answer: 'A vendégek 77%-a megnézi az étterem weboldalát rendelés vagy foglalás előtt. Online étlap és foglalási lehetőség nélkül vendégeket veszítesz.' },
            { question: 'Lehet rajta online rendelés?', answer: 'Igen! Integrálhatunk online rendelési rendszert is, ahol a vendégek házhozszállítást vagy elvitelt rendelhetnek.' },
            { question: 'Könnyen szerkeszthetem az étlapot?', answer: 'Természetesen! Egyszerű adminisztrációs felületet biztosítunk, ahol bármikor frissítheted az étlapot, árakat és akciókat.' },
        ],
        schemaType: 'Restaurant',
    },
    {
        slug: 'autoszereloknek',
        profession: 'Autószerelőknek',
        title: 'Weboldal Készítés Autószerelőknek | Autószerviz Weboldal | CyberLabs Web',
        metaDescription: 'Autószerviz weboldal készítés online időpontfoglalóval. Szolgáltatások bemutatása, árlista és Google megjelenés autószerelőknek.',
        heroSubtitle: 'Megbízható autószerviz weboldal, ami bemutatja szolgáltatásaidat és hozza az ügyfeleket.',
        benefits: [
            { icon: 'Wrench', title: 'Szolgáltatás lista', description: 'Részletes szolgáltatás bemutató árakkal, ami segíti az ügyfeleket a döntésben.' },
            { icon: 'Calendar', title: 'Online bejelentkezés', description: 'Szerviz időpont foglalás online, ami csökkenti a telefonálási időt.' },
            { icon: 'MapPin', title: 'Helyi megjelenés', description: '„Autószerviz + város" keresésekre optimalizálva a Google-ben.' },
            { icon: 'Star', title: 'Vélemények', description: 'Elégedett ügyfelek véleményei automatikusan megjelenítve.' },
        ],
        faqs: [
            { question: 'Miért fontos weboldal egy autószerelőnek?', answer: 'Amikor elromlik az autó, az első hely ahol keresnek az emberek: a Google. Professzionális weboldallal te leszel az első találat.' },
            { question: 'Lehet rajta árlista?', answer: 'Igen! Részletes szolgáltatás listát és árlistát is megjeleníthetünk, ami átláthatóságot és bizalmat ad.' },
            { question: 'Hogyan segít új ügyfeleket szerezni?', answer: 'Helyi SEO optimalizálással biztosítjuk, hogy a környékbeli autósok megtaláljanak, amikor szervizre van szükségük.' },
        ],
        schemaType: 'AutoRepair',
    },
    {
        slug: 'ingatlanosoknak',
        profession: 'Ingatlanosoknak',
        title: 'Weboldal Készítés Ingatlanosoknak | Ingatlanos Weboldal | CyberLabs Web',
        metaDescription: 'Ingatlanközvetítő weboldal készítés ingatlan listázással, szűrőkkel és kapcsolatfelvételi lehetőséggel. Professzionális online jelenlét ingatlanosoknak.',
        heroSubtitle: 'Prémium ingatlanos weboldal, ami bemutja portfóliódat és automatikusan generálja az érdeklődőket.',
        benefits: [
            { icon: 'Home', title: 'Ingatlan portfólió', description: 'Elegáns ingatlan listázás nagy fotókkal, szűrőkkel és részletes leírásokkal.' },
            { icon: 'Users', title: 'Lead generálás', description: 'Automatikus érdeklődő gyűjtés minden ingatlannál, ami növeli az eladási esélyeket.' },
            { icon: 'TrendingUp', title: 'SEO optimalizálás', description: '„Eladó lakás + város" keresésekre optimalizálva a Google-ben.' },
            { icon: 'Smartphone', title: 'Mobilbarát', description: 'Tökéletes megjelenés telefonon, ahol a legtöbb ingatlankereső böngészik.' },
        ],
        faqs: [
            { question: 'Miben más ez, mint az ingatlan.com?', answer: 'Saját weboldalon az összes lead közvetlenül hozzád érkezik, nem kell versenyezned más irodákkal. Plus a Google keresőből is érkeznek érdeklődők.' },
            { question: 'Tudom magam feltölteni az ingatlanokat?', answer: 'Igen! Egyszerű adminisztrációs felületet biztosítunk, ahol percek alatt feltölthetsz új ingatlanokat fotókkal és leírásokkal.' },
            { question: 'Segít a Google megjelenésben?', answer: 'Igen, minden oldalt keresőoptimalizálunk, hogy az ingatlan keresések során te jelenj meg a top találatok között.' },
        ],
        schemaType: 'RealEstateAgent',
    },
    {
        slug: 'kozmetikusoknak',
        profession: 'Kozmetikusoknak',
        title: 'Weboldal Készítés Kozmetikusoknak | Kozmetikai Weboldal | CyberLabs Web',
        metaDescription: 'Kozmetikus weboldal készítés online időpontfoglalóval és szolgáltatás bemutatóval. Szép design, ami tükrözi a szalonod minőségét.',
        heroSubtitle: 'Elegáns kozmetikai weboldal, ami tükrözi a szalonod minőségét és automatikusan hozza a vendégeket.',
        benefits: [
            { icon: 'Sparkles', title: 'Szolgáltatás bemutató', description: 'Részletes kezelés leírások árakkal és időtartammal, ami segíti a vendégek döntését.' },
            { icon: 'Calendar', title: 'Online foglalás', description: 'Beépített időpontfoglaló, ahol a vendégek kiválaszthatják a kezelést és időpontot.' },
            { icon: 'Camera', title: 'Előtte-utána galéria', description: 'Meggyőző előtte-utána fotók, amik bizonyítják a szakértelmedet.' },
            { icon: 'Gift', title: 'Akciók & ajándékkártya', description: 'Szezonális akciók és online ajándékkártya vásárlás integrálása.' },
        ],
        faqs: [
            { question: 'Miért jobb egy saját weboldal, mint a közösségi média?', answer: 'Saját weboldalon te irányítod a megjelenést, a Google keresőből is jönnek vendégek, és az online foglalás automatizálja a munkát.' },
            { question: 'Milyen stílusú lesz a weboldal?', answer: 'A te szalonod stílusához igazítjuk! Elegáns, modern design, ami tükrözi a minőségét a szolgáltatásaidnak.' },
            { question: 'Mennyire bonyolult a kezelése?', answer: 'Nagyon egyszerű! Az időpontok, árak és képek kezelése intuitív felületen történik, betanítást is biztosítunk.' },
        ],
        schemaType: 'HealthAndBeautyBusiness',
    },
    {
        slug: 'villanyszereloknek',
        profession: 'Villanyszerelőknek',
        title: 'Weboldal Készítés Villanyszerelőknek | Villanyszerelő Weboldal | CyberLabs Web',
        metaDescription: 'Villanyszerelő weboldal készítés ajánlatkérő formmal és helyi SEO-val. Jelenj meg először, amikor villanyszerelőt keresnek a környéken.',
        heroSubtitle: 'Professzionális villanyszerelő weboldal, ami helyi keresésekből hozza a megrendeléseket.',
        benefits: [
            { icon: 'Zap', title: 'Szolgáltatások', description: 'Világos szolgáltatás lista, ami bemutatja a szaktudásodat és a vállalt munkákat.' },
            { icon: 'Phone', title: 'Azonnal hívható', description: 'Egy kattintásos telefonhívás gomb, ami mobilon azonnal működik.' },
            { icon: 'MapPin', title: 'Helyi SEO', description: '„Villanyszerelő + város" keresésekre optimalizálva, hogy téged találjanak meg.' },
            { icon: 'Shield', title: 'Megbízhatóság', description: 'Engedélyek, biztosítás és referenciák megjelenítése a bizalomépítéshez.' },
        ],
        faqs: [
            { question: 'Hogy talál meg egy villanyszerelőt a Google-ben?', answer: 'Helyi SEO optimalizálással biztosítjuk, hogy a „villanyszerelő + város" keresésekre az oldal megjelenjen az első találatok között.' },
            { question: 'Kell hozzá műszaki tudás?', answer: 'Nem! Mi mindent megcsinálunk, neked csak a szolgáltatásaid leírását és fotóidat kell megadnod.' },
            { question: 'Mennyit hoz pluszban?', answer: 'Ügyfeleink átlagosan 40-60%-kal több megkeresést kapnak weboldal indítás után a helyi Google keresésekből.' },
        ],
        schemaType: 'Electrician',
    },
    {
        slug: 'szallodaknak',
        profession: 'Szállodáknak',
        title: 'Weboldal Készítés Szállodáknak | Szálloda Weboldal | CyberLabs Web',
        metaDescription: 'Szálloda weboldal készítés közvetlen foglalási rendszerrel. Csökkentsd a közvetítői jutalékot és növeld a közvetlen foglalásokat!',
        heroSubtitle: 'Prémium szálloda weboldal, ami közvetlen foglalásokat generál és csökkenti a Booking.com jutalékot.',
        benefits: [
            { icon: 'Bed', title: 'Közvetlen foglalás', description: 'Saját foglalási rendszer, ami kiváltja a 15-25%-os Booking.com jutalékot.' },
            { icon: 'Camera', title: 'Virtuális túra', description: 'Lenyűgöző fotó galéria és virtuális szoba bemutató a vendégek meggyőzéséhez.' },
            { icon: 'Globe', title: 'Többnyelvű', description: 'Magyar, angol, német – a külföldi vendégek is könnyen foglalhatnak.' },
            { icon: 'TrendingUp', title: 'SEO & Google Hotel', description: 'Google Hotel integráció és keresőoptimalizálás a maximális elérésért.' },
        ],
        faqs: [
            { question: 'Mennyit spórolhatok a Booking.com jutalékon?', answer: 'Átlagosan 15-25%-ot. Egy napi 50.000 Ft-os szoba esetén ez havonta akár 200.000+ Ft megtakarítást jelent közvetlen foglalásokkal.' },
            { question: 'Integrálható a meglévő Channel Managerrel?', answer: 'Igen! A legtöbb Channel Manager rendszerrel (SiteMinder, Cloudbeds stb.) kompatibilis megoldást készítünk.' },
            { question: 'Többnyelvű lesz?', answer: 'Igen, alapértelmezetten magyar és angol nyelven készítjük, de tetszőleges nyelvet hozzáadhatunk.' },
        ],
        schemaType: 'LodgingBusiness',
    },
    {
        slug: 'gyogyszereszeknek',
        profession: 'Gyógyszerészeknek',
        title: 'Weboldal Készítés Gyógyszerészeknek | Gyógyszertár Weboldal | CyberLabs Web',
        metaDescription: 'Gyógyszertár weboldal készítés nyitvatartással, ügyeleti renddel és termék információkkal. Professzionális online jelenlét patikáknak.',
        heroSubtitle: 'Informatív gyógyszertár weboldal, ami tájékoztat, bizalmat épít és új ügyfeleket vonz.',
        benefits: [
            { icon: 'Pill', title: 'Ügyeleti naptár', description: 'Automatikusan frissülő ügyeleti rend és nyitvatartás megjelenítés.' },
            { icon: 'Search', title: 'Termék kereső', description: 'Készlet lekérdezés és termék információk a vásárlók kényelméért.' },
            { icon: 'MapPin', title: 'Helyi keresés', description: '„Gyógyszertár + kerület" keresésekre optimalizálva a Google-ben.' },
            { icon: 'Heart', title: 'Egészség tanácsok', description: 'Blog szekció egészségügyi tippekkel, ami növeli a forgalmat és a bizalmat.' },
        ],
        faqs: [
            { question: 'Miért fontos weboldal egy gyógyszertárnak?', answer: 'A betegek egyre gyakrabban keresnek online gyógyszertárat, ügyeletet és gyógyszer információt. Weboldallal elérhetőbb leszel.' },
            { question: 'Lehet rajta nyitvatartást és ügyeletet megjeleníteni?', answer: 'Igen! Automatikus ügyeleti naptárt és naprakész nyitvatartást is integrálunk.' },
            { question: 'Mennyire bonyolult frissíteni?', answer: 'Egyszerű szerkesztő felületet biztosítunk, ahol percek alatt frissítheted a nyitvatartást és híreket.' },
        ],
        schemaType: 'Pharmacy',
    },
    {
        slug: 'epiteszeknek',
        profession: 'Építészeknek',
        title: 'Weboldal Készítés Építészeknek | Építész Portfólió Weboldal | CyberLabs Web',
        metaDescription: 'Építész portfólió weboldal készítés lenyűgöző projekt galériával. Mutasd meg terveidet és nyerj új megbízásokat online.',
        heroSubtitle: 'Lenyűgöző építész portfólió weboldal, ami bemutatja terveidet és megbízásokat generál.',
        benefits: [
            { icon: 'Ruler', title: 'Projekt portfólió', description: 'Lenyűgöző galéria tervrajzokkal, 3D vizualizációkkal és elkészült projektekkel.' },
            { icon: 'Award', title: 'Szakmai profil', description: 'Díjak, képzettségek és szakterületek professzionális bemutatása.' },
            { icon: 'FileText', title: 'Ajánlatkérés', description: 'Részletes ajánlatkérő form, ami előszűri a komoly érdeklődőket.' },
            { icon: 'TrendingUp', title: 'SEO megjelenés', description: '„Építész + város" keresésekre optimalizálva a Google-ben.' },
        ],
        faqs: [
            { question: 'Miért fontos a portfólió weboldal egy építésznek?', answer: 'Az építészet vizuális szakma – a legjobb referencia a korábbi munkáid. Professzionális portfólió weboldal az online névjegykártyád.' },
            { question: 'Fel tudom tölteni a tervrajzokat és 3D képeket?', answer: 'Igen! Nagy felbontású képek, tervrajzok és akár videók feltöltését is támogatjuk.' },
            { question: 'Segít a Google megjelenésben?', answer: 'Igen, minden portfólió oldalt keresőoptimalizálunk, hogy az építész keresések során te jelenj meg.' },
        ],
        schemaType: 'Architect',
    },
    {
        slug: 'konyvveloknek',
        profession: 'Könyvelőknek',
        title: 'Weboldal Készítés Könyvelőknek | Könyvelői Weboldal | CyberLabs Web',
        metaDescription: 'Könyvelő weboldal készítés, ami bizalmat épít és ügyfeleket hoz. Szolgáltatás bemutató, árlista és online konzultáció foglalás.',
        heroSubtitle: 'Megbízható könyvelői weboldal, ami bemutatja szolgáltatásaidat és új ügyfeleket hoz.',
        benefits: [
            { icon: 'Calculator', title: 'Szolgáltatás lista', description: 'Átlátható szolgáltatás bemutató árakkal és csomagokkal a könnyű döntéshez.' },
            { icon: 'Shield', title: 'Bizalomépítés', description: 'Kamarai tagság, referenciák és tapasztalat kiemelése, ami megkülönböztet.' },
            { icon: 'Clock', title: 'Online konzultáció', description: 'Ingyenes konzultáció foglalás online, ami csökkenti a belépési küszöböt.' },
            { icon: 'TrendingUp', title: 'Lead generálás', description: '„Könyvelő + város" keresésekre optimalizálva a Google-ben.' },
        ],
        faqs: [
            { question: 'Miért van szüksége egy könyvelőnek weboldalra?', answer: 'A vállalkozók online keresnek könyvelőt. Professzionális weboldal nélkül láthatatlan vagy, és a versenytársaid kapják az ügyfeleket.' },
            { question: 'Milyen tartalom kell hozzá?', answer: 'Mi segítünk összeállítani! Alapvetően szolgáltatás lista, árak, bemutatkozás és referenciák kellenek.' },
            { question: 'Mennyibe kerül?', answer: 'Könyvelői weboldalunk 200.000 Ft-tól indul, ami tartalmazza a tervezést, fejlesztést és SEO optimalizálást.' },
        ],
        schemaType: 'AccountingService',
    },
    {
        slug: 'pszichologusoknak',
        profession: 'Pszichológusoknak',
        title: 'Weboldal Készítés Pszichológusoknak | Pszichológus Weboldal | CyberLabs Web',
        metaDescription: 'Pszichológus weboldal készítés, ami bizalmat és nyugalmat sugároz. Online időpontfoglalás, szakterületek bemutatása, GDPR megfelelőség.',
        heroSubtitle: 'Nyugalmat sugárzó pszichológus weboldal, ami segít a klienseknek megtenni az első lépést.',
        benefits: [
            { icon: 'Heart', title: 'Bizalomépítő design', description: 'Nyugodt, professzionális megjelenés, ami segíti a klienseket az első lépés megtételében.' },
            { icon: 'Calendar', title: 'Online foglalás', description: 'Diszkrét és egyszerű időpontfoglalás, ami csökkenti a belépési küszöböt.' },
            { icon: 'BookOpen', title: 'Szakterületek', description: 'Részletes szakterület bemutató, ami segíti a klienseket a megfelelő terapeuta kiválasztásában.' },
            { icon: 'Lock', title: 'Adatvédelem', description: 'Kiemelt adatvédelmi garanciák és GDPR megfelelőség a bizalomért.' },
        ],
        faqs: [
            { question: 'Miért fontos a weboldal egy pszichológusnak?', answer: 'A terápia keresés intim döntés – sokan először online tájékozódnak. Professzionális weboldal bizalmat épít és megkönnyíti az első lépést.' },
            { question: 'Diszkrét lesz a foglalási rendszer?', answer: 'Igen, a foglalási rendszer teljes mértékben diszkrét, titkosított kapcsolaton keresztül működik.' },
            { question: 'Segít-e ha online konzultációt is tartok?', answer: 'Igen! Online konzultáció lehetőséget is integrálhatunk, videóhívás foglalással együtt.' },
        ],
        schemaType: 'PsychologicalTreatment',
    },
    {
        slug: 'marketing-ugynoksegeknek',
        profession: 'Marketing Ügynökségeknek',
        title: 'Weboldal Készítés Marketing Ügynökségeknek | Ügynökségi Weboldal | CyberLabs Web',
        metaDescription: 'Marketing ügynökség weboldal készítés, ami a szakértelmedet tükrözi. Esettanulmányok, eredmények és lead generálás egy helyen.',
        heroSubtitle: 'Olyan ügynökségi weboldal, ami az eredményeidet mutatja – és közben új ügyfeleket hoz.',
        benefits: [
            { icon: 'BarChart3', title: 'Esettanulmányok', description: 'Meggyőző esettanulmányok számokkal és eredményekkel, amik eladják a szolgáltatásaid.' },
            { icon: 'Users', title: 'Csapat bemutató', description: 'Professzionális csapat bemutató, ami személyes kapcsolatot teremt.' },
            { icon: 'Target', title: 'Lead generálás', description: 'Optimalizált landing oldalak és CTA-k, amik érdeklődőket generálnak.' },
            { icon: 'Zap', title: 'Gyorsaság', description: 'Villámgyors betöltés, ami bizonyítja, hogy értesz a digitális világhoz.' },
        ],
        faqs: [
            { question: 'Miért kell egy marketing ügynökségnek külön weboldal?', answer: 'A saját weboldalad a legjobb referenciád. Ha az nem profi, a potenciális ügyfelek kétszer is meggondolják, hogy rád bízzák-e a marketingjüket.' },
            { question: 'Miben különbözik ez egy sablontól?', answer: 'Egyedi design és fejlesztés, ami tükrözi a márkádat. Nem sablon – valódi, unikális digitális élmény.' },
            { question: 'SEO-optimalizált lesz?', answer: 'Természetesen! Teljes technikai SEO, gyors betöltés és keresőbarát struktúra, hogy a Google is szeresse.' },
        ],
        schemaType: 'ProfessionalService',
    },
    {
        slug: 'edzo-es-fitness',
        profession: 'Edzőknek & Fitness',
        title: 'Weboldal Készítés Edzőknek | Fitness Weboldal | CyberLabs Web',
        metaDescription: 'Személyi edző és fitness weboldal készítés. Órarend, online foglalás, transzformációs galéria és csomagok bemutatása egy helyen.',
        heroSubtitle: 'Erős fitness weboldal, ami bemutatja eredményeidet és automatikusan hozza az új klienseket.',
        benefits: [
            { icon: 'Dumbbell', title: 'Transzformációk', description: 'Előtte-utána galéria, ami megmutatja a valós eredményeidet és motivál.' },
            { icon: 'Calendar', title: 'Órarend & foglalás', description: 'Online órarend és foglalási rendszer egyéni edzésekhez és csoportos órákhoz.' },
            { icon: 'ShoppingBag', title: 'Csomagok', description: 'Edzés csomagok és árak átlátható bemutatása, ami megkönnyíti a döntést.' },
            { icon: 'Video', title: 'Online edzés', description: 'Online edzésprogramok és videó tartalmak értékesítésének lehetősége.' },
        ],
        faqs: [
            { question: 'Miért fontos weboldal egy edzőnek?', answer: 'Az Instagramon túl kell lépni. Saját weboldallal professzionálisabb vagy, a Google keresőből is jönnek kliensek, és az online csomagokat is értékesítheted.' },
            { question: 'Lehet rajta online edzéstervet árulni?', answer: 'Igen! Digitális termékeket (edzéstervek, étrend) is értékesíthetsz a weboldaladon keresztül.' },
            { question: 'Mobilbarát lesz?', answer: 'Igen, az oldal tökéletesen működik telefonon is, ami az edzős célcsoport számára kulcsfontosságú.' },
        ],
        schemaType: 'SportsActivityLocation',
    },
    {
        slug: 'fotografusoknak',
        profession: 'Fotográfusoknak',
        title: 'Weboldal Készítés Fotográfusoknak | Fotós Portfólió Weboldal | CyberLabs Web',
        metaDescription: 'Fotós portfólió weboldal készítés lenyűgöző galéria rendszerrel. Mutasd meg a legjobb munkáidat és nyerj új megbízásokat online.',
        heroSubtitle: 'Lenyűgöző fotós portfólió, ami a munkáid szépségét mutatja és megbízásokat generál.',
        benefits: [
            { icon: 'Camera', title: 'Portfólió galéria', description: 'Gyönyörű, gyorsan betöltődő galéria rendszer, ami kiemeli a legjobb fotóidat.' },
            { icon: 'Layers', title: 'Kategóriák', description: 'Esküvő, portré, termék – kategorizált portfólió a könnyű navigációhoz.' },
            { icon: 'FileText', title: 'Árajánlat kérés', description: 'Egyszerű ajánlatkérő form, ami a dátumot és eseménytípust is bekéri.' },
            { icon: 'Zap', title: 'Gyors betöltés', description: 'Optimalizált képek és lazy loading, hogy a galéria villámgyorsan töltsön.' },
        ],
        faqs: [
            { question: 'Miért van szükségem weboldalra, ha van Instagram?', answer: 'Az Instagram korlátozott – saját weboldallal teljes kontrollod van a megjelenés felett, a Google keresőből is jönnek megbízók, és profibbnak tűnsz.' },
            { question: 'A képek gyorsan betöltődnek?', answer: 'Igen! Automatikus képoptimalizálást és lazy loading-ot használunk, hogy a galéria villámgyors legyen.' },
            { question: 'Lehet rajta ár és csomag bemutató?', answer: 'Igen, átlátható csomagokat és árazást jeleníthetünk meg, ami megkönnyíti az ügyfeleik döntését.' },
        ],
        schemaType: 'ProfessionalService',
    },
    {
        slug: 'allatorvosoknak',
        profession: 'Állatorvosoknak',
        title: 'Weboldal Készítés Állatorvosoknak | Állatorvosi Weboldal | CyberLabs Web',
        metaDescription: 'Állatorvosi weboldal készítés online időpontfoglalóval, ügyeleti információkkal és szolgáltatás bemutatóval. Professzionális online jelenlét.',
        heroSubtitle: 'Megbízható állatorvosi weboldal, ami tájékoztat, időpontot foglaltat és bizalmat épít.',
        benefits: [
            { icon: 'PawPrint', title: 'Szolgáltatások', description: 'Részletes szolgáltatás lista a megelőzéstől a műtétekig, árakkal együtt.' },
            { icon: 'Calendar', title: 'Online foglalás', description: 'Egyszerű időpontfoglalás, ami csökkenti a várakozási időt és az adminisztrációt.' },
            { icon: 'AlertCircle', title: 'Ügyeleti info', description: 'Ügyeleti rend és sürgősségi elérhetőségek jól láthatóan megjelenítve.' },
            { icon: 'Heart', title: 'Bizalom', description: 'Csapat bemutató és klinika fotók, amik bizalmat építenek a gazdiknál.' },
        ],
        faqs: [
            { question: 'Miért fontos weboldal egy állatorvosnak?', answer: 'A gazdik online keresnek állatorvost, különösen sürgős esetben. Weboldallal azonnal megtalálnak, és látják az ügyeleti információkat is.' },
            { question: 'Lehet rajta sürgősségi elérhetőség?', answer: 'Igen! Kiemelt helyen jelenítjük meg az ügyeleti számot és elérhetőséget, ami egy kattintással hívható.' },
            { question: 'Online foglalás lehetséges?', answer: 'Igen, beépített foglalási rendszerrel, ahol a gazdik kiválaszthatják az állat típusát és a szükséges vizsgálatot.' },
        ],
        schemaType: 'VeterinaryCare',
    },
    {
        slug: 'webshopoknak',
        profession: 'Webshopoknak',
        title: 'Webshop Készítés | E-commerce Weboldal | CyberLabs Web',
        metaDescription: 'Egyedi webshop készítés, ami elad. Modern design, gyors betöltés, mobilbarát és keresőoptimalizált e-commerce megoldás vállalkozásoknak.',
        heroSubtitle: 'Konverzió-optimalizált webshop, ami nem csak szép – ténylegesen elad.',
        benefits: [
            { icon: 'ShoppingCart', title: 'Konverzió fókusz', description: 'Minden elem a vásárlásra optimalizálva – a termékoldaltól a fizetésig.' },
            { icon: 'CreditCard', title: 'Online fizetés', description: 'Stripe, Barion, SimplePay integráció a magyar piac igényeire szabva.' },
            { icon: 'Truck', title: 'Szállítás integráció', description: 'GLS, DPD, Foxpost és más futárszolgálatok automatikus integrálása.' },
            { icon: 'TrendingUp', title: 'SEO & Marketing', description: 'Keresőoptimalizált termékoldal és remarketing pixel integráció.' },
        ],
        faqs: [
            { question: 'Miben jobb ez, mint a Shopify?', answer: 'Egyedi fejlesztésű, magyar fizetési rendszerekkel natívan kompatibilis, nincs havidíj a platformnak, és teljes testreszabhatóság.' },
            { question: 'Milyen fizetési módokat támogat?', answer: 'Barion, SimplePay, Stripe és bankkártyás fizetés is integrálható, utánvéttel kombinálva.' },
            { question: 'Hány terméket lehet felvinni?', answer: 'Korlátlan mennyiségű terméket, kategória és szűrő rendszerrel együtt.' },
        ],
        schemaType: 'Store',
    },
    {
        slug: 'peksegeknek',
        profession: 'Pékségeknek',
        title: 'Weboldal Készítés Pékségeknek | Pékség Weboldal | CyberLabs Web',
        metaDescription: 'Pékség weboldal készítés online rendeléssel, termékkatalógussal és nyitvatartással. Étvágyg erjesztő megjelenés, ami hozza a vásárlókat.',
        heroSubtitle: 'Étvágygerjesztő pékség weboldal, ami bemutatja finomságaidat és online rendelést tesz lehetővé.',
        benefits: [
            { icon: 'Cake', title: 'Termékkatalógus', description: 'Gyönyörű termékfotók kategóriákra bontva – kenyerek, péksütemények, torták.' },
            { icon: 'ShoppingBag', title: 'Online rendelés', description: 'Előrendelési lehetőség különleges alkalmakra – torták, rendezvények.' },
            { icon: 'MapPin', title: 'Helyi keresés', description: '„Pékség a közelben" keresésekre optimalizálva a Google-ben.' },
            { icon: 'Clock', title: 'Nyitvatartás', description: 'Mindig naprakész nyitvatartás és elérhetőségek a vásárlók kényelméért.' },
        ],
        faqs: [
            { question: 'Miért van szükség weboldal egy pékségnek?', answer: 'A vásárlók egyre gyakrabban keresnek online pékséget, különösen tortát vagy különleges kenyeret. Weboldallal a Google-ből is hozol vásárlókat.' },
            { question: 'Lehet rajta online rendelés?', answer: 'Igen! Torta és különleges termékek előrendelése egyszerűen megoldható az oldalon.' },
            { question: 'Könnyen frissíthető a kínálat?', answer: 'Igen, egyszerű szerkesztő felületen bármikor frissítheted a termékeket, árakat és képeket.' },
        ],
        schemaType: 'Bakery',
    },
];
