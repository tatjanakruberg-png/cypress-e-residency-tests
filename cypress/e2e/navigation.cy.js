/// <reference types="cypress" />


describe('Why e-Residency? menu', () => {

  beforeEach(() => {

    cy.viewport(1280, 800);

    // Veebilehel esineb aeg-ajalt Reacti hüdratsiooniviga (#418),
    // mis ei ole seotud testitava funktsionaalsusega. Ilma selle
    // erandi käsitlemiseta lõpetaks Cypress testi töötlemata erandi tõttu
    // enne, kui kontrollid (assertions) jõuavad käivituda.
    cy.on('uncaught:exception', (err) => {
      if (err.message.includes('Minified React error #418')) {
        return false;
      } 

    });


    cy.visit('/');

    // Suletakse küpsiste bänner, nõustudes küpsiste kasutamisega.

    cy.get('[data-cky-tag="accept-button"]', { timeout: 10000 }).click();    

    cy.wait(500);
  });

  it('Opens the "Why e-Residency?" dropdown when clicked and then opens submenu', () => {    
    // Leitakse nähtav menüüpunkt "Why e-Residency?" 
    // ja salvestatakse selle nupp aliasesse whyMenuButton.

    cy.get('[data-testid="header-menu-item"]:visible')
      .contains('Why e-Residency?')
      .closest('button')
      .as('whyMenuButton');

    // Kontrollitakse, et menüü on enne sellega suhtlemist suletud.
    cy.get('@whyMenuButton').should('have.attr', 'aria-expanded', 'false');

    // Vajutakse nupule, et avada rippmenüü. 
    cy.get('@whyMenuButton').click();

    // Kontrollitakse, et rippmenüü avanes
    cy.get('@whyMenuButton').should('have.attr', 'aria-expanded', 'true');

    
    // Vajutakse avatud alammenüüs oleval lingil.
    cy.get('[data-testid="header-submenu"]')
      .contains('a', 'Ease of doing business')
      .click();
 
    // Kontrollitakse, et navigeerimine toimus edukalt.
    cy.url().should('include', '/make-business-easy-at-every-stage/');
     });  


});