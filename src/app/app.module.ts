import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CategoriesComponent } from './categories/categories.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { ServiceDetailsComponent } from './service-details/service-details.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CardComponent } from './card/card.component';
import { ServicesByCategoriesComponent } from './services-by-categories/services-by-categories.component';
import { LoginComponent } from './login/login.component';
import { ServiceRegistrationComponent } from './service-registration/service-registration.component';
import { BannerComponent } from './banner/banner.component';
import { ServicesComponent } from './services/services.component';
import { PaginationComponent } from './pagination/pagination.component';
import {NgxPaginationModule} from 'ngx-pagination';
import { InfiniteScrollComponent } from './infinite-scroll/infinite-scroll.component';
import {HttpClientModule} from '@angular/common/http';

const appRoutes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'pagination', component : PaginationComponent},
  { path: 'scroll', component : InfiniteScrollComponent},
  { path: 'categories/:id', component: ServicesByCategoriesComponent,
    children: [
      {path: '' , outlet: 'services-by-category', component: ServicesComponent},
      {path: ':serviceid', outlet: 'services-by-category', component: ServiceDetailsComponent}
    ]
  },
  { path: '**', redirectTo: ''},
];

@NgModule({
  declarations: [
    AppComponent,
    CategoriesComponent,
    LandingPageComponent,
    ServiceDetailsComponent,
    HeaderComponent,
    FooterComponent,
    CardComponent,
    ServicesByCategoriesComponent,
    LoginComponent,
    ServiceRegistrationComponent,
    BannerComponent,
    ServicesComponent,
    PaginationComponent,
    InfiniteScrollComponent
  ],
  imports: [
    BrowserModule,
    NgxPaginationModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
