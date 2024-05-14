describe('Покупка нового аватара для тренера', function () {
	it('Покупка аватара e-2-e', function () {
		cy.visit('https://pokemonbattle.me/login');
    cy.get('input[type="email"]').type('user-login');
		cy.get('input[type="password').type('user-password');
    cy.get('.auth__button').click();
    cy.get('.header__btns > [href="/shop"]').click();
    cy.get('.available > button').first().click();
    cy.get('.credit').type('4620869113632996');
		cy.get('.k_input_ccv').type('125');
		cy.get('.k_input_date').type('1225');
		cy.get('.k_input_name').type('NAME');
		cy.get('.pay-btn').click();
    cy.get('#cardnumber').type('56456');
    cy.get('.payment__submit-button').click();
    cy.contains('Покупка прошла успешно').should('be.visible');
	});
})