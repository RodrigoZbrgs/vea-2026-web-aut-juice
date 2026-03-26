import { BasePage } from "./basePage";

export class BuyGirlieTShirt extends BasePage {
  static get url() {
    return "/#/";
  }

static get clickAddBasketButton(){
    return cy.get('[aria-label="Add to Basket"]');
  }

  static get clickMyBasket(){
    return cy.get('[aria-label="Show the shopping cart"]');
  }

  static get clickCheckOut(){
    return cy.get('#checkoutButton');
  }

  static get selectAddress() {
    return cy.get('#mat-radio-42-input');
  }
  static get clickContinue() {
    return cy.get('[aria-label="Proceed to payment selection"]');
  }

  static get selectDelivery(){
  return cy.get('#mat-radio-43-input');
  }

  static get clickContinueToPayment(){
    return cy.get('[aria-label="Proceed to delivery method selection"]');
  }
  static get selectCard(){
   return cy.get('#mat-radio-46-input');
  }

  static get clickContinueToReview(){
   return cy.get('[aria-label="Proceed to review"]');
  }

  static get placeOrderAndPay(){
   return cy.get('[aria-label="Complete your purchase"]');
  }

  static get purchaseValidation(){
    return cy.get('[class="confirmation"]');
  }

}