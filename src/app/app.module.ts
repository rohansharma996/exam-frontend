import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { NewVisitorComponent } from './components/new-visitor/new-visitor.component';
import { AdminPanelComponent } from './components/admin-panel/admin-panel.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
import { AddGroupComponent } from './components/admin-panel/add-group/add-group.component';
import { ViewGroupComponent } from './components/admin-panel/view-group/view-group.component';
import { AddSubjectComponent } from './components/admin-panel/add-subject/add-subject.component';
import { PaymentHistoryComponent } from './components/admin-panel/payment-history/payment-history.component';
import { ResultComponent } from './components/admin-panel/result/result.component';
import { ViewUsersComponent } from './components/admin-panel/view-users/view-users.component';
import { HeaderComponent } from './components/admin-panel/header/header.component';
import { PaidUsersComponent } from './components/admin-panel/view-users/paid-users/paid-users.component';
import { FreeUsersComponent } from './components/admin-panel/view-users/free-users/free-users.component';
import { ResultSheetComponent } from './components/result-sheet/result-sheet.component';
import { UserPanelComponent } from './components/user-panel/user-panel.component';
import { SignupComponent } from './components/user-panel/signup/signup.component';
import { DashboardComponent } from './components/user-panel/dashboard/dashboard.component';
import { TestPageComponent } from './components/user-panel/test-page/test-page.component';
import { UserHeaderComponent } from './components/user-panel/user-header/user-header.component';
import { LoginComponent } from './components/user-panel/login/login.component';
import { MypackageComponent } from './components/user-panel/mypackage/mypackage.component';
import { AuthService } from './services/auth.service';
import { TestgroupService } from './services/testgroup.service';
import { LocalService } from './services/local.service';
import { ViewTestComponent } from './components/admin-panel/view-test/view-test.component';
import { ViewAllComponent } from './components/admin-panel/view-all/view-all.component';

@NgModule({
  declarations: [
    AppComponent,
    NewVisitorComponent,
    AdminPanelComponent,
    PagenotfoundComponent,
    AddGroupComponent,
    ViewGroupComponent,
    AddSubjectComponent,
    PaymentHistoryComponent,
    ResultComponent,
    ViewUsersComponent,
    HeaderComponent,
    PaidUsersComponent,
    FreeUsersComponent,
    ResultSheetComponent,
    UserPanelComponent,
    SignupComponent,
    DashboardComponent,
    TestPageComponent,
    UserHeaderComponent,
    LoginComponent,
    MypackageComponent,
    ViewTestComponent,
    ViewAllComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    AuthService,
    TestgroupService,
    LocalService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
