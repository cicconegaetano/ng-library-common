import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {TextFieldComponent} from './components/forms/text-field/text-field.component';
import {BtnSubmitComponent} from './components/forms/btn-submit/btn-submit.component';

@NgModule({
  declarations: [
    AppComponent,
    TextFieldComponent,
    BtnSubmitComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
