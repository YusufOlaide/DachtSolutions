/// <reference types="cypress" />

describe('Signup Test Suite', () => {
  
  it('Verify Page title of Link Springer', () => {
    cy.visit('https://link.springer.com/') 

    cy.viewport(1024, 768)

    cy.contains('» Sign up / Log in')
    .should('be.visible') 
    .click()

    cy.title().should('eq','Create Account - Springer') 
  })

  it('Positive - SignUp', () => {
    cy.scrollTo(0, 500)

    cy.get("#first-name")
    .should('be.visible') 
    .type("Yusuf") 

    cy.get("#last-name")
    .should('be.visible') 
    .type("Olaide") 

    cy.get("#email-address")
    .should('be.visible') 
    .type("yusufolaaaaideyusuf@gmail.com") //for concurrent runs, add a letter or number to the email address to form a new one

    cy.get("#password")
    .should('be.visible') 
    .type("olaideyusuf1") 

    cy.get("#password-confirm")
    .should('be.visible') 
    .type("olaideyusuf1") 

    cy.contains('Create account')
    .should('be.visible') 
    .click()

    cy.contains('Your account has been successfully created.').should('be.visible') 


  })

})