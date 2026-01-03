// import { Redis } from '@upstash/redis'

// export const redis = new Redis({
//   url: 'https://natural-bobcat-7225.upstash.io',
//   token: 'ARw5AAImcDI0OWFlYjk5MGVkNjU0NzBkYmViMGVkZGIxZjQ0NmZiOHAyNzIyNQ',
// })

import { Redis } from '@upstash/redis'

export const redis = new Redis({
  url: process.env.UPSTASH_REDIS_URL!,
  token: process.env.UPSTASH_REDIS_TOKEN!,
})