export const dynamic = 'force-static';
import type {MetadataRoute} from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  return [{url: 'https://ai.starlab.co.kr/', lastModified: new Date(), changeFrequency: 'weekly', priority: 1}];
}
