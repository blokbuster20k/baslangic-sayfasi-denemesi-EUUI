// Parçacık Efektleri Yapılandırmaları
const particleConfigs = {
  circle: {
    particles: {
      number: { value: 40, density: { enable: true, value_area: 800 } },
      color: { value: "#3a86ff" },
      shape: { type: "circle" },
      opacity: { value: 0.5, random: true, anim: { enable: true, speed: 1, opacity_min: 0.1, sync: false } },
      size: { value: 4, random: true, anim: { enable: true, speed: 2, size_min: 0, sync: false } },
      line_linked: { enable: true, distance: 150, color: "#3a86ff", opacity: 0.4, width: 1 },
      move: { enable: true, speed: 2, direction: "none", random: false, straight: false, out_mode: "out", bounce: false }
    },
    interactivity: {
      detect_on: "canvas",
      events: { onhover: { enable: true, mode: "repulse" }, onclick: { enable: true, mode: "push" }, resize: true },
      modes: { repulse: { distance: 100, duration: 0.4 }, push: { particles_nb: 4 } }
    },
    retina_detect: true
  },
  line: {
    particles: {
      number: { value: 30, density: { enable: true, value_area: 800 } },
      color: { value: "#ff006e" },
      shape: { type: "edge" },
      opacity: { value: 0.5, random: true },
      size: { value: 1, random: false },
      line_linked: { enable: true, distance: 150, color: "#ff006e", opacity: 0.4, width: 1 },
      move: { enable: true, speed: 2, direction: "none", random: true, straight: false, out_mode: "out" }
    },
    interactivity: {
      detect_on: "canvas",
      events: { onhover: { enable: true, mode: "grab" }, onclick: { enable: true, mode: "push" }, resize: true },
      modes: { grab: { distance: 140, line_linked: { opacity: 1 } }, push: { particles_nb: 4 } }
    },
    retina_detect: true
  },
  star: {
    particles: {
      number: { value: 30, density: { enable: true, value_area: 800 } },
      color: { value: "#8338ec" },
      shape: { type: "star" },
      opacity: { value: 0.8, random: true },
      size: { value: 3, random: true },
      line_linked: { enable: false },
      move: { enable: true, speed: 2, direction: "none", random: true, straight: false, out_mode: "out" }
    },
    interactivity: {
      detect_on: "canvas",
      events: { onhover: { enable: true, mode: "repulse" }, onclick: { enable: true, mode: "push" }, resize: true },
      modes: { repulse: { distance: 100, duration: 0.4 }, push: { particles_nb: 4 } }
    },
    retina_detect: true
  },
  snow: {
    particles: {
      number: { value: 30, density: { enable: true, value_area: 800 } },
      color: { value: "#ffffff" },
      shape: { type: "circle" },
      opacity: { value: 0.8, random: true },
      size: { value: 3, random: true },
      line_linked: { enable: false },
      move: { enable: true, speed: 2, direction: "bottom", random: true, straight: false, out_mode: "out" }
    },
    interactivity: {
      detect_on: "canvas",
      events: { onhover: { enable: false }, onclick: { enable: false }, resize: true }
    },
    retina_detect: true
  },
  flame: {
    particles: {
      number: { value: 30, density: { enable: true, value_area: 800 } },
      color: { value: ["#ff4500", "#ff8c00", "#ffff00"] },
      shape: { type: "circle" },
      opacity: { value: 0.7, random: true },
      size: { value: 5, random: true, anim: { enable: true, speed: 3, size_min: 1, sync: false } },
      line_linked: { enable: false },
      move: { enable: true, speed: 3, direction: "top", random: true, straight: false, out_mode: "out" }
    },
    interactivity: {
      detect_on: "canvas",
      events: { onhover: { enable: true, mode: "repulse" }, onclick: { enable: true, mode: "push" }, resize: true },
      modes: { repulse: { distance: 100, duration: 0.4 }, push: { particles_nb: 4 } }
    },
    retina_detect: true
  },
  fireworks: {
    particles: {
      number: { value: 20, density: { enable: true, value_area: 800 } },
      color: { value: ["#ff0000", "#00ff00", "#0000ff", "#ffff00"] },
      shape: { type: "star" },
      opacity: { value: 1, random: true },
      size: { value: 3, random: true },
      line_linked: { enable: false },
      move: { enable: true, speed: 6, direction: "none", random: true, straight: false, out_mode: "out" }
    },
    interactivity: {
      detect_on: "canvas",
      events: { onhover: { enable: false }, onclick: { enable: true, mode: "push" }, resize: true },
      modes: { push: { particles_nb: 5 } }
    },
    retina_detect: true
  }
};

// Tema Tanımlamaları
const themes = {
  default: {
    background: 'linear-gradient(195deg, #0f172a 0%, #1e293b 100%)',
    taglines: [
        "Hoş Geldiniz!", "Kişisel Arayüzünüz", 
        "Verimli Çalışmalar dilerim efendim", 
        "Bir kapıyı bin kere çal, yine de Rabbinden ümidini kesme.",
        "Umutsuz durumlar yoktur, umutsuz insanlar vardır. Ben hiçbir zaman umudumu yitirmedim.",
        "Başlamak için mükemmel olman gerekmez, ama mükemmel olmak için başlaman gerekir."],
    cssClass: 'theme-default'
  },
  dark: {
    background: 'linear-gradient(195deg, #111827 0%, #1f2937 100%)',
    taglines: ["Karanlık Mod Aktif", "Göz Yorgunluğunu Azaltır", "Gece Kullanımı İçin İdeal", "Pil Tasarrufu Sağlar"],
    cssClass: 'theme-dark'
  },
  light: {
    background: 'linear-gradient(195deg, #f1f5f9 0%, #ffffff 100%)',
    taglines: ["Aydınlık Mod Aktif", "Gündüz Kullanımı İçin İdeal", "Net Görünüm", "Klasik Arayüz"],
    cssClass: 'theme-light'
  },
  turk: {
    background: 'images/arkaplan.jpg',
    taglines: ["Zulme Karşı Mukavemet!", "Vatan olsa ne rütbe-i perva genede dünyada zulmü yıkarız.", "Merkez-i Arz'ada atsalar bizi küre-i Arz'ı patlatır çıkarız", "Yaşasın Vatan!"],
    cssClass: 'theme-turk'
  },
  futuretech: {
    background: 'images/futuretech.jpg',
    taglines: ["Kodun Kalbinde Gelecek!", "Veri Akışında Yüzen Bir Zihin!", "Modernlik, Sadelikte Saklı!", "Işığın ve Gölgelerin Dansı!"],
    cssClass: 'theme-futuretech'
  },
  turan: {
    background: 'images/turan.jpg',
    taglines: ["Turan Birliği!", "Gökbörü’nün İzinde!", "Kızıl Elma’ya Doğru!", "Turan’da Birlik!"],
    cssClass: 'theme-turan'
  },
  tcdd: {
    background: 'images/tcdd.jpg',
    taglines: ["Demiryolu ile Geleceğe!", "TCDD 1923’ten Beri!", "Raylar Üzerinde Güç!", "Trenle Her Yere!"],
    cssClass: 'theme-tcdd'
  },
  minecraft: {
    background: 'images/minecraft.png',
    taglines: ["Kızıltaş mı? Açılın ben hallederim", "Elmas bulana kadar kazmaya devam!", "Ender Portalı açık, atlamaya yiyor mu?", "You Died! Bir şans daha? Hardcore değilse devam!"],
    cssClass: 'theme-minecraft'
  },
  anitkabir: {
    background: 'images/anitkabir.jpg',
    taglines: ["Egemenlik Kayıtsız Şartsız Milletindir!", "Yurtta Sulh, Cihanda Sulh!", "Ne Mutlu Türk’üm Diyene!", "Atatürk’ün İzinde!"],
    cssClass: 'theme-anitkabir'
  },
  neon: {
    background: 'images/neon.jpg',
    taglines: ["Neon Teması!", "Eu435", "❤", "NÇ510"],
    cssClass: 'theme-neon'
  },
  istanbul: {
    background: 'images/istanbul.jpg',
    taglines: ["İstanbul’un Fethi 1453!", "Dünyanın Başkenti!", "Boğaz’ın İncisi!", "Yedi Tepeli Şehir!"],
    cssClass: 'theme-istanbul'
  },
  transformers: {
    background: 'images/transformers.jpg',
    taglines: ["Autobotlar, Dönüşün!", "Decepticon’lara Karşı!", "Optimus Prime Önderliğinde!", "Cybertron’un Kaderi!"],
    cssClass: 'theme-transformers'
  },
  gradient: {
    background: 'linear-gradient(135deg,rgb(7, 101, 194),rgb(19, 112, 114),rgb(96, 60, 117))',
    taglines: ["Sadelik!", "Barış Huzur Güver!", "Orgeneral Kenan Evren!", "Tanrımıza Hamdolsun Türk Ordusu varolsun!"],
    cssClass: 'theme-gradient'
  },
  starwars: {
    background: 'images/starwars.jpg',
    taglines: ["Güç Sizinle Olsun!", "Jedi’nin Yolu!", "Sith’lere Karşı!", "Galaksi İçin Savaş!"],
    cssClass: 'theme-starwars',
    video: 'images/starwars-background.mp4'
  },
  wwii: {
    background: 'images/wwii.jpg',
    taglines: ["Zafer İçin Savaş!", "1945’e Giden Yol!", "Kahramanların Destanı!", "Tarih Yazanlar!"],
    cssClass: 'theme-wwii'
  },
  anime: {
    background: 'images/anime.jpg',
    taglines: ["Anime Dünyasına Hoş Geldin!", "Senpai’nin Yolu!", "Shonen’in Gücü!", "Kawaii ve Güçlü!"],
    cssClass: 'theme-anime'
  },
  space: {
    background: 'images/space.jpg',
    taglines: ["Sonsuzluğa ve Ötesine!", "Yıldızlar Arasında!", "Galaksinin Sınırları!", "Uzayın Derinlikleri!"],
    cssClass: 'theme-space'
  },
  nature: {
    background: 'images/nature.jpg',
    taglines: ["Doğanın Kalbinde!", "Yeşilin Huzuru!", "Tabiatın Nefesi!", "Orman ve Gökyüzü!"],
    cssClass: 'theme-nature'
  },
  ottoman: {
    background: 'images/ottoman.jpg',
    taglines: ["Osmanlı’nın Şanı!", "Cihan Devleti!", "Fatih’in İzinde!", "Tuğra ve Hilal!"],
    cssClass: 'theme-ottoman'
  },
  retro: {
    background: 'images/retro.jpg',
    taglines: ["Old But GOLD", "Long live the Empire", "Eski ve Sıkıntılı!", "Teknolojinin Kırılımcısı!"],
    cssClass: 'theme-retro' 
  },
  minimalist: {
    background: 'images/minimalist.jpg',
    taglines: ["Sadelik Güçtür!", "Az Çoktur!", "Minimalist Yaşam!", "Modern ve Temiz!"],
    cssClass: 'theme-minimalist'
  },
  gaming: {
    background: 'images/gaming.jpg',
    taglines: ["Oyun Zamanı!", "Level Atla!", "Efsane Ol!", "Klavye ve Fare!"],
    cssClass: 'theme-gaming'
  },
  cyberpunk: {
    background: 'images/cyberpunk.jpg',
    taglines: ["Neon Işıklar!", "Cyber Şehir!", "Geleceğin Sokakları!", "Teknolojinin Kalbi!"],
    cssClass: 'theme-cyberpunk'
  }
};

// Minecraft Bilgileri
const minecraftFacts = [
  "Minecraft, 2011 yılında Markus 'Notch' Persson tarafından yaratıldı ve şu anda dünyanın en çok satan oyunudur.",
  "Minecraft'ta bir Creeper, aslında başarısız olmuş bir domuz modelinden doğmuştur!",
  "Enderman'lar su ile temas ettiğinde zarar görür ve ışınlanırlar.",
  "Minecraft'ta bir gün, gerçek dünyada tam 20 dakika sürer (10 dakika gündüz, 10 dakika gece).",
  "Minecraft'taki en nadir biyom 'Modified Jungle Edge'dir ve bulunma olasılığı %0.0001'dir.",
  "Elmas madeni Y=12 seviyesinde en yaygın şekilde bulunur.",
  "Minecraft'ta 'Herobrine' adlı bir hayalet olduğuna dair söylentiler vardır, ancak Mojang bunu resmi olarak yalanlamıştır.",
  "Minecraft'ta 'Hardcore' modunda öldüğünüzde, dünya tamamen silinir ve kurtarılamaz.",
  "Minecraft'ta 'Nether' boyutu, gerçek dünyadan 8 kat daha küçüktür, bu yüzden hızlı seyahat için kullanılabilir.",
  "Minecraft'ta 'End' boyutunda bulunan Ender Dragon, oyunun resmi son patronudur."
];

const minecraftStats = [
  "Minecraft, 238 milyon kopya satarak tüm zamanların en çok satan video oyunu oldu.",
  "Minecraft'ın aylık aktif oyuncu sayısı 140 milyonun üzerindedir.",
  "Minecraft Education Edition, 115'ten fazla ülkede eğitim amaçlı kullanılmaktadır.",
  "Minecraft'ta teorik olarak 60 trilyon bloktan oluşan bir dünya oluşturulabilir.",
  "Minecraft'ın en popüler sunucularından bazıları günde 100.000'den fazla oyuncuya ev sahipliği yapar.",
  "Minecraft'ta bir elmas kazma, 1562 blok kazabilir.",
  "Minecraft'ta bir Creeper patlaması, TNT'nin %70'i kadar güçlüdür.",
  "Minecraft speedrun dünya rekoru, oyunu 2 dakikadan kısa sürede bitirmektir.",
  "Minecraft'ta 'Redstone' mekanizmaları, gerçek hayattaki elektrik devreleri gibi çalışır ve basit bilgisayarlar bile yapılabilir.",
  "Minecraft'ta bir köy, yaklaşık %2 ihtimalle zombi köyü olarak oluşabilir."
];

let minecraftInterval = null;

// Sayfa Yüklendiğinde
document.addEventListener('DOMContentLoaded', function() {
  // Parçacık efektlerini başlat
  loadParticles(particleConfigs.circle);
  
  // Saat ve tarih güncelleme
  updateTime();
  setInterval(updateTime, 1000);
  
  // Selamlama mesajını güncelle
  updateGreeting();
  
  // Hava durumu bilgilerini al
  getWeather();
  
  // Kaydedilmiş notları yükle
  loadSavedNotes();
  
  // Görevleri yükle
  loadSavedTodos();
  
  // Tagline rotasyonunu başlat
  startTaglineRotation();
  
  // Navigasyon öğelerine tıklama olayı ekle
  setupNavigation();
  
  // Tema ve ayarlar butonlarına tıklama olayı ekle
  document.getElementById('theme-toggle').addEventListener('click', toggleThemeSelector);
  document.getElementById('settings-toggle').addEventListener('click', toggleSettings);
  
  // Tema seçeneklerine tıklama olayı ekle
  setupThemeOptions();
  
  // Müzik çaları başlat
  initMusicPlayer();
  
  // Haberleri yükle
  loadNews();
  
  // Kaydedilmiş ayarları yükle
  loadSavedSettings();
  
  // Kaydedilmiş temayı yükle veya varsayılan temayı ayarla
  const savedTheme = localStorage.getItem('selectedTheme');
  if (savedTheme && themes[savedTheme]) {
    changeTheme(savedTheme);
  } else {
    changeTheme('default');
  }
  
  // Todo input alanına enter tuşu dinleyicisi ekle
  const todoInput = document.getElementById('todoInput');
  if (todoInput) {
    todoInput.addEventListener('keypress', function(e) {
      if (e.key === 'Enter') {
        addTodo();
      }
    });
  }
});

// Parçacık Efektlerini Yükleme
function loadParticles(config) {
  if (window.particlesJS) {
    particlesJS('particles-js', config);
  }
}

// Parçacık Efektlerini Değiştirme
function changeParticles() {
  const particleType = document.getElementById('particleSelect').value;
  if (particleType === 'none') {
    if (window.pJSDom && window.pJSDom.length > 0) {
      window.pJSDom[0].pJS.fn.vendors.destroypJS();
      window.pJSDom = [];
    }
  } else if (particleConfigs[particleType]) {
    loadParticles(particleConfigs[particleType]);
  }
}

// Partikül Özelleştirme
function changeParticleType() {
  const particleType = document.getElementById('particleType')?.value;
  const particleColor = document.getElementById('particleColor')?.value;
  const particleDensity = document.getElementById('particleDensity')?.value;
  if (particleType && particleConfigs[particleType]) {
    const config = { ...particleConfigs[particleType] };
    config.particles.color.value = particleColor || config.particles.color.value;
    config.particles.number.value = parseInt(particleDensity) || config.particles.number.value;
    loadParticles(config);
  }
}

// Saat ve Tarih Güncelleme
let clockFormat = '24';
function updateTime() {
  const now = new Date();
  let hours = now.getHours();
  const minutes = String(now.getMinutes()).padStart(2, '0');
  const seconds = String(now.getSeconds()).padStart(2, '0');
  let timeString;

  if (clockFormat === '12') {
    const period = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12 || 12;
    timeString = `${String(hours).padStart(2, '0')}:${minutes}:${seconds} ${period}`;
  } else {
    timeString = `${String(hours).padStart(2, '0')}:${minutes}:${seconds}`;
  }

  const timeElement = document.getElementById('time');
  const dateElement = document.getElementById('date');
  if (timeElement) timeElement.textContent = timeString;
  if (dateElement) {
    dateElement.textContent = now.toLocaleString('tr-TR', {
      weekday: 'long', month: 'long', day: 'numeric', year: 'numeric'
    });
  }
}

// Saat Formatını Değiştirme
function changeClockFormat() {
  const formatSelect = document.getElementById('clockFormatSelect');
  if (formatSelect) {
    clockFormat = formatSelect.value;
    updateTime();
  }
}

// Selamlama Mesajı
let customGreeting = '';
function updateGreeting() {
  const greetings = ['Günaydın!', 'Tünaydın!', 'İyi Akşamlar!', 'İyi Geceler!'];
  const now = new Date();
  const hour = now.getHours();
  let greeting;
  
  if (hour < 12) greeting = greetings[0];
  else if (hour < 17) greeting = greetings[1];
  else if (hour < 20) greeting = greetings[2];
  else greeting = greetings[3];
  
  const greetingElement = document.getElementById('greeting');
  if (greetingElement) {
    greetingElement.textContent = customGreeting || `${greeting} 𐰀𐰼𐰴𐰀𐰣`;
  }
}

// Özel Selamlama Mesajını Güncelleme
function updateCustomGreeting() {
  const customGreetingInput = document.getElementById('customGreeting');
  if (customGreetingInput) {
    customGreeting = customGreetingInput.value || '';
    updateGreeting();
  }
}

// Tagline Rotasyonu
function startTaglineRotation() {
  const taglines = document.querySelectorAll('.tagline');
  if (taglines.length === 0) return;
  
  let activeIndex = 0;
  taglines[0].classList.add('active');
  
  window.taglineInterval = setInterval(() => {
    taglines[activeIndex].classList.remove('active');
    activeIndex = (activeIndex + 1) % taglines.length;
    taglines[activeIndex].classList.add('active');
  }, document.getElementById('taglineSpeed')?.value || 5000);
}

// Navigasyon Kurulumu
function setupNavigation() {
  const navItems = document.querySelectorAll('.nav-item');
  navItems.forEach(item => {
    item.addEventListener('click', function() {
      navItems.forEach(i => i.classList.remove('active'));
      this.classList.add('active');
      
      const sections = document.querySelectorAll('.section');
      sections.forEach(section => section.classList.remove('active'));
      
      const sectionId = this.getAttribute('data-section');
      if (sectionId) {
        const section = document.getElementById(sectionId);
        if (section) section.classList.add('active');
      }
    });
  });
}

// Tema Seçici Aç/Kapat
function toggleThemeSelector() {
  const themeSelector = document.getElementById('themeSelector');
  if (themeSelector) {
    themeSelector.classList.toggle('active');
  }
}

// Tema Seçenekleri Kurulumu
function setupThemeOptions() {
  const themeOptions = document.querySelectorAll('.theme-option');
  themeOptions.forEach(option => {
    option.addEventListener('click', function() {
      const theme = this.getAttribute('data-theme');
      changeTheme(theme);
      toggleThemeSelector();
    });
  });
}

// Tema Değiştirme
function changeTheme(theme) {
  const selectedTheme = theme || document.getElementById('themeSelect').value;
  const themeData = themes[selectedTheme] || themes.default;

  // CSS sınıfını güncelle
  document.body.className = '';
  document.body.classList.add(themeData.cssClass);

  // Arka planı güncelle
  if (themeData.background.startsWith('linear-gradient')) {
    document.body.style.background = themeData.background;
  } else {
    const img = new Image();
    img.src = themeData.background;
    img.onload = () => {
      document.body.style.background = `url('${themeData.background}') no-repeat center center/cover`;
    };
    img.onerror = () => {
      document.body.style.background = 'linear-gradient(135deg, #333, #666)';
    };
  }

  // Tagline'ları güncelle
  const taglines = document.querySelectorAll('.tagline');
  taglines.forEach((tagline, index) => {
    tagline.textContent = themeData.taglines[index % themeData.taglines.length] || '';
    tagline.classList.remove('active');
  });
  if (taglines[0]) taglines[0].classList.add('active');

  // Tagline rotasyonunu yeniden başlat
  clearInterval(window.taglineInterval);
  startTaglineRotation();

  // Arka plan videosunu güncelle
  const video = document.getElementById('backgroundVideo');
  if (video && themeData.video) {
    video.style.display = 'block';
    video.src = themeData.video;
    video.play().catch(error => console.warn("Video oynatma hatası: ", error));
  } else if (video) {
    video.style.display = 'none';
  }

  // Minecraft bilgilerini güncelle
  updateMinecraftInfo();

  // Tema ayarını kaydet
  const themeSelect = document.getElementById('themeSelect');
  if (themeSelect && !theme) themeSelect.value = selectedTheme;
  localStorage.setItem('selectedTheme', selectedTheme);

  // Partikül renklerini güncelle
  updateParticleColors();
  
  // Tema seçiciyi kapat
  const themeSelector = document.getElementById('themeSelector');
  if (themeSelector) {
    themeSelector.classList.remove('active');
  }
}

// Partikül Renklerini Güncelleme
function updateParticleColors() {
  const primaryColor = getComputedStyle(document.documentElement).getPropertyValue('--primary').trim();
  const secondaryColor = getComputedStyle(document.documentElement).getPropertyValue('--secondary').trim();
  
  if (window.pJSDom && window.pJSDom.length > 0) {
    const particles = window.pJSDom[0].pJS.particles;
    if (particles.color.value instanceof Array) {
      particles.color.value = [primaryColor, secondaryColor];
    } else {
      particles.color.value = primaryColor;
      particles.line_linked.color = primaryColor;
    }
    window.pJSDom[0].pJS.fn.particlesRefresh();
  }
}

// Yazı Tipi Değiştirme
function changeFont() {
  const font = document.getElementById('fontSelect')?.value;
  if (font) {
    document.body.style.fontFamily = font;
    localStorage.setItem('selectedFont', font);
  }
}

// Arkaplan Bulanıklığı
function changeBlur() {
  const blurAmount = document.getElementById('blurAmount')?.value;
  const video = document.getElementById('backgroundVideo');
  const particles = document.getElementById('particles-js');
  if (video) video.style.filter = `blur(${blurAmount}px)`;
  if (particles) particles.style.filter = `blur(${blurAmount}px)`;
  localStorage.setItem('blurAmount', blurAmount);
}

// Arayüz Ölçeği
function changeScale() {
  const scale = document.getElementById('scaleAmount')?.value;
  document.documentElement.style.transform = `scale(${scale})`;
  document.documentElement.style.transformOrigin = 'top left';
  localStorage.setItem('scaleAmount', scale);
}

// Özel Arkaplan
function applyCustomBackground() {
  const customBackground = document.getElementById('customBackground')?.value;
  if (customBackground) {
    const img = new Image();
    img.src = customBackground;
    img.onload = () => {
      document.body.style.background = `url('${customBackground}') no-repeat center center/cover`;
      localStorage.setItem('customBackground', customBackground);
    };
    img.onerror = () => {
      alert('Geçersiz arkaplan URL’si!');
    };
  }
}

// Düşük Performans Modu
function toggleLowPerformance() {
  const lowPerformance = document.getElementById('lowPerformance')?.checked;
  const particles = document.getElementById('particles-js');
  if (particles) {
    particles.style.display = lowPerformance ? 'none' : 'block';
  }
  if (lowPerformance) {
    clearInterval(window.taglineInterval);
  } else {
    startTaglineRotation();
  }
  localStorage.setItem('lowPerformance', lowPerformance);
}

// Minecraft Bilgilerini Güncelleme
function updateMinecraftInfo() {
  const minecraftInfo = document.getElementById('minecraftInfo');
  const minecraftFact = document.getElementById('minecraftFact');
  const currentTheme = document.getElementById('themeSelect')?.value;

  if (minecraftInterval) {
    clearInterval(minecraftInterval);
    minecraftInterval = null;
  }

  if (minecraftInfo && minecraftFact) {
    if (currentTheme === 'minecraft') {
      minecraftInfo.classList.add('active');
      const combinedInfo = [...minecraftFacts, ...minecraftStats];
      minecraftFact.textContent = combinedInfo[Math.floor(Math.random() * combinedInfo.length)];
      
      minecraftInterval = setInterval(() => {
        const combinedInfo = [...minecraftFacts, ...minecraftStats];
        minecraftFact.textContent = combinedInfo[Math.floor(Math.random() * combinedInfo.length)];
      }, 10000);
    } else {
      minecraftInfo.classList.remove('active');
    }
  }
}

// Ayarlar Panelini Aç/Kapat
function toggleSettings() {
  const settingsPanel = document.getElementById('settingsPanel');
  if (settingsPanel) {
    settingsPanel.classList.toggle('active');
    
    if (settingsPanel.classList.contains('active')) {
      const headerHeight = document.querySelector('.top-header').offsetHeight;
      settingsPanel.style.top = `${headerHeight}px`;
      settingsPanel.style.right = '0';
      settingsPanel.style.bottom = 'auto';
    }
  }
}

// Ayarları Kaydet
function saveSettings() {
  const themeSelect = document.getElementById('themeSelect');
  if (themeSelect) {
    localStorage.setItem('selectedTheme', themeSelect.value);
    changeTheme(themeSelect.value);
  }
  
  const particleSelect = document.getElementById('particleSelect');
  if (particleSelect) {
    localStorage.setItem('selectedParticle', particleSelect.value);
    changeParticles();
  }
  
  const clockFormatSelect = document.getElementById('clockFormatSelect');
  if (clockFormatSelect) {
    localStorage.setItem('clockFormat', clockFormatSelect.value);
    clockFormat = clockFormatSelect.value;
    updateTime();
  }
  
  const customGreetingInput = document.getElementById('customGreeting');
  if (customGreetingInput) {
    localStorage.setItem('customGreeting', customGreetingInput.value);
    customGreeting = customGreetingInput.value;
    updateGreeting();
  }
  
  const weatherUnitSelect = document.getElementById('weatherUnitSelect');
  if (weatherUnitSelect) {
    localStorage.setItem('weatherUnit', weatherUnitSelect.value);
    weatherUnit = weatherUnitSelect.value;
    getWeather();
  }
  
  const fontSelect = document.getElementById('fontSelect');
  if (fontSelect) {
    localStorage.setItem('selectedFont', fontSelect.value);
    changeFont();
  }
  
  const blurAmount = document.getElementById('blurAmount');
  if (blurAmount) {
    localStorage.setItem('blurAmount', blurAmount.value);
    changeBlur();
  }
  
  const scaleAmount = document.getElementById('scaleAmount');
  if (scaleAmount) {
    localStorage.setItem('scaleAmount', scaleAmount.value);
    changeScale();
  }
  
  const lowPerformance = document.getElementById('lowPerformance');
  if (lowPerformance) {
    localStorage.setItem('lowPerformance', lowPerformance.checked);
    toggleLowPerformance();
  }
  
  toggleSettings();
  alert('Ayarlar başarıyla kaydedildi!');
}

// Kaydedilmiş Ayarları Yükle
function loadSavedSettings() {
  const savedTheme = localStorage.getItem('selectedTheme');
  if (savedTheme) {
    const themeSelect = document.getElementById('themeSelect');
    if (themeSelect) themeSelect.value = savedTheme;
    changeTheme(savedTheme);
  }
  
  const savedParticle = localStorage.getItem('selectedParticle');
  if (savedParticle) {
    const particleSelect = document.getElementById('particleSelect');
    if (particleSelect) particleSelect.value = savedParticle;
    if (savedParticle !== 'none') loadParticles(particleConfigs[savedParticle]);
  }
  
  const savedClockFormat = localStorage.getItem('clockFormat');
  if (savedClockFormat) {
    const clockFormatSelect = document.getElementById('clockFormatSelect');
    if (clockFormatSelect) clockFormatSelect.value = savedClockFormat;
    clockFormat = savedClockFormat;
  }
  
  const savedCustomGreeting = localStorage.getItem('customGreeting');
  if (savedCustomGreeting) {
    const customGreetingInput = document.getElementById('customGreeting');
    if (customGreetingInput) customGreetingInput.value = savedCustomGreeting;
    customGreeting = savedCustomGreeting;
  }
  
  const savedWeatherUnit = localStorage.getItem('weatherUnit');
  if (savedWeatherUnit) {
    const weatherUnitSelect = document.getElementById('weatherUnitSelect');
    if (weatherUnitSelect) weatherUnitSelect.value = savedWeatherUnit;
    weatherUnit = savedWeatherUnit;
  }
  
  const savedFont = localStorage.getItem('selectedFont');
  if (savedFont) {
    const fontSelect = document.getElementById('fontSelect');
    if (fontSelect) fontSelect.value = savedFont;
    changeFont();
  }
  
  const savedBlur = localStorage.getItem('blurAmount');
  if (savedBlur) {
    const blurAmount = document.getElementById('blurAmount');
    if (blurAmount) blurAmount.value = savedBlur;
    changeBlur();
  }
  
  const savedScale = localStorage.getItem('scaleAmount');
  if (savedScale) {
    const scaleAmount = document.getElementById('scaleAmount');
    if (scaleAmount) scaleAmount.value = savedScale;
    changeScale();
  }
  
  const savedLowPerformance = localStorage.getItem('lowPerformance') === 'true';
  if (savedLowPerformance) {
    const lowPerformance = document.getElementById('lowPerformance');
    if (lowPerformance) lowPerformance.checked = savedLowPerformance;
    toggleLowPerformance();
  }
  
  const savedCustomBackground = localStorage.getItem('customBackground');
  if (savedCustomBackground) {
    const customBackground = document.getElementById('customBackground');
    if (customBackground) customBackground.value = savedCustomBackground;
    applyCustomBackground();
  }
}

// Hava Durumu
let weatherUnit = 'C';
let lastWeatherUpdate = 0;
const WEATHER_UPDATE_INTERVAL = 10 * 60 * 1000; // 10 dakika

async function getWeather() {
  const now = Date.now();
  if (now - lastWeatherUpdate >= WEATHER_UPDATE_INTERVAL) {
    try {
      // API anahtarı doğrudan tanımlandı
      const weatherApiKey = 'd3478a747fff41d98e9161053241711'; // API anahtarı doğrudan tanımlandı
      const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=${weatherApiKey}&q=Nazilli&aqi=no`);
      if (!response.ok) throw new Error('Hava durumu verileri alınamadı');
      const data = await response.json();
      
      const weatherTranslations = {
        "Clear": "Açık", "Partly cloudy": "Parçalı bulutlu", "Cloudy": "Bulutlu",
        "Overcast": "Kapalı", "Mist": "Sisli", "Patchy rain possible": "Yer yer yağmur ihtimali",
        "Light rain": "Hafif yağmur", "Moderate rain": "Orta şiddette yağmur",
        "Heavy rain": "Yoğun yağmur", "Thunderstorm": "Gök gürültülü fırtına",
        "Snow": "Kar", "Fog": "Sis", "Drizzle": "Çiseleme", "Sunny": "Güneşli"
      };
      
      const weatherIcons = {
        "Açık": "fa-sun", "Güneşli": "fa-sun", "Parçalı bulutlu": "fa-cloud-sun",
        "Bulutlu": "fa-cloud", "Kapalı": "fa-cloud", "Sisli": "fa-smog",
        "Yer yer yağmur ihtimali": "fa-cloud-rain", "Hafif yağmur": "fa-cloud-showers-heavy",
        "Orta şiddette yağmur": "fa-cloud-showers-heavy", "Yoğun yağmur": "fa-cloud-showers-heavy",
        "Gök gürültülü fırtına": "fa-bolt", "Kar": "fa-snowflake", "Sis": "fa-smog",
        "Çiseleme": "fa-cloud-rain"
      };
      
      const condition = weatherTranslations[data.current.condition.text] || data.current.condition.text;
      const iconClass = weatherIcons[condition] || "fa-cloud";
      let temp = weatherUnit === 'C' ? `${data.current.temp_c}°C` : `${data.current.temp_f}°F`;

      const weatherIcon = document.getElementById('weatherIcon');
      const weatherCondition = document.getElementById('weatherCondition');
      const weatherTemp = document.getElementById('weatherTemp');
      const weatherHumidity = document.getElementById('weatherHumidity');
      const weatherWind = document.getElementById('weatherWind');

      if (weatherIcon) weatherIcon.className = `fas ${iconClass}`;
      if (weatherCondition) weatherCondition.textContent = condition;
      if (weatherTemp) weatherTemp.textContent = temp;
      if (weatherHumidity) weatherHumidity.textContent = `${data.current.humidity}%`;
      if (weatherWind) weatherWind.textContent = `${data.current.wind_kph} km/s`;

      lastWeatherUpdate = now;
    } catch (error) {
      console.error('Hava durumu alınamadı:', error);
      const weatherCondition = document.getElementById('weatherCondition');
      if (weatherCondition) weatherCondition.textContent = 'Hava durumu alınamadı. Lütfen tekrar deneyin.';
    }
  }
}

// Hava Durumu Birimini Değiştirme
function changeWeatherUnit() {
  const unitSelect = document.getElementById('weatherUnitSelect');
  if (unitSelect) {
    weatherUnit = unitSelect.value;
    getWeather();
  }
}

// Notlar
function saveNotes() {
  const notes = document.getElementById('notes')?.value;
  if (notes !== undefined) {
    localStorage.setItem('userNotes', notes);
    alert('Notlarınız kaydedildi!');
  }
}

function loadSavedNotes() {
  const notesElement = document.getElementById('notes');
  if (notesElement) {
    const savedNotes = localStorage.getItem('userNotes');
    if (savedNotes) notesElement.value = savedNotes;
  }
}

// Görevler
function addTodo() {
  const input = document.getElementById('todoInput');
  const list = document.getElementById('todoList');
  if (input && list && input.value.trim()) {
    const li = document.createElement('li');
    li.innerHTML = `
      <span>${input.value}</span>
      <div>
        <button onclick="editTodo(this)" aria-label="Görevi düzenle"><i class="fas fa-edit"></i></button>
        <button onclick="deleteTodo(this)" aria-label="Görevi sil"><i class="fas fa-trash"></i></button>
      </div>
    `;
    list.appendChild(li);
    input.value = '';
    saveTodos();
  }
}

function editTodo(button) {
  const li = button.closest('li');
  const span = li.querySelector('span');
  const newText = prompt('Görevi düzenle:', span.textContent);
  if (newText && newText.trim()) {
    span.textContent = newText;
    saveTodos();
  }
}

function deleteTodo(button) {
  const li = button.closest('li');
  li.remove();
  saveTodos();
}

function saveTodos() {
  const list = document.getElementById('todoList');
  if (list) {
    const todos = [];
    list.querySelectorAll('li span').forEach(span => todos.push(span.textContent));
    localStorage.setItem('userTodos', JSON.stringify(todos));
  }
}

function loadSavedTodos() {
  const list = document.getElementById('todoList');
  if (list) {
    const savedTodos = localStorage.getItem('userTodos');
    if (savedTodos) {
      const todos = JSON.parse(savedTodos);
      todos.forEach(todo => {
        const li = document.createElement('li');
        li.innerHTML = `
          <span>${todo}</span>
          <div>
            <button onclick="editTodo(this)" aria-label="Görevi düzenle"><i class="fas fa-edit"></i></button>
            <button onclick="deleteTodo(this)" aria-label="Görevi sil"><i class="fas fa-trash"></i></button>
          </div>
        `;
        list.appendChild(li);
      });
    }
  }
}

// Müzik Çalar
let player;
let currentTrackIndex = 0;
let playlist = [];
let filteredPlaylist = [];

function initMusicPlayer() {
  player = document.getElementById('audioPlayer');
  if (!player) return;
  
  // Müzik listesi
  playlist = [
    { path: '../arayüz4.5/music/imperialmarch.mp3', name: 'Imperial March', genre: 'Film Müziği' },
    { path: '../arayüz4.5/music/Panzerlied.mp3', name: 'Panzerlied', genre: 'Epik' },
    { path: '../arayüz4.5/music/videoplayback.mp3', name: 'Selda B. Bir Daha Gel Samsundan', genre: 'Nostaljik' },
    { path: '../arayüz4.5/music/laststand.mp3', name: 'Sabaton Last Stand', genre: 'Epik' },
    { path: '../arayüz4.5/music/wingedhussars.mp3', name: 'Sabaton Winged Hussars', genre: 'Epik' },
    { path: '../arayüz4.5/music/korsan.mp3', name: 'Karayip Korsanları', genre: 'Film Müziği' },
    { path: '../arayüz4.5/music/yürürün.mp3', name: 'Hacivat ve Karagöz Yürürün', genre: 'Nostaljik' },
    { path: '../arayüz4.5/music/nasimi.mp3', name: 'Sami Yusuf Nasimi', genre: 'Epik' },
    { path: '../arayüz4.5/music/twostepbefore.mp3', name: 'Cehenneme 2 Adım', genre: 'Film Müziği' }
  ];
  filteredPlaylist = [...playlist];
  
  // İlk şarkıyı yükle ve otomatik oynat
  loadTrack(0);
  updatePlaylistUI();
  player.play().catch(error => {
    console.warn('Otomatik oynatma engellendi:', error);
    document.getElementById('playPauseBtn').innerHTML = '<i class="fas fa-play"></i>';
  });
  
  // Şarkı bittiğinde sonraki şarkıya geç
  player.addEventListener('ended', () => changeTrack('next'));
  
  // İlerleme çubuğunu güncelle
  player.addEventListener('timeupdate', updateProgress);
  
  // Oynatma başladığında buton ikonunu güncelle
  player.addEventListener('play', () => {
    document.getElementById('playPauseBtn').innerHTML = '<i class="fas fa-pause"></i>';
  });
  
  // Duraklatıldığında buton ikonunu güncelle
  player.addEventListener('pause', () => {
    document.getElementById('playPauseBtn').innerHTML = '<i class="fas fa-play"></i>';
  });
}

function loadTrack(index) {
  currentTrackIndex = ((index % filteredPlaylist.length) + filteredPlaylist.length) % filteredPlaylist.length;
  const track = filteredPlaylist[currentTrackIndex];
  
  if (player) {
    player.src = track.path;
    player.load();
  }
  
  const trackTitle = document.getElementById('trackTitle');
  if (trackTitle) trackTitle.textContent = track.name;
}

function togglePlayPause() {
  if (player.paused) {
    player.play().catch(error => console.warn('Oynatma başarısız:', error));
  } else {
    player.pause();
  }
}

function changeTrack(direction) {
  if (direction === 'next') {
    loadTrack(currentTrackIndex + 1);
  } else if (direction === 'previous') {
    loadTrack(currentTrackIndex - 1);
  }
  player.play().catch(error => console.warn('Oynatma başarısız:', error));
}

function setVolume() {
  const volume = document.getElementById('volume').value;
  if (player) player.volume = volume;
}

function updateProgress() {
  if (player && player.duration) {
    const progress = document.getElementById('progress');
    const percentage = (player.currentTime / player.duration) * 100;
    if (progress) progress.style.width = `${percentage}%`;
  }
}

function seek(event) {
  const progressBar = document.querySelector('.progress-bar');
  if (player && progressBar) {
    const rect = progressBar.getBoundingClientRect();
    const clickX = event.clientX - rect.left;
    const percentage = clickX / rect.width;
    player.currentTime = percentage * player.duration;
  }
}

function filterPlaylist() {
  const genre = document.getElementById('genreFilter').value;
  filteredPlaylist = genre === 'all' ? [...playlist] : playlist.filter(track => track.genre === genre);
  currentTrackIndex = 0;
  loadTrack(0);
  updatePlaylistUI();
}

function togglePlaylist() {
  const playlistElement = document.getElementById('playlist');
  if (playlistElement) {
    playlistElement.style.display = playlistElement.style.display === 'block' ? 'none' : 'block';
  }
}

function updatePlaylistUI() {
  const playlistElement = document.getElementById('playlist');
  if (playlistElement) {
    playlistElement.innerHTML = '';
    filteredPlaylist.forEach((track, index) => {
      const li = document.createElement('li');
      li.textContent = `${track.name} (${track.genre})`;
      li.style.cursor = 'pointer';
      li.style.padding = '0.5rem';
      li.style.borderBottom = '1px solid var(--border)';
      if (index === currentTrackIndex) li.style.background = 'var(--hover)';
      li.addEventListener('click', () => {
        loadTrack(index);
        player.play().catch(error => console.warn('Oynatma başarısız:', error));
      });
      playlistElement.appendChild(li);
    });
  }
}

// Haberler
async function loadNews() {
  const newsList = document.getElementById('newsList');
  const category = document.getElementById('newsCategory').value || 'gundem';
  if (!newsList) return;
  
  newsList.innerHTML = '<p>Yükleniyor...</p>';
  
  try {
    const response = await fetch(`https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Frss.haberler.com%2Frss.asp%3Fkategori%3D${category}`);
    if (!response.ok) throw new Error('Haberler alınamadı');
    const data = await response.json();
    
    newsList.innerHTML = '';
    data.items.slice(0, 10).forEach(item => {
      const div = document.createElement('div');
      div.className = 'news-item';
      div.style.padding = '1rem';
      div.style.borderBottom = '1px solid var(--border)';
      div.innerHTML = `
        <h3 style="font-size: 1.1rem; color: var(--primary);">${item.title}</h3>
        <p style="color: var(--text-secondary);">${item.description ? item.description.replace(/<[^>]+>/g, '').substring(0, 100) + '...' : 'Açıklama mevcut değil'}</p>
        <a href="${item.link}" target="_blank" style="color: var(--secondary);">Devamını oku</a>
      `;
      newsList.appendChild(div);
    });
  } catch (error) {
    console.error('Haberler alınamadı:', error);
    newsList.innerHTML = '<p>Haberler yüklenemedi. Lütfen tekrar deneyin.</p>';
  }
}