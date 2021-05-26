/// <reference types = "cypress" />
const Testmethod = require('../TestBase/testbase.js')
import data from'../fixtures/data.json';

  afterEach(function() {
    if (this.currentTest.state === 'failed') {
      Cypress.runner.stop()
    }
  });

describe("Navigate to Automation Practice and then to registration form ", function(){

    it("Verifying error message for incorrect email registration ", function(){
        Testmethod.open();
        Testmethod.Create("Email", '#create_account_error', 'Invalid email address.')
    })

    it("Verifying error message for email already registered ", function(){
        Testmethod.open();
        Testmethod.Create(data.Existingemail,'#create_account_error','An account using this email address has already been registered. Please enter a valid password or request a new one.');
    })

    it("Verifying successful navigation to registration form", function(){
        Testmethod.open();
        Testmethod.Create(data.Newemail, ':nth-child(1) > .page-subheading', 'Your personal information')
    })

})

describe("Registration Form", function(){

    it("Verifying the Error message when registering with empty fields", function(){
        
        Testmethod.Click('#submitAccount > span')
        //expect('.alert').to.have.text('There are 8 errors')
        //expect('.alert > p').to.equal('There are 8 errors')
        Testmethod.verifytext('.alert', 'There are 8 errors')    
    })

    it("Verifying the Error messages for mandatory field-firstname ", function(){
        //Testmethod.open();
        //Testmethod.Create(data.Newemail, ':nth-child(1) > .page-subheading', 'Your personal information')
        //Testmethod.type_and_check_null('#customer_firstname', '')
        cy.get('#customer_firstname').clear()
        Testmethod.type_and_check_null('#customer_lastname', data.Lastname)
        //Testmethod.type_and_check_null('#email', data.Newemail)  
        Testmethod.type_and_check_null('#passwd',data.Password)
        cy.get('#days').select(data.DayOfBirth);
        cy.get('#months').select(data.MonthOfBirth);
        cy.get('#years').select(data.YearOfBirth);
        cy.get('#newsletter').check()
        cy.get('#optin').check()
        Testmethod.type_and_check_null('#company', data.Company)
        Testmethod.type_and_check_null('#address1', data.Address)
        Testmethod.type_and_check_null('#city', data.City)
        cy.get('#id_state').select(data.State)
        Testmethod.type_and_check_null('#postcode', data.Postcode)
        Testmethod.type_and_check_null('#phone_mobile', data.Phone_mobile)

        Testmethod.Click('#submitAccount > span')
        //expect('.alert').to.equal('firstname is required')
        Testmethod.verifytext('.alert', 'firstname is required')      
    })
    it("Verifying the Error messages for mandatory field-lastname ", function(){
        //Testmethod.open();
        //Testmethod.Create(data.Newemail, ':nth-child(1) > .page-subheading', 'Your personal information')
        Testmethod.type_and_check_null('#customer_firstname', data.Firstname)
        //Testmethod.type_and_check_null('#customer_lastname', ' ')
        cy.get('#customer_lastname').clear()
        //Testmethod.type_and_check_null('#email', data.Newemail)  
        Testmethod.type_and_check_null('#passwd',data.Password)
        cy.get('#days').select(data.DayOfBirth);
        cy.get('#months').select(data.MonthOfBirth);
        cy.get('#years').select(data.YearOfBirth);
        cy.get('#newsletter').check()
        cy.get('#optin').check()
        Testmethod.type_and_check_null('#company', data.Company)
        Testmethod.type_and_check_null('#address1', data.Address)
        Testmethod.type_and_check_null('#city', data.City)
        cy.get('#id_state').select(data.State)
        Testmethod.type_and_check_null('#postcode', data.Postcode)
        Testmethod.type_and_check_null('#phone_mobile', data.Phone_mobile)

        Testmethod.Click('#submitAccount > span')    
        Testmethod.verifytext('.alert', 'lastname is required.')      
    })

    it("Verifying the Error messages for mandatory field-email ", function(){
        //Testmethod.open();
        //Testmethod.Create(data.Newemail, ':nth-child(1) > .page-subheading', 'Your personal information')
        Testmethod.type_and_check_null('#customer_firstname', data.Firstname)
        Testmethod.type_and_check_null('#customer_lastname', data.Lastname)
        //Testmethod.type_and_check_null('#email', ' ')  
        cy.get('#email').clear()
        Testmethod.type_and_check_null('#passwd',data.Password)
        cy.get('#days').select(data.DayOfBirth);
        cy.get('#months').select(data.MonthOfBirth);
        cy.get('#years').select(data.YearOfBirth);
        cy.get('#newsletter').check()
        cy.get('#optin').check()
        Testmethod.type_and_check_null('#company', data.Company)
        Testmethod.type_and_check_null('#address1', data.Address)
        Testmethod.type_and_check_null('#city', data.City)
        cy.get('#id_state').select(data.State)
        Testmethod.type_and_check_null('#postcode', data.Postcode)
        Testmethod.type_and_check_null('#phone_mobile', data.Phone_mobile)

        Testmethod.Click('#submitAccount > span')    
        Testmethod.verifytext('.alert', 'email is required')      
    })

    it("Verifying the Error messages for mandatory field-Password ", function(){
        //Testmethod.open();
        //Testmethod.Create(data.Newemail, ':nth-child(1) > .page-subheading', 'Your personal information')
        Testmethod.type_and_check_null('#customer_firstname', data.Firstname)
        Testmethod.type_and_check_null('#customer_lastname', data.Lastname)
        //Testmethod.type_and_check_null('#email', data.Newemail)  
        //Testmethod.type_and_check_null('#passwd',' ')
        cy.get('#passwd').clear()
        cy.get('#days').select(data.DayOfBirth);
        cy.get('#months').select(data.MonthOfBirth);
        cy.get('#years').select(data.YearOfBirth);
        cy.get('#newsletter').check()
        cy.get('#optin').check()
        Testmethod.type_and_check_null('#company', data.Company)
        Testmethod.type_and_check_null('#address1', data.Address)
        Testmethod.type_and_check_null('#city', data.City)
        cy.get('#id_state').select(data.State)
        Testmethod.type_and_check_null('#postcode', data.Postcode)
        Testmethod.type_and_check_null('#phone_mobile', data.Phone_mobile)

        Testmethod.Click('#submitAccount > span')    
        Testmethod.verifytext('.alert', 'passwd is required.')      
    })

    it("Verifying the Error messages for mandatory field-Address ", function(){
        //Testmethod.open();
        //Testmethod.Create(data.Newemail, ':nth-child(1) > .page-subheading', 'Your personal information')
        Testmethod.type_and_check_null('#customer_firstname', data.Firstname)
        Testmethod.type_and_check_null('#customer_lastname', data.Lastname)
        //Testmethod.type_and_check_null('#email', data.Newemail)  
        Testmethod.type_and_check_null('#passwd',data.Password)
        cy.get('#days').select(data.DayOfBirth);
        cy.get('#months').select(data.MonthOfBirth);
        cy.get('#years').select(data.YearOfBirth);
        cy.get('#newsletter').check()
        cy.get('#optin').check()
        Testmethod.type_and_check_null('#company', data.Company)
        //Testmethod.type_and_check_null('#address1', ' ')
        cy.get('#address1').clear()
        Testmethod.type_and_check_null('#city', data.City)
        cy.get('#id_state').select(data.State)
        Testmethod.type_and_check_null('#postcode', data.Postcode)
        Testmethod.type_and_check_null('#phone_mobile', data.Phone_mobile)

        Testmethod.Click('#submitAccount > span')    
        Testmethod.verifytext('.alert', 'address1 is required.')      
    })

    it("Verifying the Error messages for mandatory field-City ", function(){
        //Testmethod.open();
        //Testmethod.Create(data.Newemail, ':nth-child(1) > .page-subheading', 'Your personal information')
        Testmethod.type_and_check_null('#customer_firstname', data.Firstname)
        Testmethod.type_and_check_null('#customer_lastname', data.Lastname)
        //Testmethod.type_and_check_null('#email', data.Newemail)  
        Testmethod.type_and_check_null('#passwd',data.Password)
        cy.get('#days').select(data.DayOfBirth);
        cy.get('#months').select(data.MonthOfBirth);
        cy.get('#years').select(data.YearOfBirth);
        cy.get('#newsletter').check()
        cy.get('#optin').check()
        Testmethod.type_and_check_null('#company', data.Company)
        Testmethod.type_and_check_null('#address1', data.Address)
        //Testmethod.type_and_check_null('#city', ' ')
        cy.get('#city').clear()
        cy.get('#id_state').select(data.State)
        Testmethod.type_and_check_null('#postcode', data.Postcode)
        Testmethod.type_and_check_null('#phone_mobile', data.Phone_mobile)

        Testmethod.Click('#submitAccount > span')    
        Testmethod.verifytext('.alert', 'city is required.')      
    })

    it("Verifying the Error messages for mandatory field-State ", function(){
        //Testmethod.open();
        //Testmethod.Create(data.Newemail, ':nth-child(1) > .page-subheading', 'Your personal information')
        Testmethod.type_and_check_null('#customer_firstname', data.Firstname)
        Testmethod.type_and_check_null('#customer_lastname', data.Lastname)
        Testmethod.type_and_check_null('#email', data.Newemail)  
        Testmethod.type_and_check_null('#passwd',data.Password)
        cy.get('#days').select(data.DayOfBirth);
        cy.get('#months').select(data.MonthOfBirth);
        cy.get('#years').select(data.YearOfBirth);
        cy.get('#newsletter').check()
        cy.get('#optin').check()
        Testmethod.type_and_check_null('#company', data.Company)
        Testmethod.type_and_check_null('#address1', data.Address)
        Testmethod.type_and_check_null('#city', data.City)
        cy.get('#id_state').select('-')
        Testmethod.type_and_check_null('#postcode', data.Postcode)
        Testmethod.type_and_check_null('#phone_mobile', data.Phone_mobile)

        Testmethod.Click('#submitAccount > span')    
        Testmethod.verifytext('.alert', 'This country requires you to choose a State.')      
    })

    it("Verifying the Error messages for mandatory field-Postcode ", function(){
        //Testmethod.open();
        //Testmethod.Create(data.ewemail, ':nth-child(1) > .page-subheading', 'Your personal information')
        Testmethod.type_and_check_null('#customer_firstname', data.Firstname)
        Testmethod.type_and_check_null('#customer_lastname', data.Lastname)
        //Testmethod.type_and_check_null('#email', data.Newemail)  
        Testmethod.type_and_check_null('#passwd',data.Password)
        cy.get('#days').select(data.DayOfBirth);
        cy.get('#months').select(data.MonthOfBirth);
        cy.get('#years').select(data.YearOfBirth);
        cy.get('#newsletter').check()
        cy.get('#optin').check()
        Testmethod.type_and_check_null('#company', data.Company)
        Testmethod.type_and_check_null('#address1', data.Address)
        Testmethod.type_and_check_null('#city',data.City )
        cy.get('#id_state').select(data.State)
        //Testmethod.type_and_check_null('#postcode',' ')
        cy.get('#postcode').clear()
        Testmethod.type_and_check_null('#phone_mobile', data.Phone_mobile)

        Testmethod.Click('#submitAccount > span')    
        Testmethod.verifytext('.alert', "The Zip/Postal code you've entered is invalid. It must follow this format: 00000")      
    })

    it("Verifying the Error messages for mandatory field-Phone number ", function(){
        //Testmethod.open();
        //Testmethod.Create(data.Newemail, ':nth-child(1) > .page-subheading', 'Your personal information')
        Testmethod.type_and_check_null('#customer_firstname', data.Firstname)
        Testmethod.type_and_check_null('#customer_lastname', data.Lastname)
        //Testmethod.type_and_check_null('#email', data.Newemail)  
        Testmethod.type_and_check_null('#passwd',data.Password)
        cy.get('#days').select(data.DayOfBirth);
        cy.get('#months').select(data.MonthOfBirth);
        cy.get('#years').select(data.YearOfBirth);
        cy.get('#newsletter').check()
        cy.get('#optin').check()
        Testmethod.type_and_check_null('#company', data.Company)
        Testmethod.type_and_check_null('#address1', data.Address)
        Testmethod.type_and_check_null('#city',data.City )
        cy.get('#id_state').select(data.State)
        Testmethod.type_and_check_null('#postcode', data.Postcode)
        //Testmethod.type_and_check_null('#phone_mobile', ' ')
        cy.get('#phone_mobile').clear()

        Testmethod.Click('#submitAccount > span')    
        Testmethod.verifytext('.alert', 'You must register at least one phone number.')      
    })

    it("Verifying successful registration ", function(){
        //Testmethod.open();
        //Testmethod.Create(data.Newemail, ':nth-child(1) > .page-subheading', 'Your personal information')
        Testmethod.type_and_check_null('#customer_firstname', data.Firstname)
        Testmethod.type_and_check_null('#customer_lastname', data.Lastname)
        //Testmethod.type_and_check_null('#email', data.Newemail)  
        expect(data.Password).to.have.length.of.at.least(8)
        Testmethod.type_and_check_null('#passwd',data.Password)
        cy.get('#days').select(data.DayOfBirth);
        cy.get('#months').select(data.MonthOfBirth);
        cy.get('#years').select(data.YearOfBirth);
        cy.get('#newsletter').check()
        cy.get('#optin').check()
        Testmethod.type_and_check_null('#company', data.Company)
        Testmethod.type_and_check_null('#address1', data.Address)
        Testmethod.type_and_check_null('#city',data.City )
        cy.get('#id_state').select(data.State)
        Testmethod.type_and_check_null('#postcode', data.Postcode)
        Testmethod.type_and_check_null('#phone_mobile', data.Phone_mobile)

        Testmethod.Click('#submitAccount > span')    
     
    })

})

describe("Loginto  Automation Practice", function(){

    it("Verifying error message for invalid email ", function(){
        Testmethod.open();
        Testmethod.type_and_check_null('#email', 'email')
        expect(data.Password).to.have.length.of.at.least(8)
        Testmethod.type_and_check_null('#passwd', data.Password)
        Testmethod.Click('#SubmitLogin > span')
        Testmethod.verifytext('#center_column > :nth-child(2)', 'Invalid email address.') 
    })

    it("Verifying error message for incorrect password ", function(){
        Testmethod.open();
        Testmethod.type_and_check_null('#email', data.Existingemail)
        Testmethod.type_and_check_null('#passwd','apple' )
        Testmethod.Click('#SubmitLogin > span')
        Testmethod.verifytext('#center_column > :nth-child(2)', 'Authentication failed.') 
    })

    it("Verifying Successfull login ", function(){
        Testmethod.open();
        Testmethod.type_and_check_null('#email', data.Existingemail)
        expect(data.Password).to.have.length.of.at.least(8)
        Testmethod.type_and_check_null('#passwd', data.Password)
        Testmethod.Click('#SubmitLogin > span')
        Testmethod.verifytext('#center_column > :nth-child(2)', 'Welcome to your account. Here you can manage all of your personal information and orders.')
    })
})

describe("verifying Searching for an item", function(){

    it("Verifying succesful search for an item by pressing an enter ", function(){
        Testmethod.open();
        Testmethod.type_and_check_null('#email', data.Existingemail)
        expect(data.Password).to.have.length.of.at.least(8)
        Testmethod.type_and_check_null('#passwd', data.Password)
        Testmethod.Click('#SubmitLogin > span')
        Testmethod.verifytext('#center_column > :nth-child(2)', 'Welcome to your account. Here you can manage all of your personal information and orders.') 
        Testmethod.type_and_check_null('#search_query_top', "Dress {enter}")
        Testmethod.verifytext('.heading-counter', ' results have been found.') 
    })

    it("Verifying succesful search for an item by clicking on search button ", function(){
        Testmethod.open();
        Testmethod.type_and_check_null('#email', data.Existingemail)
        expect(data.Password).to.have.length.of.at.least(8)
        Testmethod.type_and_check_null('#passwd', data.Password)
        Testmethod.Click('#SubmitLogin > span')
        Testmethod.verifytext('#center_column > :nth-child(2)', 'Welcome to your account. Here you can manage all of your personal information and orders.') 
        Testmethod.type_and_check_null('#search_query_top', "Dress")
        Testmethod.Click('#searchbox > .btn')
        Testmethod.verifytext('.heading-counter', ' results have been found.') 
    })
    it("Verifying succesful search for an item by clicking on search button ", function(){
        Testmethod.open();
        Testmethod.type_and_check_null('#email', data.Existingemail)
        expect(data.Password).to.have.length.of.at.least(8)
        Testmethod.type_and_check_null('#passwd', data.Password)
        Testmethod.Click('#SubmitLogin > span')
        Testmethod.verifytext('#center_column > :nth-child(2)', 'Welcome to your account. Here you can manage all of your personal information and orders.') 
        Testmethod.type_and_check_null('#search_query_top', "Dress")
        Testmethod.Click('#searchbox > .btn')
        Testmethod.verifytext('.heading-counter', ' results have been found.') 
        Testmethod.Click(':nth-child(1) > .product-container > .left-block > .product-image-container > .quick-view-wrapper-mobile > .quick-view-mobile')
        expect(cy.get('h1.pb-center-column col-xs-12 col-sm-4')).should('include.text',cy.get(':nth-child(1) > .product-container > .left-block > .product-image-container > .product_img_link > .replace-2x').title())
        //cy.get('#fancybox-frame1622001609273')
    })

    it("Verifying succesfull Addition of item in the cart, checkout and logut ", function(){
        Testmethod.open();
        Testmethod.type_and_check_null('#email', data.Existingemail)
        expect(data.Password).to.have.length.of.at.least(8)
        Testmethod.type_and_check_null('#passwd', data.Password)
        Testmethod.Click('#SubmitLogin > span')
        Testmethod.verifytext('#center_column > :nth-child(2)', 'Welcome to your account. Here you can manage all of your personal information and orders.') 
        Testmethod.type_and_check_null('#search_query_top', "Dress")
        Testmethod.Click('#searchbox > .btn')
        Testmethod.verifytext('.heading-counter', ' results have been found.') 
        Testmethod.verifytext(':nth-child(1) > .product-container > .right-block > h5 > .product-name','Printed Summer Dress')
        Testmethod.Click(':nth-child(1) > .product-container > .right-block > .button-container > .ajax_add_to_cart_button > span')
        Testmethod.verifytext('#layer_cart_product_title', 'Printed Summer Dress' )
        Testmethod.Click('.button-container > .button-medium > span')
        Testmethod.Click('.cart_navigation > .button > span')
        Testmethod.Click('.logout')
        cy.contains('Sign in')
        //Testmethod.Click(':nth-child(1) > .product-container > .left-block > .product-image-container > .product_img_link > .replace-2x')
        //Testmethod.verifytext('h1', 'Printed Summer Dress' )
        //Testmethod.Click('#add_to_cart > .exclusive')
        //cy.get('#fancybox-frame1622001609273')
    })

})






