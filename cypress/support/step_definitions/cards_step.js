const { Given, And, Then } = require('cypress-cucumber-preprocessor/steps')

const baseUrl = Cypress.env('baseUrl')

Given('que eu acesse a home da aplicação', () => {
  cy.visit(baseUrl)
})

And('clique em uma determinada pipeline', () => {
  cy.get('article').first().click()
})

Then('eu estarei apto a visualizar os primeiros três cards daquela pipeline', () => {
  cy.get('.modal-cards').find('a').should(($a) => {
    expect($a).to.have.length(3)
  })
})
