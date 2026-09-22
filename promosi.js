(() => {
    const ads = [
        ['Casing HP transparan iPhone 13', 'https://s.shopee.co.id/1135VpsWsQ', 'Lindungi ponsel Anda dengan casing transparan yang tetap menampilkan desain asli iPhone 13.'],
        ['Kabel data USB micro charger 1 meter', 'https://s.shopee.co.id/60RlT9jBfV', 'Butuh kabel cadangan untuk pengisian daya dan transfer data sehari-hari?'],
        ['Tempered Glass Anti Spy Oppo Reno 5G Privacy', 'https://s.shopee.co.id/30o9tod6Rm', 'Jaga layar dan privasi Anda saat menggunakan Oppo Reno 5G di tempat umum.'],
        ['XBOX PC Game Pass Sharing Original', 'https://s.shopee.co.id/7Kx93uSRu8', 'Nikmati pilihan game PC dengan akses Game Pass yang praktis dan terjangkau.'],
        ['GOD OF WAR RAGNAROK Deluxe Edition PC', 'https://s.shopee.co.id/7ptPeyQthD', 'Lengkapi koleksi game Anda dengan pengalaman epik God of War Ragnarök.'],
        ['Minecraft Bedrock Edition PC Original Microsoft', 'https://s.shopee.co.id/9fL3qPZQ5v', 'Bangun dunia dan berpetualang bersama Minecraft Bedrock Edition resmi.'],
        ['Sepatu Safety Pria Kulit Asli Sol Karet Besi', 'https://s.shopee.co.id/9KiDRsYwcT', 'Dapatkan perlindungan kerja yang kokoh dengan sepatu safety berbahan kulit asli.'],
        ['Sepatu Sneakers Full Kulit Asli', 'https://s.shopee.co.id/9AOnFe32Hn', 'Pilih sneakers kulit yang nyaman dan kuat untuk menemani aktivitas harian.'],
        ['Sandal Outdoor Pro Stallion Jepit Ergonomis', 'https://s.shopee.co.id/5VVUt6trxV', 'Siapkan alas kaki ringan dan ergonomis untuk aktivitas outdoor Anda.'],
        ['Beam 100 Watt RGB fullcolor gobo bisa berputar garansi 1 bulan dan Lampu ini versi terbaru', 'https://s.shopee.co.id/3LR1qId5Jz', 'Solusi pencahayaan panggung dan acara dengan Beam 100 Watt RGB fullcolor.'],
        ['TCON - TICON - TEKON TIKON - T CON TV PANASONIC TH 50CX400G PANASONIC TH 50CX400 G', 'https://s.shopee.co.id/3B7bdzdiey', 'Sparepart T-Con board original untuk perbaikan TV Panasonic TH 50CX400G.'],
        ['TCON LOGIC BOARD LED TV PANASONIC TH 49fx505k', 'https://s.shopee.co.id/30oBRgeLzx', 'T-Con logic board untuk unit LED TV Panasonic model TH 49fx505k.'],
        ['FET FQPf7N65C 8N65C 9N65C 10N65C 11N65C 12N65C 13N65C 14N65C 15N65C 18N65C 19N65C 20N65C Original', 'https://s.shopee.co.id/2qUlFNezKw', 'Komponen MOSFET original tahan tegangan dan arus tinggi dengan desain kompak.'],
        ['IC LNK6778K LNK6778 LNK 6778K 6778 K SOP 11 SMD ori', 'https://s.shopee.co.id/2gBL34fcfv', 'IC power switcher LNK6778K original kemasan SOP-11 SMD untuk modul elektronik.'],
        ['ALUPLATINUM atau evap kulkas 50 cm dan pasta alumunium', 'https://s.shopee.co.id/5Asg1fW6bQ', 'Evaporator kulkas ukuran 50 cm beserta pasta aluminium penyambung.'],
        ['Electrolux Oven EOT7024XFG 70L Hitam Black Bolu', 'https://s.shopee.co.id/50ZFpMWjwP', 'Oven listrik kapasitas besar 70 liter dari Electrolux untuk memanggang kue dan makanan.'],
        ['Oven De Costa 150 Liter Signora', 'https://s.shopee.co.id/4qFpd3XNHO', 'Oven Signora De Costa kapasitas ekstra luas 150 liter untuk kebutuhan baking profesional.'],
        ['ic cof lcd tv VHIL50327B6-2L rohs', 'https://s.shopee.co.id/4fwPQkY0cN', 'Komponen IC COF fleksibel panel layar LCD TV tipe VHIL50327B6-2L.'],
        ['REGULATOR WINN GAS HIGHPRESURE TEKANAN TINGGI NON METER', 'https://s.shopee.co.id/4VczERYdxM', 'Regulator gas tekanan tinggi merek Winn Gas tanpa meteran untuk kompor komersial.'],
        ['RINNAI KOMPOR GAS 2 TUNGKU RI-202S', 'https://s.shopee.co.id/4LJZ28ZHIL', 'Kompor gas Rinnai 2 tungku seri RI-202S yang hemat gas dan tahan lama.'],
        ['Sanex Kompor Gas 1 Tungku K-808 S K808S', 'https://s.shopee.co.id/4B08ppZudK', 'Kompor gas 1 tungku Sanex K-808 S yang praktis dan ringkas untuk dapur minimalis.'],
        ['Dianmod cutting Dicc 4 inch American tool gerinda potong', 'https://s.shopee.co.id/40gidWaXyJ', 'Mata gerinda potong Diamond Cutting 4 inci dari American Tool untuk pemotongan presisi.']
];
    

    const main = document.querySelector('main');
    if (!main || document.querySelector('[data-promo-links]')) return;

    const [name, url, intro] = ads[Math.floor(Math.random() * ads.length)];

    const promo = document.createElement('aside');
    promo.setAttribute('data-promo-links', '');
    promo.setAttribute('aria-label', 'Promosi produk');
    promo.innerHTML = `
        <style>
            [data-promo-links] {
                position: fixed;
                right: 1rem;
                bottom: 1rem;
                z-index: 100;
                width: min(24rem, calc(100vw - 2rem));
                padding: 1.15rem 3rem 1.15rem 1.15rem;
                border: 1px solid rgba(96, 165, 250, 0.28);
                border-radius: 0.9rem;
                background: rgba(15, 23, 42, 0.96);
                box-shadow: 0 18px 45px rgba(2, 6, 23, 0.45);
                color: #94a3b8;
                font: 0.875rem/1.5 system-ui, sans-serif;
                animation: promo-slide-in 0.35s ease-out both;
            }
            [data-promo-links][data-closing] {
                animation: promo-slide-out 0.2s ease-in both;
            }
            [data-promo-links] button {
                position: absolute;
                top: 0.55rem;
                right: 0.55rem;
                width: 2rem;
                height: 2rem;
                border: 0;
                border-radius: 999px;
                background: transparent;
                color: #94a3b8;
                cursor: pointer;
                font-size: 1.35rem;
                line-height: 1;
            }
            [data-promo-links] button:hover {
                background: rgba(148, 163, 184, 0.14);
                color: #fff;
            }
            [data-promo-links] strong {
                display: block;
                margin-bottom: 0.3rem;
                color: #bfdbfe;
                font-size: 0.75rem;
                letter-spacing: 0.08em;
                text-transform: uppercase;
            }
            [data-promo-links] p {
                margin: 0 0 0.35rem;
            }
            [data-promo-links] a {
                color: #60a5fa;
                text-decoration: none;
                font-weight: 600;
            }
            [data-promo-links] a:hover {
                color: #bfdbfe;
                text-decoration: underline;
            }
            @keyframes promo-slide-in {
                from { opacity: 0; transform: translateY(1rem); }
                to { opacity: 1; transform: translateY(0); }
            }
            @keyframes promo-slide-out {
                from { opacity: 1; transform: translateY(0); }
                to { opacity: 0; transform: translateY(1rem); }
            }
            @media (prefers-reduced-motion: reduce) {
                [data-promo-links] { animation: none; }
            }
        </style>
        <button type="button" data-promo-close aria-label="Tutup promosi">&times;</button>
        <strong>Rekomendasi Produk</strong>
        <p>${intro}</p>
        <a href="${url}" target="_blank" rel="noopener noreferrer sponsored">${name}</a>
    `;

    const showPromo = () => {
        document.body.appendChild(promo);
        promo.querySelector('[data-promo-close]').addEventListener('click', () => {
            promo.setAttribute('data-closing', '');
            window.setTimeout(() => {
                promo.remove();
                window.location.assign(url);
            }, 200);
        });
    };

    window.setTimeout(showPromo, 3000);
})();
