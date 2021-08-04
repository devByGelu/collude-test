import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';
import { MatSliderModule } from '@angular/material/slider';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ChoicesComponent } from './choices/choices.component';
import { GenderChooserComponent } from './gender-chooser/gender-chooser.component';
import { StoreModule } from '@ngrx/store';
import { GenderOptionsReducer } from './store/reducers/genderOption.reducer';
import { reducers } from './store/reducers/index';

@NgModule({
  declarations: [
    AppComponent,
    ProgressBarComponent,
    ChoicesComponent,
    GenderChooserComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatButtonModule,
    MatIconModule,
    StoreModule.forRoot(reducers),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
