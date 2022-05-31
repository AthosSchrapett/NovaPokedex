import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';

import { AppRoutes } from './app.routes';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AdminGuard } from './components/admin/Guards/admin.guard';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    RouterModule.forRoot(AppRoutes),
    BrowserAnimationsModule,
  ],
  providers: [AdminGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
