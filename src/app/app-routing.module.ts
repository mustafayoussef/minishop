import { AutoLoginGuard } from './core/guards/auto-login.guard';
import { LandingComponent } from './pages/landing/landing.component';
import { AdminAuthGuard } from './core/guards/admin-auth.guard';
import { AuthGuard } from './core/guards/auth.guard';
import { LoginComponent } from './pages/login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'landing', pathMatch: 'full' },
  {path:'landing',component:LandingComponent,canActivate:[AutoLoginGuard]},
  { path: 'login', component: LoginComponent,canActivate:[AutoLoginGuard] },
  {
    path: 'home',
    loadChildren: () =>
      import('./pages/user/user.module').then((module) => module.UserModule),
      canActivate:[AuthGuard]
  },
  {
    path: 'admin',
    loadChildren: () =>
      import('./pages/admin/admin.module').then((module) => module.AdminModule),
      canActivate:[AdminAuthGuard]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
