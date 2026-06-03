/* =========================================================
   APARTMANI BAN — interactions
   - SR / EN i18n toggle (default: SR)
   - Mobile drawer toggle
   - Sticky-nav scrolled state
   - Active link on scroll
   ========================================================= */

const BOOKING_URL = "https://www.booking.com/hotel/rs/ban.html";

/* Live data loaded from booking-data.json — defaults match the hardcoded HTML */
let BOOKING = { reviews: 112, score: "9.7" };

function updateBookingElements() {
  document.querySelectorAll("[data-booking='reviews']").forEach(el => {
    el.textContent = BOOKING.reviews;
  });
  document.querySelectorAll("[data-booking='score']").forEach(el => {
    el.textContent = BOOKING.score;
  });
}

const I18N = {
  sr: {
    "meta.title": "Apartmani BAN — Vrbas | Smeštaj i gostoprimstvo",
    "meta.description": "Apartmani BAN u Vrbasu — udoban i čist smeštaj sa privatnim parkingom. Ocena 9.7 na Booking.com. Rezervišite svoj boravak.",

    "nav.about": "O nama",
    "nav.apartments": "Apartmani",
    "nav.amenities": "Sadržaji",
    "nav.location": "Lokacija",
    "nav.reviews": "Recenzije",
    "nav.contact": "Kontakt",
    "nav.checkin": "Prijava",
    "nav.cta": "Rezerviši",

    "mobile.book": "Rezerviši na Booking.com",

    "hero.eyebrow": "Vrbas · Srbija",
    "hero.title.line1": "Vaš dom dok",
    "hero.title.line2": "ste daleko od kuće.",
    "hero.subtitle": "Uredni apartmani u Vrbasu sa privatnim parkingom, klimom i čajnom kuhinjom. Ocena <strong>9.7/10</strong> na Booking.com — <span data-booking='reviews'>112</span> verifikovanih utisaka.",
    "hero.ctaPrimary": "Rezerviši na Booking.com",
    "hero.ctaSecondary": "Pogledaj apartmane",
    "hero.meta.rating": "Ocena gostiju",
    "hero.meta.reviews": "verifikovanih utisaka",
    "hero.meta.center": "do centra grada",
    "hero.meta.highway": "par km od autoputa",
    "hero.scroll": "Saznaj više",

    "about.eyebrow": "O nama",
    "about.title": "Topla dobrodošlica i besprekorna čistoća.",
    "about.lead": "Apartmani BAN nalaze se u Vrbasu, na samo 1.2 km od centra grada i nekoliko kilometara od međunarodnog autoputa E-75. Pravo mesto za odmor, posao ili usputno noćenje.",
    "about.body": "Apartmani su u prizemlju, sa privatnim ulazom, klimom, čajnom kuhinjom, privatnim kupatilom i trpezarijskim stolom. Besplatan Wi-Fi je dostupan u celom objektu, kao i privatni parking ispred kuće.",
    "about.pill1": "Privatni parking",
    "about.pill2": "Besplatan Wi-Fi",
    "about.pill3": "Klima",
    "about.pill4": "Čajna kuhinja",
    "about.pill5": "Privatno kupatilo",
    "about.rating.label": "Izvanredno",
    "about.rating.source": "Booking.com",
    "about.metric.staff": "Osoblje",
    "about.metric.clean": "Čistoća",
    "about.metric.value": "Odnos kvalitet/cena",
    "about.metric.wifi": "Besplatan Wi-Fi",
    "about.card.link": "Pročitaj sve utiske →",

    "apartments.eyebrow": "Smeštaj",
    "apartments.title": "Tri apartmana, jedan standard udobnosti.",
    "apartments.lead": "Svi apartmani su u prizemlju, sa privatnim ulazom, privatnim kupatilom i čajnom kuhinjom. Uvek čisti i opremljeni za vaš dolazak.",
    "apartments.tag1": "Jednosobni apartman",
    "apartments.tag2": "Standardni apartman · do 4 osobe",
    "apartments.tag3": "Apartman 03 · Novo",
    "apartments.name1": "Standard Apartman",
    "apartments.name2": "Studio Apartman",
    "apartments.name3": "Treći apartman",
    "apartments.desc1": "Apartman u prizemlju sa privatnim ulazom, klimom, čajnom kuhinjom i privatnim kupatilom. Idealno za dvoje do troje gostiju.",
    "apartments.desc2": "Prostrani jednosobni apartman sa dnevnim boravkom i čajnom kuhinjom. Pogodan za porodice i grupe — može da primi do četiri osobe.",
    "apartments.desc3": "Naš najnoviji apartman u Vrbasu — sa istim standardom čistoće i opreme kao i ostali.",
    "apartments.coming": "Slike uskoro",
    "apartments.bed.single": "1 jednostruki krevet",
    "apartments.bed.double": "1 bračni krevet",
    "apartments.bed.bedroom": "Spavaća: 1 jednostruki + 1 bračni + 1 sofa",
    "apartments.bed.living": "Dnevni boravak: 3 sofa kreveta",
    "apartments.bed.byPhone": "Konfiguracija na zahtev",
    "apartments.feat.bath": "Privatno kupatilo",
    "apartments.feat.ac": "Klima",
    "apartments.feat.kitchen": "Čajna kuhinja",
    "apartments.feat.diningtable": "Trpezarijski sto",
    "apartments.feat.wardrobe": "Garderober",
    "apartments.feat.wifi": "Besplatan Wi-Fi",
    "apartments.feat.tv": "TV",
    "apartments.feat.parking": "Parking",
    "apartments.book": "Rezerviši na Booking.com",
    "apartments.bookByPhone": "Rezerviši pozivom",
    "gallery.more": "na Booking.com",

    "amenities.eyebrow": "Sadržaji",
    "amenities.title": "Sve što vam treba — već je u sobi.",
    "amenities.item1.title": "Privatni parking",
    "amenities.item1.text": "Besplatan parking ispred objekta, kao i parking za bicikle i motore.",
    "amenities.item2.title": "Besplatan Wi-Fi",
    "amenities.item2.text": "Brz internet u svim apartmanima — savršen i za rad sa daljine.",
    "amenities.item3.title": "Klima",
    "amenities.item3.text": "Klima uređaj u svakoj jedinici — prijatno tokom cele godine.",
    "amenities.item4.title": "Čajna kuhinja",
    "amenities.item4.text": "Električni bokal i trpezarijski sto — idealno za kafu, čaj i lake zalogaje.",
    "amenities.item5.title": "Peškiri i toaletni set",
    "amenities.item5.text": "Sveži peškiri, šamponi, fen, papuče — sve već pripremljeno.",
    "amenities.item6.title": "Vodič po komšiluku",
    "amenities.item6.text": "Naša uputstva do najboljih restorana, pekara i prodavnica u kraju.",

    "location.eyebrow": "Lokacija",
    "location.title": "Vrbas — sve nadomak ruke.",
    "location.lead": "Apartmani BAN se nalaze na adresi <strong>Ise Sekickog 63, 21460 Vrbas</strong>. U neposrednoj blizini su centar za fizičku kulturu, pravoslavni hram, ambulanta, prodavnica, pekara i restoran.",
    "location.item1": "do centra grada",
    "location.item2": "međunarodni autoput — par kilometara",
    "location.item3": "do pekare i prodavnice",
    "location.item4": "do restorana i ambulante",
    "location.item5": "ocena lokacije na Booking.com",
    "location.cta": "Otvori na Google mapama",

    "reviews.eyebrow": "Recenzije gostiju",
    "reviews.title": "Pravi gosti. Pravi utisci.",
    "reviews.scoreText": "/ 10 · <span data-booking='reviews'>112</span> verifikovanih recenzija na Booking.com",
    "reviews.source": "Sve recenzije su verifikovani utisci sa",

    "cta.eyebrow": "Spremni za dolazak?",
    "cta.title": "Rezervišite svoj boravak u Vrbasu.",
    "cta.lead": "Najbolje cene su uvek direktno preko Booking.com. Imate pitanje? Pozovite Đorđa — odgovaramo brzo i lično.",
    "cta.book": "Rezerviši na Booking.com",
    "cta.host": "Vaš domaćin — Đorđe · Govorimo srpski, engleski i hrvatski.",

    "footer.tagline": "Apartmani u Vrbasu sa ocenom 9.7 na Booking.com.",
    "footer.contact": "Kontakt",
    "footer.host": "Đorđe, domaćin",
    "footer.city": "21460 Vrbas, Srbija",
    "footer.links": "Navigacija",
    "footer.book": "Rezervacije",
    "footer.bookingText": "9.7 / 10 · <span data-booking='reviews'>112</span> utisaka",
    "footer.crafted": "Sa pažnjom za goste.",

    "sticky.call": "Pozovi",
    "sticky.book": "Rezerviši na Booking.com",

    "checkin.eyebrow": "Informacije",
    "checkin.title": "Check-in & Check-out",
    "checkin.in.label": "Check-in",
    "checkin.in.time": "15:00 – 18:00",
    "checkin.out.label": "Check-out",
    "checkin.out.time": "do 10:30",
    "checkin.late.label": "Kasna prijava",
    "checkin.late.text": "Moguća uz prethodnu najavu",
    "checkin.cancel.label": "Otkazivanje",
    "checkin.cancel.text": "Besplatno otkazivanje — pogledajte uslove na Booking.com",
    "cta.whatsapp": "WhatsApp"
  },

  en: {
    "meta.title": "Apartments BAN — Vrbas | Stay & Hospitality",
    "meta.description": "Apartments BAN in Vrbas — clean, comfortable stays with private parking. Rated 9.7 on Booking.com. Book your visit today.",

    "nav.about": "About",
    "nav.apartments": "Apartments",
    "nav.amenities": "Amenities",
    "nav.location": "Location",
    "nav.reviews": "Reviews",
    "nav.contact": "Contact",
    "nav.checkin": "Check-in",
    "nav.cta": "Book now",

    "mobile.book": "Book on Booking.com",

    "hero.eyebrow": "Vrbas · Serbia",
    "hero.title.line1": "Your home",
    "hero.title.line2": "away from home.",
    "hero.subtitle": "Tidy apartments in Vrbas with private parking, air-conditioning and a fully equipped kitchenette. Rated <strong>9.7/10</strong> on Booking.com — <span data-booking='reviews'>112</span> verified reviews.",
    "hero.ctaPrimary": "Book on Booking.com",
    "hero.ctaSecondary": "View apartments",
    "hero.meta.rating": "Guest rating",
    "hero.meta.reviews": "verified reviews",
    "hero.meta.center": "to city centre",
    "hero.meta.highway": "km from the motorway",
    "hero.scroll": "Discover more",

    "about.eyebrow": "About",
    "about.title": "A warm welcome and immaculate cleanliness.",
    "about.lead": "Apartments BAN are located in Vrbas, just 1.2 km from the city centre and a few kilometres from the international E-75 motorway. The right place for a holiday, a business trip or an overnight stay.",
    "about.body": "Apartments are on the ground floor, with a private entrance, air-conditioning, a kitchenette, a private bathroom and a dining table. Free Wi-Fi is available throughout, alongside free private parking in front of the building.",
    "about.pill1": "Private parking",
    "about.pill2": "Free Wi-Fi",
    "about.pill3": "Air conditioning",
    "about.pill4": "Kitchenette",
    "about.pill5": "Private bathroom",
    "about.rating.label": "Exceptional",
    "about.rating.source": "Booking.com",
    "about.metric.staff": "Staff",
    "about.metric.clean": "Cleanliness",
    "about.metric.value": "Value for money",
    "about.metric.wifi": "Free Wi-Fi",
    "about.card.link": "Read all reviews →",

    "apartments.eyebrow": "Stay",
    "apartments.title": "Three apartments, one standard of comfort.",
    "apartments.lead": "Every unit is on the ground floor with a private entrance, private bathroom and kitchenette. Always clean and fully prepared for your arrival.",
    "apartments.tag1": "One-Bedroom Apartment",
    "apartments.tag2": "Standard Apartment · up to 4 guests",
    "apartments.tag3": "Apartment 03 · New",
    "apartments.name1": "Standard Apartment",
    "apartments.name2": "Studio Apartment",
    "apartments.name3": "Third Apartment",
    "apartments.desc1": "A ground-floor apartment with a private entrance, air-conditioning, kitchenette and private bathroom. Ideal for two or three guests.",
    "apartments.desc2": "A larger apartment with a separate bedroom and living area. Great for families and groups — sleeps up to four people.",
    "apartments.desc3": "Our newest apartment in Vrbas — same standard of cleanliness and equipment as the others.",
    "apartments.coming": "Photos coming soon",
    "apartments.bed.single": "1 twin bed",
    "apartments.bed.double": "1 full bed",
    "apartments.bed.bedroom": "Bedroom: 1 twin + 1 full + 1 sofa bed",
    "apartments.bed.living": "Living room: 3 sofa beds",
    "apartments.bed.byPhone": "Configuration on request",
    "apartments.feat.bath": "Private bathroom",
    "apartments.feat.ac": "Air conditioning",
    "apartments.feat.kitchen": "Kitchenette",
    "apartments.feat.diningtable": "Dining table",
    "apartments.feat.wardrobe": "Wardrobe",
    "apartments.feat.wifi": "Free Wi-Fi",
    "apartments.feat.tv": "TV",
    "apartments.feat.parking": "Parking",
    "apartments.book": "Book on Booking.com",
    "apartments.bookByPhone": "Book by phone",
    "gallery.more": "on Booking.com",

    "amenities.eyebrow": "Amenities",
    "amenities.title": "Everything you need — already in the room.",
    "amenities.item1.title": "Private parking",
    "amenities.item1.text": "Free parking in front of the building, plus parking for bicycles and motorcycles.",
    "amenities.item2.title": "Free Wi-Fi",
    "amenities.item2.text": "Fast internet in every apartment — perfect for remote work, too.",
    "amenities.item3.title": "Air conditioning",
    "amenities.item3.text": "A/C in every unit — comfortable all year round.",
    "amenities.item4.title": "Kitchenette",
    "amenities.item4.text": "Electric kettle, kitchenware, dining table — everything for a comfortable stay.",
    "amenities.item5.title": "Towels & toiletries",
    "amenities.item5.text": "Fresh towels, shampoos, hair dryer, slippers — already prepared for you.",
    "amenities.item6.title": "Neighbourhood guide",
    "amenities.item6.text": "Our directions to the best restaurants, bakeries and shops around.",

    "location.eyebrow": "Location",
    "location.title": "Vrbas — everything within reach.",
    "location.lead": "Apartments BAN are located at <strong>Ise Sekickog 63, 21460 Vrbas</strong>. Nearby are the centre for physical culture, the Orthodox temple, the ambulance, a shop, a bakery and a restaurant.",
    "location.item1": "to the city centre",
    "location.item2": "international motorway — a few kilometres",
    "location.item3": "to the bakery and shop",
    "location.item4": "to the restaurant and ambulance",
    "location.item5": "location rating on Booking.com",
    "location.cta": "Open in Google Maps",

    "reviews.eyebrow": "Guest reviews",
    "reviews.title": "Real guests. Real reviews.",
    "reviews.scoreText": "/ 10 · <span data-booking='reviews'>112</span> verified reviews on Booking.com",
    "reviews.source": "All reviews are verified guest opinions from",

    "cta.eyebrow": "Ready to come over?",
    "cta.title": "Book your stay in Vrbas.",
    "cta.lead": "The best rates are always directly on Booking.com. Have a question? Call Djordje — we reply quickly and personally.",
    "cta.book": "Book on Booking.com",
    "cta.host": "Your host — Djordje · We speak Serbian, English and Croatian.",

    "footer.tagline": "Apartments in Vrbas rated 9.7 on Booking.com.",
    "footer.contact": "Contact",
    "footer.host": "Djordje, host",
    "footer.city": "21460 Vrbas, Serbia",
    "footer.links": "Navigation",
    "footer.book": "Reservations",
    "footer.bookingText": "9.7 / 10 · <span data-booking='reviews'>112</span> reviews",
    "footer.crafted": "Crafted with care for guests.",

    "sticky.call": "Call",
    "sticky.book": "Book on Booking.com",

    "checkin.eyebrow": "Info",
    "checkin.title": "Check-in & Check-out",
    "checkin.in.label": "Check-in",
    "checkin.in.time": "15:00 – 18:00",
    "checkin.out.label": "Check-out",
    "checkin.out.time": "until 10:30",
    "checkin.late.label": "Late check-in",
    "checkin.late.text": "Available upon prior notice",
    "checkin.cancel.label": "Cancellation",
    "checkin.cancel.text": "Free cancellation — see conditions on Booking.com",
    "cta.whatsapp": "WhatsApp"
  }
};

/* ---------- Language switching ---------- */
function setLanguage(lang) {
  if (!I18N[lang]) return;

  document.documentElement.setAttribute("lang", lang);

  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    const value = I18N[lang][key];
    if (value == null) return;

    if (el.tagName === "META") {
      el.setAttribute("content", value);
    } else if (el.tagName === "TITLE") {
      el.textContent = value;
      document.title = value;
    } else {
      el.innerHTML = value;
    }
  });

  document.querySelectorAll(".lang__btn").forEach(btn => {
    const isActive = btn.dataset.lang === lang;
    btn.classList.toggle("is-active", isActive);
    btn.setAttribute("aria-pressed", isActive ? "true" : "false");
  });

  try { localStorage.setItem("ban_lang", lang); } catch (_) {}

  updateBookingElements();
}

/* SR by default; switch only if user previously chose another */
const storedLang = (() => {
  try { return localStorage.getItem("ban_lang"); } catch (_) { return null; }
})();
setLanguage(storedLang && I18N[storedLang] ? storedLang : "sr");

document.querySelectorAll(".lang__btn").forEach(btn => {
  btn.addEventListener("click", () => setLanguage(btn.dataset.lang));
});


/* ---------- Mobile drawer ---------- */
const navToggle = document.getElementById("navToggle");
const mobileMenu = document.getElementById("mobileMenu");

function setMenuOpen(open) {
  navToggle.classList.toggle("is-open", open);
  mobileMenu.classList.toggle("is-open", open);
  navToggle.setAttribute("aria-expanded", open ? "true" : "false");
  mobileMenu.setAttribute("aria-hidden", open ? "false" : "true");
  document.body.classList.toggle("no-scroll", open);
}

navToggle.addEventListener("click", () => {
  setMenuOpen(!mobileMenu.classList.contains("is-open"));
});

mobileMenu.addEventListener("click", (e) => {
  const t = e.target;
  if (t.tagName === "A") setMenuOpen(false);
});

window.addEventListener("resize", () => {
  if (window.innerWidth > 1024) setMenuOpen(false);
});

/* Close on Escape */
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && mobileMenu.classList.contains("is-open")) setMenuOpen(false);
});


/* ---------- Sticky nav scrolled state ---------- */
const nav = document.getElementById("nav");
const onScroll = () => {
  if (window.scrollY > 8) nav.classList.add("is-scrolled");
  else nav.classList.remove("is-scrolled");
};
window.addEventListener("scroll", onScroll, { passive: true });
onScroll();


/* ---------- Year ---------- */
document.getElementById("year").textContent = new Date().getFullYear();


/* ---------- Scroll-spy ---------- */
const sections = document.querySelectorAll("main section[id]");
const navLinks = document.querySelectorAll(".nav__links a");

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const id = entry.target.id;
      navLinks.forEach(a => {
        a.classList.toggle("is-active", a.getAttribute("href") === `#${id}`);
      });
    }
  });
}, { rootMargin: "-40% 0px -55% 0px" });

sections.forEach(s => observer.observe(s));


/* ---------- Live Booking data ---------- */
fetch("booking-data.json")
  .then(r => r.ok ? r.json() : Promise.reject())
  .then(data => {
    Object.assign(BOOKING, data);
    const lang = document.documentElement.lang || "sr";
    setLanguage(lang);
  })
  .catch(() => { /* keep default BOOKING values */ });
