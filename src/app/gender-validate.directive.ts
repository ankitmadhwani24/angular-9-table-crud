import { Directive } from '@angular/core';
import { Validator, NG_VALIDATORS, FormControl} from '@angular/forms';

@Directive({
  selector: '[gender]',
  providers: [
    { provide: NG_VALIDATORS, useExisting: GenderValidateDirective, multi: true }
  ]
})
export class GenderValidateDirective implements Validator {

  constructor() { }

  validate(formControl: FormControl) {
    console.log(formControl.value);
    let value = (formControl.value);
    let errorStatus = (value.toLowerCase() === 'male' || value.toLowerCase() === 'female') ? { 'genderError': false} : { 'genderError': true } 
    return errorStatus;
  }
}
