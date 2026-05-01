// build.js
const fs = require('fs');
const { rawData, ALL_VENDORS } = require('./data.js');

// Create the public folder where Vercel will look for the finished website
if (!fs.existsSync('./public')) {
    fs.mkdirSync('./public');
}

// Read your template
const template = fs.readFileSync('./template.html', 'utf8');

// 1. Generate an index.html (Main search page with no specific box pre-filled)
const indexHtml = template
    .replace('{{TITLE}}', 'Corrugated Box Price Compare | BoxFinder')
    .replace('{{DESC}}', 'Compare standard and bulk prices for corrugated boxes across top vendors.')
    .replace('{{CANONICAL}}', 'https://www.corrucad.com/boxfinder/index.html')
    .replace('{{H1}}', 'Compare Corrugated Box Prices')
    .replace('{{P}}', 'Find the best deals on shipping boxes.')
    .replace('{{SEO_LIST}}', '')
    .replace('{{INJECTED_DIMS}}', 'null')
    .replace('{{RAW_DATA}}', JSON.stringify(rawData))
    .replace('{{ALL_VENDORS}}', JSON.stringify(ALL_VENDORS));

fs.writeFileSync('./public/index.html', indexHtml);

// 2. Loop through every box and generate the 50 SEO pages automatically
rawData.forEach(box => {
    const dim = `${box.l}x${box.w}x${box.h}`;
    
    // Sort offers to find the cheapest for the SEO description
    const sortedOffers = [...box.offers].sort((a, b) => a.p - b.p);
    const bestPrice = sortedOffers[0].p;

    // Generate the static SEO list for the crawlers
    let seoListHTML = '';
    sortedOffers.forEach(o => {
        const currency = o.v === 'RAJA Pack' ? '£' : '$';
        seoListHTML += `            <li>${o.v} (${o.g}) - ${currency}${o.p.toFixed(2)}/box</li>\n`;
    });

    const boxHtml = template
        .replace('{{TITLE}}', `Compare ${dim} Corrugated Box Prices | BoxFinder`)
        .replace('{{DESC}}', `Stop overpaying. Compare prices for ${dim} corrugated boxes across top vendors. Top pick: $${bestPrice.toFixed(2)}/box.`)
        .replace('{{CANONICAL}}', `https://www.corrucad.com/boxfinder/${dim}-corrugated-boxes.html`)
        .replace('{{H1}}', `Compare Prices for ${dim} Corrugated Boxes`)
        .replace('{{P}}', `Find the best deals on ${dim} shipping boxes. We compare prices from top vendors.`)
        .replace('{{SEO_LIST}}', seoListHTML)
        .replace('{{INJECTED_DIMS}}', JSON.stringify({ l: box.l.toString(), w: box.w.toString(), h: box.h.toString() }))
        .replace('{{RAW_DATA}}', JSON.stringify(rawData))
        .replace('{{ALL_VENDORS}}', JSON.stringify(ALL_VENDORS));

    fs.writeFileSync(`./public/${dim}-corrugated-boxes.html`, boxHtml);
    console.log(`Generated page for ${dim}`);
});

console.log('Build complete! All files generated in the /public folder.');
