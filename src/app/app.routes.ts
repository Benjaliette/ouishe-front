import { Routes } from '@angular/router';
import { LandingPageComponent } from '@/app/landing-page/landing-page.component';

export const routes: Routes = [
  {
    path: '',
    component: LandingPageComponent
  },
  {
    path: 'login',
    loadComponent() {
      return import('@/app/auth-page/auth-page.component').then(m => m.AuthPageComponent);
    },
  }
];
