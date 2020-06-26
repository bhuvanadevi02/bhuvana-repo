import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';
import { CategoryComponent } from './category/category.component';
import { Subject } from 'rxjs';
import { SubjectComponent } from './subject/subject.component';
import { ApprovalComponent } from './approval/approval.component';
import { ResultComponent } from './result/result.component';
import { ReportComponent } from './report/report.component';


const routes: Routes = [
  { path: '', redirectTo: '/signup', pathMatch: 'full' },
  { path: 'signup', component: SignupComponent },
  { path: 'signin', component: SigninComponent },
  { path: 'category', component: CategoryComponent },
  { path: 'subject', component: SubjectComponent },
  { path: 'approval', component: ApprovalComponent },
  { path: 'result', component: ResultComponent },
  { path: 'report', component: ReportComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
