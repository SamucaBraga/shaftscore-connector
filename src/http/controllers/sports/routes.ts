import { FastifyInstance } from 'fastify'
// import { verifyJWT } from '@/http/middleware/verify-jwt'
// import { register } from './register'
// import { authenticate } from './authenticate'
// import { getProfile } from './profile/get-profile'
// import { updateProfile } from './profile/update-profile'
// import { updateAddress } from './profile/update-address'
// import { updatePassword } from './profile/update-password'
// import { updateProfilePhoto } from './profile/update-profile-photo'
// import { refresh } from './refresh'
// import { authGoogle } from './auth-google'

export async function sportsRoutes(app: FastifyInstance) {
  app.get('/sports', () => {
    return { status: 'active' }
  })
  // app.post('/odds', register)
  // app.post('/sessions', authenticate)
  // app.post('/auth-google', authGoogle)

  // app.patch('/token/refresh', refresh)

  // // Authenticated
  // app.register(async (app: FastifyInstance) => {
  //   app.addHook('onRequest', verifyJWT)
  //   app.get('/me', getProfile)
  //   app.put('/profile', updateProfile)
  //   app.put('/profile/address', updateAddress)
  //   app.put('/profile/change-password', updatePassword)
  //   app.patch('/profile/update-avatar-photo', updateProfilePhoto)
  // })

}
