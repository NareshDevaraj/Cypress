/*
Topics Covered : 
-------
1) Implicit Assertions
2) Explicit Assertions
      * BDD Assertions  - expect 
      *TDD Assertions   - assert
*/

describe('Assertion Demo', () => {
    
    it('Implicit Assertions', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com')
    
    //to vaidate url using should and
    cy.url().should('include','orangehrmlive')    
    cy.url().should('eq','https://opensource-demo.orangehrmlive.com/web/index.php/auth/login') //validating URL
    cy.url().should('contain','orangehrm') //validating text in URL

    //with single url assertion
    cy.url().should('include','orangehrmlive')
      .should('eq','https://opensource-demo.orangehrmlive.com/web/index.php/auth/login') //validating URL
      .should('contain','orangehrm') //validating text in URL

    //with and assertion
    cy.url().should('include','orangehrmlive')
      .and('eq','https://opensource-demo.orangehrmlive.com/web/index.php/auth/login') //validating URL negative assertion
      .and('contain','orangehrm') 
      .and('not.contain','abcd12121')//validating text should not be in URL

    //validating title
    cy.title().should('include','Orange')
      .and('eq','OrangeHRM')
      .and('contain','HRM')

    //vaildate if logo is displaying (can be any element)
    cy.get('.orangehrm-login-branding > img').should('be.visible')// logo visible
    .and('exist') //logo exist
    
    //validating number of the links in login page
    cy.xpath("//a").should('have.length','5') // no of links

  })

 it('Implicit Assertions demo2', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com')
    
    cy.get("input[placeholder='Username']").type("Admin")  // provide a value into inputbox
    cy.get("input[placeholder='Username']").should('have.value','Admin') //validating value  
  
  })

  it('Explicit Assertions demo', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com')
    
    cy.get("input[placeholder='Username']").type("Admin")  // provide a value into inputbox
    cy.get("input[placeholder='Password']").type("admin123")   
    cy.get("button[type='submit']").click();

    let expName="Selenium Testing";
    cy.get(".oxd-userdropdown-name").then( (x)=>{
        let actName=x.text()
       //BDD menthod
      //expect(actName).to.equal(expName);
      expect(actName).to.not.equal(expName); //user name changes 
    } )
  
  })


})