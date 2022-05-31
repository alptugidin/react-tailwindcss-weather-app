//türkiyedeki şehirler ve onların enlem ve boylamlarını tutan bir array

export const cities = [
  {  name: "Adana",    lat: 37.00, lon: 35.32 },
  {  name: "Adıyaman", lat: 37.73, lon: 38.27 },
  {  name: "Afyon",    lat: 38.77, lon: 30.50 },
  {  name: "Ağrı",     lat: 39.72, lon: 43.08 },
  {  name: "Aksaray",  lat: 38.33, lon: 34.08 },
  {  name: "Amasya",   lat: 40.65, lon: 35.83 },
  {  name: "Ankara",   lat: 39.93, lon: 32.85 },
  {  name: "Antalya",  lat: 36.88, lon: 30.70 },
  {  name: "Ardahan",  lat: 41.75, lon: 45.33 },
  {  name: "Artvin",   lat: 41.15, lon: 41.15 },
  {  name: "Aydın",    lat: 37.77, lon: 27.85 },
  {  name: "Balıkesir",lat: 39.73, lon: 29.92 },
  {  name: "Bartın",   lat: 41.73, lon: 32.53 },
  {  name: "Batman",   lat: 37.88, lon: 41.28 },
  {  name: "Bayburt",  lat: 40.58, lon: 27.15 },
  {  name: "Bilecik",  lat: 40.23, lon: 29.02 },
  {  name: "Bingöl",   lat: 40.15, lon: 40.15 },
  {  name: "Bitlis",   lat: 38.48, lon: 43.12 },
  {  name: "Bolu",     lat: 40.73, lon: 31.55 },
  {  name: "Burdur",   lat: 37.77, lon: 30.87 },
  {  name: "Bursa",    lat: 40.18, lon: 29.56 },
  {  name: "Çanakkale",lat: 40.15, lon: 26.82 },
  {  name: "Çankırı",  lat: 40.77, lon: 37.87 },
  {  name: "Çorum",    lat: 40.88, lon: 34.52 },
  {  name: "Denizli",  lat: 37.77, lon: 29.08 },
  {  name: "Diyarbakır",lat: 40.15, lon: 35.88 },
  {  name: "Düzce",    lat: 40.18, lon: 34.87 },
  {  name: "Edirne",   lat: 41.58, lon: 26.27 },
  {  name: "Elazığ",   lat: 38.27, lon: 39.72 },
  {  name: "Erzincan", lat: 39.72, lon: 39.72 },
  {  name: "Erzurum",  lat: 39.57, lon: 41.12 },
  {  name: "Eskişehir",lat: 39.57, lon: 33.58 },
  {  name: "Gaziantep",lat: 37.07, lon: 37.07 },
  {  name: "Giresun",  lat: 40.88, lon: 38.52 },
  {  name: "Gümüşhane",lat: 40.58, lon: 39.22 },
  {  name: "Hakkari",  lat: 40.28, lon: 36.63 },
  {  name: "Hatay",    lat: 36.25, lon: 36.25 },
  {  name: "Iğdır",    lat: 38.18, lon: 40.58 },
  {  name: "Isparta",  lat: 37.67, lon: 30.57 },
  {  name: "İstanbul", lat: 41.28, lon: 28.97 },
  {  name: "İzmir",    lat: 38.42, lon: 27.13 },
  {  name: "Kahramanmaraş",lat: 37.88, lon: 36.88 },
  {  name: "Karabük",  lat: 41.33, lon: 32.53 },
  {  name: "Karaman",  lat: 37.15, lon: 33.38 },
  {  name: "Kars",     lat: 40.58, lon: 43.08 },
  {  name: "Kastamonu",lat: 41.33, lon: 33.22 },
  {  name: "Kayseri",  lat: 38.73, lon: 35.48 },
  {  name: "Kırıkkale",lat: 39.92, lon: 33.50 },
  {  name: "Kırklareli",lat: 39.17, lon: 27.5 },
  {  name: "Kırşehir", lat: 39.17, lon: 34.22 },
  {  name: "Kilis",    lat: 37.88, lon: 36.88 },
  {  name: "Kocaeli",  lat: 40.72, lon: 29.97 },
  {  name: "Konya",    lat: 37.88, lon: 32.48 },
  {  name: "Kütahya",  lat: 39.22, lon: 29.02 },
  {  name: "Malatya",  lat: 38.37, lon: 38.37 },
  {  name: "Manisa",   lat: 38.72, lon: 27.83 },
  {  name: "Mardin",   lat: 37.33, lon: 40.78 },
  {  name: "Mersin",   lat: 36.83, lon: 34.73 },
  {  name: "Muğla",    lat: 37.18, lon: 27.83 },
  {  name: "Muş",      lat: 40.58, lon: 29.22 },
  {  name: "Nevşehir", lat: 38.72, lon: 34.58 },
  {  name: "Niğde",    lat: 37.78, lon: 34.17 },
  {  name: "Ordu",     lat: 40.98, lon: 37.88 },
  {  name: "Osmaniye", lat: 37.88, lon: 35.48 },
  {  name: "Rize",     lat: 40.58, lon: 41.17 },
  {  name: "Sakarya",  lat: 40.28, lon: 30.57 },
  {  name: "Samsun",   lat: 41.28, lon: 36.32 },
  {  name: "Şanlıurfa",lat: 37.18, lon: 29.22 },
  {  name: "Siirt",    lat: 37.17, lon: 42.17 },
  {  name: "Sinop",    lat: 42.17, lon: 35.17 },
  {  name: "Sivas",    lat: 37.17, lon: 37.17 },
  {  name: "Şırnak",   lat: 37.17, lon: 42.17 },
  {  name: "Tekirdağ", lat: 40.98, lon: 27.5 },
  {  name: "Tokat",    lat: 36.83, lon: 36.83 },
  {  name: "Trabzon",  lat: 40.28, lon: 39.72 },
  {  name: "Tunceli",  lat: 40.28, lon: 39.72 },
  {  name: "Uşak",     lat: 40.28, lon: 29.72 },
  {  name: "Van",      lat: 40.28, lon: 29.72 },
  {  name: "Yalova",   lat: 40.28, lon: 29.72 },
  {  name: "Yozgat",   lat: 40.28, lon: 29.72 },
  {  name: "Zonguldak",lat: 40.28, lon: 29.72 }
];
































