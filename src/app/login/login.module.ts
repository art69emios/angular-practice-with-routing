import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogComponent } from './moderator/log.component';
import { LogRoutingModule } from './login.routing.module';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    LogComponent
  ],
  imports: [
    CommonModule,
    LogRoutingModule,
    FormsModule
  ]
})
export class LoginModule { }
