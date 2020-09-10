/// <reference types="cypress" />

describe('Navigation Test Suite', () => {
    it('Navigate to Link Springer Website', () => {
      cy.visit('https://link.springer.com/') 
    })

    it('URL Correctness', () => {
      cy.url().should('include','link.springer.com') 
    })

    it('Verify Page title of Link Springer Website', () => {
        cy.visit('https://link.springer.com/') 
    
        cy.title().should('eq','Home - Springer') 
      })

      it('Verify Link Springer Logo Visibility', () => {
        cy.visit('https://link.springer.com/') 
    
        cy.get("#logo").should('be.visible') 
      })
  })

