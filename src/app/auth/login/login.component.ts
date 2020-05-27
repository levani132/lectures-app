import {
  Component,
  OnInit,
  ComponentFactoryResolver,
  ViewChild,
  OnDestroy,
} from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

import { Validators } from 'src/app/shared/validators';
import { AuthService } from 'src/app/shared/auth/auth.service';
import { AlertComponent } from '../../shared/alert/alert.component';
import { PlaceholderDirective } from 'src/app/shared/placeholder.directive';

@Component({
  selector: 'bg-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit, OnDestroy {
  form: FormGroup;
  closeSub: Subscription;

  @ViewChild(PlaceholderDirective) alertPlaceholder: PlaceholderDirective;

  constructor(
    private authService: AuthService,
    private router: Router,
    private cfr: ComponentFactoryResolver
  ) {}

  ngOnInit() {
    this.initForm();
  }

  ngOnDestroy() {
    if (this.closeSub) {
      this.closeSub.unsubscribe();
    }
  }

  onLogin() {
    if (this.form.invalid) {
      return;
    }
    const username = this.get('username').value;
    const password = this.get('password').value;
    this.authService.login(username, password).subscribe(
      (resData) => {
        console.log(resData);
        this.router.navigate(['/']);
        this.form.reset();
      },
      (error) => {
        this.showError(error);
      }
    );
  }

  get(controlName) {
    return this.form.get(controlName);
  }

  errors(controlName) {
    return this.get(controlName)?.errors
      ? Object.values(this.get(controlName).errors)
      : [];
  }

  initForm() {
    this.form = new FormGroup({
      username: new FormControl(undefined, [
        Validators.required,
        Validators.pattern(/^\S*$/, 'სფეისების გარეშე'),
        Validators.minLength(2),
        Validators.maxLength(30),
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(30),
      ]),
    });
  }

  private showError(error: string) {
    const alertComponentFactory = this.cfr.resolveComponentFactory(
      AlertComponent
    );
    this.alertPlaceholder.viewContainerRef.clear();
    const alertRef = this.alertPlaceholder.viewContainerRef.createComponent(
      alertComponentFactory
    );
    alertRef.instance.error = error;
    this.closeSub = alertRef.instance.closeClick.subscribe(() => {
      this.closeSub.unsubscribe();
      this.alertPlaceholder.viewContainerRef.clear();
    });
  }
}
