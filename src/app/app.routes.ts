import { Routes } from '@angular/router';

export const routes: Routes = [
  {path:'', pathMatch:'full',redirectTo:'courses'},
  // ROTA DE LAZY LOADING
  {path:'courses',
loadChildren:() => import('./courses/courses.module').then(m => m.CoursesModule)}
];
