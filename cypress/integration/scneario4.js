/// <reference types="cypress" />

it('Scenario 4',function(){
    //open amazon site
    cy.visit("https://www.amazon.com/")
    //close popup
    cy.get('input[data-action-type="DISMISS"]').click()
     //From Search DDL, chose "Electronics"
    cy.get('#twotabsearchtextbox').click().get('#searchDropdownBox').select('Electronics',{force: true})
    //Search for "Apple"
    cy.get('#twotabsearchtextbox').type('Apple')
    //click on apple iphone
    cy.get('#suggestions').contains('apple iphone').click()
    //click on Apple iphone XS Max
    cy.contains('Apple iPhone XS Max, 256GB, Space Gray - Fully Unlocked (Renewed Premium)').click();
    //To verify if the product is In Stock
    cy.get('#availability').should('include.text','In Stock')
    //price
    const price=cy.get('#priceblock_ourprice')
    //rating
    cy.get('#averageCustomerReviews_feature_div > #averageCustomerReviews > [data-action="acrLink-click-metrics"] > #acrCustomerReviewLink > #acrCustomerReviewText')
    //shipping details
    cy.get('#contextualIngressPt')
    //click on details
    cy.get('#ourprice_shippingmessage > span.a-declarative > .a-popover-trigger > .a-size-base').click()
    cy.get('.a-button-close').click()
    //click add to cart
    cy.get('#add-to-cart-button').click()
    //verify if the product has added to cart
    cy.get('#huc-v2-order-row-messages').should('include.text','Added to Cart')
    //Click on cart
    cy.get('#hlb-view-cart-announce').click()
    //verify the quantity of item is 1
    cy.get('.a-dropdown-prompt').then((ele)=>{
        let quantity=ele.text()
        expect(quantity).to.be.equals('1')
    })
})
    