import { treaty } from '@elysiajs/eden'
import type { App } from '../app/api/[[...slugs]]/route'

// Get API URL from environment or use default
const apiUrl = process.env.NEXT_PUBLIC_API_URL! || 'http://localhost:3000'

// .api to enter /api prefix
export const client = treaty<App>(apiUrl).api