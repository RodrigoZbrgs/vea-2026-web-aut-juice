import { BuyGirlieTShirt } from '../pageObjects/buyGirlieTShirt';
import { CreateNewAddressPage } from '../pageObjects/createNewAddressPage';
import { HomePage } from '../pageObjects/HomePage';
import { LoginPage } from '../pageObjects/loginPage';
import { ProductCards } from '../pageObjects/productCards';
import { RegistrationPage } from '../pageObjects/registrationPage';
import { SavedPaymentMethodsPage } from '../pageObjects/savedPaymentMethodsPage';

describe('Juice-shop scenarios', () => {
  context('Without auto login', () => {
    beforeEach(() => {
      HomePage.visit();
      HomePage.dismissButton.click();
      HomePage.meWantItButton.click();
    });

    it('Login', () => {
      // Click Account button
      HomePage.accountButton.click();
      // Click Login button
      HomePage.loginButton.click();
      // Set email value to "demo"
      LoginPage.emailField.type('demo');
      // Set password value to "demo"
      LoginPage.passwordField.type('demo');
      // Click Log in
      LoginPage.loginButton.click();
      // Click Account button
      HomePage.accountButton.click();
      // Validate that "demo" account name appears in the menu section
      HomePage.userProfileButton.should('contain.text', 'demo');
    });

    it('Registration', () => {
      HomePage.accountButton.click();
      // Login button
      HomePage.loginButton.click();
      // Click "Not yet a customer?"
      LoginPage.notYetCustomerLink.click();
      // Find - how to generate random number in JS
      // Use that number to genarate unique email address, e.g.: email_7584@ebox.com
      // Save that email address to some variable
      const randomNumber = Math.floor(Math.random() * 10000);
      const email = `email_${randomNumber}@inbox.com`;
      RegistrationPage.emailField.type(email);
      const password='password123'
      // Fill in password field and repeat password field with same password
      RegistrationPage.passwordField.type(password);
      RegistrationPage.repeatPasswordField.type(password);
      // Click on Security Question menu
      RegistrationPage.securityQuestionDropdown.click();
      // Select  "Name of your favorite pet?"
      RegistrationPage.securityQuestionOptions.contains('Name of your favorite pet?').click();
      // Fill in answer
      RegistrationPage.answerField.type('Jack Sparrow')
      // Click Register button
      RegistrationPage.registerButton.click();
      // Set email value to previously created email
      LoginPage.emailField.type(email);
      // Set password value to previously used password value
      LoginPage.passwordField.type(password);
      // Click login button
      LoginPage.loginButton.click();
      // Click Account button
      HomePage.accountButton.click();
      // Validate that account name (with previously created email address) appears in the menu section
      HomePage.userProfileButton.should('contain.text', email);
    });
  });

  context('With auto login', () => {
    beforeEach(() => {
      cy.login('demo', 'demo');
      HomePage.visit();
    });

    it('Search and validate Lemon', () => {
      // Click on search icon
      HomePage.searchIcon.click();
      // Search for Lemon
      HomePage.searchField.type('Lemon{enter}')
      // Select a product card - Lemon Juice (500ml)
      HomePage.productsNames.contains('Lemon Juice (500ml)').click();
      // Validate that the card (should) contains "Sour but full of vitamins."
   HomePage.productboxInfo.should(
    'contain.text',
    'Sour but full of vitamins.'
   );
    });

it('Search 500ml and validate cards', () => {
    // Click on search icon
    HomePage.searchIcon.click();

    // Search for 580ml
    HomePage.searchField.type('500ml{enter}');

    // Select a product card - Eggfruit Juice (500ml)
    HomePage.productNames
        .contains('Eggfruit Juice (500ml)')
        .click();

    // Validate that the card (should) contains "Now with even more exotic flavour."
    HomePage.productBoxInfo.should('contain.text', 'Now with even more exotic flavour.');

    // Close the card
    HomePage.closeButton.click();

    // Select a product card - Lemon Juice (580ml)
    HomePage.productNames
        .contains('Lemon Juice (500ml)')
        .click();

    // Validate that the card (should) contains "Sour but full of vitamins."
    HomePage.productBoxInfo.should('contain.text', 'Sour but full of vitamins.');

    // Close the card
    HomePage.closeButton.click();

    // Select a product card - Strawberry Juice (580ml)
    HomePage.productNames
        .contains('Strawberry Juice (500ml)')
        .click();

    // Validate that the card (should) contains "Sweet & tasty!"
    HomePage.productBoxInfo.should('contain.text', 'Sweet & tasty!');

    // Close the card
    HomePage.closeButton.click();
});

    // Create scenario - Read a review
    it('Read a review', () => {
    // Click on search icon
    HomePage.searchIcon.click();
    // Search for King
    HomePage.searchField.type('King{enter}');
    // Select a product card - OWASP Juice Shop "King of the Hill" Facemask
    HomePage.productNames
        .contains('"King of the Hill" Facemask')
        .click();
    // Click expand reviews button/icon (wait for reviews to appear)
    HomePage.openReview.click();
    // Validate review - K33p5 y0ur ju1cy 5plu773r 70 y0ur53lf!
     HomePage.reviewInfo.should('contain.text', 'K33p5 y0ur ju1cy 5plu773r 70 y0ur53lf!');
    });

    // Create scenario - Add a review
   it('Add a review', () => {
     // Click on search icon
     HomePage.searchIcon.click();
    // Search for Raspberry
     HomePage.searchField.type('Raspberry{enter}');
    // Select a product card - Raspberry Juice (1000ml)
     HomePage.productNames
        .contains('Raspberry Juice (1000ml)')
        .click();
    // Type in review - "Tastes like metal"
    HomePage.addReview
    .click()
    .type("Tastes like metal");
    // Click Submit
    HomePage.submitReview.click();
    // Click expand reviews button/icon (wait for reviews to appear)
    HomePage.openReview.click();
    // Validate review -  "Tastes like metal"
     HomePage.reviewInfo.should('contain.text', 'Tastes like metal');
  });
  

    // Create scenario - Validate product card amount
     it('Validate product card amount', () => {
    // Validate that the default amount of cards is 12
    ProductCards.productCardsCount.should('have.length', 12);
    // Change items per page (at the bottom of page) to 24
    ProductCards.itemsPerPage.click()
    ProductCards.itemsPerPage_24.click()
    // Validate that the amount of cards is 24
     ProductCards.productCardsCount.should('have.length', 24);
    // Change items per page (at the bottom of page) to 36
    ProductCards.itemsPerPage.click()
    ProductCards.itemsPerPage_36.click()
    // Validate that the amount of cards is 36
    ProductCards.productCardsCount.should('have.length', 36);
     });

    // Create scenario - Buy Girlie T-shirt
  it('Buy Girlie T-Shirt', () => {
    // Click on search icon
    HomePage.searchIcon.click();
    // Search for Girlie
    HomePage.searchField.type('Girlie{enter}');
    // Add to basket "Girlie"
    BuyGirlieTShirt.clickAddBasketButton.click();
    // Click on "Your Basket" button
    BuyGirlieTShirt.clickMyBasket.click();
    // Create page object - BasketPage
    // Click on "Checkout" button
    BuyGirlieTShirt.clickCheckOut.click();
    // Create page object - SelectAddressPage
    // Select address containing "United Fakedom"
    BuyGirlieTShirt.selectAddress.click();
    // Click Continue button
    BuyGirlieTShirt.clickContinue.click();
    // Create page object - DeliveryMethodPage
    // Select delivery speed Standard Delivery
    BuyGirlieTShirt.selectDelivery.click();
    // Click Continue button
    BuyGirlieTShirt.clickContinueToPayment.click();
    // Create page object - PaymentOptionsPage
    // Select card that ends with "5678"
    BuyGirlieTShirt.selectCard.click();
    // Click Continue button
    BuyGirlieTShirt.clickContinueToReview.click();
    // Create page object - OrderSummaryPage
    // Click on "Place your order and pay"
    BuyGirlieTShirt.placeOrderAndPay.click();
    // Create page object - OrderCompletionPage
    // Validate confirmation - "Thank you for your purchase!"
    BuyGirlieTShirt.purchaseValidation.should('contain.text', 'Thank you for your purchase!');
  });


    // Create scenario - Add address
    it('Add address', () => {
    // Click on Account
    HomePage.accountButton.click();
    // Click on Orders & Payment
    HomePage.ordersAndPayment.click();
    // Click on My saved addresses
    HomePage.mySavedAddresses.click();
    // Click on Add New Address
    HomePage.addNewAddress.click();
    // Fill in the necessary information
    CreateNewAddressPage.countryField.type('United Fakedom');
    CreateNewAddressPage.nameField.type('Rodrigo Doe');
    CreateNewAddressPage.mobileNumberField.type('1111111111');
    CreateNewAddressPage.zipCodeField.type('666666');
    CreateNewAddressPage.addressField.type('I Dont Know 6');
    CreateNewAddressPage.cityField.type('Dont Know Town');
    CreateNewAddressPage.stateField.type('IDK');
    // Click Submit button
     CreateNewAddressPage.submitButton.click();
    // Validate that previously added address is visible
    cy.contains('United Fakedom').should('be.visible');
    cy.contains('Rodrigo Doe').should('be.visible');
    cy.contains('666666').should('be.visible')
    cy.contains('I Dont Know 6').should('be.visible');
    cy.contains('Dont Know Town').should('be.visible');
    cy.contains('IDK').should('be.visible');

  });
    // Create scenario - Add payment option
  it('Add new payment option', () => {
  // Click on Account
    HomePage.accountButton.click();
    // Click on Orders & Payment
    HomePage.ordersAndPayment.click();
    // Click on My payment options
    HomePage.myPaymentOptions.click();
    // Create page object - SavedPaymentMethodsPage
    // Click Add new card
    SavedPaymentMethodsPage.addNewCardDropdown.click();
    // Fill in Name
    SavedPaymentMethodsPage.nameField.type('Rodrigo Doe');
    // Fill in Card Number
     SavedPaymentMethodsPage.cardNumberField.type('4743766674532111');
    // Set expiry month to 7
    SavedPaymentMethodsPage.expiryMonthField.select('7');
    // Set expiry year to 2090
     SavedPaymentMethodsPage.expiryYearField.select('2090');
    // Click Submit button
    SavedPaymentMethodsPage.submitButton.click();
    // Validate that the card shows up in the list
    cy.contains('************2111').should('be.visible');
    cy.contains('Rodrigo Doe').should('be.visible');
    cy.contains('7/2090').should('be.visible');
  })
  
  });
});
