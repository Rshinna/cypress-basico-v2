Cypress.Commands.add('fillMandatoryFieldsAndSubmit',function() {
    cy.get('#firstName').type('Rodrigo')
    cy.get('#lastName').type('Franco Jorge')
    cy.get('#email').type('rshina@hotmail.com')
    cy.get('#open-text-area').type('teste')
    cy.contains('button','Enviar').click()
})
