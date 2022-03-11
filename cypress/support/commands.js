import "@testing-library/cypress/add-commands";
import metrocuadrado from "../pageObjects/metrocuadrado";
Cypress.Commands.add("metrocuadrado", () => {
  metrocuadrado.tipoinmueble().click()
  metrocuadrado.aptos()
  metrocuadrado.proyectos()
  metrocuadrado.sitio().type('chia').click()
  metrocuadrado.buscar().click()
  metrocuadrado.apto1().click()
  cy.wait
  metrocuadrado.apto2().click()
  metrocuadrado.apto3().click()
  metrocuadrado.apto4().click()
  cy.wait
  metrocuadrado.apto5().click()

});
