describe('Login', function () {
    beforeEach(function () {
    Cypress.on('uncaught:exception', (err, runnable) => {
    return false
    })
    cy.visit('https://bco.catie.ac.cr:8086/login');
    });

    it('Nombre de usuario requerido', function () {
        cy.xpath('/html/body/div[4]/div[1]/div[4]/div[2]/div/div[2]/div[1]/div[2]/div[2]/form/div[5]/input').click().then(function () {
        cy.wait(200)
        cy.get('div[class="validation-summary-errors"]').should('have.text','Login no tuvo exito. Por favor, corrija los errores e intentelo de nuevo.\nNo cuenta encontro\n');
        });
        });
       
    afterEach(function () {
    cy.reload();
    });
    });