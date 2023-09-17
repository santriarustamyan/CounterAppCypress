export class CounterPage {

    navigateCounterPage() {
        cy.visit('http://localhost:3000/')
    }

    clickPlusButton() {
        cy.get("#app > :nth-child(3)").click()
    }

    clickMinusButton() {
        cy.get("#app > :nth-child(5)").click()
    }

    clickResetButton() {
        cy.get("#app > :nth-child(4)").click()
    }

    assertCurrentCounterNumber(i) {
        cy.get("#app > h2").should('have.text', " " + i + " ")
    }
}
