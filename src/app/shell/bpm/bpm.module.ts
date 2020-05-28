import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { BpmComponent } from './bpm.component';
import { Bpm000Component } from './bpm000/bpm000.component';
import { Bpm001Component } from './bpm001/bpm001.component';
import { BpmRoutingModule } from './bpm-routing.module';

@NgModule({
  declarations: [BpmComponent, Bpm000Component, Bpm001Component],
  imports: [BpmRoutingModule, CommonModule, ReactiveFormsModule],
})
export class BpmModule {}
