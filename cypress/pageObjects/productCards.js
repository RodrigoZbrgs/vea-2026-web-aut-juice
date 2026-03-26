import { BasePage } from "./basePage";

export class ProductCards extends BasePage {
  static get url() {
    return "/#/";
  }

static get productCardsCount() {
    return cy.get('mat-card');
}

  static get itemsPerPage(){
    return cy.get('[class="mat-mdc-paginator-touch-target"]');
  }

  static get itemsPerPage_24(){
    return cy.get('#mat-option-1');
  }

  static get itemsPerPage_36(){
    return cy.get('#mat-option-2');
  }
}