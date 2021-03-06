import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { Ng2WigModule } from './ng2wig/ng2wig.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    Ng2WigModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
