import {BrowserModule, Title} from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { Ng2SearchPipeModule } from 'ng2-search-filter';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import {UserService} from './services/user.service';
import {LoginService} from './services/login.service';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { TodosComponent } from './todos/todos.component';
import { NotebookComponent } from './notebook/notebook.component';
import { PostsComponent } from './posts/posts.component';
import { GoalsComponent } from './goals/goals.component';
import { GoalOfLifeComponent } from './goals/goal-of-life/goal-of-life.component';
import { GoalOfWeekComponent } from './goals/goal-of-week/goal-of-week.component';
import { GoalOfYearComponent } from './goals/goal-of-year/goal-of-year.component';
import { GoalOfMonthComponent } from './goals/goal-of-month/goal-of-month.component';
// import {TodoDataService} from './services/todo-data.service';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { UserComponent } from './user/user.component';
import { SubmittingComponent } from './core/forms/submitting.component';
import { FooterComponent } from './footer/footer.component';
import { FirstLevelStepComponent } from './goals/goal-of-life/first-level-step/first-level-step.component';
import { MainPageComponent } from './main-page/main-page.component';
import { MatFormFieldModule } from '@angular/material';
import { MatInputModule } from '@angular/material';
import { MatNativeDateModule} from '@angular/material';
import {MatTabsModule} from '@angular/material/tabs';
import {MatIconModule} from '@angular/material/icon';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatDialog, MatDialogModule} from '@angular/material';
import {OverlayModule} from '@angular/cdk/overlay';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {TruncatePipe} from './pipes/truncate-pipe';
import { ReviewsComponent } from './reviews/reviews.component';
import { ContactComponent } from './contact/contact.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomePageComponent,
    LoginComponent,
    RegisterComponent,
    HeaderComponent,
    MainComponent,
    TodosComponent,
    NotebookComponent,
    PostsComponent,
    GoalsComponent,
    GoalOfLifeComponent,
    GoalOfWeekComponent,
    GoalOfYearComponent,
    GoalOfMonthComponent,
    UserProfileComponent,
    UserComponent,
    SubmittingComponent,
    FooterComponent,
    FirstLevelStepComponent,
    MainPageComponent,
    TruncatePipe,
    ReviewsComponent,
    ContactComponent,
    ForgotPasswordComponent,
    ResetPasswordComponent,
  ],
  imports: [
    NgbModule.forRoot(),
    BrowserModule,
    Ng2SearchPipeModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    OverlayModule,
    MatDialogModule,
    MatIconModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatFormFieldModule,
    MatInputModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatTabsModule
  ],
  providers: [
    Title,
    UserService,
    LoginService,
    // TodoDataService,
    MatDialog,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
