import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { UsernameValidators } from "../Common/ValidatorFunctions/username-validators";

@Component({
  selector: "app-password-change",
  templateUrl: "./password-change.component.html",
  styleUrls: ["./password-change.component.css"]
})
export class PasswordChangeComponent implements OnInit {
  form: FormGroup;
  constructor(fb: FormBuilder) {
    this.form = fb.group(
      {
        oldPassword: [
          "",
          Validators.required,
          UsernameValidators.invalidOldPassword
        ],
        newPassword: ["", Validators.required],
        confirmPassword: ["", Validators.required]
      },
      {
        validator: UsernameValidators.passwordsShouldMatch
      }
    );
  }

  ngOnInit() {}

  get oldPassword() {
    return this.form.get("oldPassword");
  }

  get newPassword() {
    return this.form.get("newPassword");
  }

  get confirmPassword() {
    return this.form.get("confirmPassword");
  }
}
