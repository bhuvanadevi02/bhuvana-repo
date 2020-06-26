import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';
import { CategoryComponent } from './category/category.component';
import { SubjectComponent } from './subject/subject.component';
import { ApprovalComponent } from './approval/approval.component';
import { ResultComponent } from './result/result.component';
import { ReportComponent } from './report/report.component';

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    SigninComponent,
    CategoryComponent,
    SubjectComponent,
    ApprovalComponent,
    ResultComponent,
    ReportComponent,

  ],
  imports: [
    BrowserModule,
    ChartsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
