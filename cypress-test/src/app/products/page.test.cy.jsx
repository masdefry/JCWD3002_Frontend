import ProductsPage from "./page";

describe('<ProductsPage />', () => {
    const mockDataProducts = [
        { id: 1, name: 'Product-01', price: 5000 }, 
        { id: 2, name: 'Product-02', price: 20000 }
    ]

    const interceptGetProducts = () => {
        cy.intercept('GET', 'http://localhost:5000/products',
            {
                statusCode: 200, 
                body: mockDataProducts
            }
        ).as('getProducts')
    }

    beforeEach(() => {
        interceptGetProducts()

        cy.mount(<ProductsPage />)

        cy.wait('@getProducts')
    })

    it('Should display all sections', () => {
        const sections = ['form-section', 'display-section'] 

        sections.forEach((section) => {
            cy.get(`[data-test=${section}]`).should('exist')
        })
    })

    it('[display-section] Should display data like mockDataProducts', () => {
        cy.get('table tbody tr').each((row, index) => {
            cy.wrap(row).within(() => {
              cy.get('td').eq(0).should('contain.text', mockDataProducts[index].name);
              cy.get('td').eq(1).should('contain.text', mockDataProducts[index].price);
            });
        });
    })
})