import { env } from '@/env'
import ky from 'ky'

export const httpsApi = ky.create({
  prefixUrl: env.API_HTTP_URL,
  searchParams: {
    user: env.API_USERNAME,
    secret: env.API_KEY,
  },
})
