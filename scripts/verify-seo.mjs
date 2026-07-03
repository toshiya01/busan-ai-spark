import fs from 'fs';

console.log('Starting SEO & Geo configuration validation...');

// 1. Verify app/layout.tsx changes
const layoutContent = fs.readFileSync('app/layout.tsx', 'utf8');
if (!layoutContent.includes('google-site-verification=k8moRGKM1lKVSAjLxECcDYjVaFK_TKEMV2HfLe9iNyk')) {
  throw new Error('Google site verification missing or incorrect in app/layout.tsx!');
}
if (!layoutContent.includes('8d134f95402574e76b77d4038f041c7cbbf0d756')) {
  throw new Error('Naver site verification missing or incorrect in app/layout.tsx!');
}
if (!layoutContent.includes('KR-26') || !layoutContent.includes('Busan') || !layoutContent.includes('35.1561;129.0594')) {
  throw new Error('Geographic metadata in app/layout.tsx missing or incorrect!');
}

// 2. Verify app/page.tsx changes
const pageContent = fs.readFileSync('app/page.tsx', 'utf8');
if (!pageContent.includes('0507-1301-9327')) {
  throw new Error('Telephone number 0507-1301-9327 missing or incorrect in app/page.tsx!');
}
if (!pageContent.includes('서전로 3') || !pageContent.includes('부산진구') || !pageContent.includes('47293')) {
  throw new Error('Address details (서전로 3, 부산진구, 47293) missing or incorrect in app/page.tsx!');
}
if (!pageContent.includes('GeoCoordinates') || !pageContent.includes('35.1561') || !pageContent.includes('129.0594')) {
  throw new Error('JSON-LD geo coordinates missing or incorrect in app/page.tsx!');
}

console.log('✅ All SEO & Geo configurations verified successfully!');
