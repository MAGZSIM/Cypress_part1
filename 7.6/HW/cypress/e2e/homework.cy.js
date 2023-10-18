describe('application testing', () => {
  beforeEach(() => {cy.visit('/')})
  it('loading page', () => {
    
    cy.contains('Books list').should('be.visible')
    cy.get('button').contains('Log in').should('be.visible')
  })
  it('shold login with valid email and password', () => {
    cy.login('test@test.com', 'test')
    cy.contains('Добро пожаловать test@test.com').should('be.visible')
  })
  it('shold login with empty mail', () => {
    cy.login(null, 'test')
    cy.get('#mail').then((elements) => {
      expect(elements[0].checkValidity()).to.be.false
      expect(elements[0].validationMessage).to.be.eql('Заполните это поле.')
    })
  })
  it('shold login with empty password', () => {
    cy.login('test@test.com', null)
    cy.get('#pass').then((elements) => {
      expect(elements[0].checkValidity()).to.be.false
      expect(elements[0].validationMessage).to.be.eql('Заполните это поле.')
    })
  })

context('favorite testing', () => {
  it('favorite page', () => {
    cy.viewport('macbook-16')
    cy.login('test@test.com', 'test')
    cy.contains('Favorites').click()
    cy.contains('Please add some book to favorit on home page!').should('be.visible')
  })
  it('back to homepage', () => {
    cy.viewport(720,1280)
    cy.login('test@test.com', 'test')
    cy.contains('Favorites').click()
    cy.contains('Please add some book to favorit on home page!').click()
    cy.contains('Добро пожаловать test@test.com').should('be.visible')
  })
  it('add book', () => {
    cy.login('test@test.com', 'test')
    cy.contains('Add new').click()
    cy.get('#title').type('Hackers')
    cy.get('#description').type('Ethnogenesis project')
    cy.get('#authors').type('Alexander Chubaryan')
    cy.get('#favorite').check()
    cy.contains('Submit').click()
    cy.contains('Favorites').click()
    cy.contains('Hackers').should('be.visible')
    cy.contains('Delete from favorite').click()
    cy.contains('Please add some book to favorit on home page!').should('be.visible')
  })
})
})