import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { AcercaDeComponent } from './components/acerca-de/acerca-de.component';
import { ExpComponent } from './components/exp/exp.component';
import { EduComponent } from './components/edu/edu.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ProyectsComponent } from './components/proyects/proyects.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { FooterComponent } from './components/footer/footer.component';
import {HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { FormsModule } from '@angular/forms';
import { NgxPageScrollCoreModule, PageScrollService } from 'ngx-page-scroll-core';
import { FloatingButtonComponent } from './components/floating-button/floating-button/floating-button.component';
import { LoaderComponent } from './components/loader/loader.component';
import { LoaderInterceptorInterceptor } from './service/loader-interceptor/loader-interceptor.interceptor';
import { LoaderService } from './service/loader/loader.service';
import { NavComponent } from './components/header/nav/nav/nav.component';
import { PerfilComponent } from './components/acerca-de/perfil/perfil/perfil.component';
import { DescripcionComponent } from './components/acerca-de/descripcion/descripcion/descripcion.component';
import { TarjServiciosComponent } from './components/tarjetasServicios/tarj-servicios/tarj-servicios.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AcercaDeComponent,
    ExpComponent,
    EduComponent,
    SkillsComponent,
    ProyectsComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent,
    FloatingButtonComponent,
    LoaderComponent,
    NavComponent,
    PerfilComponent,
    DescripcionComponent,
    TarjServiciosComponent,
    
    
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgCircleProgressModule.forRoot({}),
    HttpClientModule,
    FormsModule,
    NgxPageScrollCoreModule
    
  ],
  providers: [PageScrollService,LoaderService,
    { provide: HTTP_INTERCEPTORS, useClass: LoaderInterceptorInterceptor, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
