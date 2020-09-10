/// <reference types="cypress" />

describe('Logout Test Suite', () => {
    it('Verify Page title text of Link Springer', () => {
        cy.visit('https://link.springer.com/') 
    
        cy.viewport(1024, 768)
    
        cy.contains('» Sign up / Log in').click()
    
        cy.contains('Welcome back. Please log in.').should('be.visible')   
      })

      it('Login to Logout', () => {
        cy.visit('https://link.springer.com/') 
    
        cy.viewport(1024, 768)
    
        cy.contains('» Sign up / Log in').click()

        cy.get("#login-box-email")
        .should('be.visible') 
        .type("yusufolaideyusuf@gmail.com") 

        cy.get("#login-box-pw")
        .should('be.visible') 
        .type("junior97") 

        cy.contains('Log in')
        .should('be.visible') 
        .click()

        cy.contains('Logged in as: Yusuf Yusuf').should('be.visible') 

        cy.get("#user")
        .should('be.visible') 
        .click()
                
        cy.contains('Logout')
        .should('be.visible') 
        .click()
        
      })

      it('Verify User is Successfully Logged out', () => {
        cy.viewport(1024, 768)
     
        cy.contains('» Sign up / Log in').should('be.visible')

      })
  
  })