import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([]), // Empty array for now, will import routes later
    NgbModule
  ],
  providers: [],
  bootstrap: []
})
export class AppModule { }
