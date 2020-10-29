import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './shared/components/home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NinitizerPipe } from './pipes/ninitizer.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NinitizerPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
