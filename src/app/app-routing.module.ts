import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminPanelComponent } from './components/admin-panel/admin-panel.component';
import { NewVisitorComponent } from './components/new-visitor/new-visitor.component';
import { HeaderComponent } from './components/admin-panel/header/header.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
import { AddGroupComponent } from './components/admin-panel/add-group/add-group.component';
import { ViewGroupComponent} from './components/admin-panel/view-group/view-group.component';
import { AddSubjectComponent } from './components/admin-panel/add-subject/add-subject.component';
import { PaymentHistoryComponent } from './components/admin-panel/payment-history/payment-history.component';
import { ResultComponent } from './components/admin-panel/result/result.component';
import { FreeUsersComponent } from './components/admin-panel/view-users/free-users/free-users.component';
import { PaidUsersComponent } from './components/admin-panel/view-users/paid-users/paid-users.component';
import { LoginComponent } from './components/user-panel/login/login.component';
import { SignupComponent } from './components/user-panel/signup/signup.component';
import { TestPageComponent } from './components/user-panel/test-page/test-page.component';
import { UserHeaderComponent } from './components/user-panel/user-header/user-header.component';
import { UserPanelComponent } from './components/user-panel/user-panel.component';
import { DashboardComponent } from './components/user-panel/dashboard/dashboard.component';
import { combineLatest } from 'rxjs';
import { componentNeedsResolution } from '@angular/core/src/metadata/resource_loading';
import { MypackageComponent } from './components/user-panel/mypackage/mypackage.component';
import { ResultSheetComponent } from './components/result-sheet/result-sheet.component';
import { ViewAllComponent } from './components/admin-panel/view-all/view-all.component';


const routes: Routes = [
  { path: 'admin', component: AdminPanelComponent },
  { path: 'visitor', component: NewVisitorComponent },
  { path: 'user', component: UserPanelComponent},
  { path: 'header', component: HeaderComponent },
  { path: 'addgroup', component: AddGroupComponent },
  { path: 'viewgroup', component: ViewGroupComponent},
  { path: 'addsubject', component: AddSubjectComponent},
  { path: 'payment-history', component: PaymentHistoryComponent },
  { path: 'result', component: ResultComponent},
  { path: 'resultsheet', component: ResultSheetComponent},
  { path: 'free-users', component: FreeUsersComponent},
  { path: 'paid-users', component: PaidUsersComponent},
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'testpage', component: TestPageComponent },
  { path: 'userheader', component: UserHeaderComponent},
  { path: 'dashboard', component: DashboardComponent},
  { path: 'mypackage', component: MypackageComponent},
  { path: 'view-test/:_id', component: MypackageComponent},
  { path: 'viewall', component: ViewAllComponent},


  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '**', component: PagenotfoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports:[
    RouterModule,
  ]
})
export class AppRoutingModule {
  
}
