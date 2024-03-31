import { env } from '@/env'
import { CyKeyTypeEnum } from '@/support/utils/cy-types'

describe('TEST: Demonstration spec', () => {
  it('should be able to navigate from the first page to the login page', async () => {
    cy.visit(env.E2E_ENVIRONMENT_URL)

    cy.url().should('eq', env.E2E_ENVIRONMENT_URL)

    cy.get('h1').contains('Os melhores conteúdos em um único lugar')
      .should('have.length', 1)

    cy.wait(1800)

    cy.get('button').focus().type(CyKeyTypeEnum.Enter)

    cy.url().should('eq', env.E2E_ENVIRONMENT_URL + env.E2E_AUTH_ROUTE)
  })
})
