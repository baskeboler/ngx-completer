import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { NgxCompleterModule } from './modules/ngx-completer/ngx-completer.module';
import { FormsModule } from '@angular/forms';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';


@NgModule({ declarations: [
        AppComponent
    ],
    bootstrap: [AppComponent], imports: [FormsModule,
        BrowserModule,
        NgxCompleterModule], providers: [provideHttpClient(withInterceptorsFromDi())] })
export class AppModule { }
