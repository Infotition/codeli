describe('Navbar', () => {
  it('should display infotition brand', () => {
    cy.visit('http://localhost:3000/codeli');
    cy.getElement('brand').children().should('have.length', 2);
  });
});
