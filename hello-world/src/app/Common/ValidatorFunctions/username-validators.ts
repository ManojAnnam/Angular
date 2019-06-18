import { AbstractControl, ValidationErrors } from "@angular/forms";

export class UsernameValidators {
  static cannotContainSpace(control: AbstractControl): ValidationErrors | null {
    if ((control.value as string).indexOf(" ") >= 0) {
      return { cannotContainSpace: true };
    }
    return null;
  }

  static shouldBeUnique(
    control: AbstractControl
  ): Promise<ValidationErrors | null> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (control.value === "manoj") resolve({ shouldBeUnique: true });
        else resolve(null);
      }, 2000);
    });
  }

  static invalidOldPassword(
    control: AbstractControl
  ): Promise<ValidationErrors | null> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (control.value !== "1234") resolve({ invalidOldPassword: true });
        else resolve(null);
      }, 1000);
    });
  }

  static passwordsShouldMatch(
    control: AbstractControl
  ): ValidationErrors | null {
    let newPassword = control.get("newPassword");
    let confirmPassword = control.get("confirmPassword");
    if (newPassword.value !== confirmPassword.value) {
      return {
        passwordsShouldMatch: true
      };
    }
    return null;
  }
}
