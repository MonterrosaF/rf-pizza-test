import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { BlockUIModule } from 'ng-block-ui';

@NgModule({
  declarations: [LoginComponent],
  imports: [CommonModule, LoginRoutingModule, BlockUIModule.forRoot()],
})
export class LoginModule {}
