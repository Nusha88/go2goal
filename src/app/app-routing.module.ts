import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {WelcomePageComponent} from './welcome-page/welcome-page.component';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {MainComponent} from './main/main.component';
import {TodosComponent} from './todos/todos.component';
import {NotebookComponent} from './notebook/notebook.component';
import {PostsComponent} from './posts/posts.component';
import {GoalsComponent} from './goals/goals.component';
import {GoalOfLifeComponent} from './goals/goal-of-life/goal-of-life.component';
import {GoalOfYearComponent} from './goals/goal-of-year/goal-of-year.component';
import {GoalOfMonthComponent} from './goals/goal-of-month/goal-of-month.component';
import {GoalOfWeekComponent} from './goals/goal-of-week/goal-of-week.component';
import {MainPageComponent} from './main-page/main-page.component';
import {UserProfileComponent} from './user-profile/user-profile.component';
import {ReviewsComponent} from './reviews/reviews.component';
import {ContactComponent} from './contact/contact.component';
import {ForgotPasswordComponent} from './forgot-password/forgot-password.component';
import {ResetPasswordComponent} from './reset-password/reset-password.component';

const routes: Routes = [
  {
    path: 'welcome',
    component: WelcomePageComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path: 'reviews',
    component: ReviewsComponent,
  },
  {
    path: 'contact-us',
    component: ContactComponent,
  },
  {
    path: 'forgot-password',
    component: ForgotPasswordComponent,
  },
  {
    path: 'reset-password',
    component: ResetPasswordComponent,
    children: [
      {
        path: ':token', component: ResetPasswordComponent
      }
    ]
  },
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
      },
      {
        path: 'profile',
        component: UserProfileComponent,
      },
      {
        path: 'todos',
        component: TodosComponent,
      },
      {
        path: 'notes',
        component: NotebookComponent,
      },
      {
        path: 'posts',
        component: PostsComponent,
      },
      {
        path: 'goals',
        component: GoalsComponent,
        children: [
          {
            path: '',
            pathMatch: 'full',
            redirectTo: 'goal-of-life'
          },
          {
            path: 'goal-of-life',
            component: GoalOfLifeComponent
          },
          {
            path: 'goals-of-year',
            component: GoalOfYearComponent
          },
          {
            path: 'goals-of-month',
            component: GoalOfMonthComponent
          },
          {
            path: 'goals-of-week',
            component: GoalOfWeekComponent
          },
        ]
      },
      {
        path: 'home',
        component: MainPageComponent
      },
    ]
  },
  {path: '**', redirectTo: '/login'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
