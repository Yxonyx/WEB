// ==============================
// Rottenbiller Static Site - Script
// ==============================

const translations = {
    hu: {
        page_title: "Polgári Elegancia Modern Köntösben - Rottenbiller utca",
        hero_subtitle: "Budapest • VII. kerület",
        hero_headline: "Polgári elegancia <br> <span>modern köntösben.</span>",
        hero_desc: "Egy 92 m²-es, teljes körűen felújított otthon az Állatorvostudományi Egyetem szomszédságában.",
        scroll_text: "Felfedezés",

        stat_area: "Alapterület",
        stat_bath: "Fürdőszoba",
        stat_sauna_val: "Szauna",
        stat_sauna_lbl: "Beépített",
        stat_cellar: "Pince",
        stat_ac_val: "Klíma",
        stat_ac_lbl: "Minden szobában",

        living_title: "Előtér, Nappali & Konyha",
        living_desc1: "Tágas, világos élettér, amely a lakás központi része. A nagy belmagasság és a hatalmas ablakok biztosítják a természetes fényt.",
        living_desc2: "A konyha jelenleg szerkezetkész, az új tulajdonos saját ízlése szerint alakíthatja ki álmai konyháját.",

        bed1_title: "1. Hálószoba",
        bed1_desc1: "Saját, privát fürdőszobával (zuhanyzó, bidé, Ariston vízmelegítő) rendelkezik.",
        bed1_desc2: "Ez a kialakítás biztosítja a teljes intimitást és kényelmet a mindennapokban.",

        bed2_title: "2. Hálószoba",
        bed2_desc1: "Második, különálló hálószoba saját kijárattal és privát térrel.",
        bed2_desc2: "Ideális vendégszobának, gyerekszobának, vagy irodaként való használatra.",

        bed3_title: "3. Hálószoba",
        bed3_desc1: "Harmadik szoba, amely további rugalmasságot biztosít.",
        bed3_desc2: "A lakás sokoldalúságát mutatja: akár dolgozószoba, gardrób, vagy további alvóhely.",

        bath_title: "Fürdőszobák & Wellness",
        bath_desc1_pre: "A lakásban ",
        bath_desc1_bold1: "2 fürdőszoba",
        bath_desc1_mid: " található. A második a nappaliból nyílik, és egy ",
        bath_desc1_bold2: "beépített szaunával",
        bath_desc1_post: " van felszerelve a teljes wellness élményért.",
        bath_desc2_pre: "Mindkét fürdőszobában ",
        bath_desc2_bold: "elektromos padlófűtés",
        bath_desc2_post: " (fűtőszőnyeg) található külön termosztáttal.",

        tech_title: "Műszaki Tartalom & Extrák",
        tech_li1: "Minden helyiségben <strong>Gree hűtő-fűtő klíma</strong>, <strong>H tarifás</strong>, kedvezményes éjszakai árammal üzemeltethető, minimális rezsiköltséggel.",
        tech_li2: "A klímák fűtésre és hűtésre is alkalmasak, <strong>nincs szükség gázra</strong>, az egész lakás elektromosan, modern és energiatakarékos módon üzemeltethető.",
        tech_li3: "Mindkét fürdőszobában <strong>elektromos padlófűtés</strong> (fűtőszőnyeg) külön termosztáttal.",
        tech_li4: "Modern, rejtett <strong>LED világítás</strong> biztosítja a hangulatos, energiahatékony tereket.",
        tech_li5: "Az ingatlanhoz tartozik egy kb. <strong>40 m²-es pincehelyiség</strong>, kiváló tárolási lehetőség.",
        tech_li6: "Zárt <strong>udvari beálló</strong> biztosított a parkoláshoz.",
        tech_li7: "Részben bútorozottan eladó.",

        desc_title: "Részletes Leírás",
        desc_prop_title: "Ingatlan Jellemzői",
        desc_prop_li1: "<strong>Lokáció:</strong> Budapest VII. kerület, Rottenbiller utca (Állatorvostudományi Egyetemmel szemben).",
        desc_prop_li2: "<strong>Méret:</strong> 92 m², teljes körűen felújított polgári lakás.",
        desc_prop_li3: "<strong>Wellness:</strong> 2 fürdőszoba, egyikben beépített szauna.",
        desc_prop_li4: "<strong>Komfort:</strong> Padlófűtés, Gree hűtő-fűtő klíma (H tarifa), rejtett LED világítás.",
        desc_extra_title: "Extrák & Potenciál",
        desc_extra_li1: "<strong>Konyha:</strong> Szerkezetkész, szabadon alakítható.",
        desc_extra_li2: "<strong>Tárolás & Parkolás:</strong> 40 m²-es pincehelyiség + zárt udvari beálló.",
        desc_extra_li3: "<strong>Hasznosítás:</strong> Airbnb nem engedélyezett – ideális saját otthonnak vagy hosszú távú bérbeadásra.",
        desc_extra_li4: "<strong>Kiemelt:</strong> Modern, energiatudatos, azonnal költözhető.",
        desc_footer: "<strong>Modern, komfortos és energiatudatos belvárosi otthon kiváló lokációban.</strong>",

        gallery_title: "Galéria",

        loc_title: "Lokáció",
        loc_main: "Budapest VII. kerület — Rottenbiller utca",
        loc_univ: "Állatorvostudományi Egyetemmel szemben",
        loc_sub: "Közlekedés, egyetemek, szolgáltatások gyorsan elérhetők",

        cta_title: "Felkeltette érdeklődésed?",
        cta_desc: "Ez az otthon nem csak egy ingatlan, hanem egy életérzés.<br class=\"desktop-only\"> Gyere el, nézd meg személyesen, és <strong>tegyél árajánlatot.</strong>",
        cta_call: "email küldése",

        promo_badge: "CyberLabsWeb",
        promo_title: "Szeretnéd te is így eladni ingatlanodat?",
        promo_desc: "Vagy ingatlanos vagy, és szeretnéd így hirdetni ügyfeleid ingatlanját? QR-alapú, egyedi landing oldalak, amelyek kiemelik az otthonokat a tömegből.",
        promo_btn: "Megoldást kérek →",

        footer_brand: "QR-alapú ingatlan landing oldalak",
        footer_legal1: "Az adatok tájékoztató jellegűek, a változtatás jogát fenntartjuk.",
        footer_legal2: "Airbnb korlátozás: a társasházi szabályozás szerint.",
        footer_copy: "© 2026 CyberLabsWeb • Budapest",

        modal_title: "Kapcsolatfelvétel",
        modal_desc: "Hívjon minket, vagy írjon emailt — szívesen segítünk!",
        modal_phone_label: "Telefonszám",
        modal_email_label: "Email cím",

        mobile_call: "Hívás",
        mobile_email: "Email"
    },
    en: {
        page_title: "Civic Elegance in a Modern Guise - Rottenbiller Street",
        hero_subtitle: "Budapest • District VII",
        hero_headline: "Civic elegance <br> <span>in a modern guise.</span>",
        hero_desc: "A 92 m² fully renovated home next to the University of Veterinary Medicine.",
        scroll_text: "Discover",

        stat_area: "Floor Area",
        stat_bath: "Bathrooms",
        stat_sauna_val: "Sauna",
        stat_sauna_lbl: "Built-in",
        stat_cellar: "Cellar",
        stat_ac_val: "AC",
        stat_ac_lbl: "In every room",

        living_title: "Entrance, Living Room & Kitchen",
        living_desc1: "Spacious, bright living space that serves as the heart of the apartment. High ceilings and huge windows ensure plenty of natural light.",
        living_desc2: "The kitchen is currently structurally ready, allowing the new owner to design their dream kitchen according to their own taste.",

        bed1_title: "Bedroom 1",
        bed1_desc1: "Has its own private bathroom (shower, bidet, Ariston water heater).",
        bed1_desc2: "This layout ensures complete privacy and comfort for everyday living.",

        bed2_title: "Bedroom 2",
        bed2_desc1: "Second separate bedroom with its own exit and private space.",
        bed2_desc2: "Ideal for use as a guest room, children's room, or home office.",

        bed3_title: "Bedroom 3",
        bed3_desc1: "Third room providing further flexibility.",
        bed3_desc2: "Shows the versatility of the apartment: can be a study, walk-in closet, or additional sleeping area.",

        bath_title: "Bathrooms & Wellness",
        bath_desc1_pre: "The apartment has ",
        bath_desc1_bold1: "2 bathrooms",
        bath_desc1_mid: ". The second opens from the living room and is equipped with a ",
        bath_desc1_bold2: "built-in sauna",
        bath_desc1_post: " for a full wellness experience.",
        bath_desc2_pre: "Both bathrooms feature ",
        bath_desc2_bold: "electric underfloor heating",
        bath_desc2_post: " (heating mat) with separate thermostats.",

        tech_title: "Technical Content & Extras",
        tech_li1: "<strong>Gree cooling-heating AC</strong> in every room, operating on <strong>H tariff</strong> with discounted night electricity, ensuring minimal utility costs.",
        tech_li2: "The ACs are suitable for both heating and cooling, <strong>no gas needed</strong>, the entire apartment operates electrically in a modern and energy-efficient way.",
        tech_li3: "<strong>Electric underfloor heating</strong> (heating mat) with separate thermostats in both bathrooms.",
        tech_li4: "Modern, hidden <strong>LED lighting</strong> ensures cozy, energy-efficient spaces.",
        tech_li5: "The property includes an approx. <strong>40 m² cellar</strong>, providing excellent storage opportunities.",
        tech_li6: "Closed <strong>courtyard parking</strong> is provided.",
        tech_li7: "For sale partly furnished.",

        desc_title: "Detailed Description",
        desc_prop_title: "Property Features",
        desc_prop_li1: "<strong>Location:</strong> Budapest District VII, Rottenbiller Street (opposite the University of Veterinary Medicine).",
        desc_prop_li2: "<strong>Size:</strong> 92 m², fully renovated civic apartment.",
        desc_prop_li3: "<strong>Wellness:</strong> 2 bathrooms, one with a built-in sauna.",
        desc_prop_li4: "<strong>Comfort:</strong> Underfloor heating, Gree cooling-heating AC (H tariff), hidden LED lighting.",
        desc_extra_title: "Extras & Potential",
        desc_extra_li1: "<strong>Kitchen:</strong> Structurally ready, customizable.",
        desc_extra_li2: "<strong>Storage & Parking:</strong> 40 m² cellar + closed courtyard parking.",
        desc_extra_li3: "<strong>Utilization:</strong> Airbnb not allowed – ideal for own home or long-term rental.",
        desc_extra_li4: "<strong>Highlighted:</strong> Modern, energy-conscious, ready to move in.",
        desc_footer: "<strong>Modern, comfortable, and energy-conscious downtown home in an excellent location.</strong>",

        gallery_title: "Gallery",

        loc_title: "Location",
        loc_main: "Budapest District VII — Rottenbiller Street",
        loc_univ: "Opposite the University of Veterinary Medicine",
        loc_sub: "Transport, universities, services quickly accessible",

        cta_title: "Interested?",
        cta_desc: "This home is not just a property, it's a lifestyle.<br class=\"desktop-only\"> Come and see it in person, and <strong>make an offer.</strong>",
        cta_call: "Send Email",

        promo_badge: "CyberLabsWeb",
        promo_title: "Want to sell your property like this?",
        promo_desc: "Or are you a real estate agent wanting to advertise your clients' properties this way? QR-based, unique landing pages that make homes stand out from the crowd.",
        promo_btn: "I want a solution →",

        footer_brand: "QR-based property landing pages",
        footer_legal1: "Data is for informational purposes only, subject to change.",
        footer_legal2: "Airbnb restriction: according to condominium regulations.",
        footer_copy: "© 2026 CyberLabsWeb • Budapest",

        modal_title: "Contact",
        modal_desc: "Call us or send an email — we are happy to help!",
        modal_phone_label: "Phone Number",
        modal_email_label: "Email Address",

        mobile_call: "Call",
        mobile_email: "Email"
    }
};

document.addEventListener('DOMContentLoaded', () => {

    // ========== LANGUAGE SWITCHER LOGIC ==========
    const btnHu = document.getElementById('lang-btn-hu');
    const btnEn = document.getElementById('lang-btn-en');

    function setLanguage(lang) {
        if (!translations[lang]) return;

        // Update HTML lang attribute
        document.documentElement.lang = lang;

        // Update Document Title
        if (translations[lang].page_title) {
            document.title = translations[lang].page_title;
        }

        // Update all data-i18n elements
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (translations[lang][key]) {
                if (translations[lang][key].includes('<')) {
                    el.innerHTML = translations[lang][key];
                } else {
                    el.textContent = translations[lang][key];
                }
            }
        });

        // Update buttons state
        if (lang === 'hu') {
            if (btnHu) btnHu.classList.add('active');
            if (btnEn) btnEn.classList.remove('active');
        } else {
            if (btnEn) btnEn.classList.add('active');
            if (btnHu) btnHu.classList.remove('active');
        }

        // Save preference
        localStorage.setItem('preferredLanguage', lang);
    }

    // Attach listeners
    if (btnHu) btnHu.addEventListener('click', () => setLanguage('hu'));
    if (btnEn) btnEn.addEventListener('click', () => setLanguage('en'));

    // Initialize Language
    function initLanguage() {
        const savedLang = localStorage.getItem('preferredLanguage');

        if (savedLang) {
            setLanguage(savedLang);
        } else {
            // IP-based detection
            fetch('https://ipapi.co/json/')
                .then(response => response.json())
                .then(data => {
                    const country = data.country_code; // hungary is HU
                    if (country !== 'HU') {
                        setLanguage('en');
                    } else {
                        setLanguage('hu');
                    }
                })
                .catch(err => {
                    console.log('IP detection failed, defaulting to HU', err);
                    setLanguage('hu');
                });
        }
    }

    initLanguage();


    // ========== GALLERY IMAGES ==========
    // All image filenames in assets/ folder
    const allImages = [
        '001.webp', '002.webp', '003.webp', '004.webp', '006.webp', '007.webp', '008.webp', '009.webp',
        '010.webp', '011.webp', '012.webp', '013.webp', '014.webp', '015.webp', '016.webp', '017.webp',
        '018.webp', '020.webp', '021.webp', '022.webp', '023.webp', '024.webp', '026.webp', '027.webp',
        '028.webp', '029.webp', '030.webp', '031.webp', '033.webp', '034.webp', '035.webp', '036.webp',
        '037.webp', '038.webp', '039.webp', '040.webp', '041.webp', '042.webp', '043.webp', '044.webp',
        '045.webp', '046.webp', '047.webp', '048.webp', '049.webp', '050.webp', '051.webp', '052.webp',
        '053.webp', '054.webp', '055.webp', '056.webp', '057.webp', '058.webp', '059.webp',
        'belsokert2.webp', 'belsőkert.webp', 'hero.webp'
    ];

    const IMAGES_PER_PAGE = 12;
    const totalPages = Math.ceil(allImages.length / IMAGES_PER_PAGE);
    let currentPage = 0;

    const galleryGrid = document.getElementById('gallery-grid');
    const paginationControls = document.getElementById('pagination-controls');

    // ========== RENDER PAGINATION BUTTONS ==========
    function renderPagination() {
        if (!paginationControls) return;
        paginationControls.innerHTML = '';

        // Prev arrow
        const prevBtn = document.createElement('button');
        prevBtn.className = 'page-btn page-arrow';
        prevBtn.innerHTML = '&lsaquo;';
        prevBtn.disabled = currentPage === 0;
        prevBtn.addEventListener('click', () => goToPage(currentPage - 1));
        paginationControls.appendChild(prevBtn);

        // Page number buttons
        for (let i = 0; i < totalPages; i++) {
            const btn = document.createElement('button');
            btn.className = 'page-btn' + (i === currentPage ? ' active' : '');
            btn.textContent = i + 1;
            btn.addEventListener('click', () => goToPage(i));
            paginationControls.appendChild(btn);
        }

        // Next arrow
        const nextBtn = document.createElement('button');
        nextBtn.className = 'page-btn page-arrow';
        nextBtn.innerHTML = '&rsaquo;';
        nextBtn.disabled = currentPage >= totalPages - 1;
        nextBtn.addEventListener('click', () => goToPage(currentPage + 1));
        paginationControls.appendChild(nextBtn);
    }

    function goToPage(page) {
        if (page < 0 || page >= totalPages) return;
        currentPage = page;
        renderGalleryPage();
        const gallery = document.getElementById('gallery');
        if (gallery) gallery.scrollIntoView({ behavior: 'smooth' });
    }

    // ========== RENDER GALLERY PAGE ==========
    function renderGalleryPage() {
        if (!galleryGrid) return;

        galleryGrid.innerHTML = '';

        const start = currentPage * IMAGES_PER_PAGE;
        const end = Math.min(start + IMAGES_PER_PAGE, allImages.length);
        const pageImages = allImages.slice(start, end);

        pageImages.forEach((filename) => {
            const item = document.createElement('div');
            item.className = 'gallery-item';

            const img = document.createElement('img');
            img.src = 'assets/' + filename;
            img.alt = 'Rottenbiller lakás';
            img.loading = 'lazy';

            item.appendChild(img);

            // Click to open lightbox
            item.addEventListener('click', () => {
                openLightbox(filename);
            });

            galleryGrid.appendChild(item);
        });

        renderPagination();
    }

    // Initial render
    renderGalleryPage();


    // ========== LIGHTBOX ==========
    let currentLightboxIndex = 0;
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightboxImage');

    window.openLightbox = function (filename) {
        if (!lightbox || !lightboxImg) return;

        const globalIndex = allImages.indexOf(filename);
        if (globalIndex === -1) return;

        currentLightboxIndex = globalIndex;
        lightboxImg.src = 'assets/' + allImages[currentLightboxIndex];
        lightbox.classList.remove('hidden');
        document.body.style.overflow = 'hidden';
    };

    window.closeLightbox = function () {
        if (lightbox) lightbox.classList.add('hidden');
        document.body.style.overflow = '';
    };

    window.nextImage = function (e) {
        if (e) e.stopPropagation();
        currentLightboxIndex = (currentLightboxIndex + 1) % allImages.length;
        lightboxImg.src = 'assets/' + allImages[currentLightboxIndex];
    };

    window.prevImage = function (e) {
        if (e) e.stopPropagation();
        currentLightboxIndex = (currentLightboxIndex - 1 + allImages.length) % allImages.length;
        lightboxImg.src = 'assets/' + allImages[currentLightboxIndex];
    };

    // Lightbox click-to-close
    if (lightbox) {
        lightbox.addEventListener('click', (e) => {
            if (e.target === lightbox) window.closeLightbox();
        });

        // Touch swipe support for lightbox
        let touchStartX = 0;
        let touchEndX = 0;

        lightbox.addEventListener('touchstart', (e) => {
            touchStartX = e.changedTouches[0].screenX;
        }, { passive: true });

        lightbox.addEventListener('touchend', (e) => {
            touchEndX = e.changedTouches[0].screenX;
            const diff = touchStartX - touchEndX;
            if (Math.abs(diff) > 50) {
                if (diff > 0) {
                    window.nextImage();
                } else {
                    window.prevImage();
                }
            }
        }, { passive: true });
    }

    // Lightbox nav buttons (explicit)
    const lbClose = document.querySelector('.lightbox-close');
    if (lbClose) lbClose.addEventListener('click', (e) => { e.stopPropagation(); window.closeLightbox(); });

    const lbPrev = document.querySelector('.lightbox-nav.prev');
    if (lbPrev) lbPrev.addEventListener('click', (e) => { e.stopPropagation(); window.prevImage(e); });

    const lbNext = document.querySelector('.lightbox-nav.next');
    if (lbNext) lbNext.addEventListener('click', (e) => { e.stopPropagation(); window.nextImage(e); });


    // ========== HERO SLIDER ==========
    const heroBgs = document.querySelectorAll('.hero-bg');
    let currentHeroIndex = 0;

    function rotateHero() {
        if (heroBgs.length === 0) return;
        heroBgs[currentHeroIndex].classList.remove('active');
        currentHeroIndex = (currentHeroIndex + 1) % heroBgs.length;
        heroBgs[currentHeroIndex].classList.add('active');
    }

    if (heroBgs.length > 0) {
        setInterval(rotateHero, 5000);
    }


    // ========== CAROUSEL LOGIC ==========
    document.querySelectorAll('.carousel-container').forEach(container => {
        const track = container.querySelector('.carousel-track');
        if (!track) return;

        const slides = Array.from(track.children);
        const nextBtn = container.querySelector('.next');
        const prevBtn = container.querySelector('.prev');
        let idx = 0;

        function updateCarousel() {
            track.style.transform = `translateX(-${idx * 100}%)`;
        }

        if (nextBtn) {
            nextBtn.addEventListener('click', () => {
                idx = (idx + 1) % slides.length;
                updateCarousel();
            });
        }
        if (prevBtn) {
            prevBtn.addEventListener('click', () => {
                idx = (idx - 1 + slides.length) % slides.length;
                updateCarousel();
            });
        }
    });


    // ========== MODAL LOGIC ==========
    const modal = document.getElementById('callbackModal');
    const form = document.getElementById('callbackForm');
    const successMessage = document.getElementById('successMessage');

    window.openModal = function () {
        if (!modal) return;
        modal.classList.remove('hidden');
        void modal.offsetWidth;
        modal.classList.add('active');
    };

    window.closeModal = function () {
        if (!modal) return;
        modal.classList.remove('active');
        setTimeout(() => {
            modal.classList.add('hidden');
            if (form) { form.style.display = 'block'; form.reset(); }
            if (successMessage) successMessage.classList.add('hidden');
        }, 300);
    };

    if (modal) {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) window.closeModal();
        });
    }

    window.handleFormSubmit = function (e) {
        e.preventDefault();
        if (!form) return;

        const btn = form.querySelector('button[type="submit"]');
        const originalText = btn.textContent;
        btn.textContent = 'Küldés folyamatban...';
        btn.disabled = true;

        setTimeout(() => {
            form.style.display = 'none';
            if (successMessage) successMessage.classList.remove('hidden');
            btn.textContent = originalText;
            btn.disabled = false;
            setTimeout(() => window.closeModal(), 3000);
        }, 1500);
    };


    // ========== KEYBOARD SHORTCUTS ==========
    document.addEventListener('keydown', (e) => {
        if (lightbox && !lightbox.classList.contains('hidden')) {
            if (e.key === 'Escape') window.closeLightbox();
            if (e.key === 'ArrowRight') window.nextImage();
            if (e.key === 'ArrowLeft') window.prevImage();
        }
        if (modal && modal.classList.contains('active')) {
            if (e.key === 'Escape') window.closeModal();
        }
    });


    // ========== SCROLL TO CONTENT ==========
    window.scrollToContent = function () {
        const section = document.getElementById('content-start');
        if (section) section.scrollIntoView({ behavior: 'smooth' });
    };
    // ========== TYPEWRITER ANIMATION ==========
    const typewriterElements = document.querySelectorAll('.typewriter');
    const typedElements = new Set();

    function typeWriter(element) {
        if (typedElements.has(element)) return;
        typedElements.add(element);

        const text = element.getAttribute('data-text');
        if (!text) return;

        element.textContent = '';
        element.style.visibility = 'visible';
        let i = 0;
        const speed = Math.max(20, Math.min(40, 1500 / text.length));

        function type() {
            if (i < text.length) {
                element.textContent += text.charAt(i);
                i++;
                setTimeout(type, speed);
            }
        }
        type();
    }

    if (typewriterElements.length > 0) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    // Stagger multiple typewriter elements
                    const allTw = Array.from(typewriterElements);
                    const idx = allTw.indexOf(entry.target);
                    setTimeout(() => typeWriter(entry.target), idx * 800);
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });

        typewriterElements.forEach(el => {
            el.style.visibility = 'hidden';
            observer.observe(el);
        });
    }

});
