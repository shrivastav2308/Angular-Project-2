import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { HeaderComponent } from './header/header.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RegisterUserComponent } from './register-user/register-user.component';
import { HttpClientModule } from '@angular/common/http';
import { LoadingSpinnerComponent } from './loading-spinner/loading-spinner.component';
import { SettingsComponent } from './settings/settings.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideDatabase,getDatabase } from '@angular/fire/database';
import { ErrorPageComponent } from './error-page/error-page.component';
import { SearchPipe } from './Pipes/search.pipe';
import { SideNavComponent } from './side-nav/side-nav.component';
import { ProductsService } from './products.service';
import { ManageProductsComponent } from './manage-products/manage-products.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UserLoginComponent,
    HeaderComponent,
    RegisterUserComponent,
    LoadingSpinnerComponent,
    SettingsComponent,
    ErrorPageComponent,
    SearchPipe,
    SideNavComponent,
    ManageProductsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideDatabase(() => getDatabase()), 
  ],
  providers: [ProductsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
