describe('Проверка авторизации', function () {

    beforeEach('Начало теста', function () {
        cy.visit('/');
        cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)');
          });

it ('Верный логин и верный пароль', function () {
    cy.get('#mail').type('german@dolnikov.ru') // ввели правильный логин
    cy.get('#pass').type('iLoveqastudio1') // ввели правильный пароль
    cy.get('#loginButton').click() // нажали "войти"

    cy.get('#messageHeader').contains('Авторизация прошла успешно') // проверка сообщения
    cy.get('#exitMessageButton > .exitIcon').should('be.visible') // проверка, что крестик есть и он виден
}
)

it ('Проверка восстановления пароля', function () {
    cy.get('#forgotEmailButton').click() // нажали "Забыли пароль"
    cy.get('#mailForgot').type('lololo@ololosh.com') // ввели e-mail
    cy.get('#restoreEmailButton').click() // нажали Отправить код

    cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail') // проверка сообщения
    cy.get('#exitMessageButton > .exitIcon').should('be.visible') // проверка, что крестик есть и он виден
}
)

it ('Верный логин и НЕверный пароль', function () {
    cy.get('#mail').type('german@dolnikov.ru') // ввели правильный логин
    cy.get('#pass').type('iLoveqastudio123') // ввели НЕправильный пароль
    cy.get('#loginButton').click() // нажали "войти"

    cy.get('#messageHeader').contains('Такого логина или пароля нет') // проверка сообщения
    cy.get('#exitMessageButton > .exitIcon').should('be.visible') // проверка, что крестик есть и он виден
}
)

it ('НЕверный логин и верный пароль', function () {
    cy.get('#mail').type('german@dolnikov123.ru') // ввели НЕправильный логин
    cy.get('#pass').type('iLoveqastudio1') // ввели правильный пароль
    cy.get('#loginButton').click() // нажали "войти"

    cy.get('#messageHeader').contains('Такого логина или пароля нет') // проверка сообщения
    cy.get('#exitMessageButton > .exitIcon').should('be.visible') // проверка, что крестик есть и он виден
}
)

it ('логин без @ и верный пароль', function () {
    cy.get('#mail').type('germandolnikov123.ru') // ввели логин без @
    cy.get('#pass').type('iLoveqastudio1') // ввели правильный пароль
    cy.get('#loginButton').click() // нажали "войти"

    cy.get('#messageHeader').contains('Нужно исправить проблему валидации') // проверка сообщения
    cy.get('#exitMessageButton > .exitIcon').should('be.visible') // проверка, что крестик есть и он виден
}
)

it ('приведение к строчным буквам', function () {
    cy.get('#mail').type('GerMan@Dolnikov.ru') // ввели логин с разным регистром
    cy.get('#pass').type('iLoveqastudio1') // ввели правильный пароль
    cy.get('#loginButton').click() // нажали "войти"

    cy.get('#messageHeader').contains('Авторизация прошла успешно') // проверка сообщения
    cy.get('#exitMessageButton > .exitIcon').should('be.visible') // проверка, что крестик есть и он виден
}
)

}) 