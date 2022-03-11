export default class metrocuadrado {
  static tipoinmueble() {
    return cy.get("#propertyTypes > .m2-select__control > .m2-select__value-container"
    )
  }
  static aptos() {
    return cy.visit('https://www.metrocuadrado.com/apartamento/venta/')
  }
  static proyectos(){
    return cy.visit('https://www.metrocuadrado.com/apartamento/venta/usado/apartamento/')
  }
  static sitio(){
    return cy.get('.Input-wun2o8-0')
  }
  static buscar(){
    return cy.get('#btnSearch')
  }
  static apto1(){
    return cy.get(':nth-child(3) > .sc-jqCOkK > :nth-child(1) > :nth-child(2) > .card-header > .sc-bdVaJa > .sc-dxgOiQ > div')
  }
  static apto2(){
    return cy.get(':nth-child(4) > .sc-jqCOkK > :nth-child(1) > :nth-child(2) > .card-header > .sc-bdVaJa > .sc-dxgOiQ > div')
  }
  static apto3(){
    return cy.get(':nth-child(7) > .sc-jqCOkK > :nth-child(1) > :nth-child(2) > .card-header > .sc-bdVaJa > .sc-dxgOiQ > div')
  }
  static apto4(){
    return cy.get(':nth-child(9) > .sc-jqCOkK > :nth-child(1) > :nth-child(2) > .card-header > .sc-bdVaJa > .sc-dxgOiQ > div')
  }
  static apto5(){
    return cy.get(':nth-child(11) > .sc-jqCOkK > :nth-child(1) > :nth-child(2) > .card-header > .sc-bdVaJa > .sc-dxgOiQ > div')
  }
}
