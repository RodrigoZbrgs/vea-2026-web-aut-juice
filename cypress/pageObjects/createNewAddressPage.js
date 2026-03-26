import { BasePage } from "./basePage";

export class CreateNewAddressPage extends BasePage {
  static get url() {
    return "/#/";
  }

static get countryField() {
    return cy.get('#mat-input-2');
}

static get nameField() {
    return cy.get('#mat-input-3');
}

static get mobileNumberField() {
    return cy.get('#mat-input-4');
}

static get zipCodeField() {
    return cy.get('#mat-input-5');
}

static get addressField() {
    return cy.get('#address');
}

static get cityField() {
    return cy.get('#mat-input-7');
}

static get stateField() {
    return cy.get('#mat-input-8');
}

static get submitButton() {
    return cy.get('#submitButton');
}

static get savedAddress() {
    return cy.get('.cdk-row');
}
  
}