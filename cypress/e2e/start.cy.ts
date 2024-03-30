import { env } from "../env"

describe('init spec', () => {
  it('passes', () => {
    cy.visit(env.E2E_ENVIRONMENT_URL)
  })
})
