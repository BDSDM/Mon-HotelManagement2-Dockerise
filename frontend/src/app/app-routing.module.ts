import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LayoutComponent } from './core/layout/layout.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomepageComponent } from './homepage/homepage.component';
import { RoomDialogComponent } from './room-dialog/room-dialog.component';
import { RoomsComponent } from './rooms/rooms.component';
import { ConfirmResetPasswordComponent } from './confirm-reset-password/confirm-reset-password.component';
import { DashboardGuard } from './core/guards/dashboard.guard';
// Tu n'as pas besoin d'importer LoginComponent ici car il est utilisé uniquement en popup

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: '', component: HomeComponent },
      {
        path: 'dashboard',
        component: DashboardComponent,
        canActivate: [DashboardGuard],
      },
      { path: 'homepage', component: HomepageComponent },
      {
        path: 'rooms',
        component: RoomsComponent,
        canActivate: [DashboardGuard],
      },
      { path: 'reset-password', component: ConfirmResetPasswordComponent },
      // Ajoute ici d'autres pages comme :
      // { path: 'contact', component: ContactComponent },
      // { path: 'services', component: ServicesComponent },
    ],
  },
  // Optionnel : route pour les chemins inconnus (404)
  { path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
