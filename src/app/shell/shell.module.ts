import { NgModule } from "@angular/core";

import { ShellComponent } from './shell.component';
import { BpmModule } from './bpm/bpm.module';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { ShellRouting } from './shell-routing.module';

@NgModule({
    declarations: [ShellComponent],
    imports:[CommonModule, ReactiveFormsModule, BpmModule, ShellRouting ]
})

export class ShellModule{}