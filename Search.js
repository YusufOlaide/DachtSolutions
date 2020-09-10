/// <reference types="cypress" />

describe('LoginTest Suite', () => {
  it('Verify Page title text of Link Springer', () => {
      cy.visit('https://link.springer.com/') 
  
      cy.viewport(1024, 768)
  
      cy.contains('» Sign up / Log in').click()
  
      cy.contains('Welcome back. Please log in.').should('be.visible') 
    })

    it('Login to Search', () => {
      cy.get("#login-box-email")
      .should('be.visible') 
      .type("yusufolaideyusuf@gmail.com") 

      cy.get("#login-box-pw")
      .should('be.visible') 
      .type("junior97") 

      cy.contains('Log in')
      .should('be.visible') 
      .click()
  
    })
    
    it('Search for the word Management', () => {
      cy.get("#query")
      .should('be.visible') 
      .type("Management")
      .type('{enter}')

      cy.contains('Date Published').should('be.visible') 
    })
})