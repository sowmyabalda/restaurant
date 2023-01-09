import App from '../../src/App';

describe('App.cy.js', () => {
  it('check if App has div', () => {
    cy.mount(<App />)
  })
})