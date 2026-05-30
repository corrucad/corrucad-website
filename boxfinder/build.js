const fs = require('fs');
const path = require('path');
const { rawData, ALL_VENDORS } = require('./data.js');

const outputDir = __dirname; 
const today = new Date().toISOString().split('T')[0];

let sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n`;
sitemapXml += `  <url>\n    <loc>https://www.corrucad.com/boxfinder/</loc>\n    <lastmod>${today}</lastmod>\n    <changefreq>weekly</changefreq>\n    <priority>1.0</priority>\n  </url>\n`;

const template = fs.readFileSync(path.join(__dirname, 'template.html'), 'utf8');

// --- SHARED FOOTER COMPONENT ---
const HTML_FOOTER = `
<footer class="bg-white border-t border-slate-200 mt-12 py-12">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h3 class="text-sm font-semibold text-slate-800 mb-4 uppercase tracking-wider">Pricing Data Sources:</h3>
        <div class="bg-slate-50 p-6 rounded-xl border border-slate-200 text-sm text-slate-600">
            Independent wholesale cardboard price evaluation tool compiled across major US and UK supply matrices.
        </div>
    </div>
</footer>`;

// --- ROUTING LINK GENERATOR ---
function getVendorLink(vendor, l, w, h, sku) {
    const dim = `${l}x${w}x${h}`;
    if (vendor === 'Arka') {
        return `https://www.dpbolvw.net/click-101732774-15600472?url=` + encodeURIComponent(`https://www.arka.com/products/${sku || dim + '-box'}`);
    }
    if (sku && sku !== 'n/a' && sku.trim() !== '') {
        if (vendor === 'Uline') return `https://www.uline.com/Product/Detail/${sku}`;
        if (vendor === 'Boxery') return `https://www.theboxery.com/Product.asp?Product=${sku.replace('*', '').trim()}`;
        if (vendor === 'Grainger') return `https://www.grainger.com/product/${sku}`;
        if (vendor === 'PackagingPrice') return `https://www.packagingprice.com/search.php?search_query=${sku}`;
    }
    return `https://www.google.com/search?q=${vendor}+${dim}+corrugated+box`;
}

// ==========================================
// 1. GENERATE INTERACTIVE MAIN INDEX PAGE
// ==========================================
const indexSchema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "BoxFinder by CorruCAD",
    "description": "Compare real-time pricing for corrugated shipping boxes across top industrial vendors.",
    "applicationCategory": "BusinessApplication",
    "operatingSystem": "Web"
};

// We embed the heavy client-side React app code ONLY on the main index tool page
const indexContent = `
<div id="root" class="flex-grow"></div>
${HTML_FOOTER}
<script crossorigin src="https://unpkg.com/react@18/umd/react.production.min.js"></script>
<script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.production.min.js"></script>
<script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
<script>
    window.INJECTED_DIMS = null;
</script>
<script type="text/babel">
    // Your React app layout injects here perfectly for client side multi-tool calculations
    const { useState, useMemo } = React;
    // ... [Rest of your original React script code goes here, loading rawData via JSON parameters]
</script>`;

const indexHtml = template
    .replace('{{TITLE}}', 'Compare Box Prices: Uline vs. Grainger vs. The Boxery | BoxFinder')
    .replace('{{DESC}}', 'Stop overpaying for corrugated boxes. Enter your custom dimensions to check real-time product options side-by-side.')
    .replace('{{CANONICAL}}', 'https://www.corrucad.com/boxfinder/')
    .replace('{{SCHEMA_MARKUP}}', JSON.stringify(indexSchema, null, 2))
    .replace('{{MAIN_CONTENT}}', indexContent);

fs.writeFileSync(path.join(outputDir, 'index.html'), indexHtml);

// ==========================================
// 2. GENERATE ULTRA-FAST STATIC BOX PAGES
// ==========================================
rawData.forEach(box => {
    const dim = `${box.l}x${box.w}x${box.h}`;
    const cleanSlug = `${dim}-corrugated-boxes`; 
    const filename = `${cleanSlug}.html`; 
    
    const sortedOffers = [...box.offers].sort((a, b) => a.p - b.p);
    const bestPrice = sortedOffers[0].p;
    const highestPrice = sortedOffers[sortedOffers.length - 1].p;

    // Compile the table rows inside node at build time
    let tableRowsHtml = '';
    sortedOffers.forEach((offer, idx) => {
        const url = getVendorLink(offer.v, box.l, box.w, box.h, offer.s);
        const currency = offer.v === 'RAJA Pack' ? '£' : '$';
        tableRowsHtml += `
            <tr class="border-b border-slate-100 hover:bg-slate-50 transition-colors ${idx === 0 ? 'bg-green-50/40' : ''}">
                <td class="py-4 px-6 font-bold text-slate-800 flex items-center gap-2">
                    ${offer.v}
                    ${idx === 0 ? '<span class="bg-green-100 text-green-700 text-[10px] px-2 py-0.5 rounded-full font-extrabold">★ CHEAPEST</span>' : ''}
                </td>
                <td class="py-4 px-6 text-sm text-slate-500"><span class="bg-slate-100 border px-2 py-0.5 rounded-md font-medium">${offer.g}</span></td>
                <td class="py-4 px-6 text-right font-extrabold text-lg ${idx === 0 ? 'text-green-600' : 'text-slate-800'}">${currency}${offer.p.toFixed(2)}</td>
                <td class="py-4 px-6 text-right">
                    <a href="${url}" target="_blank" rel="noopener noreferrer" class="bg-orange-500 hover:bg-orange-600 text-white font-bold py-1.5 px-4 rounded-lg text-xs shadow-sm transition-colors">Buy Directly →</a>
                </td>
            </tr>`;
    });

    const schemaMarkup = {
        "@context": "https://schema.org",
        "@type": "Product",
        "name": `${dim} Corrugated Shipping Box`,
        "description": `Price comparison matrix for ${dim} boxes across top packaging vendors.`,
        "offers": {
            "@type": "AggregateOffer",
            "offerCount": sortedOffers.length,
            "lowPrice": bestPrice,
            "highPrice": highestPrice,
            "priceCurrency": "USD"
        }
    };

    // Bake our exact responsive UI layout wrapper right into the file string
    const boxContent = `
    <header class="bg-gradient-to-r from-orange-500 to-orange-600 shadow-md pb-24 pt-6">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <a href="/boxfinder/" class="text-orange-100 hover:text-white font-semibold text-sm">← Back to Multi-Search Tool</a>
            <h1 class="text-3xl font-extrabold text-white mt-4">${dim} Corrugated Shipping Boxes</h1>
            <p class="text-orange-100 mt-2">Independent real-time wholesale cost evaluation matrix for ${box.l}" × ${box.w}" × ${box.h}" standard configurations.</p>
        </div>
    </header>
    <main class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -translate-y-12 w-full flex-grow">
        <div class="bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden">
            <table class="w-full text-left border-collapse">
                <thead>
                    <tr class="bg-slate-50 border-b border-slate-200 text-xs font-bold text-slate-500 uppercase tracking-wider">
                        <th class="py-3 px-6">Supplier Vendor</th>
                        <th class="py-3 px-6">Material Specification</th>
                        <th class="py-3 px-6 text-right">Unit Price</th>
                        <th class="py-3 px-6 text-right">Action</th>
                    </tr>
                </thead>
                <tbody>
                    ${tableRowsHtml}
                </tbody>
            </table>
        </div>
    </main>
    ${HTML_FOOTER}`;

    const boxHtml = template
        .replace('{{TITLE}}', `Wholesale ${dim} Shipping Boxes | Real-Time Price Checker`)
        .replace('{{DESC}}', `Compare trade rates on ${dim} corrugated choices. Best wholesale market rate located: $${bestPrice.toFixed(2)}/box.`)
        .replace('{{CANONICAL}}', `https://www.corrucad.com/boxfinder/${cleanSlug}`)
        .replace('{{SCHEMA_MARKUP}}', JSON.stringify(schemaMarkup, null, 2))
        .replace('{{MAIN_CONTENT}}', boxContent);

    fs.writeFileSync(path.join(outputDir, filename), boxHtml);
    sitemapXml += `  <url>\n    <loc>https://www.corrucad.com/boxfinder/${cleanSlug}</loc>\n    <lastmod>${today}</lastmod>\n    <changefreq>weekly</changefreq>\n    <priority>0.8</priority>\n  </url>\n`;
});

sitemapXml += `</urlset>`;
fs.writeFileSync(path.join(outputDir, 'sitemap.xml'), sitemapXml);
console.log('Build complete! True static generation deployment prepared with zero render overhead.');
