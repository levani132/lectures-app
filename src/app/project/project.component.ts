import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { BGValidators } from '../bg-validators';

@Component({
  selector: 'bg-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {
  projectForm: FormGroup;
  statuses = ['სტაბილური', 'კრიტიკული', 'დასრულებული'];

  constructor() { }

  ngOnInit(): void {
    this.projectForm = new FormGroup({
      'name': new FormControl(null, [BGValidators.required, BGValidators.forbiddenName]),
      'email': new FormControl(null, [BGValidators.required, BGValidators.email], BGValidators.forbiddenEmail),
      'status': new FormControl(null)
    })
  }

  onSubmit() {
    console.log(this.projectForm);
  }
}
