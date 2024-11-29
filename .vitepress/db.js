import { createDirectus, rest } from '@directus/sdk';

// Client with REST support
export const client = createDirectus('https://db.chromatone.center').with(rest());