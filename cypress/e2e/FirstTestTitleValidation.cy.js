describe('MyFirstTest', () => {
    
  it('verify Title of the page - positive test', () => {
  cy.visit('https://opensource-demo.orangehrmlive.com')
  cy.title().should('eq', 'OrangeHRM')
  })

  //it('To validate negative test - Negative test', () => {
    //cy.visit('https://opensource-demo.orangehrmlive.com')
    //cy.title().should('eq', 'OrangeHRM123123')
    //})

    
})