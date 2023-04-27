/// <reference types="cypress" />
describe('page', () => {
  it('this should fail', () => {
    cy.get('.thisdoesnotexist')
  })
  it('this should also fail', () => {
    cy.on('fail', () => {})
    cy.get('.thisdoesnotexist')
  })
})
