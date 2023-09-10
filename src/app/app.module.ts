import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ThemeServiceService } from './services/theme-service.service';
import { DecimalPipe } from '@angular/common';
import { TemplateModule } from './template/template.module';
import { PagesModule } from './pages/pages.module';
import {MatDialogModule} from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DialogImagenes } from './pages/portfolio/portfolio.component';



@NgModule({
  declarations: [AppComponent,DialogImagenes],
  imports: [BrowserAnimationsModule,MatDialogModule,BrowserModule, AppRoutingModule, TemplateModule, PagesModule],
  providers: [ThemeServiceService, DecimalPipe],
  bootstrap: [AppComponent],
})
export class AppModule {}
