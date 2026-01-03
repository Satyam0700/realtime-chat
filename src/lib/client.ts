import { treaty } from '@elysiajs/eden'
import type { App } from '../app/api/[[...slugs]]/route'

// .api to enter /api prefix
export const client = treaty<App>(process.env.SERVER_URL || '').api

// import { treaty } from '@elysiajs/eden'
// import { app } from '../app/api/[[...slugs]]/route'

// // .api to enter /api prefix
// export const client =
//   typeof process !== 'undefined'
//     ? treaty(app).api
//     : treaty<typeof app>('localhost:3000').api