Feature: order-checkout

  Scenario: Successfully complete the checkout process
    Given I am on the SauceDemo authentication page
    When I authenticate using valid credentials
    And I select the first product and add it to the cart
    And I navigate to the cart overview and proceed to checkout
    And I provide the required customer information
    And I finalize the order
    Then I should see the confirmation message "THANK YOU FOR YOUR ORDER!"z