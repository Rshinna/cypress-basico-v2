it('testa a página da política de privavidade de forma independente',function(){
    
    cy.visit('./src/privacy.html')
    cy.contains('Talking About Testing')
        .should('be.visible')    
})

/*
Obs:Exemplo de função time aplicada para repetição de teste para confirmar sua estabilidade.

Cypress._.times(5, function() {

    it('testa a página da política de privavidade de forma independente',function(){
    
        cy.visit('./src/privacy.html')
        cy.contains('Talking About Testing')
            .should('be.visible')    
    })  */












