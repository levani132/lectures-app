import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { ShellComponent } from './shell.component';

const routes: Routes = [
    {
        path: '',
        component: ShellComponent
    }
]


@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class ShellRouting{}