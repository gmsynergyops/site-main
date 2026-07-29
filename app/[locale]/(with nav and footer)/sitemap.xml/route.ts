// app/sitemap.xml/route.ts

export async function GET() {
  const baseUrl = 'https://synergy-website-alpha.vercel.app'

  const staticRoutes = [
    '/',
    '/donate',
    '/media-center',
    '/the-synergy-story',
  ]

  const dynamicRoutes = [
    '/leadership/Dr-Alok-Tiwari',
    '/leadership/Dr-Anjali-Jain',
    '/leadership/Dr-Saurabh-Mishra',
    '/services/medical-oncology',
    '/services/surgical-oncology',
    '/services/radiation-oncology',
    '/services/hemato-oncology',
    '/services/palliative-care',
    '/services/diagnostic-imaging',
    '/services/laboratory',
    '/services/pharmacy',
    '/services/physiotherapy',
    '/patient-care/emergency',
    '/patient-care/second-opinion',
    '/patient-care/in-patient',
    '/patient-care/out-patient',
    '/health-library/breast-cancer',
    '/health-library/prostate-cancer',
    '/health-library/lung-cancer',
    '/health-library/cervical-cancer',
    '/health-library/blood-cancer',
    '/health-library/prevention',
    '/health-library/diagnosis',
    '/health-library/nutrition',
    '/health-library/treatments',
    '/health-library/faqs',
    '/survivors/testimonials',
    '/survivors/victory-stories',
    '/survivors/videos',
    '/survivors/counseling',
    '/survivors/rehab',
    '/survivors/clinics',
    '/survivors/volunteers',
    '/survivors/awareness',
  ]

  const allRoutes = [...staticRoutes, ...dynamicRoutes]

  const urls = allRoutes.map((route) => {
    return `
      <url>
        <loc>${baseUrl}${route}</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
      </url>
    `
  })

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${urls.join('')}
    </urlset>
  `.trim()

  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
    },
  })
}
