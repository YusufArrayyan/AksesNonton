// TMDB poster (portrait, for cards)
const p = (path) => `https://image.tmdb.org/t/p/w500${path}`;
// TMDB backdrop (landscape HD, for hero banner)
const b = (path) => `https://image.tmdb.org/t/p/original${path}`;

export const movies = [
  // ─── HOLLYWOOD ───────────────────────────────────────────────
  {
    id: 1, title: "Inception", year: 2010, rating: 8.8, type: "movie",
    genre: "Sci-Fi", language: "English", country: "Hollywood", category: "Top Rated",
    img: p("/oYuLEt3zVCKq57qu2F8dT7NIa6f.jpg"),
    backdrop: b("/s3TBrRGB1iav7gFOCNx3H31MoES.jpg"),
    trailerId: "YoHD9XEInc0", trendScore: 97,
    description: "Seorang pencuri yang masuk ke alam mimpi manusia untuk mengambil informasi rahasia.",
    visualDescription: "Kota Paris terlipat ke atas seperti origami raksasa, gedung-gedung membentuk lorong berbentuk U di langit.",
    director: "Christopher Nolan"
  },
  {
    id: 2, title: "The Dark Knight", year: 2008, rating: 9.0, type: "movie",
    genre: "Action", language: "English", country: "Hollywood", category: "Top Rated",
    img: p("/qJ2tW6WMUDux911r6m7haRef0WH.jpg"),
    backdrop: b("/nMKdUFyrkzSMF8EvtNZwMtm6ZIB.jpg"),
    trailerId: "EXeTwQWrcwY", trendScore: 99,
    description: "Batman menghadapi Joker yang menebar kekacauan di Gotham.",
    visualDescription: "Joker berdiri di pojok gedung pencakar langit, senyum lebar di wajahnya yang ber-makeup putih.",
    director: "Christopher Nolan"
  },
  {
    id: 3, title: "Interstellar", year: 2014, rating: 8.7, type: "movie",
    genre: "Sci-Fi", language: "English", country: "Hollywood", category: "Top Rated",
    img: p("/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg"),
    backdrop: b("/rAiYTfKGqDCRosh62sanRmoGxEl.jpg"),
    trailerId: "zSWdZVtXT7E", trendScore: 96,
    description: "Astronot menjelajahi lubang cacing untuk mencari tempat tinggal baru bagi umat manusia.",
    visualDescription: "Pesawat kecil tampak sangat kecil dibanding pusaran lubang hitam oranye keemasan yang berputar lambat.",
    director: "Christopher Nolan"
  },
  {
    id: 4, title: "Avengers: Endgame", year: 2019, rating: 8.4, type: "movie",
    genre: "Action", language: "English", country: "Hollywood", category: "Popular",
    img: p("/or06FN3Dka5tukK1e9sl16pB3iy.jpg"),
    backdrop: b("/7RyHsO4yDXtBv1zUU3mTpHeQ0d5.jpg"),
    trailerId: "TcMBFSGVi1c", trendScore: 98,
    description: "The Avengers berkumpul sekali lagi untuk membalikkan kerusakan yang diakibatkan Thanos.",
    visualDescription: "Para Avengers berdiri berjejer di medan pertempuran, Tony Stark maju dengan gauntlet infinity bersinar.",
    director: "Anthony & Joe Russo"
  },
  {
    id: 5, title: "Avengers: Infinity War", year: 2018, rating: 8.5, type: "movie",
    genre: "Action", language: "English", country: "Hollywood", category: "Popular",
    img: p("/7WsyChQLEftFiDOVTGkv3hFpyyt.jpg"),
    backdrop: b("/mDfJG3LC3Dqb67AZ52x3Z0jU0uB.jpg"),
    trailerId: "6ZfuNTqbHE8", trendScore: 96,
    description: "Thanos berkumpulkan batu-batu infinity untuk menghancurkan separuh kehidupan alam semesta.",
    visualDescription: "Thanos menggenggam sarung tangan emas bertahtakan batu-batu bercahaya berwarna-warni.",
    director: "Anthony & Joe Russo"
  },
  {
    id: 6, title: "Spider-Man: No Way Home", year: 2021, rating: 8.3, type: "movie",
    genre: "Action", language: "English", country: "Hollywood", category: "Popular",
    img: p("/1g0dhYtq4irTY1GPXvft6k4YLjm.jpg"),
    backdrop: b("/iQFcwSGbZXMkeyKrxbPnwnRo5fl.jpg"),
    trailerId: "JfVOs4VSpmA", trendScore: 97,
    description: "Spider-Man meminta bantuan Doctor Strange saat identitasnya terbongkar ke publik.",
    visualDescription: "Tiga Spider-Man dari dimensi berbeda berdiri bersisian menunjuk satu sama lain dengan bingung.",
    director: "Jon Watts"
  },
  {
    id: 7, title: "Top Gun: Maverick", year: 2022, rating: 8.3, type: "movie",
    genre: "Action", language: "English", country: "Hollywood", category: "Popular",
    img: p("/62HCnUTziyWcpDaBO2i1DX17ljH.jpg"),
    backdrop: b("/AkB5BKbAssaIshdSHqUuiCtAq7c.jpg"),
    trailerId: "giXco2jaZ_4", trendScore: 95,
    description: "Pete 'Maverick' Mitchell melatih generasi baru pilot Top Gun untuk misi mustahil.",
    visualDescription: "Jet F/A-18 Super Hornet melaju supersonik di antara tebing-tebing curam, asap putih mengepul dari sayap.",
    director: "Joseph Kosinski"
  },
  {
    id: 8, title: "Avatar: The Way of Water", year: 2022, rating: 7.6, type: "movie",
    genre: "Sci-Fi", language: "English", country: "Hollywood", category: "Trending",
    img: p("/t6HIqrRAclMCA60NsSmeqe9RmNV.jpg"),
    backdrop: b("/s16H6tpK2utvwpaezv55KyYxEmF.jpg"),
    trailerId: "a8Gx8wiNbs8", trendScore: 92,
    description: "Jake Sully dan Neytiri melindungi keluarga mereka dari ancaman di lautan Pandora.",
    visualDescription: "Makhluk-makhluk laut bioluminesen berenang di lautan Pandora yang tembus cahaya biru kehijauan.",
    director: "James Cameron"
  },
  {
    id: 9, title: "Black Panther", year: 2018, rating: 7.3, type: "movie",
    genre: "Action", language: "English", country: "Hollywood", category: "Trending",
    img: p("/uxzzxijgPIY7slzFvMotPv8wjKA.jpg"),
    backdrop: b("/6ELJEzQJ3Y45HczvreqRoLWn94F.jpg"),
    trailerId: "xjDjIWPAcCw", trendScore: 90,
    description: "T'Challa kembali ke Wakanda setelah kematian ayahnya dan menghadapi tantangan atas takhta.",
    visualDescription: "T'Challa dalam jubah hitam Black Panther berkilau, kota Wakanda futuristik bersinar di belakangnya.",
    director: "Ryan Coogler"
  },
  {
    id: 10, title: "Doctor Strange in the Multiverse of Madness", year: 2022, rating: 6.9, type: "movie",
    genre: "Sci-Fi", language: "English", country: "Hollywood", category: "Popular",
    img: p("/9Gtg2DzBhmYamXBS1hKAhiwbBKS.jpg"),
    backdrop: b("/wcKFYIiVDvRs3QuOnh74CBD5WhY.jpg"),
    trailerId: "aWzlQ2N6qqg", trendScore: 88,
    description: "Doctor Strange melintasi multiverse yang penuh bahaya untuk melindungi Amerika Chavez.",
    visualDescription: "Doctor Strange melayang di alam semesta terpecah seperti cermin, mencerminkan versi dirinya yang berbeda.",
    director: "Sam Raimi"
  },
  {
    id: 11, title: "Guardians of the Galaxy", year: 2014, rating: 8.0, type: "movie",
    genre: "Action", language: "English", country: "Hollywood", category: "Top Rated",
    img: p("/r7vmZjiyZw9rpJMQJdXpjgiCOk9.jpg"),
    backdrop: b("/bHarw8xrmQeqf3t8HpZsxXTP6rA.jpg"),
    trailerId: "d96cjJhvlMA", trendScore: 91,
    description: "Sekelompok penjahat antariksa eksentrik bersatu untuk melindungi alam semesta.",
    visualDescription: "Lima karakter eksentrik berpose heroik: manusia jaket merah, pohon raksasa, rakun bersenjata, wanita kulit hijau.",
    director: "James Gunn"
  },
  {
    id: 12, title: "Mad Max: Fury Road", year: 2015, rating: 8.1, type: "movie",
    genre: "Action", language: "English", country: "Hollywood", category: "Top Rated",
    img: p("/hA2ple9q4qnwxp3hKVNhroipsir.jpg"),
    backdrop: b("/phszHPFyMAsaSBhA9TfLLbS5McD.jpg"),
    trailerId: "hEJnMQG9ev8", trendScore: 93,
    description: "Di gurun post-apokaliptik, Max bergabung Furiosa melarikan diri dari tiran Immortan Joe.",
    visualDescription: "Konvoi kendaraan perang melaju di gurun membara, diserang gerombolan war boy bercat putih.",
    director: "George Miller"
  },
  {
    id: 13, title: "Get Out", year: 2017, rating: 7.7, type: "movie",
    genre: "Horror", language: "English", country: "Hollywood", category: "Top Rated",
    img: p("/tFXcEccSQMf3lfhfXKSU9iRBpa3.jpg"),
    backdrop: b("/plrgNMxBo0l0pfN9jOm0zPZeGW0.jpg"),
    trailerId: "DzfpyUB60YY", trendScore: 89,
    description: "Seorang pria kulit hitam menemukan rahasia mengerikan di keluarga pacar kulit putihnya.",
    visualDescription: "Chris berdiri di halaman rumah mewah, wajah tegang melihat tamu pesta berkumpul dengan senyum misterius.",
    director: "Jordan Peele"
  },
  {
    id: 14, title: "A Quiet Place", year: 2018, rating: 7.5, type: "movie",
    genre: "Horror", language: "English", country: "Hollywood", category: "Trending",
    img: p("/nAU74GmpUk7t5iklEp3bufwDq4n.jpg"),
    backdrop: b("/roOdri7mCpeTKOEiJFWxBbP3NQ9.jpg"),
    trailerId: "WR7cc5t69B4", trendScore: 88,
    description: "Sebuah keluarga berjuang bertahan hidup dari monster yang berburu menggunakan pendengaran.",
    visualDescription: "Keluarga berjalan di atas tanah berpasir tanpa alas kaki dalam keheningan total, ekspresi penuh ketakutan.",
    director: "John Krasinski"
  },
  {
    id: 15, title: "La La Land", year: 2016, rating: 8.0, type: "movie",
    genre: "Romance", language: "English", country: "Hollywood", category: "Top Rated",
    img: p("/uDO8zWDhfWwoFdKS4fzkUJt0Rf0.jpg"),
    backdrop: b("/nadGjG9FBxNPKcxV4nTLpqWFBGw.jpg"),
    trailerId: "0pdqf4P9MB8", trendScore: 87,
    description: "Seorang musisi jazz dan aktris bermimpi di Los Angeles bertemu dan jatuh cinta.",
    visualDescription: "Mia dan Sebastian menari di bawah hamparan bintang berbentuk planetarium, gaun kuning Mia berputar anggun.",
    director: "Damien Chazelle"
  },
  {
    id: 16, title: "Whiplash", year: 2014, rating: 8.5, type: "movie",
    genre: "Drama", language: "English", country: "Hollywood", category: "Top Rated",
    img: p("/7fn624j5lj3xTme2SgiLCeuedmO.jpg"),
    backdrop: b("/oFZXoKLbMMa9PKNDU7p8Op8e8eO.jpg"),
    trailerId: "7d_jQycdQGo", trendScore: 94,
    description: "Seorang drummer muda bergulat dengan instruktur kejam demi meraih kesempurnaan.",
    visualDescription: "Tangan Andrew berdarah memukul drum dengan total, piring perunggu bergetar keras.",
    director: "Damien Chazelle"
  },
  {
    id: 17, title: "Parasite", year: 2019, rating: 8.5, type: "movie",
    genre: "Thriller", language: "Korean", country: "Hollywood", category: "Top Rated",
    img: p("/7IiTTgloJzvGI1TAYymCfbfl3vT.jpg"),
    backdrop: b("/ApiBzeaa95TNYLSKkEWbW8gFQRG.jpg"),
    trailerId: "5xH0HfJHsaY", trendScore: 95,
    description: "Keluarga miskin Kim menyusup ke dalam kehidupan keluarga kaya Park dengan kecerdikan.",
    visualDescription: "Keluarga Kim berdiri di pintu masuk rumah mewah keluarga Park, wajah mereka menyembunyikan rencana tersembunyi.",
    director: "Bong Joon-ho"
  },
  {
    id: 18, title: "Joker", year: 2019, rating: 8.4, type: "movie",
    genre: "Drama", language: "English", country: "Hollywood", category: "Top Rated",
    img: p("/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg"),
    backdrop: b("/n6bUvigpRFqSwmPp1m2YAjwLjMp.jpg"),
    trailerId: "zAGVQLHvwOY", trendScore: 95,
    description: "Kisah asal-usul Arthur Fleck, seorang komedian gagal yang berubah menjadi Joker.",
    visualDescription: "Arthur Fleck menari di anak tangga Gotham, mengenakan setelan merah Joker, wajah dilukis cat putih dan merah.",
    director: "Todd Phillips"
  },
  {
    id: 19, title: "1917", year: 2019, rating: 8.3, type: "movie",
    genre: "Drama", language: "English", country: "Hollywood", category: "Top Rated",
    img: p("/iZf0KyrE25z1sage4SYFLCCrMi9.jpg"),
    backdrop: b("/tKxwbMmtF4F5WBNF8nHlIPCFZjk.jpg"),
    trailerId: "gZjQROMAh_s", trendScore: 93,
    description: "Dua prajurit Inggris berlomba melintasi garis musuh untuk mencegah serangan yang menelan 1.600 nyawa.",
    visualDescription: "Dua prajurit muda merangkak di tanah berlumpur parit perang, ledakan artileri menerangi langit malam.",
    director: "Sam Mendes"
  },
  {
    id: 20, title: "Tenet", year: 2020, rating: 7.3, type: "movie",
    genre: "Sci-Fi", language: "English", country: "Hollywood", category: "Trending",
    img: "https://upload.wikimedia.org/wikipedia/en/1/14/Tenet_movie_poster.jpg",
    backdrop: b("/wzJRB4MKi3yK138bJyuL9nx47y6.jpg"),
    trailerId: "LdOM0x0XDMo", trendScore: 85,
    description: "Seorang agen CIA mengungkap misi mencegah Perang Dunia III menggunakan manipulasi waktu.",
    visualDescription: "Dua orang bertarung secara bersamaan searah dan berlawanan waktu, pukulan terjadi sebelum tangan bergerak.",
    director: "Christopher Nolan"
  },
  {
    id: 21, title: "Dune", year: 2021, rating: 8.0, type: "movie",
    genre: "Sci-Fi", language: "English", country: "Hollywood", category: "Popular",
    img: "https://upload.wikimedia.org/wikipedia/en/8/8e/Dune_%282021_film%29_poster.jpg",
    backdrop: b("/eeijXm3553xvuFbkPFkDG6CLCbQ.jpg"),
    trailerId: "n9xhJrPXop4", trendScore: 90,
    description: "Paul Atreides memimpin pemberontakan melawan kekuatan kosmis untuk misi kemanusiaan.",
    visualDescription: "Cacing pasir raksasa muncul dari bawah gurun Arrakis dengan mulut terbuka lebar.",
    director: "Denis Villeneuve"
  },
  {
    id: 22, title: "Dune: Part Two", year: 2024, rating: 8.8, type: "movie",
    genre: "Sci-Fi", language: "English", country: "Hollywood", category: "Popular",
    img: "https://upload.wikimedia.org/wikipedia/en/5/52/Dune_Part_Two_poster.jpeg",
    backdrop: b("/xkJfxeUJ77oJHcNVJGbr5bkQQWS.jpg"),
    trailerId: "Way9Dexny3w", trendScore: 98,
    description: "Paul Atreides melarikan diri ke padang pasir bersama Chani dan kaum Fremen untuk membalas dendam.",
    visualDescription: "Paul Atreides berdiri di puncak bukit pasir, jubahnya berkibar ditiup angin kencang Arrakis.",
    director: "Denis Villeneuve"
  },
  {
    id: 23, title: "Oppenheimer", year: 2023, rating: 8.9, type: "movie",
    genre: "Drama", language: "English", country: "Hollywood", category: "Popular",
    img: "https://upload.wikimedia.org/wikipedia/en/4/4a/Oppenheimer_%28film%29_poster.jpg",
    backdrop: b("/rLb2cwF3Pazuxaj0sRXQ037tGI1.jpg"),
    trailerId: "uYPbbksJxIg", trendScore: 95,
    description: "Kisah J. Robert Oppenheimer dan perannya dalam pengembangan bom atom.",
    visualDescription: "Kilat uji coba Trinity meledak di cakrawala gurun New Mexico, awan jamur terbentuk perlahan di langit subuh.",
    director: "Christopher Nolan"
  },
  {
    id: 24, title: "The Batman", year: 2022, rating: 8.3, type: "movie",
    genre: "Action", language: "English", country: "Hollywood", category: "Trending",
    img: p("/74xTEgt7R36Fpooo50r9T25onhq.jpg"),
    backdrop: b("/b0PlSFdDwbyK0cf5RxwDpaOJQvQ.jpg"),
    trailerId: "mqqft2x_Aa4", trendScore: 92,
    description: "Batman menyelidiki korupsi yang tersembunyi di Gotham City.",
    visualDescription: "Batman muncul dari bayang-bayang lorong gelap di tengah hujan deras Gotham.",
    director: "Matt Reeves"
  },
  {
    id: 25, title: "John Wick: Chapter 4", year: 2023, rating: 8.7, type: "movie",
    genre: "Action", language: "English", country: "Hollywood", category: "Trending",
    img: p("/vZloFAK7NmvMGKE7VkF5UHaz0I.jpg"),
    backdrop: b("/1VNGPS3P6nFIr9GJRzKkNHFYGxM.jpg"),
    trailerId: "qEVUtrk8_B4", trendScore: 96,
    description: "John Wick menemukan jalan untuk mengalahkan High Table.",
    visualDescription: "John Wick berdiri di puncak tangga Sacré-Cœur Paris, pakaian hitamnya berlumuran darah.",
    director: "Chad Stahelski"
  },
  {
    id: 26, title: "Captain America: Civil War", year: 2016, rating: 7.8, type: "movie",
    genre: "Action", language: "English", country: "Hollywood", category: "Popular",
    img: "https://upload.wikimedia.org/wikipedia/en/5/53/Captain_America_Civil_War_poster.jpg",
    backdrop: b("/rqoQlZfhM42q1RwqseSbJBYJemN.jpg"),
    trailerId: "dKrVegVI0Us", trendScore: 89,
    description: "Para Avengers terpecah menjadi dua kubu dalam konflik ideologi.",
    visualDescription: "Iron Man dan Captain America saling berhadapan di gudang industri gelap.",
    director: "Anthony & Joe Russo"
  },
  {
    id: 27, title: "Thor: Ragnarok", year: 2017, rating: 7.9, type: "movie",
    genre: "Action", language: "English", country: "Hollywood", category: "Popular",
    img: p("/rzRwTcFvttcN1Zgtelhe75Torah.jpg"),
    backdrop: b("/kaIfm5ryEOwYg8mLbq8HkPuM9Kc.jpg"),
    trailerId: "ue80QwXMRHg", trendScore: 88,
    description: "Thor harus melawan waktu menyelamatkan Asgard dari dewi kematian Hela.",
    visualDescription: "Thor dengan helm Valkyrie biru menunggangi pegasus di atas jembatan pelangi Bifrost.",
    director: "Taika Waititi"
  },
  {
    id: 28, title: "Deadpool & Wolverine", year: 2024, rating: 8.2, type: "movie",
    genre: "Action", language: "English", country: "Hollywood", category: "Popular",
    img: p("/8cdWjvZQUExUUTzyp4t6EDMubfO.jpg"),
    backdrop: b("/pGzkjZkZR6iA3RJqrAOrjqDTcDC.jpg"),
    trailerId: "73_1biulkYk", trendScore: 99,
    description: "Wolverine yang lelah bertemu dengan Deadpool yang cerewet dalam petualangan lintas semesta.",
    visualDescription: "Deadpool berpose santai sambil Wolverine melibaskan cakar adamantiumnya.",
    director: "Shawn Levy"
  },
  {
    id: 29, title: "Guardians of the Galaxy Vol. 3", year: 2023, rating: 7.9, type: "movie",
    genre: "Action", language: "English", country: "Hollywood", category: "Popular",
    img: p("/r2J02Z6LKhETAj3WMqymS6F3O1S.jpg"),
    backdrop: b("/5YZbUmjbMa3ClvSW1Wj3D6XGkVA.jpg"),
    trailerId: "u3V5KDHRQvk", trendScore: 87,
    description: "Para Guardian memberanikan diri melakukan misi berbahaya untuk melindungi Rocket.",
    visualDescription: "Semua Guardian berpose heroik di kapal Milano, latar belakang nebula berwarna-warni.",
    director: "James Gunn"
  },
  {
    id: 30, title: "No Time to Die", year: 2021, rating: 7.3, type: "movie",
    genre: "Action", language: "English", country: "Hollywood", category: "Trending",
    img: p("/iUgygt3fscRoKWCV1d0C7FbM9TP.jpg"),
    backdrop: b("/XJDh0cFYBVPXWZBSKGZqhurJJlq.jpg"),
    trailerId: "N_gD9-Oa0fg", trendScore: 84,
    description: "James Bond menjalani misi terakhirnya untuk menyelamatkan ilmuwan yang diculik.",
    visualDescription: "Bond mengemudi Aston Martin DB5 di jalan berliku Matera, Italia.",
    director: "Cary Joji Fukunaga"
  },
  {
    id: 31, title: "Shang-Chi", year: 2021, rating: 7.4, type: "movie",
    genre: "Action", language: "English", country: "Hollywood", category: "Popular",
    img: p("/1BIoJGKbXjdFDAqUEiA2VHqkK1Z.jpg"),
    backdrop: b("/dXNAPwY7VrqMAo51EKhhCJfaGb5.jpg"),
    trailerId: "8YjFbMbfXaQ", trendScore: 83,
    description: "Shang-Chi harus menghadapi masa lalunya saat terseret ke dalam dunia Ten Rings.",
    visualDescription: "Shang-Chi menggunakan gelang emas sepuluh cincin yang berputar di sekeliling tangannya.",
    director: "Destin Daniel Cretton"
  },
  {
    id: 32, title: "Killers of the Flower Moon", year: 2023, rating: 7.6, type: "movie",
    genre: "Drama", language: "English", country: "Hollywood", category: "Trending",
    img: "https://upload.wikimedia.org/wikipedia/en/2/23/Killers_of_the_Flower_Moon_poster.jpg",
    backdrop: b("/3H1DiskHReUWCEJAHnxMOv3cLyh.jpg"),
    trailerId: "EP34Yoxs3FQ", trendScore: 86,
    description: "Pembunuhan beruntun terhadap anggota suku Osage mengungkap konspirasi di Oklahoma.",
    visualDescription: "Ernest Burkhart berdiri di padang rumput Oklahoma yang luas, topi koboi menghalangi matanya.",
    director: "Martin Scorsese"
  },
  {
    id: 33, title: "Indiana Jones 5", year: 2023, rating: 6.9, type: "movie",
    genre: "Adventure", language: "English", country: "Hollywood", category: "Trending",
    img: p("/Af4bXE63pVsb2FtbW8uYluih50O.jpg"),
    backdrop: b("/4fTRRuBATea8F7y5JGiX1S4aCkP.jpg"),
    trailerId: "eQfMbSe7F2g", trendScore: 80,
    description: "Indiana Jones mencari artefak kuno sambil menghindari agen-agen Nazi.",
    visualDescription: "Indiana Jones tua memegang cambuk dan topi fedora-nya sambil berlari di pasar Sisilia.",
    director: "James Mangold"
  },
  {
    id: 34, title: "The Martian", year: 2015, rating: 8.0, type: "movie",
    genre: "Sci-Fi", language: "English", country: "Hollywood", category: "Top Rated",
    img: p("/5BHuvQ6p9kfc091Z8RiFNhCwL4b.jpg"),
    backdrop: b("/AjGMFkMnl5RXsTixOBFO2rKHWAN.jpg"),
    trailerId: "ej3ioOneTy8", trendScore: 91,
    description: "Seorang astronot bertahan hidup sendirian di Mars setelah ditinggal kru-nya.",
    visualDescription: "Mark Watney berdiri di dataran Mars yang merah berkabut, pakaian antariksa putihnya kotor.",
    director: "Ridley Scott"
  },
  {
    id: 35, title: "Ford v Ferrari", year: 2019, rating: 8.1, type: "movie",
    genre: "Drama", language: "English", country: "Hollywood", category: "Top Rated",
    img: p("/dR7qMIo5BGAVzPAFXyvWMpMMx7z.jpg"),
    backdrop: b("/iDd5vPbXGWZqQE6P7mDlIV7G3Ua.jpg"),
    trailerId: "zyYgDtY2AMY", trendScore: 88,
    description: "Seorang teknisi dan pembalap bergabung untuk membantu Ford mengalahkan Ferrari di Le Mans.",
    visualDescription: "Mobil balap Ford GT40 biru-oranye berpacu di Le Mans, asap rem mengepul di tikungan tajam.",
    director: "James Mangold"
  },
  {
    id: 36, title: "Everything Everywhere All at Once", year: 2022, rating: 7.8, type: "movie",
    genre: "Sci-Fi", language: "English", country: "Hollywood", category: "Top Rated",
    img: p("/u3S4HLBjG4ogNLgJ3PkBOfmAGka.jpg"),
    backdrop: b("/fi4gVIoHFW8VLPUQAEm0BCj7Epl.jpg"),
    trailerId: "wxN1T1uxQ2g", trendScore: 91,
    description: "Seorang wanita imigran Tiongkok-Amerika harus menjelajahi multiverse untuk menyelamatkan dunia.",
    visualDescription: "Evelyn Wang berdiri di perbatasan antara dimensi, ujung jarinya mengeluarkan kilatan berwarna-warni.",
    director: "Daniel Kwan & Daniel Scheinert"
  },
  {
    id: 37, title: "The Menu", year: 2022, rating: 7.2, type: "movie",
    genre: "Thriller", language: "English", country: "Hollywood", category: "Trending",
    img: p("/v4ooeHhwOoMPMKC6OMVvpKEPFit.jpg"),
    backdrop: b("/tWBe4H0yNJaKV5kAbG0HCAQ5T9f.jpg"),
    trailerId: "fOmOofmjZtQ", trendScore: 82,
    description: "Sepasang kekasih mengunjungi restoran eksklusif di pulau terpencil dengan menu yang mengerikan.",
    visualDescription: "Chef Slowik berdiri dengan senyum tenang di dapur modern steril sambil pisau chef berkilat.",
    director: "Mark Mylod"
  },
  {
    id: 38, title: "Barbarian", year: 2022, rating: 7.0, type: "movie",
    genre: "Horror", language: "English", country: "Hollywood", category: "Trending",
    img: p("/wWxGSHtCUCUMdfovQzS2fNSJWZN.jpg"),
    backdrop: b("/nDxMBpCMTFp9DGKzLWfSJDNikdB.jpg"),
    trailerId: "7Zo6kL8EGAI", trendScore: 80,
    description: "Seorang wanita yang menyewa Airbnb menemukan sesuatu yang tersembunyi di bawah rumah.",
    visualDescription: "Tess berdiri di pintu basement yang terbuka mengarah ke kegelapan total.",
    director: "Zach Cregger"
  },
  {
    id: 39, title: "Prey", year: 2022, rating: 7.6, type: "movie",
    genre: "Action", language: "English", country: "Hollywood", category: "Trending",
    img: p("/ujr5pZtc1oitbe7ViMUOilFaJ7s.jpg"),
    backdrop: b("/b98f649lJJfLFioEVdNwJmAqYgD.jpg"),
    trailerId: "mFbmMPDqP1g", trendScore: 84,
    description: "Prequel Predator: pejuang Comanche muda menghadapi alien pemburu yang mematikan.",
    visualDescription: "Naru berlari di padang savana abad ke-18, siluet Predator tersembunyi di balik kamuflase.",
    director: "Dan Trachtenberg"
  },
  {
    id: 40, title: "Smile", year: 2022, rating: 6.6, type: "movie",
    genre: "Horror", language: "English", country: "Hollywood", category: "Trending",
    img: p("/aPqcQwu4VGEewPhagqNNiiuEM1Ld.jpg"),
    backdrop: b("/iZ0a5P0vjxB3MERJp8YULNR3Hup.jpg"),
    trailerId: "tGV990DNGMQ", trendScore: 76,
    description: "Seorang dokter psikiatri mengalami kejadian traumatis setelah menyaksikan kematian pasiennya.",
    visualDescription: "Wanita berdiri dengan senyum lebar tidak wajar, matanya kosong menatap langsung ke kamera.",
    director: "Parker Finn"
  },
  {
    id: 41, title: "Glass Onion", year: 2022, rating: 7.1, type: "movie",
    genre: "Mystery", language: "English", country: "Hollywood", category: "Trending",
    img: p("/vSre4sCa86KJeAFCDzMEzNV4Bm0.jpg"),
    backdrop: b("/dFluSwzuaEhMpJ3YIpIbGFwFa4S.jpg"),
    trailerId: "4MHn9Q5NBEI", trendScore: 83,
    description: "Detektif Benoit Blanc menyelidiki kasus pembunuhan di villa pulau seorang miliarder teknologi.",
    visualDescription: "Benoit Blanc memandang villa kaca raksasa berbentuk bawang dari dermaga batu.",
    director: "Rian Johnson"
  },
  {
    id: 42, title: "Nope", year: 2022, rating: 6.8, type: "movie",
    genre: "Horror", language: "English", country: "Hollywood", category: "Trending",
    img: p("/AcKVlWaNVVVFQwro3nLXqPljcYA.jpg"),
    backdrop: b("/sxBzlc9HMXKZfkFPvEVUK8i8MBG.jpg"),
    trailerId: "In8fuzj3gck", trendScore: 78,
    description: "Dua peternak kuda berjuang melawan makhluk misterius di atas langit lembah.",
    visualDescription: "Sebuah awan berbentuk piring melayang di atas lembah California, ujungnya seperti rahang makhluk raksasa.",
    director: "Jordan Peele"
  },
  {
    id: 43, title: "The Whale", year: 2022, rating: 7.7, type: "movie",
    genre: "Drama", language: "English", country: "Hollywood", category: "Trending",
    img: p("/jQ0gylJMxWSL490sy0RrPj1Lj7e.jpg"),
    backdrop: b("/4kHKmtasVopNaDTPHKBZHkrp7Xm.jpg"),
    trailerId: "sj8FN4KeHRE", trendScore: 82,
    description: "Seorang guru menulis online yang obes mencoba menyambung kembali hubungan dengan putrinya.",
    visualDescription: "Charlie duduk di sofa yang hampir roboh, dikelilingi tumpukan makanan dan layar komputer redup.",
    director: "Darren Aronofsky"
  },
  {
    id: 44, title: "The Black Phone", year: 2022, rating: 7.1, type: "movie",
    genre: "Horror", language: "English", country: "Hollywood", category: "Trending",
    img: p("/p6UY0HHpKBYlrb99aJJlq0VzqRn.jpg"),
    backdrop: b("/mMBMsPl15yuvhKkz4ks9BKQOk3j.jpg"),
    trailerId: "zt7Ry9AFnkI", trendScore: 80,
    description: "Seorang anak diculik oleh pembunuh berantai dan menerima panggilan dari korban sebelumnya.",
    visualDescription: "Finney mengangkat handset telepon hitam tua yang berdebu di ruang bawah tanah gelap.",
    director: "Scott Derrickson"
  },
  {
    id: 45, title: "Black Adam", year: 2022, rating: 7.0, type: "movie",
    genre: "Action", language: "English", country: "Hollywood", category: "Popular",
    img: p("/pFlaoHTZeyNkG83vxsAJiGzfSsa.jpg"),
    backdrop: b("/bQXAqRx2Fgc46qaYVnqFWWGLeRb.jpg"),
    trailerId: "X0tOpBuYasI", trendScore: 82,
    description: "Black Adam dibebaskan dari penjara selama 5.000 tahun dan menggunakan kekuatannya melawan kebaikan.",
    visualDescription: "Black Adam melayang di udara dengan jubah hitam berkibar, petir mengelilingi tubuhnya.",
    director: "Jaume Collet-Serra"
  },

  // ─── INDONESIA ───────────────────────────────────────────────
  {
    id: 50, title: "Pengabdi Setan 2", year: 2022, rating: 7.9, type: "movie",
    genre: "Horror", language: "Indonesian", country: "Indonesia", category: "Trending",
    img: "https://image.tmdb.org/t/p/w500/eg300Qj4ZJ2n3n41P0oB5H9pQ8a.jpg",
    backdrop: "https://image.tmdb.org/t/p/original/eg300Qj4ZJ2n3n41P0oB5H9pQ8a.jpg",
    trailerId: "v8q8pL8G3XU", trendScore: 93,
    description: "Beberapa tahun setelah selamat dari kejadian mengerikan, keluarga Rini pindah ke rumah susun.",
    visualDescription: "Lorong rumah susun gelap diterangi kilatan lampu neon, sosok wanita bergaun putih di ujung lorong.",
    director: "Joko Anwar"
  },
  {
    id: 51, title: "KKN di Desa Penari", year: 2022, rating: 7.0, type: "movie",
    genre: "Horror", language: "Indonesian", country: "Indonesia", category: "Popular",
    img: "https://image.tmdb.org/t/p/w500/5p7KHPMstgTbvXhW4fFD9WAZHU.jpg",
    backdrop: "https://image.tmdb.org/t/p/original/5p7KHPMstgTbvXhW4fFD9WAZHU.jpg",
    trailerId: "vG2l-XWv8Wk", trendScore: 85,
    description: "Enam mahasiswa KKN di desa terpencil menghadapi serangkaian kejadian mistis.",
    visualDescription: "Enam mahasiswa berjalan beriringan membawa senter di tengah hutan bambu gelap dan berkabut.",
    director: "Awi Suryadi"
  },
  {
    id: 52, title: "The Raid", year: 2011, rating: 7.6, type: "movie",
    genre: "Action", language: "Indonesian", country: "Indonesia", category: "Top Rated",
    img: "https://image.tmdb.org/t/p/w500/vNQf9JFk8dE0N8Lq0eKMTAFBfpg.jpg",
    backdrop: "https://image.tmdb.org/t/p/original/n9g4bDFx52yRQoKgpBicvU1YGXg.jpg",
    trailerId: "LCDuRlSU4D0", trendScore: 90,
    description: "Sebuah tim polisi terjebak di gedung bertingkat yang dikuasai gembong narkoba.",
    visualDescription: "Rama meluncur di lorong sempit apartemen kumuh menggunakan ilmu bela diri Silat.",
    director: "Gareth H. Evans"
  },
  {
    id: 53, title: "The Raid 2", year: 2014, rating: 7.9, type: "movie",
    genre: "Action", language: "Indonesian", country: "Indonesia", category: "Top Rated",
    img: "https://image.tmdb.org/t/p/w500/gOB8c9Y5tPTZrFSzO9l6B8BMJKR.jpg",
    backdrop: "https://image.tmdb.org/t/p/original/gOB8c9Y5tPTZrFSzO9l6B8BMJKR.jpg",
    trailerId: "yHRiKfg7Lag", trendScore: 91,
    description: "Rama menyamar dalam kejahatan terorganisir Jakarta untuk membongkar korupsi dari dalam.",
    visualDescription: "Rama dan musuhnya bertarung di dapur restoran, wajan panas dan pisau dapur berputar cepat.",
    director: "Gareth H. Evans"
  },
  {
    id: 54, title: "Agak Laen", year: 2024, rating: 8.5, type: "movie",
    genre: "Comedy", language: "Indonesian", country: "Indonesia", category: "Popular",
    img: "https://image.tmdb.org/t/p/w500/qS9pS2vJvT2I7H8Z7yB7Vv3y3U.jpg",
    backdrop: "https://image.tmdb.org/t/p/original/qS9pS2vJvT2I7H8Z7yB7Vv3y3U.jpg",
    trailerId: "F8p2f-jDRE4", trendScore: 97,
    description: "Empat sekawan penjaga rumah hantu mencari cara baru untuk menakuti pengunjung pasar malam.",
    visualDescription: "Empat pria duduk di depan pintu rumah hantu yang bobrok dengan kostum hantu yang lucu.",
    director: "Muhadkly Acho"
  },
  {
    id: 55, title: "Perempuan Tanah Jahanam", year: 2019, rating: 6.9, type: "movie",
    genre: "Horror", language: "Indonesian", country: "Indonesia", category: "Trending",
    img: "https://image.tmdb.org/t/p/w500/6bh97Goy8KUBgB94RJ0B2QC4kHh.jpg",
    backdrop: "https://image.tmdb.org/t/p/original/6bh97Goy8KUBgB94RJ0B2QC4kHh.jpg",
    trailerId: "4W4HgEDW-hM", trendScore: 82,
    description: "Maya dan Dini kembali ke desa asal Maya dan menemukan kutukan yang mengerikan.",
    visualDescription: "Dua perempuan berdiri di pinggir sawah berkabut tebal, desa tua di kejauhan beraura seram.",
    director: "Joko Anwar"
  },
  {
    id: 56, title: "Ngeri-Ngeri Sedap", year: 2022, rating: 8.6, type: "movie",
    genre: "Drama", language: "Indonesian", country: "Indonesia", category: "Top Rated",
    img: "https://image.tmdb.org/t/p/w500/xS9pS2vJvT2I7H8Z7yB7Vv3y3U.jpg",
    backdrop: "https://image.tmdb.org/t/p/original/xS9pS2vJvT2I7H8Z7yB7Vv3y3U.jpg",
    trailerId: "tEL6ANgR1Sw", trendScore: 92,
    description: "Pasangan suami istri pura-pura bertengkar demi mendapatkan perhatian anak-anak yang merantau.",
    visualDescription: "Bapak dan Mak duduk berhadapan di dapur rumah kayu Batak, ekspresi pura-pura marah penuh kasih sayang.",
    director: "Bene Dion Rajagukguk"
  },
  {
    id: 57, title: "Dilan 1990", year: 2018, rating: 7.0, type: "movie",
    genre: "Romance", language: "Indonesian", country: "Indonesia", category: "Popular",
    img: "https://image.tmdb.org/t/p/w500/vS9pS2vJvT2I7H8Z7yB7Vv3y3U.jpg",
    backdrop: "https://image.tmdb.org/t/p/original/vS9pS2vJvT2I7H8Z7yB7Vv3y3U.jpg",
    trailerId: "q7CWbsCLVUI", trendScore: 84,
    description: "Kisah cinta Dilan dan Milea di Bandung tahun 1990, romansa SMA yang tak terlupakan.",
    visualDescription: "Dilan menghampiri Milea di gerbang sekolah sambil tersenyum, motor butut terparkir di belakangnya.",
    director: "Fajar Bustomi"
  },
  {
    id: 58, title: "Laskar Pelangi", year: 2008, rating: 8.8, type: "movie",
    genre: "Drama", language: "Indonesian", country: "Indonesia", category: "Top Rated",
    img: "https://image.tmdb.org/t/p/w500/yS9pS2vJvT2I7H8Z7yB7Vv3y3U.jpg",
    backdrop: "https://image.tmdb.org/t/p/original/yS9pS2vJvT2I7H8Z7yB7Vv3y3U.jpg",
    trailerId: "PLHtcEzLc34", trendScore: 87,
    description: "Kisah menginspirasi sepuluh murid sekolah miskin di Belitung yang bermimpi besar.",
    visualDescription: "Sepuluh anak berseragam butut berlari gembira di pantai Belitung, batu granit besar bertebaran di latar.",
    director: "Riri Riza"
  },

  // ─── ANIME ────────────────────────────────────────────────────
  {
    id: 70, title: "Demon Slayer: Mugen Train", year: 2020, rating: 8.2, type: "movie",
    genre: "Anime", language: "Japanese", country: "Japan", category: "Popular",
    img: p("/xRnP7IgpFkVsMzDhkJhUBYgDmXy.jpg"),
    backdrop: b("/hJuDEbkIIDLvKRCLnBGMPzXzVKm.jpg"),
    trailerId: "cHtPkCdV98w", trendScore: 96,
    description: "Tanjiro dan kawan-kawannya melawan iblis kuat Enmu di atas kereta misterius.",
    visualDescription: "Kereta uap melaju kencang di malam hari, Tanjiro mengangkat pedangnya yang berpijar merah.",
    director: "Haruo Sotozaki"
  },
  {
    id: 71, title: "One Piece Film: Red", year: 2022, rating: 7.5, type: "movie",
    genre: "Anime", language: "Japanese", country: "Japan", category: "Popular",
    img: p("/yOm993lsJyPmBodlYjgpPwBjXP9.jpg"),
    backdrop: b("/iXy3x2Swk9TbIrqDAJr39yInQ6o.jpg"),
    trailerId: "Do1RkqLFbU4", trendScore: 88,
    description: "Luffy dan kru Straw Hat menghadiri konser Uta yang menyimpan rahasia besar.",
    visualDescription: "Uta menyanyi di panggung terapung di tengah lautan, cahaya oranye temaram menyinari rambutnya.",
    director: "Gorô Taniguchi"
  },
  {
    id: 72, title: "Dragon Ball Super: Broly", year: 2018, rating: 7.8, type: "movie",
    genre: "Anime", language: "Japanese", country: "Japan", category: "Popular",
    img: p("/5HHBPBVLL748LVuELyPPD9MljD7.jpg"),
    backdrop: b("/w2HYNMKFVqNquPPIuIXHriHBNIr.jpg"),
    trailerId: "XNRJ__MqTwg", trendScore: 89,
    description: "Goku dan Vegeta berhadapan dengan Broly, Saiyan dengan kekuatan tanpa batas.",
    visualDescription: "Broly dalam wujud Super Saiyan Legendaris meraung dengan aura hijau yang meledak-ledak.",
    director: "Tatsuya Nagamine"
  },
  {
    id: 73, title: "One Piece", year: 1999, rating: 8.9, type: "series",
    genre: "Anime", language: "Japanese", country: "Japan", category: "Series",
    img: p("/cMD9Ygz11zjJzAovURpO75Gc7AN.jpg"),
    backdrop: b("/2rmK7mnchw9Xr3XdiTFSxTTLXqv.jpg"),
    trailerId: "S8_YwFLCh4U", trendScore: 99,
    description: "Luffy dan kru bajak lautnya menjelajahi lautan demi mencari harta karun One Piece.",
    visualDescription: "Kapal Thousand Sunny berlayar gagah membelah ombak besar di Grand Line.",
    director: "Eiichiro Oda"
  },
  {
    id: 74, title: "Attack on Titan", year: 2013, rating: 9.0, type: "series",
    genre: "Anime", language: "Japanese", country: "Japan", category: "Series",
    img: p("/hTP1DtLGFamjfu8WqjnuQdP1n4i.jpg"),
    backdrop: b("/sHa3TlNIq6sxjKRRLfJHnHv6cT3.jpg"),
    trailerId: "MGRm4IzK1SQ", trendScore: 98,
    description: "Manusia berlindung di balik tembok raksasa dari ancaman Titan yang memakan manusia.",
    visualDescription: "Eren Yeager berteriak penuh amarah sambil mengenakan tali ODM, tembok Stone raksasa di belakangnya.",
    director: "Tetsuro Araki"
  },
  {
    id: 75, title: "Demon Slayer", year: 2019, rating: 8.7, type: "series",
    genre: "Anime", language: "Japanese", country: "Japan", category: "Series",
    img: p("/xUfRZu2mi8jH6SzQEJGP6tjBuYj.jpg"),
    backdrop: b("/xFEPVPeH5CHLqfUsiMoN5u8OuTN.jpg"),
    trailerId: "VeHi_UcE7oM", trendScore: 97,
    description: "Tanjiro menjadi Demon Slayer untuk mencari obat bagi adiknya yang berubah menjadi iblis.",
    visualDescription: "Tanjiro mengayunkan pedangnya dalam gaya nafas air, jejak air biru berliku di udara.",
    director: "Haruo Sotozaki"
  },
  {
    id: 76, title: "Fullmetal Alchemist: Brotherhood", year: 2009, rating: 9.1, type: "series",
    genre: "Anime", language: "Japanese", country: "Japan", category: "Top Rated",
    img: p("/lFLtaDPCbv1jDZMWQb1mVNTizPa.jpg"),
    backdrop: b("/jl2MnMFJk8dHDjFWU8QZrO6KXOi.jpg"),
    trailerId: "--IcmZkvL0Q", trendScore: 99,
    description: "Dua saudara alchemist mencari Philosopher's Stone untuk memulihkan tubuh mereka yang hilang.",
    visualDescription: "Edward dengan tangan kiri besi dan Roy Mustang berdiri berhadapan di bawah langit mendung.",
    director: "Yasuhiro Irie"
  },
  {
    id: 77, title: "Death Note", year: 2006, rating: 9.0, type: "series",
    genre: "Anime", language: "Japanese", country: "Japan", category: "Top Rated",
    img: p("/4mFWQOdaHxNubSkPetL6eYq697V.jpg"),
    backdrop: b("/jZVuq0FCHX3X35fUxNFBfMqGrj5.jpg"),
    trailerId: "NlJZ-YgAt-c", trendScore: 98,
    description: "Light Yagami menemukan buku catatan maut dan menggunakannya untuk membasmi penjahat.",
    visualDescription: "Light Yagami menuliskan nama di Death Note sambil senyum licik, Ryuk si shinigami mengintip.",
    director: "Tetsuro Araki"
  },
  {
    id: 78, title: "Hunter x Hunter", year: 2011, rating: 9.0, type: "series",
    genre: "Anime", language: "Japanese", country: "Japan", category: "Top Rated",
    img: p("/oKVzXKiJFKQcEpqHGUHVrWCvPoe.jpg"),
    backdrop: b("/4vCEEHmZABIEBdpAMSyvqzJxUhG.jpg"),
    trailerId: "D9iTQRB4XRk", trendScore: 97,
    description: "Gon Freecss berangkat mencari ayahnya yang merupakan pemburu legendaris.",
    visualDescription: "Gon dan Killua berlari berdampingan, aura Nen berwarna hijau dan biru memancar dari tubuh mereka.",
    director: "Hiroshi Kōjina"
  },
  {
    id: 79, title: "My Hero Academia", year: 2016, rating: 8.4, type: "series",
    genre: "Anime", language: "Japanese", country: "Japan", category: "Series",
    img: p("/oZCBxBLQfCpu8gJEGnmLz5XrFaT.jpg"),
    backdrop: b("/3c5vCE9mDjRXSXWWBCFfaEkUoRj.jpg"),
    trailerId: "D9cMaFZLGPQ", trendScore: 90,
    description: "Izuku Midoriya mewarisi kekuatan All Might dan bermimpi menjadi pahlawan terbesar.",
    visualDescription: "Deku berlari dengan kecepatan penuh, uap energi hijau mengepul dari tubuhnya.",
    director: "Kenji Nagasaki"
  },
  {
    id: 80, title: "Chainsaw Man", year: 2022, rating: 8.7, type: "series",
    genre: "Anime", language: "Japanese", country: "Japan", category: "Series",
    img: p("/npdB6eFzizki0WaZ1OvKcJrWe97.jpg"),
    backdrop: b("/vDHsLnmOBKZHxrWGhZFdFgbBwvx.jpg"),
    trailerId: "q15CRdE5Bv0", trendScore: 93,
    description: "Denji bergabung dengan iblis gergaji mesin Pochita dan menjadi pemburu iblis.",
    visualDescription: "Denji dengan kepala gergaji mesin yang berputar menerobos tubuh iblis dengan gerakan brutal.",
    director: "Ryu Nakayama"
  },
  {
    id: 81, title: "Frieren: Beyond Journey's End", year: 2023, rating: 9.0, type: "series",
    genre: "Anime", language: "Japanese", country: "Japan", category: "Top Rated",
    img: p("/5VkDL74kMSrZ6OEftbCjmPfERHe.jpg"),
    backdrop: b("/cG5kO4t9cKlxJHByJg4JpN9vSzl.jpg"),
    trailerId: "2yLwTkDAqAg", trendScore: 96,
    description: "Elf mage Frieren meneruskan petualangan setelah mengalahkan Raja Iblis.",
    visualDescription: "Frieren berdiri sendirian di reruntuhan kota kuno, rambutnya yang putih tertiup angin.",
    director: "Keiichiro Saito"
  },
  {
    id: 82, title: "Solo Leveling", year: 2024, rating: 8.6, type: "series",
    genre: "Anime", language: "Japanese", country: "Japan", category: "Series",
    img: p("/geCRueV3ElhRTr0xtJuSjNd4Nkl.jpg"),
    backdrop: b("/7F4f8SGpFqkVLRhKjBDvFcWJrgU.jpg"),
    trailerId: "QDMJD-SJfzs", trendScore: 98,
    description: "Sung Jin-woo, pemburu terlemah, mendapatkan sistem rahasia yang memungkinkannya naik level tanpa batas.",
    visualDescription: "Sung Jin-woo berdiri di antara ribuan bayangan prajurit yang tunduk padanya, matanya bersinar biru.",
    director: "Shunsuke Nakashige"
  },
  {
    id: 83, title: "Oshi no Ko", year: 2023, rating: 8.5, type: "series",
    genre: "Anime", language: "Japanese", country: "Japan", category: "Series",
    img: p("/trKpDSRGMK4YPKFXEiCcYo3bqBq.jpg"),
    backdrop: b("/nnv4bfuQbKYsMnDvCLDG3cBt5g2.jpg"),
    trailerId: "UKNn4o5MNpA", trendScore: 90,
    description: "Dr. Goro dilahirkan kembali sebagai anak dari bintang idol yang ia idolakan.",
    visualDescription: "Ai Hoshino bernyanyi di panggung konser dengan jubah putih, bintang berkilauan di matanya.",
    director: "Daisuke Hiramaki"
  },
  {
    id: 84, title: "Blue Lock", year: 2022, rating: 8.4, type: "series",
    genre: "Anime", language: "Japanese", country: "Japan", category: "Series",
    img: p("/GaJ1jL8VKdDkL1DXNHWM2Ny1Sr.jpg"),
    backdrop: b("/uHccX3hGTsHCHiWnxI3fhcANELm.jpg"),
    trailerId: "uLtkt8BonwM", trendScore: 89,
    description: "Program pelatihan ketat mengumpulkan 300 penyerang terbaik Jepang.",
    visualDescription: "Isagi Yoichi berlari kencang dengan bola di kaki, matanya penuh kalkulasi tajam.",
    director: "Tetsuaki Watanabe"
  },
  {
    id: 85, title: "Spy x Family", year: 2022, rating: 8.5, type: "series",
    genre: "Anime", language: "Japanese", country: "Japan", category: "Series",
    img: p("/a1H4TW6VyaQnGLhEe0gP7sT2eBH.jpg"),
    backdrop: b("/4kPEECPRujJdHKkTxCBekT45Q4w.jpg"),
    trailerId: "yLhBDGCNaas", trendScore: 92,
    description: "Seorang mata-mata, agen pembunuh, dan anak telepati berpura-pura menjadi keluarga normal.",
    visualDescription: "Loid, Yor, dan Anya berpose sebagai keluarga bahagia, Anya tersenyum lebar menyembunyikan rahasianya.",
    director: "Kazuhiro Furuhashi"
  },
  {
    id: 86, title: "Bleach: Thousand-Year Blood War", year: 2022, rating: 9.0, type: "series",
    genre: "Anime", language: "Japanese", country: "Japan", category: "Series",
    img: p("/eFiHAbVWBFEtADpCLUO3Mib2pOP.jpg"),
    backdrop: b("/jG5F5G2TivAcJQ5oa3L49RxKBSI.jpg"),
    trailerId: "e8YBesrkq_U", trendScore: 94,
    description: "Soul Society diserang oleh Wandenreich, kelompok Quincy yang disangka sudah musnah.",
    visualDescription: "Ichigo Kurosaki memegang Zanpakuto hitam raksasanya di medan perang yang hancur luluh.",
    director: "Tomohisa Taguchi"
  },
  {
    id: 87, title: "Kaiju No. 8", year: 2024, rating: 8.4, type: "series",
    genre: "Anime", language: "Japanese", country: "Japan", category: "Series",
    img: p("/7yfSCvWiTmVAEMG8Pk9UrZpxiTZ.jpg"),
    backdrop: b("/rPLQcvQ7xI1WtBzPxXGOHU78hE.jpg"),
    trailerId: "7OOCj7J_jMw", trendScore: 91,
    description: "Kafka Hibino, pekerja pembersih kaiju, terinfeksi dan berubah menjadi Kaiju sendiri.",
    visualDescription: "Kafka Hibino berubah wujud dalam lampu merah, ototnya menggelembung, matanya bersinar ungu.",
    director: "Shigeyuki Miya"
  },
  {
    id: 88, title: "Dandadan", year: 2024, rating: 8.7, type: "series",
    genre: "Anime", language: "Japanese", country: "Japan", category: "Series",
    img: p("/2EwGe5JvZUJbIf7jJQkfRkJCxXY.jpg"),
    backdrop: b("/u3hEaxl2bWWkZU6M8KUJB3aVNes.jpg"),
    trailerId: "m_Y-XJz3K_Y", trendScore: 91,
    description: "Seorang gadis medium dan penggemar okultisme bergabung menghadapi ancaman supernatural.",
    visualDescription: "Okarun berteriak histeris saat makhluk alien berwarna ungu menyerangnya di balik pohon besar.",
    director: "Fuga Yamashiro"
  },
  {
    id: 89, title: "One Punch Man", year: 2015, rating: 8.8, type: "series",
    genre: "Anime", language: "Japanese", country: "Japan", category: "Top Rated",
    img: p("/iE3s0lG5QVlcOz5zKNkFtXGOG8u.jpg"),
    backdrop: b("/lnDTxV1lMiK2eAuBpOJe3csmJBV.jpg"),
    trailerId: "ZdxgCEMIBiA", trendScore: 96,
    description: "Saitama menjadi pahlawan yang bisa mengalahkan semua musuh hanya dengan satu pukulan.",
    visualDescription: "Saitama berdiri dengan pose heroik menggelikan, tampak bosan sambil musuh kuat berjatuhan di sekitarnya.",
    director: "Shingo Natsume"
  },
  {
    id: 90, title: "Tokyo Ghoul", year: 2014, rating: 7.9, type: "series",
    genre: "Anime", language: "Japanese", country: "Japan", category: "Series",
    img: p("/1WpYBrVYQ9zzNGDKMWqnLpfMYCj.jpg"),
    backdrop: b("/jU1k5NymXBBMumVIOHWlhMnMHiH.jpg"),
    trailerId: "CkLRSZ-FqIQ", trendScore: 84,
    description: "Ken Kaneki berubah menjadi setengah ghoul setelah transplantasi organ.",
    visualDescription: "Ken Kaneki dengan topeng putih dan mata ghoul merahnya berdiri di lorong gelap penuh mayat.",
    director: "Shuhei Morita"
  },
  {
    id: 91, title: "Haikyuu!! The Dumpster Battle", year: 2024, rating: 8.5, type: "movie",
    genre: "Anime", language: "Japanese", country: "Japan", category: "Popular",
    img: p("/4ggIBKrMXQWkMfbEz02gzAR4Pce.jpg"),
    backdrop: b("/zPi4pBEBEJEI0OHNsQANnqHXXbu.jpg"),
    trailerId: "dpY_GmJal34", trendScore: 93,
    description: "Pertandingan yang sudah lama dinantikan antara Karasuno dan Nekoma di Nationals.",
    visualDescription: "Hinata melompat setinggi mungkin untuk spike, tatapannya fokus pada bola yang akan dipukul.",
    director: "Susumu Mitsunaka"
  },
  {
    id: 92, title: "Jujutsu Kaisen 0", year: 2021, rating: 8.5, type: "movie",
    genre: "Anime", language: "Japanese", country: "Japan", category: "Popular",
    img: p("/23eDBlADPnCiSHBat9gB49koXf4.jpg"),
    backdrop: "https://upload.wikimedia.org/wikipedia/en/2/22/Jujutsu_Kaisen_0_poster.png",
    trailerId: "WGiUXKgdIu4", trendScore: 94,
    description: "Yuta Okkotsu mendapatkan kekuatan dari Roh Terkutuk yang sangat kuat.",
    visualDescription: "Yuta memeluk Rika, roh terkutuk raksasa yang transparan, energi biru elektrik menggelegak.",
    director: "Sunghoo Park"
  },
  {
    id: 93, title: "Jujutsu Kaisen", year: 2020, rating: 8.6, type: "series",
    genre: "Anime", language: "Japanese", country: "Japan", category: "Series",
    img: p("/oumsMDGBGBbBXNLUfJPiIYw3vxc.jpg"),
    backdrop: b("/xFEPVPeH5CHLqfUsiMoN5u8OuTN.jpg"),
    trailerId: "4A_X-k5WTOA", trendScore: 95,
    description: "Yuji Itadori menelan jari kutukan Sukuna dan bergabung dengan sekolah Jujutsu.",
    visualDescription: "Yuji Itadori dengan tanda tato Sukuna di pipinya mengayunkan tinjunya berlapis energi cursed.",
    director: "Sunghoo Park"
  },
  {
    id: 94, title: "Naruto Shippuden", year: 2007, rating: 8.7, type: "series",
    genre: "Anime", language: "Japanese", country: "Japan", category: "Series",
    img: p("/xppeysfvDKVx775MFuH8Z9Ex78Y.jpg"),
    backdrop: b("/jhWAFJLerHBnB975DShPmkwfpb6.jpg"),
    trailerId: "QaczANHCZoM", trendScore: 97,
    description: "Naruto Uzumaki yang lebih dewasa menghadapi ancaman Akatsuki dan memperoleh kekuatan baru.",
    visualDescription: "Naruto dalam mode Sage menangkis serangan Pain di reruntuhan desa Konoha yang hancur.",
    director: "Hayato Date"
  },
  {
    id: 95, title: "Sword Art Online", year: 2012, rating: 7.8, type: "series",
    genre: "Anime", language: "Japanese", country: "Japan", category: "Series",
    img: p("/5kWQ90RiE8h2qMmAVXxqSLrBxQ6.jpg"),
    backdrop: b("/hilyBBfLmhqCJEFKoIPzJW2SQZL.jpg"),
    trailerId: "6ohYYtXg32g", trendScore: 86,
    description: "Kirito terjebak di dalam game virtual reality bersama ribuan pemain lain yang tidak bisa logout.",
    visualDescription: "Kirito berdiri di atas menara Aincrad yang mengambang di langit, pedang hitamnya terangkat.",
    director: "Tomohiko Itō"
  }
];
