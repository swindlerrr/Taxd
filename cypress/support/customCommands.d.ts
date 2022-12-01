declare namespace Cypress {
    interface Chainable<Subject> {

      landPageOpened(element: any): Chainable<any>
      loginPageVerify(element: any): Chainable<any>
      loginForm(username: any, password: any): Chainable<any>

      //------Commands

      goToPage(root: any): Chainable<any>       
      elementIsVisible(element: any): Chainable<any>
      elementloaded(element: any): Chainable<any>
      elementExist(element: any): Chainable<any>
        
  }
}