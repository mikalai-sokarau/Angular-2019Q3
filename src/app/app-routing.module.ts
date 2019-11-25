import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CoursesComponent } from './courses/courses.component';
import { AddCourseComponent } from './courses/components/add-course/add-course.component';

const routes: Routes = [
  { path: 'courses', component: CoursesComponent, pathMatch: 'full' },
  { path: 'courses/add', component: AddCourseComponent, pathMatch: 'full' },
  { path: '**', component: LoginComponent, pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
