import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { DeadlineTimerComponent } from './components/deadline-timer/deadline-timer.component';
import { MockApiInterceptor } from './interceptors/mock-api.interceptor';
import { CommonModule } from '@angular/common';
import { CameraCoverageComponent } from './components/camera-coverage/camera-coverage.component';
import { FormsModule } from '@angular/forms';
import { MatTabsModule } from '@angular/material/tabs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [AppComponent, DeadlineTimerComponent, CameraCoverageComponent],
  imports: [BrowserModule, HttpClientModule, CommonModule, FormsModule, MatTabsModule, BrowserAnimationsModule],
  providers: [
    // Todo: MOCK API using interceptor
    // {
    //   provide: HTTP_INTERCEPTORS,
    //   useClass: MockApiInterceptor,
    //   multi: true
    // }
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
