import { NgModule } from '@angular/core';

import {AuthComponent} from './auth.component';
import {LoginComponent} from './login/login.component';
import {RegisterComponent } from './register/register.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthRoutingModule } from './auth-routing.module';

@NgModule(
    {
       declarations:[ 
            AuthComponent,
            LoginComponent,
            RegisterComponent
       ],
       imports: [ 
           AuthRoutingModule,
           CommonModule,
           ReactiveFormsModule
       ],
       
    }
)

export class AuthModule {}