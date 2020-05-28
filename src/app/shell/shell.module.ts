import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ShellComponent } from './shell.component';
import { ShellRoutingModule } from './shell-routing.module';
import { BpmModule } from './bpm/bpm.module';


@NgModule({
    declarations: [
        ShellComponent
    ],
    imports: [
        CommonModule,
        RouterModule,
        ShellRoutingModule,
        BpmModule
    ]
})
export class ShellModule { }
