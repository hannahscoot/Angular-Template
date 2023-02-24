import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DemoPageComponent } from './demo-page/demo-page.component';
import { StoreModule } from '@ngrx/store';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    DemoPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({}, {})
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [
  ]
})
export class AppModule { }
