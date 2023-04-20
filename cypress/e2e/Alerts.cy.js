/*
concepts covered
1.Javascript Alert
2.Javascript Confirm Alert
3.Javascript Promt Alert
4.Authenticated Alert
*/

describe('Alerts', () => {

    //Java script  alert : It will have some text and an 'OK' button
    it('JS alert', () => {

        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
    
        cy.get(':nth-child(1) > button').click();
        //Alert window is automatically closed by cypress
        //validating alert using event 
        cy.on('window:alert',(t) =>{
            expect(t).to.contains('I am a JS Alert');
            })
         
        cy.get('#result').should('have.text','You successfully clicked an alert');   
    })




    //Java script confirm alert : It will have some text with 'OK'  and 'Cancel' button
    it('JS confirm alert using OK', () => {

        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
        cy.get(':nth-child(2) > button').click();
       
        //below event will automatically click Ok by cypress
        cy.on('window:confirm',(t) =>{
            expect(t).to.contains('I am a JS Confirm');
            })
        cy.get('#result').should('have.text','You clicked: Ok');   
    })

    it('JS confirm alert close using cancel', () => {

        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
        cy.get(':nth-child(2) > button').click();
       
        //below event will automatically click Ok by cypress
        cy.on('window:confirm',(t) =>{
            expect(t).to.contains('I am a JS Confirm');
            })
            cy.on('window:confirm',(t) => false);  //cypress closes alert window using cancel button

        cy.get('#result').should('have.text','You clicked: Cancel');   
    })

   
   
    
    
    
    //Java script Prompt alert : It will have textbox for user input along with 'OK'  and 'Cancel' button
    it('JS Prompt alert close using OK button', () => {

        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
      
    
        //below event will handle the prompt alert window 
        cy.window().then((win)=>{
         cy.stub(win,'prompt').returns('welcome'); // it should be defined before alert window display
        })

        cy.get(':nth-child(3) > button').click(); // then click on the element
        cy.get('#result').should('have.text','You entered: welcome');   // validating text entered
    })
    
    it('JS Prompt alert close using cancel button', () => {

        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
      
    
        //below event will handle the prompt alert window 
        // it should be defined before alert window display
        cy.window().then((win)=>{
         cy.stub(win,'prompt').returns('welcome'); // passing the text "Welcome"
        })

        cy.get(':nth-child(3) > button').click(); // then click on the element
        cy.on('window:prompt',(t) => false);  //cypress closes alert window using cancel button
        cy.get('#result').should('have.text','You entered: welcome');   // validating text entered
    })




//Java script Authenticated alert : It will ask for user name and password
it('JS Authenticated alert 1', () => {

    cy.visit('https://the-internet.herokuapp.com/basic_auth',{auth: 
                                                                {
                                                                    username: "admin",
                                                                    password: "admin"
                                                                }
                                                            })
     
    cy.get('p').should('have.contain','Congratulations!')                                                       
   
})

it('JS Authenticated alert passed using url', () => {

    cy.visit('https://admin:admin@the-internet.herokuapp.com/basic_auth')
     
    cy.get('p').should('have.contain','Congratulations!')                                                       
   
})


})    