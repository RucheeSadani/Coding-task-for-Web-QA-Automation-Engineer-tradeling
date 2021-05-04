/// <reference types="cypress" />

it('Scenario 3',function(){
    //Open Amazon site
    cy.visit("https://www.amazon.com/")
    //Click on flag icon dropdown besides search box
    cy.get('#icp-nav-flyout').click()
    //Click on Currency Settings dropdown
    cy.get('#a-autoid-0-announce').click()
    //Select AED from currency dropdown
    cy.get('#icp-sc-dropdown_3').click()
    //Click on Save Changes
    cy.get('.a-button-input').click()
    //Type oneplus in search bar and enter
    cy.get('#twotabsearchtextbox').type('oneplus{Enter}')
    //Check the selected currency displayed for the product's price
    cy.get('.a-price-symbol').eq(0).should('include.text', 'AED')
    
})