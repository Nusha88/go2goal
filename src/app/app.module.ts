import {BrowserModule, Title} from '@angular/platform-browser';
import { NgModule } from '@angular/core';

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
import {TodoDataService} from './services/todo-data.service';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { UserComponent } from './user/user.component';
import { SubmittingComponent } from './core/forms/submitting.component';
import {UserFormService} from './services/user-form.service';
import { FooterComponent } from './footer/footer.component';

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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [
    Title,
    UserService,
    LoginService,
    TodoDataService,
    UserFormService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
