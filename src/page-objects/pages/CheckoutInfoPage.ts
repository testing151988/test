class CheckoutInfoPage {
    get inputFirstName() { return $('#first-name'); }
    get inputLastName() { return $('#last-name'); }
    get inputPostalCode() { return $('#postal-code'); }
    get buttonContinue() { return $('#continue'); }

    async enterCustomerDetails(firstName: string, lastName: string, postalCode: string) {
        await this.inputFirstName.setValue(firstName);
        await this.inputLastName.setValue(lastName);
        await this.inputPostalCode.setValue(postalCode);
        await this.buttonContinue.click();
    }
}
export default new CheckoutInfoPage();