/// <reference types="cypress" />
describe('page', () => {
    it('works', () => {
        const makeRequest = true;

        cy.intercept(
            {
                method: "POST",
                url: "/test",
            },
            (request) => {
                request.alias = JSON.parse(request.body).name
            }
        )

        const click = () => {
            if (makeRequest) {
                fetch(
                    "/test",
                    {
                        method: "POST",
                        body: '{ "name": "foo" }',
                    });
            }
        };

        cy.get('body').then((body) => {
            const button = document.createElement("button")
            button.id = "test-button"
            button.textContent = "Test"
            button.addEventListener("click", click)
            body[0].appendChild(button)
        })

        cy.get('#test-button').click()

        cy.wait("@foo").should("exist");
    })
})
