class OrderSummaryPage {
    get buttonFinishOrder() { return $('#finish'); }
    get messageConfirmation() { return $('.complete-header'); }

    async completeOrder() {
        await this.buttonFinishOrder.click();
    }

    async getConfirmationMessage(): Promise<string> {
        return await this.messageConfirmation.getText();
    }
}
export default new OrderSummaryPage();