import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ShellComponent } from './shell.component';
import { BpmModule } from './bpm/bpm.module';
import { ShellRoutingModule } from './shell-routing.module';

@NgModule({
  declarations: [ShellComponent],
  imports: [CommonModule, ReactiveFormsModule, FormsModule, BpmModule, ShellRoutingModule],
})
export class ShellModule {}
