describe('Форма логина и пароля', function () {
	it('Верные логин и пароль', function () {
		cy.visit('https://login.qa.studio');
		cy.get('#mail').type('german@dolnikov.ru');
		cy.get('#pass').type('iLoveqastudio1');
		cy.get('#loginButton').click();
		cy.get('#messageHeader').should('be.visible');
		cy.get('#messageHeader').contains('Авторизация прошла успешно');
		cy.get('#exitMessageButton > .exitIcon').should('be.visible');
	})

  it('Восстановление пароля', function () {
		cy.visit('https://login.qa.studio');
		cy.get('#forgotEmailButton').click()
		cy.get('#mailForgot').type('german@dolnikov.ru');
		cy.get('#restoreEmailButton').click();
		cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail');
		cy.get('#exitMessageButton > .exitIcon').should('be.visible');
	})

	it('Верный логин и неверный пароль', function () {
		cy.visit('https://login.qa.studio')
		cy.get('#mail').type('german@dolnikov.ru');
		cy.get('#pass').type('iLoveqastudio');
		cy.get('#loginButton').click();
		cy.get('#messageHeader').should('be.visible');
		cy.get('#messageHeader').contains('Такого логина или пароля нет');
		cy.get('#exitMessageButton > .exitIcon').should('be.visible');
	})

  it('Неверный логин и верный пароль', function () {
		cy.visit('https://login.qa.studio');
		cy.get('#mail').type('german@dolniko.ru');
		cy.get('#pass').type('iLoveqastudio1');
		cy.get('#loginButton').click();
		cy.get('#messageHeader').should('be.visible');
		cy.get('#messageHeader').contains('Такого логина или пароля нет');
		cy.get('#exitMessageButton > .exitIcon').should('be.visible');
	})

	it('Валидация на наличие @', function () {
		cy.visit('https://login.qa.studio');
		cy.get('#mail').type('germandolnikov.ru');
		cy.get('#pass').type('iLoveqastudio');
		cy.get('#loginButton').click();
		cy.get('#messageHeader').should('be.visible');
		cy.get('#messageHeader').contains('Нужно исправить проблему валидации');
		cy.get('#exitMessageButton > .exitIcon').should('be.visible');
	})
	
  it('Проверка строчных букв в логине', function () {
		cy.visit('https://login.qa.studio')
		cy.get('#mail').type('GerMan@Dolnikov.ru');
		cy.get('#pass').type('iLoveqastudio1');
		cy.get('#loginButton').click();
		cy.get('#messageHeader').should('be.visible');
		cy.get('#messageHeader').contains('Авторизация прошла успешно');
		cy.get('#exitMessageButton > .exitIcon').should('be.visible');
	})
})
