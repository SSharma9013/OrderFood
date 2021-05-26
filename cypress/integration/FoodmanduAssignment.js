/// <reference types = "cypress" />

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

describe("Loginto Foodmandu", function(){

  it("Navigate to Foodmandu and login ", function(){
  cy.visit('https://foodmandu.com/', {
    auth: {
      username: 'qaninja06@gmail.com',
      password: 'Presensoft0',
    }})
  cy.writeFile('./log.txt', '---Step 1: Navigate to Foodmandu---\n', { flag: 'a+' })
  })

  it("Click on login ", function(){
  cy.get('.list-inline > :nth-child(2) > .btn').should('not.be.disabled').click()
  cy.writeFile('./log.txt', '---Step 2: Clicked on login button---\n', { flag: 'a+' })
  })

  it("Entering Email ", function(){
  cy.get('.row > :nth-child(1) > .form-control').type(this.logindata.email).should('not.have.value', null)
  cy.writeFile('./log.txt', '--- Step 3: Entered the Username ---\n', { flag: 'a+' })
  })
  it("Entering Password ", function(){
  cy.get('.login-form > .row > :nth-child(2) > .form-control').should('not.be.disabled').type(this.logindata.password)
  cy.writeFile('./log.txt', '---Step 4: Entered the Password---\n', { flag: 'a+' })
  })
  it("Click on submit ", function(){
  cy.get('.login-form > .row > :nth-child(4) > .btn').wait(2000).should('not.be.disabled').click()
  cy.writeFile('./log.txt', '---Step 5: Click on Submit button\n', { flag: 'a+' })
  })
  it("Checking if we have loggined in properly ", function(){
  if(cy.get('[title="My Profile"] > .icomoon')===true){
    cy.writeFile('./log.txt', '---LoggedIn \n', { flag: 'a+' })
  }
  })
})

describe("Selecting a Food item", function(){

  it("Click on the Restaurant", function(){
        cy.get(':nth-child(3) > .container > .row > :nth-child(2) > .listing > .title20 > a > span').should('not.be.disabled').click()
        cy.writeFile('./log.txt', '---Step 6: Clicking on the First restaurant in the fetured restaurants ---\n', { flag: 'a+' })
    })
    it("Search for a particular food Item ", function(){
      cy.get('.input-group > .form-control').type("Spaghetti")
      cy.writeFile('./log.txt', '---Step 7: Seaching Spaghetti---\n', { flag: 'a+' })
      })
      
  it("Adding to Bag ", function(){
      cy.get(':nth-child(1) > .menu__price > a > .icomoon').should('not.be.disabled').click()
      cy.writeFile('./log.txt', '---Step 8: Adding first item in the list to bag---\n', { flag: 'a+' })
      })   
  
  it("Logout from Foodmandu ", function(){
      cy.get(':nth-child(1) > .menu__price > a > .icomoon').should('not.be.disabled').click()
      cy.get('#logoutForm > .green').should('not.be.disabled').click()
      cy.writeFile('./log.txt', '---Step 9: Logging Out of Foodmandu---\n', { flag: 'a+' })
      })
})
  

