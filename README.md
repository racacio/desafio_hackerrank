# Payment Validation

## Environment 

- Angular CLI Version: 10.0.4
- Angular Core Version: 10.0.4
- Node Version: v14 (LTS)
- Default Port: 8000

## Application Demo:

![](https://hrcdn.net/s3_pub/istreet-assets/UR29zIvI7qHVSoERGV2z7g/payment-validation.gif)

## Functionality Requirements

The component should perform the following validations in the form:

- The card number input field should pass the following validations:
  - The field is required.
  - It should be a number consisting of exactly 16 digits.
  - In case of an error, an error message should be shown inside `<p data-test-id="number-input-error"></p>`. The error message should be `Invalid Card Number`.

- The cardholder name input field should pass the following validations:
  - The field is required.
  - The name should contain english alphabetic letters only.
  - In case of an error, an error message should be shown inside `<p data-test-id="name-input-error"></p>`. The error message should be `Invalid Cardholder Name`.

- The expiration month input field should pass the following validations:
  - The field is required.
  - It should be a number consisting of exactly 2 digits with numbers in range of 01 to 12. (Denoting January to December)
  - In case of an error, an error message should be shown inside `<p data-test-id="month-input-error"></p>`. The error message should be `Invalid Month`.

- The expiration year input field should pass the following validations:
  - The field is required.
  - It should be an year number consisting of exactly 4 digits, which is greater than or equal to current year and the difference from current year should be maximum 3 years.
  - In case of an error, an error message should be shown inside `<p data-test-id="year-input-error"></p>`. The error message should be `Invalid Year`.

- The cvv/cvc input field should pass the following validations:
  - The field is required.
  - It should be a number consisting of exactly 3 digits.
  - In case of an error, an error message should be shown inside `<p data-test-id="cvv-input-error"></p>`. The error message should be `Invalid CVV/CVC`.

- Validations should trigger when the input is touched for the first time.

- Initially, the submit button should be disabled. When either field is invalid, the submit button should be disabled. 

- When all fields are valid and have been touched, the submit button should be enabled.

- Solve this challenge using reactive forms.

## Testing Requirements

The following data-test-id attributes are required in the component for the tests to pass:

- The card number input: `number-input`
- The cardholder name input: `name-input`
- The expiration month input: `month-input`
- The expiration year input: `year-input`
- The cvv/cvc input: `cvv-input`
- The submit button: `submit-button`
- The `<p>` containing the error message for:
  - the card number input: `number-input-error`
  - the cardholder name input: `name-input-error`
  - the expiration month input: `month-input-error`
  - the expiration year input: `year-input-error`
  - the cvv/cvc input: `cvv-input-error`

Please note that the component has the above data-test-id attributes for test cases and certain classes and ids for rendering purposes. They should not be changed.

## Project Specifications

**Read-only Files**
- src/app/paymentValidation/paymentValidation.component.spec.ts
- src/app/app.component.spec.ts

**Commands**
- run: 
```bash
npm start
```
- install: 
```bash
npm install
```
- test: 
```bash
npm test
```
