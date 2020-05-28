import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { BGValidators } from './bg-validators';
import { Subscription } from 'rxjs';

@Component({
  selector: 'bg-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'lectures-app';
  projectForm: FormGroup;
  sub: Subscription;

  ngOnInit() {
    this.initForm();
    this.sub = this.projectForm.statusChanges.subscribe(console.log); // დავალება არ იყო, ისე, სატესტოდ ვცადე
  }

  initForm() {
    this.projectForm = new FormGroup({
      projectName: new FormControl(undefined, [BGValidators.required, BGValidators.testName]),
      email: new FormControl(undefined, [BGValidators.required, BGValidators.email], [BGValidators.testEmail]),
      status: new FormControl('სტაბილური')
    });
  }

  get(control) {
    return this.projectForm.get(control);
  }

  errors(controlName) {
    return Object.values(this.get(controlName).errors);
  }

  onSubmit() {
    console.log(this.projectForm.value);
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
