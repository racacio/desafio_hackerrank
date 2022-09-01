import {Component, OnInit} from '@angular/core';
import {FormGroup, FormBuilder, Validators, AbstractControl, ValidatorFn, ValidationErrors} from '@angular/forms';
import {formatCardNumber, formatCVV, formatExpiryDate, formatMonth} from "./utils";

@Component({
  selector: 'payment-validation',
  templateUrl: './paymentValidation.component.html',
  styleUrls: ['./paymentValidation.component.scss']
})

export class PaymentValidation {
  cardForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.createForm();
  }

  createForm() {
    this.cardForm = this.fb.group({
      number: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
      name: ['', [Validators.required, Validators.pattern('^[a-zA-Z ]+$')]],
      month: ['', Validators.compose([Validators.required, this.validateMonth()])],
      year: ['', Validators.compose([Validators.required, this.validateYear()])],
      cvv: ['', [Validators.required]],
    });
  }

  get formCtrls(){
    return this.cardForm.controls;
  }

  get cardNumber() {
    return formatCardNumber(this.cardForm.controls['number'].value)
  }

  get cardExpiryMonth() {
    return formatMonth(this.cardForm.controls['month'].value)
  }

  get cardExpiryYear() {
    return formatExpiryDate(this.cardForm.controls['year'].value)
  }

  get cardHolderName() {
    return this.cardForm.controls['name'].value || 'Card Holder Name'
  }

  get cardCvv() {
    return formatCVV(this.cardForm.controls['cvv'].value)
  }

  onSubmit(){
    alert("submit");
  }

  validateMonth(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } => {
      if (!control.value) {
        return null;
      }
      const valid = parseInt(control.value);
      return (!isNaN(valid) && (valid >= 1 && valid <= 12)) ? null : { invalidMonth: true };
    };
  }

  validateYear(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } => {
      if (!control.value) {
        return null;
      }
      const year = parseInt(control.value);
      if (isNaN(year)) {
        return { invalidYear: true };
      } else {
        const today = new Date();
        const yearAct = today.getFullYear();
        const valid = (year - yearAct);
        return ((valid >= 0) && (valid <= 3)) ? null : { invalidYear: true };
      }
    };
  }
}
