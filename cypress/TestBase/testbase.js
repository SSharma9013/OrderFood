
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
    cy.visit('http://automationpractice.com');
    Click('.login')
}

export function Create(email, element, text)
{ 
    type_and_check_null('#email_create', email)
    Click('#SubmitCreate > span')
    verifytext(element,text)
}

