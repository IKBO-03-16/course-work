describe('test', function() {
    it('test', function() {
      cy.visit('http://server:9000')
  
      cy.get('#rand')
      cy.get('#dead')
      cy.get('#start')
    })
  })