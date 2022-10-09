/// <reference types="cypress" />
describe('page', () => {
  it('works', () => {
    cy.visit('https://example.cypress.io')
    cy.document().within(() => {
      cy.contains('Cannot find me')
    })
  })
})
