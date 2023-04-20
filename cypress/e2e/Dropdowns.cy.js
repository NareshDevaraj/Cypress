describe('Handle Dropdowns', () => {
    
    it('Dropdown with Select', () => {
        cy.visit('https://www.zoho.com/commerce/free-demo.html')
        
        //select country dropdown using select
        cy.get("#zcf_address_country").select('India')
        .should('have.value','India')
    })

    it('Dropdown without Select', () => {
        cy.visit('https://www.dummyticket.com/dummy-ticket-for-visa-application')
        
        //selecting country under billing section
        cy.get('#select2-billing_country-container').click(); // clicking dropdown
        cy.get('.select2-search__field').type('Italy').type('{enter}');   //entering country in search box and clicking enter
        cy.get('#select2-billing_country-container').should('have.text','Italy'); // assertion
    })

    it('Auto suggest Dropdown', () => {
        cy.visit('https://www.wikipedia.org/')
        
        //Entering chennai in search box
        cy.get('#searchInput').type('Chennai');
        cy.get('.suggestion-title').contains('Chennai Super Kings').click();   //selecting chennai super kings text using common class name for the dropdown

    })  
    
    it('Dynamic Auto suggest Dropdown', () => {
        cy.visit('https://www.google.com/')
        
        cy.get('#W0wltc').click();  // Closing the proxy window
        //Entering cypress automation in search box
        cy.get('#APjFqb').type('cypress automation'); //entering value in search box
        cy.wait(2000)
        cy.get('div.wM6W7d>span').should('have.length','12')// validate the number of auto suggestion
        // select auto suggested link using each function
      
            cy.get('div.wM6W7d>span').each(($el, index, $list) => {
                // $el is a wrapped jQuery element
                if ($el.text() === 'cypress automation testing') {
                  // wrap this element so we can
                  // use cypress commands on it
                  cy.wrap($el).click()
                //} else {
                  // do something else
                }
              })

              cy.get("input[name='q']").should('have.value','cypress automation testing');   //validating the search box

    })  
})