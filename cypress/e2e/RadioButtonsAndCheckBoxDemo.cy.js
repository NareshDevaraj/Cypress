/// <reference types="cypress" />

describe('Check UI Elements', () => {
    
    it('Checking Radio Buttons', () => {
        cy.visit('https://itera-qa.azurewebsites.net/home/automation')
        cy.get("input#male").should('be.visible');    //using ID so # is used and checking the visibility
        cy.get("input#female").should('be.visible'); 

        //Selecting radio buttons
        cy.get("input#male").check().should('be.checked'); //male radio button should be checked
        cy.get("input#female").should('not.be.checked');  // female radio button is not checked

        cy.get("input#female").check().should('be.checked'); //female radio button should be checked
        cy.get("input#male").should('not.be.checked');  // male radio button is not checked

    })


    
     
    it('Checking Check Boxes', () => {
        cy.visit('https://itera-qa.azurewebsites.net/home/automation')

        // checking visibility of the elements
        cy.get("input#monday").should('be.visible');    //using ID so # is used and checking the visibility
       
        //selecting single check box  - monday
        cy.get("input#monday").check().should('be.checked');
        //unselecting the check box
        cy.get("input#monday").uncheck().should('not.be.checked');

        //selecting all the check boxes
        cy.get("input.form-check-input[type='checkbox']").check().should('be.checked');   //input tag name "." used for class name and [type='checkbox'] is css attribute 
        //Unselecting all the check boxes
        cy.get("input.form-check-input[type='checkbox']").uncheck().should('not.be.checked');  

        //select first and last check box
        cy.get("input.form-check-input[type='checkbox']").first().check().should('be.checked'); ;
        cy.get("input.form-check-input[type='checkbox']").last().check().should('be.checked'); ;


    })
  
 
  })