// describe('Agregar a Carrito de compras', function () {
//     beforeEach(function () {
//         Cypress.on('uncaught:exception', (err, runnable) => {
//             return false
//         })
//         cy.viewport(1920, 1080)
//         cy.visit('https://www.decasa.cr/producto/adorno-elefante-dorado-4/');
//         cy.wait(200);
//     });

//     it('Agregar al carrito', function () {
//         cy.get('.single_add_to_cart_button').click();
//         cy.wait(200);
//         cy.get('.mini-cart-counter').should('have.text', '1');

//     });
// });

describe('Eliminar de Carrito de compras', function () {
    beforeEach(function () {
        Cypress.on('uncaught:exception', (err, runnable) => {
            return false
        })
        cy.viewport(1920, 1080)
        cy.visit('https://www.decasa.cr/producto/adorno-elefante-dorado-4/');
        cy.wait(200);
        cy.get('.single_add_to_cart_button').click();
        cy.wait(200);
    });

    it('Eliminar del carrito', function () {
        cy.get('div[class="menu-extra"]')
        cy.wait(200);

    });
});