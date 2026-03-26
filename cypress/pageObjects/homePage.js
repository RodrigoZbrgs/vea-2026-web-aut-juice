import { BasePage } from "../pageObjects/basePage";

export class HomePage extends BasePage {
  static get url() {
    return "/#/";
  }

  static get dismissButton() {
    return cy.get("[aria-label='Close Welcome Banner']");
  }

  static get meWantItButton() {
    return cy.get("[aria-label='dismiss cookie message']");
  }

  static get accountButton() {
    return cy.get('#navbarAccount');
  }

  static get loginButton() {
    return cy.get('#navbarLoginButton');
  }

  static get userProfileButton() {
    return cy.get(button['aria-label="Go to user profile"']);
  }

  static get searchIcon() {
    return cy.get('#searchQuery');
  }

  static get searchField() {
    return cy.get('#searchQuery input');   
  }

 static get productNames() {
    return cy
      .get('[class="mat-grid-tile ng-star-inserted"]')
      .find('[class="info-box"]');
  }

  static get productBoxInfo() {
    return cy.get('mat-dialog-content .details-row')
  }

  static get closeButton() {
    return cy.get('.close-dialog')
  }

  static get openReview() {
    return cy.get('[class="mat-expansion-indicator ng-star-inserted"]');
  }

  static get reviewInfo() {
    return cy.get('mat-dialog-content .review-row');

  }

  static get addReview(){
    return cy.get('[class="mat-mdc-form-field-infix ng-star-inserted"]');
  }

  static get sumbitReview() {
    return cy.get('xxxx')
  }
}