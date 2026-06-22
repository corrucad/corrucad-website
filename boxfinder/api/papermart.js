export default function handler(req, res) {
    // 1. Grab the box SKU that the user clicked on
    const { sku } = req.query;

    // 2. Build the exact Paper Mart destination URL
    const targetUrl = `https://www.papermart.com/p/standard-rsc-corrugated-cartons/1001?SearchItemNumber=${sku}`;

    // 3. Build the Commission Junction tracking link safely on the server
    const cjLink = `https://www.kqzyfj.com/click-101732774-13236874?url=${encodeURIComponent(targetUrl)}&cjsku=${sku}&sid=boxfinder`;

    // 4. Instantly redirect the user
    res.redirect(302, cjLink);
}
