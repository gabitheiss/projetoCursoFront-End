import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrimeiratelaComponent } from './primeiratela/primeiratela.component';
import { SegundatelaComponent } from './segundatela/segundatela.component';

@NgModule({
  declarations: [
    AppComponent,
    PrimeiratelaComponent,
    SegundatelaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
