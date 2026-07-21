import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const domain = 'https://nexusmarketing.dk';
const lastmod = new Date().toISOString();

// Legacy paths that carry specific 301 mappings to MagnoraMarketing.dk.
// Every other path is handled by the catch-all rule in public/_redirects,
// so only these URLs are listed in the sitemap.
const redirectPaths = [
  '/forside/',
  '/arbejd-hjemmefra-freelance/',
  '/moedebooker-inden-for-solceller-og-vedvarende-energi/',
  '/privat-strom-salg/',
  '/samarbejde-med-nexusmarketing/',
  '/om-nexusmarketing/',
  '/moedebooker-hjemmeside-seo-og-marketing/',
  '/kontakt-nexusmarketing/',
  '/freelance-modebooker-pension/',
  '/freelancere/',
  '/hvorfor-outsource/',
];

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
        http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
  ${redirectPaths.map(p => `<url>
    <loc>${domain}${p}</loc>
    <lastmod>${lastmod}</lastmod>
  </url>`).join('\n  ')}
</urlset>`;

const robots = `# NexusMarketing.dk — SEO redirect domain.
# All traffic is permanently (301) redirected to MagnoraMarketing.dk.
# Crawling is fully allowed so search engines discover the 301s and
# forward link equity to the target pages on MagnoraMarketing.dk.

User-agent: *
Allow: /

Sitemap: ${domain}/sitemap.xml
`;

const distDir = path.join(__dirname, 'dist');
if (!fs.existsSync(distDir)) {
  fs.mkdirSync(distDir);
}

fs.writeFileSync(path.join(distDir, 'sitemap.xml'), sitemap);
fs.writeFileSync(path.join(distDir, 'robots.txt'), robots);

console.log(`\n✓ Generated sitemap.xml and robots.txt for redirect domain`);
console.log(`✓ Redirect URLs in sitemap: ${redirectPaths.length}`);
