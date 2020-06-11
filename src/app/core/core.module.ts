import {NgModule} from '@angular/core';
import {UsersService} from './services/users.service';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [],
  imports: [
    HttpClientModule
  ],
  providers: [
    UsersService
  ]
})
export class CoreModule {
}


