class CartOverviewPage {
    get buttonCheckout() { return $('#checkout'); }

    async proceedToCheckout() {
        await this.buttonCheckout.click();
    }
}
export default new CartOverviewPage();