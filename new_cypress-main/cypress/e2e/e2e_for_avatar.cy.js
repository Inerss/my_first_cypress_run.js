describe('Проверка авторизации', function () {

    it ('Покупка нового аватара', function() {
        cy.visit('https://pokemonbattle.ru/') // зашли на сайт
        cy.get(':nth-child(1) > .auth__input').type('USER_LOGIN') // ввели логин
        cy.get('#password').type('USER_PASSWORD') // ввели пароль
        cy.get('.auth__button').click() // нажали "Войти"
        cy.wait(2000); // ждем 2 сек
        cy.get('.header__container > .header__id').click({ force: true }) // заходим в тренера
        cy.wait(2000); // ждем 2 сек
        cy.get('[href="/shop"]').click() // нажали "Смена аватара"
        cy.get(':nth-child(7) > .shop__button').click({ force: true }) // выбрали доступный аватар
        cy.wait(2000); // ждем 2 сек
        cy.get('.pay__payform-v2 > :nth-child(2) > .pay_base-input-v2').type('4620869113632996') // вводим номер карты
        cy.get(':nth-child(1) > .pay_base-input-v2').type('1225') // вводим срок действия карты
        cy.get('.pay-inputs-box > :nth-child(2) > .pay_base-input-v2').type('125') // вводим CVV карты
        cy.get('.pay__input-box-last-of > .pay_base-input-v2').type('Ololosh Loloevich') // вводим имя держателя карты
        cy.get('.pay-btn').click() // нажимаем "Оплатить"
        cy.get('#cardnumber').type('56456')
        cy.get('.payment__submit-button').click() // нажимаем кнопку "Отправить"
        cy.contains('Покупка прошла успешно').should('be.visible')// проверяем наличие и видимость сообщения об успехе

    })

})