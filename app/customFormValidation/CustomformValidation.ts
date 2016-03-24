import {Control} from "angular2/common";

interface ValidationResult {
  [key: string]: boolean;
}

export class CustomFromValidation {

  static isStartWithNumber(control: Control): ValidationResult {
    if (control.value !== "" && !isNaN(control.value.charAt(0))) {
       return  { "isStartWithNumber" : true };
    }
    return null;
  }
  static EmailValidation(control: Control): ValidationResult {
    let pattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
    if (control.value !== "" && !control.value.match(pattern)) {
      return { "EmailValidation" :  true };
    }
    return null;
  }
  // static PriceValidation(control: Control): ValidationResult {
  //   let pattern = /^\d{1,45}$/;
  //   if (control.value !== "" && control.value.match(pattern)) {
  //     return { "PriceValidation" :  true };
  //   }
  //   return null;
  // }
}
