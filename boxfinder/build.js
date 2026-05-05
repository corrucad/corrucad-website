// boxfinder/build.js
const fs = require('fs');
const path = require('path');
const { rawData, ALL_VENDORS } = require('./data.js');

const outputDir = __dirname; 

// Setup today's date for the sitemap
const today = new Date().toISOString().split('T')[0];

// Start building the sitemap XML string
let sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n`;

// Add the main index page to the sitemap (Clean URL: removed index.html)
sitemapXml += `  <url>\n    <loc>https://www.corrucad.com/boxfinder/</loc>\n    <lastmod>${today}</lastmod>\n    <changefreq>weekly</changefreq>\n    <priority>1.0</priority>\n  </url>\n`;

// Read your template
const template = fs.readFileSync(path.join(__dirname, 'template.html'), 'utf8');

// 1. Generate the main index.html
const indexHtml = template
    .replace('{{TITLE}}', 'Corrugated Box Price Compare | BoxFinder')
    .replace('{{DESC}}', 'Compare standard and bulk prices for corrugated boxes across top vendors.')
    .replace('{{CANONICAL}}', 'https://www.corrucad.com/boxfinder/') // Clean URL
    .replace('{{H1}}', 'Compare Corrugated Box Prices')
    .replace('{{P}}', 'Find the best deals on shipping boxes.')
    .replace('{{SEO_LIST}}', '')
    .replace('{{INJECTED_DIMS}}', 'null')
    .replace('{{RAW_DATA}}', JSON.stringify(rawData))
    .replace('{{ALL_VENDORS}}', JSON.stringify(ALL_VENDORS));

fs.writeFileSync(path.join(outputDir, 'index.html'), indexHtml);

// 2. Loop through every box and generate the SEO pages
rawData.forEach(box => {
    const dim = `${box.l}x${box.w}x${box.h}`;
    
    // NEW: Separate the clean URL slug from the physical filename
    const cleanSlug = `${dim}-corrugated-boxes`; 
    const filename = `${cleanSlug}.html`; 
    
    const sortedOffers = [...box.offers].sort((a, b) => a.p - b.p);
    const bestPrice = sortedOffers[0].p;

    let seoListHTML = '';
    sortedOffers.forEach(o => {
        const currency = o.v === 'RAJA Pack' ? '£' : '$';
        seoListHTML += `            <li>${o.v} (${o.g}) - ${currency}${o.p.toFixed(2)}/box</li>\n`;
    });

    const boxHtml = template
        .replace('{{TITLE}}', `Compare ${dim} Corrugated Box Prices | BoxFinder`)
        .replace('{{DESC}}', `Stop overpaying. Compare prices for ${dim} corrugated boxes across top vendors. Top pick: $${bestPrice.toFixed(2)}/box.`)
        .replace('{{CANONICAL}}', `https://www.corrucad.com/boxfinder/${cleanSlug}`) // Clean URL
        .replace('{{H1}}', `Compare Prices for ${dim} Corrugated Boxes`)
        .replace('{{P}}', `Find the best deals on ${dim} shipping boxes. We compare prices from top vendors.`)
        .replace('{{SEO_LIST}}', seoListHTML)
        .replace('{{INJECTED_DIMS}}', JSON.stringify({ l: box.l.toString(), w: box.w.toString(), h: box.h.toString() }))
        .replace('{{RAW_DATA}}', JSON.stringify(rawData))
        .replace('{{ALL_VENDORS}}', JSON.stringify(ALL_VENDORS));

    fs.writeFileSync(path.join(outputDir, filename), boxHtml);
    console.log(`Generated page for ${dim}`);

    // Add this generated page to the sitemap XML using the Clean URL
    sitemapXml += `  <url>\n    <loc>https://www.corrucad.com/boxfinder/${cleanSlug}</loc>\n    <lastmod>${today}</lastmod>\n    <changefreq>weekly</changefreq>\n    <priority>0.8</priority>\n  </url>\n`;
});

// Close the sitemap XML tags and save the file
sitemapXml += `</urlset>`;
fs.writeFileSync(path.join(outputDir, 'sitemap.xml'), sitemapXml);

console.log('Build complete! All files generated in the boxfinder folder, including sitemap.xml.');
