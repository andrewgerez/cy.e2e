import { env } from '@/env'
import { CyElementEnum, CyKeyTypeEnum } from '@/support/utils/cy-types'

describe('TEST: Demonstration', () => {
  it('should be able to navigate from the first page to the login page', () => {
    cy.visit(env.E2E_ENVIRONMENT_URL)

    cy.url().should('eq', env.E2E_ENVIRONMENT_URL)

    const displayText = 'Os melhores conteúdos em um único lugar'

    cy.get(CyElementEnum.H1).contains(displayText)
      .should('have.length', 1)

    cy.wait(1800)

    cy.get(CyElementEnum.Button)
      .focus()
      .type(CyKeyTypeEnum.Enter)

    cy.url()
      .should('eq', env.E2E_ENVIRONMENT_URL + env.E2E_AUTH_ROUTE)
  })
})
