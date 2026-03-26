import { BasePage } from "./basePage";

export class SavedPaymentMethodsPage extends BasePage {
  static get url() {
    return "/#/";
  }

static get addNewCardDropdown() {
    return cy.get('#mat-expansion-panel-header-0');
}

static get nameField() {
    return cy.get('#mat-input-2');
}

static get cardNumberField() {
    return cy.get('#mat-input-3');
}

static get expiryMonthField() {
    return cy.get('#mat-input-4');
}

static get expiryYearField() {
    return cy.get('#mat-input-5');
}

static get submitButton() {
    return cy.get('#submitButton');
}

static get paymentOption() {
    return cy.get('.cdk-row');
}
}