/* =================================================================
   1) KONFIGURASI UMUM
   Edit bagian ini untuk ubah info kontak, nama acara, dsb.
   ================================================================= */
const CONFIG = {
  storeName: "ANSOR STORE",
  eventName: "Margoagung Bersholawat",
  // EDIT: isi tanggal batas pre-order kalau sudah fiks, misal "20 Oktober 2026"
  poDeadlineText: "",
  // Nomor WA admin (format lokal 0887433286416 sudah dikonversi ke format internasional 62 di bawah)
  // whatsappNumber: "",
};

/* Template pesan WhatsApp otomatis saat tombol "Pesan" diklik */
function buildWaMessage(product, variant){
  let msg = `Assalamualaikum, saya ingin pre-order:\n\n`;
  msg += `Produk: ${product.name}\n`;
  if (variant) msg += `Motif: ${variant.code}\n`;
  msg += `\nMohon info ketersediaan & cara pembayarannya ya. Terima kasih 🙏`;
  return msg;
}
function waLink(message){
  return `https://wa.me/${CONFIG.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

/* =================================================================
   2) DATA KATEGORI
   Baru "Sarung" yang aktif. Untuk mengaktifkan Kaos/Peci nanti:
   hapus tanda komentar di bawah lalu lengkapi data produknya
   di bagian PRODUCTS.
   ================================================================= */
const CATEGORIES = [
  { id: 'sarung', label: 'Sarung' },
  { id: 'kaos', label: 'Kaos' },
  // { id: 'peci', label: 'Peci' },
];

/* =================================================================
   3) DATA PRODUK
   ---- EDIT / TAMBAH PRODUK DI SINI ----
   - image / variants[].image: isi dengan path foto asli, contoh:
     image: "assets/sarung/gloyor-plus/cover.jpg"
     Kalau dikosongkan (""), akan otomatis tampil kotak placeholder.
   - priceOriginal boleh disamakan dengan priceSale kalau produk
     tidak sedang diskon (badge diskon otomatis akan hilang).
   ================================================================= */
const PRODUCTS = [
  {
    id: 'sarung-micro',
    category: 'sarung',
    badge: 'Regular Collection',
    name: 'Sarung Batik — Seri Micro',
    priceOriginal: 70000, // perlu diganti
    priceSale: 60000, //perlu diganti
    shortDesc: 'Nyaman dipakai, mudah diatur, motif batik klasik modern, cocok untuk penggunaan harian hingga acara formal.',
    details: [
      { label: 'Bahan', value: 'Micro premium (ringan, jatuh, tidak kaku, warna tembus kain)' },
      { label: 'Teknik', value: 'Printing' },
      { label: 'Ukuran', value: '± 117 cm x 215–218 cm (Dewasa)' },
      { label: 'Motif', value: 'Beragam, pilih kode motif di bawah' },
      { label: 'Tekstur', value: 'Jatuh, Rapi, & tidak nerawang' },
      { label: 'Label', value: '-' },
      { label: 'Kemasan', value: 'Plastik' },
    ],
    highlights: [
      'Warna awet, tidak luntur',
      'Motif banyak, elegan',
      'Cocok untuk sholat & acara resmi',
      'Seragaman',
      'Souvenir'
    ],
    note: 'Perbedaan warna tipis bisa terjadi karena pencahayaan foto. Info ketersediaan motif & foto detail motif, silakan chat admin.',
    sizeGuide: [
      { label: 'All Size (Dewasa)', size: '± 117 cm x 215–218 cm' },
    ],
    image: 'assets/Micro/MICRO.png', // TODO: isi foto utama produk
    variants: [
      { code: 'Motif 01', image: 'assets/Micro/Micro 1.png'}, // TODO: ganti "" dengan path foto motif asli
      { code: 'Motif 02', image: 'assets/Micro/Micro 2.png' },
      { code: 'Motif 03', image: 'assets/Micro/Micro 3.png' },
      { code: 'Motif 04', image: 'assets/Micro/Micro 4.png' },
      { code: 'Motif 05', image: 'assets/Micro/Micro 5.png' },
      { code: 'Motif 06', image: 'assets/Micro/Micro 6.png' },
      { code: 'Motif 07', image: 'assets/Micro/Micro 7.png' },
      { code: 'Motif 08', image: 'assets/Micro/Micro 8.png' },
      { code: 'Motif 09', image: 'assets/Micro/Micro 9.png' },
      { code: 'Motif 10', image: 'assets/Micro/Micro 10.png' },
    ],
  },

  {
    id: 'sarung-gloyor-plus',
    category: 'sarung',
    badge: 'Regular Collection',
    name: 'Sarung Batik — Seri Gloyor Plus',
    priceOriginal: 95000, //perlu perbaiki
    priceSale: 85000, // perlu perbaiki
    shortDesc: 'Sarung batik dengan bahan gloyor pilihan yang terkenal lembut, jatuh, dan sejuk saat dikenakan.',
    details: [
      { label: 'Bahan', value: 'Gloyor premium (lembut, jatuh & adem)' },
      { label: 'Teknik', value: 'Printing presisi manual' },
      { label: 'Ukuran', value: '± 117 cm x 217–218 cm (Dewasa)' },
      { label: 'Motif', value: 'Beragam, pilih kode motif di bawah' },
      { label: 'Tekstur', value: 'Halus, lembut & nyaman' },
      { label: 'Label', value: '-' },
      { label: 'Kemasan', value: 'Plastik' },
    ],
    highlights: [
      'Nyaman untuk ibadah & kegiatan formal',
      'Tampilan rapi dan berkelas',
      'Cocok sebagai hadiah istimewa',
    ],
    note: 'Perbedaan warna tipis bisa terjadi karena pencahayaan foto. Info ketersediaan motif & foto detail motif, silakan chat admin.',
    sizeGuide: [
      { label: 'All Size (Dewasa)', size: '± 117 cm x 217–218 cm' },
    ],
    image: 'assets/Goyor Plus/Goyor Plus.png', // TODO: isi foto utama produk
    variants: [
      { code: 'Motif 01', image: 'assets/Goyor Plus/Goyor Plus 1.png'}, // TODO: ganti "" dengan path foto motif asli
      { code: 'Motif 02', image: 'assets/Goyor Plus/Goyor Plus 2.png' },
      { code: 'Motif 03', image: 'assets/Goyor Plus/Goyor Plus 3.png' },
      { code: 'Motif 04', image: 'assets/Goyor Plus/Goyor Plus 4.png' },
      { code: 'Motif 05', image: 'assets/Goyor Plus/Goyor Plus 5.png' },
      { code: 'Motif 06', image: 'assets/Goyor Plus/Goyor Plus 6.png' },
      { code: 'Motif 07', image: 'assets/Goyor Plus/Goyor Plus 7.png' },
      { code: 'Motif 08', image: 'assets/Goyor Plus/Goyor Plus 8.png' },
      { code: 'Motif 09', image: 'assets/Goyor Plus/Goyor Plus 9.png' },
      { code: 'Motif 10', image: 'assets/Goyor Plus/Goyor Plus 10.png' },
    ],
  },

  {
    id: 'sarung-katun',
    category: 'sarung',
    badge: 'Regular Collection',
    name: 'Sarung Batik — Seri Katun',
    priceOriginal: 110000, //perlu perbaiki
    priceSale: 100000, // perlu perbaiki
    shortDesc: 'Menggunakan bahan original katun berkualitas yang nyaman dipakai.',
    details: [
      { label: 'Bahan', value: 'Katun pilihan (jatuh, adem, mudah diatur)' },
      { label: 'Teknik', value: 'Printing presisi manual' },
      { label: 'Ukuran', value: '± 117 cm x 218 cm (Dewasa)' },
      { label: 'Motif', value: 'Beragam, pilih kode motif di bawah' },
      { label: 'Tekstur', value: 'Halus, lembut & nyaman' },
      { label: 'Label', value: '-' },
      { label: 'Kemasan', value: 'Plastik' },
    ],
    highlights: [
      'Nyaman untuk ibadah & aktivitas formal',
      'Cocok sebagai hadiah bernilai',
    ],
    note: 'Perbedaan warna tipis bisa terjadi karena pencahayaan foto. Info ketersediaan motif & foto detail motif, silakan chat admin.',
    sizeGuide: [
      { label: 'All Size (Dewasa)', size: '± 117 cm x 218 cm' },
    ],
    image: 'assets/Katun/Katun.png', // TODO: isi foto utama produk
    variants: [
      { code: 'Motif 01', image: 'assets/Katun/KATUN 1.png'}, // TODO: ganti "" dengan path foto motif asli
      { code: 'Motif 02', image: 'assets/Katun/KATUN 2.png' },
      { code: 'Motif 03', image: 'assets/Katun/KATUN 3.png' },
      { code: 'Motif 04', image: 'assets/Katun/KATUN 4.png' },
      { code: 'Motif 05', image: 'assets/Katun/KATUN 5.png' },
      { code: 'Motif 06', image: 'assets/Katun/KATUN 6.png' },
      { code: 'Motif 07', image: 'assets/Katun/KATUN 7.png' },
      { code: 'Motif 08', image: 'assets/Katun/KATUN 8.png' },
      { code: 'Motif 09', image: 'assets/Katun/KATUN 9.png' },
      { code: 'Motif 10', image: 'assets/Katun/KATUN 10.png' },
    ],
  },


  //  ---- CONTOH DATA UNTUK KAOS (aktifkan kategori 'kaos' di atas dulu) ----
  {
    id: 'kaos-1',
    category: 'kaos',
    badge: 'Kaos Event',
    name: 'Kaos Margoagung Bersholawat',
    priceOriginal: 100000,
    priceSale: 90000,
    shortDesc: '...',
    details: [
      { label: 'Bahan', value: 'Cotton Combed 30s' },
      { label: 'Ukuran', value: 'S / M / L / XL' },
    ],
    highlights: [ '...' ],
    note: '...',
    sizeGuide: [
      { label: 'S', size: 'Lebar dada 46cm, Panjang 66cm' },
      { label: 'M', size: 'Lebar dada 49cm, Panjang 69cm' },
      { label: 'L', size: 'Lebar dada 52cm, Panjang 72cm' },
      { label: 'XL', size: 'Lebar dada 55cm, Panjang 75cm' },
    ],
    image: '',
    variants: [ { code: 'Hitam', image: '' }, { code: 'Navy', image: '' } ],
  },
  
];

/* =================================================================
   4) RENDER — tidak perlu diedit untuk pemakaian normal
   ================================================================= */
const state = { activeCategory: CATEGORIES[0].id, currentProduct: null, currentVariant: null };

function formatIDR(n){ return 'Rp' + Number(n).toLocaleString('id-ID'); }

function mediaPlaceholderHTML(labelText){
  return `
    <div class="media-placeholder">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6">
        <rect x="3" y="4" width="18" height="16" rx="2"/><circle cx="9" cy="10" r="1.6"/><path d="m21 16-5.5-5.5L9 17"/>
      </svg>
      <span>${labelText}</span>
    </div>`;
}

function initHeaderLinks(){
  const generalMsg = `Assalamualaikum, saya mau tanya soal katalog pre-order ${CONFIG.storeName}.`;
  document.getElementById('headerWaBtn').href = waLink(generalMsg);
  document.getElementById('footerWaBtn').href = waLink(generalMsg);
  document.getElementById('year').textContent = new Date().getFullYear();
  document.getElementById('eventName').textContent = CONFIG.eventName;
  if (CONFIG.poDeadlineText){
    document.getElementById('poDeadline').textContent = CONFIG.poDeadlineText;
  }
}

function renderTabs(){
  const tabBar = document.getElementById('tabBar');
  const subline = document.getElementById('catalogSubline');
  if (CATEGORIES.length > 1){
    tabBar.innerHTML = CATEGORIES.map(cat => `
      <button class="tab-btn ${cat.id === state.activeCategory ? 'active' : ''}" data-cat="${cat.id}">
        ${cat.label}
      </button>`).join('');
    subline.textContent = '';
    tabBar.querySelectorAll('.tab-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        state.activeCategory = btn.dataset.cat;
        renderTabs();
        renderGrid();
      });
    });
  } else {
    tabBar.innerHTML = '';
    subline.textContent = `Menampilkan kategori ${CATEGORIES[0].label} — kategori lain menyusul.`;
  }
}

function renderGrid(){
  const grid = document.getElementById('productGrid');
  const items = PRODUCTS.filter(p => p.category === state.activeCategory);

  if (items.length === 0){
    grid.innerHTML = `<p style="color:var(--ink-600)">Belum ada produk di kategori ini.</p>`;
    return;
  }

  grid.innerHTML = items.map(p => {
    const hasDiscount = p.priceOriginal > p.priceSale;
    const discountPct = hasDiscount ? Math.round((1 - p.priceSale / p.priceOriginal) * 100) : 0;
    const mediaHTML = p.image
      ? `<img src="${p.image}" alt="${p.name}" loading="lazy">`
      : mediaPlaceholderHTML('Foto belum diunggah');

    return `
      <article class="card">
        <div class="card-media">
          <span class="card-badge">${p.badge}</span>
          ${hasDiscount ? `<span class="card-discount">Hemat ${discountPct}%</span>` : ''}
          ${mediaHTML}
        </div>
        <div class="card-body">
          <h3 class="card-title">${p.name}</h3>
          <p class="card-meta">${p.variants.length} pilihan motif tersedia</p>
          <div class="card-price">
            ${hasDiscount ? `<span class="price-original">${formatIDR(p.priceOriginal)}</span>` : ''}
            <span class="price-sale">${formatIDR(p.priceSale)}</span>
          </div>
          <div class="card-actions">
            <button class="btn btn-outline" data-detail="${p.id}">Lihat Detail</button>
            <button class="btn btn-solid" data-order="${p.id}">Pesan</button>
          </div>
        </div>
      </article>`;
  }).join('');

  grid.querySelectorAll('[data-detail]').forEach(btn => {
    btn.addEventListener('click', () => openModal(btn.dataset.detail));
  });
  grid.querySelectorAll('[data-order]').forEach(btn => {
    btn.addEventListener('click', () => {
      const product = PRODUCTS.find(p => p.id === btn.dataset.order);
      window.open(waLink(buildWaMessage(product, null)), '_blank');
    });
  });
}

function openModal(productId){
  const product = PRODUCTS.find(p => p.id === productId);
  if (!product) return;
  state.currentProduct = product;
  state.currentVariant = product.variants[0] || null;

  document.getElementById('modalBadge').textContent = product.badge;
  document.getElementById('modalTitle').textContent = product.name;
  document.getElementById('modalDesc').textContent = product.shortDesc;

  const hasDiscount = product.priceOriginal > product.priceSale;
  document.getElementById('modalPrice').innerHTML = `
    ${hasDiscount ? `<span class="price-original">${formatIDR(product.priceOriginal)}</span>` : ''}
    <span class="price-sale">${formatIDR(product.priceSale)}</span>
  `;

  document.getElementById('modalDetailList').innerHTML = product.details.map(d => `
    <li><span class="k">${d.label}</span><span class="v">${d.value}</span></li>
  `).join('');

  const highlightBlock = document.getElementById('modalHighlightBlock');
  if (product.highlights && product.highlights.length){
    highlightBlock.style.display = '';
    document.getElementById('modalHighlightList').innerHTML = product.highlights.map(h => `
      <li>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M20 6 9 17l-5-5"/></svg>
        <span>${h}</span>
      </li>`).join('');
  } else {
    highlightBlock.style.display = 'none';
  }

  const sizeBlock = document.getElementById('modalSizeBlock');
  if (product.sizeGuide && product.sizeGuide.length){
    sizeBlock.style.display = '';
    document.getElementById('modalSizeTable').innerHTML = `
      <tr><th>Ukuran</th><th>Detail</th></tr>
      ${product.sizeGuide.map(s => `<tr><td>${s.label}</td><td>${s.size}</td></tr>`).join('')}
    `;
  } else {
    sizeBlock.style.display = 'none';
  }

  document.getElementById('modalNote').textContent = product.note || '';

  renderGallery();
  updateWaButton();

  document.getElementById('modalOverlay').classList.add('open');
  document.body.classList.add('modal-lock');
}

function renderGallery(){
  const product = state.currentProduct;
  const mainWrap = document.getElementById('modalMainMedia');
  const thumbWrap = document.getElementById('modalThumbs');

  const mainImg = state.currentVariant?.image || product.image;
  mainWrap.innerHTML = mainImg
    ? `<img src="${mainImg}" alt="${product.name} - ${state.currentVariant ? state.currentVariant.code : ''}">`
    : mediaPlaceholderHTML(state.currentVariant ? state.currentVariant.code : 'Foto produk');

  thumbWrap.innerHTML = product.variants.map((v, i) => `
    <button class="thumb ${v === state.currentVariant ? 'active' : ''}" data-idx="${i}" title="${v.code}">
      ${v.image ? `<img src="${v.image}" alt="${v.code}">` : mediaPlaceholderHTML(v.code)}
    </button>
  `).join('');

  thumbWrap.querySelectorAll('.thumb').forEach(btn => {
    btn.addEventListener('click', () => {
      state.currentVariant = product.variants[Number(btn.dataset.idx)];
      renderGallery();
      updateWaButton();
    });
  });
}

function updateWaButton(){
  const msg = buildWaMessage(state.currentProduct, state.currentVariant);
  document.getElementById('modalWaBtn').href = waLink(msg);
}

function closeModal(){
  document.getElementById('modalOverlay').classList.remove('open');
  document.body.classList.remove('modal-lock');
}

document.getElementById('modalClose').addEventListener('click', closeModal);
document.getElementById('modalOverlay').addEventListener('click', (e) => {
  if (e.target.id === 'modalOverlay') closeModal();
});
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeModal();
});

/* =================================================================
   5) INISIALISASI
   ================================================================= */
initHeaderLinks();
renderTabs();
renderGrid();
