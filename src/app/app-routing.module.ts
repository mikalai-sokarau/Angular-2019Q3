import { LoginComponent } from './pages/login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CoursesComponent } from './pages/courses/courses.component';
import { AddCourseComponent } from './pages/courses/components/add-course/add-course.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { EditCourseComponent } from './pages/courses/components/edit-course/edit-course.component';
import { AuthGuard } from './core/guards/auth-guard.guard';

const routes: Routes = [
  { path: '', redirectTo: '/courses', pathMatch: 'full' },
  { path: 'courses', component: CoursesComponent, pathMatch: 'full', canActivate: [AuthGuard] },
  { path: 'courses/new', component: AddCourseComponent, pathMatch: 'full', canActivate: [AuthGuard] },
  { path: 'courses/:id', component: EditCourseComponent, pathMatch: 'full', canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent, pathMatch: 'full' },
  { path: '**', component: NotFoundComponent, pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
