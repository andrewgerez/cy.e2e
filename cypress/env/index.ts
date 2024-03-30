import z from 'zod'

const envSchema = z.object({
  E2E_ENVIRONMENT_URL: z.string(),
})

const _env = envSchema.safeParse(Cypress.env())

if (_env.success === false) {
  console.error('Invalid environment variables:', _env.error.format())

  throw new Error('Invalid environment variables.')
}

export const env = _env.data
