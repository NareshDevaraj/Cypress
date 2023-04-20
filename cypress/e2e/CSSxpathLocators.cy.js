/* Locating elements Demo
1. Launch browser & open URL
 https://demo.nopcommerce.com/
2. Enter Text in search box"Apple MacBook Pro 13-inch"
3. Click on search Button
4.Click omn Add to Cart
5. Provide Quality 2 
6. Click on Add to Cart
7. Click on Shopping cart 'Link at the top of the page'.
8. Verify the total amount.
*/


//require('@cypress/xpath');  added in support/e2e
describe('Basic end to end flow', () => {
    
    it('Verify the types of locator', () => {

    cy.visit('https://demo.nopcommerce.com/') // open the url 

    cy.get("#small-searchterms").type("Apple MacBook Pro 13-inch"); //search box used ID (ID tag is optional)

    cy.get("[type='submit']").click(); // click on search box using CSS element
        
    cy.get(".product-title > a").contains('Apple MacBook Pro 13-inch');  //assertion using selectors playgound concept
    
    cy.get(".product-box-add-to-cart-button").click(); //click add to cart button  using class name
    
    cy.wait(3000); 
    
    cy.get("#product_enteredQuantity_4").clear().type('4'); //clearing number of quantity and adding number

    cy.get("#add-to-cart-button-4").click();  // clicking add to cart after adding quantity using ID
    
    cy.get(".close[title='Close']").click()    //closing notification using class name and CSS attribute
    
    cy.wait(3000);
    
    cy.xpath('//*[@id="topcartlink"]/a/span[2]').click(); // clicking shopping cart link using xpath
    
    cy.wait(3000);    
    
    cy.get(".product-unit-price").contains('$1,800.00'); //validating unit price
    
    cy.get(".product-subtotal").contains('$7,200.00'); //validating Total price
})  

it('Find no of products using css elements', () => {

    cy.visit('https://demo.nopcommerce.com/notebooks') // open the url 

    cy.get('.product-title').should('have.length',6) // validtaing number of products displaying in the page
    
})  


})