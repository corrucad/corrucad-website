// boxfinder/build.js
const fs = require('fs');
const path = require('path');
const { rawData, ALL_VENDORS } = require('./data.js');

const outputDir = __dirname; 
const today = new Date().toISOString().split('T')[0];

// 1. DYNAMICALLY BUILD THE MASTER INTERNAL LINK GRID (ORPHAN PAGE REMEDY)
let internalLinksHtml = '';
rawData.forEach(b => {
    const dimStr = `${b.l}x${b.w}x${b.h}`;
    const cleanSlug = `${dimStr}-corrugated-boxes`;
    internalLinksHtml += `<div><a href="/boxfinder/${cleanSlug}" class="text-orange-600 hover:text-orange-700 hover:underline font-semibold block py-1">${dimStr} Boxes</a></div>\n`;
});

// Start building the sitemap XML string
let sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n`;
sitemapXml += `  <url>\n    <loc>https://www.corrucad.com/boxfinder/</loc>\n    <lastmod>${today}</lastmod>\n    <changefreq>weekly</changefreq>\n    <priority>1.0</priority>\n  </url>\n`;

// Read your optimized template
const template = fs.readFileSync(path.join(__dirname, 'template.html'), 'utf8');

// MAIN INDEX PAGE SCHEMA
const indexSchema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "BoxFinder by CorruCAD",
    "description": "Compare real-time pricing for corrugated shipping boxes across top industrial vendors.",
    "applicationCategory": "BusinessApplication",
    "operatingSystem": "Web",
    "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
    }
};

// BUILD MASTER STATIC SUMMARY TABLE FOR INDEX.HTML (WAVE 1 INDEXING)
let masterStaticSummaryTable = `<table><caption>Complete BoxFinder Corrugated Shipping Box Catalog</caption><thead><tr><th>Box Dimensions</th><th>Starting Price</th><th>Suppliers Compared</th></tr></thead><tbody>`;
rawData.forEach(b => {
    const dim = `${b.l}x${b.w}x${b.h}`;
    const lowestP = Math.min(...b.offers.map(o => o.p));
    masterStaticSummaryTable += `<tr><td>${dim} Shipping Box</td><td>$${lowestP.toFixed(2)}</td><td>${b.offers.length} packaging suppliers</td></tr>`;
});
masterStaticSummaryTable += `</tbody></table>`;

// 2. GENERATE THE MAIN INDEX.HTML
// Old Main Index HTML Generation
// .replace('{{TITLE}}', 'Compare Box Prices: Uline vs. Grainger vs. PackagingPrice | BoxFinder')

// NEW OPTIMIZED MAIN INDEX FOR "BOX PRICE CHECK"
const indexHtml = template
    .replace('{{TITLE}}', 'Shipping Box Prices: Free Independent Cost Comparison Tool')
    .replace('{{DESC}}', 'Compare current shipping box prices across Uline, Grainger, The Boxery, and PaperMart instantly. Run a free price check to lock in the lowest volume tiers.')
    .replace('{{CANONICAL}}', 'https://www.corrucad.com/boxfinder/') 
    .replace('{{SCHEMA_MARKUP}}', JSON.stringify(indexSchema, null, 2))
    .replace('{{INJECTED_DIMS}}', 'null')
    .replace('{{RAW_DATA}}', JSON.stringify(rawData))
    .replace('{{ALL_VENDORS}}', JSON.stringify(ALL_VENDORS))
    .replace('{{STATIC_SEO_TABLE}}', masterStaticSummaryTable)
    .replace('{{INTERNAL_LINK_MATRIX}}', internalLinksHtml);

fs.writeFileSync(path.join(outputDir, 'index.html'), indexHtml);

// 3. LOOP THROUGH EVERY BOX AND GENERATE SEO PAGES WITH STATIC PAYLOADS
rawData.forEach(box => {
    const dim = `${box.l}x${box.w}x${box.h}`;
    const cleanSlug = `${dim}-corrugated-boxes`; 
    const filename = `${cleanSlug}.html`; 
    
    // Sort offers to find the price range for Schema and Table
    const sortedOffers = [...box.offers].sort((a, b) => a.p - b.p);
    const bestPrice = sortedOffers[0].p;
    const highestPrice = sortedOffers[sortedOffers.length - 1].p;

    // BUILD DEEP PAGE RAW HTML TABLE (GHOST SHELL ELIMINATION)
    let staticHtmlTable = `<table><caption>Real-time distributor price comparison for ${dim} corrugated boxes</caption><thead><tr><th>Supplier</th><th>Board Grade</th><th>Standard Box Price</th><th>Bulk Bale Price</th><th>Distributor SKU</th></tr></thead><tbody>`;
    sortedOffers.forEach(o => {
        staticHtmlTable += `<tr><td>${o.v}</td><td>${o.g}</td><td>$${o.p.toFixed(2)}</td><td>$${(o.b || o.p).toFixed(2)}</td><td>${o.s || 'N/A'}</td></tr>`;
    });
    staticHtmlTable += `</tbody></table>`;

    // PROPER JSON-LD AGGREGATE SCHEMA
    const schemaMarkup = {
        "@context": "https://schema.org",
        "@type": "Product",
        "name": `${dim} Corrugated Shipping Box`,
        "description": `Independent price comparison for ${dim} boxes across top packaging vendors.`,
        "category": "Shipping Supplies",
        "offers": {
            "@type": "AggregateOffer",
            "offerCount": sortedOffers.length,
            "lowPrice": bestPrice,
            "highPrice": highestPrice,
            "priceCurrency": "USD"
        }
    };

  const boxHtml = template
    .replace('{{TITLE}}', `${dim} Shipping Box Price Check | Moving Box Cost Calculator`)
    .replace('{{DESC}}', `Run a fast ${dim} box price check across top industrial vendors. Compare real-time prices side-by-side. Lowest current match: $${bestPrice.toFixed(2)}/box.`)
        .replace('{{CANONICAL}}', `https://www.corrucad.com/boxfinder/${cleanSlug}`) 
        .replace('{{SCHEMA_MARKUP}}', JSON.stringify(schemaMarkup, null, 2))
        .replace('{{INJECTED_DIMS}}', JSON.stringify({ l: box.l.toString(), w: box.w.toString(), h: box.h.toString() }))
        .replace('{{RAW_DATA}}', JSON.stringify(rawData))
        .replace('{{ALL_VENDORS}}', JSON.stringify(ALL_VENDORS))
        .replace('{{STATIC_SEO_TABLE}}', staticHtmlTable)
        .replace('{{INTERNAL_LINK_MATRIX}}', internalLinksHtml);

    fs.writeFileSync(path.join(outputDir, filename), boxHtml);
    console.log(`Generated robust static page for ${dim}`);

    // Append clean URL to sitemap
    sitemapXml += `  <url>\n    <loc>https://www.corrucad.com/boxfinder/${cleanSlug}</loc>\n    <lastmod>${today}</lastmod>\n    <changefreq>weekly</changefreq>\n    <priority>0.8</priority>\n  </url>\n`;
});

sitemapXml += `</urlset>`;
fs.writeFileSync(path.join(outputDir, 'sitemap.xml'), sitemapXml);

console.log('Build complete! 100% crawlable internal links and static pricing payloads successfully generated across all files.');
