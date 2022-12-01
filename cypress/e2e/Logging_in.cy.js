/// <reference types="cypress" />

import {
   PageElements
} from "../support/selectors"

const pe = new PageElements()

describe('Test name', () => {
   beforeEach(() => {
      cy.visit('/')
      Cypress.on('uncaught:exception', (err, runnable) => {
         return false
      })
      cy.clearLocalStorage()
   })

   it.only('Login Page Verifying', () => {
      
      cy.landPageOpened()
      cy.get('.tertiary').click();
      cy.loginPageVerify()
      cy.loggingIn(Cypress.env('users').admin["username"], Cypress.env('users').admin["password"])
      cy.intercept('GET', 'https://taxd.zendesk.com/embeddable/config').as('loginSuccessi')
      cy.wait('@loginSuccessi').its('response.statusCode').should('eq', 200)

   })
})

