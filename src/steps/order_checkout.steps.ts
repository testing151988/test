import { Given, When, Then } from '@wdio/cucumber-framework';
import LoginPage from '../page-objects/pages/LoginPage';
import ProductPage from '../page-objects/pages/ProductPage';
import CartOverviewPage from '../page-objects/pages//CartOverviewPage';
import CheckoutInfoPage from '../page-objects/pages//CheckoutInfoPage';
import OrderSummaryPage from '../page-objects/pages//OrderSummaryPage';
import expect from mocha;

Given('I am on the SauceDemo authentication page', async () => {
    await LoginPage.open();
});

When('I authenticate using valid credentials', async () => {
    await LoginPage.login();
    expect(await browser.getUrl()).to.include('inventory.html');
});

When('I select the first product and add it to the cart', async () => {
    await ProductPage.addFirstProductToCart();
    expect(await ProductPage.cartBadgeIcon.getText()).to.equal('1');
});

When('I navigate to the cart overview and proceed to checkout', async () => {
    await ProductPage.navigateToCart();
    await CartOverviewPage.proceedToCheckout();
});

When('I provide the required customer information', async () => {
    await CheckoutInfoPage.enterCustomerDetails('Prema', 'Mehra', '12345');
});

When('I finalize the order', async () => {
    await OrderSummaryPage.completeOrder();
});

Then('I should see the confirmation message {string}', async (message) => {
    const confirmationMessage = await OrderSummaryPage.getConfirmationMessage();
    expect(confirmationMessage).to.equal(message);
});