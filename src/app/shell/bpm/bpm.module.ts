import { NgModule } from '@angular/core';

import { BpmComponent } from './bpm.component';
import { Bpm000Component } from './bpm000/bpm000.component';
import { Bpm001Component } from './bpm001/bpm001.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [BpmComponent, Bpm000Component, Bpm001Component],
  imports: [RouterModule, CommonModule, ReactiveFormsModule],
  exports: [BpmComponent, Bpm000Component, Bpm001Component],
})
export class BpmModule {}
