/// <reference types = "cypress" />
/*
beforeEach(function() {
    cy.fixture('data').then(function(logindata) {
      this.logindata =logindata
    })
  })
  
  afterEach(function() {
    if (this.currentTest.state === 'failed') {
      Cypress.runner.stop()
    }
  });
  */
  describe("Loginto Skype", function(){
  
    it("Navigate to Foodmandu and login ", function(){
    cy.visit('http://computer-database.herokuapp.com/computers')
    cy.get('#add').click()
    cy.get('#name').type("NewComp3")
    cy.get('#introduced').type("2021-05-23")
    cy.get('#discontinued').type("2021-05-26")
    cy.get('#company').select('Apple Inc.')
    cy.get('.primary').click()

    })
})
  
