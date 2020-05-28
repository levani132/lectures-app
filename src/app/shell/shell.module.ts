import { NgModule } from '@angular/core';

import { ShellComponent } from './shell.component';
import { BpmModule } from './bpm/bpm.module';
import { ShellRoutingModule } from './shell-routing.module';

@NgModule({
  declarations: [ShellComponent],
  imports: [BpmModule, ShellRoutingModule],
})
export class ShellModule {}
