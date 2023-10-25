import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { Routes, RouterModule } from '@angular/router'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { PropertyCardComponent } from "./property/property-card/property-card.component";
import { PropertyListComponent } from './property/property-list/property-list.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HousingService } from './services/housing.service';
import { PropertyAddComponent } from './property/property-add/property-add.component';
import { PropertyDetailComponent } from './property/property-detail/property-detail.component';
import { UserRegisterComponent } from './user/user-register/user-register.component';
import { UserLoginComponent } from './user/user-login/user-login.component';

const appRoutes: Routes = [
  {path: '', component: PropertyListComponent},
  {path: 'detail-property/:id', component: PropertyDetailComponent},
  {path: 'rent-property', component: PropertyListComponent},
  {path: 'add-property', component: PropertyAddComponent},
  {path: 'user-register', component: UserRegisterComponent },
  {path: 'user-login', component: UserLoginComponent },
  {path: '**', component: PropertyListComponent }
]

@NgModule({
    declarations: [
        AppComponent,
        PropertyCardComponent,
        PropertyListComponent,
        NavBarComponent,
        PropertyAddComponent,
        PropertyDetailComponent,
        UserRegisterComponent,
        UserLoginComponent
   ],
    providers: [
      HousingService
    ],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        HttpClientModule,
        ReactiveFormsModule,
        RouterModule.forRoot(appRoutes),
        FormsModule
    ]
})
export class AppModule { }
