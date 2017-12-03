import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {QRCodeModule} from 'angular2-qrcode';
import {RouterModule, Routes} from '@angular/router';

const appRoutes: Routes = [
  { path: '**', component: BrowserModule }
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    QRCodeModule,
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
