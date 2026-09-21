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
        ['Sandal Outdoor Pro Stallion Jepit Ergonomis', 'https://s.shopee.co.id/5VVUt6trxV', 'Siapkan alas kaki ringan dan ergonomis untuk aktivitas outdoor Anda.']
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
