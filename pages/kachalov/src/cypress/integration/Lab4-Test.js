describe('Kachalov Oleg', function() {
    it('Win X', function() {
      cy.visit('http://localhost:8085')
  
      cy.get('#button_2').click()
      cy.get('#button_0').click()
      cy.get('#button_4').click()
      cy.get('#button_1').click()
      cy.get('#button_6').click()

      cy.get('#status').should('have.text', 'Winner: X')
    })

    it('Back click test', function() {
      cy.visit('http://localhost:8085')
  
      cy.get('#button_2').click()
      cy.get('#button_0').click()
      cy.get('#button_4').click()
      cy.get('#button_1').click()
      cy.get('#Move_3').click()

      cy.get('#status').should('have.text', 'Next player: O')
    })

    it('Win O', function() {
      cy.visit('http://localhost:8085')
  
      cy.get('#button_3').click()
      cy.get('#button_4').click()
      cy.get('#button_2').click()
      cy.get('#button_1').click()
      cy.get('#button_5').click()
      cy.get('#button_7').click()

      cy.get('#status').should('have.text', 'Winner: O')
    })
  })