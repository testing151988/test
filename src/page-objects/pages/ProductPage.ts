class ProductPage {
    get buttonAddFirstProduct() { return $('.inventory_item:first-child .btn_inventory'); }
    get cartBadgeIcon() { return $('.shopping_cart_badge'); }
    get linkCart() { return $('.shopping_cart_link'); }

    async addFirstProductToCart() {
        await this.buttonAddFirstProduct.click();
    }

    async navigateToCart() {
        await this.linkCart.click();
    }
}
export default new ProductPage();