import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NzCardModule, NgZorroAntdModule, NZ_I18N, en_US } from 'ng-zorro-antd';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { registerLocaleData } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import en from '@angular/common/locales/en';
import { WeatherReportComponent } from './weather-report/weather-report.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    WeatherReportComponent,
    HeaderComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgZorroAntdModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NzCardModule,
    ReactiveFormsModule,
  ],
  providers: [{ provide: NZ_I18N, useValue: en_US }],
  bootstrap: [AppComponent]
})
export class AppModule { }
