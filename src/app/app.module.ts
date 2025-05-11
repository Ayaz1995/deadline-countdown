import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { DeadlineTimerComponent } from './components/deadline-timer/deadline-timer.component';
import { MockApiInterceptor } from './interceptors/mock-api.interceptor';
@NgModule({
  declarations: [AppComponent, DeadlineTimerComponent],
  imports: [BrowserModule, HttpClientModule],
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
