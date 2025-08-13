import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import {
  MatDialog,
  MatDialogModule,
  MatDialogRef,
} from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatNativeDateModule, MatOptionModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './auth/login/login.component';
import { ResetRequestPasswordComponent } from './auth/reset-request-password/reset-request-password.component';
import { RegisterComponent } from './auth/register/register.component';
import { MatCardModule } from '@angular/material/card';
import { HomepageComponent } from './homepage/homepage.component';
import { BookingDialogComponent } from './booking-dialog/booking-dialog.component';
import { TokenInterceptor } from './core/interceptors/token.interceptor';
import { RoomsComponent } from './rooms/rooms.component';
import { RoomDialogComponent } from './room-dialog/room-dialog.component';
import { MatChipsModule } from '@angular/material/chips';
import { UpdateUserDialogComponent } from './update-user-dialog/update-user-dialog.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { RequestResetPasswordComponent } from './request-reset-password/request-reset-password.component';
import { ConfirmResetPasswordComponent } from './confirm-reset-password/confirm-reset-password.component';
import { AdminRequiredComponent } from './admin-required/admin-required.component';
import { RefreshTokenPopupComponent } from './refresh-token-popup/refresh-token-popup.component';
import { AdminpowerComponent } from './adminpower/adminpower.component';
import { ConfirmLogoutDialogComponent } from './confirm-logout-dialog/confirm-logout-dialog.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    DashboardComponent,
    ResetRequestPasswordComponent,
    RegisterComponent,
    HomepageComponent,
    BookingDialogComponent,
    RoomsComponent,
    RoomDialogComponent,
    UpdateUserDialogComponent,
    UpdateUserDialogComponent,
    RequestResetPasswordComponent,
    ConfirmResetPasswordComponent,
    AdminRequiredComponent,
    RefreshTokenPopupComponent,
    AdminpowerComponent,
    ConfirmLogoutDialogComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatTableModule,
    MatDialogModule,
    MatSnackBarModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatSelectModule,
    MatButtonModule,
    MatOptionModule,
    MatIconModule,
    MatSlideToggleModule,
    MatCardModule,
    FormsModule,
    MatChipsModule,
    MatProgressSpinnerModule,
    MatPaginatorModule,
    MatProgressBarModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
