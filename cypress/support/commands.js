/// <reference types="cypress" />

const {
  PageElements
} = require("../support/selectors")

const pe = new PageElements()

Cypress.Commands.add('landPageOpened', () => {
  cy.elementIsVisible('h1.heading-copy')
  cy.elementIsVisible('.nav-menu-3 > .primary')
  cy.elementIsVisible('.div-block-23 > .secondary-gray')
  cy.elementIsVisible('img.image-2')
  cy.elementIsVisible('[data-w-id="1f1fc4ca-8532-3946-f97c-1a8644d4d0d9"] > .nav-button > .menu-label')
  cy.elementIsVisible('.button-1 > .nav-button > .menu-label')

});

Cypress.Commands.add('loginPageVerify', () => {
  cy.elementIsVisible('.LoginForm_title__hH4iJ')
  cy.elementIsVisible(pe.username_input)
  cy.elementIsVisible(pe.password_input)
  cy.elementIsVisible(pe.submitLogin_btn)
  cy.elementIsVisible('.LoginForm_extras-container__MT8lw > a')
  cy.elementIsVisible('.LoginForm_signup-text__oXm9d > a')
})
Cypress.Commands.add('loggingIn', (username, password) => {
  cy.get(pe.username_input).clear().type(username)
  cy.get(pe.password_input).clear().type(password)
  cy.get(pe.submitLogin_btn).click() 
  cy.elementIsVisible('h1.TopBar_header-text__lEb_i')
  cy.log('Logging in Success')
})

/* Cypress.Commands.add('goToPage', (root) => {

  cy.get(pe.header_menu).then(() => {

    switch (root) {

      case 'Form':

      case 'Map':
        cy.get('ul[class="nav navbar-nav"] > li > a ').to.eq(0).click()
        break

      case 'Customer':
        cy.get('ul[class="nav navbar-nav"] > li > a ').to.eq(1).click()
        break

      case 'Estimates':
        cy.get('ul[class="nav navbar-nav"] > li > a ').to.eq(2).click()
        break

      case 'Schedule':
        cy.get('ul[class="nav navbar-nav"] > li > a ').to.eq(3).click()
        break

      case 'Invoices':
        cy.get('ul[class="nav navbar-nav"] > li > a ').eq(4).click()
        break

      case 'Timesheet':
        cy.get('ul[class="nav navbar-nav"] > li > a ').to.eq(5).click()
        break

      case 'SnowTrack':
        cy.get('ul[class="nav navbar-nav"] > li > a ').to.eq(6).click()
        break

      case 'P.O.':
        cy.get('ul[class="nav navbar-nav"] > li > a ').to.eq(7).click()
        break

      case 'Reports':
        cy.get('ul[class="nav navbar-nav"] > li > a ').to.eq(8).click()
        break

      default:
        break

    }

  })
}) */

Cypress.Commands.add('elementIsVisible', (element) => {
  cy.get(element).should('be.visible')

})

/*cy.location().should((loc) => {
  switch (root) {
    case 'Home':
      expect(loc.pathname).to.eq('/order-add')
      break

    case 'Import & Optimize':

      expect(loc.pathname).to.eq('/orders-import')
      break
    default:
      break
  }
})*/

/*Cypress.Commands.add('importOption', (optName) => {

  switch (optName) {

    case 'Select all':
      cy.get(pe.importOptions.selectAll).click()
      break

    case 'Group Orders':
      cy.get(pe.importOptions_wrap).contains(optName).click()
      break

    case 'Ungroup':
      cy.get(pe.importOptions_wrap).contains(optName).click()
      break

    case 'Validate':
      cy.get(pe.importOptions_wrap).contains(optName).click()
      cy.get(pe.importOptions.submitImport_btn).should('not.be.disabled')
      break

    case 'Delete':
      cy.get(pe.importOptions_wrap).contains(optName).click()
      break

    case 'Global map':
      cy.get(pe.importOptions_wrap).contains(optName).click()
      break

    default:
      break;
  }
})*/


