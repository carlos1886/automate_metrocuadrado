describe("realizacion prueba pagina metrocuadrado con get", () => {
  it("visita a la pagina metrocuadrado", () => {
    cy.visit("https://www.metrocuadrado.com");
    cy.metrocuadrado()
  });
});