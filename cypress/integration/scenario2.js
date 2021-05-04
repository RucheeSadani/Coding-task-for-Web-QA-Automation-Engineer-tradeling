/// <reference types="cypress" />

it('Scenario 2',function(){
    //open amazon site
    cy.visit("https://www.amazon.com/")
    //Close pop up
    cy.get('.glow-toaster-footer > .a-button-base').click()
    //Click on Todays Deal
   cy.get('[href="/international-sales-offers/b/?ie=UTF8&node=15529609011&ref_=nav_cs_gb_intl_52df97a2eee74206a8343034e85cd058"]').click()
    //Click on Show more department
    cy.get('.a-expander-prompt').click()
    //Select Sports & Outdoors department
    cy.get('.a-expander-content').contains('Software').click()
    cy.get('#FilterItemView_all_summary').contains('Software')
    //Assert on choosing the correct selected department
    cy.get('#FilterItemView_all_summary').should('include.text','Software')
})