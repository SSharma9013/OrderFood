import data from'../fixtures/data.json';
import LoginPage from'../PageObjects/LoginPage.json';
import RegistrationForm from'../PageObjects/RegistrationForm.json';
import Search from'../PageObjects/Search.json';

export function Click(element)
{
    cy.get(element).should('not.be.disabled').click();
}
export function verifytext(element,text)
{
    cy.get(element).should('include.text',text)
}

export function Type(element, data)
{ 
    cy.get(element).should('not.be.disabled').type(data)
}

export function type_and_check_null(element, data)
{ 
    cy.get(element).clear().should('not.be.disabled').type(data).should('not.have.value', null)
}

export function open()
{ 
    cy.visit(LoginPage.URL);
    Click(LoginPage.LoginButtonElement)
}

export function Create(email, element, text)
{ 
    type_and_check_null(LoginPage.CreateEmailElement, email)
    Click(LoginPage.CreateAnAccountElement)
    verifytext(element,text)
}

export function FillRegidtrationForm()
{ 
    //open();
    //Create(data.Newemail, RegistrationForm.SubheadingElement, RegistrationForm.SubheadingForRegistrationPage)
    type_and_check_null(RegistrationForm.FirstnameElement, data.Firstname)
    type_and_check_null(RegistrationForm.LastnameElement, data.Lastname)
    type_and_check_null(RegistrationForm.EmailElement, data.Newemail)  
    type_and_check_null(RegistrationForm.PasswordElement,data.Password)
    cy.get(RegistrationForm.DaysElement).select(data.DayOfBirth);
    cy.get(RegistrationForm.MonthsElement).select(data.MonthOfBirth);
    cy.get(RegistrationForm.YearsElement).select(data.YearOfBirth);
    cy.get(RegistrationForm.NewletterElement).check()
    cy.get(RegistrationForm.OptionElement).check()
    type_and_check_null(RegistrationForm.CompanyElement, data.Company)
    type_and_check_null(RegistrationForm.AddressElement, data.Address)
    type_and_check_null(RegistrationForm.CityElement, data.City)
    cy.get(RegistrationForm.StateElement).select(data.State)
    type_and_check_null(RegistrationForm.PostCodeElement, data.Postcode)
    type_and_check_null(RegistrationForm.MobileElement, data.Phone_mobile)
}

export function LoggingIn(email,password,message)
{ 
    open();
    type_and_check_null(LoginPage.loginEmail, email)
    expect(data.Password).to.have.length.of.at.least(8)
    type_and_check_null(LoginPage.LogInPassword, password)
    Click(LoginPage.LoginSubmitButton)
    verifytext(LoginPage.ErrorMessageForLogin, message)

}

export function SerchDress(dress)
{
    LoggingIn(data.Existingemail,data.Password,LoginPage.ErrorMessageforInvalidEmail,LoginPage.SuccesfulLoginMessage)
    type_and_check_null(Search.SearchgBar, dress)
    Click(Search.SerchButton)
    verifytext(Search.SechResult, Search.SearchResultMessage)
}


