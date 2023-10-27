describe('Agregar a Carrito de compras', function () {
    beforeEach(function () {
        Cypress.on('uncaught:exception', (err, runnable) => {
            return false
        })
        cy.viewport(1920, 1080)
        cy.visit('https://www.decasa.cr/producto/adorno-elefante-dorado-4/');
        cy.wait(200);
    });

    it('Agregar al carrito', function () {
        cy.get('.single_add_to_cart_button').click();
        cy.wait(400);
        cy.get('.mini-cart-counter').should('have.text', '1');

    });
    afterEach(function () {
        cy.reload();

    });

});

describe('Carrito de compras funciones', function () {
    beforeEach(function () {
        Cypress.on('uncaught:exception', (err, runnable) => {
            return false
        })
        cy.viewport(1920, 1080)
        cy.visit('https://www.decasa.cr/producto/adorno-elefante-dorado-4/');
        cy.wait(200);
        cy.get('.single_add_to_cart_button').click();
        cy.wait(400);
    });

    it('Eliminar del carrito', function () {
        cy.get('div[class="menu-extra"]').find('ul').find('li').find('a').contains('1').click();
        cy.wait(200);
        cy.xpath('/html/body/div[1]/div[4]/div/div/div/main/article/div/div/form/table/tbody/tr[1]/td[6]/a').click();
        cy.wait(200);
        cy.get('div.woocommerce-notices-wrapper').find('p').should('have.text', 'Tu carrito está vacío.');
    });

    it('ir a pagar ', function (){

        cy.get('div[class="menu-extra"]').find('ul').find('li').find('a').contains('1').click();
        cy.wait(200);
        cy.get('div[class="wc-proceed-to-checkout"]').find('a').contains('Pagar').click()
        cy.wait(200);
        cy.get('h1').should('have.text', 'Pago');

      })

    it('Actualizar cantidad', function () {
        cy.get('div[class="menu-extra"]').find('ul').find('li').find('a').contains('1').click();
        cy.wait(200);
        cy.get('input[type="number"]').clear().type('2');
        cy.wait(200);
        cy.xpath('/html/body/div[1]/div[4]/div/div/div/main/article/div/div/form/table/tbody/tr[2]/td/input[1]').click().then(() => {
            cy.wait(200);
            cy.xpath('/html/body/div[1]/div[4]/div/div/div/main/article/div/div/form/table/tbody/tr[1]/td[5]/span/bdi').should('have.text', '₡50,200');

        });

    });

    afterEach(function () {
        cy.reload();

    });
    

});