/// <reference types="cypress" />

it('Scenario 1',function(){
    //Open Amazon site
    cy.visit("https://www.amazon.com/")
    //close popup
    cy.get('input[data-action-type="DISMISS"]').click()
    //click on Hamburger icon
    cy.get('.hm-icon').click()
    //click on Home entertainment
    cy.contains('Home Entertainment').click({force:true})
    //Choose sub-category 'Televisions'
    cy.get('img[alt="Smart Televisions"]').click()
    //Check the total number of results match the total displayed products
    cy.get('.a-box-inner > .a-color-base').then((el) =>{
       let a = el.text(); 
       cy.log(a)
       cy.contains('See all results').click()
       cy.get('.sg-col-14-of-20 > .sg-col-inner > .a-section > span').eq(0).then((el)=>{
       let b=el.text();
       let count = a.split(" ")
       let count1 = b.split(" ")
       expect(count[2]).to.be.equals(count1[2]) 
    })
})
})