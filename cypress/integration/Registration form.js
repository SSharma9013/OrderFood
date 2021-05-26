/// <reference types = "cypress" />
const Testmethod = require('./testbase.js')
import data from'../fixtures/data.json';

  afterEach(function() {
    if (this.currentTest.state === 'failed') {
      Cypress.runner.stop()
    }
  });

describe("Registration Form", function(){

    it("Verifying the Error message when registering with empty fields", function(){
        Testmethod.open();
        Testmethod.Create(data.newemail, ':nth-child(1) > .page-subheading', 'Your personal information')
        Click('#submitAccount > span')
        Testmethod.verifytext('.alert', 'There are 8 errors')    
    })

    it("Verifying the Error message when registering without one of the required ", function(){
        Testmethod.open();
        Testmethod.Create(data.newemail, ':nth-child(1) > .page-subheading', 'Your personal information')
        Testmethod.type_and_check_null('#customer_firstname', 'Suraksha')
        Testmethod.type_and_check_null('#customer_lastname', 'Sharma')
        Testmethod.verifytext('#email', data.newemail)  
        cy.get('#days').should("have.value", '1').select('1');
        cy.get('#months').should("have.value", '4').select('4');
        cy.get('#years').should("have.value", '1949').select('1949');
        cy.get('#newsletter').check()
        cy.get('#optin').check()
        Testmethod.verifytext('#firstname','Suraksha' )
        Testmethod.verifytext('#lastname','Sharma' )
        Testmethod.type_and_check_null('#company', 'SomeCompany')
        Testmethod.type_and_check_null('#address1', 'Boston')
        Testmethod.type_and_check_null('#city', 'Boston')
        cy.get('#id_state').select('Massachusetts')
        Testmethod.type_and_check_null('#postcode', '22713')
        Testmethod.type_and_check_null('#phone_mobile', '9876543210')

        Click('#submitAccount > span')
        Testmethod.verifytext('.alert', 'There are 8 errors')    
    })

})