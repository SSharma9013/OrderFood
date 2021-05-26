/// <reference types = "cypress" />
const Testmethod = require('../TestBase/testbase.js')
import data from'../fixtures/data.json';
import LoginPage from'../PageObjects/LoginPage.json';
import RegistrationForm from'../PageObjects/RegistrationForm.json';
import Search from'../PageObjects/Search.json';

  afterEach(function() {
    if (this.currentTest.state === 'failed') {
      Cypress.runner.stop()
    }
  });

describe("Navigate to Automation Practice and then to registration form ", function(){
//----------Test Case 1-------------
    it("Verifying error message for incorrect email registration ", function(){
        Testmethod.open();
        Testmethod.Create("Email", LoginPage.ElementErrorWhileCreateingAccount, LoginPage.ErrorMessageforInvalidEmail)
    })
//----------Test Case 2-------------
    it("Verifying error message for email already registered ", function(){
        Testmethod.open();
        Testmethod.Create(data.Existingemail,LoginPage.ElementErrorWhileCreateingAccount,LoginPage.ErrorMessageForExistingEmail);
    })
//----------Test Case 3-------------
    it("Verifying successful navigation to registration form", function(){
        Testmethod.open();
        Testmethod.Create(data.Newemail, RegistrationForm.SubheadingElement, RegistrationForm.SubheadingForRegistrationPage)
    })

})

describe("Registration Form", function(){
//----------Test Case 4-------------
    it("Verifying the Error message when registering with empty fields", function(){
        
        Testmethod.Click(RegistrationForm.SubmitButtonOnRegForm)
        //expect(RegistrationForm.ErrorAlertBoxElement).to.have.text(RegistrationForm.ErrorMessageAllEmptyFields)
        //expect('.alert > p').to.equal(RegistrationForm.ErrorMessageAllEmptyFields)
        Testmethod.verifytext(RegistrationForm.ErrorAlertBoxElement, RegistrationForm.ErrorMessageAllEmptyFields)    
    })
//----------Test Case 5-------------
    it("Verifying the Error messages for mandatory field-firstname ", function(){
        Testmethod.FillRegidtrationForm()
        cy.get(RegistrationForm.FirstnameElement).clear()
        Testmethod.Click(RegistrationForm.SubmitButtonOnRegForm)
        Testmethod.verifytext(RegistrationForm.ErrorAlertBoxElement, RegistrationForm.ErrorMessageForFirstname)   
    })
//----------Test Case 6-------------
    it("Verifying the Error messages for mandatory field-lastname ", function(){
        Testmethod.FillRegidtrationForm()
        cy.get(RegistrationForm.LastnameElement).clear()
        Testmethod.Click(RegistrationForm.SubmitButtonOnRegForm)
        Testmethod.verifytext(RegistrationForm.ErrorAlertBoxElement, RegistrationForm.ErrorMessageForLastname)      
    })
//----------Test Case 7-------------
    it("Verifying the Error messages for mandatory field-email ", function(){
        Testmethod.FillRegidtrationForm()
        cy.get(RegistrationForm.EmailElement).clear()
        Testmethod.Click(RegistrationForm.SubmitButtonOnRegForm)
        Testmethod.verifytext(RegistrationForm.ErrorAlertBoxElement, RegistrationForm.ErrorMessageForEmail)    
    })
//----------Test Case 8-------------
    it("Verifying the Error messages for mandatory field-Password ", function(){
        Testmethod.FillRegidtrationForm()
        cy.get(RegistrationForm.PasswordElement).clear()
        Testmethod.Click(RegistrationForm.SubmitButtonOnRegForm)
        Testmethod.verifytext(RegistrationForm.ErrorAlertBoxElement, RegistrationForm.ErrorMessageForPassword)       
    })
//----------Test Case 9-------------
    it("Verifying the Error messages for mandatory field-Address ", function(){
        Testmethod.FillRegidtrationForm()
        cy.get(RegistrationForm.AddressElement).clear()
        Testmethod.Click(RegistrationForm.SubmitButtonOnRegForm)
        Testmethod.verifytext(RegistrationForm.ErrorAlertBoxElement, RegistrationForm.ErrorMessageForAddress)
    })
//----------Test Case 10-------------
    it("Verifying the Error messages for mandatory field-City ", function(){
        Testmethod.FillRegidtrationForm()
        cy.get(RegistrationForm.CityElement).clear()
        Testmethod.Click(RegistrationForm.SubmitButtonOnRegForm)
        Testmethod.verifytext(RegistrationForm.ErrorAlertBoxElement, RegistrationForm.ErrorMessageForCity)   
    })
//----------Test Case 11-------------
    it("Verifying the Error messages for mandatory field-State ", function(){
        Testmethod.FillRegidtrationForm()
        cy.get(RegistrationForm.StateElement).select("-")
        Testmethod.Click(RegistrationForm.SubmitButtonOnRegForm)
        Testmethod.verifytext(RegistrationForm.ErrorAlertBoxElement, RegistrationForm.ErrorMessageForState)   
    })
//----------Test Case 12-------------
    it("Verifying the Error messages for mandatory field-Postcode ", function(){
        Testmethod.FillRegidtrationForm()
        cy.get(RegistrationForm.PostCodeElement).clear()
        Testmethod.Click(RegistrationForm.SubmitButtonOnRegForm)
        Testmethod.verifytext(RegistrationForm.ErrorAlertBoxElement, RegistrationForm.ErrorMessageForPostcode)
    })
//----------Test Case 13-------------
    it("Verifying the Error messages for mandatory field-Phone number ", function(){
        Testmethod.FillRegidtrationForm()
        cy.get(RegistrationForm.MobileElement).clear()
        Testmethod.Click(RegistrationForm.SubmitButtonOnRegForm)
        Testmethod.verifytext(RegistrationForm.ErrorAlertBoxElement, RegistrationForm.ErrorMessageForPhoneNumber)
    })
//----------Test Case 14-------------
    it("Verifying successful registration ", function(){
        Testmethod.FillRegidtrationForm()
        Testmethod.Click(RegistrationForm.SubmitButtonOnRegForm)
        Testmethod.verifytext(LoginPage.AccountInfo, LoginPage.SuccesfulLoginMessage)
    })

})

describe("Loginto  Automation Practice", function(){
//----------Test Case 15-------------
    it("Verifying error message for invalid email ", function(){
        Testmethod.LoggingIn("email",data.Password,LoginPage.ErrorMessageforInvalidEmail) 
    })
//----------Test Case 16-------------
    it("Verifying error message for incorrect password ", function(){
        Testmethod.LoggingIn(data.Existingemail,"apple",LoginPage.ErrorMessageforInvalidPassword)
    })
//----------Test Case 17-------------
    it("Verifying Successfull login ", function(){
        Testmethod.LoggingIn(data.Existingemail,data.Password,LoginPage.SuccesfulLoginMessage)
    })
})

describe("verifying Searching for an item", function(){
//----------Test Case 18-------------
    it("Verifying succesful search for an item by pressing an enter ", function(){
        Testmethod.LoggingIn(data.Existingemail,data.Password,LoginPage.SuccesfulLoginMessage)
        Testmethod.type_and_check_null(Search.SearchgBar, "Dress {enter}")
        Testmethod.verifytext(Search.SechResult, Search.SearchResultMessage) 
    })
//----------Test Case 19-------------
    it("Verifying succesful search for an item by clicking on search button ", function(){
        Testmethod.SerchDress(Search.Dress)
    })
//----------Test Case 20-------------
    it("Verifying succesfull Addition of item in the cart, checkout and logout ", function(){
        Testmethod.SerchDress(Search.Dress)
        Testmethod.verifytext(Search.SearchProductElement,Search.DressName)
        Testmethod.Click(Search.AddtoCart)
        Testmethod.verifytext(Search.DressTitle, Search.DressName )
        Testmethod.Click(Search.CheckOut)
        Testmethod.Click(Search.CartCheckOut)
        Testmethod.Click(Search.Logout)
        cy.contains('Sign in')
        //Testmethod.Click(':nth-child(1) > .product-container > .left-block > .product-image-container > .product_img_link > .replace-2x')
        //Testmethod.verifytext('h1', Search.DressName )
        //Testmethod.Click('#add_to_cart > .exclusive')
        //cy.get('#fancybox-frame1622001609273')
    })

})






