/* ============================================================
   Mashimaro Financial — mockup logic
   ============================================================ */
const LS_KEY = 'mashimaro.fin.v1';

const POS = [
  { key:'installment', label:'Bayar Cicilan',  short:'Cicilan',     color:'#F97362', soft:'#FFEDE9', icon:'card',      desc:'Cicilan & kewajiban' },
  { key:'operational', label:'Operasional',    short:'Operasional', color:'#0FA98F', soft:'#E3F5F0', icon:'briefcase', desc:'Biaya usaha harian' },
  { key:'savings',     label:'Tabungan',       short:'Tabungan',    color:'#5B8DEF', soft:'#EAF1FE', icon:'piggy',     desc:'Sisihkan untuk masa depan' },
  { key:'emergency',   label:'Dana Darurat',   short:'Darurat',     color:'#F2B33D', soft:'#FDF3DE', icon:'shield',    desc:'Simpanan darurat' }
];
const DEFAULT_RATIOS = { installment:20, operational:50, savings:10, emergency:20 };

const NAV = [
  { key:'home',    label:'Beranda',    icon:'home' },
  { key:'income',  label:'Pemasukan',  icon:'income' },
  { key:'expense', label:'Pengeluaran',icon:'expense' },
  { key:'budget',  label:'Alokasi',    icon:'pie' },
  { key:'report',  label:'Laporan',    icon:'report' }
];

const ICON = {
  home:'<path d="M3 10.6 12 3l9 7.6V21a1 1 0 0 1-1 1h-5.2v-7.2H9.2V22H4a1 1 0 0 1-1-1z"/>',
  income:'<circle cx="12" cy="12" r="9"/><path d="M12 7.5v9M8.4 12.6 12 16.2l3.6-3.6"/>',
  expense:'<circle cx="12" cy="12" r="9"/><path d="M12 16.5v-9M8.4 11.4 12 7.8l3.6 3.6"/>',
  pie:'<path d="M21.2 15.9A10 10 0 1 1 8.1 2.8"/><path d="M22 12A10 10 0 0 0 12 2v10z"/>',
  report:'<path d="M3 3v18h18"/><path d="M7.5 15v3.5M12 9.5v9M16.5 5.5v13"/>',
  gear:'<circle cx="12" cy="12" r="3.1"/><path d="M19.4 15a1.7 1.7 0 0 0 .34 1.87l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06A1.7 1.7 0 0 0 15 19.4a1.7 1.7 0 0 0-1 1.55V21a2 2 0 0 1-4 0v-.09A1.7 1.7 0 0 0 9 19.4a1.7 1.7 0 0 0-1.87.34l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06A1.7 1.7 0 0 0 4.6 15a1.7 1.7 0 0 0-1.55-1H3a2 2 0 0 1 0-4h.09A1.7 1.7 0 0 0 4.6 9a1.7 1.7 0 0 0-.34-1.87l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06A1.7 1.7 0 0 0 9 4.6a1.7 1.7 0 0 0 1-1.55V3a2 2 0 0 1 4 0v.09a1.7 1.7 0 0 0 1 1.55 1.7 1.7 0 0 0 1.87-.34l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06A1.7 1.7 0 0 0 19.4 9c.14.6.66 1.03 1.28 1.03H21a2 2 0 0 1 0 4h-.09a1.7 1.7 0 0 0-1.51 1z"/>',
  plus:'<path d="M12 5v14M5 12h14"/>',
  chevL:'<path d="m15 18-6-6 6-6"/>',
  chevR:'<path d="m9 18 6-6-6-6"/>',
  close:'<path d="M18 6 6 18M6 6l12 12"/>',
  edit:'<path d="M12 20h9"/><path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4z"/>',
  trash:'<path d="M3 6h18M8 6V4h8v2M19 6l-1 14H6L5 6"/>',
  download:'<path d="M12 3v12M7 10l5 5 5-5"/><path d="M4 21h16"/>',
  print:'<path d="M6 9V3h12v6"/><rect x="4" y="9" width="16" height="8" rx="2"/><path d="M6 17v4h12v-4"/>',
  check:'<path d="m5 13 4 4L19 7"/>',
  wallet:'<rect x="3" y="6" width="18" height="14" rx="3"/><path d="M16 13h2"/>',
  card:'<rect x="2" y="5" width="20" height="14" rx="3"/><path d="M2 10h20"/>',
  shield:'<path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6z"/>',
  piggy:'<path d="M4 12a6 6 0 0 1 6-6h5l3 3h2v4l-2 1v4h-4v-1H9v1H5v-4l-1-1z"/><path d="M7 9h.01"/>',
  briefcase:'<rect x="3" y="7" width="18" height="13" rx="2.5"/><path d="M8.5 7V5h7v2"/>',
  alert:'<path d="M12 3 2.6 20h18.8z"/><path d="M12 9.5v4.5M12 17.2h.01"/>',
  note:'<path d="M5 3h14v18H5z"/><path d="M9 8h6M9 12h6M9 16h4"/>',
  spark:'<path d="M12 3v4M12 17v4M3 12h4M17 12h4M6 6l2.6 2.6M15.4 15.4 18 18M18 6l-2.6 2.6M8.6 15.4 6 18"/>',
  dots:'<circle cx="5" cy="12" r="1.4"/><circle cx="12" cy="12" r="1.4"/><circle cx="19" cy="12" r="1.4"/>',
  arrowUp:'<path d="M7 17 17 7M8 7h9v9"/>',
  arrowDown:'<path d="M7 7l10 10M17 8v9H8"/>',
  back:'<path d="m14 6-6 6 6 6"/>',
  file:'<path d="M6 3h8l4 4v14H6z"/><path d="M14 3v4h4"/>',
  refresh:'<path d="M20 11a8 8 0 1 0-2.3 6.7"/><path d="M20 4v7h-7"/>',
  sparkle:'<path d="M12 3l1.9 5.1L19 10l-5.1 1.9L12 17l-1.9-5.1L5 10l5.1-1.9z"/>',
  filter:'<path d="M3 5h18l-7 8v6l-4 2v-8z"/>',
  phone:'<rect x="6" y="2.5" width="12" height="19" rx="3"/><path d="M10.5 18.5h3"/>',
  share:'<path d="M12 3v12"/><path d="m8 7 4-4 4 4"/><path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-7"/>',
  globe:'<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c2.6 2.6 4 5.7 4 9s-1.4 6.4-4 9c-2.6-2.6-4-5.7-4-9s1.4-6.4 4-9z"/>',
  monitor:'<rect x="2.5" y="4" width="19" height="12.5" rx="2.5"/><path d="M9 20.5h6M12 16.5v4"/>'
};

function icon(name, cls){
  return '<svg class="'+(cls||'')+'" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">'+(ICON[name]||'')+'</svg>';
}

/* ---------------- helpers ---------------- */
const nf = new Intl.NumberFormat('id-ID');
const pad2 = n => String(n).padStart(2,'0');
const uid = () => 'x' + Date.now().toString(36) + Math.random().toString(36).slice(2,7);

function rp(n){ return 'Rp ' + nf.format(Math.round(Number(n)||0)); }
function rpShort(n){
  n = Number(n)||0;
  if (Math.abs(n) >= 1e9) return 'Rp ' + nf.format(Math.round(n/1e9*10)/10) + ' M';
  if (Math.abs(n) >= 1e6) return 'Rp ' + nf.format(Math.round(n/1e6*10)/10) + ' jt';
  if (Math.abs(n) >= 1e3) return 'Rp ' + nf.format(Math.round(n/1e3)) + ' rb';
  return 'Rp ' + nf.format(n);
}
function esc(s){
  return String(s==null?'':s).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
}
function curMonth(){ return monthKey(new Date()); }
function monthKey(d){ return d.getFullYear() + '-' + pad2(d.getMonth()+1); }
function monthLabel(key){
  const [y,m] = key.split('-').map(Number);
  return new Date(y, m-1, 1).toLocaleDateString('id-ID',{month:'long', year:'numeric'});
}
function monthShort(key){
  const [y,m] = key.split('-').map(Number);
  return new Date(y, m-1, 1).toLocaleDateString('id-ID',{month:'short', year:'numeric'});
}
function shiftMonth(key, delta){
  const [y,m] = key.split('-').map(Number);
  return monthKey(new Date(y, m-1+delta, 1));
}
function txDateLabel(dateStr){
  const d = new Date(dateStr + 'T00:00:00');
  const t = new Date(); t.setHours(0,0,0,0);
  const diff = Math.round((t - d)/86400000);
  if (diff === 0) return 'Hari ini';
  if (diff === 1) return 'Kemarin';
  return d.toLocaleDateString('id-ID',{day:'numeric', month:'short', year:'numeric'});
}
function txDateShort(dateStr){
  return new Date(dateStr+'T00:00:00').toLocaleDateString('id-ID',{day:'numeric', month:'short'});
}

/* ---------------- state & seed ---------------- */
function defaultCategories(){
  return {
    income:[
      {id:'ci1', name:'Penjualan Produk'},
      {id:'ci2', name:'Jasa Rakit'},
      {id:'ci3', name:'Modal Usaha'},
      {id:'ci4', name:'Lain-lain'}
    ],
    expense:[
      {id:'ce1', name:'Bahan Baku',        pos:'operational'},
      {id:'ce2', name:'Operasional Harian',pos:'operational'},
      {id:'ce3', name:'Gaji Karyawan',     pos:'operational'},
      {id:'ce4', name:'Iklan & Marketing', pos:'operational'},
      {id:'ce5', name:'Transport',         pos:'operational'},
      {id:'ce6', name:'Cicilan / Kredit',  pos:'installment'},
      {id:'ce7', name:'Tabungan',          pos:'savings'},
      {id:'ce8', name:'Dana Darurat',      pos:'emergency'},
      {id:'ce9', name:'Lain-lain',         pos:'operational'}
    ]
  };
}

function seedData(){
  const s = {
    version:1,
    settings:{ ratios:Object.assign({}, DEFAULT_RATIOS) },
    categories:defaultCategories(),
    transactions:[]
  };
  const m  = curMonth();
  const m0 = shiftMonth(m, -1);
  const cid = (type,name) => {
    const c = s.categories[type].find(x => x.name === name);
    return c ? c.id : null;
  };
  const add = (month, day, type, catName, note, amount) => {
    s.transactions.push({
      id: uid(), type, categoryId: cid(type,catName),
      date: month + '-' + pad2(day), note, amount
    });
  };
  /* bulan lalu */
  add(m0, 3,  'income',  'Penjualan Produk', 'Penjualan marketplace', 3800000);
  add(m0, 7,  'income',  'Jasa Rakit',       'Jasa rakit 4 unit', 2200000);
  add(m0, 12, 'income',  'Penjualan Produk', 'Restock reseller', 4000000);
  add(m0, 18, 'income',  'Lain-lain',        'Bonus affiliate', 800000);
  add(m0, 24, 'income',  'Penjualan Produk', 'Penjualan offline', 1700000);
  add(m0, 2,  'expense', 'Bahan Baku',        'Beli sparepart', 2900000);
  add(m0, 4,  'expense', 'Operasional Harian', 'Packaging & ongkir', 600000);
  add(m0, 5,  'expense', 'Gaji Karyawan',     'Gaji karyawan', 2500000);
  add(m0, 8,  'expense', 'Iklan & Marketing', 'Iklan marketplace', 500000);
  add(m0, 10, 'expense', 'Cicilan / Kredit',  'Cicilan modal usaha', 3000000);
  add(m0, 13, 'expense', 'Transport',         'Bensin & parkir', 300000);
  add(m0, 16, 'expense', 'Operasional Harian','Listrik & internet', 450000);
  add(m0, 20, 'expense', 'Dana Darurat',      'Servis peralatan', 400000);
  add(m0, 22, 'expense', 'Tabungan',          'Setor tabungan', 1250000);
  add(m0, 27, 'expense', 'Lain-lain',         'Biaya admin', 50000);

  /* bulan berjalan */
  add(m, 1,  'income',  'Penjualan Produk', 'Penjualan marketplace', 4200000);
  add(m, 4,  'income',  'Jasa Rakit',       'Jasa rakit 6 unit', 1800000);
  add(m, 7,  'income',  'Penjualan Produk', 'Restock reseller', 5500000);
  add(m, 8,  'income',  'Lain-lain',        'Bonus affiliate', 500000);
  add(m, 9,  'income',  'Penjualan Produk', 'Penjualan offline', 3000000);
  add(m, 2,  'expense', 'Bahan Baku',         'Beli sparepart & velg', 3200000);
  add(m, 3,  'expense', 'Operasional Harian', 'Packaging & ongkir', 650000);
  add(m, 4,  'expense', 'Gaji Karyawan',      'Gaji 1 orang', 2500000);
  add(m, 5,  'expense', 'Iklan & Marketing',  'Iklan TikTok', 750000);
  add(m, 6,  'expense', 'Cicilan / Kredit',   'Cicilan modal usaha', 3000000);
  add(m, 6,  'expense', 'Transport',          'Bensin & parkir', 350000);
  add(m, 7,  'expense', 'Operasional Harian', 'Listrik & internet', 400000);
  add(m, 8,  'expense', 'Dana Darurat',       'Servis peralatan', 500000);
  add(m, 8,  'expense', 'Tabungan',           'Setor tabungan', 1500000);
  add(m, 9,  'expense', 'Bahan Baku',         'Baut & mur', 350000);
  return s;
}

function loadState(){
  try{
    const raw = localStorage.getItem(LS_KEY);
    if(raw){
      const s = JSON.parse(raw);
      if(s && s.version === 1 && s.settings && s.categories && Array.isArray(s.transactions)) return s;
    }
  }catch(e){ /* ignore */ }
  return seedData();
}

let state = loadState();
const startTab = new URLSearchParams(location.search).get('tab');
let ui = { tab:(NAV.some(n => n.key === startTab) ? startTab : 'home'), month:curMonth(), filter:'all', sheet:null };
let budgetDraft = null;
let budgetSaved = false;
let budgetBannerTimer = null;
let sheetCat = null;
let deferredInstallPrompt = null;
const INSTALL_DISMISS_KEY = 'mashimaro.install.dismissed';

function isStandalone(){
  return window.matchMedia('(display-mode: standalone)').matches
    || window.matchMedia('(display-mode: minimal-ui)').matches
    || window.navigator.standalone === true;
}
function isIOS(){
  return /iphone|ipad|ipod/i.test(navigator.userAgent)
    || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
}
function isSecureApp(){
  return location.protocol === 'https:'
    || location.hostname === 'localhost'
    || location.hostname === '127.0.0.1';
}
function isInstallDismissed(){
  try { return localStorage.getItem(INSTALL_DISMISS_KEY) === '1'; } catch(e){ return false; }
}
function showInstallCard(){
  if(isStandalone() || isInstallDismissed()) return false;
  return true;
}
function installCardHTML(){
  if(!showInstallCard()) return '';
  const sub = deferredInstallPrompt
    ? 'Akses cepat dari layar utama & tetap bisa dipakai offline.'
    : isIOS()
      ? 'Tambahkan lewat Safari agar tampil seperti aplikasi.'
      : !isSecureApp()
        ? 'Buka lewat alamat HTTPS agar bisa dipasang di HP.'
        : 'Chrome/Edge: menu browser → Instal aplikasi.';
  return '<div class="install-card">'
    + '<span class="ic">'+icon('phone')+'</span>'
    + '<div class="ic-txt"><b>Pasang di layar utama</b><small>'+sub+'</small></div>'
    + '<button class="ic-btn" data-action="install-app">'+(deferredInstallPrompt ? 'Pasang' : 'Cara')+'</button>'
    + '<button class="ic-x" data-action="dismiss-install" aria-label="Tutup pengingat">'+icon('close')+'</button>'
  + '</div>';
}
async function handleInstall(){
  if(isStandalone()){ toast('Aplikasi sudah terpasang di layar utama'); return; }
  if(deferredInstallPrompt){
    deferredInstallPrompt.prompt();
    let choice = null;
    try { choice = await deferredInstallPrompt.userChoice; } catch(e){}
    deferredInstallPrompt = null;
    if(choice && choice.outcome === 'accepted'){
      toast('Aplikasi berhasil dipasang');
      render();
    } else {
      toast('Pemasangan dibatalkan');
      render();
    }
    return;
  }
  openInstallSheet();
}
function openInstallSheet(){
  let title = 'Pasang di layar utama';
  let sub = 'Ikuti langkah berikut di browser HP.';
  let steps = '';
  let note = 'Data keuangan tetap tersimpan di perangkat ini, bukan di server.';

  if(!isSecureApp()){
    title = 'Butuh alamat HTTPS';
    sub = 'PWA hanya bisa dipasang dari alamat HTTPS (atau localhost).';
    steps = [
      ['Unggah aplikasi ke hosting HTTPS', 'Gunakan Netlify Drop, GitHub Pages, atau Cloudflare Pages. Folder yang diunggah: seluruh isi folder mashimaro-financial.'],
      ['Buka tautan hasil deploy di HP', 'Pastikan alamatnya diawali https://, lalu buka di Chrome (Android) atau Safari (iPhone).'],
      ['Pilih Pasang aplikasi', 'Di Chrome: menu ⋮ → Instal aplikasi. Di Safari: Bagikan → Tambahkan ke Layar Utama.']
    ];
  } else if(isIOS()){
    title = 'Pasang di iPhone / iPad';
    sub = 'Gunakan Safari, bukan Chrome, agar bisa ditambahkan ke Home Screen.';
    steps = [
      ['Buka aplikasi ini di Safari', 'Ketuk tombol Bagikan (kotak dengan panah ke atas) di bagian bawah layar.'],
      ['Pilih "Tambahkan ke Layar Utama"', 'Gulir daftar aksi sampai menemukan opsi tersebut.'],
      ['Ketuk "Tambah"', 'Ikon Mashimaro akan muncul di layar utama dan terbuka seperti aplikasi.']
    ];
  } else if(/Android/i.test(navigator.userAgent)){
    title = 'Pasang di Android';
    sub = 'Gunakan Chrome agar aplikasi bisa dipasang & dipakai offline.';
    steps = [
      ['Buka menu browser', 'Ketuk ikon tiga titik (⋮) di kanan atas Chrome.'],
      ['Pilih "Instal aplikasi"', 'Bisa juga "Tambahkan ke layar utama" pada menu yang sama.'],
      ['Konfirmasi pemasangan', 'Ikon Mashimaro akan muncul di layar utama dan berjalan tanpa address bar.']
    ];
  } else {
    title = 'Pasang di komputer';
    sub = 'Chrome atau Edge bisa memasang aplikasi ini seperti aplikasi desktop.';
    steps = [
      ['Cari ikon instal', 'Lihat ikon monitor dengan panah di kanan address bar, atau buka menu browser.'],
      ['Pilih "Instal Mashimaro Financial"', 'Jika tidak muncul, pastikan halaman dibuka lewat HTTPS atau localhost.'],
      ['Buka dari desktop', 'Aplikasi bisa dibuka dari Start Menu / Launchpad dan tetap bekerja offline.']
    ];
  }

  const stepsHTML = steps.map((s, i) =>
    '<div class="istep"><span class="istep-n">'+(i+1)+'</span>'
      + '<div><b>'+s[0]+'</b><small>'+s[1]+'</small></div></div>'
  ).join('');

  openSheet(sheetHead(title, sub)
    + '<div class="install-steps">'+stepsHTML+'</div>'
    + '<div class="note" style="margin-top:12px">'+icon('shield')+'<span>'+note+'</span></div>'
    + '<button class="btn primary" data-action="close-sheet">'+icon('check')+'Mengerti</button>');
}

function persist(){ try{ localStorage.setItem(LS_KEY, JSON.stringify(state)); }catch(e){} }
function saveAll(){ persist(); }

/* ---------------- selectors ---------------- */
function catById(type, id){
  return (state.categories[type]||[]).find(c => c.id === id) || null;
}
function txCat(t){ return catById(t.type, t.categoryId); }
function txCatName(t){ const c = txCat(t); return c ? c.name : 'Tanpa kategori'; }
function txPos(t){
  if(t.type !== 'expense') return null;
  const c = txCat(t);
  return c && c.pos ? c.pos : 'operational';
}
function monthTx(month){
  return state.transactions.filter(t => t.date.slice(0,7) === month);
}
function totals(month){
  let income = 0, expense = 0;
  for(const t of monthTx(month)){
    if(t.type === 'income') income += Number(t.amount)||0;
    else expense += Number(t.amount)||0;
  }
  return { income, expense, net: income - expense };
}
function allTotals(){
  let income = 0, expense = 0;
  for(const t of state.transactions){
    if(t.type === 'income') income += Number(t.amount)||0;
    else expense += Number(t.amount)||0;
  }
  return { income, expense, net: income - expense };
}
function posSpent(month){
  const out = { installment:0, operational:0, savings:0, emergency:0 };
  for(const t of monthTx(month)){
    if(t.type !== 'expense') continue;
    const p = txPos(t) || 'operational';
    out[p] = (out[p]||0) + (Number(t.amount)||0);
  }
  return out;
}
function posOf(key){ return POS.find(p => p.key === key) || POS[1]; }
function sortedMonthTx(month){
  return monthTx(month).slice().sort((a,b) => b.date.localeCompare(a.date) || b.id.localeCompare(a.id));
}

/* ---------------- shared UI bits ---------------- */
function topbarHTML(tab){
  const gear = '<button class="icon-btn" data-action="settings" aria-label="Pengaturan">'+icon('gear')+'</button>';
  if(tab === 'settings'){
    return '<div style="display:flex;align-items:center;gap:12px">'
      + '<button class="back-btn" data-action="back" aria-label="Kembali">'+icon('back')+'</button>'
      + '<div><div class="eyebrow">MASHIMARO FINANCIAL</div><h1>Pengaturan</h1></div>'
      + '</div>';
  }
  const heads = {
    home:    { t:'Halo, Mashimaro 👋', s:'Ini ringkasan keuanganmu.' },
    income:  { t:'Pemasukan',          s:'Catat semua uang yang masuk.' },
    expense: { t:'Pengeluaran',        s:'Kontrol semua uang yang keluar.' },
    budget:  { t:'Strategi Alokasi',   s:'Atur porsi pemasukanmu.' },
    report:  { t:'Laporan Bulanan',    s:'Evaluasi & rencana ke depan.' }
  };
  const h = heads[tab] || heads.home;
  if(tab === 'home'){
    return '<div><div class="eyebrow">MASHIMARO FINANCIAL</div><h1>'+h.t+'</h1><p class="sub">'+h.s+'</p></div>'
      + '<button class="avatar" data-action="settings" aria-label="Pengaturan">M</button>';
  }
  return '<div><div class="eyebrow">MASHIMARO FINANCIAL</div><h1>'+h.t+'</h1><p class="sub">'+h.s+'</p></div>'+gear;
}

function tabbarHTML(){
  return NAV.map(n =>
    '<button class="tab'+(ui.tab === n.key ? ' active' : '')+'" data-action="tab" data-tab="'+n.key+'">'
    + '<span class="tic">'+icon(n.icon)+'</span><span>'+n.label+'</span></button>'
  ).join('');
}

function monthbarHTML(){
  return '<div class="monthbar">'
    + '<button class="mb-btn" data-action="month" data-delta="-1" aria-label="Bulan sebelumnya">'+icon('chevL')+'</button>'
    + '<div class="mb-label"><span>Periode</span><b>'+monthLabel(ui.month)+'</b></div>'
    + '<button class="mb-btn" data-action="month" data-delta="1" aria-label="Bulan berikutnya">'+icon('chevR')+'</button>'
    + '</div>';
}

function txnRow(t){
  const c = txCat(t);
  const isIn = t.type === 'income';
  const iconName = isIn ? 'income' : (c && c.pos ? posOf(c.pos).icon : 'expense');
  const sub = (t.note ? esc(t.note) : txDateShort(t.date)) + ' • ' + esc(c ? c.name : 'Tanpa kategori');
  return '<div class="txn" data-id="'+t.id+'">'
    + '<div class="txn-ic '+(isIn?'in':'out')+'">'+icon(iconName)+'</div>'
    + '<div class="txn-main"><div class="t">'+(isIn?'Pemasukan':'Pengeluaran')+'</div><div class="s">'+sub+'</div></div>'
    + '<div class="txn-right"><span class="txn-amt '+(isIn?'in':'out')+'">'+(isIn?'+':'−')+' '+rp(t.amount).replace('Rp ','')+'</span>'
    + '<button class="more-btn" data-action="txn" data-id="'+t.id+'" aria-label="Aksi transaksi">'+icon('dots')+'</button></div>'
    + '</div>';
}

function groupTxHTML(list){
  if(!list.length) return '';
  const groups = new Map();
  for(const t of list){
    if(!groups.has(t.date)) groups.set(t.date, []);
    groups.get(t.date).push(t);
  }
  return [...groups.entries()]
    .sort((a,b) => b[0].localeCompare(a[0]))
    .map(([date, items]) =>
      '<div class="date-label">'+txDateLabel(date)+'</div>' + items.map(txnRow).join('')
    ).join('');
}

function emptyHTML(ic, title, sub, btnLabel, action, type){
  return '<div class="empty"><div class="eic">'+icon(ic)+'</div>'
    + '<h3>'+title+'</h3><p>'+sub+'</p>'
    + (btnLabel ? '<button class="btn primary" data-action="'+action+'"'+(type?' data-type="'+type+'"':'')+'>'+icon('plus')+btnLabel+'</button>' : '')
    + '</div>';
}

/* ---------------- HOME ---------------- */
function homeView(){
  const t = totals(ui.month);
  const saldo = allTotals();
  const list = sortedMonthTx(ui.month).slice(0, 6);
  const ratios = state.settings.ratios;
  const p1 = ratios.installment, p2 = p1 + ratios.operational, p3 = p2 + ratios.savings;

  const allocRows = POS.map(p => {
    const amt = t.income * ratios[p.key] / 100;
    return '<div class="alloc-row"><span class="dot" style="background:'+p.color+'"></span>'
      + '<span class="an">'+p.short+'</span><b>'+rpShort(amt)+'</b>'
      + '<span class="pc">'+ratios[p.key]+'%</span></div>';
  }).join('');

  const quick = [
    { tab:'income',  label:'Pemasukan',  ic:'income',  bg:'var(--primary-soft)', fg:'var(--primary-dark)' },
    { tab:'expense', label:'Pengeluaran',ic:'expense', bg:'var(--accent-soft)',  fg:'var(--accent)' },
    { tab:'budget',  label:'Alokasi',    ic:'pie',     bg:'var(--blue-soft)',    fg:'var(--blue)' },
    { tab:'report',  label:'Laporan',    ic:'report',  bg:'var(--gold-soft)',    fg:'#B4831C' }
  ].map(q =>
    '<button class="quick" data-action="tab" data-tab="'+q.tab+'">'
    + '<span class="ic" style="background:'+q.bg+';color:'+q.fg+'">'+icon(q.ic)+'</span>'
    + '<span>'+q.label+'</span></button>'
  ).join('');

  return monthbarHTML()
    + '<section class="hero">'
      + '<div class="hero-top"><span class="hero-label">Total Saldo</span><span class="hero-badge">'+monthShort(ui.month)+'</span></div>'
      + '<div class="hero-balance">'+rp(saldo.net)+'</div>'
      + '<div class="hero-note">Akumulasi pemasukan − pengeluaran</div>'
      + '<div class="hero-stats">'
        + '<div class="hero-stat"><span class="ic">'+icon('arrowDown')+'</span><div><small>Masuk bulan ini</small><b>'+rpShort(t.income)+'</b></div></div>'
        + '<div class="hero-stat"><span class="ic">'+icon('arrowUp')+'</span><div><small>Keluar bulan ini</small><b>'+rpShort(t.expense)+'</b></div></div>'
      + '</div>'
    + '</section>'
    + '<div class="quick-grid">'+quick+'</div>'
    + installCardHTML()
    + '<div class="card">'
      + '<div class="card-head"><div><h3>Alokasi Anggaran</h3><p>Otomatis dari pemasukan bulan ini</p></div>'
        + '<button class="link-btn" data-action="tab" data-tab="budget">Atur '+icon('chevR')+'</button></div>'
      + '<div class="alloc-flex">'
        + '<div class="donut" style="--seg1:'+POS[0].color+';--seg2:'+POS[1].color+';--seg3:'+POS[2].color+';--seg4:'+POS[3].color+';--p1:'+p1+'%;--p2:'+p2+'%;--p3:'+p3+'%">'
          + '<div class="donut-txt"><b>'+rpShort(t.income)+'</b><small>Total</small></div>'
        + '</div>'
        + '<div class="alloc-list">'+allocRows+'</div>'
      + '</div>'
      + '<div style="display:flex;justify-content:space-between;margin-top:12px;padding-top:11px;border-top:1px dashed #EEEAE1">'
        + '<span style="font-size:10px;color:var(--muted);font-weight:600">Sisa setelah pengeluaran</span>'
        + '<span class="pill '+(t.net>=0?'green':'red')+'">'+rp(t.net)+'</span>'
      + '</div>'
    + '</div>'
    + '<div class="section-title"><h2>Transaksi Terbaru</h2><span>'+monthShort(ui.month)+'</span></div>'
    + '<div class="card tight">'
      + (list.length ? groupTxHTML(list) :
          '<div class="empty" style="padding:18px 8px 12px"><div class="eic" style="width:52px;height:52px;border-radius:16px;margin-bottom:9px">'+icon('wallet')+'</div>'
          + '<h3 style="font-size:13px">Belum ada transaksi</h3><p style="font-size:10.5px;margin-bottom:10px">Yuk mulai catat pemasukan atau pengeluaran pertamamu.</p>'
          + '<button class="btn primary sm" style="max-width:180px" data-action="fab">'+icon('plus')+'Tambah Transaksi</button></div>')
      + '</div>'
    + '<div style="text-align:center;padding:6px 0 4px">'
      + '<button class="link-btn" data-action="tab" data-tab="report">Lihat laporan lengkap '+icon('chevR')+'</button>'
    + '</div>';
}

/* ---------------- INCOME / EXPENSE ---------------- */
function txView(type){
  const isIn = type === 'income';
  const t = totals(ui.month);
  const cats = state.categories[type] || [];
  let list = sortedMonthTx(ui.month).filter(x => x.type === type);
  if(ui.filter !== 'all') list = list.filter(x => x.categoryId === ui.filter);
  const total = isIn ? t.income : t.expense;
  const color = isIn ? 'var(--primary)' : 'var(--accent)';
  const soft  = isIn ? 'var(--primary-soft)' : 'var(--accent-soft)';

  const chips = '<button class="chip'+(ui.filter==='all'?' active':'')+'" data-action="filter" data-cat="all">Semua</button>'
    + cats.map(c => '<button class="chip'+(ui.filter===c.id?' active':'')+'" data-action="filter" data-cat="'+c.id+'">'+esc(c.name)+'</button>').join('')
    + '<button class="chip add" data-action="new-cat" data-type="'+type+'">+ Kategori</button>';

  return monthbarHTML()
    + '<div class="total-card">'
      + '<div class="tc-l"><div class="tc-ic" style="background:'+soft+';color:'+color+'">'+icon(isIn?'income':'expense')+'</div>'
        + '<div><small>Total '+ (isIn?'pemasukan':'pengeluaran') +'</small><b>'+rp(total)+'</b></div></div>'
      + '<div class="tc-sub">'+monthTx(ui.month).filter(x=>x.type===type).length+' transaksi<br>'+(isIn?'uang masuk':'uang keluar')+'</div>'
    + '</div>'
    + '<div class="filter-row">'+chips+'</div>'
    + '<div class="card tight">'
      + (list.length ? groupTxHTML(list) :
        emptyHTML(isIn?'income':'expense',
          isIn ? 'Belum ada pemasukan' : 'Belum ada pengeluaran',
          isIn ? 'Catat penjualan, jasa, atau pemasukan lain di bulan ini.'
               : 'Catat biaya operasional, cicilan, dan pengeluaran lain di bulan ini.',
          isIn ? 'Tambah Pemasukan' : 'Tambah Pengeluaran', 'add', type))
    + '</div>'
    + (list.length ? '<div class="note">'+icon('sparkle')+'<span>Tip: ketuk ikon <b>⋯</b> pada transaksi untuk mengedit atau menghapus data.</span></div>' : '');
}

/* ---------------- BUDGET / ALOKASI ---------------- */
function budgetView(){
  const basis = totals(ui.month).income;
  budgetDraft = Object.assign({}, state.settings.ratios);
  const total = Object.values(budgetDraft).reduce((a,b) => a + (Number(b)||0), 0);
  const nextKey = shiftMonth(ui.month, 1);

  const items = POS.map(p => {
    const v = budgetDraft[p.key];
    return '<div class="budget-item" data-pos="'+p.key+'">'
      + '<div class="bi-head">'
        + '<div class="bi-ic" style="background:'+p.soft+';color:'+p.color+'">'+icon(p.icon)+'</div>'
        + '<div class="bi-name"><b>'+p.label+'</b><small>'+p.desc+'</small></div>'
        + '<div class="pct-box"><input type="number" inputmode="numeric" min="0" max="100" step="1" data-pct="'+p.key+'" value="'+v+'" aria-label="Persentase '+p.label+'"><span>%</span></div>'
      + '</div>'
      + '<input type="range" min="0" max="100" step="1" value="'+v+'" data-range="'+p.key+'" style="--rc:'+p.color+';--rv:'+v+'%" aria-label="Slider '+p.label+'">'
      + '<div class="bi-amount"><span class="amt" data-amt="'+p.key+'">'+rp(basis*v/100)+'</span><span class="r">dari '+rp(basis)+'</span></div>'
    + '</div>';
  }).join('');

  const savedBanner = budgetSaved
    ? '<div class="save-banner" id="budget-save-banner" role="status">'
        + '<span class="sb-ic">'+icon('check')+'</span>'
        + '<div><b>Rasio alokasi tersimpan</b>'
          + '<small>Dipakai untuk laporan '+monthLabel(ui.month)+' & mapping '+monthLabel(nextKey)+'.</small></div>'
      + '</div>'
    : '';

  return '<div class="budget-intro">'
      + '<div class="bi-label">Strategi Alokasi Anggaran</div>'
      + '<b>'+rp(basis)+'</b>'
      + '<p>Atur porsi pemasukan '+monthLabel(ui.month)+'. Rasio ini dipakai untuk laporan bulan berjalan & mapping bulan depan.</p>'
    + '</div>'
    + savedBanner
    + items
    + '<div class="total-row">'
      + '<div class="tr-l"><b>Total rasio</b><small id="budget-hint">'+(total===100 ? 'Rasio siap disimpan' : 'Total rasio harus 100%')+'</small></div>'
      + '<span class="total-pill'+(total!==100?' bad':'')+'" id="budget-total">'+total+'%</span>'
    + '</div>'
    + '<button class="btn primary" id="save-budget" data-action="save-budget"'+(total!==100?' disabled':'')+'>'+icon('check')+'Simpan Rasio</button>'
    + '<div class="btn-row" style="margin-top:9px">'
      + '<button class="btn ghost sm" data-action="reset-ratios">'+icon('refresh')+'Kembalikan Default</button>'
    + '</div>'
    + '<div class="note">'+icon('sparkle')+'<span>Default: <b>20% cicilan, 50% operasional, 10% tabungan, 20% dana darurat</b>. Perubahan rasio langsung memengaruhi laporan bulanan dan rencana bulan berikutnya.</span></div>';
}

function clearBudgetBanner(){
  budgetSaved = false;
  const b = document.getElementById('budget-save-banner');
  if(b){
    b.classList.add('hide');
    setTimeout(() => { if(b.parentNode) b.parentNode.removeChild(b); }, 300);
  }
}

function bindBudgetSliders(){
  view.querySelectorAll('[data-range]').forEach(inp => {
    inp.addEventListener('input', () => {
      const k = inp.dataset.range;
      const v = Math.max(0, Math.min(100, parseInt(inp.value,10) || 0));
      budgetDraft[k] = v;
      inp.style.setProperty('--rv', v + '%');
      const pct = view.querySelector('[data-pct="'+k+'"]');
      if(pct) pct.value = v;
      clearBudgetBanner();
      updateBudgetUI();
    });
  });
  view.querySelectorAll('[data-pct]').forEach(inp => {
    inp.addEventListener('input', () => {
      const k = inp.dataset.pct;
      let v = parseInt(inp.value,10);
      if(isNaN(v)) v = 0;
      v = Math.max(0, Math.min(100, v));
      budgetDraft[k] = v;
      const range = view.querySelector('[data-range="'+k+'"]');
      if(range){ range.value = v; range.style.setProperty('--rv', v + '%'); }
      clearBudgetBanner();
      updateBudgetUI();
    });
    inp.addEventListener('blur', () => { inp.value = budgetDraft[inp.dataset.pct]; });
  });

  /* Pastikan tap pertama pada tombol simpan tidak "tertelan" keyboard/input aktif */
  const saveBtn = document.getElementById('save-budget');
  if(saveBtn){
    saveBtn.addEventListener('pointerdown', () => {
      const ae = document.activeElement;
      if(ae && ae !== saveBtn && typeof ae.blur === 'function') ae.blur();
    });
  }
}

function updateBudgetUI(){
  const total = Object.values(budgetDraft).reduce((a,b) => a + (Number(b)||0), 0);
  const basis = totals(ui.month).income;
  view.querySelectorAll('[data-amt]').forEach(el => {
    const k = el.dataset.amt;
    el.textContent = rp(basis * (budgetDraft[k]||0) / 100);
  });
  const pill = document.getElementById('budget-total');
  if(pill){ pill.textContent = total + '%'; pill.classList.toggle('bad', total !== 100); }
  const hint = document.getElementById('budget-hint');
  if(hint) hint.textContent = total === 100 ? 'Rasio siap disimpan' : 'Total rasio harus 100% (sekarang ' + total + '%)';
  const save = document.getElementById('save-budget');
  if(save) save.disabled = total !== 100;
}

/* ---------------- REPORT ---------------- */
function deltaHTML(cur, prev, goodWhenUp){
  if(!prev) return '<span class="delta flat">—</span>';
  const d = Math.round(((cur - prev) / Math.abs(prev)) * 100);
  if(d === 0) return '<span class="delta flat">0%</span>';
  const good = (d > 0) === !!goodWhenUp;
  return '<span class="delta '+(good ? 'good' : 'bad')+'">'+(d>0?'+':'')+d+'%</span>';
}

function reportView(){
  const t = totals(ui.month);
  const prevKey = shiftMonth(ui.month, -1);
  const nextKey = shiftMonth(ui.month, 1);
  const pt = totals(prevKey);
  const spent = posSpent(ui.month);
  const ratios = state.settings.ratios;

  const stat = '<div class="stat-grid">'
    + '<div class="stat-card"><div class="sc-top"><span class="sc-dot" style="background:var(--primary)"></span><small>Masuk</small></div>'
      + '<b style="color:var(--primary-dark)">'+rpShort(t.income)+'</b><div class="sc-sub">'+deltaHTML(t.income, pt.income, true)+' vs lalu</div></div>'
    + '<div class="stat-card"><div class="sc-top"><span class="sc-dot" style="background:var(--accent)"></span><small>Keluar</small></div>'
      + '<b>'+rpShort(t.expense)+'</b><div class="sc-sub">'+deltaHTML(t.expense, pt.expense, false)+' vs lalu</div></div>'
    + '<div class="stat-card"><div class="sc-top"><span class="sc-dot" style="background:var(--blue)"></span><small>Selisih</small></div>'
      + '<b style="color:'+(t.net>=0?'var(--primary-dark)':'#D24B39')+'">'+rpShort(t.net)+'</b><div class="sc-sub">'+(t.net>=0?'surplus':'defisit')+'</div></div>'
  + '</div>';

  const allocRows = POS.map(p => {
    const budget = t.income * ratios[p.key] / 100;
    const used = spent[p.key] || 0;
    const left = budget - used;
    const usedPct = budget > 0 ? Math.round(used / budget * 100) : (used > 0 ? 100 : 0);
    const badge = used > budget ? '<span class="badge over">Lewat '+Math.max(0,usedPct-100)+'%</span>'
      : usedPct >= 80 ? '<span class="badge warn">Hampir penuh</span>'
      : '<span class="badge ok">Aman</span>';
    return '<div class="ra-item">'
      + '<div class="ra-top"><span class="dot" style="background:'+p.color+'"></span><b>'+p.label+'</b><span class="ra-num">'+ratios[p.key]+'%</span>'+badge+'</div>'
      + '<div class="track"><div class="fill" style="width:'+Math.min(100, usedPct)+'%;background:'+(used>budget?'var(--accent)':p.color)+'"></div></div>'
      + '<div class="ra-bottom"><small>Terpakai '+rp(used)+'</small>'
      + '<small style="color:'+(left<0?'#D24B39':'var(--ink-2)')+';font-weight:800">'+(left<0?'Kurang ':'Sisa ')+rp(Math.abs(left))+'</small></div>'
    + '</div>';
  }).join('');

  const mappingRows = POS.map(p =>
    '<div class="map-row"><span class="dot" style="background:'+p.color+'"></span>'
    + '<span class="mn">'+p.label+'</span><b>'+rp(t.income * ratios[p.key] / 100)+'</b><small>'+ratios[p.key]+'%</small></div>'
  ).join('');

  const maxV = Math.max(pt.income, t.income, pt.expense, t.expense, 1);
  const h = v => Math.max(5, Math.round(v / maxV * 74));
  const bars = '<div class="cmp-bars">'
    + '<div class="cmp-group"><div class="cmp-col">'
      + '<div class="cmp-bar last" style="height:'+h(pt.income)+'px"></div>'
      + '<div class="cmp-bar now" style="height:'+h(t.income)+'px"></div></div><span class="cmp-label">Masuk</span></div>'
    + '<div class="cmp-group"><div class="cmp-col">'
      + '<div class="cmp-bar last" style="height:'+h(pt.expense)+'px"></div>'
      + '<div class="cmp-bar now" style="height:'+h(t.expense)+'px"></div></div><span class="cmp-label">Keluar</span></div>'
  + '</div>'
  + '<div class="cmp-legend"><span><i style="background:#DAD5CA"></i>'+monthShort(prevKey)+'</span><span><i style="background:#0FA98F"></i>'+monthShort(ui.month)+'</span></div>'
  + '<div class="cmp-table">'
    + '<div class="cmp-tr cmp-head"><span class="cl">Uraian</span><span class="cv">'+monthShort(prevKey)+'</span><span class="cv now">'+monthShort(ui.month)+'</span><span class="cd">Δ</span></div>'
    + '<div class="cmp-tr"><span class="cl">Pemasukan</span><span class="cv">'+rp(pt.income)+'</span><span class="cv now">'+rp(t.income)+'</span><span class="cd">'+deltaHTML(t.income, pt.income, true)+'</span></div>'
    + '<div class="cmp-tr"><span class="cl">Pengeluaran</span><span class="cv">'+rp(pt.expense)+'</span><span class="cv now">'+rp(t.expense)+'</span><span class="cd">'+deltaHTML(t.expense, pt.expense, false)+'</span></div>'
    + '<div class="cmp-tr"><span class="cl">Selisih</span><span class="cv">'+rp(pt.net)+'</span><span class="cv now">'+rp(t.net)+'</span><span class="cd">'+deltaHTML(t.net, pt.net, true)+'</span></div>'
  + '</div>';

  return monthbarHTML()
    + stat
    + '<div class="card">'
      + '<div class="card-head"><div><h3>Hasil Alokasi '+monthShort(ui.month)+'</h3><p>Realisasi dari pemasukan '+rp(t.income)+'</p></div>'
        + '<button class="link-btn" data-action="tab" data-tab="budget">Ubah rasio '+icon('chevR')+'</button></div>'
      + '<div class="report-alloc">'+allocRows+'</div>'
    + '</div>'
    + '<div class="card">'
      + '<div class="card-head"><div><h3>Mapping '+monthLabel(nextKey)+'</h3><p>Rencana otomatis untuk bulan berikutnya</p></div>'
        + '<span class="pill green">'+icon('sparkle')+'Auto</span></div>'
      + '<div class="map-table">'+mappingRows+'</div>'
      + '<div class="map-total"><span>Total rencana</span><b>'+rp(t.income)+'</b></div>'
      + '<div class="note" style="margin:11px 0 0">'+icon('note')+'<span>Angka di atas dipetakan dari rasio saat ini dan pemasukan '+monthLabel(ui.month)+'. Begitu ada pemasukan baru di bulan depan, alokasinya ikut menyesuaikan.</span></div>'
    + '</div>'
    + '<div class="card">'
      + '<div class="card-head"><div><h3>Perbandingan Bulan</h3><p>'+monthShort(prevKey)+' vs '+monthShort(ui.month)+'</p></div>'
        + '<span class="pill gray">'+icon('report')+'Report</span></div>'
      + bars
    + '</div>'
    + '<div class="btn-row">'
      + '<button class="btn primary sm" data-action="download">'+icon('download')+'Unduh Laporan</button>'
      + '<button class="btn ghost sm" data-action="print">'+icon('print')+'Cetak PDF</button>'
    + '</div>'
    + '<div class="about-note" style="padding-top:10px">Laporan berisi ringkasan, hasil alokasi, mapping bulan depan, perbandingan, dan detail transaksi.</div>';
}

function downloadReport(){
  const month = ui.month;
  const t = totals(month);
  const prevKey = shiftMonth(month, -1);
  const pt = totals(prevKey);
  const nextKey = shiftMonth(month, 1);
  const spent = posSpent(month);
  const ratios = state.settings.ratios;
  const q = v => '"' + String(v==null?'':v).replace(/"/g,'""') + '"';
  const line = arr => arr.map(q).join(',');
  const rows = [];
  rows.push(line(['Laporan Mashimaro Financial']));
  rows.push(line(['Periode', monthLabel(month)]));
  rows.push('');
  rows.push(line(['RINGKASAN']));
  rows.push(line(['Pemasukan', t.income]));
  rows.push(line(['Pengeluaran', t.expense]));
  rows.push(line(['Selisih', t.net]));
  rows.push(line(['Bulan sebelumnya', monthLabel(prevKey), 'Pemasukan', pt.income, 'Pengeluaran', pt.expense, 'Selisih', pt.net]));
  rows.push('');
  rows.push(line(['HASIL ALOKASI']));
  rows.push(line(['Pos','Rasio (%)','Anggaran','Terpakai','Sisa']));
  POS.forEach(p => {
    const budget = t.income * ratios[p.key] / 100;
    rows.push(line([p.label, ratios[p.key], budget, spent[p.key]||0, budget - (spent[p.key]||0)]));
  });
  rows.push('');
  rows.push(line(['MAPPING ' + monthLabel(nextKey).toUpperCase()]));
  rows.push(line(['Pos','Rasio (%)','Rencana']));
  POS.forEach(p => rows.push(line([p.label, ratios[p.key], t.income * ratios[p.key] / 100])));
  rows.push(line(['Total', 100, t.income]));
  rows.push('');
  rows.push(line(['DETAIL PEMASUKAN (KREDIT)']));
  rows.push(line(['Tanggal','Kategori','Catatan','Nominal']));
  monthTx(month).filter(x => x.type === 'income').slice().sort((a,b)=>a.date.localeCompare(b.date)).forEach(x => {
    rows.push(line([x.date, txCatName(x), x.note||'', x.amount]));
  });
  rows.push(line(['Subtotal Pemasukan', '', '', t.income]));
  rows.push('');
  rows.push(line(['DETAIL PENGELUARAN (DEBIT)']));
  rows.push(line(['Tanggal','Kategori','Pos','Catatan','Nominal']));
  monthTx(month).filter(x => x.type === 'expense').slice().sort((a,b)=>a.date.localeCompare(b.date)).forEach(x => {
    const pos = x.type === 'expense' ? posOf(txPos(x) || 'operational').label : '';
    rows.push(line([x.date, txCatName(x), pos, x.note||'', x.amount]));
  });
  rows.push(line(['Subtotal Pengeluaran', '', '', '', t.expense]));
  rows.push(line(['Selisih Bersih (Kredit - Debit)', '', '', '', t.net]));
  const csv = '\uFEFF' + rows.join('\r\n');
  const blob = new Blob([csv], {type:'text/csv;charset=utf-8'});
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = 'Mashimaro-Laporan-' + month + '.csv';
  document.body.appendChild(a); a.click(); a.remove();
  setTimeout(() => URL.revokeObjectURL(a.href), 2000);
  toast('Laporan ' + monthShort(month) + ' diunduh');
}

/* ---------------- PRINT / PDF REPORT ---------------- */
function buildPrintDoc(){
  const month = ui.month;
  const t = totals(month);
  const prevKey = shiftMonth(month, -1);
  const nextKey = shiftMonth(month, 1);
  const pt = totals(prevKey);
  const spent = posSpent(month);
  const ratios = state.settings.ratios;
  const incomes  = monthTx(month).filter(x => x.type === 'income').slice().sort((a,b) => a.date.localeCompare(b.date));
  const expenses = monthTx(month).filter(x => x.type === 'expense').slice().sort((a,b) => a.date.localeCompare(b.date));
  const printed = new Date().toLocaleDateString('id-ID',{day:'numeric',month:'long',year:'numeric'});
  const dateFmt = d => new Date(d+'T00:00:00').toLocaleDateString('id-ID',{day:'2-digit',month:'short',year:'numeric'});
  const deltaText = (cur, prev) => {
    if(!prev) return '—';
    const d = Math.round(((cur - prev) / Math.abs(prev)) * 100);
    return (d > 0 ? '+' : '') + d + '%';
  };
  const ratioText = POS.map(p => ratios[p.key] + '%').join(' / ');

  const allocRows = POS.map(p => {
    const budget = t.income * ratios[p.key] / 100;
    const used = spent[p.key] || 0;
    const left = budget - used;
    const usedPct = budget > 0 ? Math.round(used / budget * 100) : (used > 0 ? 100 : 0);
    const badge = used > budget ? '<span class="pd-badge over">Lewat anggaran</span>'
      : usedPct >= 80 ? '<span class="pd-badge warn">Hampir penuh</span>'
      : '<span class="pd-badge ok">Aman</span>';
    return '<tr>'
      + '<td><span class="pos-dot" style="background:'+p.color+'"></span>'+p.label+'</td>'
      + '<td class="num">'+ratios[p.key]+'%</td>'
      + '<td class="num">'+rp(budget)+'</td>'
      + '<td class="num">'+rp(used)+'</td>'
      + '<td class="num'+(left<0?' pd-amount-out':'')+'">'+(left<0?'− ':'')+rp(Math.abs(left))+'</td>'
      + '<td>'+badge+'</td>'
    + '</tr>';
  }).join('');

  const mapRows = POS.map(p =>
    '<tr>'
      + '<td><span class="pos-dot" style="background:'+p.color+'"></span>'+p.label+'</td>'
      + '<td class="num">'+ratios[p.key]+'%</td>'
      + '<td class="num">'+rp(t.income * ratios[p.key] / 100)+'</td>'
    + '</tr>'
  ).join('');

  const cmpRows = [
    ['Pemasukan', pt.income, t.income],
    ['Pengeluaran', pt.expense, t.expense],
    ['Selisih Bersih', pt.net, t.net]
  ].map(r =>
    '<tr><td>'+r[0]+'</td><td class="num">'+rp(r[1])+'</td><td class="num">'+rp(r[2])+'</td><td class="num">'+deltaText(r[2], r[1])+'</td></tr>'
  ).join('');

  const detailRows = (list, kind) => {
    const isIn = kind === 'in';
    if(!list.length) return '<tr><td colspan="5" class="muted" style="text-align:center;padding:5mm">Belum ada transaksi pada periode ini</td></tr>';
    return list.map((x, i) => {
      const c = txCat(x);
      let catCell = c ? esc(c.name) : '<span class="muted">Tanpa kategori</span>';
      if(!isIn && c){
        const p = posOf(c.pos || 'operational');
        catCell += '<br><span class="muted" style="font-size:7pt">Pos: '+p.label+'</span>';
      }
      return '<tr>'
        + '<td class="num">'+(i+1)+'</td>'
        + '<td>'+dateFmt(x.date)+'</td>'
        + '<td>'+catCell+'</td>'
        + '<td>'+(x.note ? esc(x.note) : '<span class="muted">—</span>')+'</td>'
        + '<td class="num '+(isIn?'pd-amount-in':'pd-amount-out')+'">'+rp(x.amount)+'</td>'
      + '</tr>';
    }).join('');
  };

  const doc = document.getElementById('print-doc');
  doc.innerHTML =
    '<div class="pd-head">'
      + '<div class="pd-brand">'
        + '<div class="pd-logo">M</div>'
        + '<div><h1>Mashimaro Financial</h1><p>Pencatatan Keuangan &amp; Strategi Alokasi Anggaran</p></div>'
      + '</div>'
      + '<div class="pd-period"><span>Laporan Bulanan</span><strong>'+monthLabel(month)+'</strong><small>Dicetak '+printed+'</small></div>'
    + '</div>'

    + '<div class="pd-kpis">'
      + '<div class="pd-kpi in"><small>Pemasukan (Kredit)</small><b style="color:#0A7F6D">'+rp(t.income)+'</b><i>Bulan lalu '+rp(pt.income)+'</i></div>'
      + '<div class="pd-kpi out"><small>Pengeluaran (Debit)</small><b style="color:#C4432F">'+rp(t.expense)+'</b><i>Bulan lalu '+rp(pt.expense)+'</i></div>'
      + '<div class="pd-kpi net"><small>Selisih Bersih</small><b style="color:'+(t.net>=0?'#0A7F6D':'#C4432F')+'">'+rp(t.net)+'</b><i>'+netStatusLabel(t.net)+' · rasio '+ratioText+'</i></div>'
    + '</div>'

    + '<h2 class="pd-sec"><span class="n">1</span>Hasil Alokasi Anggaran<small>Dihitung dari pemasukan '+monthLabel(month)+'</small></h2>'
    + '<table class="pd-table">'
      + '<colgroup><col style="width:26%"><col style="width:9%"><col style="width:16%"><col style="width:16%"><col style="width:17%"><col style="width:16%"></colgroup>'
      + '<thead><tr><th>Pos Alokasi</th><th class="num">Rasio</th><th class="num">Anggaran</th><th class="num">Terpakai</th><th class="num">Sisa</th><th>Status</th></tr></thead>'
      + '<tbody>'+allocRows
        + '<tr class="total"><td>Total</td><td class="num">100%</td><td class="num">'+rp(t.income)+'</td><td class="num">'+rp(t.expense)+'</td><td class="num">'+rp(t.income - t.expense)+'</td><td></td></tr>'
      + '</tbody>'
    + '</table>'
    + '<div class="pd-note">Status <b>Aman</b> berarti pemakaian di bawah 80% anggaran pos, <b>Hampir penuh</b> 80–100%, dan <b>Lewat anggaran</b> bila pengeluaran melebihi anggaran pos tersebut.</div>'

    + '<h2 class="pd-sec"><span class="n">2</span>Mapping Alokasi '+monthLabel(nextKey)+'<small>Rencana otomatis bulan berikutnya</small></h2>'
    + '<table class="pd-table">'
      + '<colgroup><col style="width:52%"><col style="width:16%"><col style="width:32%"></colgroup>'
      + '<thead><tr><th>Pos Alokasi</th><th class="num">Rasio</th><th class="num">Rencana Anggaran</th></tr></thead>'
      + '<tbody>'+mapRows
        + '<tr class="total"><td>Total Rencana</td><td class="num">100%</td><td class="num">'+rp(t.income)+'</td></tr>'
      + '</tbody>'
    + '</table>'
    + '<div class="pd-note">Mapping memakai rasio alokasi saat ini dan basis pemasukan '+monthLabel(month)+'. Nilai aktual bulan depan akan menyesuaikan pemasukan yang tercatat.</div>'

    + '<h2 class="pd-sec blue"><span class="n">3</span>Perbandingan Bulan<small>'+monthShort(prevKey)+' vs '+monthShort(month)+'</small></h2>'
    + '<table class="pd-table">'
      + '<colgroup><col style="width:40%"><col style="width:20%"><col style="width:20%"><col style="width:20%"></colgroup>'
      + '<thead><tr><th>Uraian</th><th class="num">'+monthLabel(prevKey)+'</th><th class="num">'+monthLabel(month)+'</th><th class="num">Perubahan</th></tr></thead>'
      + '<tbody>'+cmpRows+'</tbody>'
    + '</table>'

    + '<div class="pd-detail">'
      + '<div class="pd-detail-head">'
        + '<div><h2>Detail Transaksi</h2><p>Mashimaro Financial · Laporan '+monthLabel(month)+'</p></div>'
        + '<span>'+incomes.length+' pemasukan · '+expenses.length+' pengeluaran</span>'
      + '</div>'

      + '<h2 class="pd-sec"><span class="n">4</span>Pemasukan / Kredit<small>'+rp(t.income)+'</small></h2>'
      + '<table class="pd-table tint-in">'
        + '<colgroup><col style="width:6%"><col style="width:15%"><col style="width:29%"><col style="width:29%"><col style="width:21%"></colgroup>'
        + '<thead><tr><th class="num">No</th><th>Tanggal</th><th>Kategori</th><th>Catatan</th><th class="num">Nominal (Kredit)</th></tr></thead>'
        + '<tbody>'+detailRows(incomes, 'in')
          + '<tr class="subtotal"><td colspan="4">Subtotal Pemasukan / Kredit</td><td class="num pd-amount-in">'+rp(t.income)+'</td></tr>'
        + '</tbody>'
      + '</table>'

      + '<h2 class="pd-sec coral"><span class="n">5</span>Pengeluaran / Debit<small>'+rp(t.expense)+'</small></h2>'
      + '<table class="pd-table tint-out">'
        + '<colgroup><col style="width:6%"><col style="width:15%"><col style="width:29%"><col style="width:29%"><col style="width:21%"></colgroup>'
        + '<thead><tr><th class="num">No</th><th>Tanggal</th><th>Kategori &amp; Pos</th><th>Catatan</th><th class="num">Nominal (Debit)</th></tr></thead>'
        + '<tbody>'+detailRows(expenses, 'out')
          + '<tr class="subtotal"><td colspan="4">Subtotal Pengeluaran / Debit</td><td class="num pd-amount-out">'+rp(t.expense)+'</td></tr>'
        + '</tbody>'
      + '</table>'

      + '<table class="pd-table" style="margin-top:4mm">'
        + '<colgroup><col style="width:50%"><col style="width:50%"></colgroup>'
        + '<tbody>'
          + '<tr class="total"><td>Selisih Bersih (Kredit − Debit)</td><td class="num" style="color:'+(t.net>=0?'#0A7F6D':'#C4432F')+'">'+rp(t.net)+'</td></tr>'
        + '</tbody>'
      + '</table>'

      + '<div class="pd-foot"><span>Mashimaro Financial · Laporan '+monthLabel(month)+'</span><span>Dicetak '+printed+'</span></div>'
    + '</div>';

  document.body.classList.add('printing');
}

function printReport(){
  buildPrintDoc();
  setTimeout(() => window.print(), 80);
}

window.addEventListener('afterprint', () => document.body.classList.remove('printing'));
window.addEventListener('beforeprint', () => buildPrintDoc());

function netStatusLabel(net){
  return net > 0 ? 'Surplus' : net < 0 ? 'Defisit' : 'Seimbang';
}

/* ---------------- SETTINGS ---------------- */
function settingsView(){
  const incList = (state.categories.income||[]).map(c =>
    '<div class="cat-item">'
      + '<span class="cic" style="background:var(--primary-soft);color:var(--primary-dark)">'+icon('income')+'</span>'
      + '<div class="cn"><b>'+esc(c.name)+'</b><small>Kategori pemasukan</small></div>'
      + '<button class="c-btn" data-action="edit-cat" data-type="income" data-id="'+c.id+'" aria-label="Ubah">'+icon('edit')+'</button>'
      + '<button class="c-btn" data-action="ask-del-cat" data-type="income" data-id="'+c.id+'" aria-label="Hapus">'+icon('trash')+'</button>'
    + '</div>'
  ).join('');

  const expList = (state.categories.expense||[]).map(c => {
    const p = posOf(c.pos || 'operational');
    return '<div class="cat-item">'
      + '<span class="cic" style="background:'+p.soft+';color:'+p.color+'">'+icon(p.icon)+'</span>'
      + '<div class="cn"><b>'+esc(c.name)+'</b><small>Pos: '+p.label+'</small></div>'
      + '<button class="c-btn" data-action="edit-cat" data-type="expense" data-id="'+c.id+'" aria-label="Ubah">'+icon('edit')+'</button>'
      + '<button class="c-btn" data-action="ask-del-cat" data-type="expense" data-id="'+c.id+'" aria-label="Hapus">'+icon('trash')+'</button>'
    + '</div>';
  }).join('');

  const r = state.settings.ratios;
  return '<div class="profile-card">'
      + '<div class="profile-logo">M</div>'
      + '<div><h3>Mashimaro Financial</h3><p>Pencatatan keuangan & alokasi anggaran</p>'
        + '<div style="display:flex;gap:5px;margin-top:6px;flex-wrap:wrap">'
          + '<span class="pill green">Cicilan '+r.installment+'%</span>'
          + '<span class="pill blue">Ops '+r.operational+'%</span>'
          + '<span class="pill gray">Tab '+r.savings+'%</span>'
          + '<span class="pill gold">Darurat '+r.emergency+'%</span>'
        + '</div></div>'
    + '</div>'

    + '<div class="settings-group">'
      + '<div class="sg-title"><h3><span class="dot" style="background:var(--primary)"></span>Kategori Pemasukan</h3>'
        + '<button class="add-mini" data-action="new-cat" data-type="income">'+icon('plus')+'Tambah</button></div>'
      + '<div class="card">'+(incList || '<div class="cat-item"><div class="cn"><b>Tidak ada kategori</b></div></div>')+'</div>'
    + '</div>'

    + '<div class="settings-group">'
      + '<div class="sg-title"><h3><span class="dot" style="background:var(--accent)"></span>Kategori Pengeluaran</h3>'
        + '<button class="add-mini" data-action="new-cat" data-type="expense">'+icon('plus')+'Tambah</button></div>'
      + '<div class="card">'+(expList || '<div class="cat-item"><div class="cn"><b>Tidak ada kategori</b></div></div>')+'</div>'
    + '</div>'

    + '<div class="settings-group">'
      + '<div class="sg-title"><h3><span class="dot" style="background:var(--violet)"></span>Aplikasi</h3></div>'
      + '<div class="card">'
        + '<button class="data-row" data-action="install-app">'
          + '<span class="dic" style="background:var(--primary-soft);color:var(--primary-dark)">'+icon(isStandalone() ? 'check' : 'phone')+'</span>'
          + '<span class="dt"><b>'+(isStandalone() ? 'Aplikasi sudah terpasang' : 'Pasang di layar utama')+'</b>'
            + '<small>'+(isStandalone()
              ? 'Terbuka dalam mode aplikasi penuh'
              : deferredInstallPrompt ? 'Siap dipasang sekarang'
              : isIOS() ? 'Safari: Bagikan → Tambah ke Layar Utama'
              : !isSecureApp() ? 'Perlu alamat HTTPS untuk memasang'
              : 'Chrome/Edge: menu → Instal aplikasi')+'</small></span>'
          + '<span class="chev">'+icon('chevR')+'</span>'
        + '</button>'
        + '<div class="data-row" style="cursor:default">'
          + '<span class="dic" style="background:var(--blue-soft);color:var(--blue)">'+icon('shield')+'</span>'
          + '<span class="dt"><b>Mode offline</b><small>Aset aplikasi disimpan di perangkat setelah dipasang</small></span>'
          + '<span class="pill green">PWA</span>'
        + '</div>'
      + '</div>'
    + '</div>'

    + '<div class="settings-group">'
      + '<div class="sg-title"><h3><span class="dot" style="background:var(--blue)"></span>Data & Laporan</h3></div>'
      + '<div class="card">'
        + '<button class="data-row" data-action="demo"><span class="dic" style="background:var(--blue-soft);color:var(--blue)">'+icon('refresh')+'</span>'
          + '<span class="dt"><b>Muat data contoh</b><small>Isi ulang dengan data demo</small></span><span class="chev">'+icon('chevR')+'</span></button>'
        + '<button class="data-row" data-action="ask-clear-tx"><span class="dic" style="background:var(--gold-soft);color:#B4831C">'+icon('trash')+'</span>'
          + '<span class="dt"><b>Hapus semua transaksi</b><small>Kategori & rasio tetap disimpan</small></span><span class="chev">'+icon('chevR')+'</span></button>'
        + '<button class="data-row danger" data-action="ask-reset-all"><span class="dic" style="background:var(--accent-soft);color:#D24B39">'+icon('alert')+'</span>'
          + '<span class="dt"><b>Reset semua data</b><small>Kosongkan transaksi & kembalikan pengaturan awal</small></span><span class="chev">'+icon('chevR')+'</span></button>'
      + '</div>'
    + '</div>'
    + '<div class="about-note">Mashimaro Financial • PWA v1.0<br>Data tersimpan lokal di perangkat ini.</div>';
}

/* ---------------- SHEETS ---------------- */
const sheetEl = document.getElementById('sheet');
const backdropEl = document.getElementById('backdrop');
let pendingAction = null;
let sheetTimer = null;

function todayISO(){
  const d = new Date();
  return d.getFullYear() + '-' + pad2(d.getMonth()+1) + '-' + pad2(d.getDate());
}

function openSheet(html){
  clearTimeout(sheetTimer);
  sheetEl.innerHTML = html;
  sheetEl.classList.add('open');
  backdropEl.classList.add('show');
  sheetEl.setAttribute('aria-hidden','false');
  sheetEl.scrollTop = 0;
  const amt = document.getElementById('f-amount');
  if(amt){
    amt.addEventListener('input', () => {
      const digits = amt.value.replace(/\D/g,'');
      amt.value = digits ? nf.format(parseInt(digits,10)) : '';
    });
  }
}

function closeSheet(){
  sheetEl.classList.remove('open');
  backdropEl.classList.remove('show');
  sheetEl.setAttribute('aria-hidden','true');
  pendingAction = null;
  clearTimeout(sheetTimer);
  sheetTimer = setTimeout(() => { if(!sheetEl.classList.contains('open')) sheetEl.innerHTML = ''; }, 320);
}

function sheetHead(title, sub){
  return '<div class="sheet-grab"></div>'
    + '<div class="sheet-head"><div><h2>'+title+'</h2><p>'+sub+'</p></div>'
    + '<button class="sheet-close" data-action="close-sheet" aria-label="Tutup">'+icon('close')+'</button></div>';
}

function openFab(){
  openSheet(sheetHead('Catat Transaksi','Pilih jenis transaksi yang ingin dicatat.')
    + '<div class="action-list">'
      + '<button class="action-item" data-action="add" data-type="income"><span class="aic" style="background:var(--primary-soft);color:var(--primary-dark)">'+icon('income')+'</span>'
        + '<span><b>Pemasukan</b><small>Penjualan, jasa, modal, dll.</small></span></button>'
      + '<button class="action-item" data-action="add" data-type="expense"><span class="aic" style="background:var(--accent-soft);color:var(--accent)">'+icon('expense')+'</span>'
        + '<span><b>Pengeluaran</b><small>Operasional, cicilan, tabungan, dll.</small></span></button>'
    + '</div>'
    + '<p class="sheet-note">Data akan masuk ke periode sesuai tanggal transaksi.</p>');
}

function openTxSheet(type, id){
  const editing = id ? state.transactions.find(t => t.id === id) : null;
  const isIn = type === 'income';
  const cats = state.categories[type] || [];
  sheetCat = editing ? editing.categoryId : (cats[0] ? cats[0].id : null);

  const chips = cats.length
    ? cats.map(c => '<button class="chip'+(c.id===sheetCat?' active':'')+'" data-action="cat-pick" data-cat="'+c.id+'">'+esc(c.name)+'</button>').join('')
    : '<span style="font-size:11px;color:var(--muted)">Belum ada kategori. Tambahkan di Pengaturan.</span>';

  const dateVal = editing ? editing.date : todayISO();
  const amountVal = editing ? nf.format(editing.amount) : '';
  const noteVal = editing ? esc(editing.note||'') : '';

  const html = sheetHead(editing ? 'Ubah ' + (isIn?'Pemasukan':'Pengeluaran') : 'Tambah ' + (isIn?'Pemasukan':'Pengeluaran'),
      isIn ? 'Uang masuk untuk periode ini' : 'Uang keluar untuk periode ini')
    + '<div class="amount-input"><span>Rp</span><input id="f-amount" inputmode="numeric" placeholder="0" value="'+amountVal+'" autocomplete="off"></div>'
    + '<div class="field"><span class="lbl">Kategori</span><div class="chips" id="f-cats">'+chips+'</div></div>'
    + '<div class="field"><span class="lbl">Tanggal</span><input class="input" type="date" id="f-date" value="'+dateVal+'"></div>'
    + '<div class="field"><span class="lbl">Catatan <span style="text-transform:none;letter-spacing:0;font-weight:600">(opsional)</span></span>'
      + '<input class="input" id="f-note" placeholder="Contoh: penjualan marketplace" value="'+noteVal+'"></div>'
    + '<button class="btn primary" data-action="save-tx" data-type="'+type+'"'+(editing?' data-id="'+editing.id+'"':'')+'>'+icon('check')+(editing?'Simpan Perubahan':'Simpan Transaksi')+'</button>'
    + (editing ? '<button class="btn danger" style="margin-top:9px" data-action="ask-del-tx" data-id="'+editing.id+'">'+icon('trash')+'Hapus Transaksi</button>' : '');

  openSheet(html);
}

function saveTxFromSheet(type, id){
  const amount = Number((document.getElementById('f-amount').value || '').replace(/\D/g,''));
  const date = document.getElementById('f-date').value || todayISO();
  const note = (document.getElementById('f-note').value || '').trim();
  if(!amount){ toast('Nominal belum diisi'); return; }
  if(!sheetCat){ toast('Pilih kategori dulu'); return; }

  if(id){
    const tx = state.transactions.find(t => t.id === id);
    if(tx){ tx.amount = amount; tx.categoryId = sheetCat; tx.date = date; tx.note = note; }
  }else{
    state.transactions.push({ id:uid(), type, amount, categoryId:sheetCat, date, note });
  }
  saveAll();
  ui.month = date.slice(0,7);
  ui.filter = 'all';
  closeSheet();
  render();
  view.scrollTop = 0;
  toast(id ? 'Transaksi diperbarui' : (type === 'income' ? 'Pemasukan tersimpan' : 'Pengeluaran tersimpan'));
}

function openActionSheet(id){
  const t = state.transactions.find(x => x.id === id);
  if(!t) return;
  const isIn = t.type === 'income';
  openSheet(sheetHead('Transaksi','Pilih tindakan untuk transaksi ini.')
    + '<div class="total-card" style="margin-bottom:12px;box-shadow:none">'
      + '<div class="tc-l"><div class="tc-ic" style="background:'+(isIn?'var(--primary-soft)':'var(--accent-soft)')+';color:'+(isIn?'var(--primary-dark)':'var(--accent)')+'">'+icon(isIn?'income':'expense')+'</div>'
        + '<div><small>'+esc(txCatName(t))+' • '+txDateShort(t.date)+'</small><b style="font-size:16px">'+(isIn?'+ ':'− ')+rp(t.amount)+'</b></div></div>'
    + '</div>'
    + '<div class="action-list">'
      + '<button class="action-item" data-action="edit-tx" data-type="'+t.type+'" data-id="'+t.id+'"><span class="aic">'+icon('edit')+'</span><span>Ubah transaksi<small>Nominal, kategori, tanggal, catatan</small></span></button>'
      + '<button class="action-item danger" data-action="ask-del-tx" data-id="'+t.id+'"><span class="aic">'+icon('trash')+'</span><span>Hapus transaksi<small>Data akan dihapus permanen</small></span></button>'
      + '<button class="action-item" data-action="close-sheet"><span class="aic">'+icon('close')+'</span><span>Batal</span></button>'
    + '</div>');
}

function confirmSheet(opts){
  pendingAction = opts.onConfirm || null;
  openSheet(sheetHead(opts.title, opts.text || '')
    + '<div class="action-list">'
      + '<button class="action-item '+(opts.danger?'danger':'')+'" data-action="confirm-yes"><span class="aic">'+icon(opts.danger?'alert':'check')+'</span>'
        + '<span>'+opts.label+(opts.sub?'<small>'+opts.sub+'</small>':'')+'</span></button>'
      + '<button class="action-item" data-action="confirm-no"><span class="aic">'+icon('close')+'</span><span>Batal</span></button>'
    + '</div>');
}

function openCategorySheet(type, id){
  const editing = id ? (state.categories[type]||[]).find(c => c.id === id) : null;
  const isExp = type === 'expense';
  const posVal = editing && editing.pos ? editing.pos : 'operational';
  const posOpts = POS.map(p => '<option value="'+p.key+'"'+(p.key===posVal?' selected':'')+'>'+p.label+'</option>').join('');

  openSheet(sheetHead(editing ? 'Ubah Kategori' : 'Kategori Baru', isExp ? 'Kategori pengeluaran & pos alokasinya' : 'Kategori pemasukan')
    + '<div class="field"><span class="lbl">Nama kategori</span><input class="input" id="c-name" placeholder="Contoh: Bahan Baku" value="'+(editing?esc(editing.name):'')+'"></div>'
    + (isExp ? '<div class="field"><span class="lbl">Masuk ke pos alokasi</span><select class="input" id="c-pos">'+posOpts+'</select></div>' : '')
    + '<div class="note" style="margin-bottom:12px">'+icon('note')+'<span>'+(isExp ? 'Pos alokasi menentukan kategori ini dihitung ke cicilan, operasional, tabungan, atau dana darurat pada laporan.' : 'Kategori pemasukan membantumu memisahkan sumber pendapatan.')+'</span></div>'
    + '<button class="btn primary" data-action="save-cat" data-type="'+type+'"'+(editing?' data-id="'+editing.id+'"':'')+'>'+icon('check')+(editing?'Simpan Perubahan':'Tambah Kategori')+'</button>');
}

function saveCategoryFromSheet(type, id){
  const name = (document.getElementById('c-name').value || '').trim();
  if(!name){ toast('Nama kategori belum diisi'); return; }
  const posEl = document.getElementById('c-pos');
  const pos = type === 'expense' ? (posEl ? posEl.value : 'operational') : undefined;
  if(id){
    const c = (state.categories[type]||[]).find(x => x.id === id);
    if(c){ c.name = name; if(type==='expense') c.pos = pos; }
  }else{
    state.categories[type] = state.categories[type] || [];
    state.categories[type].push(type==='expense' ? { id:uid(), name, pos } : { id:uid(), name });
  }
  saveAll();
  closeSheet();
  render();
  toast(id ? 'Kategori diperbarui' : 'Kategori ditambahkan');
}

function deleteCategory(type, id){
  state.categories[type] = (state.categories[type]||[]).filter(c => c.id !== id);
  state.transactions.forEach(t => { if(t.type === type && t.categoryId === id) t.categoryId = null; });
  saveAll();
  render();
  toast('Kategori dihapus');
}

/* ---------------- TOAST & RENDER ---------------- */
let toastTimer = null;
function toast(msg){
  const el = document.getElementById('toast');
  el.textContent = msg;
  el.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => el.classList.remove('show'), 2300);
}

function render(){
  const topbar = document.getElementById('topbar');
  const view = document.getElementById('view');
  topbar.innerHTML = topbarHTML(ui.tab);
  const views = {
    home: homeView,
    income: () => txView('income'),
    expense: () => txView('expense'),
    budget: budgetView,
    report: reportView,
    settings: settingsView
  };
  view.innerHTML = (views[ui.tab] || homeView)();
  document.getElementById('tabbar').innerHTML = tabbarHTML();
  document.getElementById('fab').style.display = ui.tab === 'settings' ? 'none' : 'grid';
  view.classList.remove('anim');
  void view.offsetWidth;
  view.classList.add('anim');
  if(ui.tab === 'budget') bindBudgetSliders();
}

function setTab(tab){
  ui.tab = tab;
  ui.filter = 'all';
  render();
  document.getElementById('view').scrollTop = 0;
}

/* ---------------- EVENTS ---------------- */
document.addEventListener('click', (e) => {
  const el = e.target.closest('[data-action]');
  if(!el) return;
  const a = el.dataset.action;

  switch(a){
    case 'tab': setTab(el.dataset.tab); break;
    case 'settings': setTab('settings'); break;
    case 'back': setTab('home'); break;
    case 'month': {
      ui.month = shiftMonth(ui.month, parseInt(el.dataset.delta,10) || 0);
      ui.filter = 'all';
      render();
      document.getElementById('view').scrollTop = 0;
      break;
    }
    case 'filter': ui.filter = el.dataset.cat; render(); break;
    case 'fab': openFab(); break;
    case 'add': openTxSheet(el.dataset.type); break;
    case 'txn': openActionSheet(el.dataset.id); break;
    case 'close-sheet': closeSheet(); break;
    case 'cat-pick': {
      sheetCat = el.dataset.cat;
      document.querySelectorAll('#f-cats .chip').forEach(c => c.classList.toggle('active', c.dataset.cat === sheetCat));
      break;
    }
    case 'save-tx': saveTxFromSheet(el.dataset.type, el.dataset.id || null); break;
    case 'edit-tx': openTxSheet(el.dataset.type, el.dataset.id); break;
    case 'ask-del-tx': {
      const id = el.dataset.id;
      confirmSheet({
        title:'Hapus transaksi?', text:'Transaksi yang dihapus tidak bisa dikembalikan.',
        label:'Ya, hapus transaksi', danger:true, sub:'Data dihapus permanen',
        onConfirm(){ state.transactions = state.transactions.filter(t => t.id !== id); saveAll(); render(); toast('Transaksi dihapus'); }
      });
      break;
    }
    case 'confirm-yes': {
      const fn = pendingAction;
      pendingAction = null;
      closeSheet();
      if(fn) fn();
      break;
    }
    case 'confirm-no': pendingAction = null; closeSheet(); break;
    case 'new-cat': openCategorySheet(el.dataset.type); break;
    case 'edit-cat': openCategorySheet(el.dataset.type, el.dataset.id); break;
    case 'save-cat': saveCategoryFromSheet(el.dataset.type, el.dataset.id || null); break;
    case 'ask-del-cat': {
      const type = el.dataset.type, id = el.dataset.id;
      const c = (state.categories[type]||[]).find(x => x.id === id);
      confirmSheet({
        title:'Hapus kategori?', text:'Transaksi lama tetap ada, tetapi kategorinya menjadi "Tanpa kategori".',
        label:'Hapus kategori', danger:true, sub:c ? esc(c.name) : '',
        onConfirm(){ deleteCategory(type, id); }
      });
      break;
    }
    case 'save-budget': {
      const ae = document.activeElement;
      if(ae && typeof ae.blur === 'function') ae.blur();
      const total = Object.values(budgetDraft).reduce((x,y) => x + (Number(y)||0), 0);
      if(total !== 100){ toast('Total rasio harus 100%'); break; }
      state.settings.ratios = Object.assign({}, budgetDraft);
      budgetSaved = true;
      saveAll();
      render();
      document.getElementById('view').scrollTop = 0;
      toast('Rasio alokasi disimpan');
      clearTimeout(budgetBannerTimer);
      budgetBannerTimer = setTimeout(() => {
        const b = document.getElementById('budget-save-banner');
        if(b){
          b.classList.add('hide');
          setTimeout(() => { if(b.parentNode) b.parentNode.removeChild(b); }, 320);
        }
        budgetSaved = false;
      }, 6000);
      break;
    }
    case 'reset-ratios': {
      budgetDraft = Object.assign({}, DEFAULT_RATIOS);
      clearBudgetBanner();
      POS.forEach(p => {
        const v = budgetDraft[p.key];
        const range = document.querySelector('[data-range="'+p.key+'"]');
        const pct = document.querySelector('[data-pct="'+p.key+'"]');
        if(range){ range.value = v; range.style.setProperty('--rv', v + '%'); }
        if(pct) pct.value = v;
      });
      updateBudgetUI();
      toast('Rasio dikembalikan ke default');
      break;
    }
    case 'ask-clear-tx':
      confirmSheet({
        title:'Hapus semua transaksi?', text:'Seluruh pemasukan & pengeluaran akan dikosongkan. Kategori dan rasio tetap disimpan.',
        label:'Ya, kosongkan transaksi', danger:true, sub:'Tidak bisa dibatalkan',
        onConfirm(){ state.transactions = []; saveAll(); ui.month = curMonth(); render(); toast('Semua transaksi dihapus'); }
      });
      break;
    case 'ask-reset-all':
      confirmSheet({
        title:'Reset semua data?', text:'Semua transaksi dikosongkan, kategori kembali ke bawaan, dan rasio alokasi kembali ke 20/50/10/20.',
        label:'Ya, reset semuanya', danger:true, sub:'Kembali ke kondisi awal',
        onConfirm(){
          state = { version:1, settings:{ ratios:Object.assign({}, DEFAULT_RATIOS) }, categories:defaultCategories(), transactions:[] };
          saveAll();
          ui.tab = 'home'; ui.month = curMonth(); ui.filter = 'all';
          render();
          toast('Semua data sudah direset');
        }
      });
      break;
    case 'demo':
      confirmSheet({
        title:'Muat data contoh?', text:'Data saat ini akan diganti dengan data demo (bulan ini & bulan lalu).',
        label:'Muat data contoh',
        onConfirm(){ state = seedData(); saveAll(); ui.tab='home'; ui.month=curMonth(); ui.filter='all'; render(); toast('Data contoh dimuat'); }
      });
      break;
    case 'download': downloadReport(); break;
    case 'print': printReport(); break;
    case 'install-app': handleInstall(); break;
    case 'dismiss-install': {
      try { localStorage.setItem(INSTALL_DISMISS_KEY, '1'); } catch(e){}
      render();
      toast('Pengingat pemasangan disembunyikan');
      break;
    }
    default: break;
  }
});

/* ---------------- PWA: install & offline ---------------- */
window.addEventListener('beforeinstallprompt', (e) => {
  e.preventDefault();
  deferredInstallPrompt = e;
  if(ui.tab === 'home') render();
});

window.addEventListener('appinstalled', () => {
  deferredInstallPrompt = null;
  try { localStorage.setItem(INSTALL_DISMISS_KEY, '1'); } catch(e){}
  toast('Mashimaro Financial berhasil dipasang');
  render();
});

if('serviceWorker' in navigator && isSecureApp()){
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('./sw.js', { scope: './' }).catch(() => {});
  });
}

/* amount formatting for date-change? noop */
render();

