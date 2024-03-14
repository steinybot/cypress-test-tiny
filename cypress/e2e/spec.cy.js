/// <reference types="cypress" />
describe('page', () => {
  it('works', (done) => {
    // this event will automatically be unbound when this
    // test ends because it's attached to 'cy'
    cy.on('uncaught:exception', (err, runnable) => {
      expect(err.message).to.equal('Error: Uncaught Muahahaha!')

      // using mocha's async done callback to finish
      // this test so we prove that an uncaught exception
      // was thrown
      done()

      // return false to prevent the error from
      // failing this test
      return false
    })

    cy.visit('/')
    cy.get('button').click()
  })
})
