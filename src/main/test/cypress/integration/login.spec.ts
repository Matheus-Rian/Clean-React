import faker from 'faker'

describe('Login', () => {
  beforeEach(() => {
    cy.visit('login')
  })

  it('Should load with correct initial state', () => {
    cy.getByTestId('email').should('have.attr', 'readOnly')
    cy.getByTestId('email-status')
      .should('have.attr', 'title', 'Campo Obrigatório')
      .should('contain.text', '🔴')

    cy.getByTestId('password').should('have.attr', 'readOnly')
    cy.getByTestId('password-status')
      .should('have.attr', 'title', 'Campo Obrigatório')
      .should('contain.text', '🔴')

    cy.getByTestId('submit').should('have.attr', 'disabled')
    cy.getByTestId('error-wrap').should('not.have.descendants')
  })

  it('Should present error if form is invalid', () => {
    cy.getByTestId('email').focus().type(faker.random.word())
    cy.getByTestId('email-status')
      .should('have.attr', 'title', 'Valor inválido')
      .should('contain.text', '🔴')

    cy.getByTestId('password').focus().type(faker.random.alphaNumeric(4))
    cy.getByTestId('password-status')
      .should('have.attr', 'title', 'Valor inválido')
      .should('contain.text', '🔴')

    cy.getByTestId('submit').should('have.attr', 'disabled')
    cy.getByTestId('error-wrap').should('not.have.descendants')
  })

  it('Should present valid state if form is valid', () => {
    cy.getByTestId('email').focus().type(faker.internet.email())
    cy.getByTestId('email-status')
      .should('have.attr', 'title', 'Tudo certo')
      .should('contain.text', '🟢')

    cy.getByTestId('password').focus().type(faker.random.alphaNumeric(6))
    cy.getByTestId('password-status')
      .should('have.attr', 'title', 'Tudo certo')
      .should('contain.text', '🟢')

    cy.getByTestId('submit').should('not.have.attr', 'disabled')
    cy.getByTestId('error-wrap').should('not.have.descendants')
  })
})
