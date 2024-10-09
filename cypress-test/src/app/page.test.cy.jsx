import HomePage from './page';

describe('<HomePage />', () => {
    beforeEach(() => {
        cy.mount(<HomePage />)
    })

    it('Should render h1', () => {
        cy.get('h1').contains('Welcome to Home')
    })
})