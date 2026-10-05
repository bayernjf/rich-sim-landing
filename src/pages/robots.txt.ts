import type { APIRoute } from 'astro';
import { SITE_URL } from '../consts';

/** Generated (not static) so the sitemap URL follows SITE_URL — the public
 *  URL stays a single sync point in consts.ts. */
export const GET: APIRoute = () =>
  new Response(`User-agent: *
Allow: /

Sitemap: ${SITE_URL}/sitemap-index.xml
`, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
