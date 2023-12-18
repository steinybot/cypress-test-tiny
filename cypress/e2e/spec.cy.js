/// <reference types="cypress" />
describe('page', () => {
    it('works', () => {
        const makeRequest = true;

        cy.intercept(
            {
                method: "POST",
                url: "/route",
            },
            cy.spy().as("request")
        ).as("intercept");

        const click = () => {
            if (makeRequest) {
                fetch(
                    "/route",
                    {
                        method: "POST",
                        body: "{'a': 1}",
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

        // cy.get("@request").should("have.been.called");
        cy.get("@request", { timeout: 0 }).should("not.have.been.called");
    })
})
