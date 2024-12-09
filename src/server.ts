import { app } from './app'
import { env } from './env'

async function run(): Promise<boolean> {
  app
    .listen({
      host: '0.0.0.0', // resolve possiveis problemas de conectividade com o frontend
      port: env.PORT,
    })
    .then(() => {
      console.log(`🚀 HTTP Server running on port ${env.PORT}!`);
    });

  return true
}

run()